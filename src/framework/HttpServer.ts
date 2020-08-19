import { AwaitableEventEmitter } from '@bitr/awaitable-event-emitter';
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors';
import express, { Express, Request, RequestHandler, Response } from "express";
import { resolve } from 'path';
import { Singleton } from '../injector';
import type { IApplicationSettings, IController, IHttpServerErrorHandler, IHttpServerEventEmitter, PathArgument, IHttpServer } from "../interfaces";
import { Logger } from '../services/Logger';
import type { Type } from '../types';
import { getTsConfigFile } from '../utils/getTsConfigFile';
import { createUrlFrom } from '../utils/http';
import { Application } from './Application';
import { SettingsService } from './Settings';

@Singleton()
export class HttpServerProvider<T extends Express = Express> implements IHttpServer {
  private settings: IApplicationSettings['httpServer']
  private logger: Logger
  public controllers: Map<string, Type<any>> = new Map()
  public engine: T = mockServerInstance
  public events: IHttpServerEventEmitter

  constructor(public app: Application<any>) {
    this.settings = app.container
      .resolve(SettingsService)
      .get('httpServer');

    this.logger = app.container
      .resolve(Logger)
      .For(this)

    this.events = new AwaitableEventEmitter()

    this.events.once(HttpServerEvent.ON_LOAD_SERVICES, this.onLoadServices)
    this.events.once(HttpServerEvent.ON_START_HTTP_SERVER, this.onServerStarted)
  }

  //  -- 1. MIDDLEWARE
  public use(mountPoint: string | RegExp | (string | RegExp)[], ...handlers: RequestHandler[]) {
    this.events.once(HttpServerEvent.ON_LOAD_MIDDLEWARE, () => {
      this.engine.use(mountPoint, ...handlers)
    })
    return this
  }

  //  -- 2. ROUTES
  public get(path: PathArgument, ...handlers: RequestHandler[]) {
    this.events.once(HttpServerEvent.ON_LOAD_ROUTES, () => {
      this.engine.get(path, ...handlers)
    })
  }
  public post(path: PathArgument, ...handlers: RequestHandler[]) {
    this.events.once(HttpServerEvent.ON_LOAD_ROUTES, () => {
      this.engine.post(path, ...handlers)
    })
  }
  public patch(path: PathArgument, ...handlers: RequestHandler[]) {
    this.events.once(HttpServerEvent.ON_LOAD_ROUTES, () => {
      this.engine.patch(path, ...handlers)
    })
  }
  public put(path: PathArgument, ...handlers: RequestHandler[]) {
    this.events.once(HttpServerEvent.ON_LOAD_ROUTES, () => {
      this.engine.put(path, ...handlers)
    })
  }
  public delete(path: PathArgument, ...handlers: RequestHandler[]) {
    this.events.once(HttpServerEvent.ON_LOAD_ROUTES, () => {
      this.engine.delete(path, ...handlers)
    })
  }

  //  -- 3. SERVICES
  public registerServices(...services: ((server: this) => void)[]): this {
    services.forEach(async service => {
      this.events.once(HttpServerEvent.ON_LOAD_SERVICES, () => service(this))
    })
    return this
  }

  //  -- 4. ERRORS
  public useErrorHandler<Err = any>(
    errorHandler: IHttpServerErrorHandler<Err>,
  ): this {
    this.events.once(HttpServerEvent.ON_LOAD_ERROR_HANDLERS, () => {
      this.logger.info(`Registering Error Handler: ${errorHandler.name}`)
      this.engine.use(errorHandler)
    })
    return this
  }

  //  -- 5. NOT FOUND / 404 / DEFAULT
  public registerDefaultErrorHandlingMiddleware<Err = any>(
    errorHandler: IHttpServerErrorHandler<Err>,
  ): this {
    this.events.once(HttpServerEvent.ON_LOAD_404_NOT_FOUND_HANDLER, () => {
      this.logger.info(`Registering Default Error Handler: ${errorHandler.name}`)
      this.engine.use(errorHandler)
    })
    return this
  }

  // --

  public async listen(port?: any) {
    this.logger.debug('emitting:', HttpServerEvent.ON_LOAD_MIDDLEWARE)
    await this.events.emitSerial(HttpServerEvent.ON_LOAD_MIDDLEWARE)

    this.logger.debug('emitting:', HttpServerEvent.ON_LOAD_SERVICES)
    await this.events.emitSerial(HttpServerEvent.ON_LOAD_SERVICES)

    this.logger.debug('emitting:', HttpServerEvent.ON_LOAD_ROUTES)
    await this.events.emitSerial(HttpServerEvent.ON_LOAD_ROUTES)

    this.logger.debug('emitting:', HttpServerEvent.ON_LOAD_ERROR_HANDLERS)
    await this.events.emitSerial(HttpServerEvent.ON_LOAD_ERROR_HANDLERS)

    this.logger.debug('emitting:', HttpServerEvent.ON_LOAD_404_NOT_FOUND_HANDLER)
    await this.events.emitSerial(HttpServerEvent.ON_LOAD_404_NOT_FOUND_HANDLER)


    this.engine.listen(port ?? this.settings.port, async () => {
      await this.events.emitSerial(HttpServerEvent.ON_START_HTTP_SERVER)
      this.logger.info('Server listening at', this.formatServerUrl())
    })
  }

  public onLoadServices(): void { }
  public onServerStarted(): void { }

  // --

  public useControllers(dirname?: string) {
    this.events.once(HttpServerEvent.ON_LOAD_SERVICES, () => {
      const glob = require('fast-glob') as typeof import('fast-glob');
      const path = require('path') as typeof import('path');
      const cwd = process.cwd()
      const tsconfig = getTsConfigFile(cwd)

      const settings = this.getControllerSettings()

      const rootDir = tsconfig.options.rootDir || cwd;
      const controllerDir = dirname || settings.dirname;
      this.logger.info("Using Controllers from dir:", controllerDir);

      const relPath = path.join(rootDir, controllerDir)

      glob.sync(relPath + '/**/*.ts').forEach((file: string) => {
        const dep = require(path.resolve(file));

        if (!dep) return

        const cName = Object
          .keys(dep)
          .find(name => name.endsWith(settings.postfix));

        if (!cName) return

        const controller: Type<IController<any>> = dep[cName]
        const endpoint = cName
          .slice(0, cName.indexOf(settings.postfix)) // this may need to be changed..
          .toLowerCase()

        if (!endpoint) return

        this.app.container.addSingleton(controller, controller)
        this.controllers.set('/' + endpoint, controller)
      });
    })

    return this
  }

  private getControllerSettings() {
    return this.app.container
      .resolve(SettingsService)
      .get('controllers');
  }

  public formatServerUrl() {
    const { host, https, port } = this.settings
    return createUrlFrom(host, port, { https })
  }

  // --

  public serveStaticFiles(): this {
    this.events.on(HttpServerEvent.ON_LOAD_MIDDLEWARE, () => {
      const settings = this.settings.serveStaticFileOptions;
      const { spaFallback, cors: corsOpts, ..._options } = settings;
      const path = this.settings.spaFallbackPath;
      this.engine.use(cors(corsOpts), express.static(path, _options));
      this.logger.info(`Serving static files from dir: ${path}`);
      return this;
    })
    return this
  }

  public useSpaFallback() {
    this.events.on(HttpServerEvent.ON_LOAD_404_NOT_FOUND_HANDLER, () => {
      const { spaFallbackPath } = this.settings;

      const htmlFileName = 'index.html';

      this.logger.info('Registering SPA fallback')
      // All GET request handled by INDEX file
      this.engine.get('*', function (req: Request, res: Response) {
        res.sendFile(resolve(spaFallbackPath, htmlFileName));
      });
    })
    return this
  }

  public useHealthCheck(
    path: string = "/health",
  ) {
    this.events.on(HttpServerEvent.ON_LOAD_MIDDLEWARE, () => {
      this.get(path, (req, res) => {
        res.send({
          ServerId: `${process.pid}::${this.settings.https ? 'https' : 'http'}://${this.settings.host}:${this.settings.port}/`, Status: "OK"
        });
      });
      this.logger.info("Health checks enabled @", path);
    })
    return this
  }
  public parseJsonBody(
    options?: bodyParser.OptionsJson,
  ): this {
    this.events.on(HttpServerEvent.ON_LOAD_MIDDLEWARE, () => {
      this.engine.use(bodyParser.json(options));
      this.logger.info("JSON body parsing enabled");
    })
    return this
  }
  public parseCookies(
    secret?: string | string[],
    options?: cookieParser.CookieParseOptions,
  ): this {
    this.events.on(HttpServerEvent.ON_LOAD_MIDDLEWARE, () => {
      this.engine.use(cookieParser(secret, options));
      this.logger.debug("Cookie parsing enabled");
    })
    return this
  }
}

const mockServerInstance: any = { get: () => { }, listen: () => { } }

export enum HttpServerEvent {
  /**
   * -- # 1
   */
  ON_LOAD_MIDDLEWARE = 'ON_LOAD_MIDDLEWARE',
  /**
   * -- # 2
   */
  ON_LOAD_SERVICES = 'ON_LOAD_SERVICES',
  /**
   * -- # 3
   */
  ON_LOAD_ROUTES = 'ON_LOAD_ROUTES',
  /**
   * -- # 4
   */
  ON_LOAD_ERROR_HANDLERS = 'ON_LOAD_ERROR_HANDLERS',
  /**
   * -- # 5
   */
  ON_LOAD_404_NOT_FOUND_HANDLER = 'ON_LOAD_404_NOT_FOUND_HANDLER',
  /**
   * -- # 6
   */
  ON_START_HTTP_SERVER = 'ON_START_HTTP_SERVER',
}

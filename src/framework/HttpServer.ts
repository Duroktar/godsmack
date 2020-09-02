import { AwaitableEventEmitter } from '@bitr/awaitable-event-emitter';
import type bodyParser from "body-parser";
import type cookieParser from "cookie-parser";
import express, { Express, Request, RequestHandler, Response } from "express";
import jwt from 'express-jwt';
import { resolve } from 'path';
import { Singleton } from '../injector';
import type { IApplicationSettings, IController, IHttpServer, IHttpServerErrorHandler, IHttpServerEventEmitter, PathArgument } from "../interfaces";
import { LogFactory } from '../services/Logger';
import type { Type } from '../types';
import { getTsConfigFile } from '../utils/getTsConfigFile';
import { createUrlFrom } from '../utils/http';
import { Application } from './Application';
import { SettingsService } from './Settings';
import { Server } from 'http';
import { ASSERT } from '../utils/assert';

@Singleton()
export class HttpServerProvider<T extends Express = Express> implements IHttpServer {
  private config: IApplicationSettings['framework']
  private settings: IApplicationSettings['httpServer']
  private logger: LogFactory
  public controllers: Map<string, Type<any>> = new Map()
  public engine: T = mockServerInstance
  public server?: Server;
  public events: IHttpServerEventEmitter

  constructor(public app: Application<any>) {
    this.logger = app.container
      .resolve(LogFactory)
      .For(this);

    this.settings = app.container
      .resolve(SettingsService)
      .get('httpServer');

    this.config = app.container
      .resolve(SettingsService)
      .get('framework');

    this.events = new AwaitableEventEmitter();

    this.events.once(HttpServerEvent.ON_START_HTTP_SERVER, this.onServerStarted);
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
    this.logger.debug('emitting:', HttpServerEvent.ON_BEFORE_LOAD_MIDDLEWARE)
    await this.events.emitSerial(HttpServerEvent.ON_BEFORE_LOAD_MIDDLEWARE)

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


    return this.engine.listen(port ?? this.settings.port, async () => {
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

      const settings = this.getControllerSettings()

      const controllerDir = path.join(this.config.rootDir, dirname ?? settings.dirname)

      this.logger.info("Using Controllers from dir:", controllerDir);

      glob.sync(controllerDir + '/**/!(*.d){js,ts}').forEach((file: string) => {
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

  public useHelmet(): this {
    this.events.on(HttpServerEvent.ON_BEFORE_LOAD_MIDDLEWARE, async () => {
      const helmet = (await import('helmet')).default;
      this.engine.use(helmet(this.settings.helmetOptions))
    })
    return this
  }

  public serveStaticFiles(): this {
    this.events.on(HttpServerEvent.ON_LOAD_MIDDLEWARE, async () => {
      const settings = this.settings.serveStaticFileOptions;
      const { spaFallback, cors: corsOpts, ..._options } = settings;
      const path = this.settings.spaFallbackPath;
      const cors = (await import('cors')).default;
      this.engine.use(cors(corsOpts), express.static(path, _options));
      this.logger.info(`Serving static files from dir: ${path}`);
      return this;
    })
    return this
  }

  public useJwtExpress() {
    this.events.on(HttpServerEvent.ON_LOAD_MIDDLEWARE, () => {
      const jwtSettings = this.app.container.resolve(SettingsService);
      this.engine.use(jwt(jwtSettings.get('jwt')))
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
        const { host, port, https } = this.settings;
        const protocol = https ? 'https' : 'http';
        const serverId = `${protocol}://${host}:${port}/${process.pid}`;
        res.send({ ServerId: serverId, Status: "OK" });
      });
      this.logger.info("Health checks enabled @", path);
    })
    return this
  }

  public parseJsonBody(
    options?: bodyParser.OptionsJson,
  ): this {
    this.events.on(HttpServerEvent.ON_LOAD_MIDDLEWARE, async () => {
      const bodyParser = (await import('body-parser')).default;
      this.engine.use(bodyParser.json(options));
      this.logger.info("JSON body parsing enabled");
    })
    return this
  }
  public parseCookies(
    secret?: string | string[],
    options?: cookieParser.CookieParseOptions,
  ): this {
    this.events.on(HttpServerEvent.ON_LOAD_MIDDLEWARE, async () => {
      const cookieParser = (await import('cookie-parser')).default;
      this.engine.use(cookieParser(secret, options));
      this.logger.debug("Cookie parsing enabled");
    })
    return this
  }
}

const mockServerInstance: any = { get: () => { }, listen: () => { } }

export enum HttpServerEvent {
  ON_BEFORE_LOAD_MIDDLEWARE = 'ON_BEFORE_LOAD_MIDDLEWARE',
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

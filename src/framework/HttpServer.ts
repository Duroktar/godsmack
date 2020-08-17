import { Express, NextFunction, Request, RequestHandler, Response } from 'express'
import { Singleton } from '../injector'
import type { IApplicationService, IApplicationSettings, IController, IHttpServer, PathArgument } from "../interfaces"
import { Logger } from '../services/Logger'
import type { Type } from '../types'
import { getTsConfigFile } from '../utils/getTsConfigFile'
import { createUrlFrom } from '../utils/http'
import { Application } from './Application'
import { SettingsService } from './Settings'
import { IHttpServerErrorHandler } from '../interfaces/IHttpServerErrorHandler'

@Singleton()
export class HttpServerProvider<T extends Express = Express> implements IHttpServer {
  public controllers: Map<string, Type<any>> = new Map()
  public logger: Logger

  private settings: IApplicationSettings['httpServer']
  public engine: T = mockServerInstance

  constructor(public app: Application<any>) {
    this.settings = app.container
      .resolve(SettingsService)
      .get('httpServer');

    this.logger = app.container
      .resolve(Logger)
      .For(this)

  }

  public get(path: PathArgument, ...handlers: RequestHandler[]) {
    this.engine.get(path, ...handlers)
  }
  public post(path: PathArgument, ...handlers: RequestHandler[]) {
    this.engine.post(path, ...handlers)
  }
  public patch(path: PathArgument, ...handlers: RequestHandler[]) {
    this.engine.patch(path, ...handlers)
  }
  public put(path: PathArgument, ...handlers: RequestHandler[]) {
    this.engine.put(path, ...handlers)
  }
  public delete(path: PathArgument, ...handlers: RequestHandler[]) {
    this.engine.delete(path, ...handlers)
  }

  public registerServices(...services: IApplicationService[]): this {
    services.forEach((service) => service(this.app as any, this as any))
    return this
  }

  public mapExpressServer(...services: ((app: T) => void)[]): this {
    services.forEach(service => service(this.engine))
    return this
  }

  public registerErrorHandlingMiddleware<Err = any>(
    errorHandler: IHttpServerErrorHandler<Err>,
  ): this {
    this.logger.info('Registering Error Handler Middleware..')
    this.engine.use(errorHandler)
    return this
  }

  public listen(port?: any) {
    this.engine.listen(port ?? this.settings.port, this.onServerStarted)
  }

  public onServerStarted() {
    const url = this.formatServerUrl()
    this.logger.info('Server listening at', url)
  }

  public serveStaticFiles(...args: any[]) {
    return this
  }

  public use(
    mountPoint: string | RegExp | (string | RegExp)[],
    ...handlers: RequestHandler[]
  ) {
    this.engine.use(mountPoint, ...handlers)
    return this
  }

  public useControllers(dirname?: string) {
    const glob = require('glob');
    const path = require('path');
    const cwd = process.cwd()
    const tsconfig = getTsConfigFile(cwd)

    const settings = this.getControllerSettings()

    const rootDir = tsconfig.options.rootDir || cwd;
    const controllerDir = dirname || settings.dirname;

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

    return this
  }

  public formatServerUrl() {
    const { host, https, port } = this.settings
    return createUrlFrom(host, port, { https })
  }

  private getControllerSettings() {
    return this.app.container
      .resolve(SettingsService)
      .get('controllers');
  }

  public useHealthCheck(...any: any[]): this {
    throw new Error("Method not implemented.")
  }
  public parseJsonBody(...any: any[]): this {
    throw new Error("Method not implemented.")
  }
  public parseCookies(...any: any[]): this {
    throw new Error("Method not implemented.")
  }
}

const mockServerInstance: any = { get: () => { }, listen: () => { } }

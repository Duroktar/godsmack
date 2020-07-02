import createRouter from 'express/lib/router'
import { RequestHandler } from 'express'
import { Singleton } from '../injector'
import { Application } from './Application'
import { SettingsService } from './Settings'
import { Logger } from './services/Logger'
import { getTsConfigFile } from '../utils/getTsConfigFile'
import { createUrlFrom } from '../utils/http'
import type { Type } from '../types'
import type { IApplicationService, IHttpServer, IApplicationSettings, IController } from "../interfaces"

@Singleton()
export class HttpServerProvider implements IHttpServer {
  public logger: Logger
  public __server = mockServerInstance
  public controllers: Map<string, Type<any>> = new Map()
  public settings: IApplicationSettings['httpServer']

  constructor(public app: Application<any>) {
    this.settings = app.container
      .resolve(SettingsService)
      .get('httpServer');

    this.logger = app.container
      .resolve(Logger)
      .For(this)
  }

  public get(path: createRouter.PathArgument, ...handlers: createRouter.RequestHandler[]) {
    this.__server.get(path, ...handlers)
  }
  public post(path: createRouter.PathArgument, ...handlers: createRouter.RequestHandler[]) {
    this.__server.post(path, ...handlers)
  }
  public update(path: createRouter.PathArgument, ...handlers: createRouter.RequestHandler[]) {
    this.__server.update(path, ...handlers)
  }
  public patch(path: createRouter.PathArgument, ...handlers: createRouter.RequestHandler[]) {
    this.__server.patch(path, ...handlers)
  }
  public delete(path: createRouter.PathArgument, ...handlers: createRouter.RequestHandler[]) {
    this.__server.delete(path, ...handlers)
  }

  public registerServices(...services: IApplicationService[]): this {
    services.forEach((service) => service(this.app as any, this as any))
    return this
  }
  public listen() {
    this.__server.listen(this.settings.port, this.onServerStarted)
  }
  public onServerStarted() {
    const url = this.formatServerUrl()
    this.logger.info('Server listening at', url)
  }

  public use(
    mountPoint: string | RegExp | (string | RegExp)[],
    ...handlers: RequestHandler[]
  ) {
    this.__server.use(mountPoint, ...handlers)
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

      const klass: Type<IController<any>> = dep[cName]
      const endpoint = cName
        .slice(0, cName.indexOf(settings.postfix)) // this may need to be changed..
        .toLowerCase()

      if (!endpoint) return

      this.app.container.addSingleton(klass, klass)
      this.controllers.set('/' + endpoint, klass)
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
}

export class NullServer extends HttpServerProvider {
  public registerServices(...services: IApplicationService[]): this { return this }
}

const mockServerInstance: any = { get: () => { }, listen: () => { } }

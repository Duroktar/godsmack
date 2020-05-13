import createRouter from 'express/lib/router'
import { RequestHandler } from 'express'
import { Logger } from './services/Logger'
import { getTsConfigFile } from '../utils/getTsConfigFile'
import { Type } from '../types'
import { IApplicationService, IHttpServer, IConfigureServerApplication } from "../interfaces"
import { createUrlFrom } from '../utils/http'

const CONTROLLER = 'Controller'

export class HttpServerProvider<App extends IConfigureServerApplication<any> = any> implements IHttpServer {
  public readonly __server = mockServerInstance
  public port = 3000
  public host = 'localhost'
  public https = false
  public controllers: Map<string, Type<any>> = new Map()

  constructor(public readonly app: App) { }

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
  public listen(port?: number, host?: string) {
    if (port) this.port = port
    if (host) this.host = host
    this.__server.listen(this.port, this.onServerStarted)
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
  public useControllers(controllerDir: string = 'controllers') {
    const glob = require('glob');
    const path = require('path');
    const cwd = process.cwd()

    const tsconfig = getTsConfigFile(cwd)

    const relPath = path.join(tsconfig.options.rootDir || cwd, controllerDir)

    glob.sync(relPath + '/**/*.ts').forEach((file: string) => {
      const dep = require(path.resolve(file));

      if (!dep) return

      const cName = Object
        .keys(dep)
        .find(name => name.endsWith(CONTROLLER));

      if (!cName) return

      const klass = dep[cName]
      const endpoint = cName
        .slice(0, cName.indexOf(CONTROLLER)) // this may need to be changed..
        .toLowerCase()

      if (!endpoint) return

      this.app.container.addSingleton(klass, klass)
      this.controllers.set('/' + endpoint, klass)
    });

    return this
  }

  public get logger() {
    return this.app.container.resolve(Logger).For(this)
  }

  public formatServerUrl() {
    return createUrlFrom(this.host, this.port, { https: this.https })
  }
}

export class NullServer extends HttpServerProvider {
  public registerServices(...services: IApplicationService[]): this { return this }
}

const mockServerInstance: any = { get: () => { }, listen: () => { } }

import bodyParser from 'body-parser'
import createRouter from 'express/lib/router'
import express, { Request, Response, RequestHandler } from 'express'
import { Logger } from './services/Logger'
import { getTsConfigFile } from '../utils/getTsConfigFile'
import { Type } from '../types'
import { IApplication, IApplicationService, IController } from "../interfaces"

const CONTROLLER = 'Controller'

export class HttpServerProvider<App extends IApplication<any> = any> {
  public readonly __server = mockServerInstance
  public port = 3000
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

  /**
   * Used to register Application Services
   *
   * @param {...IApplicationService[]} services
   * @returns {this}
   * @memberof HttpServerProvider
   */
  public registerServices(...services: IApplicationService[]): this {
    services.forEach((service) => service(this.app as any, this as any))
    return this
  }
  /**
   * Starts the server
   *
   * @param {number} [port]
   * @memberof HttpServerProvider
   */
  public listen(port?: number) {
    if (port) this.port = port
    this.__server.listen(this.port, this.onServerStarted)
  }
  /**
   * Called when the Server is started
   *
   * @memberof HttpServerProvider
   */
  public onServerStarted = () => { }
  public use(mw: any) {
    this.__server.use(mw)
    return this
  }
  /**
   * Enables MVC style controllers. Looks in the controllers
   * directory by default for any valid controller classes
   * and automatically registers them with the DI container.
   *
   * @param {string} [controllerDir='controllers']
   * @returns
   * @memberof ExpressServer
   */
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
        .slice(0, cName.indexOf(CONTROLLER))
        .toLowerCase()

      if (!endpoint) return

      this.app.container.addSingleton(klass, klass)
      this.controllers.set('/' + endpoint, klass)
      // this.logger.info(`Registering controller: ${klass.name} @ ${endpoint}`)
    });

    return this
  }

  public get logger() {
    return this.app.container.resolve(Logger).For(this)
  }
}

export class ExpressServer<App extends IApplication<any> = any> extends HttpServerProvider<App> {
  public readonly __server: express.Server = express()

  public onServerStarted = () => {
    [...this.controllers.keys()].forEach(endpoint => {
      const klass: any = this.controllers.get(endpoint)
      if (!klass) return
      const logger = this.logger

      function makeHandler(handler: Function, key: 'query' | 'body'): RequestHandler {
        return (req: Request, res: Response) => {
          const data = (req as any)[key]
          try {
            const result = handler(data, { req, res })
            res.send(result)
          } catch (e) {
            logger.error(e)
            res.status(e.statusCode ?? 500)
            res.send({ err: e.message })
          }
        }
      }

      const instance: any = this.app.container.resolve<IController<any>>(klass);

      ['create', 'get', 'delete', 'patch', 'update'].forEach(act => {
        if (instance[act] != null) {
          this.logger.info('Setting up controller:', endpoint, 'method:', act)
          switch (act) {
            case 'create':
              this.post(endpoint, makeHandler(instance[act], 'body'));
              break;
            case 'get':
              this.get(endpoint, makeHandler(instance[act], 'query'));
              break;
            default:
              throw new Error('Controller Method not implemented')
          }
        }
      })
    })
  }

  /**
   * Used to add and configure Health Check middleware
   * to the Express server.
   *
   * @param {string} [path='/health']
   * @returns
   * @memberof ExpressServer
   */
  public useHealthCheck(path: string = '/health' /* , options?: any */) {
    this.get(path, (req, res) => {
      res.send({ 'ServerId': ExpressServer.name, 'Status': 'OK' })
    })
    this.logger.info('Health checks enabled @', path)
    return this
  }

  public useControllers(controllerDir: string = 'controllers'/* , options?: any */) {
    this.parseJsonBody(/* options.json */)
    this.logger.info('Using Controllers from dir:', controllerDir)
    return super.useControllers(controllerDir)
  }

  /**
   * Enables JSON body parsing in requests.
   *
   * @param {bodyParser.OptionsJson} [options]
   * @returns
   * @memberof ExpressServer
   */
  public parseJsonBody(options?: bodyParser.OptionsJson) {
    this.__server.use(bodyParser.json(options))
    this.logger.info('JSON body parsing enabled')
    return this
  }

  /**
   * Used to enable static file serving from a directory
   * of choice.
   *
   * @param {string} path
   * @param {Parameters<typeof express.static>[1]} [options]
   * @returns
   * @memberof ExpressServer
   */
  public serveStaticFiles(path: string, options?: Parameters<typeof express.static>[1]) {
    this.__server.use(express.static(path, options))
    this.logger.info(`Serving static files from dir: ${path}`)
    return this
  }
}

export class NullServer extends HttpServerProvider {
  public registerServices(...services: IApplicationService[]): this { return this }
}

const mockServerInstance: any = { get: () => { }, listen: () => { } }

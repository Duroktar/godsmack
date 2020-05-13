import bodyParser from 'body-parser';
import express, { Request, Response, RequestHandler } from 'express';
import { HttpServerProvider } from '../HttpServer';
import type { IController, IConfigureServerApplication } from "../../interfaces";
import type { Type } from '../../types';

export class ExpressServer<App extends IConfigureServerApplication<any> = any> extends HttpServerProvider<App> {
  public readonly __server: express.Server = express();

  //#region Public Api
  /**
   * Used to add and configure Health Check middleware
   * to the Express server.
   *
   * @param {string} [path='/health']
   * @returns
   * @memberof ExpressServer
   */
  public useHealthCheck(path: string = '/health') {
    this.get(path, (req, res) => {
      res.send({ 'ServerId': ExpressServer.name, 'Status': 'OK' });
    });
    this.logger.info('Health checks enabled @', path);
    return this;
  }
  /**
   * Enables JSON body parsing in requests.
   *
   * @param {bodyParser.OptionsJson} [options]
   * @returns
   * @memberof ExpressServer
   */
  public parseJsonBody(options?: bodyParser.OptionsJson) {
    this.__server.use(bodyParser.json(options));
    this.logger.info('JSON body parsing enabled');
    return this;
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
    this.__server.use(express.static(path, options));
    this.logger.info(`Serving static files from dir: ${path}`);
    return this;
  }
  //#endregion

  //#region Internals
  public onServerStarted = () => {
    ;
    [...this.controllers.keys()].forEach(endpoint => {
      const klass: Type<any> | undefined = this.controllers.get(endpoint);

      if (!klass)
        return;

      // const logger = this.logger;
      function makeHandler(
        handler: Function,
        key: 'query' | 'body',
      ): RequestHandler {
        return async (req: Request, res: Response) => {
          const data = (req as any)[key];
          try {
            const result = await handler(data, { req, res });
            switch (typeof result) {
              case 'bigint':
              case 'boolean':
              case 'function':
              case 'number':
              case 'string':
              case 'symbol':
              case 'undefined':
                return res.send(result);
            }
            try {
              res.send(JSON.stringify(result))
            } catch {
              res.send(result)
            }
          }
          catch (e) {
            res.status(e.statusCode ?? 500);
            res.send(e.message);
          }
        };
      }

      const instance: any = this.app.container.resolve<IController<any>>(klass);
      ;
      ['create', 'get', 'delete', 'patch', 'update'].forEach(act => {
        if (instance[act] != null) {
          this.logger.info('Setting up controller:', endpoint, 'method:', act);
          switch (act) {
            case 'create':
              this.post(endpoint, makeHandler(instance[act], 'body'));
              break;
            case 'get':
              this.get(endpoint, makeHandler(instance[act], 'query'));
              break;
            case 'delete':
              this.delete(endpoint, makeHandler(instance[act], 'body'));
              break;
            case 'patch':
              this.patch(endpoint, makeHandler(instance[act], 'body'));
              break;
            case 'update':
              this.update(endpoint, makeHandler(instance[act], 'body'));
              break;
            default:
              throw new Error('Server has unimplemented Controller Method: ' + act);
          }
        }
      });
    });

    super.onServerStarted()
  };
  public useControllers(controllerDir: string = 'controllers') {
    this.parseJsonBody();
    this.logger.info('Using Controllers from dir:', controllerDir);
    return super.useControllers(controllerDir);
  }
  //#endregion
}

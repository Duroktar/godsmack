import type { IApplicationService } from './IApplication';
import { HttpServerErrorHandlerFn } from '../framework/HttpServerErrorHandler';

export type PathArgument = string | RegExp | (string | RegExp)[]
export type RequestHandler = (...args: any[]) => any

/**
 * Interface for the default application http server.
 *
 * @export
 * @interface IHttpServer
 */
export interface IHttpServer {
  /**
   * Used for registering get request handlers with the server.
   *
   * @param {PathArgument} path
   * @param {...RequestHandler[]} handlers
   * @memberof IHttpServer
   */
  get(path: PathArgument, ...handlers: RequestHandler[]): void;
  /**
   * Used for registering post request handlers with the server.
   *
   * @param {PathArgument} path
   * @param {...RequestHandler[]} handlers
   * @memberof IHttpServer
   */
  post(path: PathArgument, ...handlers: RequestHandler[]): void;
  /**
   * Used for registering put request handlers with the server.
   *
   * @param {PathArgument} path
   * @param {...RequestHandler[]} handlers
   * @memberof IHttpServer
   */
  put(path: PathArgument, ...handlers: RequestHandler[]): void;
  /**
   * Used for registering patch request handlers with the server.
   *
   * @param {PathArgument} path
   * @param {...RequestHandler[]} handlers
   * @memberof IHttpServer
   */
  patch(path: PathArgument, ...handlers: RequestHandler[]): void;
  /**
   * Used for registering delete request handlers with the server.
   *
   * @param {PathArgument} path
   * @param {...RequestHandler[]} handlers
   * @memberof IHttpServer
   */
  delete(path: PathArgument, ...handlers: RequestHandler[]): void;
  /**
   * Starts the server. Optionally, the port can be passed as well.
   *
   * @param {number} [port]
   * @memberof IHttpServer
   */
  listen(port?: number): void;
  /**
   * Used to setup middleware and handlers.
   *
   * @param {(string | RegExp | (string | RegExp)[])} mountPoint
   * @param {...RequestHandler[]} handlers
   * @returns
   * @memberof IHttpServer
   */
  use(mountPoint: PathArgument, ...handlers: RequestHandler[]): void;
  /**
   * Enables MVC style controllers. Looks in the controllers
   * directory by default for any valid controller classes
   * and automatically registers them with the DI container.
   *
   * @param {string} [controllerDir='controllers']
   * @returns
   * @memberof IHttpServer
   */
  useControllers(controllerDir: string): void;
  /**
   * Used for registering Application Services.
   *
   * @param {...IApplicationService[]} services
   * @returns {this}
   * @memberof IHttpServer
   */
  registerServices(...services: IApplicationService[]): this;
  /**
   * Called when the Server is started.
   *
   * @memberof IHttpServer
   */
  onServerStarted(): void

  /**
   * Register an error handler callback.
   *
   * @param {HttpServerErrorHandlerFn} handler
   * @returns {this}
   * @memberof IHttpServer
   */
  registerErrorHandler(handler: HttpServerErrorHandlerFn): this

  /**
   * Serve static files
   *
   * @param {...any[]} any
   * @returns {this}
   * @memberof IHttpServer
   */
  serveStaticFiles(...any: any[]): this

  useHealthCheck(...any: any[]): this
  parseJsonBody(...any: any[]): this
  parseCookies(...any: any[]): this
  // useSpaFallback: boolean | string
  // spaFallbackPath: string
  // setupHandler(...any: any[]): any
  // makeHandler(...any: any[]): any
}

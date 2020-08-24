import type cors from 'cors';
import type express from "express";
import type { HttpServerProvider } from '../framework';
import type { IHttpServerErrorHandler } from './IHttpServerErrorHandler';
import { Type } from '../types';
import { Server } from 'http';

export type HttpServiceSetup = (server: HttpServerProvider) => void
export type PathArgument = string | RegExp | (string | RegExp)[]
export type RequestHandler = (...args: any[]) => any
export type CorsOptions = cors.CorsOptions | cors.CorsOptionsDelegate;

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
  listen(port?: number): Promise<Server>;
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
   * @param {...HttpServiceSetup[]} services
   * @returns {this}
   * @memberof IHttpServer
   */
  registerServices(...services: ((server: this) => void)[]): this
  /**
   * Called when the Server is started.
   *
   * @memberof IHttpServer
   */
  onServerStarted(): void
  /**
   * TODO
   *
   * @memberof IHttpServer
   */
  onLoadServices(): void
  /**
   * Adds an error handler to the stack.
   *
   * @template Err
   * @param {IHttpServerErrorHandler<Err>} errorHandler
   * @returns {this}
   * @memberof IHttpServer
   */
  useErrorHandler<Err = any>(errorHandler: IHttpServerErrorHandler<Err>): this
  /**
   * Used to enable static file serving from a directory
   * of choice.
   *
   * @param {...any[]} any
   * @returns {this}
   * @memberof IHttpServer
   */
  serveStaticFiles(...any: any[]): this
  /**
   * TODO
   *
   * @param {...any[]} any
   * @returns {this}
   * @memberof IHttpServer
   */
  useHelmet(...any: any[]): this
  /**
   * Used to add and configure Health Check middleware
   * to the server.
   *
   * @param {...any[]} any
   * @returns {this}
   * @memberof IHttpServer
   */
  useHealthCheck(...any: any[]): this
  /**
   * Enables JSON body parsing in requests.
   *
   * @param {...any[]} any
   * @returns {this}
   * @memberof IHttpServer
   */
  parseJsonBody(...any: any[]): this
  /**
   * Enables Cookie parsing.
   *
   * @param {...any[]} any
   * @returns {this}
   * @memberof IHttpServer
   */
  parseCookies(...any: any[]): this
  /**
   * TODO
   *
   * @type {Map<string, Type<any>>}
   * @memberof IHttpServer
   */
  controllers: Map<string, Type<any>>
}

export type ServeStaticFilesOptions = Parameters<typeof express.static>[1] & {
  spaFallback?: boolean | string | null;
  cors?: cors.CorsOptions | cors.CorsOptionsDelegate;
};

import type { IHttpServerErrorHandler, RequestContext } from '../interfaces/IHttpServerErrorHandler';
import { Singleton } from '../injector';

export type HttpServerErrorHandlerFn<E = any, Req = any, Res = any> =
  (err: E, ctx: RequestContext<Req, Res>) => E;

@Singleton()
export class HttpServerErrorHandler implements IHttpServerErrorHandler {
  public onError = (err: any, ctx: RequestContext): Error => {

    if (process.env.NODE_ENV?.toLowerCase() !== 'production') {
      console.error(err)
    }

    return this.executeErrorHandlers('error', err, ctx);
  }

  private eventHandlers: Map<string, HttpServerErrorHandlerFn[]> = new Map();

  public addEventHandler = (event: string, listener: HttpServerErrorHandlerFn): number => {
    if (!this.eventHandlers.has(event)) this.eventHandlers.set(event, []);
    return this.eventHandlers.get(event)!.push(listener);
  }

  private executeErrorHandlers = <E>(event: string, error: E, ctx: RequestContext): E => {
    return (this.eventHandlers.get(event) as HttpServerErrorHandlerFn[] ?? [])
      .reduce((acc, func) => func(acc, ctx), error);
  }
}

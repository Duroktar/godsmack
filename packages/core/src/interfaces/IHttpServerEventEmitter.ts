import type { HttpServerEvent } from '../framework/HttpServer';

export interface IHttpServerEventEmitter {
  on(event: HttpServerEvent, ...args: any[]): void;
  once(event: HttpServerEvent, ...args: any[]): void;
  emitParallel(event: HttpServerEvent, ...args: any[]): Promise<void>;
  emitSerial(event: HttpServerEvent, ...args: any[]): Promise<void>;
}

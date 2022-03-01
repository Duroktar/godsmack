import type { ApplicationEvent } from './IApplication';

export interface IApplicationEventEmitter {
  on(event: ApplicationEvent, ...args: any[]): void;
  once(event: ApplicationEvent, ...args: any[]): void;
  emitParallel(event: ApplicationEvent, ...args: any[]): Promise<void>;
  emitSerial(event: ApplicationEvent, ...args: any[]): Promise<void>;
}

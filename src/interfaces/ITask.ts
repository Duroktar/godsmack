export interface ITaskService {
  useCronTriggers(...tasks: any[]): this;
  startAll(): this;
  stopAll(): this;
  startOne(target: any): this;
  stopOne(target: any): this;
}

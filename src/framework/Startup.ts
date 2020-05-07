import type { Application } from './Application';
import { Injectable } from '../injector/decorators';

export interface IStartupProvider {
  configure(app: Application<any>): void
}

@Injectable()
export class StartupProvider implements IStartupProvider {
  public configure(app: Application<any>) { }
}

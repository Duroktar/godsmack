import { Injectable } from '../injector';
import { IApplication } from '../interfaces';

export interface IStartupProvider {
  configure(app: IApplication): void
}

@Injectable()
export class StartupProvider implements IStartupProvider {
  public configure(app: IApplication) { }
}

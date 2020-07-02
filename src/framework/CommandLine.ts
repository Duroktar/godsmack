import { Injectable } from '../injector';
import { Application } from './Application';
import { Logger } from './services';
import { SettingsService } from './Settings';
import { IApplicationSettings } from '../interfaces';

interface ICommandLineApp {
  engine: any
  run(): void
}

@Injectable()
export class CliAppProvider implements ICommandLineApp {
  public logger: Logger
  public settings: IApplicationSettings['commandline']
  constructor(public app: Application<any>) {
    this.settings = app.container
      .resolve(SettingsService)
      .get('commandline');

    this.logger = app.container
      .resolve(Logger)
      .For(this)
  }
  public readonly engine: any
  public run() {
    console.log('initializing base CLI app')
  }
}

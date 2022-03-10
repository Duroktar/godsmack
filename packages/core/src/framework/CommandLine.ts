import { Injectable } from '../injector';
import { LogFactory } from '../services/Logger';
import { SettingsService } from './Settings';
import { IApplicationSettings } from '../interfaces';

interface ICommandLineApp {
  engine: any
  run(): void
}

@Injectable()
export class CliAppProvider implements ICommandLineApp {
  public settings: IApplicationSettings['commandline']
  constructor(
    public logger: LogFactory,
    config: SettingsService,
  ) {
    this.logger = logger.For(this)
    this.settings = config.get('commandline');
  }
  public readonly engine: any
  public run() {
    console.log('initializing base CLI app')
  }
}

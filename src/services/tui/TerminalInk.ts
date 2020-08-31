import type { Instance } from 'ink';
import { Singleton } from '../../injector';
import type { IApplication } from '../../interfaces';
import { LogFactory } from '../Logger';

const importJsx = require('import-jsx')

interface ITerminalInk {
  start(): void;
  stop(): void;
  onExit(): void;
  setApp(app: IApplication): this;
}

@Singleton()
export class TerminalInk implements ITerminalInk {
  constructor(
    private logger: LogFactory,
  ) {
    this.logger = logger.For(this)
  }

  public start() {
    this.instance = importJsx('./Main.tsx').main(this.getApp())
  }

  public stop() {
    this.instance?.unmount()
  }

  public onExit() {
    this.instance?.waitUntilExit()
      .then(() => this.logger.info('TUI component unmounted.'))
  }

  public setApp(app: IApplication): this {
    this.__app = app
    return this
  }

  private instance?: Instance
  private __app?: IApplication

  private getApp(): IApplication {
    if (!this.__app)
      throw new Error('Must call setApp(app: IApplication); before calling getApp();')
    return this.__app
  }
}

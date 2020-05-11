import { IApplication, IConfigureCliAppApplication } from "../interfaces";

interface ICommandLineApp {
  engine: any
  run(): void
}

export class CliAppProvider<App extends IConfigureCliAppApplication<any> = any> implements ICommandLineApp {
  constructor(public app: App) { }
  public readonly engine: any
  public run() {
    console.log('initializing base CLI app')
  }
}

export class NullCliApp extends CliAppProvider {
  public run() {
    console.log('initializing Null CLI app')
  }
}

import yargs from 'yargs'
import { IApplication } from "../interfaces";

interface ICommandLineApp {
  engine: any
  run(): void
}

export class CliAppProvider implements ICommandLineApp {
  constructor(public app: IApplication<any>) { }
  public readonly engine: any
  public run() {
    console.log('initializing base CLI app')
  }
}

export class YargsCliApp extends CliAppProvider {
  public readonly engine = yargs
  public run() {
    console.log('initializing yargs CLI app')
  }
}

export class NullCliApp extends CliAppProvider {
  public run() {
    console.log('initializing Null CLI app')
  }
}

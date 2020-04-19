import yargs from 'yargs'
import { Application } from './Application';

interface ICommandLineApp {
    engine: any
    run(): void
}

export class CliAppProvider implements ICommandLineApp {
    constructor(public app: Application<any>) { }
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

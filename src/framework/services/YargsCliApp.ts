import yargs from 'yargs';
import { CliAppProvider } from '../CommandLine';

export class YargsCliApp extends CliAppProvider {
  public readonly engine = yargs;
  public run() {
    console.log('initializing yargs CLI app');
  }
}

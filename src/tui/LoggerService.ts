import { ILogger } from '../interfaces';
import { Singleton } from '../injector';

enum LogLevel {
  LOG,
  INFO,
  WARN,
  VERBOSE, // all of the above

  ERROR,
  DEBUG, // also shows ERROR and WARN

  ALL, // everything
  NONE // nothing
}

@Singleton()
export class TuiLoggerService implements ILogger {
  level = LogLevel.ALL
  owner: string = ''
  public records: Record<string, any[]> = {
    log: [],
    info: [],
    warn: [],
    error: [],
    debug: [],
  }
  log(...args: any[]) {
    this.records.log.push(args.map(arg => arg.toString()).join(' '))
    return this
  }
  info(...args: any[]) {
    this.records.info.push(args.map(arg => arg.toString()).join(' '))
    return this
  }
  warn(...args: any[]) {
    this.records.warn.push(args.map(arg => arg.toString()).join(' '))
    return this
  }
  error(...args: any[]) {
    this.records.error.push(args.map(arg => arg.toString()).join(' '))
    return this
  }
  debug(...args: any[]) {
    this.records.debug.push(args.map(arg => arg.toString()).join(' '))
    return this
  }
  For<T extends unknown>(klass: T, lvl?: number) {
    return this
  }
  Tag(name: string, lvl?: number) {
    return this
  }
  isLogLevel(...lvls: number[]) {
    return lvls.includes(this.level)
  }
}

export function getLogRecords(logger: ILogger) {
  if (logger instanceof TuiLoggerService)
    return logger.records
  throw new Error('Must pass a TuiLoggerService.')
}

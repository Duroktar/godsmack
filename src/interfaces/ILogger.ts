import { LogLevel } from '../services/Logger';
export interface ILogger {
    level: number;
    owner: string;
    log: (...args: any[]) => this;
    info: (...args: any[]) => this;
    warn: (...args: any[]) => this;
    error: (...args: any[]) => this;
    debug: (...args: any[]) => this;
    For: <T extends unknown>(klass: T, lvl?: LogLevel | undefined) => ILogger;
    Tag: (name: string, lvl?: LogLevel | undefined) => ILogger;
    isLogLevel: (...lvls: LogLevel[]) => boolean;
}

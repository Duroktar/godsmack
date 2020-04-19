import { Injectable } from '../../index'

export enum LogLevel {
    LOG,
    INFO,
    WARN,
    VERBOSE, // all of the above

    ERROR,
    DEBUG, // also shows ERROR and WARN

    ALL, // everything
    NONE // nothing
}

@Injectable()
export class Logger {
    public level = LogLevel.VERBOSE
    private owner: string = 'Logger'
    public log = (...args: any[]) => {
        if (this.isLogLevel(LogLevel.LOG, LogLevel.INFO, LogLevel.VERBOSE))
            console.log(`[${this.owner}]:`, ...args)
    }
    public info = (...args: any[]) => {
        if (this.isLogLevel(LogLevel.INFO, LogLevel.VERBOSE))
            console.info(`[${this.owner}::INFO]:`, ...args)
    }
    public warn = (...args: any[]) => {
        if (this.isLogLevel(LogLevel.WARN, LogLevel.DEBUG, LogLevel.VERBOSE))
            console.warn(`[${this.owner}::WARN]:`, ...args)
    }
    public error = (...args: any[]) => {
        if (this.isLogLevel(LogLevel.ERROR, LogLevel.DEBUG))
            console.error(`[${this.owner}::ERROR]:`, ...args)
    }
    public debug = (...args: any[]) => {
        if (this.isLogLevel(LogLevel.DEBUG))
            console.debug(`[${this.owner}::DEBUG]:`, ...args)
    }
    public For = <T extends any>(klass: T, lvl?: LogLevel) => {
        return Logger.For(klass, lvl)
    }
    static For<T extends any>(klass: T, lvl?: LogLevel) {
        const logger = new Logger()
        logger.owner = klass.constructor.name
        if (lvl)
            logger.level = lvl
        return logger
    }
    static Tag(label: string) {
        const logger = new Logger()
        logger.owner = label
        return logger
    }
    private isLogLevel = (...lvls: LogLevel[]) => {
        const hasLvl = () => {
            for (let lvl of lvls) {
                if (this.level !== lvl)
                    continue
                else
                    return true
            }
            return false
        }
        const isAll = this.level === LogLevel.ALL
        const isNone = this.level === LogLevel.NONE
        return !isNone && (isAll || hasLvl())
    }
}


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

export class Logger {
  public level = LogLevel.VERBOSE
  public owner: string = 'Logger'
  public log = (...args: any[]) => {
    if (this.isLogLevel(LogLevel.LOG, LogLevel.INFO, LogLevel.VERBOSE))
      console.log(`[${this.owner}::LOG]:`, ...args)
    return this
  }
  public info = (...args: any[]) => {
    if (this.isLogLevel(LogLevel.INFO, LogLevel.VERBOSE))
      console.info(`[${this.owner}::INFO]:`, ...args)
    return this
  }
  public warn = (...args: any[]) => {
    if (this.isLogLevel(LogLevel.WARN, LogLevel.DEBUG, LogLevel.VERBOSE))
      console.warn(`[${this.owner}::WARN]:`, ...args)
    return this
  }
  public error = (...args: any[]) => {
    if (this.isLogLevel(LogLevel.ERROR, LogLevel.DEBUG))
      console.error(`[${this.owner}::ERROR]:`, ...args)
    return this
  }
  public debug = (...args: any[]) => {
    if (this.isLogLevel(LogLevel.DEBUG))
      console.debug(`[${this.owner}::DEBUG]:`, ...args)
    return this
  }
  /**
   * Returns a logger instance for the provided type and
   * (optionally) LogLevel.
   *
   * @memberof Logger
   */
  public For = <T extends any>(klass: T, lvl?: LogLevel) => {
    return Logger.For(klass, lvl ?? this.level)
  }
  public Tag = (name: string, lvl?: LogLevel) => {
    return Logger.Tag(name, lvl ?? this.level)
  }
  /**
   * Returns a logger instance for the provided type and
   * (optionally) LogLevel.
   *
   * @memberof Logger
   */
  static For<T extends any>(klass: T, lvl?: LogLevel) {
    const logger = new Logger()
    logger.owner = klass.constructor.name
    if (lvl)
      logger.level = lvl
    return logger
  }
  /**
   * Returns a logger instance with the provided tag
   *
   * @memberof Logger
   */
  static Tag(label: string, lvl?: LogLevel) {
    const logger = new Logger()
    logger.owner = label
    if (lvl)
      logger.level = lvl
    return logger
  }

  isLogLevel = (...lvls: LogLevel[]) => {
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

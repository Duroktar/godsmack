import { Singleton } from '../injector';
import { spawn, exec, fork } from 'child_process';
import { Logger, LogLevel } from './services';

@Singleton()
export class Shell {
  constructor(
    public logger: Logger
  ) {
    this.logger = logger.For(this, LogLevel.ALL)
  }

  public async spawn(cmd: string, args: string[], opts = { cwd: process.cwd(), log: false }) {
    return new Promise<{ stdout: string, code: number }>((resolve, reject) => {
      const logText = !!opts?.log
      const logInfo = this.logger.isLogLevel(LogLevel.ALL, LogLevel.LOG)
      const logError = this.logger.isLogLevel(LogLevel.ALL, LogLevel.ERROR)
      const logDebug = this.logger.isLogLevel(LogLevel.ALL, LogLevel.DEBUG)

      const child = spawn(cmd, args, opts);
      let res = ""

      if (!child.stdout || !child.stderr)
        return reject(new Error('No output!'));

      child.stdout.on("data", data => {
        if (logText || logInfo) process.stdout.write(data);
        res += data
      });

      child.stderr.on("data", data => {
        if (logText || logError || logDebug) process.stderr.write(data);
      });

      child.on('error', (error) => {
        this.logger.error(`error: ${error.message}`);
        reject(error)
      });

      child.on("close", code => {
        this.logger.debug(`child process exited with code ${code}`);
        resolve({ stdout: res, code })
      });
    })

  }
}

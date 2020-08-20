import { Singleton } from '../injector';
import { spawn, SpawnOptionsWithoutStdio } from 'child_process';
import { LogFactory, LogLevel } from '../services/Logger';
import { SettingsService } from './Settings';
import { IApplicationSettings } from '../interfaces/IApplicationSettings';

type SpawnOptions =
  & SpawnOptionsWithoutStdio
  & { log?: boolean; }

@Singleton()
export class Shell {
  private settings: IApplicationSettings['shell']
  constructor(
    private logger: LogFactory,
    private configFactory: SettingsService,
  ) {
    this.logger = logger.For(this)
    this.settings = configFactory.get('shell')
  }

  public async spawn(cmd: string, args: string[], opts?: SpawnOptions) {
    const defaults = { cwd: process.cwd(), log: this.settings.log };
    const options = { ...defaults, ...opts }
    return new Promise<{ stdout: string, code: number }>((resolve, reject) => {
      const logText = !!options?.log
      const logInfo = this.logger.isLogLevel(LogLevel.ALL, LogLevel.LOG)
      const logError = this.logger.isLogLevel(LogLevel.ALL, LogLevel.ERROR)
      const logDebug = this.logger.isLogLevel(LogLevel.ALL, LogLevel.DEBUG)

      this.logger.debug(`Spawning: ${cmd} ${args.join(' ')}, options${JSON.stringify(options)}`)

      let child
      try {
        child = spawn(cmd, args, options);
      } catch (err) {
        return reject(err)
      }

      let res = ""

      if (!child.stdout || !child.stderr)
        return reject(res);

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

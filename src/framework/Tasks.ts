import { ITaskService, IApplicationSettings, ICronTrigger } from "../interfaces";
import { getTsConfigFile } from '../utils';
import { CronJob } from 'cron'
import { Logger } from '../services';
import { Application } from './Application';
import { SettingsService } from './Settings';
import { Type } from '../types';
import { Singleton } from '../injector';

@Singleton()
export class TaskService implements ITaskService {
  public logger: Logger
  public settings: Required<IApplicationSettings['tasks']>
  public tasks: Map<string, Type<ICronTrigger>> = new Map()
  public jobs: Map<string, CronJob> = new Map()

  constructor(public app: Application<any>) {
    this.settings = app.container
      .resolve(SettingsService)
      .get('tasks');

    this.logger = app.container
      .resolve(Logger)
      .For(this)
  }

  useCronTriggers = (dirname?: string): this => {
    const glob = require('glob');
    const path = require('path');
    const cwd = process.cwd();
    const tsconfig = getTsConfigFile(cwd);

    const rootDir = tsconfig.options.rootDir || cwd;
    const tasksDir = dirname || this.settings.dirname;

    this.logger.info('Using Cron Triggers from dir:', tasksDir);

    const relPath = path.join(rootDir, tasksDir);

    glob.sync(relPath + '/**/*.ts').forEach((file: string) => {
      const dep = require(path.resolve(file));

      if (!dep) return

      const cName = Object.keys(dep)
        .find(name => name.endsWith(this.settings.postfix));

      if (!cName) return

      const klass: Type<ICronTrigger> = dep[cName]
      const taskCtorName = cName
        .slice(0, cName.indexOf(this.settings.postfix))
        .toLowerCase()

      if (!taskCtorName) return

      this.logger.debug(`Setting up Cron Trigger (${taskCtorName}) cName=${cName}`);

      this.tasks.set(taskCtorName, klass);
    });

    return this;
  }

  startAll = (tickOnStart = false): this => {
    this.logger.debug('Starting all Jobs')
    for (let job of this.jobs.values()) {
      job.start()
      if (tickOnStart) job.fireOnTick()
    }
    return this;
  }

  stopAll = (): this => {
    this.logger.debug('Stopping all Jobs')
    for (let job of this.jobs.values()) {
      job.stop()
    }
    return this;
  }

  startOne = (): this => {
    throw new Error("Method not implemented.");
  }
  stopOne = (): this => {
    throw new Error("Method not implemented.");
  }

  initializeJobs = async () => {
    this.logger.debug('Initializing Jobs')
    for (let task of this.tasks.values()) {
      const instance = this.app.container.resolve<ICronTrigger>(task);

      if (!instance) continue;

      this.logger.debug('Setting up Job:', task.name, '@', instance.cronTime)
      this.logger.debug('Job Instance:', instance)
      this.jobs.set(task.name, this.__createCronTrigger(instance))
    }

    if (this.settings.runAllOnStart) this.startAll()
  }

  private __createCronTrigger = (props: ICronTrigger) => {
    return new CronJob(
      props.cronTime, props.onTick, props.onComplete,
      props.start, props.timezone, props.context,
      props.runOnInit,
    )
  }
}

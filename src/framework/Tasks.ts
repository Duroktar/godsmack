import type { CronJob } from 'cron';
import { Singleton } from '../injector';
import type { ICronTrigger, ITaskService } from "../interfaces";
import { LogFactory } from '../services/Logger';
import type { Type } from '../types';
import { doTry } from '../utils/func';
import { Application } from './Application';
import { SettingsService } from './Settings';

@Singleton()
export class TaskService implements ITaskService {
  private logger: LogFactory
  private settings: SettingsService
  private tasks: Map<string, Type<ICronTrigger>> = new Map()
  private jobs: Map<string, CronJob> = new Map()

  constructor(public app: Application<any>) {
    this.settings = app.container
      .resolve(SettingsService);

    this.logger = app.container
      .resolve(LogFactory)
      .For(this)
  }

  useCronTriggers = (dirname?: string): this => {
    const fg = require('fast-glob') as typeof import('fast-glob');
    const path = require('path') as typeof import('path');
    const config = this.settings.get('tasks')

    const rootDir = this.settings.get('framework').rootDir;
    const tasksDir = dirname || config.dirname;

    this.logger.info('Using Cron Triggers from dir:', tasksDir);

    const relPath = path.join(rootDir, tasksDir);

    fg.sync(relPath + '/**/!(*.d).{js,ts}').forEach(async (file: string) => {
      const dep = require(path.resolve(file));

      if (!dep) return

      const cName = Object.keys(dep)
        .find(name => name.endsWith(config.postfix));

      if (!cName) return

      const klass: Type<ICronTrigger> = dep[cName]
      const taskCtorName = cName
        .slice(0, cName.indexOf(config.postfix))
        .toLowerCase()

      if (!taskCtorName) return

      this.logger.debug(`Setting up Cron Trigger (${taskCtorName}) cName=${cName}`);

      this.tasks.set(taskCtorName, klass);
    });

    return this;
  }

  startAll = (tickOnStart = false): this => {
    doTry(async () => {
      this.logger.debug('Starting all Jobs')
      for (let job of this.jobs.values()) {
        job.start()
        if (tickOnStart) job.fireOnTick()
      }
    })
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

  initializeService = async () => {
    doTry(async () => {
      this.logger.debug('Initializing Jobs')
      for (let task of this.tasks.values()) {
        const instance = this.app.container.resolve<ICronTrigger>(task);

        if (!instance) continue;

        this.logger.info('Setting up Job:', task.name, '@', instance.cronTime)
        this.logger.debug('Job Instance:', instance)
        this.jobs.set(task.name, this.__createCronTrigger(instance))
      }

      if (this.settings.get('tasks').runAllOnStart) this.startAll()
    })
  }

  private __createCronTrigger = (props: ICronTrigger) => {
    const { CronJob } = require('cron') as typeof import('cron');
    return new CronJob(
      props.cronTime, props.onTick, props.onComplete,
      props.start, props.timezone, props.context,
      props.runOnInit,
    )
  }
}

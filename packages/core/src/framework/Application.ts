import { AwaitableEventEmitter } from '@bitr/awaitable-event-emitter';
import nodeCleanup from 'node-cleanup';
import type { IApplicationSettings, IClient, IHttpServer, ITaskService, MergeDefaultProviders } from '../interfaces';
import { ApplicationEvent } from '../interfaces/IApplication';
import type { IApplication } from '../interfaces/IApplication';
import type { IApplicationCreationService } from "../interfaces/IApplicationCreation";
import type { IApplicationEventEmitter } from '../interfaces/IApplicationEventEmitter';
import type { FactoryTypeRecord, IFactory } from '../interfaces/IFactory';
import type { IDisposable } from '../interfaces/IDisposable';
import type { ExpressServer } from "../services/ExpressServer";
import { LogFactory } from '../services/Logger';
import type { SequelizePostgresDB } from '../services/sequelize/PostgresDB';
import type { TypeORMPostgresDB } from '../services/typeorm/PostgresDB';
import type { YargsCliApp } from "../services/YargsCliApp";
import type { DeepPartial, Type } from '../types';
import { doTry } from '../utils/func';
import { ApplicationConfigurationService } from './ApplicationConfigurationService';
import { ApplicationCreationService } from './ApplicationCreationService';
import type { CliAppProvider } from './CommandLine';
import type { DatabaseProvider } from './Database';
import { ObjectFactory } from './Factory';
import { FactoryBuilder } from "./FactoryBuilder";
import { SettingsService } from './Settings';

/**
 * Default implementation of the IApplication interface
 *
 * @export
 * @class Application
 * @implements {IApplication<AppContainer>}
 * @template AppContainer
 *
 * @example
 * const app = ApplicationBuilder.Create({
 *   ConfigureDatabase: app => app.container
 *     .resolve(InMemoryDatabase)
 *     .createDatabase('users')
 *     .createDatabase('hats')
 *     .createDatabase('userHats'),
 *   ConfigureServer: app => app
 *     .addExpressServer()
 *     .registerServices(...services(app)),
 *   ConfigureServices: container => container
 *     .addSingleton(TestDoDo, TestDoDo)
 *     .addSingleton(BoogerWhoop, HammerWho),
 * })
 */
export class Application<AppContainer = any> implements IApplication<AppContainer> {
  private logger: LogFactory
  public events: IApplicationEventEmitter

  constructor(public container: MergeDefaultProviders<AppContainer>) {
    this.logger = LogFactory.For(this)
    this.events = new AwaitableEventEmitter()

    nodeCleanup((exitCode, signal) => {
      if (signal) {
        this.__destroyApplication()
          .then(() => setTimeout(() => process.kill(process.pid, signal), 150))

        nodeCleanup.uninstall(); // don't call cleanup handler again
        return false;
      }
    })
  }

  /* Public API */

  public async main(argv?: string[]) {
    return await this.__initializeApplication(argv)
  }

  public async test(argv?: string[]) {
    throw new Error('Method not implemented')
  }

  public stop = async () => await this.__destroyApplication()

  public configure(cb: (app: this) => void) {
    this.container
      .addSingletonInstance(ApplicationConfigurationService, { configure: cb })
    return this
  }

  public registerDisposable = (...disposables: IDisposable[]) => {
    for (const disposable of disposables) {
      this.__disposables.push(disposable)
    }
  }

  private disposeAll = async () => {
    await this.container.onExit()
    await Promise.allSettled(this.__disposables.map(i => i.dispose()))
    this.__disposables = []
  }

  public onAppStarted = (cb: () => Promise<any> | void) => {
    return this.events.on(ApplicationEvent.ON_START, cb)
  }

  public useFactory = (factory: IFactory) => {
    this.container.addSingletonInstance<IFactory>(ObjectFactory, factory)
    return this
  }

  public usePrettyConsoleErrors = () => {
    import('pretty-error').then(lib => lib.start())
    return this
  }

  public addServer = (server: IHttpServer) => {
    this.events.once(ApplicationEvent.BEFORE_CONFIG, async () => {
      const { HttpServerProvider } = await import('./HttpServer')
      this.container.addSingletonInstance<IHttpServer>(HttpServerProvider, server)
    })
    return this
  }

  public useClient(client: IClient) {
    this.events.once(ApplicationEvent.BEFORE_CONFIG, async () => {
      const { JavascriptClient } = await import('./JavascriptClient')
      this.container.addSingletonInstance<IClient>(JavascriptClient, client)
    })
    return this
  }

  public addDatabase = (database: DatabaseProvider) => {
    this.events.once(ApplicationEvent.BEFORE_CONFIG, async () => {
      const { DatabaseProvider } = await import('./Database')
      this.container.addSingletonInstance(DatabaseProvider, database)
    })
    return this
  }

  public addCliApp = (cliApp: CliAppProvider) => {
    this.events.once(ApplicationEvent.BEFORE_CONFIG, async () => {
      const { CliAppProvider } = await import('./CommandLine')
      this.container.addSingletonInstance(CliAppProvider, cliApp)
    })
    return this
  }

  public addTaskService = (service: ITaskService) => {
    this.events.once(ApplicationEvent.BEFORE_CONFIG, async () => {
      const { TaskService } = await import('./Tasks')
      this.container.addSingletonInstance<ITaskService>(TaskService, service)
    })
    return this
  }

  public addDockerDBSupport = () => {
    if (!process.env.DOCKER_CTX) {
      this.logger.info('Enabling Docker DB Support');

      this.__isDockerizingDB = true
    }
    return this
  }

  public addDockerSupport = () => {
    if (!process.env.DOCKER_CTX) {
      this.logger.info('Enabling Docker App Support');

      this.__isDockerizingApp = true
    }
    return this
  }

  public serverStartListening() {
    return doTry(async () => {
      const { HttpServerProvider } = await import('./HttpServer')
      return await this.container
        .resolve(HttpServerProvider)
        .listen();
    }).unwrap()
  }

  public cliAppRun() {
    const cliApp = require("./CommandLine").CliAppProvider;
    this.container.resolve<CliAppProvider>(cliApp).run();
  }

  /* Convenience API */

  public addExpressServer(): ExpressServer {
    const { ExpressServer } = require("../services/ExpressServer")
    return new ExpressServer(this)
  }

  public addPostgresDatabase(): SequelizePostgresDB {
    const { SequelizePostgresDB } = require('../services/sequelize/PostgresDB')
    return new SequelizePostgresDB(this);
  }

  public addTypeORMPostgresDB(): TypeORMPostgresDB {
    const { TypeORMPostgresDB } = require('../services/typeorm/PostgresDB')
    return new TypeORMPostgresDB(this);
  }

  public addYargsCliApp(): YargsCliApp {
    const { YargsCliApp } = require('../services/YargsCliApp')
    return new YargsCliApp(this);
  }

  public addDefaultFactory<T extends FactoryTypeRecord>(
    types: T,
  ): IFactory<any> {
    const factory = new FactoryBuilder(this)
      .withTypes(types)
      .build();
    this.useFactory(factory)
    return factory
  }

  public addJavascriptClient(path?: string) {
    this.events.once(ApplicationEvent.BEFORE_CONFIG, async () => {
      const { JavascriptClient } = await import('./JavascriptClient')
      const client: IClient = this.container
        .addSingleton(JavascriptClient)
        .resolve(JavascriptClient)

      this.events.once(ApplicationEvent.BEFORE_START, async () => {
        client.applyMiddleware(this, path)
      })
    })

    return this
  }

  public addTerminalInk() {
    // NOTE: If using the TUI then set it up asap
    this.events.on(ApplicationEvent["@INIT"], async () => {
      const { TuiLoggerService, TerminalInk } = await import('../services/tui')
      this.container
        .addSingleton(LogFactory, TuiLoggerService)
        .addSingleton(TerminalInk)
        .resolve(TerminalInk)
        .setApp(this)
        .start()
    })
    return this
  }

  public addCronTriggers = (path?: string): this => {
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      const { TaskService } = await import('./Tasks');
      const service = new TaskService(this);
      service
        .useCronTriggers(path)
        .initializeService()

      this.addTaskService(service)
    })
    return this
  }

  public useNodeMailer = (): this => {
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      const { MailerService } = await import('../services/Mailer')
      const service = this.container
        .addSingleton(MailerService)
        .resolve(MailerService);
      await service.initializeService()
    })
    return this
  }

  public addSwaggerDocs() {
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      const { SwaggerService } = await import('./Swagger')
      const service = this.container
        .addSingleton(SwaggerService)
        .resolve(SwaggerService);
      await service.initializeService()
    })
    return this
  }

  public addOpenApiGraphQl() {
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      const { OpenApiToGraphQlProvider } = await import('./graphql/OpenApiToGraphQlProvider')
      const service = this.container
        .addSingleton(OpenApiToGraphQlProvider)
        .resolve(OpenApiToGraphQlProvider);
      await service.initializeService()
    })
    return this
  }

  public addTypeGraphQl() {
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      const { TypeGraphQlProvider } = await import('./graphql/TypeGraphQlProvider')
      const service = this.container
        .addSingleton(TypeGraphQlProvider)
        .resolve(TypeGraphQlProvider);
      await service.initializeService()
    })
    return this

  }

  public addHotSwapping() {
    import('../utils/modTools').then(mod =>
      mod.enableHotSwapping(this.container)
    )
    return this
  }

  public useSettings = <Config extends DeepPartial<IApplicationSettings>>(
      config: DeepPartial<IApplicationSettings>
    | ((base: IApplicationSettings) => Config)
  ): this => {
    this.container
      .resolve<SettingsService>()
      .update(config)
    return this
  }

  /* Private API */

  // -- MEMBERS
  private __disposables: IDisposable[] = []

  // -- FLAGS
  private __isDockerizingApp = false
  private __isDockerizingDB = false

  // -- FUNCS
  private __runDockerAppSetupIfNecessary = async () => {

    if (this.__isDockerizingApp || this.__isDockerizingDB) {
      const { DockerService } = await import('./Docker')
      const docker = this.container.resolve(DockerService);

      const createNetworkBridgeCallback = () => docker
        .createNetworkBridge()
        .catch(err => console.error(err));

      const removeNetworkBridgeCallback = () => docker
        .removeNetworkBridge()
        .catch(err => console.error(err));

      docker
        .registerSetupAction({
          label: 'Setting up a Docker Network Bridge.',
          name: 'docker-network',
          steps: [{
            func: removeNetworkBridgeCallback,
            args: [],
            msg: 'Removing old bridge..',
            when: DROP_AND_RECREATE_NETWORK_BRIDGE,
          }, {
            func: createNetworkBridgeCallback,
            args: [],
            msg: 'Creating new bridge..'
          }],
        });

      if (this.__isDockerizingDB) {
        const createDbCallback = () => docker
          .createDockerDb()
          .catch(err => console.error(err));

        const removeDbCallback = () => docker
          .removeDockerDb()
          .catch(err => console.error(err));

        docker
          .registerSetupAction({
            label: 'Adding Docker Database Support..',
            name: 'docker-db',
            steps: [{
              func: removeDbCallback,
              args: [],
              when: DROP_AND_REBUILD_DOCKER_DB,
            }, {
              func: createDbCallback,
              args: [],
              msg: 'Creating Database Container..',
            }],
          });
      }

      if (this.__isDockerizingApp || this.__isDockerizingDB) {
        await docker.executeSetupActions();
      }

      if (this.__isDockerizingApp) {
        // If we're preparing to launch in docker then we don't need
        // to do the rest of this stuff because the app is going to
        // spawn itself back up with the DOCKER_CTX env var set anyways
        // so we can just exit the whole app once done awaiting.
        await docker
          .installDockerSupport()
          .startDockerApp();

        process.exit(0);
      }
    }
  }

  private __initializeApplication = async (argv?: string[]) => {
    const emitAwaitableEvent = (event: ApplicationEvent) => {
      return this.events.emitSerial(event);
    }

    await emitAwaitableEvent(ApplicationEvent["@INIT"])

    const creationService = this.container
      .resolve<IApplicationCreationService>(ApplicationCreationService)

    const configurationService = this.container
      .resolve(ApplicationConfigurationService);

    // Factory comes first, since it can potentially be used by stuff
    // in the configuration handlers below..
    const factory = creationService.ConfigureFactory?.(this)
    if (factory) this.useFactory(factory)

    // STEP 2 ---------------------------------------------
    await this.__runDockerAppSetupIfNecessary();

    // STEP 3 ---------------------------------------------
    // Setup any other (optional) dependencies.
    this.addDatabase(creationService.ConfigureDatabase?.(this)!)
    // ^^^ DB first since controllers usually depend on a db
    this.addCliApp(creationService.ConfigureCliApp?.(this)!)
    this.addServer(creationService.ConfigureServer?.(this)!)

    // STEP 4 ---------------------------------------------
    // Configure application services so they can be used by the
    // Application Configuration Service handler.
    creationService.ConfigureServices(this.container)

    // STEP 5 ---------------------------------------------
    // This should be where the bulk of the application logic is
    // handled so we call it last to make sure all the previous
    // steps/configuration have taken effect.
    await emitAwaitableEvent(ApplicationEvent.BEFORE_CONFIG)
    configurationService.configure(this)
    await emitAwaitableEvent(ApplicationEvent.AFTER_CONFIG)

    // STEP 6 ---------------------------------------------
    // Setup/Fire the BEFORE_START event
    await emitAwaitableEvent(ApplicationEvent.BEFORE_START)

    // STEP 7 ---------------------------------------------
    // Profit..
    await emitAwaitableEvent(ApplicationEvent.ON_START)

    // STEP 8 ---------------------------------------------
    // Cleanup/Fire the AFTER_START event
    await emitAwaitableEvent(ApplicationEvent.AFTER_START)
  }

  private __destroyApplication = async () => {
    const { DockerService } = await import('./Docker')
    if (this.__isDockerizingDB) {
      await this.container
        .resolve(DockerService)
        .stopDockerDb()
    }
    await this.disposeAll()
  }
}

const DROP_AND_REBUILD_DOCKER_DB = false
const DROP_AND_RECREATE_NETWORK_BRIDGE = false

import { ApplicationConfigurationService } from './ApplicationConfigurationService';
import { ApplicationCreationService } from './ApplicationCreationService';
import { FactoryBuilder } from "./FactoryBuilder";
import { ObjectFactory } from './Factory';
import { DockerService } from './Docker';
import { CliAppProvider } from './CommandLine';
import { JavascriptClient } from './Client';
import { DatabaseProvider } from './Database';
import { HttpServerProvider } from './HttpServer';
import { ExpressServer } from "./services/ExpressServer";
import { YargsCliApp } from "./services/YargsCliApp";
import { Logger, MailerService } from './services';
import { PostgresDB as SequelizePostgresDB } from './services/sequelize/PostgresDB';
import { PostgresDB as TypeORMPostgresDB } from './services/typeorm/PostgresDB';
import type { IApplication, IApplicationCreationService } from '../interfaces/IApplication';
import type { IFactory, FactoryTypeRecord } from '../interfaces/IFactory';
import type { IClient, IHttpServer, IDatabaseProvider, MergeDefaultProviders, ITaskService, IApplicationSettings } from '../interfaces';
import type { Type, DeepPartial } from '../types';
import { TaskService } from './Tasks';
import { SettingsService } from './Settings';
import { TerminalInk } from '../tui/TerminalInk';
import { TuiLoggerService } from '../tui';

/**
 * Default implementation of the IApplication interface
 *
 * @export
 * @class Application
 * @implements {IApplication<AppContainer>}
 * @template AppContainer
 */
export class Application<AppContainer> implements IApplication<AppContainer> {
  private logger: Logger

  constructor(public container: MergeDefaultProviders<AppContainer>) {
    this.logger = Logger.For(this)
  }

  /* Public API */

  public async main(argv?: string[]) {
    await this.__initializeApplication(argv)
  }

  public async test(argv?: string[]) {
    throw new Error('Method not implemented')
  }

  public configure(cb: (app: this) => void) {
    this.container.addSingletonInstance(
      ApplicationConfigurationService,
      { configure: cb },
    )
    return this
  }

  public onAppStarted = (cb: () => Promise<any> | void) => this.__onAppStarted = cb

  public stop = async () => { await this.destroyApplication() }

  public useFactory = (factory: IFactory) => {
    if (factory)
      this.container.addSingletonInstance<Type<IFactory>>(ObjectFactory, factory)
    return this
  }

  public addServer = (server: IHttpServer) => {
    if (server)
      this.container.addSingletonInstance<Type<IHttpServer>>(HttpServerProvider, server)
    return this
  }

  public useClient(client: IClient) {
    if (client)
      this.container.addSingletonInstance<Type<IClient>>(JavascriptClient, client)
    return this
  }

  public addDatabase = (database: IDatabaseProvider) => {
    if (database)
      this.container.addSingletonInstance(DatabaseProvider, database)
    return this
  }

  public addCliApp = (cliApp: CliAppProvider) => {
    if (cliApp)
      this.container.addSingletonInstance(CliAppProvider, cliApp)
    return this
  }

  public addTaskService = (service: ITaskService) => {
    if (service)
      this.container.addSingletonInstance<Type<ITaskService>>(TaskService, service)
    return this
  }

  private __isDockerizingDB = false // TODO move me to internals section

  public addDockerDBSupport = () => {
    if (!process.env.DOCKER_CTX) {
      this.logger.info('Enabling Docker DB Support');

      this.__isDockerizingDB = true
    }
    return this
  }

  public addDockerSupport = () => {
    if (!process.env.DOCKER_CTX) {
      this.logger.info('Enabling Docker Support');

      this.__isDockerizingApp = true
    }
    return this
  }

  public serverStartListening() {
    this.container.resolve(HttpServerProvider).listen();
  }

  public cliAppRun() {
    this.container.resolve(CliAppProvider).run();
  }

  /* Convenience API */

  public addExpressServer(): ExpressServer {
    return new ExpressServer(this)
  }

  public addPostgresDatabase(): SequelizePostgresDB {
    return new SequelizePostgresDB(this);
  }

  public addTypeORMPostgresDB(): TypeORMPostgresDB {
    return new TypeORMPostgresDB(this);
  }

  public addYargsCliApp(): YargsCliApp {
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
    const client: IClient = this.container
      .addSingleton(JavascriptClient)
      .resolve(JavascriptClient)

    client.applyMiddleware(this, path)
    return this.useClient(client)
  }

  public addTerminalInk() {
    this.container
      .addSingleton(Logger, TuiLoggerService)
      .addSingleton(TerminalInk)
      .resolve(TerminalInk)
      .setApp(this)
    this.__hasTerminalInk = true;
    return this
  }

  public useCronTriggers = (path?: string): this => {
    const service = new TaskService(this);
    service.useCronTriggers(path)
    this.__hasTaskRunner = true
    return this.addTaskService(service)
  }

  public useNodeMailer = (): this => {
    this.container.addSingleton(MailerService)
    this.__hasMailer = true
    return this
  }

  public useSettings = (config: DeepPartial<IApplicationSettings>): this => {
    this.container.resolve(SettingsService).update(config)
    return this
  }

  /* Private API */

  // TODO: move these into ApplicationSettings
  private __isDockerizingApp = false
  private __hasTaskRunner = false
  private __hasMailer = false
  private __hasTerminalInk = false
  ////////////////////////////////////////////

  private __onAppStarted: Function = () => { } // this should be pub/sub

  private async __initializeApplication(args?: string[]) {
    // PRELUDE: If using the TUI then set it up right away.
    if (this.__hasTerminalInk && !this.__isDockerizingApp) {
      this.container.resolve(TerminalInk).start()
    }

    // STEP 1 --------------------------------------------
    const creationService = this.container
      .resolve<IApplicationCreationService>(ApplicationCreationService)

    // Factory comes first, since it can potentially be used by stuff
    // in the configuration handlers below..
    const factory = creationService.ConfigureFactory?.(this)
    if (factory) this.useFactory(factory)

    // STEP 2 ---------------------------------------------
    const docker = this.container.resolve(DockerService)

    if (this.__isDockerizingApp || this.__isDockerizingDB) {
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
        })
    }

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
        })
    }

    if (this.__isDockerizingApp || this.__isDockerizingDB) {
      await docker.executeSetupActions()
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

    // STEP 3 ---------------------------------------------
    // Setup any other (optional) dependencies.
    this.addDatabase(creationService.ConfigureDatabase?.(this)!) // DB first since controllers usually depend on a repo with a db sometwhere..
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
    this.container.resolve(ApplicationConfigurationService).configure(this)

    // STEP 6 ---------------------------------------------
    // Initialize any other goodies..
    if (this.__hasMailer) {
      await this.container.resolve(MailerService).initializeService()
    }

    if (this.__hasTaskRunner) {
      await this.container.resolve(TaskService).initializeJobs()
    }

    // STEP 7 ---------------------------------------------
    // Profit..
    await this.__onAppStarted()
  }

  private async destroyApplication() {
    if (this.__isDockerizingDB) {
      await this.container
        .resolve(DockerService)
        .stopDockerDb()
    }
  }
}

const DROP_AND_REBUILD_DOCKER_DB = false
const DROP_AND_RECREATE_NETWORK_BRIDGE = false

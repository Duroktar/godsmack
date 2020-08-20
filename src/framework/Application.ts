import { AwaitableEventEmitter } from '@bitr/awaitable-event-emitter';
import type { IApplicationSettings, IClient, IHttpServer, ITaskService, MergeDefaultProviders } from '../interfaces';
import { ApplicationEvent, IApplication } from '../interfaces/IApplication';
import { IApplicationCreationService } from "../interfaces/IApplicationCreation";
import type { IApplicationEventEmitter } from '../interfaces/IApplicationEventEmitter';
import type { FactoryTypeRecord, IFactory } from '../interfaces/IFactory';
import { Logger, MailerService } from '../services';
import { ExpressServer } from "../services/ExpressServer";
import { PostgresDB as SequelizePostgresDB } from '../services/sequelize/PostgresDB';
import { PostgresDB as TypeORMPostgresDB } from '../services/typeorm/PostgresDB';
import { YargsCliApp } from "../services/YargsCliApp";
import { TuiLoggerService } from '../tui';
import { TerminalInk } from '../tui/TerminalInk';
import type { DeepPartial, Type } from '../types';
import { ApplicationConfigurationService } from './ApplicationConfigurationService';
import { ApplicationCreationService } from './ApplicationCreationService';
import { JavascriptClient } from './Client';
import { CliAppProvider } from './CommandLine';
import { DatabaseProvider } from './Database';
import { DockerService } from './Docker';
import { ObjectFactory } from './Factory';
import { FactoryBuilder } from "./FactoryBuilder";
import { HttpServerProvider } from './HttpServer';
import { SettingsService } from './Settings';
import { SwaggerService } from './Swagger';
import { TaskService } from './Tasks';
import { TypeGraphQlProvider } from './graphql/TypeGraphQlProvider';
import { OpenApiToGraphQlProvider } from "./graphql/OpenApiToGraphQlProvider";

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
export class Application<AppContainer> implements IApplication<AppContainer> {
  private logger: Logger
  public events: IApplicationEventEmitter

  constructor(public container: MergeDefaultProviders<AppContainer>) {
    this.logger = Logger.For(this)
    this.events = new AwaitableEventEmitter()
  }

  /* Public API */

  public async main(argv?: string[]) {
    await this.__initializeApplication(argv)
  }

  public async test(argv?: string[]) {
    throw new Error('Method not implemented')
  }

  public configure(cb: (app: this) => void) {
    this.container
      .addSingletonInstance(ApplicationConfigurationService, { configure: cb })
    return this
  }

  public onAppStarted = (cb: () => Promise<any> | void) => {
    return this.events.on(ApplicationEvent.ON_START, cb)
  }

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

  public addDatabase = (database: DatabaseProvider) => {
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

    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      client.applyMiddleware(this, path)
    })

    return this
  }

  public addTerminalInk() {
    this.container
      .addSingleton(Logger, TuiLoggerService)
      .addSingleton(TerminalInk)

    // NOTE: If using the TUI then set it up asap
    this.events.on(ApplicationEvent["@INIT"], () => {
      this.container
        .resolve(TerminalInk)
        .setApp(this)
        .start()
    })

    return this
  }

  public addCronTriggers = (path?: string): this => {
    const service = new TaskService(this);
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      service
        .useCronTriggers(path)
        .initializeService()
    })
    return this.addTaskService(service)
  }

  public useNodeMailer = (): this => {
    this.container.addSingleton(MailerService)
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      this.container
        .resolve(MailerService)
        .initializeService()
    })
    return this
  }

  public addSwaggerDocs() {
    this.container.addSingleton(SwaggerService)
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      await this.container
        .resolve(SwaggerService)
        .initializeService()
    })
    return this
  }

  public addOpenApiGraphQl() {
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      await this.container
        .resolve(OpenApiToGraphQlProvider)
        .initializeService()
    })
    return this
  }

  public addTypeGraphQl() {
    this.events.once(ApplicationEvent.BEFORE_START, async () => {
      await this.container
        .resolve(TypeGraphQlProvider)
        .initializeService()
    })
    return this

  }

  public useSettings = (config: DeepPartial<IApplicationSettings>): this => {
    const settings = this.container.resolve(SettingsService)
    settings.update(config)
    return this
  }

  /* Private API */

  // -- FLAGS
  private __isDockerizingApp = false
  ////////////////////////////////////////////

  private async __initializeApplication(argv?: string[]) {
    await this.events.emitSerial(ApplicationEvent["@INIT"])

    const creationService = this.container
      .resolve<IApplicationCreationService>(ApplicationCreationService)

    const configurationService = this.container
      .resolve(ApplicationConfigurationService);

    // Factory comes first, since it can potentially be used by stuff
    // in the configuration handlers below..
    const factory = creationService.ConfigureFactory?.(this)
    if (factory) this.useFactory(factory)

    // STEP 2 ---------------------------------------------
    await this.runDockerApplicationSetupIfApplicable();

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
    configurationService.configure(this)

    // STEP 6 ---------------------------------------------
    // Setup/Fire the BEFORE_START event
    await this.events.emitSerial(ApplicationEvent.BEFORE_START)

    // STEP 7 ---------------------------------------------
    // Profit..
    await this.events.emitSerial(ApplicationEvent.ON_START)

    // STEP 8 ---------------------------------------------
    // Cleanup/Fire the AFTER_START event
    await this.events.emitSerial(ApplicationEvent.AFTER_START)
  }

  private async runDockerApplicationSetupIfApplicable() {
    const docker = this.container.resolve(DockerService);

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
        });
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

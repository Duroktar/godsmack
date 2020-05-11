import { ApplicationConfigurationService } from './ApplicationConfigurationService';
import { ApplicationCreationService } from './ApplicationCreationService';
import { CliAppProvider } from './CommandLine';
import { YargsCliApp } from "./services/YargsCliApp";
import { JavascriptClient } from './Client';
import { DatabaseProvider } from './Database';
import { DockerService } from './Docker';
import { FactoryBuilder } from "./FactoryBuilder";
import { Logger, PostgresDB } from './services';
import { ObjectFactory } from './Factory';
import { HttpServerProvider } from './HttpServer';
import { ExpressServer } from "./services/ExpressServer";
import { IApplication, IApplicationServiceHooks } from '../interfaces/IApplication';
import { IFactory, FactoryTypeRecord } from '../interfaces/IFactory';
import { IClient, IHttpServer, MergeDefaultProviders } from '../interfaces';
import { Type } from '../types';

/**
 * Default implementation of the IApplication interface
 *
 * @export
 * @class Application
 * @implements {IApplication<AppContainer>}
 * @template AppContainer
 */
export class Application<AppContainer> implements IApplication<AppContainer> {
  private logger = Logger.For(Application)

  constructor(public container: MergeDefaultProviders<AppContainer>) { }

  /* Public API */

  public async main(argv?: string[]) {
    await this.__initializeApplication(argv)
  }

  public test(argv?: string[]) {
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

  public stop = () => { this.destroyApplication() }

  public useFactory = (factory: IFactory<Record<string, Type<any>>>) => {
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

  private __isDockerizingDB = false
  public addDockerDBSupport = () => {
    if (!process.env.DOCKER_CTX) {
      this.container.addSingleton(DockerService)

      this.__isDockerizingDB = true
    }
    return this
  }

  public addDockerSupport = () => {
    if (!process.env.DOCKER_CTX) {
      const logger = this.logger.For(this)
      logger.info('Enabling Docker Support');

      this.container.addSingleton(DockerService)

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

  public addPostgresDatabase(): PostgresDB {
    return new PostgresDB(this)
  }

  public addYargsCliApp(): YargsCliApp {
    return new YargsCliApp(this)
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

  public addDefaultClient(path?: string) {
    const client: IClient = this.container
      .addSingleton(JavascriptClient)
      .resolve(JavascriptClient)

    client.applyMiddleware(this, path)
    return this.useClient(client)
  }

  /* Private API */

  private __isDockerizingApp = false

  private __hooks: IApplicationServiceHooks = {
    configure: () => null,
    exit: () => null,
  }

  private __onAppStarted: Function = () => { }

  private async __initializeApplication(args?: string[]) {
    const creationService = this.container
      .resolve(ApplicationCreationService)

    // Set this up first, since it can potentially be used by stuff
    // in configuration handlers below..
    const factory = creationService.ConfigureFactory?.(this)
    if (factory) this.useFactory(factory)

    const database = creationService.ConfigureDatabase?.(this)
    if (database) this.addDatabase(database)

    const docker = this.container.resolve(DockerService)

    if (this.__isDockerizingDB) {
      const callback = () => this.container
        .resolve(DatabaseProvider)
        .createDockerDB()
        .catch(err => console.error(err));

      docker
        .registerSetupAction({
          label: 'Adding Docker Database Support..',
          name: 'docker-db',
          steps: [{
            func: callback,
            args: [],
            msg: 'Creating Docker Database..',
          }],
        })
    }

    if (this.__isDockerizingApp) {
      // If we're setting up to launch in docker than we don't need
      // to do the rest of this stuff because the app is going to
      // spawn itself back up with the DOCKER_CTX env var set anyways
      // so just return after executing the docker install/setup.

      await docker.executeSetupActions()

      await docker
        .installDockerSupport()
        .startDockerApp()

      return;
    } else {
      await this.container
        .resolve(DockerService)
        .executeSetupActions()
    }

    // Setup the other (optional) dependencies.
    this.addCliApp(creationService.ConfigureCliApp?.(this)!)
    this.addServer(creationService.ConfigureServer?.(this)!)

    // Configure application services so they can be used by the
    // Application Configuration Service that gets called next.
    creationService.ConfigureServices(this.container)

    // This should be where the bulk of the application logic is
    // handled so we call it last to make sure all the previous
    // steps/configuration has taken effect.
    this.container.resolve(ApplicationConfigurationService).configure(this)

    await this.__onAppStarted()
  }

  private destroyApplication() {
    this.__hooks.exit()
  }
}

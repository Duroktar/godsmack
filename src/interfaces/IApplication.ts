import type { FactoryTypeRecord, IFactory } from './IFactory';
import type { EmptyType, DeepPartial } from '../types';
import type { IHttpServer } from './IHttpServer';
import type { IContainer } from './IContainer';
import type { IClient } from './IClient';

import type {
  Container, InferContainerT, ApplicationConfigurationService,
  CliAppProvider, ObjectFactory, StartupProvider, HttpServerProvider,
  ApplicationCreationService, DatabaseProvider, TaskService, SettingsService,
} from '../framework';

import type { DockerService } from '../framework/Docker';
import type { IDatabaseProvider } from './IDatabase';
import type { ExpressServer, YargsCliApp, PostgresDB, MailerService } from '../framework/services';
import type { IApplicationSettings } from './IApplicationSettings';
import type { TerminalInk } from '../tui/TerminalInk';

/**
 * The default Application Interface
 *
 * @export
 * @interface IApplication
 * @template AppContainer
 */
export interface IApplication<AppContainer = any> {
  /**
   * Configuration function. This is where the
   * bulk of the application logic goes after
   * the initial setup done by the Application
   * Creation Service.
   *
   * @type {IApplicationConfigurationCallback<AppContainer>}
   * @memberof IApplication
   */
  configure: IApplicationConfigurationCallback<AppContainer>;
  /**
   * Stops the application
   *
   * @memberof IApplication
   */
  stop: () => Promise<void>;
  /**
   * The main Application function. Starts running
   * in standard (non-test) mode.
   *
   * @memberof IApplication
   */
  main: (argv?: string[]) => Promise<any>;
  /**
   * Starts the Application in Test mode.
   *
   * @memberof IApplication
   */
  test: (argv?: string[]) => Promise<void>;
  /**
   * Used to add and configure an Object Factory
   * for the Application
   *
   * @memberof IApplication
   */
  useFactory: (factory: IFactory) => this;
  /**
   * Used to add and configure an HTTP Server Client
   * for the Application to serve on the network.
   *
   * @memberof IApplication
   */
  useClient: (client: IClient) => this;
  /**
   * Use cron triggers.
   *
   * @memberof IApplication
   */
  useCronTriggers: (path?: string) => this;
  /**
   * Use an email service.
   *
   * @memberof IApplication
   */
  useNodeMailer: () => this;
  /**
   * Used for configuring the application
   *
   * @memberof IApplication
   */
  useSettings: (config: DeepPartial<IApplicationSettings>) => this;
  /**
   * Used to add and configure a Database Provider
   * to the Application
   *
   * @memberof IApplication
   */
  addDatabase: (database: DatabaseProvider) => void;
  /**
   * Used to add and configure a Server Provider
   * to the Application
   *
   * @memberof IApplication
   */
  addServer: (server: HttpServerProvider) => void;
  /**
   * Used to add and configure a CliApp Provider
   * to the Application
   *
   * @memberof IApplication
   */
  addCliApp: (cliApp: CliAppProvider) => void;
  /**
   * Used to add and configure an Express Server
   * to the Application
   *
   * @memberof IApplication
   */
  addExpressServer(): ExpressServer;
  /**
   * Used to add and configure an Yargs CliApp
   * to the Application
   *
   * @memberof IApplication
   */
  addYargsCliApp(): YargsCliApp;
  /**
   * Configures the default ObjectFactory for use
   *
   * @param {FactoryTypeRecord} types
   * @memberof IApplication
   */
  addDefaultFactory(types: FactoryTypeRecord): IFactory;
  /**
   * Configures the default Client for use
   *
   * @returns {this} The application instance for chaining
   * @memberof IApplication
   */
  addJavascriptClient(): this
  /**
   * Called when the Application starts.
   *
   * Note: Not run until _after_ the create and configure
   * hooks have finished.
   *
   * @memberof IApplication
   */
  onAppStarted(cb: () => Promise<any> | void): void;

  /**
   * Adds a default postgres database to be used as the
   * Application DatabaseProvider.
   *
   * @returns {PostgresDB}
   * @memberof IApplication
   */
  addPostgresDatabase(): PostgresDB
  /**
   * Configures the application to run on docker, creating
   * all the necessary files in the root project directory
   * and automatically building and starting the app.
   *
   * @returns {this}
   * @memberof IApplication
   */
  addDockerSupport(): this

  /**
   * Uses a nicer Ink.js based TUI instead of the standard
   * out and error channels.
   *
   * @returns {this}
   * @memberof IApplication
   */
  addTerminalInk(): this
  /**
   * If the current DatabaseProvider allows it, this will
   * configure and start a database in a docker instance
   * automatically.
   *
   * @returns {this}
   * @memberof IApplication
   */
  addDockerDBSupport(): this

  // TODO / wishlist
  // addLiveReloading(): this
  // addSinglePageApp(): this
  // addCronJobs(): this
  // addCreateReactApp(): this

  /**
   * The Application DI container. Used to register and
   * resolve the various dependencies for the program.
   *
   * @memberof IApplication
   */
  container: MergeDefaultProviders<AppContainer>;
}

/**
 * Interface for the default Application Creation Service
 *
 * @export
 * @interface IApplicationCreationService
 * @template T
 */
export interface IApplicationCreationService<T extends any = any> {
  /**
   * Used to configure dependencies for the program.
   *
   * @memberof IApplicationCreationService
   */
  ConfigureServices(container: IContainer<any>): T;
  /**
   * Used to configure a server for the application
   *
   * @memberof IApplicationCreationService
   */
  ConfigureServer?: (app: IConfigureServerApplication) => IHttpServer;
  /**
   * Used to configure a database for the application
   *
   * @memberof IApplicationCreationService
   */
  ConfigureDatabase?: (app: IConfigureDatabaseApplication) => IDatabaseProvider;
  /**
   * Used to configure a CLI application
   *
   * @memberof IApplicationCreationService
   */
  ConfigureCliApp?: (app: IConfigureCliAppApplication) => CliAppProvider;
  /**
   * Used to configure the default object factory
   *
   * @memberof IApplicationCreationService
   */
  ConfigureFactory?: (app: IConfigureFactoryApplication) => IFactory;
};

export type IBuiltApplication<C> = Pick<
  IApplication<C>,
  | 'main'
  | 'test'
  | 'addDockerSupport'
  | 'addDockerDBSupport'
  | 'addTerminalInk'
  | 'useSettings'
>

export type IConfigureServerApplication<C = any> = Pick<
  IApplication<C>,
  | 'container'
  | 'addExpressServer'
  | 'addServer'
>

export type IConfigureDatabaseApplication<C = any> = Pick<
  IApplication<C>,
  | 'container'
  | 'addDatabase'
  | 'addPostgresDatabase'
>

export type IConfigureCliAppApplication<C = any> = Pick<
  IApplication<C>,
  | 'container'
  | 'addCliApp'
  | 'addYargsCliApp'
>

export type IConfigureFactoryApplication<C = any> = Pick<
  IApplication<C>,
  | 'container'
  | 'addDefaultFactory'
>

export type IConfigurationApplication<C = any> = Pick<
  IApplication<C>,
  | 'container'
  | 'addJavascriptClient'
  | 'onAppStarted'
>

/**
 * `IApplicationConfigurationService` callback Interface
 *
 */
export type IApplicationConfigurationCallback<AppContainer> = (
  cb: (app: IConfigurationApplication<AppContainer>) => void
) => IBuiltApplication<AppContainer>;

export interface IApplicationConfigurationClass<T> {
  /**
   * Class based interface for `IApplicationConfigurationService`
   *
   * @memberof IApplicationConfigurationClass
   */
  configure: (app: IConfigurationApplication<T>) => void
};

export type IApplicationService = (app: IApplication, server: HttpServerProvider) => void


export type MergeDefaultProviders<ApplicationContainer> = Container<Exclude<
  | InferContainerT<ApplicationContainer>
  | ApplicationCreationService
  | ApplicationConfigurationService
  | ObjectFactory
  | HttpServerProvider
  | DatabaseProvider
  | CliAppProvider
  | StartupProvider
  | DockerService
  | SettingsService
  | TaskService
  | MailerService
  | TerminalInk
  , EmptyType>>

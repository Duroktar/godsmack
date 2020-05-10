import { StartupProvider } from '../framework/Startup';
import { CliAppProvider } from '../framework/CommandLine';
import { YargsCliApp } from "../framework/services/YargsCliApp";
import { DatabaseProvider } from '../framework/Database';
import { HttpServerProvider } from '../framework/HttpServer';
import { ExpressServer } from "../framework/services/ExpressServer";
import { ObjectFactory } from '../framework/Factory';
import { FactoryTypeRecord, IFactory } from './IFactory';
import { EmptyType } from '../types';
import { Application } from '../framework/Application';
import { Container, InferContainerT, ApplicationConfigurationService, ApplicationCreationService } from '../framework';
import { IHttpServer } from './IHttpServer';
import { DockerService } from '../framework/Docker';
import { IContainer } from './IContainer';

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
  stop: () => void;
  /**
   * The main Application function. Starts running
   * in standard (non-test) mode.
   *
   * @memberof IApplication
   */
  main: (argv?: string[]) => void;
  /**
   * Starts the Application in Test mode.
   *
   * @memberof IApplication
   */
  test: (argv?: string[]) => void;
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
  addDefaultClient(): this
  /**
   * Called when the Application starts.
   *
   * Note: Not run until _after_ the create and configure
   * hooks have finished.
   *
   * @memberof IApplication
   */
  onAppStarted(cb: Function): void;
  /**
   * The Application DI container. Used to register and
   * resolve the various dependencies for the program.
   *
   * @memberof IApplication
   */
  container: MergeDefaultProviders<AppContainer>;

  /**
   * Configures the application to run on docker, creating
   * all the necessary files in the root project directory
   * and automatically building and starting the app.
   *
   * @returns {this}
   * @memberof IApplication
   */
  addDockerSupport(): this

  // TODO / wishlist
  // addLiveReloading(): this
  // addSettings(config: any): this
  // addSinglePageApp(): this
  // addCronJobs(): this
  // addCreateReactApp(): this
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
  ConfigureServer?: (app: IApplication) => IHttpServer;
  /**
   * Used to configure a database for the application
   *
   * @memberof IApplicationCreationService
   */
  ConfigureDatabase?: (app: IApplication) => DatabaseProvider;
  /**
   * Used to configure a CLI application
   *
   * @memberof IApplicationCreationService
   */
  ConfigureCliApp?: (app: IApplication) => CliAppProvider;
  /**
   * Used to configure the default object factory
   *
   * @memberof IApplicationCreationService
   */
  ConfigureFactory?: (app: IApplication) => IFactory;
};

/**
 * `IApplicationConfigurationService` callback Interface
 *
 */
export type IApplicationConfigurationCallback<AppContainer> = (
  cb: (app: IApplication<AppContainer>) => void
) => IApplication<AppContainer>;

export interface IApplicationConfigurationClass<T> {
  /**
   * Class based interface for `IApplicationConfigurationService`
   *
   * @memberof IApplicationConfigurationClass
   */
  configure: (app: IApplication<T>) => void
};

export type IApplicationService = (app: IApplication<any>, server: HttpServerProvider) => void

/**
 * Hooks used internally to setup the application
 *
 * @export
 * @interface IApplicationServiceHooks
 */
export interface IApplicationServiceHooks {
  configure(): void
  exit(): void
}


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
  , EmptyType>>

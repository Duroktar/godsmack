import { StartupProvider } from '../framework/Startup';
import { CliAppProvider, YargsCliApp } from '../framework/CommandLine';
import { DatabaseProvider } from '../framework/Database';
import { HttpServerProvider, ExpressServer } from '../framework/Server';
import { ObjectFactory } from '../framework/Factory';
import { FactoryTypeRecord } from './IFactory';
import { EmptyType } from '../types';
import { Application } from '../framework/Application';
import { Container, InferContainerT } from '../framework';

/**
 * The default Application Interface
 *
 * @export
 * @interface IApplication
 * @template AppContainer
 */
export interface IApplication<AppContainer> {
  /**
   * Configuration function. This is where the
   * bulk of the application logic goes after
   * the initial setup done by the Application
   * Creation Service.
   *
   * @type {IApplicationConfigurationCallback<this>}
   * @memberof IApplication
   */
  configure: IApplicationConfigurationCallback<this>;
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
   *
   *
   * @param {FactoryTypeRecord} types
   * @memberof IApplication
   */
  addDefaultFactory(types: FactoryTypeRecord): ObjectFactory;
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
}

/**
 * Interface for the default Application Creation Service
 *
 * @export
 * @interface IApplicationCreationService
 * @template T
 */
export interface IApplicationCreationService<T> {
  /**
   * Used to configure dependencies for the program.
   *
   */
  ConfigureServices?: (container: Container<EmptyType>) => T;
  /**
   * Used to configure a server for the application
   *
   */
  ConfigureServer?: <T>(app: IApplication<T>) => HttpServerProvider;
  /**
   * Used to configure a database for the application
   *
   */
  ConfigureDatabase?: <T>(app: IApplication<T>) => DatabaseProvider;
  /**
   * Used to configure a CLI application
   *
   */
  ConfigureCliApp?: <T>(app: IApplication<T>) => CliAppProvider;
  /**
   * Used to configure the default object factory
   *
   * @memberof IApplicationCreationService
   */
  ConfigureFactory?: <T>(app: Application<T>) => ObjectFactory<any>;
};

/**
 * `IApplicationConfigurationService` callback Interface
 *
 */
export type IApplicationConfigurationCallback<Application> = (
  cb: (app: Application) => void
) => Application;

export interface IApplicationConfigurationClass<T> {
  /**
   * Class based interface for `IApplicationConfigurationService`
   *
   * @type {IApplicationConfigurationCallback<T>}
   * @memberof IApplicationConfigurationClass
   */
  configure: IApplicationConfigurationCallback<T>
};

export type IApplicationService = (app: IApplication<any>, server: HttpServerProvider) => void

export interface IApplicationServiceHooks {
  create(): void
  configure(): void
  exit(): void
}


export type MergeDefaultProviders<ApplicationContainer> = Container<Exclude<
  | InferContainerT<ApplicationContainer>
  | ObjectFactory
  | HttpServerProvider
  | DatabaseProvider
  | CliAppProvider
  | StartupProvider
  , EmptyType>>

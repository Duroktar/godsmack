import type { FactoryTypeRecord, IFactory } from './IFactory';
import type { EmptyType, DeepPartial } from '../types';
import type { IClient } from './IClient';

import type {
  Container, InferContainerT, ApplicationConfigurationService,
  CliAppProvider, ObjectFactory, StartupProvider, HttpServerProvider,
  ApplicationCreationService, DatabaseProvider, TaskService, SettingsService,
} from '../framework';

import type { DockerService } from '../framework/Docker';
import type { ExpressServer, YargsCliApp, MailerService } from '../services';
import type { PostgresDB as SequelizePostgresDB } from '../services/sequelize/PostgresDB';
import type { PostgresDB as TypeORMPostgresDB } from '../services/typeorm/PostgresDB';
import type { IApplicationConfigurationHandler } from "./IApplicationConfigurationService";
import type { IApplicationSettings } from './IApplicationSettings';
import type { TerminalInk } from '../tui/TerminalInk';
import type { SwaggerService } from '../framework/Swagger';

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
   * @type {IApplicationConfigurationHandler<AppContainer>}
   * @memberof IApplication
   */
  configure: IApplicationConfigurationHandler<AppContainer>;
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
   * @returns {this}
   * @memberof IApplication
   */
  useFactory: (factory: IFactory) => this;
  /**
   * Used to add and configure an HTTP Server Client
   * for the Application to serve on the network.
   *
   * @returns {this}
   * @memberof IApplication
   */
  useClient: (client: IClient) => this;
  /**
   * Adds cron triggers to the app. Files in the configured
   * jobs directory will be automatically run as per their
   * configuration.
   *
   * @returns {this}
   * @memberof IApplication
   */
  addCronTriggers: (path?: string) => this;
  /**
   * Use an email service.
   *
   * @returns {this}
   * @memberof IApplication
   */
  useNodeMailer: () => this;
  /**
   * Used for configuring the application
   *
   * @returns {this}
   * @memberof IApplication
   */
  useSettings: (config: DeepPartial<IApplicationSettings>) => this;
  /**
   * Used to add and configure a Database Provider
   * to the Application
   *
   * @returns {this}
   * @memberof IApplication
   */
  addDatabase: (database: DatabaseProvider) => void;
  /**
   * Used to add and configure a Server Provider
   * to the Application
   *
   * @returns {this}
   * @memberof IApplication
   */
  addServer: (server: HttpServerProvider) => void;
  /**
   * Used to add and configure a CliApp Provider
   * to the Application
   *
   * @returns {this}
   * @memberof IApplication
   */
  addCliApp: (cliApp: CliAppProvider) => void;
  /**
   * Used to add and configure an Express Server
   * to the Application
   *
   * @returns {this}
   * @memberof IApplication
   */
  addExpressServer(): ExpressServer;
  /**
   * Used to add and configure an Yargs CliApp
   * to the Application
   *
   * @returns {this}
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
   * Application DatabaseProvider. (sequelize)
   *
   * @returns {SequelizePostgresDB}
   * @memberof IApplication
   */
  addPostgresDatabase(): SequelizePostgresDB

  /**
   * Adds a postgres database to be used as the
   * Application DatabaseProvider. (TypeORM)
   *
   * @returns {TypeORMPostgresDB}
   * @memberof IApplication
   */
  addTypeORMPostgresDB(): TypeORMPostgresDB

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

  /**
   * Configures the app to use swagger doc generation.
   *
   * @returns {this}
   * @memberof IApplication
   */
  addSwaggerDocs(): this

  // TODO / wishlist
  // addLiveReloading(): this
  // addSinglePageApp(): this
  // addCreateReactApp(): this

  /**
   * The Application DI container. Used to register and
   * resolve the various dependencies for the program.
   *
   * @memberof IApplication
   */
  container: MergeDefaultProviders<AppContainer>;
}

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
  | SwaggerService
  | TaskService
  | MailerService
  | TerminalInk
  , EmptyType>>

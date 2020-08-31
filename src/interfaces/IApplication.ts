import type { FactoryTypeRecord, IFactory } from './IFactory';
import type { EmptyType, DeepPartial } from '../types';
import type { IClient } from './IClient';

import type {
  Container, InferContainerT, ApplicationConfigurationService,
  CliAppProvider, ObjectFactory, StartupProvider, HttpServerProvider,
  ApplicationCreationService, DatabaseProvider, TaskService, SettingsService,
} from '../framework';

import type { DockerService } from '../framework/Docker';
import type { ExpressServer } from '../services/ExpressServer';
import type { YargsCliApp } from '../services/YargsCliApp';
import type { MailerService } from '../services/Mailer';
import type { SequelizePostgresDB } from '../services/sequelize/PostgresDB';
import type { TypeORMPostgresDB } from '../services/typeorm/PostgresDB';
import type { IApplicationConfigurationHandler } from "./IApplicationConfiguration";
import type { IApplicationSettings } from './IApplicationSettings';
import type { TerminalInk } from '../services/tui/TerminalInk';
import type { SwaggerService } from '../framework/Swagger';
import type { IDatabaseProvider } from './IDatabase';
import type { IApplicationEventEmitter } from './IApplicationEventEmitter';
import type { TypeGraphQlProvider } from '../framework/graphql/TypeGraphQlProvider';
import type { OpenApiToGraphQlProvider } from "../framework/graphql/OpenApiToGraphQlProvider";

export type IApplicationContainer<T> = Pick<IApplication<T>, 'container'>

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
   * The Application DI container. Used to register and
   * resolve the various dependencies for the program.
   *
   * @memberof IApplication
   */
  container: MergeDefaultProviders<AppContainer>;

  /**
   * An EventHandler instance. The default implementation
   * has application specific events builtin and enforced
   *
   * @type {IApplicationEventEmitter}
   * @memberof IApplication
   */
  events: IApplicationEventEmitter

  /**
   * Stops the application.
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
  main: (argv?: string[]) => Promise<void>;
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
   * Pretty print all console errors. Internally it
   * just calls `require('pretty-error').start();`
   * which takes care of all the magic.
   *
   * @docs https://www.npmjs.com/package/pretty-error
   * @returns {this}
   * @memberof IApplication
   */
  usePrettyConsoleErrors: () => this;
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
  useSettings: <Config extends DeepPartial<IApplicationSettings>>(
    /**
     * Takes an object or function called with the base settings.
     */
    config: Config | ((base: IApplicationSettings) => Config)
  ) => this;
  /**
   * Used to add and configure a Database Provider
   * to the Application
   *
   * @returns {this}
   * @memberof IApplication
   */
  addDatabase: (database: IDatabaseProvider) => void;
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

  /**
   * Adds OpenApiGraphQl to the project which can mostly
   * auto-generate resolvers, etc.. from the model schema.
   *
   * @returns {this}
   * @memberof IApplication
   */
  addOpenApiGraphQl(): this

  /**
   * Adds TypeGraphQl functionality to the application
   * and exports all the decorators to use for building
   * a schema from the configured directory housing the
   * resolvers, mutators, etc..
   *
   * @returns {this}
   * @memberof IApplication
   */
  addTypeGraphQl(): this

  /**
   * When enabled allows you to modify injected deps
   * live on the file system.
   *
   * @returns {this}
   * @memberof IApplication
   */
  addHotSwapping(): this

  // TODO / wishlist
  // addSinglePageApp(): this
  // addCreateReactApp(): this
}

export enum ApplicationEvent {
  "@INIT" = '@application-init',
  BEFORE_START = 'before-start',
  ON_START = 'on-start',
  AFTER_START = 'after-start',
  BEFORE_CONFIG = 'before-config',
  AFTER_CONFIG = 'after-config',
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
  | OpenApiToGraphQlProvider
  | TypeGraphQlProvider
  | SwaggerService
  | TaskService
  | MailerService
  | TerminalInk
  | SettingsService
  , EmptyType>>

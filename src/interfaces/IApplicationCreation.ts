import type { IFactory } from './IFactory';
import type { IHttpServer } from './IHttpServer';
import type { IContainer } from '../injector/interface/IContainer';
import type { CliAppProvider } from '../framework';
import type { IDatabaseProvider } from './IDatabase';
import type { IApplication } from './IApplication';

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
  'container' |
  'main' |
  'test' |
  'addDockerSupport' |
  'addDockerDBSupport' |
  'addTerminalInk' |
  'useSettings'
>;

export type IConfigureServerApplication<C = any> = Pick<
  IApplication<C>,
  'container' |
  'addExpressServer' |
  'addServer'
>;

export type IConfigureDatabaseApplication<C = any> = Pick<
  IApplication<C>,
  'container' |
  'addDatabase' |
  'addPostgresDatabase' |
  'addTypeORMPostgresDB'
>;

export type IConfigureCliAppApplication<C = any> = Pick<
  IApplication<C>,
  'container' |
  'addCliApp' |
  'addYargsCliApp'
>;

export type IConfigureFactoryApplication<C = any> = Pick<
  IApplication<C>,
  'container' |
  'addDefaultFactory'
>;

export type IConfigurationApplication<C = any> = IApplication<C>
// export type IConfigurationApplication<C = any> = Pick<
//   IApplication<C>,
//   'container' |
//   'addJavascriptClient' |
//   'addCronTriggers' |
//   'addSwaggerDocs' |
//   'useSettings' |
//   'usePrettyConsoleErrors' |
//   'onAppStarted'
// >;

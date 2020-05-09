import { ObjectFactory, FactoryBuilder } from './Factory';
import { CliAppProvider, YargsCliApp } from './CommandLine';
import { Client } from './ClientBuilder';
import { DatabaseProvider } from './Database';
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

  constructor(public container: MergeDefaultProviders<AppContainer>) { }

  /* Public API */

  public main = (argv?: string[]) => {
    this.registerCallbacks()
    this.initializeApplication()
  }

  public test = (argv?: string[]) => {
    throw new Error('Method not implemented')
  }

  public configure = (cb: (app: this) => void) => {
    this.__hooks.configure = () => cb(this)
    return this
  }

  public onAppStarted(cb: Function) { this.__onAppStarted = cb }

  public stop = () => { this.destroyApplication() }

  public addFactory = (factory: IFactory<Record<string, Type<any>>>) => {
    this.container.addSingletonInstance<Type<IFactory>>(ObjectFactory, factory)
    return this
  }

  public addServer = (server: IHttpServer) => {
    this.container.addSingletonInstance<Type<IHttpServer>>(HttpServerProvider, server)
    return this
  }

  public useClient(client: IClient) {
    this.container.addSingletonInstance<Type<IClient>>(Client, client)
    return this
  }

  public addDatabase = (database: DatabaseProvider) => {
    this.container.addSingletonInstance(DatabaseProvider, database)
    return this
  }

  public addCliApp = (cliApp: CliAppProvider) => {
    this.container.addSingletonInstance(CliAppProvider, cliApp)
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

  public addYargsCliApp(): YargsCliApp {
    return new YargsCliApp(this)
  }

  public addDefaultClient(path?: string) {
    const client: IClient = this.container
      .addSingleton(Client)
      .resolve(Client)

    client.applyMiddleware(this, path)
    return this.useClient(client)
  }

  public addDefaultFactory<T extends FactoryTypeRecord>(
    types: T,
  ): IFactory<T> {
    return new FactoryBuilder(this)
      .withTypes(types)
      .build();
  }

  /* Private API */

  private __hooks: IApplicationServiceHooks = {
    create: () => null,
    configure: () => null,
    exit: () => null,
  }

  private __onAppStarted!: Function

  private initializeApplication() {
    this.__hooks.create()
    this.__hooks.configure()
    this.__onAppStarted?.()
  }
  private destroyApplication() {
    this.__hooks.exit()
  }
  private registerCallbacks() {
    // process.addListener('beforeExit', this.container.onExit)
  }
}



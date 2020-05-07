import { ObjectFactory, FactoryBuilder } from './Factory';
import { FactoryTypeRecord } from '../interfaces/IFactory';
import { CliAppProvider, YargsCliApp } from './CommandLine';
import { DatabaseProvider } from './Database';
import { HttpServerProvider, ExpressServer } from './Server';
import { IApplication, IApplicationServiceHooks, MergeDefaultProviders } from '../interfaces';

/**
 * Default implementation of the Application Interface
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

  public addFactory = (factory: ObjectFactory<any>) => {
    this.container.addSingletonInstance(ObjectFactory, factory)
  }

  public addDatabase = (database: DatabaseProvider) => {
    this.container.addSingletonInstance(DatabaseProvider, database)
  }

  public addServer = (server: HttpServerProvider) => {
    this.container.addSingletonInstance(HttpServerProvider, server)
  }

  public addCliApp = (cliApp: CliAppProvider) => {
    this.container.addSingletonInstance(CliAppProvider, cliApp)
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

  public addDefaultFactory<T extends FactoryTypeRecord>(
    types: T,
  ): ObjectFactory<T> {
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
    this.__onAppStarted()
  }
  private destroyApplication() {
    this.__hooks.exit()
  }
  private registerCallbacks() {
    // process.addListener('beforeExit', this.container.onExit)
  }
}



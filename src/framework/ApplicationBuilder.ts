import { Application } from './Application';
import { Container } from './Container';
import { NullCliApp } from './CommandLine';
import { NullDatabase } from './Database';
import { FactoryBuilder } from './Factory';
import { NullServer } from './HttpServer';
import type { IApplication, IApplicationCreationService, MergeDefaultProviders, IContainer } from '../interfaces';

/**
 * The default implementation for an IApplicationBuilder used
 * to create and configure new Applications.
 *
 * @class ApplicationBuilder
 */
export class ApplicationBuilder {
  /**
   * Used to create and configure a new Application.
   *
   * @static
   * @returns
   */
  static Create<T extends Container<any>>({
    ConfigureServer = app => new NullServer(app),
    ConfigureDatabase = app => new NullDatabase(app),
    ConfigureCliApp = app => new NullCliApp(app),
    ConfigureFactory = app => new FactoryBuilder(app).build(),
    ConfigureServices,
  }: IApplicationCreationService<T>) {
    const application = new Application(new Container());
    application.container.addSingletonInstance(Application, application)
    application.addFactory(ConfigureFactory(application));

    ; (application as any).__hooks.create = () => {
      ConfigureServices?.(application.container as any)
      application.addDatabase(ConfigureDatabase(application));
      application.addServer(ConfigureServer(application));
      application.addCliApp(ConfigureCliApp(application));
    }

    const app = (application as IApplication<any>);
    return app as IApplication<MergeDefaultProviders<T>>
  }
}

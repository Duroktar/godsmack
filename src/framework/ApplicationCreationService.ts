import { NullServer, NullDatabase, NullCliApp, ObjectFactory } from '.';

import type { DatabaseProvider } from './Database';
import type { CliAppProvider } from './CommandLine';
import type { IApplicationCreationService, IHttpServer, IFactory, IContainer, IApplication } from '../interfaces';

export class ApplicationCreationService
  implements IApplicationCreationService<any> {
  ConfigureServer?= (app: IApplication): IHttpServer => new NullServer(app)
  ConfigureDatabase?= (app: IApplication): DatabaseProvider => new NullDatabase(app)
  ConfigureCliApp?= (app: IApplication): CliAppProvider => new NullCliApp(app)
  ConfigureFactory?= (app: IApplication): IFactory => new ObjectFactory(app)
  ConfigureServices(container: IContainer<any>): IContainer { return container }
}

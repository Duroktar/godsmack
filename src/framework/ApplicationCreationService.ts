import { NullServer, NullDatabase, NullCliApp, ObjectFactory } from '.';

import type { DatabaseProvider } from './Database';
import type { CliAppProvider } from './CommandLine';
import type { IApplicationCreationService, IHttpServer, IFactory, IContainer, IConfigureServerApplication, IConfigureDatabaseApplication, IConfigureCliAppApplication, IConfigureFactoryApplication } from '../interfaces';

export class ApplicationCreationService
  implements IApplicationCreationService<any> {
  ConfigureServer?= (app: IConfigureServerApplication): IHttpServer => new NullServer(app)
  ConfigureDatabase?= (app: IConfigureDatabaseApplication): DatabaseProvider => new NullDatabase(app)
  ConfigureCliApp?= (app: IConfigureCliAppApplication): CliAppProvider => new NullCliApp(app)
  ConfigureFactory?= (app: IConfigureFactoryApplication): IFactory => new ObjectFactory(app as any)
  ConfigureServices(container: IContainer<any>): IContainer { return container }
}

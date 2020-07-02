import { IApplicationConfigurationClass, IConfigurationApplication } from '../interfaces';

export class ApplicationConfigurationService
  implements IApplicationConfigurationClass<any> {
  configure(app: IConfigurationApplication<any>): void { }
}

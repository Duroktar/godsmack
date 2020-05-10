import { IApplication, IApplicationConfigurationClass } from '../interfaces';

export class ApplicationConfigurationService
  implements IApplicationConfigurationClass<any> {
  configure(app: IApplication<any>): void { }
}

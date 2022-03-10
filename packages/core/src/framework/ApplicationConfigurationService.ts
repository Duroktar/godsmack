import type { IApplicationConfigurationService, IConfigurationApplication } from '../interfaces';

export class ApplicationConfigurationService implements IApplicationConfigurationService<any> {
  configure(app: IConfigurationApplication<any>): void { }
}

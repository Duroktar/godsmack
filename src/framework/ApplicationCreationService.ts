import type { IApplicationCreationService, IContainer } from '../interfaces';

export class ApplicationCreationService
  implements IApplicationCreationService<any> {
  ConfigureServices(container: IContainer<any>): IContainer { return container }
}

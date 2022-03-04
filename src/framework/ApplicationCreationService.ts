import { IContainer } from '../injector';
import type { IApplicationCreationService } from '../interfaces';

export class ApplicationCreationService implements IApplicationCreationService<any> {
  ConfigureServices(container: IContainer<any>): IContainer { return container }
}

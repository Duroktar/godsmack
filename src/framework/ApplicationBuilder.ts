import { Application } from './Application';
import { ApplicationCreationService } from './ApplicationCreationService';
import { Container } from './Container';
import type { IApplication, MergeDefaultProviders, IApplicationBuilder, IApplicationCreationService } from '../interfaces';

/**
 * The default implementation of the IApplicationBuilder used
 * to create and configure new Applications.
 *
 * @class ApplicationBuilder
 */
export class ApplicationBuilder implements IApplicationBuilder {
  /**
   * Used to create and configure a new Application.
   *
   * @static
   * @returns An Application instance
   */
  static Create<T extends Container<any>>(service: IApplicationCreationService<T>) {
    const app = new Application(new Container());
    app.container.addSingletonInstance(Application, app);
    app.container.addSingletonInstance(ApplicationCreationService, service);
    return app as IApplication<MergeDefaultProviders<T>>
  }
}

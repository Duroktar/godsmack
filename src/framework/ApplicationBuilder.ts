import type { IApplication, IApplicationBuilder, IApplicationCreationService, MergeDefaultProviders } from '../interfaces';
import { IContainer } from '../injector/interface/IContainer';
import { TerminalInk } from '../services/tui/TerminalInk';
import { Application } from './Application';
import { ApplicationCreationService } from './ApplicationCreationService';
import { Container } from '../injector/Container';
import { DockerService } from './Docker';
import { SettingsService } from './Settings';

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
  static Create<T extends IContainer<any>>(
    service: IApplicationCreationService<T>,
  ): IApplication<MergeDefaultProviders<T>> {

    // https://www.youtube.com/watch?v=oHg5SJYRHA0
    const app = new Application(new Container())

    app.container
      .addSingleton(SettingsService)
      .addSingletonInstance(Application, app)
      .addSingletonInstance(ApplicationCreationService, service)
      .addSingletonInstance(Container, app.container)
      .addSingleton(DockerService)
      .addSingleton(TerminalInk)

    return app
  }
}

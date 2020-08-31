import type { IConfigurationApplication, IBuiltApplication } from './IApplicationCreation';

export interface IApplicationConfigurationService<AppContainer> {
  /**
   * Class based interface for `IApplicationConfigurationService`
   *
   * @memberof IApplicationConfigurationService
   */
  configure: (app: IConfigurationApplication<AppContainer>) => void;
};

/**
 * `IApplicationConfigurationService` callback/handler
 *
 */
export type IApplicationConfigurationHandler<AppContainer> = (
  cb: (app: IConfigurationApplication<AppContainer>) => void
) => IBuiltApplication<AppContainer>;

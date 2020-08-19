import type { IConfigurationApplication, IBuiltApplication } from './IApplicationCreation';

export interface IApplicationConfigurationService<T> {
  /**
   * Class based interface for `IApplicationConfigurationService`
   *
   * @memberof IApplicationConfigurationService
   */
  configure: (app: IConfigurationApplication<T>) => void;
};

/**
 * `IApplicationConfigurationService` callback/handler
 *
 */
export type IApplicationConfigurationHandler<AppContainer> = (
  cb: (app: IConfigurationApplication<AppContainer>) => void
) => IBuiltApplication<AppContainer>;

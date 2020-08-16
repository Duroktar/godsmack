import type { IApplication, MergeDefaultProviders } from './IApplication';
import { IApplicationCreationService } from "./IApplicationCreationService";

/**
 * Interface for the default Application Builder.
 *
 * @export
 * @interface IApplicationBuilder
 */
export interface IApplicationBuilder { }

/**
 * Interface for the default Application Builder.
 *
 * @export
 * @interface IApplicationBuilder
 */
declare namespace IApplicationBuilder {
  /**
   * The primary member for an Application Builder.
   * This is usually the first thing called when
   * starting to build out a new application.
   *
   * @template T
   * @param {IApplicationCreationService<T>} delegate
   * @returns {IApplication<MergeDefaultProviders<T>>}
   */
  function Create<T>(
    delegate: IApplicationCreationService<T>,
  ): IApplication<MergeDefaultProviders<T>>;
}

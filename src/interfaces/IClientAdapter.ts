import type { IController } from "./IController";

/**
 * Client Adapter interface for generated clients from
 * registered application controllers. The available
 * clients are returned from the 'For' method of the
 * implementing class and extend from its corresponding
 * IController<T> type.
 *
 * @export
 * @interface IClientAdapter
 * @extends {Required<IController<T>>}
 * @template T
 */
export interface IClientAdapter<T extends any = any> extends Required<IController<T>> {
  /**
   * Returns a client for the specified controller type that
   * can be used to call methods on the server.
   *
   * @template K
   * @param {K} type
   * @returns {Required<IController<T[K]>>}
   * @memberof IClientAdapter
   */
  For<K extends keyof T>(type: K): Required<IController<T[K]>>
}

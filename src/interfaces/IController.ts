/**
 * Interface for application controllers.
 *
 * @export
 * @interface IController
 * @template T
 */
export interface IController<T extends any> {
  [key: string]: any

  /**
   * Used to register a get request handler.
   *
   * @param {*} params
   * @returns {T}
   * @memberof IController
   */
  get?(params: any, meta: any, ...rest: any[]): T
  /**
   * Used to register a post request handler.
   *
   * @param {*} data
   * @returns {T}
   * @memberof IController
   */
  create?(data: any, meta: any, ...rest: any[]): T
  /**
   * Also used to register a post request handler.
   *
   * @param {*} data
   * @returns {T}
   * @memberof IController
   */
  post?(data: any, meta: any, ...rest: any[]): T
  /**
   * Used to register a patch request handler.
   *
   * @param {*} data
   * @returns {T}
   * @memberof IController
   */
  patch?(data: any, meta: any, ...rest: any[]): T
  /**
   * Used to register a delete request handler.
   *
   * @param {*} data
   * @returns {T}
   * @memberof IController
   */
  delete?(data: any, meta: any, ...rest: any[]): T
}

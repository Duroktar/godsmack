/**
 * Interface for application controllers.
 *
 * @export
 * @interface IController
 * @template T
 */
export interface IController<T extends any> {
  /**
   * Used to register a get request handler.
   *
   * @param {*} req
   * @returns {T}
   * @memberof IController
   */
  get?(req: any): T
  /**
   * Used to register a patch request handler.
   *
   * @param {*} req
   * @returns {T}
   * @memberof IController
   */
  create?(req: any): T
  /**
   * Used to register a patch request handler.
   *
   * @param {*} req
   * @returns {T}
   * @memberof IController
   */
  patch?(req: any): T
  /**
   * Used to register a update request handler.
   *
   * @param {*} req
   * @returns {T}
   * @memberof IController
   */
  update?(req: any): T
  /**
   * Used to register a delete request handler.
   *
   * @param {*} req
   * @returns {T}
   * @memberof IController
   */
  delete?(req: any): T
}

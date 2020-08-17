import type { IApplicationSettings } from './IApplicationSettings';
import { Logger } from '../services';
import { IApplication } from './IApplication';

export interface IDatabaseProvider {

  /**
   * Used to connect to the database.
   *
   * @param {...any} args
   * @returns {Promise<any>}
   * @memberof IDatabaseProvider
   */
  connect(...args: any): Promise<any>

  /**
   * Used to query the database.
   *
   * @param {...any} args
   * @returns {Promise<any>}
   * @memberof IDatabaseProvider
   */
  query(...args: any): Promise<any>

  /**
   * Used to test the database connection
   *
   * @param {...any} args
   * @returns {Promise<any>}
   * @memberof IDatabaseProvider
   */
  testConnection(...args: any): Promise<any>

  /**
   * TODO
   *
   * @param {...any} args
   * @returns {Promise<any>}
   * @memberof IDatabaseProvider
   */
  syncDatabaseTables(...args: any): Promise<any>

  /**
   * TODO
   *
   * @param {...any} args
   * @returns {*}
   * @memberof IDatabaseProvider
   */
  createDatabase(...args: any): any

  /**
   * TODO
   *
   * @param {...any} args
   * @returns {Promise<any>}
   * @memberof IDatabaseProvider
   */
  loadDatabase(...args: any): Promise<any>

  /**
   * TODO
   *
   * @param {...any} args
   * @returns {Promise<any>}
   * @memberof IDatabaseProvider
   */
  saveDatabase(...args: any): Promise<any>

  /**
   * Used to insert values into the database.
   *
   * @param {...any} args
   * @returns {*}
   * @memberof IDatabaseProvider
   */
  insert(...args: any): any

  bulkInsert(...args: any): any

  /**
   * Wrap an operation in a transaction.
   *
   * @param {Function} op
   * @returns {Promise<any>}
   * @memberof IDatabaseProvider
   */
  transaction(op: Function): Promise<any>

  /**
   * TODO
   *
   * @type {Logger}
   * @memberof IDatabaseProvider
   */
  logger: Logger

  /**
   * TODO
   *
   * @type {Required<IApplicationSettings['database']>}
   * @memberof IDatabaseProvider
   */
  settings: Required<IApplicationSettings['database']>

  /**
   * TODO
   *
   * @type {*}
   * @memberof IDatabaseProvider
   */
  connection: any

  app: IApplication
}

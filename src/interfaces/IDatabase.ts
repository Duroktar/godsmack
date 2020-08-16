import type { IApplicationSettings } from './IApplicationSettings';
import { Logger } from '../services';

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

  syncDatabaseTables(...args: any): Promise<any>
  createDatabase(...args: any): any
  loadDatabase(...args: any): Promise<any>
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

  logger: Logger
  connection: any
  settings: IApplicationSettings['database']
}

import type { IApplicationSettings } from './IApplicationSettings';
import { Logger } from '../framework/services';

export interface IDatabaseProvider {
  connect(...args: any): Promise<any>
  query(...args: any): Promise<any>
  testConnection(...args: any): Promise<any>
  syncDatabaseTables(...args: any): Promise<any>
  createDatabase(...args: any): any
  saveDatabase(...args: any): Promise<any>
  loadDatabase(...args: any): Promise<any>
  insert(...args: any): any
  logger: Logger
  connection: any
  settings: IApplicationSettings['database']
}

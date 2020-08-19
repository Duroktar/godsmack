import { SettingsService } from './Settings'
import { Logger } from '../services'
import type { IApplicationSettings, IApplication } from "../interfaces"
import type { IDatabaseProvider } from '../interfaces/IDatabase'

export class DatabaseProvider implements IDatabaseProvider {
  public connection: any
  public logger: Logger
  public settings: IApplicationSettings['database']
  constructor(public app: IApplication<any>) {
    this.logger = app.container
      .resolve(Logger)
      .For(this)

    this.settings = app.container
      .resolve(SettingsService)
      .get('database')
  }
  public createDatabase(...args: any) {
    throw new Error("Method not implemented.")
  }
  public saveDatabase(...args: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public loadDatabase(...args: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public connect(...args: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public query(...args: any): any {
    throw new Error("Method not implemented.")
  }
  public insert(...args: any): any {
    throw new Error("Method not implemented.")
  }
  public bulkInsert(...args: any): any {
    throw new Error("Method not implemented.")
  }
  public test(...args: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public syncDatabaseTables(opts?: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public transaction(op: Function): Promise<any> {
    throw new Error("Method not implemented.")
  }
}

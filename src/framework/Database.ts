import type { IApplicationContainer, IApplicationSettings } from "../interfaces"
import type { IDatabaseProvider } from '../interfaces/IDatabase'
import { LogFactory } from '../services/Logger'
import { SettingsService } from './Settings'

export class DatabaseProvider implements IDatabaseProvider {
  public connection: any
  public logger: LogFactory
  public settings: IApplicationSettings['database']
  constructor(public app: IApplicationContainer<any>) {
    this.logger = app.container
      .resolve(LogFactory)
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
  public syncTables(opts?: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public transaction(op: Function): Promise<any> {
    throw new Error("Method not implemented.")
  }
}

import { IConfigureDatabaseApplication } from "../interfaces"
import { IDatabaseProvider } from '../interfaces/IDatabase'
import { Logger } from './services'

export class DatabaseProvider implements IDatabaseProvider {
  public logger: Logger
  public connection: any
  constructor(public app: IConfigureDatabaseApplication<any>) {
    this.logger = Logger.For(this)
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
  public testConnection(...args: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public createDockerDB(...args: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public stopDockerDB(...args: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public removeDockerDB(...args: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
  public findDockerDb(opts?: any): Promise<boolean> {
    throw new Error("Method not implemented.")
  }
  public syncDatabaseTables(opts?: any): Promise<any> {
    throw new Error("Method not implemented.")
  }
}

export class NullDatabase extends DatabaseProvider {
  async connect(o: any) {
    return true
  }
  query<R>(q: string) {
    return 'NULL DB: query called' as any as R
  }
  insert(table: string, row: any) {
    return 'NULL DB: update called' as any
  }
  async testConnection() {
    return true
  }
}

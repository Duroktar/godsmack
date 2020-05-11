import { IApplication, IConfigureDatabaseApplication } from "../interfaces"
import { IDatabaseProvider } from '../interfaces/IDatabase'
import { Logger } from './services'

export class DatabaseProvider implements IDatabaseProvider {
  public logger: Logger
  constructor(public app: IConfigureDatabaseApplication<any>) {
    this.logger = Logger.For(this)
  }
  public connect(...args: any): any {
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
  public findDockerDb(opts?: any): Promise<boolean> {
    throw new Error("Method not implemented.")
  }
}

export class NullDatabase extends DatabaseProvider {
  connect(o: any) {
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

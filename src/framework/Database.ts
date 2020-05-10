import { IApplication } from "../interfaces"
import { Logger } from './services'

export class DatabaseProvider {
  public logger: Logger
  constructor(public app: IApplication<any>) {
    this.logger = app.container.resolve(Logger).For(this)
  }
  connect(options: any) {
    throw new Error("Method not implemented.")
  }
  query<R>(q: string): R {
    throw new Error("Method not implemented.")
  }
  insert(table: string, row: any): boolean {
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
}

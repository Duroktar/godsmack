import { createConnection, Connection, ConnectionOptions, QueryRunner, EntityManager } from 'typeorm'
import { DatabaseProvider } from '../Database';
import { Singleton } from '../../injector';
import { LogLevel } from './Logger';

@Singleton()
export class TypeORMAdapter extends DatabaseProvider {
  async connect(options?: ConnectionOptions) {
    this.logger.info('Connecting to Database:', options?.type)
    await this.getDbConnection(undefined, options)
    return this
  }
  async query(query: string, parameters?: any[] | undefined, queryRunner?: QueryRunner | undefined) {
    return this.connection.query(query, parameters, queryRunner);
  }
  async syncDatabaseTables(options?: { dropTables: boolean }) {
    return this.connection
      .synchronize(options?.dropTables)
      .catch((err: any) => {
        this.logger.info('there was an error syncing tables')
        this.logger.error(err)
      })
  }
  async testConnection() {
    this.logger.info('Testing connection to database...');
    return this.connection.isConnected
  }

  public async transaction<T>(op: (entityManager: EntityManager) => Promise<T>): Promise<T> {
    return this.connection.transaction(op)
  }

  private __connection: Connection | null = null

  set connection(val: Connection) {
    this.__connection = val
  }
  get connection(): Connection {
    if (!this.__connection)
      throw new Error('Not connected to database.')
    return this.__connection
  }

  private mergeDatabaseOptions(options?: ConnectionOptions) {
    return {
      // defaults
      type: 'postgres' as "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql",
      host: this.settings.host,
      port: this.settings.port,
      username: this.settings.user,
      password: this.settings.pass,
      database: this.settings.name,
      logging: this.logger.level === LogLevel.DEBUG,

      // this plays nicely this godsmack
      entities: [
        "src/entities/*.ts"
      ],
      subscribers: [
        "src/subscribers/*.ts"
      ],
      migrations: [
        "src/migrations/*.ts"
      ],
      cli: {
        entitiesDir: "src/entities",
        migrationsDir: "src/migrations",
        subscribersDir: "src/subscribers"
      },
      // synchronize: true, // WARNING

      // provided options to merge
      ...options,
    } as ConnectionOptions
  }

  private async getDbConnection(connectionString?: string, options?: ConnectionOptions) {
    if (connectionString) {
      this.connection = await createConnection(connectionString);
    }
    const settings = this.mergeDatabaseOptions(options);
    this.connection = await createConnection(settings);
  }
}

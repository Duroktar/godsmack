import { Sequelize, Options, SyncOptions } from 'sequelize'
import { Singleton } from '../injector/decorators'
import { DatabaseProvider } from '../framework/Database'

@Singleton()
export class SequelizeAdapter extends DatabaseProvider {
  async connect(options?: Options) {
    const connectionString = this.getDbConnectionString()
    this.logger.info('Connecting to Database:', options?.dialect)
    this.logger.debug('Connection String:', connectionString)
    this.getDbConnection(connectionString, options)
    return this
  }
  async query(...args: Parameters<Sequelize['query']>) {
    return this.connection.query(...args)
  }
  async syncDatabaseTables(options?: SyncOptions) {
    return this.connection
      .sync(options)
      .catch((err: any) => {
        this.logger.info('there was an error syncing tables')
        this.logger.error(err)
      })
  }
  async test() {
    this.logger.info('Testing database connection..');
    try {
      await this.connection.authenticate({
        retry: { max: 25 }, logging: false,
      })
      this.logger.info('Database connection established.');
      return true
    } catch (err) {
      this.logger.error('Unable to connect to the database:', err);
      return false
    }
  }

  private mergeDefaultsWithOptions(options?: Options) {
    const defaults: Options = {
      logging: false,
      define: {
        timestamps: false,
      }
    };
    return {
      dialect: 'postgres' as "mysql" | "postgres" | "sqlite" | "mariadb" | "mssql",
      port: this.settings.port,
      host: this.settings.host,
      user: this.settings.user,
      pass: this.settings.pass,
      host_port: 5432,
      name: this.settings.name,
      ...defaults,
      ...options,
      define: {
        ...defaults.define,
        ...options?.define,
      }
    };
  }

  private getDbConnectionString(): string {
    const options = this.mergeDefaultsWithOptions()
    return createDbConnectionString(options);
  }

  private __connection: Sequelize | null = null

  set connection(val: Sequelize) {
    this.__connection = val
  }
  get connection(): Sequelize {
    if (!this.__connection)
      throw new Error('Not connected to database.')
    return this.__connection
  }

  private getDbConnection(connectionString?: string, options?: Options) {
    const settings = this.mergeDefaultsWithOptions(options);
    if (connectionString) {
      this.connection = new Sequelize(connectionString, settings);
    } else {
      this.connection = new Sequelize(settings);
    }
  }
}

function createDbConnectionString(settings: {
  name: string;
  user: string;
  pass: string;
  host: string;
  port: number;
  dialect: string;
}) {
  const { name, user, pass, host, port, dialect } = settings
  return `${dialect}://${user}:${pass}@${host}:${port}/${name}`;
}

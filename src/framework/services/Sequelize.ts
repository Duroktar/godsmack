import { DatabaseProvider } from '../Database';
import { Singleton } from '../../injector'
import { Sequelize, QueryTypes, Options, SyncOptions } from 'sequelize'

@Singleton()
export class SequelizeAdapter extends DatabaseProvider {
  async connect(db: string, user?: string, pass?: string, options?: Options) {
    this.logger.info('Connecting to Database:', options?.dialect)
    this.logger.info('Connection String:', db)
    const settings = this.mergeDefaultsWithOptions(options);
    if (user) {
      this.connection = new Sequelize(db, user, pass, settings);
    }
    else {
      this.connection = new Sequelize(db, settings);
    }
    return this
  }

  query(...args: Parameters<Sequelize['query']>) {
    return this.connection.query(...args)
  }
  insert(...args: Parameters<Sequelize['query']>) {
    return this.connection.query(args[0], {
      ...args[1],
      type: QueryTypes.INSERT,
    })
  }
  syncDatabaseTables(options?: SyncOptions) {
    return this.connection
      .sync(options)
      .catch((err: any) => {
        this.logger.info('there was an error syncing tables')
        this.logger.error(err)
      })
  }
  async testConnection() {
    this.logger.info('Testing connection to database...');
    try {
      await this.connection.authenticate({
        retry: { max: 25 }, logging: true,
      })
      this.logger.info('Database connection established.');
      return true
    } catch (err) {
      this.logger.error('Unable to connect to the database:', err);
      return false
    }
  }

  public settings: SequelizeOptions = {
    user: 'admin',
    pass: 'pass123',
    port: 5432,
    host_port: 5432,
    host: '0.0.0.0',
    name: 'godsmack-db',
    dialect: 'postgres',
    // logging: false,
  }

  public mergeDefaultsWithOptions(options: Options | undefined) {
    const defaults: Options = {
      define: {
        timestamps: false,
      }
    };
    const settings = {
      port: this.settings.port,
      host: this.settings.host,
      name: this.settings.name,
      ...defaults,
      ...options,
      define: {
        ...defaults.define,
        ...options?.define,
      }
    };
    return settings;
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
}

type SequelizeOptions = {
  pass: string;
  user: string;
  port: number;
  host_port: number;
  host: string;
  name: string;
  logging?: boolean;
  dialect: "postgres" | "mysql" | "sqlite" | "mariadb" | "mssql"
}

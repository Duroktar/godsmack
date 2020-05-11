import { DatabaseProvider } from '../Database';
import { Singleton } from '../../injector'
import { Sequelize, QueryTypes, Options } from 'sequelize'

@Singleton()
export class SequelizeAdapter extends DatabaseProvider {
  connect(db: string, user: string, pass: string, options?: Options) {
    this.logger.info('Connecting to Database:', options?.dialect)
    this.sequelize = new Sequelize(db, user, pass, options);
    return this
  }
  query(...args: Parameters<Sequelize['query']>) {
    return this.sequelize.query(...args)
  }
  insert(...args: Parameters<Sequelize['query']>) {
    return this.sequelize.query(args[0], {
      ...args[1],
      type: QueryTypes.INSERT,
    })
  }
  async testConnection() {
    this.logger.info('Testing connection to database...');
    try {
      await this.sequelize.authenticate({
        retry: { max: 25 }, logging: false,
      })
      this.logger.info('Database connection established.');
      return true
    } catch (err) {
      this.logger.error('Unable to connect to the database:', err);
      return false
    }
  }

  private __connection: Sequelize | null = null

  private set sequelize(val: Sequelize) {
    this.__connection = val
  }
  private get sequelize(): Sequelize {
    if (!this.__connection)
      throw new Error('Not connected to database.')
    return this.__connection
  }
}

import { SequelizeAdapter } from '../Sequelize';
import { Singleton } from '../../../injector';

@Singleton()
export class PostgresDB extends SequelizeAdapter {
  public async connect() {
    return super.connect({ dialect: 'postgres' });
  }
}

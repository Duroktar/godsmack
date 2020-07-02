import { Singleton } from '../../injector'
import { SequelizeAdapter } from './Sequelize';

@Singleton()
export class SQLiteDB extends SequelizeAdapter {
  public async connect(settings?: SQLiteSettings) {
    const { storage, ...rest } = settings || {}
    return super.connect({
      dialect: 'sqlite',
      storage: storage || 'sqlite.db',
      ...rest,
    })
  }
}

type SQLiteSettings = {
  storage: string;
}

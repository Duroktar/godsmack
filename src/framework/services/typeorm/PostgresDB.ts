
import { TypeORMAdapter } from '../TypeORM';
import { Singleton } from '../../../injector';

@Singleton()
export class PostgresDB extends TypeORMAdapter {
  public async connect() {
    return super.connect({ type: 'postgres' });
  }
}


import { TypeORMAdapter } from '../TypeORM';
import { Singleton } from '../../injector';

@Singleton()
export class TypeORMPostgresDB extends TypeORMAdapter {
  public async connect() {
    return super.connect({ type: 'postgres' });
  }
}

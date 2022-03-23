import type { IApplication, IFactory, FactoryTypeRecord } from '../interfaces';
import { ObjectFactory } from './Factory';

export class FactoryBuilder<Types extends FactoryTypeRecord> {
  constructor(public app: IApplication<any>) { }

  private types: FactoryTypeRecord = {};
  public withTypes<T extends FactoryTypeRecord>(types: T): FactoryBuilder<T & Types> {
    this.types = types;
    return this as FactoryBuilder<T & Types>;
  }

  private factory = ObjectFactory;
  public withFactory(factory: typeof ObjectFactory) {
    this.factory = factory;
    return this;
  }

  public build(): IFactory<Types> {
    const injector = this.app.container.getInjector()

    injector.insertDependency(ObjectFactory, this.factory);

    const C = injector
      .getDependency(ObjectFactory)!;

    return new C(this.app, this.types) as any;
  }
}

import { Application, types } from '../../'
import { IFactory, FactoryTypeRecord, GetParams } from '../interfaces'


export class ObjectFactory<Types extends FactoryTypeRecord = any> implements IFactory<Types>
{
  constructor(
    public application: Application<any>,
    public types: FactoryTypeRecord = {},
  ) {
    Object.entries(types).map(([key, value]) => {
      application.container
        .getInjector()
        .upsertDependency(key, value)
    })
  }

  create = <K extends keyof Types, Impl extends Types[K]>(
    type: K,
    ...params: GetParams<Impl>
  ): InstanceType<Impl> => {
    // console.log('this here ->', this)
    // console.log('type:', type)
    // console.log('types:', this.types)
    const klass = this.types[type as any]
    const C = this.getInjectorDependency<Impl>(klass)
    // console.log('YUP')
    if (C) return new C(...params as any)
    // if (klass) return new klass(...params as any)
    throw new Error("Factory couldn't create type: " + type)
  }

  getTypes = (): Record<string, types.Type<any>> => {
    return this.types
  }

  getInjectorDependency = <T extends any>(klass: types.Type<T>) => {
    return this.application.container
      .getInjector()
      .getDependency(klass)
  }
}

export class DebugObjectFactory<T extends FactoryTypeRecord> extends ObjectFactory<T> {
  getInjectorDependency = <T extends any>(klass: types.Type<T>) => {
    const result = super.getInjectorDependency(klass)
    // console.log('got injector dep:', result)
    return result
  }
}

export class FactoryBuilder<Types extends FactoryTypeRecord>
{
  constructor(public app: Application<any>) { }

  private types!: FactoryTypeRecord

  public withTypes<T extends FactoryTypeRecord>(
    types: T
  ): FactoryBuilder<T & Types> {
    this.types = types
    return this as FactoryBuilder<T & Types>
  }

  private factory = ObjectFactory

  public withFactory(factory: typeof ObjectFactory) {
    this.factory = factory
  }

  public build = (): ObjectFactory<Types> => {

    this.app.container
      .getInjector()
      .addDependency(ObjectFactory, this.factory)

    const C: typeof ObjectFactory = this.app.container
      .getInjector()
      .getDependency(ObjectFactory)

    if (!C) throw new Error('Nothing there to build')

    return new C(this.app, this.types)
  }
}

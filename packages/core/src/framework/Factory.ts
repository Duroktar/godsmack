import type { IFactory, FactoryTypeRecord, ParamsOf, IApplication } from '../interfaces'
import type * as types from '../types'


export class ObjectFactory<Types extends FactoryTypeRecord = any> implements IFactory<Types>
{
  constructor(
    private application: IApplication<any>,
    private types: FactoryTypeRecord = {},
  ) {
    Object.entries(types).map(([key, value]) => {
      application.container
        .getInjector()
        .insertDependency(key, value)
    })
  }

  create<TypeKey extends keyof Types, Impl extends Types[TypeKey]>(
    type: TypeKey,
    ...params: ParamsOf<Impl>[]
  ): InstanceType<Impl> {
    const C = this.getInjectorDependency<Impl>(type as string)
    if (C) return new C(...params) as any
    throw new Error("Factory couldn't create type: " + String(type))
  }

  getTypes(): Record<string, types.Type<any>> {
    return this.application.container
      .getInjector()
      .dependenciesAsJSON()
  }

  getInjectorDependency<T extends any>(klass: types.Type<T> | string) {
    const dependency = this.application.container
      .getInjector()
      .getDependency(klass)
    if (dependency == null)
      throw new Error(`Dependency not registered: ${klass}`)
    return dependency
  }
}

export class DebugObjectFactory<T extends FactoryTypeRecord> extends ObjectFactory<T> {
  getInjectorDependency<T extends any>(klass: types.Type<T>) {
    const result = super.getInjectorDependency(klass)
    // console.log('got injector dep:', result)
    return result
  }
}

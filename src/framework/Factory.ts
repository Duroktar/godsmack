import { IFactory, FactoryTypeRecord, GetParams, IApplication } from '../interfaces'
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
        .upsertDependency(key, value)
    })
  }

  create<K extends keyof Types, Impl extends Types[K]>(
    type: K,
    ...params: GetParams<Impl>
  ): InstanceType<Impl> {
    const C = this.getInjectorDependency<Impl>(type as any)
    if (C) return new C(...params as any)
    throw new Error("Factory couldn't create type: " + type)
  }

  getTypes(): Record<string, types.Type<any>> {
    const types = this.application.container
      .getInjector()
      .getTypes()
      .entries()

    return Object.fromEntries(types)
  }

  getInjectorDependency<T extends any>(klass: types.Type<T>) {
    return this.application.container
      .getInjector()
      .getDependency(klass)
  }
}

export class DebugObjectFactory<T extends FactoryTypeRecord> extends ObjectFactory<T> {
  getInjectorDependency<T extends any>(klass: types.Type<T>) {
    const result = super.getInjectorDependency(klass)
    // console.log('got injector dep:', result)
    return result
  }
}

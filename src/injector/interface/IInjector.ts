import { Type } from "../../types"

export interface IInjector {
  resolve<T, K extends Type<T> = Type<T>>(target: K | string): T
  create<T>(target: Type<T> | string, typeName: string): T
  registerType<T>(type: Type<T> | string, impl?: Type<T>, force?: boolean): this
  registerInstance<T>(target: Type<T> | string, instance: T): T
  hasDependency<T>(target: string | Type<T>): boolean
  getDependency<T>(target: Type<T> | string): Type<T> | undefined
  insertDependency<T>(target: Type<T> | string, resolved: Type<T>): Type<T>
  upsertDependency<T>(target: Type<T> | string): Type<T>
  destroyAll(): Promise<void>
  listDependencies(opts?: { sort?: boolean, log?: boolean }): string[]
  dependenciesAsJSON(): Record<string, any>
  getTypeName<T extends Type<any>>(t: T | string): string
  hotReloadDependency: <T extends unknown>(target: Type<T>) => void

  singletons: Set<string>
}

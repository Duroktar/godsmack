import type { Type } from "../types"

export interface IInjector {
  resolve<T, K extends Type<T> = Type<T>>(target: K | string): T
  create<T>(target: Type<T> | string): T
  registerSingleton: <T>(type: string | Type<T>) => this
  registerType<T>(type: Type<T> | string, impl?: Type<T>, force?: boolean): this
  registerInstance<T>(target: Type<T> | string, instance: T): T
  hasDependency<T>(target: string | Type<T>): boolean
  getDependency<T>(target: Type<T> | string): Type<T> | undefined
  insertDependency<T>(target: Type<T> | string, resolved: Type<T>): Type<T>
  upsertDependency<T>(target: Type<T> | string): Type<T>
  reloadDependency<T>(target: Type<T> | string): void
  destroyAll(): Promise<void>
  listDependencies(opts?: { sort?: boolean, log?: boolean }): string[]
  dependenciesAsJSON(): Record<string, Type<any>>
  getTypeName<T extends Type<any>>(t: T | string): string
}

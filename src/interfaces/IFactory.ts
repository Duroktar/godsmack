import type { Type } from '../types'

type Proc = (...args: any) => any

export type GetParams<T extends any> =
  T extends Type<any> ? ConstructorParameters<T>
  : T extends Proc ? Parameters<T>
  : T

export type FactoryTypeRecord = Record<string, Type<any>>

/**
 * Interface for the application Object Factory.
 *
 * @export
 * @interface IFactory
 * @template Types
 */
export interface IFactory<Types extends FactoryTypeRecord = any> {
  /**
   * Used to create new instances of type T
   *
   * @template T
   * @param {T} type
   * @param {...GetParams<Types[T]>} params
   * @returns {InstanceType<Types[T]>}
   * @memberof IFactory
   */
  create<T extends keyof Types>(
    type: T,
    ...params: GetParams<Types[T]>
  ): InstanceType<Types[T]>;
  getInjectorDependency<T extends any>(klass: Type<T>): Type<T>
  /**
   * Returns a record of registered types
   * available for creation
   *
   * @returns {FactoryTypeRecord}
   * @memberof IFactory
   */
  getTypes(): FactoryTypeRecord;
}

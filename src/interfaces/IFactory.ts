import { Type } from '../types'

type Proc = (...args: any) => any

export type GetParams<T extends any> =
  T extends Type<any> ? ConstructorParameters<T>
  : T extends Proc ? Parameters<T>
  : T

export type FactoryTypeRecord = Record<string, Type<any>>

export interface IFactory<Types extends FactoryTypeRecord> {
  /**
   *
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
  /**
   *
   *
   * @returns {FactoryTypeRecord}
   * @memberof IFactory
   */
  getTypes(): FactoryTypeRecord;
}

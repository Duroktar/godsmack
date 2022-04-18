import type { EmptyType, Type, InferType } from '../types';
import type { IInjector } from './IInjector';
import type { Container } from '../library/Container';

/**
 * Interface for an Application DI container.
 *
 * @export
 * @interface IContainer
 * @template T
 */
export interface IContainer<T = EmptyType> {
  /**
   * Used to resolve program dependencies. The dependency must
   * previously have either been declared in the constructor of
   * an `Injectable()` decorated class or registered to the
   * application container in the `ConfigureServices` function.
   *
   * @template Target Can be replaced with a valid Interface for the Target type
   * @template RetType Can replace the Target type with another valid Interface (defaults to Target)
   * @param {Type<Target>} target The type to resolve
   * @returns {RetType} A fully instantiated object of the specified type.
   * @memberof IContainer
   */
   resolve<Target extends T, RetType extends Target = Target>(target?: Type<RetType> | string): RetType;
  /**
   * Registers a class as a singleton to the DI container
   *
   * @template S
   * @param ifce The base class to register
   * @param impl The resolved class for that type
   * @returns {Container<Exclude<Type<S> | S, EmptyType>>} The container instance for chaining.
   * @memberof IContainer
   */
  addSingleton<S>(ifce: Type<S>, impl?: Type<S>): Container<Exclude<Type<S> | S, EmptyType>>;
  /**
   * Registers an instance of a class as a singleton to the DI container
   *
   * @template I
   * @param {Type<I>} type The base class to register
   * @param {I} instance The resolved instance for that type
   * @returns {(Container<Exclude<I | T, EmptyType>>)} The container instance for chaining.
   * @memberof IContainer
   */
  addSingletonInstance<I>(type: Type<I> | I, instance?: I): IContainer<Exclude<I | T, EmptyType>>;
  /**
   * Returns the InjectorFactory instance used by the container.
   *
   * @returns {IInjector}
   * @memberof IContainer
   */
  getInjector(): IInjector
}

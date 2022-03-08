import type { EmptyType, Type, InferType } from '../../types';
import type { IInjector } from './IInjector';
import type { Container } from '../Container';

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
   * @param {Type<Target>} target The type to resolve
   * @returns {Target} A fully instantiated object of the specified type.
   * @memberof IContainer
   */
  resolve<Target extends T>(target?: Type<Target> | string): Target;
  /**
   * Registers a class as a singleton to the DI container
   *
   * @template S The instance to register as a singleton
   * @param ifce The base class to register
   * @param impl The resolved class for that type
   * @returns {Container<Exclude<Type<S> | S, EmptyType>>} The container instance for chaining.
   * @memberof IContainer
   */
  addSingleton<S>(ifce: Type<S>, impl?: Type<S>): Container<Exclude<Type<S> | S, EmptyType>>;
  /**
   * Registers an instance of a class as a singleton to the DI container
   *
   * @param {I} type The base class to register
   * @param {InferType<I>} instance The resolved instance for that type
   * @returns {(Container<Exclude<InferType<I> | T, EmptyType>>)} The container instance for chaining.
   * @memberof IContainer
   */
  addSingletonInstance<I extends Type<any>>(type: I, instance: InferType<I>): IContainer<Exclude<InferType<I> | T, EmptyType>>;
  /**
   * Returns the InjectorFactory instance used by the container.
   *
   * @returns {IInjector}
   * @memberof IContainer
   */
  getInjector(): IInjector
}

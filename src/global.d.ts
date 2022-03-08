
/**
 * This function actually returns a string, but we dupe the Type System
 * for a better user experience.
 *
 * @example
 *
 * app.container.addSingleton(nameof<SomeInterface>(), SomeImplementation)
 *
 * const implementation = app.container.resolve<SomeInterface>()
 */
declare function nameof<T>(func?: (obj: T) => any): Type<T>

type Type<T> = {
  new(...args: any): T;
}

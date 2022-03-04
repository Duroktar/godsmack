import type { IInjector } from '.';
import type { Type } from '../types';

export function proxify<T extends Type<any>>(
  injector: IInjector,
  token: Type<any> | string,
): T {
  return new Proxy(injector.resolve(token), {
    get(_, prop, receiver) {
      return Reflect.get(injector.resolve(token), prop, receiver);
    },
  });
}

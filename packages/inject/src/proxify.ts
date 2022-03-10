import type { IInjector } from '.';
import type { Type } from './types';

class ProxifyNullTokenError extends Error {}

const compareKey = '@@godsmack/di:compare-key'

export function proxify<T extends Type<any>>(
  injector: IInjector,
  token: Type<any> | string,
): T {
  if (token == null) {
    throw new ProxifyNullTokenError()
  }
  return new Proxy(/* injector.resolve(token) */ {} as any, {
    get(_, prop, receiver) {
      if (prop === compareKey) {
        return injector.resolve<T>(token)
      }
      return Reflect.get(injector.resolve(token), prop, receiver);
    },
  });
}

export const compare = <A>(a: A, b: any): b is A => {
  a = (a as any ?? {})[compareKey] ?? a
  b = (b as any ?? {})[compareKey] ?? b
  return Object.is(a, b)
}

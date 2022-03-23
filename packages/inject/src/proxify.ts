import type { IInjector } from '.';
import { proxyCompareKey } from './constants';
import type { Type } from './types';

class ProxifyNullTokenError extends Error {}

export function proxify<T>(
  injector: IInjector,
  token: Type<T> | string,
): T {
  if (token == null) {
    throw new ProxifyNullTokenError()
  }
  return new Proxy(/* injector.resolve(token) */ {} as any, {
    get(_, prop, receiver) {
      const target = injector.resolve<T>(token);
      if (prop === proxyCompareKey) {
        return target
      }
      return Reflect.get(<any>target, prop, receiver);
    },
  });
}

export const compare = <A>(a: A, b: unknown): b is A => {
  a = (<any>a ?? {})[proxyCompareKey] ?? a
  b = (<any>b ?? {})[proxyCompareKey] ?? b
  return Object.is(a, b)
}

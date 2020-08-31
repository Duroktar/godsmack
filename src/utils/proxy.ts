import type { Injector } from '../injector';
import type { Type } from '../types';

export function createProxiedService<T extends Type<any>>(
  injector: Injector,
  token: Type<any>,
): T {
  return new Proxy(injector.resolve(token), {
    get(_, prop, receiver) {
      return Reflect.get(injector.resolve(token), prop, receiver);
    },
  });
}

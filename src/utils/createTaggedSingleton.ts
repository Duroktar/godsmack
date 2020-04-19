import { SYMBOL_SINGLETON } from '../injector/Injector';

export function createTaggedSingleton<T extends Type<any>>(target: T, singleton = true): T {
    const klass: any = target;
    klass[SYMBOL_SINGLETON] = singleton;
    return klass;
}

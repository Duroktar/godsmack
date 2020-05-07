import { SYMBOL_SINGLETON } from '../injector/Injector';
import { Type } from '../types';

export function createTaggedSingleton<T extends Type<any>>(target: T, singleton = true): T {
    const klass: any = target;
    klass[SYMBOL_SINGLETON] = singleton;
    return klass;
}

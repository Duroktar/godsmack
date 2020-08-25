import { DefaultInjector } from '../injector/Injector';
import type { EmptyType, Type, InferType, StaticTestProps } from '../types';
import type { IContainer } from '../interfaces';
import { useModTools } from '../utils/modTools';

export type InferContainerT<T> = T extends Container<infer C> ? C : never

export class Container<T = EmptyType> implements IContainer<T> {
  constructor(private injector = DefaultInjector) {
    // useModTools(this as any)
  }

  public resolve<Target extends T>(target?: Type<Target>): Target;
  public resolve<Target extends T>(target: Type<Target>): Target {
    if (this.__resolverCache.has(target)) {
      return this.__resolverCache.get(target)
    }

    const resolved = this.injector.resolve(target);

    const resolve = this.injector.resolve.bind(this.injector);
    const handler = new Proxy(resolved as any, {
      get(proxyTarget, prop, receiver) {
        const reloaded = resolve(target);
        return Reflect.get(reloaded as any, prop, receiver);
      },
    }) as any;

    this.__resolverCache.set(target, handler)
    return handler as Target
  }

  public addSingleton<Base extends any, Impl extends Type<Base> = any, Ret extends Type<Base> = any>(
    type: Ret,
    impl: Impl = type as any,
    force = true,
  ): Container<Ret | InferType<Ret> | T> {
    this.injector.registerType(type, impl, force)
    return this
  }

  public addSingletonInstance<I extends Type<any>>(
    type: I,
    instance: InferType<I>,
  ): Container<Exclude<InferType<I> | T, EmptyType>> {
    this.injector.registerInstance(type, instance)
    return this as any;
  }

  protected onExit() {
    this.injector.destroyAll()
  }

  public getInjector = () => { return this.injector }

  private __resolverCache = new Map()
}

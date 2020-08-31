import { DefaultInjector } from '../injector/Injector';
import type { EmptyType, Type, InferType } from '../types';
import type { IContainer } from '../interfaces';
import { createProxiedService } from '../utils/proxy';

type ContainerSettings = {
  hotSwapping?: boolean;
}

export type InferContainerT<T> = T extends Container<infer C> ? C : never

export class Container<T = EmptyType> implements IContainer<T> {
  constructor(
    private injector = DefaultInjector,
    private settings: ContainerSettings = { hotSwapping: true },
  ) {}

  public resolve<Target extends T>(target?: Type<Target>): Target;
  public resolve<Target extends T>(target: Type<Target>): Target {
    if (this.__resolverCache.has(target)) {
      return this.__resolverCache.get(target)
    }

    const resolved = this.settings.hotSwapping
      ? createProxiedService<Type<Target>>(this.injector, target)
      : this.injector.resolve(target);

    this.__resolverCache.set(target, resolved)
    return resolved as Target
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

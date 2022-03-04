import { Injector } from './Injector';
import type { EmptyType, Type, InferType } from '../types';
import { IContainer } from './interface/IContainer';
import { IInjector } from './interface/IInjector';
import { proxify } from './proxify';

type ContainerSettings = {
  hotSwapping?: boolean;
}

export type InferContainerT<T> = T extends Container<infer C> ? C : never

type SafeType<T> = T extends (...args: any[]) => T ? Type<T> : () => T

export class Container<T = EmptyType> implements IContainer<T> {
  private injector: IInjector
  constructor(
    private settings: ContainerSettings = { hotSwapping: true },
  ) {
    this.injector = new Injector(settings)
  }

  public resolve<Target extends T>(target?: Type<Target> | string): Target;
  public resolve<Target extends T>(target: Type<Target> | string): Target {
    const resolved = this.settings.hotSwapping
      ? proxify(this.injector, target)
      : this.injector.resolve(target);
    return resolved as Target
  }

  public replace<Base extends T, Impl extends Type<Base> = any, Ret extends Type<Base> = any>(
    type: Ret | string,
    impl?: Impl,
  ): Container<Ret | InferType<Ret> | T>;
  public replace<Base extends T, Impl extends Type<Base> = any, Ret extends Type<Base> = any>(
    type: Ret,
    impl: Impl,
  ): Container<Ret | InferType<Ret> | T> {
    return this.addService(type, impl, true)
  }

  public create<Target extends T>(target: Type<Target>): Target {
    const typeName = this.injector.getTypeName(target);
    return this.injector.create(target, typeName);
  }

  public addService<Base, Impl extends Type<Base> = any, Ret extends Type<Base> = any>(
    type: Ret,
    impl: Impl = type as any,
    force = false,
  ): Container<Ret | InferType<Ret> | T> {
    this.injector.registerType(type, impl, force)
    return this
  }

  public addServiceInstance<I extends Type<any>>(
    type: I,
    instance: InferType<I>,
  ): Container<Exclude<InferType<I> | T, EmptyType>> {
    this.injector.registerInstance(type, instance)
    return this as any;
  }

  public addSingleton<Base, Impl extends Base = Base, Ret extends Base = Base>(type: Type<Ret>, impl?: Impl, force?: boolean): Container<Ret | InferType<Ret> | T>;
  public addSingleton<Base, Impl extends Type<Base> = any, Ret extends Type<Base> = any>(
    type: Ret,
    impl: Impl = type as any,
    force = true,
  ): Container<Ret | InferType<Ret> | T> {
    this.injector.registerType(type, impl, force)
    const name = this.injector.getTypeName(type)
    this.injector.singletons.add(name)
    return this
  }

  public addInterface<Base, Ret extends Type<Base> = any>(): Container<Ret | InferType<Ret> | T> {
    return this
  }

  public addSingletonInstance<I extends Type<any>>(
    type: I,
    instance: InferType<I>,
    force = true,
  ): Container<Exclude<InferType<I> | T, EmptyType>> {
    this.injector.registerType(type, type, force)
    this.injector.registerInstance(type, instance)
    return this as any;
  }

  public async onExit() {
    await this.injector.destroyAll()
  }

  public getInjector = () => { return this.injector }
}

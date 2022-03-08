import { Injector } from './Injector';
import type { EmptyType, Type, InferType } from '../types';
import type { IContainer } from './interface/IContainer';
import type { IInjector } from './interface/IInjector';
import { proxify } from './proxify';

type ContainerSettings = {
  hotSwapping?: boolean;
}

export class Container<T = EmptyType> implements IContainer<T> {
  private injector: IInjector
  constructor(
    private settings: ContainerSettings = { hotSwapping: false },
  ) {
    this.injector = new Injector(settings)
  }

  public resolve<Target extends T>(target?: Type<Target> | string): Target;
  public resolve<Target extends T>(target: Type<Target> | string): Target {
    if (target == null) {
      throw new ContainerDependencyResolutionError(target)
    }
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
    return this.injector.create(target);
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
    force = false,
  ): Container<Ret | InferType<Ret> | T> {
    this.injector.registerType(type, impl, force)
    this.injector.registerSingleton(type)
    return this
  }

  public addSingletonInstance<I extends Type<any>>(
    type: I,
    instance: InferType<I>,
    force = false,
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

class ContainerDependencyResolutionError extends Error {
  constructor(target: string) {
    super(`Invalid target: ${target}`)
  }
}

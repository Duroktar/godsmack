import { Injector, InjectorFactory } from '../injector/Injector';
import type { EmptyType, Type, InferType, StaticTestProps } from '../types';
import type { IContainer } from '../interfaces';

export type InferContainerT<T> = T extends Container<infer C> ? C : never

export class Container<T = EmptyType> implements IContainer<T> {
  constructor(private injector: InjectorFactory = Injector) { }

  private __resolverCache = new Map()

  public resolve<Target extends T>(target: Type<Target>): Target {
    if (this.__resolverCache.has(target)) {
      return this.__resolverCache.get(target)
    }
    const resolved = this.injector.resolve(target);
    this.__resolverCache.set(target, resolved)
    return resolved as Target
  }

  public get<T>(target: T | Type<any> | string): T {
    return this.resolve(target as any) as any
  }

  public set<T, I extends Type<T>>(type: T | Type<T> | string, impl: I = type as any) {
    return this.addSingleton(type as any, impl)
  }

  public addSingleton<T>(type: Type<T> | string, impl: Type<T> = type as any, force = true) {
    this.injector.registerType(type, impl, force)
    return this.__getResultType(impl, (type as any).name)
  }

  public addSingletonInstance<I extends Type<any>>(
    type: I,
    instance: InferType<I>,
  ): Container<Exclude<InferType<I> | T, EmptyType>> {
    this.injector.registerInstance(type, instance)
    return this as any;
  }

  private __getResultType<I, Key extends string>(
    type: Type<I>,
    key: Key,
    force = true,
  ): Container<Exclude<I | T, EmptyType>> {
    return this as any;
  }

  public getInjector = () => { return this.injector }

  protected onExit() {
    this.injector.destroyAll()
  }

  /* TESTING */
  static Test({ expect, describe, it }: StaticTestProps) {
    const noise1 = 'brappp';
    const noise2 = 'pfft';

    interface BaseClass {
      noise(): string
    }
    class Implementation1 {
      noise() { return noise1 }
    }
    class Implementation2 {
      noise() { return noise2 }
    }

    const container = new Container()
      .addSingleton<BaseClass>(Implementation1, Implementation2)

    describe('Container tests', () => {
      // Singleton
      const instance = container.resolve(Implementation1)

      it('works', () => {
        expect(instance).to.equal(container.resolve(Implementation1))
        expect(instance.noise()).to.equal(noise2)
      })
      it('and here', () => {
        expect(container.resolve(Implementation1)).to.equal(instance)
        expect(container.resolve(Implementation1).noise()).to.equal(noise2)
      })
      it('here too', () => {
        expect(container.resolve(Implementation1)).to.equal(container.resolve(Implementation1))
      })
    })
  }
}

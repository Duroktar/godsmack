import { DefaultInjector, Injector } from '../injector/Injector';
import type { EmptyType, Type, InferType, StaticTestProps } from '../types';
import type { IContainer } from '../interfaces';
import { useModTools } from '../utils/modTools';

export type InferContainerT<T> = T extends Container<infer C> ? C : never

export class Container<T = EmptyType> implements IContainer<T> {
  constructor(private injector: Injector = DefaultInjector) {
    useModTools(this as any)
  }

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

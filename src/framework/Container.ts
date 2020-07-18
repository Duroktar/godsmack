import { Injector, InjectorFactory } from '../injector/Injector';
import { createTaggedSingleton } from '../utils/createTaggedSingleton';
import type { EmptyType, Type, InferType, StaticTestProps } from '../types';
import type { IContainer } from '../interfaces';

export type InferContainerT<T> = T extends Container<infer C> ? C : never

export class Container<T = EmptyType> implements IContainer<T> {
  /* Public api */
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

  public addTransient<T>(type: Type<T>, impl: Type<T> = type) {
    return this.__addInjectorDependency(impl, type.name);
  }

  public addSingleton<T>(type: Type<T>, impl: Type<T> = type) {
    createTaggedSingleton(type, true); // SIDE-EFFECT
    createTaggedSingleton(impl, true); // SIDE-EFFECT
    this.injector.addSingleton(impl)
    return this.__addInjectorDependency(impl, type.name);
  }

  public addSingletonInstance<I extends Type<any>>(
    type: I,
    instance: InferType<I>,
  ): Container<Exclude<InferType<I> | T, EmptyType>> {
    createTaggedSingleton(type, true); // SIDE-EFFECT
    this.injector.upsertSingletonInstance(type, instance);
    return this.__addInjectorDependency(type, type.name); // ensure override (...)
  }

  public getInjector = () => { return this.injector }

  /* Private api */
  private __addInjectorDependency<I, Key extends string>(
    type: Type<I>,
    key: Key,
    force = true,
  ): Container<Exclude<I | T, EmptyType>> {
    this.injector.addDependency(key, type, force)
    return this as any;
  }

  protected onExit() {
    this.injector.destroyAll()
  }

  /* TESTING */
  static Test({ expect, describe, it }: StaticTestProps) {
    interface Offspring {
      foo: string
      talk(): string
    }
    interface WithButt {
      fart(): string
    }
    class Child implements Offspring {
      foo = 'Hello!'
      talk() { return this.foo }
    }
    class RetardedChild implements Offspring {
      foo = 'DERP'
      talk() { return this.foo }
    }
    class FartingAnimal {
      fart() { return 'brappp' }
    }
    class FartingHorse {
      fart() { return 'pfft' }
    }
    class OldPerson {
      forget() { return 'huh??' }
    }

    const container = new Container()
      .addTransient<Offspring>(Child, RetardedChild)
      // .addTransient<Offspring>(Child, OldPerson) // <-- should not compile
      .addSingleton<WithButt>(FartingAnimal, FartingHorse)

    describe('Container tests', () => {
      it('work here', () => {
        expect(container.resolve(Child).talk()).to.equal('DERP')
        expect(container.resolve(Child)).not.to.equal(container.resolve(Child))
        // container.resolve(OldPerson) // <-- should not compile
      })

      // Singleton
      const fartingAnimal = container.resolve(FartingAnimal)

      it('and here', () => {
        expect(fartingAnimal).to.equal(container.resolve(FartingAnimal))
        expect(fartingAnimal.fart()).to.equal('pfft')
      })
      it('and also here', () => {
        expect(container.resolve(FartingAnimal)).to.equal(fartingAnimal)
        expect(container.resolve(FartingAnimal).fart()).to.equal('pfft')
      })
      it('here too', () => {
        expect(container.resolve(FartingAnimal)).to.equal(container.resolve(FartingAnimal))
      })
    })
  }
}

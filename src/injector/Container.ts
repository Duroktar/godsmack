import { Injector } from './Injector';
import { createTaggedSingleton } from '../utils/createTaggedSingleton';

export type InferContainerT<T> = T extends Container<infer C> ? C : never

export class Container<T = EmptyType> {
    /* Public api */
    public resolve<Target extends T>(target: Type<Target>): Target {
        return this.injector.resolve(target)
    }

    public addTransient<T extends any>(ifce: Type<T>, impl: Type<T>) {
        return this.__addInjectorDependency(impl, ifce.name);
    }

    public addSingleton<T extends any>(ifce: Type<T>, impl: Type<T>) { // b?: (o: any) => Type<T>, // TODO needs to be added to Injector
        createTaggedSingleton(ifce, true); // SIDE-EFFECT
        return this.__addInjectorDependency(impl, ifce.name);
    }

    public addSingletonInstance<I extends Type<any>>(
        type: I,
        instance: InferType<I>,
    ): Container<Exclude<InferType<I> | T, EmptyType>> {
        createTaggedSingleton(type, true); // SIDE-EFFECT
        this.injector.upsertSingletonInstance(type, instance)
        return this as any;
    }

    public onExit() {
        this.injector.destroyAll()
    }

    public getInjector = () => { return this.injector }

    /* Private api */
    private injector = Injector;
    private logging = true;

    private __addInjectorDependency<I, Key extends string>(
        type: Type<I>,
        key: Key,
    ): Container<Exclude<I | T, EmptyType>> {
        this.injector.addDependency(key, type)
        return this as any;
    }

    private log(...args: any[]) {
        if (this.logging) console.log('[Container]:', ...args)
    }

    /* TESTING */
    static Test({ expect, describe, it }: {
        describe: Mocha.SuiteFunction,
        it: Mocha.TestFunction,
        expect: Chai.ExpectStatic,
    }) {
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

        expect(container.resolve(Child).talk()).to.equal('DERP')
        expect(container.resolve(Child)).not.to.equal(container.resolve(Child))
        // container.resolve(OldPerson) // <-- should not compile

        const fartingAnimal = container.resolve(FartingAnimal)
        expect(fartingAnimal).to.equal(container.resolve(FartingAnimal))
        expect(fartingAnimal.fart()).to.equal('pfft')

        expect(container.resolve(FartingAnimal)).to.equal(fartingAnimal)
        expect(container.resolve(FartingAnimal).fart()).to.equal('pfft')

        // Singleton
        expect(container.resolve(FartingAnimal)).to.equal(container.resolve(FartingAnimal))
        expect(container.resolve(FartingAnimal)).to.equal(container.resolve(FartingAnimal))
    }
}

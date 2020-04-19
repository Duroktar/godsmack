import 'reflect-metadata';
import { Disposable } from '../framework/Disposable'
import { Logger, LogLevel } from '../framework/services/Logger';

export const SYMBOL_SINGLETON = Symbol.for('SINGLETON')

export class InjectorFactory {

    private dependencies = new Map<string, Type<any>>()
    private singletons = new Map<string, any>()
    private logger = Logger.For(this, LogLevel.NONE)
    private logging: boolean = false
    private noOverrides: boolean = true;

    //#region api
    registerDependencies(...classes: Type<any>[]) {
        classes.forEach((cls: Type<any>) => this.addDependency(cls, cls));
    }

    resolve<T>(target: Type<any>): T {
        const { resolved, injections } = this.resolveTokens<T>(target);

        if (this.isSingleton(resolved)) {
            if (this.getTypeName(resolved) === 'CliAppProvider') {
                this.logger.log('hats')
            }
            this.logger.info('Resolving singleton for dependency =>', this.getTypeName(resolved))
            return this.upsertSingleton(resolved, injections);
        }

        this.logger.info('Resolving new target instance for dependency =>', this.getTypeName(resolved))

        // const dependency = this.upsertDependency(target, resolved)!;
        return this.createObject<T>(resolved, injections);
    }

    private resolveTokens<T>(t: Type<any>) {
        let resolved: any = (this.hasDependency(t)) ? this.getDependency(t) : t;

        // tokens are required dependencies, while injections are resolved tokens from the Injector
        const tokens: Type<any>[] = Reflect.getMetadata('design:paramtypes', resolved) || [];

        if (tokens.find(o => o.name === 'Object')) {
            const error = `Unable to resolve dependencies for => ${resolved.name}, deps => ${tokens.map(o => o.name)}`;
            const help = `Possible misuse of @Injectable() decorator on class ${resolved.name}`;
            throw new Error(`${error}\n${help}`);
        }

        const injections: T[] = tokens.map(token => this.resolve(token));
        this.registerDependencies(...tokens);
        // this.registerDependencies(...tokens.concat(resolved));

        return { resolved, injections };
    }
    //#endregion

    //#region information
    listDependencies(): string[] {
        return [...this.dependencies.keys()].map(n => `${n}->${this.dependencies.get(n)?.name}`);
    }

    listSingletons(): any[] {
        return [...this.singletons.keys()] //.map(n => `${n}->${this.singletons.get(n).constructor.name}`);
    }

    dependenciesAsJSON() {
        return [...this.dependencies.keys()].sort().reduce((acc, n) => {
            const depName = this.dependencies.get(n)
            return { ...acc, [n]: depName?.name }
        }, {});
    }

    singletonsAsJSON() {
        return [...this.singletons.keys()].sort().reduce((acc, n) => {
            const singName = this.singletons.get(n)
            return { ...acc, [n]: singName.constructor.name }
        }, {});
    }
    //#endregion

    //#region singletons
    isSingleton(target: Type<any>) {
        return (target as any)[SYMBOL_SINGLETON];
    }

    hasSingleton<T>(target: Type<T>) {
        return this.singletons.has(this.getTypeName(target))
    }

    addSingleton<T>(newable: Type<T>, injections: any) {
        this.logger.debug('Setting singleton to NEW target instance:', this.getTypeName(newable))
        const newObject = this.createObject(newable, injections);
        return this.singletons.set(this.getTypeName(newable), newObject);
    }

    addSingletonInstance<T extends Type<any>>(type: T, instance: InferType<T>) {
        this.logger.debug('Setting singleton to EXISTING target instance:', this.getTypeInstanceName(instance))
        return this.singletons.set(this.getTypeName(type), instance);
    }

    getSingleton<T>(target: Type<T>): T {
        this.logger.debug('Getting singleton:', this.getTypeName(target))
        return this.singletons.get(this.getTypeName(target))!
    }

    upsertSingleton<T>(target: Type<T>, injections: any): T {
        this.logger.info('Upserting singleton =>', this.getTypeName(target))
        const dep = this.upsertDependency(target, target);
        if (!this.hasSingleton(dep)) {
            this.addSingleton(dep, injections);
        }
        return this.getSingleton(dep);
    }

    upsertSingletonInstance<T extends Type<any>>(target: T, instance: InferType<T>): T {
        const dep = this.upsertDependency(target, instance.constructor);
        if (!this.hasSingleton(dep)) {
            this.addSingletonInstance(dep, instance);
        }
        return this.getSingleton(dep);
    }
    //#endregion

    //#region dependencies
    hasDependency<T extends Type<any>>(target: T | string) {
        return this.dependencies.has(this.getTypeName(target))
    }

    addDependency<T extends Type<any>>(target: T | string, resolved: T) {
        const targetName = this.getTypeName(target)
        if (this.dependencies.has(targetName)) {
            if (this.noOverrides) {
                this.logger.warn(`skipping existing dependency => ${targetName}`)
                return this.dependencies
            }
            this.logger.debug(`overriding existing dependency => ${targetName}`)
        } else {
            this.logger.debug(`Setting dependency => ${targetName} to => ${resolved.name}`)
        }
        this.dependencies.set(targetName, resolved)
        return this.dependencies
    }

    getDependency<T extends Type<any>>(target: T | string): Type<any> {
        const tName = this.getTypeName(target);
        if (!this.dependencies.has(tName)) {
            this.logger.error(`dependency not found => ${tName}`)
        }
        this.logger.debug('Getting dependency =>', tName)
        return this.dependencies.get(tName)!
    }

    upsertDependency<T extends Type<any>>(target: T | string, resolved: T): T {
        this.logger.info('Upserting dependency =>', this.getTypeName(target))
        if (!this.hasDependency(target)) {
            this.addDependency(target, resolved);
        }
        return this.getDependency(target) as T;
    }
    //#endregion

    //#region disposable
    createObject<T>(target: Type<any>, injections: T[]): T {
        return Disposable.Wrap(new target(...injections));
    }

    disposeObject<T>(target: Type<any>): void {
        return Disposable.Dispose(target)
    }

    destroyAll() {
        this.dependencies.clear()
        for (let each of this.listSingletons()) {
            this.disposeObject(each)
        }
        this.singletons.clear()
    }
    //#endregion

    //#region utilities
    private getTypeName = <T extends Type<any>>(t: T | string) => {
        const rv = (typeof t === 'string') ? t : t?.name || t?.constructor.name
        if (!rv) {
            throw new Error(`somthing fucky passed to getTypeName => ${t}`)
        }
        return rv
    }
    private getTypeInstanceName = <T extends any>(t: Type<T>) => {
        return t.constructor.name
    }
    //#endregion
};

export const Injector = new InjectorFactory()

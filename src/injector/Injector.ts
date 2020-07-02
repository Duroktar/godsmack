import 'reflect-metadata';
import { Disposable } from '../framework/Disposable'
import { Logger, LogLevel } from '../framework/services/Logger';
import type { Type, InferType } from '../types';
import { is_newable } from '../utils/object';

export const SYMBOL_SINGLETON = Symbol.for('SINGLETON')

export class InjectorFactory {

  public logger: Logger = Logger.For(InjectorFactory, LogLevel.NONE)

  //#region api
  public registerDependencies(...classes: Type<any>[]) {
    classes.forEach((cls: Type<any>) => this.addDependency(cls, cls));
  }

  public resolve<T>(target: Type<any>): T {
    const { resolved, injections } = this.resolveTokens<T>(target);

    if (this.isSingleton(resolved)) {
      this.logger.debug('Resolving singleton for dependency =>', this.getTypeName(resolved))
      return this.upsertSingleton(resolved, injections);
    }

    this.logger.debug('Resolving new target instance for dependency =>', this.getTypeName(resolved))
    return this.createObject<T>(resolved, injections);
  }
  //#endregion

  //#region internals
  private types = new Map<string, Type<any>>()
  private dependencies = new Map<string, Type<any>>()
  private singletons = new Map<string, any>()
  private noOverrides: boolean = true;

  private resolveTokens<T>(t: Type<any>) {
    let resolved: any = (this.hasDependency(t)) ? this.getDependency(t) : t;

    // tokens are required dependencies, while injections are resolved tokens from the Injector
    const tokens: Type<any>[] = Reflect.getMetadata('design:paramtypes', resolved)?.filter((o: any) => o != null) || [];

    if (tokens.find(o => o.name === 'Object')) {
      const error = `Unable to resolve dependencies for => ${resolved.name}, deps => ${tokens.map(o => o.name)}`;
      const help = `Possible misuse of @Injectable() decorator on class ${resolved.name}`;
      throw new Error(`${error}\n${help}`);
    }

    const injections: T[] = tokens.map(token => this.resolve(token));
    this.registerDependencies(...tokens);

    return { resolved, injections };
  }
  //#endregion

  //#region information
  listDependencies(): string[] {
    return [...this.dependencies.keys()].map(n => `${n}->${this.dependencies.get(n)?.name}`);
  }

  listSingletons(): any[] {
    return [...this.singletons.keys()]
  }

  dependenciesAsJSON() {
    return [...this.dependencies.keys()].sort().reduce((acc, n) => {
      const klass = this.dependencies.get(n)
      return { ...acc, [n]: klass?.name }
    }, {});
  }

  singletonsAsJSON() {
    return [...this.singletons.keys()].sort().reduce((acc, n) => {
      const instance = this.singletons.get(n)
      return { ...acc, [n]: instance.constructor.name }
    }, {});
  }
  //#endregion

  //#region singletons
  isSingleton(target: Type<any>) {
    this.logger.debug('Determining if singleton. target =>', target)
    return (target as any)[SYMBOL_SINGLETON] || this.hasSingleton(target);
  }

  hasSingleton<T>(target: Type<T>) {
    this.logger.debug('Looking for singleton for target:', target)
    return this.singletons.has(this.getTypeName(target))
  }

  addSingleton<T>(newable: Type<T>, injections?: any): T {
    this.logger.debug('Setting singleton to NEW target instance:', this.getTypeName(newable), newable)
    const newObject: T = (injections && is_newable(newable))
      ? this.createObject(newable, injections)
      : this.resolve(newable);

    this.singletons.set(this.getTypeName(newable), newObject);
    return newObject;
  }

  addSingletonInstance<T extends Type<any>, I extends InferType<T>>(type: T, instance: I): I {
    this.logger.debug('Setting singleton to EXISTING target instance:', this.getInstanceName(instance), instance)
    this.singletons.set(this.getTypeName(type), instance);
    return instance
  }

  getSingleton<T>(target: Type<T>): T {
    this.logger.debug('Getting singleton:', this.getTypeName(target))
    return this.singletons.get(this.getTypeName(target))!
  }

  upsertSingleton<T>(target: Type<T>, injections: any): T {
    this.logger.debug('Upserting singleton =>', this.getTypeName(target))
    const dep = this.upsertDependency(target, target);
    if (!this.hasSingleton(dep)) {
      return this.addSingleton(dep, injections);
    }
    return this.getSingleton(dep);
  }

  upsertSingletonInstance<T extends Type<any>>(target: T, instance: InferType<T>): T {
    this.logger.debug('Upserting singleton instance =>', this.getTypeName(target))
    const dep = this.upsertDependency(target, instance.constructor);
    if (!this.hasSingleton(dep)) {
      return this.addSingletonInstance(dep, instance);
    }
    return instance;
  }
  //#endregion

  //#region dependencies
  hasDependency<T extends Type<any>>(target: T | string) {
    return this.dependencies.has(this.getTypeName(target))
  }

  setDependency<T extends Type<any>>(target: T | string, resolved: T) {
    return this.addDependency(target, resolved, true);
  }

  addDependency<T extends Type<any>>(target: T | string, resolved: T, override = false) {
    const targetName = this.getTypeName(target)
    const resolvedName = this.getTypeName(resolved)
    if (this.dependencies.has(targetName)) {
      if (this.noOverrides && !override) {
        this.logger.debug(`Skipping existing dependency => ${targetName}`)
        return this.dependencies
      }
      this.logger.debug(`Overriding existing dependency => ${targetName}`)
    } else {
      this.logger.debug(`Setting dependency => ${targetName} to => ${resolved}`)
    }
    this.updateTypes<T>(target, targetName, resolved, resolvedName);
    return this.dependencies.set(targetName, resolved)
  }

  getDependency<T extends Type<any>>(target: T | string): Type<any> {
    const tName = this.getTypeName(target);
    this.logger.debug('Getting dependency =>', tName)
    if (!this.dependencies.has(tName)) {
      this.logger.debug(`Dependency not found => ${tName}`)
    }
    return this.dependencies.get(tName)!
  }

  upsertDependency<T extends Type<any>>(target: T | string, resolved: T): T {
    this.logger.debug('Upserting dependency =>', this.getTypeName(target))
    if (!this.hasDependency(target)) {
      this.addDependency(target, resolved);
    }
    return (typeof target !== 'string') ? target : resolved;
  }
  //#endregion

  //#region types
  getTypes(): Map<string, Type<any>> {
    return this.types
  }

  getType<T extends Type<any>>(type: string | T) {
    return this.types.get(this.getTypeName(type))
  }

  private updateTypes<T extends Type<any>>(target: string | T, targetName: string, resolved: T, resolvedName: string) {
    if (!this.types.has(targetName)) {
      if (typeof target !== 'string') {
        this.logger.debug('Updating target Type =>', targetName, 'to target =>', target)
        this.types.set(targetName, target);
      }
      else {
        this.logger.debug('Updating target Type =>', targetName, 'to resolved =>', resolved)
        this.types.set(targetName, resolved);
      }
    }
    if (resolvedName !== Object.name && !this.types.has(resolvedName)) {
      this.logger.debug('Updating resolvedName Type =>', resolvedName, 'to resolved =>', resolved)
      this.types.set(resolvedName, resolved);
    }
  }
  //#endregion

  //#region disposable
  createObject<T>(target: Type<any>, injections: T[]): T {
    return new target(...injections);
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
  getTypeName = <T extends Type<any>>(t: T | string) => {
    const rv = (typeof t === 'string') ? t : t?.name || t?.constructor.name
    if (!rv) {
      throw new Error(`somthing fucky passed to getTypeName => ${t}`)
    }
    return rv
  }
  getInstanceName = <T extends any>(t: Type<T>) => {
    return t.constructor.name
  }
  //#endregion
};

export const Injector = new InjectorFactory()

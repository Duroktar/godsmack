import 'reflect-metadata';
import { Disposable } from '../framework/Disposable'
import { Logger } from '../services/Logger';
import type { Type } from '../types';

type ResolvedInjections<T> = {
  resolved: T;
  injections: Type<any>[];
};

export class InjectorFactory {

  public logger: Logger = Logger.For(InjectorFactory)

  //#region api
  public registerType<T extends any>(type: Type<T> | string, impl?: Type<T>, force = false) {
    this.addDependency(type, (impl || type) as any, force)
    return this
  }

  public registerInstance = <T extends any>(target: Type<T> | string, instance: T): T => {
    const typeName = this.getTypeName(target);
    this.instances.set(typeName, instance);
    return instance
  }

  public resolve<T extends any>(target: Type<T> | string): T {
    const typeName = this.getTypeName(target)

    if (this.instances.has(typeName))
      return this.instances.get(typeName)

    const upsertAndResolveDependency = (): Type<T> => {
      const dependency = this.getDependency(target);
      if (dependency != null)
        return dependency
      if (dependency == null && typeof target === 'string')
        throw new Error(`Target not found: ${target}`)
      this.insertDependency(typeName, target as Type<T>)
      return target as Type<T>
    }

    const resolved: Type<T> = upsertAndResolveDependency()

    const { injections } = this.getResolvedInjections(resolved);
    this.logger.debug('Resolving dependency =>', typeName)

    return this.registerInstance<T>(typeName, this.createObject(resolved, injections))
  }

  public hasDependency<T extends any>(target: Type<T> | string): boolean {
    return this.dependencies.has(this.getTypeName(target))
  }

  public getDependency<T extends any>(target: Type<T> | string): Type<T> | undefined {
    return this.dependencies.get(this.getTypeName(target)) as Type<T>
  }

  public insertDependency<T extends any>(target: Type<T> | string, resolved: Type<T>) {
    this.addDependency(target, resolved, false);
    return (typeof target !== 'string') ? target : resolved;
  }

  public overrideDependency<T extends any>(target: Type<T> | string, resolved: Type<T>) {
    this.addDependency(target, resolved, true);
    return (typeof target !== 'string') ? target : resolved;
  }

  public destroyAll() {
    const dependencies = this.dependencies.values();
    for (let each of dependencies) {
      this.disposeObject(each)
    }
    this.dependencies.clear()
  }

  public listDependencies({ sort = false, log = false } = {}): string[] {
    let result = [...this.dependencies.keys()];
    if (sort)
      result = result.sort();
    if (log)
      this.logger.info(result)
    return result
  }

  public dependenciesAsJSON() {
    return [...this.dependencies.keys()].sort().reduce((acc, n) => {
      const instance = this.dependencies.get(n)
      return { ...acc, [n]: instance?.constructor?.name }
    }, {});
  }
  //#endregion

  //#region internals
  private dependencies = new Map<string, Type<any>>()
  private instances = new Map<string, any>()
  private noOverrides: boolean = true;

  private resolveTokens<T extends Type<any>>(resolved: T): ResolvedInjections<T> {

    const reflected = Reflect.getMetadata('design:paramtypes', resolved);

    // tokens are required dependencies, while injections are resolved tokens from the Injector
    const tokens: Type<any>[] = reflected?.filter((o: any) => o != null) ?? [];

    Promise.resolve(() => {
      if (tokens.find(o => o.name === 'Object')) {
        const error = `Unable to resolve dependencies for => ${resolved.name}, deps => ${tokens.map(o => o.name)}`;
        const help = `Possible misuse of @Injectable() decorator on class ${resolved.name}`;
        throw new Error(`${error}\n${help}`);
      }
    })

    tokens.forEach((cls: Type<any>) => this.addDependency(cls, cls));

    return { resolved, injections: tokens.map(token => this.resolve<T>(token)) };
  }

  //#endregion

  //#region cache
  private __injectionCache = new Map()

  private getResolvedInjections(target: Type<any>) {
    if (!this.__injectionCache.has(target)) {
      this.__injectionCache.set(target, this.resolveTokens(target))
    }
    return this.__injectionCache.get(target)
  }
  //#endregion

  //#region dependencies

  private addDependency<T extends Type<any>>(target: T | string, resolvedMaybe: T, override = false) {
    const resolved =
      typeof target === 'string' ? resolvedMaybe :
      resolvedMaybe == null ? target : resolvedMaybe;

    const resolvedName = this.getTypeName(resolved)
    const targetName = this.getTypeName(target)

    if (this.dependencies.has(targetName)) {
      if (this.noOverrides || !override) {
        this.logger.debug(`Skipping existing dependencies => ${targetName}`)
        return this.dependencies
      }
      this.logger.debug(`Overriding existing dependencies => ${targetName}`)
    } else {
      this.logger.debug(`Setting dependencies => ${targetName} to => ${resolvedName}`)
    }

    this.dependencies.set(targetName, resolved)
  }
  //#endregion

  //#region disposable
  private createObject<T extends any>(target: Type<T>, injections: Type<any>[]): T {
    return new target(...injections);
  }

  private disposeObject<T extends typeof Disposable>(target: Type<T>): void {
    return Disposable.Dispose(target)
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
  //#endregion
};

export const Injector = new InjectorFactory()

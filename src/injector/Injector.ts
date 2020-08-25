import 'reflect-metadata';
import { Disposable } from '../framework/Disposable';
import { LogFactory, LogLevel } from '../services/Logger';
import type { Type } from '../types';

type ResolvedInjections<T> = {
  resolved: T;
  injections: Type<any>[];
};

export class Injector {
  private logger: LogFactory
  constructor() {
    this.logger = LogFactory.For(this)
  }

  //#region api
  public resolve<T extends any>(target: Type<T> | string): T {
    const typeName = this.getTypeName(target);

    if (this.instanceCache.has(typeName)) {
      return this.instanceCache.get(typeName)
    }

    const upsertDependency = (): Type<T> => {
      const dependency = this.getDependency(target);

      if (dependency != null)
        return dependency

      if (dependency == null && typeof target === 'string')
        throw new Error(`Target not found: ${target}`)

      this.insertDependency(typeName, target as Type<T>)

      return target as Type<T>
    }

    const resolved: Type<T> = upsertDependency();

    const { injections } = this.resolveTokens(resolved);
    this.logger.debug('Resolving dependency =>', typeName);

    const instance = this.createObject(resolved, injections);
    return this.registerInstance<T>(typeName, instance);
  }

  public registerType = <T extends any>(
    type: Type<T> | string,
    impl?: Type<T>,
    force = false,
  ) => {
    this.addDependency(type, (impl || type) as any, force)
    return this
  }

  public registerInstance = <T extends any>(
    target: Type<T> | string,
    instance: T,
  ): T => {
    const typeName = this.getTypeName(target);
    this.instanceCache.set(typeName, instance);
    return instance
  }

  public hotReloadDependency = <T extends any>(target: Type<T>) => {
    this.overrideDependency(target, target);
    this.replaceInstanceInCache(target);
    this.logger.info(`Hot-Swapped "${target.name}" dependency.`)
  }

  public hasDependency<T extends any>(
    target: string | Type<T>
  ) {
    const typename = this.getTypeName(target);
    return this.dependencies.has(typename);
  }

  public getDependency<T extends any>(target: Type<T> | string): Type<T> | undefined {
    return this.dependencies.get(this.getTypeName(target)) as Type<T>
  }

  public insertDependency<T extends any>(target: Type<T> | string, resolved: Type<T>) {
    this.addDependency(target, resolved, false);
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
  private instanceCache = new Map<string, any>()

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

    const resolve = this.resolve.bind(this);

    const injections = tokens
      .map(token => {
        const instance = this.resolve<T>(token)
        return new Proxy(instance, {
          get(proxyTarget, prop, receiver) {
            const reloaded = resolve(token);
            return Reflect.get(reloaded, prop, receiver);
          },
        })
      })

    return { resolved, injections };
  }

  private addDependency<T extends Type<any>>(
    target: T | string,
    resolvedMaybe: T,
    override = false,
  ) {
    const resolvedType = typeof target === 'string'
      ? resolvedMaybe : resolvedMaybe == null
        ? target : resolvedMaybe;

    const targetName = this.getTypeName(target)

    if (this.dependencies.has(targetName)) {
      if (!override) {
        return this.dependencies
      }

      const typeName = this.getTypeName(resolvedType)
      this.logger.debug(`Overriding => ${targetName} to => ${typeName}`)
    }
    else {
      const typeName = this.getTypeName(resolvedType)
      this.logger.debug(`Setting => ${targetName} to => ${typeName}`)
    }

    this.dependencies.set(targetName, resolvedType)
  }

  private overrideDependency<T extends any>(target: Type<T> | string, resolved: Type<T>) {
    this.addDependency(target, resolved, true);
    return (typeof target !== 'string') ? target : resolved;
  }

  private purgeInstanceFromCache<T extends any>(target: string | Type<T>) {
    const typeName = this.getTypeName(target)
    if (this.instanceCache.has(typeName))
      this.instanceCache.delete(typeName)
  }

  private replaceInstanceInCache<T extends any>(target: string | Type<T>) {
    this.purgeInstanceFromCache(target)
    this.resolve(target)
  }

  private createObject<T extends any>(target: Type<T>, injections: Type<any>[]): T {
    return new target(...injections);
  }

  private disposeObject<T extends typeof Disposable>(target: Type<T>): void {
    return Disposable.Dispose(target)
  }

  public getTypeName = <T extends Type<any>>(t: T | string) => {
    const rv = (typeof t === 'string') ? t : t?.name || t?.constructor.name
    if (!rv) {
      throw new Error(`somthing fucky passed to getTypeName => ${t}`)
    }
    return rv
  }
  //#endregion
};

export const DefaultInjector = new Injector()

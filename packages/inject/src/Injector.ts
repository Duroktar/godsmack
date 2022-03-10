import type { Type } from './types';
import { proxify } from './proxify';
import type { IInjector } from './interface/IInjector';
import { reflectTargetType, staticDepsProp } from './constants';

type InjectorSettings = {
  hotSwapping?: boolean;
}

export class Injector implements IInjector {
  constructor(
    private settings: InjectorSettings = { hotSwapping: false },
  ) {
    this.__logger = console
  }

  //#region api
  public resolve<T, K extends Type<T> = Type<T>>(
    target: K | string,
  ): T {
    const typeName = this.getTypeName(target);

    if (this.__instanceCache.has(typeName))
      return this.__instanceCache.get(typeName)

    const instance = this.create(target);

    return instance
  }

  public registerSingleton = <T>(
    type: Type<T> | string,
  ) => {
    this.__singletons.add(this.getTypeName(type))
    return this
  }

  public registerType = <T>(
    type: Type<T> | string,
    impl?: Type<T>,
    force = false,
  ) => {
    this.__addDependency(type, (impl || type) as any, force)
    return this
  }

  public registerInstance = <T>(
    target: Type<T> | string,
    instance: T,
  ): T => {
    const typeName = this.getTypeName(target);
    this.__instanceCache.set(typeName, instance);
    return instance
  }

  public hasDependency<T>(
    target: string | Type<T>
  ) {
    const typename = this.getTypeName(target);
    return this.__dependencyCache.has(typename);
  }

  public getDependency<T>(target: Type<T> | string): Type<T> | undefined {
    return this.__dependencyCache.get(this.getTypeName(target)) as Type<T>
  }

  public insertDependency<T>(target: Type<T> | string, resolved: Type<T>, override?: boolean) {
    this.__addDependency(target, resolved, override);
    return (typeof target !== 'string') ? target : resolved;
  }

  public upsertDependency = <T>(target: Type<T> | string): Type<T> => {
    const dependency = this.getDependency(target);
    const typeName = this.getTypeName(target);

    if (dependency != null)
      return dependency

    if (typeof target === 'string')
      throw new InjectorDependencyNotFoundError(target)

    return this.insertDependency(typeName, target)
  }

  public reloadDependency = <T>(target: Type<T> | string): T => {
    // this.logger.info(`Hot-Swapping "${target.name}" dependency.`)
    // TODO: this needs more testing
    const dep = this.getDependency(target)!;
    this.__overrideDependency(target, dep);
    return this.__replaceInstanceInCache(target);
  }

  public create<T>(target: Type<T> | string): T {
    // this.logger.debug('Resolving dependency =>', typeName);

    const resolved = this.upsertDependency(target);

    const { injections } = this.__resolveTokens(resolved);

    const instance = this.__createObject(resolved, injections);

    const typeName = this.getTypeName(target);

    if (this.__singletons.has(typeName) ||
        this.__reflectTargetType(resolved) === 'singleton'
    ) {
      this.__instanceCache.set(typeName, instance);
    }

    // this.logger.debug('created', instance);

    return instance;
  }

  private __reflectTargetType<T>(resolved: Type<T>) {
    return Reflect.getMetadata(reflectTargetType, resolved);
  }

  public async destroyAll() {
    const deps = [...this.__instanceCache.values()]
    await Promise.allSettled(
      deps.map(each => this.__disposeObject(each)))
    this.__dependencyCache.clear()
    this.__instanceCache.clear()
  }

  public listDependencies({ sort = false, log = false } = {}): string[] {
    let result = [...this.__dependencyCache.keys()]
    if (sort)
      result = result.sort()
    if (log)
      this.__logger.info(result)
    return result
  }


  public dependenciesAsJSON() {
    const cacheKeys = [...this.__dependencyCache.keys()]
    return cacheKeys.sort().reduce((acc, n) => {
      const instance = this.__dependencyCache.get(n)
      return { ...acc, [n]: instance?.constructor?.name }
    }, {});
  }

  public getTypeName = <T extends Type<any>>(t: T | string) => {
    const rv = (typeof t === 'string') ? t : t?.name || t?.constructor.name
    if (!rv)
      throw new InjectorGetTypeNameError(t)
    return rv
  }

  //#endregion

  //#region internals
  private __dependencyCache = new Map<string, Type<any>>()
  private __instanceCache = new Map<string, any>()
  private __logger: Console
  private __singletons = new Set<string>()

  private __resolveTokens<T extends Type<any>>(resolved: T) {

    const reflected = Reflect.getMetadata('design:paramtypes', resolved);

    // tokens are required dependencies, while injections are resolved tokens from the Injector
    const tokens: Type<any>[] = reflected
      ?.map((o: any, i: number) => {
        if (o.name === 'Object') {
          // @ts-expect-error
          return resolved[staticDepsProp]?.[i];
        }
        return o
      })
      ?.filter((o: any) => o != null) ?? []

    if (tokens.find(o => o.name === 'Object')) {
      throw new InjectorDependencyResolutionError(resolved, tokens);
    }

    tokens.forEach((cls: Type<any> | string) => {
      if (typeof cls === 'string') {
        const impl = this.getDependency(cls)
        if (impl)
          this.__addDependency(cls, impl)
      } else {
        this.__addDependency(cls, cls)
      }
    });

    const injections: Type<any>[] =
      this.settings?.hotSwapping
        ? tokens.map(token => proxify<T>(this, token))
        : tokens.map(token => this.resolve(token));

    return { resolved, injections };
  }

  private __addDependency<T extends Type<any>>(
    target: T | string,
    resolvedMaybe: T,
    override = false,
  ): void {
    const typeName = this.getTypeName(target)

    if (this.__dependencyCache.has(typeName)) {
      if (!override) {
        return
      }
      // const typeName = this.getTypeName(resolvedType)
      // this.logger.debug(`Overriding => ${targetName} to => ${typeName}`)
    }
    else {
      // const typeName = this.getTypeName(resolvedType)
      // this.logger.debug(`Setting => ${targetName} to => ${typeName}`)
    }

    const resolvedType =
      typeof target === 'string' ? resolvedMaybe
      : resolvedMaybe == null    ? target
      : /* otherwise */            resolvedMaybe;

    this.__dependencyCache.set(typeName, resolvedType)

    this.__instanceCache.delete(typeName)
  }

  private __overrideDependency<T>(target: Type<T> | string, resolved: Type<T>) {
    this.__addDependency(target, resolved, true);
    return (typeof target !== 'string') ? target : resolved;
  }

  private __purgeInstanceFromCache<T>(target: string | Type<T>) {
    const typeName = this.getTypeName(target)
    return this.__instanceCache.delete(typeName)
  }

  private __replaceInstanceInCache<T>(target: Type<T> | string) {
    this.__purgeInstanceFromCache(target)
    return this.resolve<T>(target)
  }

  private __createObject<T>(target: Type<T>, injections: Type<any>[]): T {
    this.__logger.log('creating object, typeName:', this.getTypeName(target))
    return new target(...injections);
  }

  private async __disposeObject<T>(target: Type<T>): Promise<void> {
    // @ts-expect-error
    const fn: Function | undefined = target?.dispose;
    return await fn?.()
  }
  //#endregion
};

class InjectorDependencyResolutionError extends Error {
  constructor(target: Type<any>, tokens: Type<any>[]) {
    const error = `Unable to resolve dependencies for => ${target.name}, deps => ${tokens.map(o => o.name)}`;
    const help = `Possible misuse of @Injectable() decorator on class ${target.name}`;
    super(`${error}\n${help}`)
  }
}

class InjectorDependencyNotFoundError extends Error {
  constructor(target: string) {
    super(`Target not found: ${target}`)
  }
}

class InjectorGetTypeNameError extends Error {
  constructor(target: Type<any> | string) {
    super(`something fucky got passed to getTypeName => ${target}`)
  }
}

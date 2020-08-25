import type { Container } from './framework';

export interface StaticTestProps {
  describe: typeof describe;
  it: typeof test;
  expect: typeof expect;
}

export interface IContainerApplication<T extends any> {
  container: Container<T>
}

export type InferApplicationContainerType<T> = T extends IContainerApplication<infer C> ? C : never;
export type InferApplicationTypes<T> = InferContainerTypes<InferApplicationContainerType<T>>
export type InferContainerTypes<T> = T extends Container<infer C> ? C : never


export type ValueOf<T> = T[keyof T];

export type Writeable<T> = { -readonly [P in keyof T]: T[P] };

export type Type<T> = {
  new(...args: any): T;
}

export type InferType<T> = T extends Type<infer U> ? U : never

export type EmptyType = {
  __empty__: true;
};

export interface IValue<T> {
  type: 'value'
  value: T
}

export interface IError<E extends Error> {
  type: 'error'
  error: E
}

export type IResult<T, E extends Error> = IValue<T> | IError<E>

export type BodyRequest<T = {}> = {
  body: T
}

export type ParamsRequest<T = {}> = {
  params: T
}

export type QueryRequest<T = {}> = {
  query: T
}

export type ApiRequestType<T = {}> =
  | ParamsRequest<T>
  | QueryRequest<T>
  | BodyRequest<T>


export declare type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends Array<infer U> ? Array<DeepPartial<U>> : T[P] extends ReadonlyArray<infer U> ? ReadonlyArray<DeepPartial<U>> : DeepPartial<T[P]>;
};

/**
 * Thf function actually returns a string, but we dupe the Type System
 * for a better user experience.
 *
 * @example
 *
 * app.container.addSingleton(nameof<SomeInterface>(), SomeImplementation)
 *
 * const implementation = app.resolve<SomeInterface>(nameof<SomeInterface>())
 */
export declare function nameof<T>(func?: (obj: T) => any): Type<T>

import type { Container } from "./Container";

export interface StaticTestProps {
  describe: typeof describe;
  it: typeof test;
  expect: typeof expect;
}

export type EmptyType = { ['@godsmack/di:empty-type']: true; };

export type InferContainerT<T> =
  T extends Container<infer C> ? Exclude<C, EmptyType> :
  /* otherwise */                never

export type InferType<T> =
  T extends Type<infer U> ? U :
  /* otherwise */           never

export type Type<T> = { new(...args: any): T; }

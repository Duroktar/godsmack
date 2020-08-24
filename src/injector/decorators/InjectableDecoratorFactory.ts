import { DefaultInjector } from '../Injector';
import type { Type } from '../../types';

type GenericClassDecorator<T> = (target: T) => void;

export const InjectableDecoratorFactory = ({ singleton = false, Injector = DefaultInjector, registerDependencies = true } = {}): GenericClassDecorator<Type<object>> => {
  return (target: Type<object>) => { };
};

import { Injector as DefaultInjector } from '../Injector';
import { createTaggedSingleton } from '../../utils/createTaggedSingleton';

type GenericClassDecorator<T> = (target: T) => void;

export const InjectableDecoratorFactory = ({ singleton = false, Injector = DefaultInjector, registerDependencies = true } = {}): GenericClassDecorator<Type<object>> => {
    return (target: Type<object>) => {
        // do something with `target`, e.g. some kind of validation or passing it to the Injector and store them
        if (registerDependencies)
            Injector.registerDependencies(singleton // ?
                ? createTaggedSingleton(target)
                : target);
    };
};

import { InjectableDecoratorFactory } from "./InjectableDecoratorFactory";

export const Singleton = () => InjectableDecoratorFactory({ singleton: true });

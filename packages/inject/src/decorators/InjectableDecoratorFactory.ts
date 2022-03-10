import type { Type } from '../types';
import { reflectTargetType } from '../constants';

export const InjectableDecoratorFactory = ({ singleton = false } = {}) => {
  return (target: Type<object>) => {
    const targetType = singleton ? 'singleton' : 'transient';
    Reflect.defineMetadata(reflectTargetType, targetType, target);
  };
};

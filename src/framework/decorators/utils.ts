import { CONTROLLER_ARGS_DATA } from '../../constants';

export type ParamMetadata<T> = {
  propertyKey: string | symbol
  type: T
  parameterIndex: number

  /**
   * Used to pick params with the Body and Query decorators.
   *
   * @type {string[]}
   */
  options: string[]
};

export const paramDecoratorFactory = <T>(type: T, ...params: string[]): ParameterDecorator => {
  return (target, propertyKey, parameterIndex) => {
    const existing: ParamMetadata<T>[] = Reflect.getMetadata(CONTROLLER_ARGS_DATA, target.constructor, propertyKey) || [];
    existing.push({ propertyKey, type, parameterIndex, options: params })
    return Reflect.defineMetadata(CONTROLLER_ARGS_DATA, existing, target.constructor, propertyKey);
  }
}

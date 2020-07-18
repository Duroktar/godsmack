import { CONTROLLER_ARGS_DATA } from '../../constants';

export type ParamMetadata<T> = {
  propertyKey: string | symbol
  type: T
  parameterIndex: number

  /**
   * TODO
   *
   * @type {*}
   */
  options: any[]
};

export const paramDecoratorFactory = <T>(type: T, ...args: any[]): ParameterDecorator => {
  return (target, propertyKey, parameterIndex) => {
    const existing: ParamMetadata<T>[] = Reflect.getMetadata(CONTROLLER_ARGS_DATA, target.constructor, propertyKey) || [];
    existing.push({ propertyKey, type, parameterIndex, options: args })
    return Reflect.defineMetadata(CONTROLLER_ARGS_DATA, existing, target.constructor, propertyKey);
  }
}

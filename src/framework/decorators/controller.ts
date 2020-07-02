import { ROUTE_DATA } from '../../constants';

export type PathMetadata = {
  path: string;
  methodName: any;
};

export function ExtendUrl(path: any): PropertyDecorator {
  return (target, key) => {
    const rest = Reflect.getMetadata(ROUTE_DATA, target.constructor) || [];
    const meta = [...rest, { path, methodName: key }] as PathMetadata[];
    return Reflect.defineMetadata(ROUTE_DATA, meta, target.constructor);
  }
}

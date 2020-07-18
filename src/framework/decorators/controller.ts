import { ROUTE_DATA } from '../../constants';
import { paramDecoratorFactory } from './utils';

export type PathMetadata = {
  path: string;
  methodName: any;
};

export function ExtendUrl(path: any): PropertyDecorator {
  return (target, propertyKey) => {
    const existing = Reflect.getMetadata(ROUTE_DATA, target.constructor) || [];
    existing.push({ path, methodName: propertyKey } as PathMetadata)
    return Reflect.defineMetadata(ROUTE_DATA, existing, target.constructor);
  }
}

export type HttpParamType =
  | 'REQ'
  | 'RES'
  | 'CTX'
  | 'BODY'
  | 'QUERY'
  | 'USER_ID'
  ;

export function Req(): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('REQ')
}

export function Res(): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('RES')
}

export function Ctx(): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('CTX')
}

export function Body(): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('BODY')
}

export function Query(): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('QUERY')
}

export function UserId(): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('USER_ID')
}

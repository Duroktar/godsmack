import type { Request, Response } from 'express';
import { ROUTE_DATA } from '../../constants';
import type { JwtAuthData, JwtPayload } from '../../services/AuthService';
import { assertNever } from '../../utils/assert';
import { paramDecoratorFactory, ParamMetadata } from './utils';

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
  | 'PARAMS'
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

export function Body(...params: string[]): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('BODY', ...params)
}

export function Query(...params: string[]): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('QUERY', ...params)
}

export function Params(...params: string[]): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('PARAMS', ...params)
}

export function UserId(): ParameterDecorator {
  return paramDecoratorFactory<HttpParamType>('USER_ID')
}

export type ReqData = {
  [key: string]: any;
  __query: any;
  __body: any;
  __auth?: JwtPayload<JwtAuthData>;
};

export function getDecoratorArgs(
  arg: ParamMetadata<HttpParamType>,
  req: Request,
  res: Response,
  reqData: ReqData,
) {
  switch (arg.type) {
    case 'BODY': return req.body;
    case 'QUERY': return req.query;
    case 'REQ': return req;
    case 'RES': return res;
    case 'CTX': return { req, res };
    case 'PARAMS': return req.params;
    case 'USER_ID': return reqData.__auth?.userId;
    default:
      assertNever(arg.type)
  }
}

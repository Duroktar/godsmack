import { AUTH_DATA } from '../../constants';

type AuthType =
  | 'jwt'
  ;

export type AuthMetadata = {
  auth: AuthType;
  methodName: any;
};

export function AuthorizeJWT(): PropertyDecorator {
  return (target, key) => {
    const rest = Reflect.getMetadata(AUTH_DATA, target.constructor) || [];
    const meta = [...rest, { auth: 'jwt', methodName: key }] as AuthMetadata[];
    return Reflect.defineMetadata(AUTH_DATA, meta, target.constructor);
  }
}

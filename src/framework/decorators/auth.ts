import { AUTH_ROUTE_DATA, AUTH_ROLES_CLAIM, AUTH_OWNER_CLAIM } from './constants';

type PropertyKey = {
  methodName: any;
};

type AuthType =
  | 'jwt'
  ;

export type JwtClaim = { auth: AuthType; };
export type JwtClaimMetadata = JwtClaim & PropertyKey

export function AuthorizeJWT(): PropertyDecorator {
  return (target, key) => {
    const rest = Reflect.getMetadata(AUTH_ROUTE_DATA, target.constructor) || [];
    const meta = [...rest, { auth: 'jwt', methodName: key }] as JwtClaimMetadata[];
    return Reflect.defineMetadata(AUTH_ROUTE_DATA, meta, target.constructor);
  }
}

export type RolesClaim<T = string> = { roles: T[]; };
export type RolesClaimMetadata<T = string> = RolesClaim<T> & PropertyKey

export function AuthorizeRoles<T extends string>(roles: T[]): PropertyDecorator {
  return (target, key) => {
    const rest = Reflect.getMetadata(AUTH_ROLES_CLAIM, target.constructor) || [];
    const meta = [...rest, { roles, methodName: key }] as RolesClaimMetadata<T>[];
    return Reflect.defineMetadata(AUTH_ROLES_CLAIM, meta, target.constructor);
  }
}

export type OwnerClaim = {
  key: string;
  from?: 'body' | 'params';
}

export type OwnersClaim = { owners: OwnerClaim[] };
export type OwnerClaimMetadata = OwnersClaim & PropertyKey;

export function AuthorizeOwner(owners: OwnerClaim[]): PropertyDecorator {
  return (target, key) => {
    const rest = Reflect.getMetadata(AUTH_OWNER_CLAIM, target.constructor) || [];
    const meta = [...rest, { owners, methodName: key }] as OwnerClaimMetadata[];
    return Reflect.defineMetadata(AUTH_OWNER_CLAIM, meta, target.constructor);
  }
}

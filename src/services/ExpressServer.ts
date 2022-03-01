import express, { NextFunction, Request, RequestHandler, Response } from "express";
import { getDecoratorArgs, HttpParamType, JwtClaim, JwtClaimMetadata, OwnerClaimMetadata, PathMetadata, ReqData, RolesClaimMetadata } from '../framework/decorators';
import { AUTH_OWNER_CLAIM, AUTH_ROLES_CLAIM, AUTH_ROUTE_DATA, CONTROLLER_ARGS_DATA, ROUTE_DATA } from '../framework/decorators/constants';
import { ParamMetadata } from '../framework/decorators/utils';
import { HttpServerProvider } from '../framework/HttpServer';
import { Singleton } from '../injector/decorators';
import type { IController } from '../interfaces/IController';
import type { IHttpServer } from '../interfaces/IHttpServer';
import type { Type } from '../types';
import { isNullOrUndefined } from '../utils/assert';
import { takeLeadingWord } from '../utils/string';
import { AuthUtilsService } from './AuthService';

@Singleton()
export class ExpressServer extends HttpServerProvider implements IHttpServer {
  public engine = express()

  public onLoadServices = () => {
    const authService = this.app.container.resolve(AuthUtilsService);

    for (let endpoint of this.controllers.keys()) {
      const klass: Type<IController<any>> | undefined = this.controllers.get(endpoint);

      if (isNullOrUndefined(klass))
        return;

      const instance: IController<any> = this.app.container.resolve(klass);

      const grantedRoutes: Record<string, JwtClaim> = (
        (Reflect.getMetadata(AUTH_ROUTE_DATA, klass) as JwtClaimMetadata[]) ?? []
      )?.reduce((acc, val) => ({ ...acc, [val.methodName]: val }), {});

      const grantedRoles: Record<string, RolesClaimMetadata> = (
        (Reflect.getMetadata(AUTH_ROLES_CLAIM, klass) as RolesClaimMetadata[]) ?? []
      )?.reduce((acc, val) => ({ ...acc, [val.methodName]: val }), {});

      const grantedOwners: Record<string, OwnerClaimMetadata> = (
        (Reflect.getMetadata(AUTH_OWNER_CLAIM, klass) as OwnerClaimMetadata[]) ?? []
      )?.reduce((acc, val) => ({ ...acc, [val.methodName]: val }), {});

      ["create", "get", "delete", "patch", "update"].forEach((reqType) => {
        const auth = grantedRoutes[reqType];
        const roles = grantedRoles[reqType];
        const owners = grantedOwners[reqType];
        this.setupHandler(
          instance,
          reqType,
          endpoint,
          undefined,
          auth,
          roles,
          owners,
          authService,
        );
      });

      const extendedRoutes: PathMetadata[] | undefined = Reflect.getMetadata(ROUTE_DATA, klass);

      if (isNullOrUndefined(extendedRoutes))
        return;

      for (let route of extendedRoutes) {
        const { path, methodName } = route;
        const auth = grantedRoutes[methodName];
        const roles = grantedRoles[methodName];
        const owners = grantedOwners[methodName];
        const reqType = takeLeadingWord(methodName);
        const subPath = path.startsWith("/") ? path : "/" + path;
        this.setupHandler(
          instance,
          reqType,
          endpoint + subPath,
          methodName,
          auth,
          roles,
          owners,
          authService,
        );
      }
    };
  };

  //#region Internals
  private setupHandler(
    instance: any,
    reqType: string,
    endpoint: string,
    methodName = reqType,
    authType: JwtClaim | null = null,
    requiredRoles: RolesClaimMetadata | null = null,
    requiredOwners: OwnerClaimMetadata | null = null,
    authService: AuthUtilsService | null = null
  ) {
    if (instance[methodName] != null) {

      const authArgs = [authType, requiredRoles, requiredOwners, authService] as const

      const makeHandlerWithDataFrom = (t: 'body' | 'query') => {
        return this.makeHandler(instance[methodName], instance, t, ...authArgs)
      }

      switch (reqType) {
        case "create":
        case "post":
          this.post(endpoint, makeHandlerWithDataFrom("body"));
          break;
        case "get":
          this.get(endpoint, makeHandlerWithDataFrom("query"));
          break;
        case "delete":
          this.delete(endpoint, makeHandlerWithDataFrom("body"));
          break;
        case "patch":
          this.patch(endpoint, makeHandlerWithDataFrom("body"));
          break;
        case "put":
          this.put(endpoint, makeHandlerWithDataFrom("body"));
          break;
        default:
          throw new Error(
            "Server has unimplemented Controller Method: " + reqType
          );
      }
    }
  }

  private makeHandler(
    handler: Function,
    handlerThisCtx: any,
    key: "query" | "body",
    authType: JwtClaim | null,
    requiredRoles: RolesClaimMetadata | null,
    requiredOwners: OwnerClaimMetadata | null,
    authService: AuthUtilsService | null
  ): RequestHandler {

    const needsAuthService = (authType || requiredRoles || requiredOwners);

    if (needsAuthService && authService == null)
      throw new Error('No Auth Service setup to handle auth decorators.');

    return async (req: Request, res: Response, next: NextFunction) => {

      const reqData = {
        ...req[key],
        __query: req.query,
        __body: req.body,
      } as ReqData;

      try {

        if (needsAuthService && authService) {
          reqData.__auth = authService.jwtAuthorizationFlow(req, requiredRoles?.roles);
        }

        if (requiredOwners && authService) {
          console.error({ authService, TODO: 'FINISH ME' })
          console.error({ requiredOwners, TODO: 'FINISH ME' })
          throw new Error('Not implemented yet.. Use Tsoa Controllers instead.')
        }

        const args: any[] = [reqData];

        (
          (Reflect.getOwnMetadata(
            CONTROLLER_ARGS_DATA,
            handlerThisCtx.constructor,
            handler.name,
          ) || []) as ParamMetadata<HttpParamType>[]
        )
          .filter(arg => arg.propertyKey === handler.name)
          .sort((a, b) => a.parameterIndex - b.parameterIndex)
          .forEach(arg => {
            let payload = getDecoratorArgs(arg, req, res, reqData);
            if (arg.options?.length) {
              const prop = arg.options[0]
              payload = payload[prop]
            }
            args[arg.parameterIndex] = payload
          });

        args.push({ req, res }) // Always pass as the last argument to handler

        const result = await handler.apply(handlerThisCtx, args);

        switch (typeof result) {
          case "bigint":
          case "boolean":
          case "function":
          case "number":
          case "string":
          case "symbol":
          case "undefined": {
            res.setHeader('Content-Type', 'application/json; charset=utf-8')
            return res.send(result);
          }
          default:
            return res.send(JSON.stringify(result));
        }
      }
      catch (handlerError) {
        return next(handlerError);
      }
    };
  }
  //#endregion
}

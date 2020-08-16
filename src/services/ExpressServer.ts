import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import cors from 'cors';
import express, { NextFunction, Request, RequestHandler, Response } from "express";
import { resolve } from 'path';
import { AUTH_OWNER_CLAIM, AUTH_ROLES_CLAIM, AUTH_ROUTE_DATA, CONTROLLER_ARGS_DATA, ROUTE_DATA } from '../constants';
import { getDecoratorArgs, HttpParamType, JwtClaim, JwtClaimMetadata, OwnerClaimMetadata, PathMetadata, ReqData, RolesClaimMetadata } from '../framework/decorators';
import { ParamMetadata } from '../framework/decorators/utils';
import { HttpServerProvider } from '../framework/HttpServer';
import { SettingsService } from '../framework/Settings';
import { Singleton } from '../injector/decorators';
import { IController } from '../interfaces/IController';
import { IHttpServer } from '../interfaces/IHttpServer';
import { Type } from '../types';
import { AuthUtilsService } from './AuthService';

@Singleton()
export class ExpressServer extends HttpServerProvider implements IHttpServer {
  //#region Public Api
  public engine = express()

  /**
   * Used to add and configure Health Check middleware
   * to the server.
   *
   * @param {string} [path='/health']
   * @returns
   * @memberof ExpressServer
   */
  public useHealthCheck(path: string = "/health") {
    this.get(path, (req, res) => {
      res.send({ ServerId: ExpressServer.name, Status: "OK" });
    });
    this.logger.info("Health checks enabled @", path);
    return this;
  }

  /**
   * Used to add and configure Controller middleware
   * to the server.
   *
   * @param {string} [controllerDir]
   * @returns
   * @memberof ExpressServer
   */
  public useControllers(controllerDir?: string) {
    this.parseJsonBody();
    const controllerSettings = this.app.container
      .resolve(SettingsService)
      .get('controllers');
    const actualControllerDir = controllerDir ?? controllerSettings.dirname
    this.logger.info("Using Controllers from dir:", actualControllerDir);
    return super.useControllers(actualControllerDir);
  }

  /**
   * Enables JSON body parsing in requests.
   *
   * @param {bodyParser.OptionsJson} [options]
   * @returns
   * @memberof ExpressServer
   */
  public parseJsonBody(options?: bodyParser.OptionsJson) {
    this.engine.use(bodyParser.json(options));
    this.logger.info("JSON body parsing enabled");
    return this;
  }

  /**
   * Enables Cookie parsing.
   *
   * @param {string} secret
   * @param {cookieParser.CookieParseOptions} [options]
   * @returns
   * @memberof ExpressServer
   */
  public parseCookies(secret?: string, options?: cookieParser.CookieParseOptions) {
    this.engine.use(cookieParser(secret, options) as any);
    this.logger.info("Cookie parsing enabled");
    return this;
  }

  /**
   * Used to enable static file serving from a directory
   * of choice.
   *
   * @param {string} path
   * @param {Parameters<typeof express.static>[1]} [options]
   * @returns
   * @memberof ExpressServer
   */
  public serveStaticFiles(
    path: string,
    options?: Parameters<typeof express.static>[1] & { spaFallback?: boolean | string | null; cors?: cors.CorsOptions | cors.CorsOptionsDelegate; },
  ) {
    const { spaFallback, cors: corsOptions, ..._options } = options ?? {} as any
    if (options?.cors) this.engine.use(cors(corsOptions));
    this.engine.use(express.static(path, _options));
    this.useSpaFallback = spaFallback ?? false;
    this.spaFallbackPath = path;
    this.logger.info(`Serving static files from dir: ${path}`);
    return this;
  }
  //#endregion

  onServerStarted = () => {
    const authService = this.app.container.resolve(AuthUtilsService);
    [...this.controllers.keys()].forEach((endpoint) => {
      const klass: Type<IController<any>> | undefined = this.controllers.get(
        endpoint
      );

      if (!klass) return;

      const instance: any = this.app.container.resolve<IController<any>>(klass);

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

      const extendedRoutes = Reflect.getMetadata(ROUTE_DATA, klass);

      if (extendedRoutes) {
        for (let route of extendedRoutes as PathMetadata[]) {
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
      }
    });

    // Register this last or it will swallow the any handler request
    // set up after it.
    if (this.useSpaFallback) {

      const { spaFallbackPath, useSpaFallback } = this

      const htmlFileName = typeof useSpaFallback === 'string'
        ? useSpaFallback
        : 'index.html';

      // All GET request handled by INDEX file
      this.engine.get('*', function (req: Request, res: Response) {
        res.sendFile(resolve(spaFallbackPath, htmlFileName));
      });
    }

    super.onServerStarted();
  };

  //#region Internals
  private useSpaFallback: boolean | string = false
  private spaFallbackPath!: string // set when useSpaFallback is set

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

      let logString = "Setting up controller " + "(" + reqType + "): " + endpoint;
      if (methodName !== reqType) logString += " (handler=" + methodName + ")"
      this.logger.info(logString);

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
          const authHeader = authService.getAuthHeaderFromRequest(req);
          const authRoles = requiredRoles?.roles;

          reqData.__auth = authService.authorizeFlow(authHeader, authRoles);
        }

        if (requiredOwners && authService) {
          console.log({ authService, TODO: 'FINISH ME' })
          console.log({ requiredOwners, TODO: 'FINISH ME' })
        }

        let customArgs: ParamMetadata<HttpParamType>[];

        customArgs = Reflect.getOwnMetadata(
          CONTROLLER_ARGS_DATA,
          handlerThisCtx.constructor,
          handler.name,
        ) || [];

        let args: any[] = [reqData];

        if (customArgs.length > 0) {
          customArgs
            .filter(arg => arg.propertyKey === handler.name)
            .sort((a, b) => a.parameterIndex - b.parameterIndex)
            .forEach(arg => {
              let payload = getDecoratorArgs(arg, req, res, reqData);
              if (arg.options?.length) {
                const prop = arg.options[0]
                payload = payload[prop]
              }
              args[arg.parameterIndex] = payload
            })
        }

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

function takeLeadingWord(text: string) {
  let res = "";
  let cursor = 0;
  let nextChar = text.charAt(cursor);
  do {
    res += nextChar;
    nextChar = text.charAt(++cursor);
  } while (cursor < text.length && nextChar.toUpperCase() !== nextChar);
  return res;
}

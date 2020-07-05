import bodyParser from "body-parser";
import express, { Request, Response, RequestHandler } from "express";
import { Singleton } from "../../injector";
import { HttpServerProvider } from "../HttpServer";
import type { IController } from "../../interfaces";
import type { Type } from "../../types";
import { ROUTE_DATA, AUTH_DATA } from "../../constants";
import { PathMetadata } from "../decorators";
import { AuthMetadata } from "../decorators/auth";
import { AuthService } from "./AuthService";
import { http } from "../../utils";

@Singleton()
export class ExpressServer extends HttpServerProvider {
  public __server: express.Server = express();

  //#region Public Api
  /**
   * Used to add and configure Health Check middleware
   * to the Express server.
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
   * Enables JSON body parsing in requests.
   *
   * @param {bodyParser.OptionsJson} [options]
   * @returns
   * @memberof ExpressServer
   */
  public parseJsonBody(options?: bodyParser.OptionsJson) {
    this.__server.use(bodyParser.json(options));
    this.logger.info("JSON body parsing enabled");
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
    options?: Parameters<typeof express.static>[1]
  ) {
    this.__server.use(express.static(path, options));
    this.logger.info(`Serving static files from dir: ${path}`);
    return this;
  }
  //#endregion

  //#region Internals
  public onServerStarted = () => {
    const authService = this.app.container.resolve(AuthService);
    [...this.controllers.keys()].forEach((endpoint) => {
      const klass: Type<IController<any>> | undefined = this.controllers.get(
        endpoint
      );

      if (!klass) return;

      const instance: any = this.app.container.resolve<IController<any>>(klass);

      const authenticatedRoutes: Record<string, AuthMetadata[]> = (
        (Reflect.getMetadata(AUTH_DATA, klass) as AuthMetadata[]) ?? []
      )?.reduce((acc, val) => ({ ...acc, [val.methodName]: val }), {});

      ["create", "get", "delete", "patch", "update"].forEach((reqType) => {
        const auth = authenticatedRoutes[reqType];
        this.setupHandler(
          instance,
          reqType,
          endpoint,
          undefined,
          auth,
          authService
        );
      });

      const extendedRoutes = Reflect.getMetadata(ROUTE_DATA, klass);

      if (extendedRoutes) {
        for (let route of extendedRoutes as PathMetadata[]) {
          const { path, methodName } = route;
          const auth = authenticatedRoutes[methodName];
          const reqType = takeLeadingWord(methodName);
          const subPath = path.startsWith("/") ? path : "/" + path;
          this.setupHandler(
            instance,
            reqType,
            endpoint + subPath,
            methodName,
            auth,
            authService
          );
        }
      }
    });

    super.onServerStarted();
  };

  private setupHandler(
    instance: any,
    reqType: string,
    endpoint: string,
    methodName = reqType,
    auth: AuthMetadata[] | null = null,
    authService: AuthService | null = null
  ) {
    if (instance[methodName] != null) {
      this.logger.info(
        "Setting up controller:",
        endpoint,
        "handler:",
        methodName
      );
      switch (reqType) {
        case "create":
          this.post(
            endpoint,
            this.makeHandler(instance[methodName], "body", auth, authService)
          );
          break;
        case "get":
          this.get(
            endpoint,
            this.makeHandler(instance[methodName], "query", auth, authService)
          );
          break;
        case "delete":
          this.delete(
            endpoint,
            this.makeHandler(instance[methodName], "body", auth, authService)
          );
          break;
        case "patch":
          this.patch(
            endpoint,
            this.makeHandler(instance[methodName], "body", auth, authService)
          );
          break;
        case "update":
          this.update(
            endpoint,
            this.makeHandler(instance[methodName], "body", auth, authService)
          );
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
    key: "query" | "body",
    auth: AuthMetadata[] | null,
    authService: AuthService | null
  ): RequestHandler {
    return async (req: Request, res: Response) => {
      const data = (req as any)[key];

      try {
        if (auth != null) {
          try {
            if (authService == null)
              throw new Error("No auth service registered.");
            const authHeaderName = authService.settings.headerName;
            const authHeader = req.header(authHeaderName);
            data.__auth = authService.authorizeFlow(authHeader);
          } catch (err) {
            this.logger.error(err);
            throw new http.UnauthorizedError();
          }
        }

        const result = await handler(data, { req, res });

        switch (typeof result) {
          case "bigint":
          case "boolean":
          case "function":
          case "number":
          case "string":
          case "symbol":
          case "undefined":
            return res.send(result);
        }
        try {
          res.send(JSON.stringify(result));
        } catch (serializationError) {
          res.send(this.errorHandler.onError(serializationError, { req, res }));
        }
      } catch (handlerError) {
        res.send(this.errorHandler.onError(handlerError, { req, res }));
      }
      return;
    };
  }

  public useControllers(controllerDir: string = "controllers") {
    this.parseJsonBody();
    this.logger.info("Using Controllers from dir:", controllerDir);
    return super.useControllers(controllerDir);
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

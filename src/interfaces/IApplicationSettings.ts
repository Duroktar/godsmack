import jwt from 'express-jwt';
import type helmet from 'helmet';
import type { ExtendedRoutesConfig, ExtendedSpecConfig } from 'tsoa/dist/cli';
import type { BuildSchemaOptions } from 'type-graphql';
import type { SwaggerGenOptions, SwaggerMiddlewareOptions } from '.';
import type { LogLevel } from "../services/Logger";
import type { CorsOptions, ServeStaticFilesOptions } from './IHttpServer';

export interface IApplicationSettings {
  /**
   * Authorization Plugin Settings
   *
   */
  auth: {
    /**
     * Defaults to 'Authorization'
     *
     * @type {string}
     */
    headerName: string;

    /**
     * Defaults to 'Bearer'
     *
     * @type {string}
     */
    headerTokenPrefix: string;

    /**
     * TODO
     *
     * @type {(number | string)}
     */
    expiresIn: number | string;

    /**
     * Use something big.
     *
     * Ex:
     *
     * ```sh
     * /usr/bin/env bash openssl rand -base64 256
     * ```
     *
     * @type {string}
     */
    secret: string;

    // ... theres a bunch more. see: https://www.npmjs.com/package/jsonwebtoken

    saltRounds: number;
  };

  /**
   * Client Plugin Settings
   *
   */
  client: {
    /**
     * The endpoint the client is to be served from.
     *
     * @type {string}
     */
    endpoint: string;
  };

  /**
   * CLI Plugin Settings
   *
   */
  commandline: {};

  /**
   * DI Container Settings
   *
   */
  container: {};

  /**
   * Controller Settings
   *
   */
  controllers: {
    /**
     * The name of the directory to auto register controllers
     * from when 'HttpServerProvider.useControllers' is used.
     *
     * @type {string}
     */
    dirname: string;

    /**
     * TODO
     *
     * @type {string}
     */
    postfix: string;
  };

  /**
   * Database Provider Settings
   *
   */
  database: {
    /**
     * The database Username
     *
     * @type {string}
     */
    user: string;
    /**
     * The database Password
     *
     * @type {string}
     */
    pass: string;
    /**
     * The Database Port Setting
     *
     * @type {number}
     */
    port: number;
    /**
     * The database host
     *
     * @type {string}
     */
    host: string;
    /**
     * The default database name
     *
     * @type {string}
     */
    name: string;

    /**
     * Enable logging
     *
     * @type {boolean}
     */
    logging: boolean;

    /**
     * Enable caching queries.
     *
     * @type {boolean}
     */
    cache: boolean;
  };

  /**
   * Docker Service Provider Settings
   *
   */
  docker: {
    image_tag_name: string;
    network_name: string;
    daemonize_app: boolean;
    /**
     * Used to override database settings when running
     * inside docker via 'Application.addDockerSupport' et al.
     *
     */
    db: {
      container_name: string;
      data_volume_dir: string;
      image_tag: string;
      host_expose_port: number;
    };
  };

  /**
   * Object Factory Settings
   *
   */
  factory: {};


  /**
   * Godsmack framework specific settings.
   *
   */
  framework: {

    /**
     * The root folder name for source code in a godsmack project.
     *
     * @default "src"
     */
    rootDir: string;
  };

  graphQl: {
    endpoint: string;
    graphiql: boolean;
    typeGraphQlOptions: BuildSchemaOptions;
  },
  /**
   * Http Server Provider Settings
   *
   */
  httpServer: {
    /**
     * The port to host the http server on
     *
     * @type {number}
     */
    port: number;
    /**
     * The hostname of the server
     *
     * @type {string}
     */
    host: string;
    /**
     * TODO
     *
     * @type {boolean}
     */
    https: boolean;
    /**
     * TODO
     *
     * @type {ServeStaticFilesOptions}
     */
    serveStaticFileOptions: ServeStaticFilesOptions;
    /**
     * TODO
     *
     * @type {CorsOptions}
     */
    corsOptions?: CorsOptions;
    helmetOptions?: Partial<Parameters<typeof helmet>[0]>;
    /**
     * TODO
     *
     * @type {string}
     */
    spaFallbackPath: string;
  };

  jwt: jwt.Options;
  /**
   * Logging Provider Settings
   *
   */
  logger: {
    lvl: LogLevel;
  };

  /**
   * Email Service Provider Settings
   *
   */
  mailer: {
    host: string;
    port: number;
    secure: boolean;
    auth: {
      type: "OAuth2";
      user: string;
    };
  };

  /**
   * Oauth2 Plugin Settings
   *
   */
  oauth2: {
    email: string;
    clientId: string;
    clientSecret: string;
    refreshToken: string;
    accessToken: string;
    expires: number;
    redirectEmail: string;
  };

  /**
   * Shell Service Settings
   *
   */
  shell: {
    log: boolean;
  };

  /**
   * Startup Service Settings
   *
   */
  startup: {};

  /**
   * Swagger Service
   *
   */
  swagger: {
    routesImportPath: string
    serveDocs: boolean
    baseDocUrl: string
  
    generateSpec: boolean
    generateRoutes: boolean
    generateClient: boolean

    /**
     * Always generate the client even when the source files match.
     *
     * @type {boolean}
     */
    forceGenerateClient?: boolean

    /**
     * Options for the Swagger UI Express Server Middleware
     *
     * @type {SwaggerMiddlewareOptions}
     */
    middlewareOptions: SwaggerMiddlewareOptions

    /**
     * Options for the Typescript Client Generator
     *
     * @type {SwaggerGenOptions}
     */
    specGenOptions: SwaggerGenOptions

    /**
     * Options for the swagger.json spec generator
     *
     * @type {ExtendedSpecConfig}
     */
    specConfig: ExtendedSpecConfig

    /**
     *Options for the controller routes generator
     *
     * @type {ExtendedRoutesConfig}
     */
    routesConfig: ExtendedRoutesConfig
  },

  /**
   * Cron Job/Task Service Settings
   *
   */
  tasks: {
    /**
     * The name of the directory to auto register Cron
     * jobs/tasks from.
     *
     * Default: jobs
     *
     * @type {string}
     */
    dirname: string;
    postfix: string;
    runAllOnStart: boolean;
  };
}

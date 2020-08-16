import type { LogLevel } from "../services";
import { SwaggerMiddlewareOptions, SwaggerGenOptions } from '../framework/Swagger';

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
  };

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
    generateClient: boolean
    routesImportPath: string
    serveDocs: boolean
    baseDocUrl: string
    middlewareOptions: SwaggerMiddlewareOptions
    specGenOptions: SwaggerGenOptions,
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

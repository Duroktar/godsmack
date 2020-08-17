import deepmerge from "deepmerge";
import { Singleton } from "../injector";
import type { IApplicationSettings } from "../interfaces";
import { Logger, LogLevel } from "../services/Logger";
import type { DeepPartial } from "../types";
import { ASSERT } from '../utils/assert';

type AllSettings<T> = IApplicationSettings & T

@Singleton()
export class SettingsService<AppConfig = {}> {
  constructor(public logger: Logger) {
    this.logger = logger.For(this);

    this.__initializeDockerVariables();
  }

  private __settings: AllSettings<AppConfig> = getBaseSettings() as any;

  private __initializeDockerVariables() {
    const settings = this.__settings;
    if (process.env.DOCKER_CTX) {
      const { container_name } = ASSERT(settings.docker.db);
      settings.database.host = container_name;
    }
  }

  public get<K extends keyof AllSettings<AppConfig>>(
    key: K
  ): AllSettings<AppConfig>[K] {
    return this.__settings[key]!;
  }

  public update(settings: DeepPartial<AllSettings<AppConfig>>) {
    this.__settings = deepmerge(
      this.__settings,
      settings as AppConfig,
    ) as AllSettings<AppConfig>;
    return this.__settings;
  }
}

const getBaseSettings = (): IApplicationSettings => ({
  auth: {
    expiresIn: 15,
    headerName: "Authorization",
    headerTokenPrefix: "Bearer",
    saltRounds: 10,
    secret:
      "gcbfinYRQjbz4bla//EtDEBhZp0eKZ+o0Te8JRDOBEPuib9kBb9DYHu3PlRY+taBIhnn00TNKpC70+Lt3/+blYQ6/TqZ1kOBVgxdDSMFHsgh15D8N/fszRb/kh77eoF+qlgLldoEutXNT1HaEQup7ZQ1yFyTuTuX5OGh1O6T/pYCJybuMf0PFWZETonlxnjvcMfU1AYFfe046HaKy6TAZJYR8na3xLFQL0ubWDow6uT+QUhJ6+VdjewR/tHIHbNO7hDYkmTyxrGQ8yrcLCGjAqnAze5EpWwXL+dP9ZEeDtNRmzIqmA7USUDlWocKBIkYJLm2aPudBP1iLX64E+Hi2A==",
  },

  client: {
    endpoint: "/__client.js",
  },

  commandline: {},

  container: {},

  controllers: {
    dirname: "controllers",
    postfix: "Controller",
  },

  database: {
    user: "admin",
    pass: "pass123",
    port: 5432,
    host: "0.0.0.0",
    name: "godsmack-db",
    logging: false,
    cache: false,
  },

  docker: {
    image_tag_name: "godsmack-app",
    network_name: "godsmack",
    daemonize_app: false,
    db: {
      container_name: "godsmack-postgres-db",
      data_volume_dir: "/postgres",
      image_tag: "alpine",
      host_expose_port: 5432,
    },
  },

  factory: {},

  framework: {
    rootDir: 'src'
  },

  httpServer: {
    port: 3000,
    host: "localhost",
    https: false,
  },

  logger: {
    lvl: LogLevel.INFO,
  },

  mailer: {
    auth: {
      type: "OAuth2",
      user: process.env.GMAIL_ADDRESS || "",
    },
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
  },

  oauth2: {
    email: process.env.GMAIL_ADDRESS || "",
    redirectEmail: process.env.GMAIL_OAUTH_REDIRECT_URL || "",
    clientId: process.env.GMAIL_OAUTH_CLIENT_ID || "",
    clientSecret: process.env.GMAIL_OAUTH_CLIENT_SECRET || "",
    refreshToken: process.env.GMAIL_OAUTH_REFRESH_TOKEN || "",
    accessToken: process.env.GMAIL_OAUTH_ACCESS_TOKEN || "",
    expires: Number.parseInt(process.env.GMAIL_OAUTH_TOKEN_EXPIRE || "", 10),
  },

  shell: {
    log: false,
  },

  startup: {},

  swagger: {
    forceGenerateClient: false,
    generateClient: true,
    serveDocs: true,
    baseDocUrl: '/docs',
    routesImportPath: './generated/routes',
    middlewareOptions: {
      swaggerUiOptions: {
        customSiteTitle: 'Godsmack: Open API v3 Docs',
        swaggerOptions: {
          docExpansion: 'none',
        },
      }
    },
    specGenOptions: {
      tsoaPath: './tsoa.json',
      lang: 'typescript-fetch',
      outputPath: './client/generated/api',
      codegenVersion: 'V3',
      generateClient: true,
      swaggerSpecPath: '/swagger.json',
    }
  },

  tasks: {
    postfix: "Job",
    dirname: "jobs",
    runAllOnStart: false,
  },
});

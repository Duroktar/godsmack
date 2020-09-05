import deepmerge from "deepmerge";
import { join } from 'path';
import { Singleton } from "../injector";
import type { IApplicationSettings } from "../interfaces";
import { LogLevel } from "../services/Logger";
import type { DeepPartial } from "../types";

type AllSettings<T> = IApplicationSettings & T

@Singleton()
export class SettingsService<AppConfig = {}> {
  constructor() {
    this.__initializeDockerVariables();
  }

  public get<K extends keyof AllSettings<AppConfig>>(
    key: K
  ): AllSettings<AppConfig>[K] {
    return this.__settings[key]!;
  }

  public update<Config extends DeepPartial<AllSettings<AppConfig>>>(
    settings: Config | ((base: AllSettings<AppConfig>) => Config)
  ) {
    const config: AllSettings<AppConfig> = typeof settings === 'function'
      ? settings(this.__settings)
      : settings as any

    this.__settings = deepmerge(this.__settings, config, {
      arrayMerge: (original, incoming) => incoming,
    }) as any;

    return this.__settings;
  }

  private __initializeDockerVariables() {
    const settings = this.__settings;
    if (process.env.DOCKER_CTX) {
      const { container_name } = settings.docker.db;
      settings.database.host = container_name;
    }
  }

  private __settings: AllSettings<AppConfig> = getBaseSettings() as any;
}

function getBaseSettings(): IApplicationSettings {
  const rootDir = (process as any)?.mainModule?.path ?? 'src/';
  return {
    auth: {
      expiresIn: 15,
      headerName: "Authorization",
      headerTokenPrefix: "Bearer",
      saltRounds: 10,
      secret: process.env.SECRET || "gcbfinYRQjbz4bla//EtDEBhZp0eKZ+o0Te8JRDOBEPuib9kBb9DYHu3PlRY+taBIhnn00TNKpC70+Lt3/+blYQ6/TqZ1kOBVgxdDSMFHsgh15D8N/fszRb/kh77eoF+qlgLldoEutXNT1HaEQup7ZQ1yFyTuTuX5OGh1O6T/pYCJybuMf0PFWZETonlxnjvcMfU1AYFfe046HaKy6TAZJYR8na3xLFQL0ubWDow6uT+QUhJ6+VdjewR/tHIHbNO7hDYkmTyxrGQ8yrcLCGjAqnAze5EpWwXL+dP9ZEeDtNRmzIqmA7USUDlWocKBIkYJLm2aPudBP1iLX64E+Hi2A==",
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
      rootDir, // ie: src/ (usually) or dist/ (for example) after compile
    },

    graphQl: {
      endpoint: '/graphql',
      graphiql: true,
      typeGraphQlOptions: {
        emitSchemaFile: join(rootDir, '/generated/schema.graphql'),
        resolvers: [join(rootDir, '/resolvers/**/!(*.d).{js,ts}')],
      }
    },

    httpServer: {
      port: 3000,
      host: "localhost",
      https: false,
      serveStaticFileOptions: {},
      spaFallbackPath: 'www',
    },

    jwt: {
      algorithms: ['HS256'],
      credentialsRequired: false,
      secret: process.env.SECRET || "gcbfinYRQjbz4bla//EtDEBhZp0eKZ+o0Te8JRDOBEPuib9kBb9DYHu3PlRY+taBIhnn00TNKpC70+Lt3/+blYQ6/TqZ1kOBVgxdDSMFHsgh15D8N/fszRb/kh77eoF+qlgLldoEutXNT1HaEQup7ZQ1yFyTuTuX5OGh1O6T/pYCJybuMf0PFWZETonlxnjvcMfU1AYFfe046HaKy6TAZJYR8na3xLFQL0ubWDow6uT+QUhJ6+VdjewR/tHIHbNO7hDYkmTyxrGQ8yrcLCGjAqnAze5EpWwXL+dP9ZEeDtNRmzIqmA7USUDlWocKBIkYJLm2aPudBP1iLX64E+Hi2A==",
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
      generateClient: false,
      generateSpec: true,
      generateRoutes: true,
      serveDocs: true,
      baseDocUrl: '/docs',
      routesImportPath: './generated/routes',
      middlewareOptions: {
        swaggerUiOptions: {
          customSiteTitle: 'Godsmack: Open API v3 Docs',
          swaggerOptions: {
            docExpansion: 'none',
            plugins: [],
          },
        }
      },
      specGenOptions: {
        tsoaPath: 'tsoa.json',
        lang: 'typescript-fetch',
        outputPath: '../client/generated/api',
        codegenVersion: 'V3',
        swaggerSpecPath: 'swagger.json',
      },
      specConfig: {
        entryFile: join(rootDir, 'main.ts'),
        noImplicitAdditionalProperties: 'silently-remove-extras',
        outputDirectory: "server",
        specVersion: 3,
        controllerPathGlobs: [join(rootDir, "controllers/**/!(*.d).{js,ts}")],
        // Move this section into a builder like NestJS does.
        // see: https://stackoverflow.com/a/57909047
        host: "localhost:3000",
        name: "Godsmack: Open API",
        description: "Auto Generated OpenAPI Docs.",
        version: "1.0",
        basePath: "api/v1",
        securityDefinitions: {
          "apiKey": {
            "in": "query",
            "name": "access_token",
            "type": "apiKey"
          },
          "jwt": {
            "type": "http",
            "scheme": "bearer",
            "bearerFormat": "JWT"
          } as any,
        },
        tags: [],
        schemes: ["http"],
      },
      routesConfig: {
        entryFile: join(rootDir, 'main.ts'),
        noImplicitAdditionalProperties: 'silently-remove-extras',
        routesDir: join(rootDir, "generated"),
        basePath: "api/v1",
        authenticationModule: join(rootDir, "middleware/auth.ts"),
        middleware: "express",
        middlewareTemplate: join(rootDir, "templates/routes.template.hbs"),
        iocModule: join(rootDir, "ioc"),
        routesFileName: "routes.ts",
        controllerPathGlobs: [join(rootDir, "controllers/**/!(*.d).{js,ts}")],
      },
    },

    tasks: {
      postfix: "Job",
      dirname: "jobs",
      runAllOnStart: false,
    },
  }
};

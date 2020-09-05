import deepmerge from 'deepmerge';
import type { Request as ExRequest, Response as ExResponse } from "express";
import { existsSync, readFileSync, rmdirSync } from "fs";
import { HttpServerProvider } from '../framework/HttpServer';
import { SettingsService } from '../framework/Settings';
import { Shell } from '../framework/Shell';
import { Singleton } from "../injector";
import type { ISwaggerService, SwaggerGenOptions, SwaggerMiddlewareOptions } from '../interfaces';
import { LogFactory } from "../services/Logger";
import { doTry } from '../utils/func';

@Singleton()
export class SwaggerService implements ISwaggerService {
  constructor(
    private logger: LogFactory,
    private shell: Shell,
    private server: HttpServerProvider,
    private settings: SettingsService,
  ) {
    this.logger = logger.For(this)
  }

  public getPathToSpecFile = (): string => {
    const { swaggerSpecPath } = this.getGenSettings()
    return this.getRelativeProjectPath(swaggerSpecPath)
  }

  public initializeService = async (
    options?: SwaggerGenOptions,
  ): Promise<void> => {
    await this.generateSwaggerAssets(options);
    await this.registerSwaggerMiddleware();
    await this.registerRoutesWithServer();
  }

  private async generateSwaggerAssets(options?: SwaggerGenOptions) {
    const { lang, outputPath, swaggerSpecPath } = this.getGenSettings(options)
    const settings = this.settings.get('swagger')

    this.logger.info('Generating Swagger Assets..')

    if (settings.generateRoutes) {
      const { generateRoutes } = require("tsoa");
      this.logger.debug('Generating Tsoa Controller Routes..')
      await generateRoutes(settings.routesConfig);
    }

    const existingSwaggerFile = this.loadSwaggerSpec(swaggerSpecPath);

    if (settings.generateSpec) {
      const { generateSpec } = require("tsoa");
      this.logger.debug('Generating OpenAPI Specification..')
      await generateSpec(settings.specConfig);
    }

    const newSwaggerFile = this.loadSwaggerSpec(swaggerSpecPath);

    if (settings.generateClient) {
      const specUnchanged = this.specificationsMatch(existingSwaggerFile, newSwaggerFile);

      if (newSwaggerFile == null || (specUnchanged && !settings.forceGenerateClient))
        return

      this.logger.debug('Generating Typescript Client..')
      await this.generateClient(outputPath, swaggerSpecPath, lang)
    }
  }

  private async generateClient(outputPath: string, swaggerSpecPath: string, lang: string) {

    this.logger.debug('Removing old client..')
    doTry(() => rmdirSync(outputPath));

    this.logger.debug('Generating new client..')
    const { code, stdout } = await this.shell.spawn('node_modules/.bin/openapi-generator', [
      'generate',
      '-i', this.getRelativeProjectPath(swaggerSpecPath),
      '-g', lang,
      '--skip-validate-spec',
      '-p', 'typescriptThreePlus=true',
      '-p', 'supportsES6=true',
      '-o', outputPath,
    ], { log: false });

    if (code !== 0) {
      // child process exited with non-zero code
      console.error('Error generating client from provider. Return code was:', code, ', stdOut:', stdout)
      return
    }
  }

  private registerSwaggerMiddleware = async () => {
    const settings = this.settings.get('swagger')
    if (settings.serveDocs) {
      const { serve } = require("swagger-ui-express");
      const { baseDocUrl: baseUrl, middlewareOptions: options } = settings;
      this.logger.info(`Serving Swagger Docs @ ${baseUrl}`);
      const swaggerMiddleware = this.configureSwaggerUIMiddleware(options);
      this.server.engine.use(baseUrl, serve, swaggerMiddleware);
    }
  }

  private registerRoutesWithServer = async () => {
    const routeImportPath = this.settings.get('swagger').routesImportPath;
    const resolvedImportPath = this.getRelativeProjectPath(routeImportPath);
    const generatedRoutesFile = await import(resolvedImportPath);
    this.server.registerServices(generatedRoutesFile.RegisterRoutes);
  }

  private configureSwaggerUIMiddleware = (options?: SwaggerMiddlewareOptions) => {
    const { generateHTML } = require("swagger-ui-express");
    return async (_req: ExRequest, res: ExResponse) => {
      const { specGenOptions: { swaggerSpecPath } } = this.settings.get('swagger');
      return res.send(generateHTML(
        options?.swaggerDoc ?? await import(this.getRelativeProjectPath(swaggerSpecPath)),
        options?.swaggerUiOptions,
        options?.swaggerOptions,
        options?.customCss,
        options?.customfavIcon,
        options?.swaggerUrl,
        options?.customSiteTitle,
      ))
    }
  }

  private getGenSettings(options?: Partial<SwaggerGenOptions>): Required<SwaggerGenOptions> {
    const { specGenOptions } = this.settings.get('swagger');
    return deepmerge(specGenOptions, options ?? {}) as any;
  }

  private getRelativeProjectPath(...target: string[]) {
    const path = require('path') as typeof import('path');
    const rootDir = this.settings.get('framework').rootDir;

    return path.join(rootDir, ...target)
  }

  private specificationsMatch(existingSwaggerFile: any, newSwaggerFile: any) {
    return JSON.stringify(existingSwaggerFile) === JSON.stringify(newSwaggerFile);
  }

  private loadSwaggerSpec(swaggerSpecPath: string) {
    const filepath = this.getRelativeProjectPath(swaggerSpecPath);
    if (!existsSync(filepath))
      return undefined
    return JSON.parse(readFileSync(filepath, 'utf8'));
  }
}

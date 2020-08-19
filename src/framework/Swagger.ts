import deepmerge from 'deepmerge';
import { Request as ExRequest, Response as ExResponse } from "express";
import { readFileSync, rmdirSync } from "fs";
import * as SwaggerUiExpress from "swagger-ui-express";
import { HttpServerProvider } from '../framework/HttpServer';
import { SettingsService } from '../framework/Settings';
import { Shell } from '../framework/Shell';
import { Singleton } from "../injector";
import type { IApplicationSettings, ISwaggerService, SwaggerGenOptions, SwaggerMiddlewareOptions } from '../interfaces';
import { Logger } from "../services/Logger";
import { getTsConfigFile } from '../utils';
import { ASSERT } from '../utils/assert';
import { doTry } from '../utils/func';

@Singleton()
export class SwaggerService implements ISwaggerService {
  private settings: IApplicationSettings['swagger']

  constructor(
    private logger: Logger,
    private shell: Shell,
    private server: HttpServerProvider,
    settings: SettingsService<IApplicationSettings>,
  ) {
    this.settings = settings.get('swagger')
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
    const { lang, tsoaPath, outputPath, swaggerSpecPath } = this.getGenSettings(options)

    this.logger.info('Generating Swagger Assets..')

    // -- CONTINUE FLAG
    if (!this.settings.generateSpec)
      return

    const existingSwaggerFile = this.loadSwaggerSpec(swaggerSpecPath);

    // -- STEP 1
    await this.generateSpecification(tsoaPath);

    // -- CONTINUE FLAG
    if (!this.settings.generateClient)
      return

    const newSwaggerFile = this.loadSwaggerSpec(swaggerSpecPath);

    // -- WARNING CONDITION
    if (newSwaggerFile == null) {
      this.logger.debug('No Swaggerfile found. Aborting Client Generation..')
      this.logger.debug('Done generating Swagger Assets..')
      return
    }

    // -- CONTINUE FLAG or CONDITION
    if (!this.settings.forceGenerateClient && this.specificationsMatch(existingSwaggerFile, newSwaggerFile)) {
      this.logger.debug('Swaggerfile is unchanged. Aborting Client Generation..')
      this.logger.debug('Done generating Swagger Assets..')
      return
    }

    // -- STEP 2
    await this.generateClient(outputPath, swaggerSpecPath, lang)

    this.logger.debug('Done generating Swagger Assets..')
  }

  private async generateSpecification(tsoaPath: string) {
    this.logger.debug('Regenerating server and spec..')

    const response = await this.shell.spawn('node_modules/.bin/tsoa', [
      'spec-and-routes',
      '-c', tsoaPath,
    ], { log: false })

    if (response.code !== 0) {
      // child process exited with non-zero code
      console.error('Error generating Swagger spec. Return code was:', response.code, ', stdOut:', response.stdout)
      return
    }

    this.logger.debug('Finished generating swagger file..')
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

    this.logger.debug('Finished generating client..')
  }

  private registerSwaggerMiddleware = async () => {
    if (this.settings.serveDocs) {
      const { baseDocUrl: baseUrl, middlewareOptions: options } = this.settings;
      this.logger.info(`Serving Swagger Docs @ ${baseUrl}`);
      const swaggerMiddleware = this.configureSwaggerUIMiddleware(options);
      this.server.engine.use(baseUrl, SwaggerUiExpress.serve, swaggerMiddleware);
    }
  }

  private registerRoutesWithServer = async () => {
    const routeImportPath = ASSERT(this.settings.routesImportPath);
    const resolvedImportPath = this.getRelativeProjectPath(routeImportPath);
    const generatedRoutesFile = await import(resolvedImportPath);
    this.server.registerServices(generatedRoutesFile.RegisterRoutes);
  }

  private configureSwaggerUIMiddleware = (
    options?: SwaggerMiddlewareOptions,
  ) => {
    return async (_req: ExRequest, res: ExResponse) => {
      const specOpts = this.settings.specGenOptions;
      return res.send(SwaggerUiExpress.generateHTML(
        options?.swaggerDoc ?? await import(this.getRelativeProjectPath(specOpts.swaggerSpecPath)),
        options?.swaggerUiOptions,
        options?.swaggerOptions,
        options?.customCss,
        options?.customfavIcon,
        options?.swaggerUrl,
        options?.customSiteTitle,
      ))
    }
  }

  private getGenSettings(
    options?: Partial<SwaggerGenOptions>,
  ): Required<SwaggerGenOptions> {
    return deepmerge(ASSERT(this.settings.specGenOptions), options ?? {}) as any;
  }

  private getRelativeProjectPath(...target: string[]) {
    const path = require('path') as typeof import('path');
    const cwd = process.cwd()
    const tsconfig = getTsConfigFile(cwd)

    const rootDir = tsconfig.options.rootDir || cwd;

    return path.join(rootDir, ...target)
  }

  private specificationsMatch(existingSwaggerFile: any, newSwaggerFile: any) {
    return JSON.stringify(existingSwaggerFile) === JSON.stringify(newSwaggerFile);
  }

  private loadSwaggerSpec(swaggerSpecPath: string) {
    return JSON.parse(readFileSync(this.getRelativeProjectPath(swaggerSpecPath), 'utf8'));
  }
}

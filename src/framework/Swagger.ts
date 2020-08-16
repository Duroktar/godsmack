import deepmerge from 'deepmerge';
import { Request as ExRequest, Response as ExResponse } from "express";
import { createReadStream, unlinkSync } from "fs";
import * as SwaggerUI from "swagger-ui-express";
import unzipper from 'unzipper';
import { HttpServerProvider } from '../framework/HttpServer';
import { SettingsService } from '../framework/Settings';
import { Shell } from '../framework/Shell';
import { Singleton } from "../injector";
import { IApplicationSettings } from '../interfaces';
import { Logger } from "../services/Logger";
import { getTsConfigFile } from '../utils';

export type SwaggerGenOptions = {
  lang: string
  tsoaPath: string
  tempFileName: string
  outputPath: string
  generatorApiUrl: string
  generateClient: boolean
  swaggerSpecPath: string
}

export type SwaggerMiddlewareOptions = {
  swaggerDoc?: SwaggerUI.JsonObject
  swaggerOptions?: SwaggerUI.SwaggerOptions
  swaggerUiOptions?: SwaggerUI.SwaggerUiOptions
  customCss?: string
  customfavIcon?: string
  swaggerUrl?: string
  customSiteTitle?: string
}

@Singleton()
export class SwaggerService {
  private settings: IApplicationSettings['swagger']

  constructor(
    private logger: Logger,
    private shell: Shell,
    private server: HttpServerProvider,
    cfgService: SettingsService<IApplicationSettings>,
  ) {
    this.settings = cfgService.get('swagger')
    this.logger = logger.For(this)
  }

  public initializeService = async (options?: SwaggerGenOptions) => {
    await this.generateSwaggerAssets(options);
    await this.registerSwaggerMiddleware();
    await this.registerRoutesWithServer();
  }

  private generateSwaggerAssets = async (options?: SwaggerGenOptions) => {
    const { generateClient, generatorApiUrl, lang, tsoaPath,
      outputPath, swaggerSpecPath, tempFileName } = this.getSettings(options)

    this.logger.info('Generating Typescript Client from Swagger Spec..')

    this.logger.info('Regenerating server and spec..')

    const existingSwaggerFile = await import(this.getRelativeProjectPath(swaggerSpecPath));

    const response = await this.shell.spawn('tsoa', [
      'spec-and-routes',
      '-c', tsoaPath,
    ], { log: true })

    if (response.code !== 0) {
      // child process exited with non-zero code
      console.error('Error generating Swagger spec. Return code was:', response.code, ', stdOut:', response.stdout)
      return
    }

    this.logger.info('Finished generating swagger file..')

    if (!generateClient)
      return

    const newSwaggerFile = await import(this.getRelativeProjectPath(swaggerSpecPath));

    this.logger.info('Generating client from spec..')

    if (JSON.stringify(existingSwaggerFile) === JSON.stringify(newSwaggerFile)) {
      this.logger.info('Swaggerfile is unchanged. Aborting Client Generation..')
      this.logger.info('Done generating Swagger Assets..')
      return
    }

    const { code, stdout } = await this.shell.spawn('curl', [
      '-X', 'POST',
      '-H', 'content-type:application/json',
      '-d', JSON.stringify({
        spec: newSwaggerFile,
        type: 'CLIENT',
        lang,
      }),
      generatorApiUrl,
      '--output', tempFileName,
    ]);

    if (code !== 0) {
      // child process exited with non-zero code
      console.error('Error generating client from provider. Return code was:', code, ', stdOut:', stdout)
      return
    }

    this.logger.info('Extracting client to final location..')
    await createReadStream(this.getRelativeProjectPath(tempFileName))
      .pipe(unzipper.Extract({ path: this.getRelativeProjectPath(outputPath) }))
      .promise();

    unlinkSync(this.getRelativeProjectPath(tempFileName))

    this.logger.info('Finished generating client..')

    this.logger.info('Done generating Swagger Assets..')
  }

  private registerSwaggerMiddleware = async () => {
    if (this.settings.serveDocs) {
      const { baseDocUrl: baseUrl, middlewareOptions: options } = this.settings;
      this.logger.info(`Serving Swagger Api Docs from ${baseUrl}`);
      const swaggerMiddleware = this.configureSwaggerUIMiddleware(options);
      this.server.engine.use(baseUrl, SwaggerUI.serve, swaggerMiddleware);
    }
  }

  private registerRoutesWithServer = async () => {
    const routeImportPath = this.settings.routesImportPath;
    const resolvedImportPath = this.getRelativeProjectPath(routeImportPath);
    const generatedRoutesFile = await import(resolvedImportPath);
    this.server.mapExpressServer(generatedRoutesFile.RegisterRoutes);
  }

  private configureSwaggerUIMiddleware = (options?: SwaggerMiddlewareOptions) => {
    return async (_req: ExRequest, res: ExResponse) => {
      return res.send(SwaggerUI.generateHTML(
        options?.swaggerDoc ?? await import(this.getRelativeProjectPath(this.settings.specGenOptions.swaggerSpecPath)),
        options?.swaggerUiOptions,
        options?.swaggerOptions,
        options?.customCss,
        options?.customfavIcon,
        options?.swaggerUrl,
        options?.customSiteTitle,
      ))
    }
  }

  private getSettings(options?: Partial<SwaggerGenOptions>): SwaggerGenOptions {
    return deepmerge(this.settings.specGenOptions, options ?? {});
  }

  private getRelativeProjectPath(...target: string[]) {
    const path = require('path');
    const cwd = process.cwd()
    const tsconfig = getTsConfigFile(cwd)

    const rootDir = tsconfig.options.rootDir || cwd;

    return path.join(rootDir, ...target)
  }
}

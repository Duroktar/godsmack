import { join } from "path";
import {
  generateRoutes,
  generateSpec
} from "tsoa";
import { ExtendedRoutesConfig, ExtendedSpecConfig } from "tsoa/dist/cli";
import { Singleton } from '../injector/decorators/Singleton';
import { SettingsService } from './Settings';

@Singleton()
export class SwaggerTsoa {
  constructor(
    private settings: SettingsService
  ) {}

  async generateSpec() {
    return generateSpec(this.specOptions)
  }

  async generateRoutes() {
    return generateRoutes(this.routeOptions);
  }

  private sharedOptions = {
    basePath: "api/v1",
    entryFile: join(this.rootDir, "main"),
    noImplicitAdditionalProperties: "silently-remove-extras",
  } as const

  private specOptions: ExtendedSpecConfig = {
    ...this.sharedOptions,
    specVersion: 3,
    outputDirectory: "./api/dist",
    controllerPathGlobs: ["./routeControllers/**/*Controller.{js,ts}"],
  };

  private routeOptions: ExtendedRoutesConfig = {
    ...this.sharedOptions,
    authenticationModule: join(this.rootDir, "middleware/auth"),
    middleware: "express",
    middlewareTemplate: join(this.rootDir, "templates/routes.template.hbs"),
    routesDir: join(this.rootDir, "generated"),
    iocModule: join(this.rootDir, "ioc"),
    routesFileName: "routes",
  };

  private get rootDir() {
    return this.settings.get('framework').rootDir
  }
}

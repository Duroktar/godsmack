
export interface ISwaggerService {
  initializeService(options?: SwaggerGenOptions): Promise<void>
  getPathToSpecFile(): string
}

export type SwaggerGenOptions = {
  lang: string
  tsoaPath: string
  outputPath: string
  swaggerSpecPath: string
  codegenVersion: 'V2' | 'V3'
}

export interface JsonObject {
  [key: string]: any;
}

export interface SwaggerOptions {
  docExpansion: 'none' | 'list' | 'full';
  plugins: any;
}

export interface SwaggerUiOptions {
  customCss?: string;
  customCssUrl?: string;
  customfavIcon?: string;
  customJs?: string;
  customSiteTitle?: string;
  explorer?: boolean;
  isExplorer?: boolean;
  swaggerOptions?: SwaggerOptions;
  swaggerUrl?: string;
  swaggerUrls?: string[];
}

export type SwaggerMiddlewareOptions = {
  swaggerDoc?: JsonObject
  swaggerOptions?: SwaggerOptions
  swaggerUiOptions?: SwaggerUiOptions
  customCss?: string
  customfavIcon?: string
  swaggerUrl?: string
  customSiteTitle?: string
}

export enum SwaggerAuthPluginAction {
  AUTHORIZE = "authorize",
  LOGOUT = "logout",
}

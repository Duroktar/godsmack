import { GraphQLSchema } from 'graphql';
import { Singleton } from '../../injector';
import { IGraphQlProvider } from '../../interfaces/IGraphQL';
import { LogFactory } from '../../services/Logger';
import { HttpServerProvider } from '../HttpServer';
import { SettingsService } from '../Settings';
import { SwaggerService } from '../Swagger';

@Singleton()
export class AbstractGraphQlProvider implements IGraphQlProvider {
  constructor(
    public logger: LogFactory,
    public server: HttpServerProvider,
    public config: SettingsService,
    public swagger: SwaggerService,
  ) {
    this.logger = logger.For(this);
  }


  public initializeService = async () => {
    this.useMiddleware(await this.createGraphQlSchema());
  };


  public createGraphQlSchema(): Promise<GraphQLSchema> {
    throw new Error('Method not implemented.');
  }


  public useMiddleware(schema: GraphQLSchema): void {
    throw new Error('Method not implemented.');
  }


  public getSwaggerSpecPath = (): string => {
    return this.swagger.getPathToSpecFile();
  };
}

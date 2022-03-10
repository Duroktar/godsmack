import { graphqlHTTP } from 'express-graphql';
import { GraphQLSchema } from 'graphql';
import { createGraphQLSchema } from "openapi-to-graphql";
import { Singleton } from '../../injector';
import { AbstractGraphQlProvider } from './AbstractGraphQlProvider';

@Singleton()
export class OpenApiToGraphQlProvider extends AbstractGraphQlProvider {
  public createGraphQlSchema = async (): Promise<GraphQLSchema> => {
    this.logger.info('Generating GraphQL Assets..');
    const oas = require(this.getSwaggerSpecPath());
    const result = await createGraphQLSchema(oas, {});
    this.logger.debug('Finished. (Report:', JSON.stringify(result.report) + ')');
    return result.schema;
  };


  public useMiddleware = (schema: GraphQLSchema): void => {
    const { endpoint, graphiql } = this.config.get('graphQl');
    this.logger.info(`GraphQL API Service enabled @ ${endpoint}`);
    this.server.use(endpoint, graphqlHTTP({ schema, graphiql }));
  };

  private getSwaggerSpecPath = (): string => {
    return this.swagger.getPathToSpecFile();
  };
}

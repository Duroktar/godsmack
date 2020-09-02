import { ApolloServer, ApolloServerExpressConfig } from 'apollo-server-express';
import jwt from "express-jwt";
import { GraphQLSchema } from 'graphql';
import * as TypeGraphQL from "type-graphql";
import { Singleton } from '../../injector';
import { prop } from '../../utils/object';
import { AbstractGraphQlProvider } from './AbstractGraphQlProvider';

export { TypeGraphQL }

@Singleton()
export class TypeGraphQlProvider extends AbstractGraphQlProvider {
  public createGraphQlSchema = async (): Promise<GraphQLSchema> => {
    this.logger.info('Generating GraphQL Assets..')
    const { typeGraphQlOptions } = this.config.get('graphQl');
    return await TypeGraphQL.buildSchema(typeGraphQlOptions);
  }

  public useMiddleware = (schema: GraphQLSchema): void => {
    const { endpoint, graphiql: playground } = this.config.get('graphQl');
    const options = this.getOptions(schema, playground);
    const apollo = new ApolloServer(options.apolloOptions);
    this.server.engine.use(endpoint, jwt(options.jwtOptions));
    apollo.applyMiddleware({ app: this.server.engine, path: endpoint });
    this.logger.info(`GraphQL API Service enabled @ ${apollo.graphqlPath}`);
  }

  private getOptions = (schema: GraphQLSchema, playground: boolean) => {
    const jwtOptions: jwt.Options = {
      algorithms: ['HS256'],
      secret: this.config.get('auth').secret,
      credentialsRequired: false,
      // audience: 'http://tourchase.com',
      issuer: 'http://tourchase.com',
    };
    const apolloOptions: ApolloServerExpressConfig = {
      schema,
      playground,
      context: ({ req }) => {
        return { req, user: prop(req, 'user') };
      },
    };
    return { apolloOptions, jwtOptions };
  }
}

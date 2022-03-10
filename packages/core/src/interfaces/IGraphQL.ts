import type { GraphQLSchema } from 'graphql';

export interface IGraphQlProvider {
  initializeService(): Promise<void>;
  useMiddleware(schema: any): void;
  createGraphQlSchema(): Promise<GraphQLSchema>;
}

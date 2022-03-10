import {
  createConnection,
  Connection,
  ConnectionOptions,
  QueryRunner,
  EntityManager,
} from "typeorm";
import { DatabaseProvider } from "../framework/Database";
import { Singleton } from "../injector";
import { join as pathJoin } from 'path'
import { SettingsService } from '../framework';

@Singleton()
export class TypeORMAdapter extends DatabaseProvider {
  async connect(options?: Partial<ConnectionOptions>) {
    this.logger.debug("Connecting to Database:", options?.type);
    await this.getDbConnection(undefined, options);
    return this;
  }

  async query(
    query: string,
    parameters?: any[] | undefined,
    queryRunner?: QueryRunner | undefined
  ) {
    return this.connection.query(query, parameters, queryRunner);
  }

  async syncTables(options?: { dropTables: boolean }) {
    return await this.connection
      .synchronize(options?.dropTables)
      .catch((err: any) => {
        this.logger.error("there was an error syncing tables");
        this.logger.debug(err);
      });
  }

  async test() {
    this.logger.debug("Testing database connection..");
    return this.connection.isConnected;
  }

  public async transaction<T>(
    op: (entityManager: EntityManager) => Promise<T>
  ): Promise<T> {
    return this.connection.transaction(op);
  }

  public connection!: Connection;

  private mergeDatabaseOptions(options?: Partial<ConnectionOptions>) {

    const { rootDir } = this.app.container
      .resolve(SettingsService)
      .get('framework')

    const _src = (path: string) => pathJoin(rootDir, path)

    return {
      // defaults
      type: "postgres",
      host: this.settings.host,
      port: this.settings.port,
      username: this.settings.user,
      password: this.settings.pass,
      database: this.settings.name,
      logging: this.settings.logging,
      cache: this.settings.cache,

      // this plays nicely this godsmack
      entities: [_src("entities/**/*.ts")],
      subscribers: [_src("subscribers/**/*.ts")],
      migrations: [_src("migrations/**/*.ts")],
      cli: {
        entitiesDir: _src("entities"),
        migrationsDir: _src("migrations"),
        subscribersDir: _src("subscribers"),
      },

      // provided options to merge
      ...options,
    } as ConnectionOptions;
  }

  private async getDbConnection(
    connectionString?: string,
    options?: Partial<ConnectionOptions>
  ) {
    if (connectionString) {
      this.connection = await createConnection(connectionString);
    }
    const settings = this.mergeDatabaseOptions(options);
    this.connection = await createConnection(settings);
  }
}

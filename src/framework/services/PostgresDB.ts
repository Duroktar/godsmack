import { Injectable } from '../../injector'
import { DockerService } from '../Docker';
import { SequelizeAdapter } from './Sequelize';

@Injectable()
export class PostgresDB extends SequelizeAdapter {
  public connect() {
    const { name, user, pass } = this.settings
    super.connect(name, user, pass, {
      host: this.settings.host,
      port: this.settings.port,
      dialect: this.settings.dialect,
    })
    return this
  }
  public async createDockerDB(opts?: any) {
    if (! await this.findDockerDb()) {
      this.logger.info('Creating PostgresDB Docker Container.')
      const result = await this.app.container
        .resolve(DockerService)
        .runDockerCommand('run', [
          '--name', this.settings.docker_pg_container_name,
          '-p', `${this.settings.host_port}:${this.settings.port}`,
          '-v', `${this.settings.docker_pg_data_volume_dir}:/var/lib/postgresql/data'`,
          '-e', `POSTGRES_PASSWORD=${this.settings.pass}`,
          '-e', `POSTGRES_USER=${this.settings.user}`,
          '-e', `POSTGRES_DB=${this.settings.name}`,
          '-e', `POSTGRES_HOST=${this.settings.host}`,
          '-e', `POSTGRES_PORT=${this.settings.port}`,
          '-d', `postgres:${this.settings.docker_pg_image_tag}`,
        ])
      if (result.code === 0) {
        this.logger.info('Finished Creating PostgresDB Container.')
      } else {
        this.logger.error(
          'There was an Error creating the PostgresDB Container.'
        )
      }
    }
    return this
  }

  public async stopDockerDb(): Promise<void> {
    const dockerService = this.app.container.resolve(DockerService);
    const containerId = await this.getDockerDbContainerId()
    if (containerId) {
      this.logger.info('Stopping PostgresDB Docker Container.')
      dockerService.runDockerCommand('stop', [containerId])
    }
  }

  public async findDockerDb(): Promise<boolean> {
    const result = await this.getDockerDbContainerId();
    if (result) {
      this.logger.info('Found existing PostgresDB Docker Container.')
    } else {
      this.logger.info(
        'No existing PostgresDB Docker Container was found.'
      )
    }
    return !!result
  }

  public settings: PgSettings & PgDockerSettings = {
    pass: 'godsmack-postgres-db-pass',
    user: 'godsmack-postgres-db-user',
    port: 5432,
    host_port: 5432,
    host: '0.0.0.0',
    name: 'godsmack-db',
    dialect: 'postgres',

    docker_pg_container_name: 'godsmack-postgres-db',
    docker_pg_data_volume_dir: '/postgres',
    docker_pg_image_tag: 'alpine',
  }

  private async getDockerDbContainerId() {
    const dockerService = this.app.container.resolve(DockerService);
    const cName = this.settings.docker_pg_container_name;
    return await dockerService.getContainerId(cName);
  }
}

type PgSettings = {
  pass: string;
  user: string;
  port: number;
  host_port: number;
  host: string;
  name: string;
  dialect: "postgres" | "mysql" | "sqlite" | "mariadb" | "mssql"
}

type PgDockerSettings = {
  docker_pg_data_volume_dir: string;
  docker_pg_container_name: string;
  docker_pg_image_tag: string;
}

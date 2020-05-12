import { Singleton } from '../../injector'
import { DockerService } from '../Docker';
import { SequelizeAdapter } from './Sequelize';

@Singleton()
export class PostgresDB extends SequelizeAdapter {
  public async connect() {
    const url = createDbConnectionString({
      ...this.settings,
      host: this.dockerPgSettings.container_name,
    })

    return super.connect(url, undefined, undefined, {
      dialect: this.settings.dialect,
    })
  }
  public async createDockerDB(opts?: any) {
    if (! await this.findDockerDb()) {
      this.logger.info('Creating PostgresDB Docker Container. (this may take a few minutes)')
      const dockerSettings = this.app.container
        .resolve(DockerService)
        .settings;

      const result = await this.app.container
        .resolve(DockerService)
        .runDockerCommand('run', [
          '--name', this.dockerPgSettings.container_name,
          "--network", dockerSettings.network_name,
          '-v', `${this.dockerPgSettings.data_volume_dir}:/var/lib/postgresql/data'`,
          '-p', `${this.settings.host_port}:${this.settings.port}`,
          '-e', `POSTGRES_PASSWORD=${this.settings.pass}`,
          '-e', `POSTGRES_USER=${this.settings.user}`,
          '-e', `POSTGRES_DB=${this.settings.name}`,
          // '-e', `POSTGRES_HOST=${this.settings.host}`,
          '-e', `POSTGRES_PORT=${this.settings.port}`,
          '-d', `postgres:${this.dockerPgSettings.image_tag}`,
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

  public dockerPgSettings: PgDockerSettings = {
    container_name: 'godsmack-postgres-db',
    data_volume_dir: '/postgres',
    image_tag: 'alpine',
  }

  private async getDockerDbContainerId() {
    const dockerService = this.app.container.resolve(DockerService);
    const cName = this.dockerPgSettings.container_name;
    return await dockerService.getContainerId(cName);
  }
}

type PgDockerSettings = {
  data_volume_dir: string;
  container_name: string;
  image_tag: string;
}

function createDbConnectionString(settings: {
  name: string;
  user: string;
  pass: string;
  host: string;
  port: number;
  dialect: string;
}) {
  const {
    name,
    user = 'admin',
    pass = 'pass123',
    host = '0.0.0.0',
    port = 5432,
    dialect = 'postgres',
  } = settings
  return `${dialect}://${user}:${pass}@${host}:${port}/${name}`;
}

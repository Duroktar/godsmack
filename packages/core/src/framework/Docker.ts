import { existsSync, readFileSync, writeFileSync } from 'fs';
import { join as joinPath } from 'path';
import { Injectable } from '../injector';
import { LogFactory } from '../services/Logger';
import { isNullOrUndefined } from '../utils/assert';
import { getProjectRoot } from '../utils/getProjectRoot';
import { Shell } from './Shell';

@Injectable()
export class DockerService {
  constructor(
    private logger: LogFactory,
    private shell: Shell,
  ) {
    this.logger = logger.For(this)
  }

  //#region API
  public installDockerSupport() {
    if (!this.validateInstallation()) {
      this.logger.info('Installing docker files.')
      this.createDockerignore()
      this.createDockerfile()
    } else {
      this.logger.info('Docker install is up to date.')
    }
    return this
  }
  //#endregion

  //#region Application
  public validateInstallation() {
    if (!this.hasDockerfile())
      return false

    return this.hasDockerfileEjected() ||
      (this.hasDockerignorefile() && this.compareDockerfileContents())
  }

  public async startDockerApp() {
    this.logger.info('Building docker image.. (this may take a few minutes)')
    await this.buildDockerApp();
    this.logger.info('Running dockerized app.')
    return await this.runDockerApp();
  }

  public async buildDockerApp() {
    const args = [
      "-t", this.settings.image_tag_name,
      ".",
    ]
    await this.runDockerCommand("stop", [this.settings.image_tag_name]);
    await this.runDockerCommand("rm", [this.settings.image_tag_name]);
    return await this.runDockerCommand("build", args);
  }

  public async runDockerApp() {
    return await this.runDockerCommand("run", [
      "--name", this.settings.image_tag_name,
      "--network", this.settings.network_name,
      "-p", "3000:3000",
      this.settings.image_tag_name,
    ], { log: true });
  }

  public async attachDockerApp() {
    const appId = await this.getAppContainerId()
    if (isNullOrUndefined(appId))
      throw new Error('Container ID not found')
    return await this.runDockerCommand("attach", [appId]);
  }

  public async getAppContainerId() {
    return await this.getContainerId(this.settings.image_tag_name)
  }
  //#endregion

  //#region Network
  public async createNetworkBridge() {
    return await this.runDockerCommand('network', [
      'create',
      '--driver', 'bridge',
      this.settings.network_name,
    ])
  }

  public async removeNetworkBridge() {
    return await this.runDockerCommand('network', [
      'rm', this.settings.network_name,
    ])
  }
  //#endregion

  //#region Database
  public async createDockerDb() {
    if (!(await this.findDockerDb())) {
      this.logger.info('Creating PostgresDB Docker Container (this may take a few minutes)')
      const { code } = await this.runDockerDbCommand('run',
        '--name', this.settings.db.container_name,
        '--network', this.settings.network_name,
        '-v', `${this.settings.db.data_volume_dir}:/var/lib/postgresql/data'`,
        '-p', `${this.settings.db.host_expose_port}:${this.settings.db.port}`,
        '-e', `POSTGRES_PASSWORD=${this.settings.db.pass}`,
        '-e', `POSTGRES_USER=${this.settings.db.user}`,
        '-e', `POSTGRES_DB=${this.settings.db.name}`,
        '-e', `POSTGRES_HOST=${this.settings.db.host}`,
        '-e', `POSTGRES_PORT=${this.settings.db.port}`,
        '-d', `postgres:${this.settings.db.image_tag}`,
      )
      if (code === 0) {
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
    const containerId = this.settings.db.container_name
    if (isNullOrUndefined(containerId))
      return
    this.logger.info('Stopping PostgresDB Docker Container.')
    await this.runDockerDbCommand('stop', containerId);
  }

  public async removeDockerDb(): Promise<void> {
    const containerId = this.settings.db.container_name
    if (isNullOrUndefined(containerId))
      return
    this.logger.info('Removing PostgresDB Docker Container.')
    await this.runDockerDbCommand('rm', containerId);
  }

  public async findDockerDb(): Promise<boolean> {
    const result = await this.getDockerDbContainerId();
    if (isNullOrUndefined(result)) {
      this.logger.info('No existing PostgresDB Docker Container found.')
    } else {
      this.logger.info('Found existing PostgresDB Docker Container.')
    }
    return !!result
  }

  private async runDockerDbCommand(cmd: DockerCommand, ...args: string[]) {
    return await this.runDockerCommand(cmd, [...args])
  }

  private async getDockerDbContainerId() {
    const cName = this.settings.db.container_name;
    return await this.getContainerId(cName);
  }

  public getHostName() {
    return Boolean(process.env.DOCKER_CTX)
      ? this.settings.db.container_name
      : this.settings.db.host
  }

  //#endregion

  //#region Events/Actions
  private __setupActions: DockerSetupAction[] = []

  public registerSetupAction(action: DockerSetupAction) {
    this.logger.debug('Registering Docker Setup Action:', action.name)
    this.__setupActions.push(action)
  }

  public async executeSetupActions() {
    for (let action of this.__setupActions) {
      this.logger.info('Executing action:', action.name)
      if (action.label) { this.logger.info(action.label) }
      for (let { func: method, args, msg, err, when: cond = true } of action.steps) {
        if (!cond) continue
        if (msg) { this.logger.debug(msg) }
        if (await method(...args) === err)
          throw new Error('REEEEEE')
      }
    }
    return this
  }
  //#endregion

  //#region Helpers
  public async getContainerId(tag: string) {
    const result = await this.runDockerCommand("ps")
    return result.stdout
      .split('\n')
      .slice(1)
      .find(line => line.includes(tag))
      ?.split(' ')
      ?.pop()
  }

  public async runDockerCommand(cmd: DockerCommand, args: string[] = [], opts: any = {}) {
    this.logger.info('Running Docker Command:', cmd, ', with args: [', args.join(', '), ']');
    return this.shell.spawn('docker', [cmd, ...args], opts);
  }
  //#endregion

  //#region Settings
  public settings: DockerSettings = {
    image_tag_name: 'godsmack-app',
    network_name: 'godsmack',
    daemonize_app: false,
    db: {
      container_name: 'godsmack-postgres-db',
      data_volume_dir: '/postgres',
      image_tag: 'alpine',
      host_expose_port: 5432,

      // DB
      user: 'admin',
      pass: 'pass123',
      port: 5432,
      host: '0.0.0.0',
      name: 'godsmack-db',
    }
  }
  //#endregion

  //#region Dockerfile, .dockerignore, etc
  private __dockerfile = 'Dockerfile'
  private __dockerignorefile = '.dockerignore'

  private hasDockerfile(): boolean {
    return existsSync(this.getDockerfilePath())
  }

  private hasDockerignorefile(): boolean {
    return existsSync(this.getDockerignorePath())
  }

  private readonly __ejectTag = '# -- NO_REPLACE';

  private hasDockerfileEjected(): boolean {
    return !this.readDockerfile()
      .split('\n')
      .slice(0, 2)
      .includes(this.__ejectTag)
  }

  private readDockerfile(): string {
    return readFileSync(this.getDockerfilePath()) + ''
  }

  private compareDockerfileContents(options?: any): boolean {
    return this.readDockerfile() === this.getDockerfileContents(options)
  }

  private createDockerfile(options?: any) {
    const contents = this.getDockerfileContents(options)
    writeFileSync(this.getDockerfilePath(), contents)
  }

  private createDockerignore() {
    const contents = this.getDockerignoreContents()
    writeFileSync(this.getDockerignorePath(), contents)
  }

  private getDockerfilePath() {
    return joinPath(getProjectRoot(), this.__dockerfile)
  }

  private getDockerignorePath() {
    return joinPath(getProjectRoot(), this.__dockerignorefile)
  }

  private getDockerfileContents({
    nodeEnv = process.env.NODE_ENV,
    port = 3000,
    nodeVersion = 'lts-alpine',
  } = {}) {
    return `# DELETE THIS LINE TO EJECT FILE
${this.__ejectTag}

FROM node:${nodeVersion}

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies..
#  A wildcard is used to ensure both package.json AND
#  package-lock.json are copied where available (npm@5+)
COPY package*.json ./
COPY tsconfig.json ./

RUN npm install

# Bundle app sources
COPY ./src ./src
COPY ./www ./www

ENV DOCKER_CTX=true
ENV NODE_ENV=${nodeEnv ?? 'development'}

# EXPOSE 9229
EXPOSE ${port}
CMD [ "npm", "start" ]
`
  }

  private getDockerignoreContents() {
    return `node_modules\nnpm-debug.log`
  }
  //#endregion
}

//#region Types
export type DockerCommand =
  | 'build'
  | 'start'
  | 'run'
  | 'stop'
  | 'rm'
  | 'exec'
  | 'attach'
  | 'ps'
  | 'network'
  ;

export type SetupStep<F extends (...args: any) => any> = {
  func: F;
  args: Parameters<F>;
  msg?: string;
  err?: any;
  when?: boolean;
}

export type DockerSetupAction = {
  name: string;
  label?: string
  steps: SetupStep<any>[]
}

type DockerDbSettings = {
  data_volume_dir: string;
  container_name: string;
  image_tag: string;

  // DbSettings more like it..
  host_expose_port: number;
  host: string;
  port: number;
  pass: string;
  user: String;
  name: string;
}

type DockerSettings = {
  image_tag_name: string
  network_name: string
  daemonize_app: boolean
  db: DockerDbSettings
}
//#endregion

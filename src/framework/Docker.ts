import { join as joinPath } from 'path';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { getProjectRoot } from '../utils/getProjectRoot';
import { Logger } from './services';
import { Injectable } from '../injector';
import { Shell } from './Shell';

export interface SetupStep<F extends (...args: any) => any> {
  func: F;
  args: Parameters<F>;
  msg?: string;
  err?: any;
  when?: boolean;
}

export interface IDockerSetupAction {
  name: string;
  label?: string
  steps: SetupStep<any>[]
}

@Injectable()
export class DockerService {
  constructor(
    private logger: Logger,
    private shell: Shell,
  ) {
    this.logger = logger.For(this)
  }

  //#region Public API
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

  public registerSetupAction(action: IDockerSetupAction) {
    this.logger.debug('Registering Docker Setup Action:', action.name)
    this.__setupActions.push(action)
  }

  public validateInstallation() {
    if (this.hasDockerfile() && this.hasDockerfileEjected()) {
      return true
    }
    return (
      this.hasDockerfile() &&
      this.hasDockerignorefile() &&
      this.compareDockerfileContents()
    )
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

  public async startDockerApp() {
    await this.HACK__copyGodsmackFiles()
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
    const args = [
      "--name", this.settings.image_tag_name,
      "--network", this.settings.network_name,
      "-p", "3000:3000",
      this.settings.image_tag_name,
    ] // .concat(daemon ? '-d' : [])
    return await this.runDockerCommand("run", args, { log: true });
  }

  public async attachDockerApp() {
    const appId = await this.getAppContainerId()
    if (!appId) throw new Error(`Couldn't find Container ID.`)
    return await this.runDockerCommand("attach", [appId]);
  }

  public async getAppContainerId() {
    return await this.getContainerId(this.settings.image_tag_name)
  }

  public async createNetworkBridge() {
    return await this.runDockerCommand('network',
      ['create',
        '--driver', 'bridge',
        this.settings.network_name])
  }

  public async removeNetworkBridge() {
    return await this.runDockerCommand('network',
      ['rm', this.settings.network_name])
  }

  public async getContainerId(tag: string) {
    const result = await this.runDockerCommand("ps")
    return result.stdout
      .split('\n')
      .slice(1)
      .find(line => line.includes(tag))
      ?.split(' ')
      .pop()
  }

  public async runDockerCommand(cmd: DockerCommand, args: string[] = [], opts: any = {}) {
    return this.shell.spawn('docker', [cmd, ...args], opts);
  }

  // docker exec -it (docker container ls | grep godsmack-app | awk '{print $1}') /bin/sh
  //#endregion

  private async HACK__copyGodsmackFiles() {
    this.logger.info('HACK!! Copying Godsmack files.')
    await this.shell.spawn('rm', ['-rf', '.godsmack'])
    await this.shell.spawn('mkdir', ['.godsmack'])
    return this.shell.spawn("cp", [
      "-r", "../godsmack", ".godsmack",
    ]);
  }

  //#region Internals
  private __setupActions: IDockerSetupAction[] = []

  private __dockerfile = 'Dockerfile'
  private __dockerignorefile = '.dockerignore'

  public settings: DockerSettings = {
    image_tag_name: 'godsmack-app',
    network_name: 'godsmack',
    daemonize_app: false,
  }

  private hasDockerfile(): boolean {
    return existsSync(this.getDockerfilePath())
  }

  private hasDockerignorefile(): boolean {
    return existsSync(this.getDockerignorePath())
  }

  private readonly __ejectTag = '# -- NO_REPLACE';

  private hasDockerfileEjected(): boolean {
    return this.readDockerfile().startsWith(this.__ejectTag)
  }

  private readDockerfile(): string {
    return readFileSync(this.getDockerfilePath()) + ''
  }

  private compareDockerfileContents(options?: any): boolean {
    return this.readDockerfile() === this.getDockerfileContents(options)
  }

  private createDockerfile(options?: any) {
    const dockerfilePath = this.getDockerfilePath()
    const contents = this.getDockerfileContents(options)
    writeFileSync(dockerfilePath, contents)
  }

  private createDockerignore() {
    const dockerignorePath = this.getDockerignorePath()
    const contents = this.getDockerignoreContents()
    writeFileSync(dockerignorePath, contents)
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

# Bundle godsmack dep (until up on npm)
COPY .godsmack /usr/src

RUN npm install

# Bundle app sources
COPY ./src ./src
COPY ./www ./www

ENV DOCKER_CTX=true
ENV NODE_ENV=${nodeEnv ?? 'development'}

EXPOSE 9229
EXPOSE ${port}
CMD [ "npm", "start" ]
`
  }

  private getDockerignoreContents() {
    return `node_modules\nnpm-debug.log`
  }
  //#endregion
}

type DockerSettings = {
  image_tag_name: string
  network_name: string
  daemonize_app: boolean
}

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

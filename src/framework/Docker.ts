import { spawn } from 'child_process';
import { join as joinPath } from 'path';
import { writeFileSync, existsSync, readFileSync } from 'fs';
import { getProjectRoot } from '../utils/getProjectRoot';
import { Logger } from './services';
import { Injectable } from '../injector';

interface SetupStep<F extends (...args: any) => any> {
  func: F;
  args: Parameters<F>;
  msg?: string;
  err?: any;
}

interface IDockerSetupAction {
  name: string;
  label?: string
  steps: SetupStep<any>[]
}

@Injectable()
export class DockerService {
  constructor(private logger: Logger) {
    this.logger = logger.For(this)
  }

  //#region Public API
  public installDockerSupport() {
    this.logger.info('Checking docker install status..')
    if (!this.validateInstallation()) {
      this.logger.info('Check failed. Installing docker files.')
      this.createDockerignore()
      this.createDockerfile()
    } else {
      this.logger.info('Docker install is up to date.')
    }
    return this
  }

  public registerSetupAction(action: IDockerSetupAction) {
    this.logger.info('Registering Docker Setup Action:', action.name)
    this.__setupActions.push(action)
  }

  public validateInstallation() {
    return (
      this.hasDockerignorefile() &&
      this.hasDockerfile() &&
      this.compareDockerfileContents()
    )
  }

  public async executeSetupActions() {
    for (let action of this.__setupActions) {
      this.logger.info('Executing action:', action.name)
      if (action.label) { this.logger.info(action.label) }
      for (let { func: method, args, msg, err } of action.steps) {
        if (msg) { this.logger.info(msg) }
        if (await method(...args) === err)
          throw new Error('REEEEEE')
      }
    }
    return this
  }

  public async startDockerApp(tag = 'godsmack-app') {
    // this.logger.info('HACK!! Copying Godsmack files.')
    // await this.HACK__copyGodsmackFiles()
    this.logger.info('Building docker image.. (this can take a few minutes)')
    await this.buildDockerApp();
    this.logger.info('Running dockerized app.')
    await this.runDockerApp();

    // // Use when daemonizing..
    // this.logger.info('Attaching to app..')
    // await this.attachDockerApp();
    return
  }

  public async buildDockerApp(tag = 'godsmack-app') {
    // await shell("npm", ["run", "build"])
    await this.runDockerCommand("stop", [tag]);
    await this.runDockerCommand("rm", [tag]);
    return await this.runDockerCommand("build", ["-t", tag, "."]);
  }

  public async runDockerApp(tag = 'godsmack-app', daemon = false) {
    const args = ["-p", "3000:3000"].concat(daemon ? '-d' : [])
    return await this.runDockerCommand("run", args.concat(tag), { log: true });
  }

  public async attachDockerApp(tag = 'godsmack-app') {
    const appId = await this.getAppContainerId(tag)
    if (!appId) throw new Error(`Couldn't find Container ID.`)
    return await this.runDockerCommand("attach", [appId]);
  }

  public async getAppContainerId(tag = 'godsmack-app') {
    return await this.getContainerId(tag)
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

  public async runDockerCommand(cmd: DockerCommands, args: string[] = [], opts?: any) {
    return shell('docker', [cmd, ...args], opts?.options, opts?.log);
  }

  // docker exec -it (docker container ls | grep godsmack-app | awk '{print $1}') /bin/sh
  //#endregion

  private async HACK__copyGodsmackFiles() {
    await shell('rm', ['-rf', '.godsmack'])
    await shell('mkdir', ['.godsmack'])
    return shell("cp", [
      "-r", "../godsmack", ".godsmack",
    ]);
  }

  //#region Internals
  private __setupActions: IDockerSetupAction[] = []

  private __dockerfile = 'Dockerfile'
  private __dockerignorefile = '.dockerignore'

  private hasDockerfile(): boolean {
    return existsSync(this.getDockerfilePath())
  }

  private hasDockerignorefile(): boolean {
    return existsSync(this.getDockerignorePath())
  }

  private readDockerfile(): string {
    return readFileSync(this.getDockerfilePath()) + ''
  }

  private compareDockerfileContents(): boolean {
    return this.readDockerfile() === this.getDockerfileContents()
  }

  private createDockerfile(options?: any) {
    const dockerfilePath = this.getDockerfilePath()
    const contents = this.getDockerfileContents()
    writeFileSync(dockerfilePath, contents)
  }

  private createDockerignore(options?: any) {
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
    return `FROM node:${nodeVersion}

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

EXPOSE ${port}
CMD [ "npm", "start" ]
`
  }

  private getDockerignoreContents() {
    return `node_modules\nnpm-debug.log`
  }
  //#endregion
}

type DockerCommands =
  | 'build'
  | 'start'
  | 'run'
  | 'stop'
  | 'rm'
  | 'exec'
  | 'attach'
  | 'ps'
  ;

function shell(cmd: string, args: string[], opts = { cwd: process.cwd() }, log = false) {
  return new Promise<{ stdout: string, code: number }>((resolve, reject) => {
    const child = spawn(cmd, args, opts);
    let res = ""

    if (!child.stdout || !child.stderr)
      return reject();

    child.stdout.on("data", data => {
      res += data
      log && process.stdout.write(data);
    });
    child.stderr.on("data", data => {
      log && process.stderr.write(data);
    });

    child.on('error', (error) => {
      console.error(`error: ${error.message}`);
      reject(error)
    });
    child.on("close", code => {
      // console.debug(`child process exited with code ${code}`);
      resolve({ stdout: res, code })
    });
  })
}

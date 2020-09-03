
import { spawnSync } from 'child_process';
import enquirer from 'enquirer';
import { readFileSync } from 'fs';
import ora from 'ora';
import { basename, join, resolve } from 'path';
import { Container } from '../../index';
import { DirectoryBuilder } from '../../services/template/DirectoryBuilder';
import { TemplateSystem } from '../../services/template/TemplateSystem';

type TemplateModel = {
  packageName: string
  packageVersion: string
  packageLicense: string
  addDockerSupport: boolean
  addHttpServerSupport: boolean
  addSwaggerSupport: boolean
  addDatabaseSupport: boolean
  database?: DbProviderName
  graphql?: GQlProviderName
  addDockerDBSupport: boolean
  addGraphQlSupport: boolean
  addHotSwapping: boolean
  baseServerDir: string
}

type DbProviderName = 'typeorm' | 'sequelize'
type GQlProviderName = 'type-graphql' | 'openapi-to-graphql'

export async function bootstrap() {
  const model: TemplateModel = await enquirer.prompt([
    {
      type: 'input',
      name: 'packageName',
      message: 'Project Name',
      initial: basename(resolve(process.cwd())).toLowerCase(),
    },
    {
      type: 'input',
      name: 'packageVersion',
      message: 'Project Version',
      initial: '0.0.1',
    },
    {
      type: 'input',
      name: 'packageLicense',
      message: 'Project License',
      initial: 'MIT',
    },
    {
      type: 'confirm',
      name: 'addDockerSupport',
      message: 'Add Docker Support?',
    },
  ]);

  // -- HTTP-SERVER
  Object.assign(model, await enquirer.prompt([
    {
      type: 'confirm',
      name: 'addHttpServerSupport',
      message: 'Add Http-Server (expressjs) Support?',
    },
  ]))

  // swagger
  if (model.addHttpServerSupport)
    Object.assign(model, await enquirer.prompt([
      {
        type: 'confirm',
        name: 'addSwaggerSupport',
        message: 'Add OpenAPI (swagger) Controller Support?',
      },
    ]))

  // graphql
  if (model.addHttpServerSupport)
    Object.assign(model, await enquirer.prompt([
      {
        type: 'confirm',
        name: 'addGraphQlSupport',
        message: 'Add GraphQL Support?',
      },
    ]))

  if (model.addGraphQlSupport)
    Object.assign(model, await enquirer.prompt([
      {
        type: 'select',
        name: 'graphql',
        message: 'Choose a GrahQL Engine',
        choices: ['type-graphql', 'openapi-to-graphql'] as GQlProviderName[],
      },
    ]))

  // -- DATABASE
  Object.assign(model, await enquirer.prompt([
    {
      type: 'confirm',
      name: 'addDatabaseSupport',
      message: 'Add Database (postgres) Support?',
    },
  ]))

  if (model.addDatabaseSupport)
    Object.assign(model, await enquirer.prompt([
      {
        type: 'select',
        name: 'database',
        message: 'Select a Database Engine',
        choices: ['typeorm', 'sequelize'] as DbProviderName[],
      },
      {
        type: 'confirm',
        name: 'addDockerDBSupport',
        message: 'Add Docker Database Support?',
      },
    ]))

  // -- MISC
  Object.assign(model, await enquirer.prompt([
    {
      type: 'input',
      name: 'baseServerDir',
      message: 'Base directory for source code?',
      initial: 'server',
    },
    {
      type: 'confirm',
      name: 'addHotSwapping',
      message: 'Add Live Service Hot Swapping',
      initial: false,
    },
  ]))

  // -- Setup
  const container = new Container()
    .addSingleton(TemplateSystem);

  const system = container.resolve(TemplateSystem)

  const spec = new DirectoryBuilder()
    .mkDir(model.baseServerDir, dir => dir
      .mkDir('controllers', dir => dir
        .touch('health.ts', loadTemplate('health.controller'))
      ).when(model.addHttpServerSupport)
      .mkDir('generated', dir => dir
        .touch('routes.ts', loadTemplate('routes.ts'))
      ).when(model.addSwaggerSupport)
      .mkDir('interfaces')
      .mkDir('middleware', dir => dir
        .touch('auth.ts', loadTemplate('auth.ts')).when(model.addSwaggerSupport)
        .touch('error.ts', loadTemplate('error.ts'))
        .touch('graphql.ts', loadTemplate('graphql.ts')).when(model.addGraphQlSupport)
      ).when(model.addSwaggerSupport || model.addGraphQlSupport)
      .mkDir('repositories')
      .mkDir('resolvers', dir => dir
        .mkDir('args', dir => dir
          .touch('SkipAndTakeArgs.ts', loadTemplate('graphql.SkipAndTakeArgs'))
        )
        .touch('HealthResolver.ts', loadTemplate('health.resolver'))
      ).when(model.addGraphQlSupport)
      .mkDir('services')
      .mkDir('templates', dir => dir
        .touch('routes.template.hbs', loadTemplate('routes.template.hbs'), true)
      ).when(model.addSwaggerSupport)
      .touch('app.ts', loadTemplate('app.ts'))
      .touch('errors.ts', loadTemplate('errors.ts'))
      .touch('ioc.ts', loadTemplate('ioc.ts'))
      .touch('main.ts', loadTemplate('main.ts'))
      .touch('settings.ts', loadTemplate('settings.ts'))
      .touch('types.ts', loadTemplate('types.ts'))
      .touch('swagger.json', loadTemplate('swagger.json')).when(model.addSwaggerSupport)
    )
    .touch('.editorconfig', loadTemplate('.editorconfig'))
    .touch('.gitignore', loadTemplate('.gitignore'))
    .touch('package.json', loadTemplate('package.json'))
    .touch('tsconfig.json', loadTemplate('tsconfig.json'))
    .buildSpec();

  // -- Program
  const spinner1 = ora('Generating Directories').start();
  await system.generateDirectoriesFromSpec(spec, model)
  spinner1.succeed()

  const spinner2 = ora('Installing Dependencies').start();
  spawnSync('yarn')
  spinner2.succeed()
}

function loadTemplate(filename: string) {
  return readFileSync(
    join(__dirname, '../../../', 'templates', `${filename}.template`)
  ).toString('utf-8');
}

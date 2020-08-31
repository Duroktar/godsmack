import type { IDirectoryBuilder, DirSpec, SubdirBuilder } from './interfaces';
import { createDirSpec, createFileSpec } from "./factories";

/**
 * Directory Builder creates a directory specification.
 *
 * @example
 *  new DirectoryBuilder()
 *    .mkDir('client')
 *    .mkDir('server', _ => _
 *      .mkdir('templates', _ => _
 *        .touch('routes.template.hbs'))
 *      .touch('app.ts')
 *      .touch('ioc.ts'))
 *      .touch('main.ts'))
 *      .touch('settings.ts'))
 *    .touch('.editorconfig')
 *    .touch('.gitignore')
 *    .touch('apollo.config.js')
 *    .touch('package.json')
 *    .touch('tsconfig.json')
 *    .touch('webpack.config.js')
 */
export class DirectoryBuilder implements IDirectoryBuilder {
  constructor(name = process.cwd()) {
    this.__directory = createDirSpec(name);
  }

  private __directory: DirSpec;

  public mkDir(dirname: string, subDirBuilder?: SubdirBuilder) {
    const dirBuilder = new DirectoryBuilder(dirname);
    const specBuilder = (subDirBuilder ?? (id => id))(dirBuilder);
    this.__directory.folders.push(specBuilder.buildSpec());
    return this;
  }

  public touch(filename: string, template?: string, model?: object) {
    const fileSpec = createFileSpec(filename, template);
    this.__directory.files.push(fileSpec);
    return this;
  }

  public buildSpec() {
    return this.__directory;
  }
}

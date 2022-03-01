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
 *    .buildSpec()
 */
export class DirectoryBuilder implements IDirectoryBuilder {
  constructor(name = process.cwd()) {
    this.__directory = createDirSpec(name);
  }

  private __directory: DirSpec;

  public mkDir(dirname: string, subDirBuilder?: SubdirBuilder) {
    if (this.__stopNext.pop())
      return this
    const dirBuilder = new DirectoryBuilder(dirname);
    const specBuilder = (subDirBuilder ?? (id => id))(dirBuilder);
    this.__directory.folders.push(specBuilder.buildSpec());
    this.__history.push({ target: 'folders' });
    return this;
  }

  public touch(filename: string, template?: string, raw?: boolean) {
    if (this.__stopNext.pop())
      return this
    const fileSpec = createFileSpec(filename, template, raw);
    this.__directory.files.push(fileSpec);
    this.__history.push({ target: 'files' });
    return this;
  }

  private __history: { target: 'folders' | 'files' }[] = []
  private __stopNext: boolean[] = []

  public if(predicate: unknown): this {
    this.__stopNext.push(!predicate)
    return this
  }

  public when(predicate: unknown): this {
    if (!predicate) {
      switch(this.__history.pop()?.target) {
        case 'files':
          this.__directory.files.pop();
          break;
        case 'folders':
          this.__directory.folders.pop();
          break;
      }
    }
    return this
  }

  public buildSpec() {
    return this.__directory;
  }
}

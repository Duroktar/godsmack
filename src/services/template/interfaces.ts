
export interface IDirectoryBuilder<Ctx = any> {
  mkDir(dirname: string, subDirBuilder?: SubdirBuilder<Ctx>): this;
  touch(filename: string, template?: string, model?: object): this;

  buildSpec(): DirSpec;
}

export type DirSpec = {
  folders: DirSpec[];
  files: FileSpec[];

  name: string;
};

export type FileSpec = {
  template?: string;
  // model?: object;

  name: string;
};

export type SubdirBuilder<T = any> = (
  builder: IDirectoryBuilder<T>
) => IDirectoryBuilder<T>;

export interface IDirectoryWalker<Ctx = any> {
  walkDirSpecRecursive(root: DirSpec, ctx: Ctx): void;
}

export interface IDirectoryVisitor<Ctx = any> {
  visitDirectoryBefore?(directory: DirSpec, ctx: Ctx): void;
  visitDirectoryAfter?(directory: DirSpec, ctx: Ctx): void;
  visitFile?(file: FileSpec, ctx: Ctx): void;
}

export interface ITemplateSystem {
  generateDirectoriesFromSpec(directory: DirSpec): void;
}

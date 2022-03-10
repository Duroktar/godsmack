import { Singleton } from '../../injector';
import { DirectoryVisitor, RunCtx } from './DirectoryVisitor';
import type { DirSpec, IDirectoryWalker } from './interfaces';

@Singleton()
export class DirectoryWalker implements IDirectoryWalker {

  constructor(private visitor: DirectoryVisitor) { }

  walkDirSpecRecursive(directory: DirSpec, ctx: RunCtx = { steps: [] }): void {
    for (let i = 0; i < directory.folders.length; i++) {
      this.visitor.visitDirectoryBefore?.(directory.folders[i], ctx);
      this.walkDirSpecRecursive(directory.folders[i], ctx);
      this.visitor.visitDirectoryAfter?.(directory.folders[i], ctx);
    }

    if (!this.visitor.visitFile)
      return

    for (let i = 0; i < directory.files.length; i++) {
      this.visitor.visitFile(directory.files[i], ctx);
    }
  }
}

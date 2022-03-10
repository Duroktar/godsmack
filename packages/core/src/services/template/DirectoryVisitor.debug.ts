import { RunCtx } from './DirectoryVisitor';
import { IDirectoryVisitor, DirSpec, FileSpec } from './interfaces';

export class DebugDirectoryVisitor implements IDirectoryVisitor {
  visitDirectoryBefore(spec: DirSpec, ctx: RunCtx): void {
    console.log({ dirName: spec.name, ctx, type: 'visitDirectoryBefore' })
  }
  visitDirectoryAfter(spec: DirSpec, ctx: RunCtx): void {
    console.log({ dirName: spec.name, ctx, type: 'visitDirectoryAfter' })
  }
  visitFile(spec: FileSpec, ctx: RunCtx): void {
    console.log({ filename: spec.name, ctx, type: 'visitFile' })
  }
}

import type { DirSpec, FileSpec } from './interfaces';

export function createDirSpec(
  name: string,
  files: FileSpec[] = [],
  folders: DirSpec[] = []
): DirSpec {
  return { files, folders, name };
}

export function createFileSpec(
  name: string,
  template?: string,
  raw?: boolean,
): FileSpec {
  return { template, name, raw };
}

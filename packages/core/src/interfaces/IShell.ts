import type { SpawnOptionsWithoutStdio } from 'child_process';

export interface IShell {
  spawn(cmd: string, args: string[], opts?: SpawnOptions): Promise<{
    stdout: string;
    code: number;
}>;
}

export type SpawnOptions = SpawnOptionsWithoutStdio &
{ log?: boolean; };

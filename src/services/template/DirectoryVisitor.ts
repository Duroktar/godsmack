import type { DirSpec, IDirectoryVisitor, FileSpec } from './interfaces';

export type RunCtx = { steps: Actions[] }

export class DirectoryVisitor implements IDirectoryVisitor {
  visitDirectoryBefore(spec: DirSpec, ctx: RunCtx): void {
    ctx.steps.push(actions.mkdir(spec.name));
    ctx.steps.push(actions.cd(spec.name));
  }
  visitDirectoryAfter(spec: DirSpec, ctx: RunCtx): void {
    ctx.steps.push(actions.cd('../'));
  }
  visitFile(spec: FileSpec, ctx: RunCtx): void {
    ctx.steps.push(actions.touch(spec.name, spec.template));
  }
}

const actions = {
  mkdir: (dirname: string) => ({
    type: 'mkdir' as const,
    payload: { dirname }
  }) as MkdirAction,
  cd: (dirname: string) => ({
    type: 'cd' as const,
    payload: { dirname }
  }) as CdAction,
  touch: (filename: string, template?: string) => ({
    type: 'touch' as const,
    payload: { filename, template },
  }) as TouchAction,
}

type TouchAction = PayloadAction<"touch", {
  filename: string;
  template?: string;
}>;

type MkdirAction = PayloadAction<'mkdir', {
  dirname: string;
}>;

type CdAction = PayloadAction<'cd', {
  dirname: string;
}>;

type Actions =
  | CdAction
  | MkdirAction
  | TouchAction

type PayloadAction<T, P> = Action<T> & Payload<P>

type Payload<T> = { payload: T; }
type Action<T> = { type: T; }

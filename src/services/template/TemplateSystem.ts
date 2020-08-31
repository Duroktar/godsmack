import { streamEnd, streamWrite } from '@rauschma/stringio';
import { spawn } from 'child_process';
import HandleBars from 'handlebars';
import { Singleton } from '../../injector/decorators/Singleton';
import { RunCtx } from './DirectoryVisitor';
import { DirectoryWalker } from './DirectoryWalker';
import type { DirSpec, ITemplateSystem } from './interfaces';

type Writable = Parameters<typeof streamWrite>[0]

@Singleton()
export class TemplateSystem implements ITemplateSystem {
  constructor(private walker: DirectoryWalker) {}

  public async generateDirectoriesFromSpec(directory: DirSpec, model?: object) {
    const ctx: RunCtx = { steps: [] }

    const sink = spawn('sh', [],
      {stdio: ['pipe', process.stdout, process.stderr] });

    this.walker.walkDirSpecRecursive(directory, ctx);
    await this.actionStepsPipeline(sink.stdin, ctx, model);
  }

  private touchTemplate(filename: string, template?: string, model?: object) {
    const content = HandleBars.compile(template)(model);
    return `cat > ${filename} <<__EOF__\n${content}__EOF__`;
  }

  private async actionStepsPipeline(writable: Writable, ctx: RunCtx, model?: object) {
    const writer = (txt: string) => streamWrite(writable, `${txt}\n`);

    for (let action of ctx.steps) {
      switch(action.type) {
        case 'cd':
        case 'mkdir':
          await writer(`${action.type} ${action.payload.dirname}`);
          break;

        case 'touch': {
          await writer(`${action.type} ${action.payload.filename}`);

          if (typeof action.payload.template === 'string') {
            const { filename, template } = action.payload;
            await writer(this.touchTemplate(filename, template, model));
          }
          break;
        }

        default:
          throw new Error(`Unkown action: ${JSON.stringify(action)}`)
      }
    }

    await streamEnd(writable);
  }
}

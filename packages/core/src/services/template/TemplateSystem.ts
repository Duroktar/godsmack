import { streamEnd, streamWrite } from '@rauschma/stringio';
import { spawn } from 'child_process';
import Handlebars from 'handlebars';
import { Singleton } from '../../injector';
import { RunCtx } from './DirectoryVisitor';
import { DirectoryWalker } from './DirectoryWalker';
import type { DirSpec, ITemplateSystem } from './interfaces';

type Writable = Parameters<typeof streamWrite>[0]

@Singleton()
export class TemplateSystem implements ITemplateSystem {
  constructor(private walker: DirectoryWalker) {
    Handlebars.registerHelper({
      eq: (v1, v2) => v1 === v2,
      ne: (v1, v2) => v1 !== v2,
      lt: (v1, v2) => v1 < v2,
      gt: (v1, v2) => v1 > v2,
      lte: (v1, v2) => v1 <= v2,
      gte: (v1, v2) => v1 >= v2,
      and() {
          return Array.prototype.every.call(arguments, Boolean);
      },
      or() {
          return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
      }
    });
  }

  public async generateDirectoriesFromSpec(directory: DirSpec, model?: object) {
    const ctx: RunCtx = { steps: [] }

    const sink = spawn('sh', [],
      {stdio: ['pipe', process.stdout, process.stderr] });

    this.walker.walkDirSpecRecursive(directory, ctx);
    await this.actionStepsPipeline(sink.stdin, ctx, model);
  }

  private touchTemplate(filename: string, template?: string, model?: object, raw?: boolean) {
    let content = template;
    if (!raw)
      content = Handlebars.compile(template)(model);
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
            const { filename, template, raw } = action.payload;
            await writer(this.touchTemplate(filename, template, model, raw));
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

import ts from "typescript";
import { transformerFactory } from './factory';

export default function(program: ts.Program, pluginOptions: {}) {
  const typeChecker = program.getTypeChecker()
  const typeCheckedTransformer = transformerFactory(typeChecker)
  return (ctx: ts.TransformationContext) => {
    const transformer = typeCheckedTransformer(ctx)
    return (sourceFile: ts.SourceFile) => transformer(sourceFile)
  };
}

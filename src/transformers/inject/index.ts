import ts from "typescript";
import { transformerFactory } from './factory';
export * from "./factory";
export { VisitSourceFileContext } from "./VisitSourceFileContext";

export default function(program: ts.Program, pluginOptions: {}) {
  const typeChecker = program.getTypeChecker()
  return (ctx: ts.TransformationContext) => {
    const transformer = transformerFactory(ctx, typeChecker)
      return (sourceFile: ts.SourceFile) => {
        const result = transformer(sourceFile)
        return result
      };
  };
}

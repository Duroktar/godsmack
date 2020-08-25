import ts from "typescript";
import { VisitSourceFileContext } from "./VisitSourceFileContext";

/**
 * Transforms a common node to a TypeScript compiler node.
 * @param node Common node to be transformed.
 */
export function transform(node: ts.CallExpression, context: VisitSourceFileContext | undefined) {
  const typeRef: ts.TypeReferenceNode = node.typeArguments?.[0] as any;
  const text = typeRef.typeName.getText();
  node.arguments = ts.createNodeArray([ts.createStringLiteral(text)])
  return node
}

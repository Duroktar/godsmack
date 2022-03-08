import ts from "typescript";
import { parseAndTransform } from "./transform";

export const transformerFactory =
  (typeChecker: ts.TypeChecker) =>
  (context: ts.TransformationContext) =>
  (file: ts.SourceFile) =>
    visitSourceFile(file, context, typeChecker) as ts.SourceFile;

export function visitSourceFile(sourceFile: ts.SourceFile, context: ts.TransformationContext, typeChecker: ts.TypeChecker) {

  return recursiveNodeVisitor(sourceFile);

  function recursiveNodeVisitor(node: ts.Node): ts.Node {
    if (node == null)
      return node;

    // visit the children in post order
    node = ts.visitEachChild(node, recursiveNodeVisitor, context);
    return visitNode(node, sourceFile, typeChecker);
  }
}

export function visitNode(visitingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker): ts.CallExpression;
export function visitNode(visitingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker) {
  return parseAndTransform(visitingNode, sourceFile, typeChecker) ?? visitingNode;
}

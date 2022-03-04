import ts from "typescript";
import { throwErrorForSourceFile } from "@ts-nameof/common";
import { parseAndTransform } from "./transform";

export const transformerFactory =
  (typeChecker: ts.TypeChecker) =>
  (context: ts.TransformationContext) =>
  (file: ts.SourceFile) =>
    visitSourceFile(file, context, typeChecker) as ts.SourceFile;

export function visitSourceFile(sourceFile: ts.SourceFile, context: ts.TransformationContext, typeChecker: ts.TypeChecker) {
    try {
        return visitNodeAndChildrenRec(sourceFile, typeChecker);
    } catch (err: any) {
        return throwErrorForSourceFile(err.message, sourceFile.fileName);
    }

    function visitNodeAndChildrenRec(node: ts.Node, typeChecker: ts.TypeChecker): ts.Node {
        if (node == null)
            return node;

        // visit the children in post order
        node = ts.visitEachChild(node, childNode => visitNodeAndChildrenRec(childNode, typeChecker), context);
        return visitNode(node, sourceFile, typeChecker);
    }
}

export function visitNode(visitingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker): ts.CallExpression;
export function visitNode(visitingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker) {
    return parseAndTransform(visitingNode, sourceFile, typeChecker) ?? visitingNode;
}

import ts from "typescript";
// import { transformCallExpression } from "@ts-nameof/transforms-common";
import { throwErrorForSourceFile } from "@ts-nameof/common";
import { parseAndTransform } from "./parse";
import { transform } from "./transform";
import { VisitSourceFileContext } from "./VisitSourceFileContext";

/** Transformer factory for performing nameof transformations. */
export const transformerFactory = (context: any, typeChecker: any) => {
    return (file: any) => visitSourceFile(file, context, typeChecker) as ts.SourceFile;
};

/** Visits all the nodes of the source file. */
export function visitSourceFile(sourceFile: ts.SourceFile, context: ts.TransformationContext, typeChecker: ts.TypeChecker) {
    const visitSourceFileContext: VisitSourceFileContext = {
        interpolateExpressions: new Set()
    };
    try {
        const result = visitNodeAndChildren(sourceFile, typeChecker);

        return result;
    } catch (err) {
        return throwErrorForSourceFile(err.message, sourceFile.fileName);
    }

    function visitNodeAndChildren(node: ts.Node, typeChecker: ts.TypeChecker): ts.Node {
        if (node == null)
            return node;

        // visit the children in post order
        node = ts.visitEachChild(node, childNode => visitNodeAndChildren(childNode, typeChecker), context);
        return visitNode(node, sourceFile, typeChecker, visitSourceFileContext);
    }
}

/** Visit a node and do a nameof transformation on it if necessary. */
export function visitNode(visitingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker): ts.CallExpression;
/** @internal */
export function visitNode(visitingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker, context: VisitSourceFileContext | undefined): ts.CallExpression;
export function visitNode(visitingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker, context?: VisitSourceFileContext) {
    const parseResult = parseAndTransform(visitingNode, sourceFile, typeChecker, context);
    if (parseResult == null)
        return visitingNode;
    return parseResult
}

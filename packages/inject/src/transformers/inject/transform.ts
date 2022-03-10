import ts from "typescript";
import { isDecoratedClassConstructorInjection, parseClassDeclarationNode } from "./transforms/classes";
import { isContainerRegisterMethodCall, parseRegisterCallExpressionNode } from "./transforms/register";
import { isContainerResolveMethodCall, parseResolveCallExpressionNode } from "./transforms/resolve";

export function parseAndTransform(parsingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker) {
  if (ts.isSourceFile(parsingNode)) {
    return sourceFile
  }

  // Runtime Support for Class Constructor Interface injection
  if (isDecoratedClassConstructorInjection(parsingNode)) {
    return parseClassDeclarationNode(parsingNode, sourceFile, typeChecker)
  }

  // Runtime Support for `resolve` Interface calls
  if (isContainerResolveMethodCall(parsingNode)) {
    return parseResolveCallExpressionNode(parsingNode)
  }

  // Runtime Support for `register*` Interface calls
  if (isContainerRegisterMethodCall(parsingNode)) {
    return parseRegisterCallExpressionNode(parsingNode)
  }

  return parsingNode;
}

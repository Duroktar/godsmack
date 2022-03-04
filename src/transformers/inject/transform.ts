import ts from "typescript";
import { hasFields } from "./bitField";
import { decoratorNameList, resolverClassMethodName } from "./config";

export function parseAndTransform(parsingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker) {
  if (ts.isSourceFile(parsingNode)) {
    return sourceFile // remember to pass this back since we've probably mutated it somewhere along the way.
  }

  if (isDecoratedClassConstructorInjection(parsingNode)) {
    return parseClassDeclarationNode(parsingNode, sourceFile, typeChecker)
  }

  // Runtime Generics for `resolve` calls
  if (isContainerResolveMethodCall(parsingNode)) {
    return parseCallExpressionNode(parsingNode)
  }

  return parsingNode;

}

function isDecoratedClassConstructorInjection(node: ts.Node): node is ts.ClassDeclaration {
  if (!ts.isClassDeclaration(node) || !node.decorators) {
    return false;
  }

  // make sure it's on a decorated class
  return !!node.decorators.find(dec =>
    ts.isCallExpression(dec.expression) &&
    decoratorNameList.includes(dec.expression.expression.getText())
  )
}

function parseClassDeclarationNode(node: ts.ClassDeclaration, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker) {
  const ctor: ts.ConstructorDeclaration | undefined = node.members.find(mem => ts.isConstructorDeclaration(mem)) as any
  if (!ctor)
    return node

  const nextParams = ctor.parameters.map(cTorParam => {
    const typeRef: ts.TypeReferenceNode | undefined = cTorParam.type as any;
    if (typeRef == null)
      return cTorParam

    const tsType = typeChecker.getTypeFromTypeNode(typeRef);
    const typeName = typeRef.typeName?.getText();
    const paramName = cTorParam.name?.getText();

    if (shouldAddForwardDeclaration(tsType, typeName, paramName)) {
      createForwardDeclaration(sourceFile, typeName);
      return createParameter(cTorParam, paramName, typeName)
    }

    return cTorParam
  })

  // @ts-ignore
  ctor.parameters = ts.factory.createNodeArray(nextParams)

  return node
}

function isContainerResolveMethodCall(node: ts.Node): node is ts.CallExpression {
  if (!ts.isCallExpression(node) || !node.typeArguments?.[0] || node.arguments.length !== 0)
    return false;

  const identifier = getResolverDecorator(node.expression);

  if (identifier && identifier.getText() === resolverClassMethodName) {
    return ts.isTypeReferenceNode(node.typeArguments[0])
  }

  return false
}

function getResolverDecorator(expression: ts.LeftHandSideExpression) {
  if (ts.isIdentifier(expression))
    return expression;
  if (ts.isPropertyAccessExpression(expression) && ts.isIdentifier(expression.name))
    return expression.name;
}

function parseCallExpressionNode(node: ts.CallExpression) {
  // This is where we add runtime generics to `resolve` calls
  // with 0 parameters and a generic type argument.

  // This is all rather simple and doesn't need much explanation.
  const typeRef: ts.TypeReferenceNode = node.typeArguments?.[0] as any;
  const text = typeRef.typeName.getText();

  // @ts-ignore -- `node.arguments` is supposed to be "readonly"
  // but we _need_ to override it so we just silence the error.
  node.arguments = ts.factory.createNodeArray([ts.factory.createStringLiteral(text)])
  return node
}

function shouldAddForwardDeclaration(tsType: ts.Type, typeName: string, paramName: string) {
  return isObjectType(tsType) && isInterfaceType(tsType) && typeName && paramName;
}

function createForwardDeclaration(sourceFile: ts.SourceFile, typeName: string) {
  // @ts-ignore
  sourceFile.statements = ts.factory.createNodeArray([ts.factory.createClassDeclaration(
    undefined,
    undefined,
    ts.factory.createIdentifier(typeName),
    undefined,
    undefined,
    []
  ) as any, ...sourceFile.statements]);
}

function createParameter(cTorParam: ts.ParameterDeclaration, paramName: string, typeName: string) {
  if (cTorParam.dotDotDotToken != null) {
    throw new Error('No spread arguments in injected params.')
  }
  if (cTorParam.questionToken != null) {
    throw new Error('No optional arguments in injected params.')
  }
  return ts.factory.createParameterDeclaration(
    cTorParam.decorators,
    cTorParam.modifiers,
    undefined,
    ts.factory.createIdentifier(paramName),
    undefined,
    ts.factory.createTypeReferenceNode(
      ts.factory.createIdentifier(typeName),
      undefined
    ),
    undefined
  );
}

function isInterfaceType(objType: ts.ObjectType): objType is ts.InterfaceType {
  return hasFields(objType.objectFlags, ts.ObjectFlags.Interface);
}

function isObjectType(type: ts.Type): type is ts.ObjectType {
  return (type as any)['objectFlags'] != undefined
}

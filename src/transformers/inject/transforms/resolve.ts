import ts from "typescript";
import { resolverClassMethodNames } from "../constants";

/*
  container.resolve<ICat>()
  container.resolve<IDog>()
  container.resolve<IWolf>()
*/

export function parseResolveCallExpressionNode(node: ts.CallExpression) {
  // This is where we add runtime generics to `resolve` calls
  // with 0 parameters and a generic type argument.

  const refNode = node.typeArguments?.[0]

  if (refNode && ts.isTypeReferenceNode(refNode)) {
    const text = refNode.typeName.getText();

    const nodeArgs = ts.factory.createNodeArray([
      ts.factory.createStringLiteral(text),
    ]);

    // @ts-expect-error
    node.arguments = nodeArgs;
  }

  return node
}

function getResolverDecorator(expression: ts.LeftHandSideExpression) {
  if (ts.isIdentifier(expression))
    return expression;
  if (ts.isPropertyAccessExpression(expression) && ts.isIdentifier(expression.name))
    return expression.name;
}

export function isContainerResolveMethodCall(node: ts.Node): node is ts.CallExpression {
  if (!ts.isCallExpression(node) || !node.typeArguments?.[0] || node.arguments.length !== 0)
    return false;

  const identifier = getResolverDecorator(node.expression);

  if (identifier && resolverClassMethodNames.includes(identifier.getText())) {
    return node.typeArguments[0] && ts.isTypeReferenceNode(node.typeArguments[0])
  }

  return false
}

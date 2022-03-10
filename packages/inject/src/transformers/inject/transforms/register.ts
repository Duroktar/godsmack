import ts from "typescript";
import { registerClassMethodNames } from "../constants";

/*
  container.addSingleton<ICat>(FeralCat)
  container.addSingleton<IDog>(FeralDog)
  container.addSingleton<IWolf>(FeralWolf)
*/

export function parseRegisterCallExpressionNode(node: ts.CallExpression) {
  // Runtime generics for `register` calls

  const refNode = node.typeArguments?.[0]

  if (refNode && ts.isTypeReferenceNode(refNode)) {
    const text = refNode.typeName.getText();

    const nodeArgs = ts.factory.createNodeArray([
      ts.factory.createStringLiteral(text),
      node.arguments[0],
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

export function isContainerRegisterMethodCall(node: ts.Node): node is ts.CallExpression {

  if (!ts.isCallExpression(node) || !node.typeArguments?.[0] || node.arguments.length !== 1)
    return false;

  const identifier = getResolverDecorator(node.expression);

  if (identifier && registerClassMethodNames.includes(identifier.getText())) {
    return node.typeArguments[0] && ts.isTypeReferenceNode(node.typeArguments[0]);
  }

  return false
}

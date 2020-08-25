import ts from "typescript";
import { hasFields } from "./bitField";
import { VisitSourceFileContext } from "./VisitSourceFileContext";

/**
 * Parses a TypeScript AST node to a common NameofCallExpression or returns undefined if the current node
 * is not a nameof call expression.
 * @param parsingNode - Babel AST node to parse.
 * @param sourceFile - Containing source file.
 * @param context - Context for when visiting all the source file nodes
 */
export function parseAndTransform(parsingNode: ts.Node, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker, context: VisitSourceFileContext | undefined) {
    if (isContainerResolve(parsingNode)) {
      return parseInterpolateNode(parsingNode)
    }

    if (isConstructorInjection(parsingNode)) {
      return parseClassDeclarationNode(parsingNode, sourceFile)
    }

    if (ts.isSourceFile(parsingNode)) {
      return sourceFile
    }

    return parsingNode;

    function parseClassDeclarationNode(node: ts.ClassDeclaration, sourceFile: ts.SourceFile) {
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

        // @ts-ignore
        if (!hasFields(tsType.objectFlags, ts.ObjectFlags.Interface) || !typeName || !paramName) {
          return cTorParam
        }

        sourceFile.statements = ts.createNodeArray([ts.createClassDeclaration(
          undefined,
          undefined,
          ts.createIdentifier(typeName),
          undefined,
          undefined,
          []
        ) as any, ...sourceFile.statements])

        return ts.createParameter(
          undefined,
          cTorParam.modifiers,
          undefined,
          ts.createIdentifier(paramName),
          undefined,
          ts.createTypeReferenceNode(
            ts.createIdentifier(typeName),
            undefined
          ),
          undefined
        )
      })

      ctor.parameters = ts.createNodeArray(nextParams)

      return node
    }

    function isConstructorInjection(node: ts.Node): node is ts.ClassDeclaration {
      if (!ts.isClassDeclaration(node)) {
        return false;
      }

      const decoratorNameList = ['Injectable', 'Singleton']

      // make sure it's on a decorated class
      if (node.decorators?.find(dec =>
        ts.isCallExpression(dec.expression) &&
        decoratorNameList.includes(dec.expression.expression.getText())
      )) {
        return true
      }
      return false
  }

    function parseInterpolateNode(node: ts.CallExpression) {
      const typeRef: ts.TypeReferenceNode = node.typeArguments?.[0] as any;
      const text = typeRef.typeName.getText();
      node.arguments = ts.createNodeArray([ts.createStringLiteral(text)])
      return node
    }

    function isContainerResolve(node: ts.Node): node is ts.CallExpression {
        if (!ts.isCallExpression(node))
            return false;

        const identifier = getIdentifierToInspect(node.expression);

        if (identifier?.getText() === 'resolve') {
          if (node.typeArguments?.[0] && ts.isTypeReferenceNode(node.typeArguments[0])) {
            if (node.arguments.length > 0) {
              return false
            }
            return true
          }
        }

        return false

        function getIdentifierToInspect(expression: ts.LeftHandSideExpression) {
            if (ts.isIdentifier(expression))
                return expression;
            if (ts.isPropertyAccessExpression(expression) && ts.isIdentifier(expression.name))
                return expression.name;
        }
    }
}

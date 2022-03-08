import ts from "typescript";
import { staticDepsProp } from "../../../injector/constants";
import { hasFields } from "../bitField";
import { decoratorNameList } from "../constants";

/*
  @Singleton()
  class SomeClass {
    constructor(
      private wolf: IWolf, // <- Interfaces
      private dog: IDog,   // <- Interfaces
      private cat: ICat,   // <- Interfaces
    ) { }
  }
*/

export function isDecoratedClassConstructorInjection(node: ts.Node): node is ts.ClassDeclaration {
  if (!node || !ts.isClassDeclaration(node) || !node.decorators) {
    return false;
  }

  // make sure it's on a decorated class
  return node.decorators.some(dec =>
    ts.isCallExpression(dec.expression) &&
    decoratorNameList.includes(dec.expression.expression.getText())
  )
}

function isInterfaceType(objType: ts.ObjectType): objType is ts.InterfaceType {
  return hasFields(objType.objectFlags, ts.ObjectFlags.Interface);
}

function isObjectType(type: ts.Type): type is ts.ObjectType {
  return (type as any)['objectFlags'] != undefined
}

function insertArrayAt<T>(array: T[], index: number, arrayToInsert: T[]): T[] {
  return Array.prototype.splice.apply(array, [index, 0].concat(arrayToInsert as any) as any);
}

export function parseClassDeclarationNode(node: ts.ClassDeclaration, sourceFile: ts.SourceFile, typeChecker: ts.TypeChecker) {
  const ctor: ts.ConstructorDeclaration | undefined = node.members.find(mem => ts.isConstructorDeclaration(mem)) as any

  if (ctor) {
    const staticTypes: (string | undefined)[] = []

    ctor.parameters.forEach((cTorParam, idx) => {
      const typeRef = cTorParam.type as ts.TypeReferenceNode | undefined;
      staticTypes[idx] = typeRef?.typeName?.getText();
    })

    const depsDefnNode = ts.factory.createExpressionStatement(
      ts.factory.createBinaryExpression(
        ts.factory.createElementAccessExpression(
          ts.factory.createIdentifier(node.name?.text!),
          ts.factory.createStringLiteral(staticDepsProp)
        ),
        ts.factory.createToken(ts.SyntaxKind.EqualsToken),
        ts.factory.createArrayLiteralExpression(
          staticTypes.map(t => ts.factory.createStringLiteral(t!)),
          false
        )
      )
    );

    if (ts.isBlock(node.parent) || ts.isSourceFile(node.parent)) {

      const statements = node.parent.statements,
          _i = statements.findIndex(o => o === node),
          idx = _i === -1 ? statements.length : _i + 1

      insertArrayAt(<any>statements, idx, [depsDefnNode])
    } else {
      const name = ts.SyntaxKind[node.parent.kind];
      throw new Error(`Missing case for kind "${name}"`)
    }
  }

  return node
}

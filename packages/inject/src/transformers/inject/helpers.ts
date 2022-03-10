import ts from "typescript";

// todo: remove the use of the printer except for exceptions
const printer = ts.createPrinter({ newLine: ts.NewLineKind.LineFeed });

export function getNodeText(node: ts.Node, sourceFile: ts.SourceFile) {
    return printer.printNode(ts.EmitHint.Unspecified, node, sourceFile);
}

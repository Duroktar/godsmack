import ts from 'typescript';

export interface VisitSourceFileContext {
  interpolateExpressions: Set<ts.Node>;
}

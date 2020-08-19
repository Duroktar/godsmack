import { Connection, FindOperator, FindOperatorType } from 'typeorm';

class FindOperatorWithExtras<T> extends FindOperator<T> {
  constructor(
    type: FindOperatorType | 'ilike',
    value: FindOperator<T> | T,
    useParameter?: boolean,
    multipleParameters?: boolean,
  ) {
    super(type as any, value, useParameter, multipleParameters);
  }

  public toSql(
    connection: Connection,
    aliasPath: string,
    parameters: string[],
  ): string {
    let self = this as any

    // @ts-ignore
    if (this._type === 'ilike') {
      return `${aliasPath} ILIKE ${parameters[0]}`;
    }

    return super.toSql(connection, aliasPath, parameters);
  }
}

/**
 * Find Options Operator.
 * Example: { someField: ILike("%some string%") }
 */
export function ILike<T>(
  value: T | FindOperator<T>,
): FindOperatorWithExtras<T> {
  return new FindOperatorWithExtras('ilike', value);
}

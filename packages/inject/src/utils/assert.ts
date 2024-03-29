
export const isArray = (n: any): n is any[] => Array.isArray(n);
export const isEqual = (n: any, o: any): n is typeof o => n === o;
export const isString = (n: any): n is string => typeof n === 'string';
export const isNot = (some: any): boolean => some !== true;
export const isNumber = (n: any): n is number => typeof n === 'number';
export const isNull = (n: any): n is null => n === null;
export const isUndefined = (n: any): n is undefined => typeof n === 'undefined';
export const isNullOrUndefined = (n: any): n is null | undefined => isNull(n) || isUndefined(n);

/**
 * YOU MISSED A CASE IN THE SWITCH STATEMENT
 *
 * @param {never} n The value being switched on.
 * @returns {n is never}
 */
export function assertNever(n: never): n is never {
  return n
}

export function ASSERT<T>(val: T): Exclude<T, undefined> {
  if (val === null || val === undefined)
    throw new Error('Assertion error.')
  return val as any
}

// export function REQUIRED<T>(obj: T): Exclude<Required<T>, undefined> {
//   if (obj === null || obj === undefined || Object.values(obj).includes(undefined))
//     throw new Error('REQUIRED Assertion error.')
//   return obj as any
// }

// type NonData<D> = D extends {data:any} ? [D, 'should not extend { data: any }', never] : D;
// declare function nonData<T>(param: NonData<T>):void;

type AssertEqual<A, B> = A extends B ? true : false;

export const typeAssert = <A, B, R = AssertEqual<A, B>>(res: R) => { };


/* Sanity checks .. */

typeAssert<true, true>(true);
// @ts-expect-error
typeAssert<true, false>(true);
typeAssert<true, false>(false);

typeAssert<1, 1>(true);
// @ts-expect-error
typeAssert<1, 2>(true);
typeAssert<1, 2>(false);

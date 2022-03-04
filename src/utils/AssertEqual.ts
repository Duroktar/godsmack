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

export const ASSERT = <T>(o: T | null | undefined): T => {
  if (o === undefined || o === null)
    throw new Error(`Assertion error: ${o}`)
  return o
}

export const UNREACHABLE = (o: never) => {
  throw new Error(`Unreachable ${o}`)
}

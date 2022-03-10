export function hasFields(bf: number, ...fields: number[]) {
  const includes = (f: number) => Boolean((bf !== 0) && (~(bf >> f) & 1)) // no clue
  return fields.reduce((acc, val) => {
    return acc || includes(val)
  }, false)
}

export const once = (fn: (...args: any[]) => any) => {
  let called = false;
  return (...args: any[]) => {
    if (called) return
    called = true
    return fn(...args)
  }
}

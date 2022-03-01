
export function getDeep<T extends Record<string, any>>(
  properties: string[], obj: T
) {
  return properties.reduce((acc, val) => {
    if (acc) { acc = acc[val] }
    return acc
  }, obj)
}

export function prop<T = any>(obj: any, key: string): T {
  return obj[key]
}

/**
 * Use to determine if an object is newable.
 *
 * Example:
 *
 * ```
 * class Hello {}
 * const hello = new Hello()
 *
 * // true
 * console.log(is_newable(Hello))
 * console.log(is_newable(Boolean))
 * console.log(is_newable(String))
 * console.log(is_newable(Array))
 * console.log(is_newable(function(){}))
 * console.log(is_newable(Function))
 * console.log(is_newable(new Function))
 *
 * // false
 * console.log(is_newable(hello))
 * console.log(is_newable())
 * console.log(is_newable(undefined))
 * console.log(is_newable(null))
 * console.log(is_newable(1))
 * console.log(is_newable(new Number(1)))
 * console.log(is_newable(Array.prototype))
 * console.log(is_newable(Function.prototype))
 * console.log(is_newable(() => {}))
 * console.log(is_newable({method() {}}.method))
 * console.log(is_newable({}))
 * console.log(is_newable(false))
 * console.log(is_newable(true))
 * console.log(is_newable([]))
 * ```
 *
 * @export
 * @param {*} f anything
 * @returns true if the passed object is newable.
 */
export function is_newable(f: any) {
  try {
    Reflect.construct(String, [], f);
  } catch (e) {
    return false;
  }
  return true;
}

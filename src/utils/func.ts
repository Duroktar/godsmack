import type { IResult } from '../types'

export class Result<T, E extends Error> {
  constructor(public result: IResult<T, E>) { }

  static Value<T>(value: T): Result<T, any> {
    return new Result({
      type: 'value',
      value,
    })
  }

  static Error<E extends Error>(error: E): Result<any, E> {
    return new Result({
      type: 'error',
      error,
    })
  }

  public unwrap(): T {
    switch (this.result.type) {
      case 'value': return this.result.value
      case 'error': throw this.result.error
    }
  }

  public map<S>(f: (a: T) => S): Result<S, E> {
    switch (this.result.type) {
      case 'value':
        return new Result<S, E>({
          type: 'value',
          value: f(this.result.value),
        })
      case 'error': return new Result<S, E>(this.result)
    }
  }

  public valueOrDefault(d: T): T {
    switch (this.result.type) {
      case 'value': return this.result.value
      case 'error': return d
    }
  }
}

export function tryCatch<S, E extends Error>(
  func: () => S,
  err: (e: any) => any = (e: any) => e,
): S | E {
  try { return func() } catch (e) { return err(e) }
}

export function doTry<S, E extends Error>(func: () => S): Result<S, E> {
  try { return Result.Value(func()) } catch (e) { return Result.Error(e) }
}

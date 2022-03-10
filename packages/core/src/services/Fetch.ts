import { Singleton } from '../injector'
import { LogFactory } from './Logger'
import * as ky from 'ky-universal'
import type { Options } from 'ky'

@Singleton()
export class FetchService {
  constructor(
    private logger: LogFactory,
  ) {
    this.logger = logger.For(this)
  }

  public get(url: string, options?: Options) {
    return ky.get(url, options)
  }
  public post(url: string, options?: Options) {
    return ky.post(url, options)
  }
  public put(url: string, options?: Options) {
    return ky.put(url, options)
  }
  public patch(url: string, options?: Options) {
    return ky.patch(url, options)
  }
  public delete(url: string, options?: Options) {
    return ky.delete(url, options)
  }
}

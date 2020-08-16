import { ClientAdapter } from '../framework/ClientAdapter';
import { Injectable } from '../injector';

export type JsonResult<T> = Promise<{
  json: () => T
  text: () => string
  ok: boolean
}>

@Injectable()
export class XMLHttpClient<T extends any = any> extends ClientAdapter {
  get(req?: any, options?: any): JsonResult<T> {
    return this.__send(req, this.path, 'GET', options)
  }
  create(req?: any, params?: any, options?: any): JsonResult<T> {
    return this.__send(req, this.path, 'POST', options, params)
  }
  patch(req?: any, options?: any): JsonResult<T> {
    return this.__send(req, this.path, 'PATCH', options)
  }
  put(req?: any, options?: any): JsonResult<T> {
    return this.__send(req, this.path, 'PUT', options)
  }
  update(req?: any, options?: any): JsonResult<T> {
    return this.__send(req, this.path, 'UPDATE', options)
  }
  delete(req?: any, options?: any): JsonResult<T> {
    return this.__send(req, this.path, 'DELETE', options)
  }
  private __send = (data: any, path: string, type: string = 'GET', options?: any, extraparams?: any): JsonResult<T> => {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.withCredentials = true

      xhr.addEventListener('load', function (this: XMLHttpRequest, ev) {
        const wasSuccess = this.status == 200;
        const handle = wasSuccess ? resolve : reject;

        handle({
          json: () => JSON.parse(this.responseText),
          text: () => wasSuccess ? this.responseText : this.statusText,
          ok: wasSuccess,
        });
      });

      xhr.addEventListener('error', function (this: XMLHttpRequest, ev) {
        reject({
          json: () => { },
          text: () => this.responseText,
          ok: false,
        });
      });

      const params = new URLSearchParams()
      let payload: string | null = null

      if (type === 'GET') {
        for (let key in data) {
          params.set(key, data[key])
        }
      } else if (data !== null) {
        payload = JSON.stringify(data)
      }

      for (let key in extraparams) {
        params.set(key, data[key])
      }

      const urlParams = params.toString();
      xhr.open(type, path + (urlParams.length ? '?' + urlParams : ''));

      xhr.setRequestHeader("content-type", "application/json");

      options?.headers?.forEach(([key, value]: [string, string]) =>
        xhr.setRequestHeader(key, value)
      )

      xhr.send(payload);
    })
  }
}

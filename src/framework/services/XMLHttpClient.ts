import { ClientAdapter } from '../ClientAdapter';
import { Injectable } from '../../injector';

export type JsonResult<T> = Promise<{
  json: () => T
  text: () => string
  ok: boolean
}>

@Injectable()
export class XMLHttpClient<T extends any = any> extends ClientAdapter {
  get(req?: any): JsonResult<T> {
    // console.log('get request to:', this.path)
    return this.__send(req, this.path, 'GET')
  }
  create(req?: any): JsonResult<T> {
    // console.log('post request to:', this.path)
    return this.__send(req, this.path, 'POST')
  }
  patch(req?: any): JsonResult<T> {
    // console.log('patch request to:', this.path)
    return this.__send(req, this.path, 'PATCH')
  }
  update(req?: any): JsonResult<T> {
    // console.log('update request to:', this.path)
    return this.__send(req, this.path, 'UPDATE')
  }
  delete(req?: any): JsonResult<T> {
    // console.log('delete request to:', this.path)
    return this.__send(req, this.path, 'DELETE')
  }
  private __send = (data: any, path: string, type: string = 'GET', options?: any): JsonResult<T> => {
    const xhr = new XMLHttpRequest();
    return new Promise((resolve, reject) => {
      xhr.withCredentials = true
      options?.headers?.forEach(([key, value]: any) => {
        xhr.setRequestHeader(key, value)
      })
      xhr.addEventListener('load', function (this: any, ev) {
        resolve({
          json: () => JSON.parse(this.responseText),
          text: () => this.responseText,
          ok: true,
        });
      });
      xhr.addEventListener('error', function (this: any, ev) {
        reject({
          json: () => { },
          text: () => this.responseText,
          ok: false,
        });
      });
      if (type === 'GET') {
        let leader = '?'
        let params: any = []

        for (let key in data) {
          params.push(leader)
          params.push(`${key}=${data[key]}`);
          leader = '&'
        }
        xhr.open(type, path + params.join(''));
      } else {
        xhr.open(type, path);
      }
      xhr.send(data && JSON.stringify(data));
    })
  }
}

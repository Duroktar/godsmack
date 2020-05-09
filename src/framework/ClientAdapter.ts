import { IClientAdapter } from '../interfaces/IClientAdapter';
import { IController } from '../interfaces';
import { Injectable } from '../injector';

@Injectable()
export class ClientAdapter implements IClientAdapter<any> {
  public path: string = '/'
  For(type: any): Required<IController<any>> {
    const rv = Object.create(this)
    rv.path = this.path + type
    return rv
  }
  get(req: any): any {
    throw new Error('Method not implemented.');
  }
  create(req: any): any {
    throw new Error('Method not implemented.');
  }
  patch(req: any): any {
    throw new Error('Method not implemented.');
  }
  update(req: any): any {
    throw new Error('Method not implemented.');
  }
  delete(req: any): any {
    throw new Error('Method not implemented.');
  }
}

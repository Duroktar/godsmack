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
  signIn(req: any): any {
    throw new Error('Method not implemented.');
  }
  post(req: any): any {
    throw new Error('Method not implemented.');
  }
  patch(req: any): any {
    throw new Error('Method not implemented.');
  }
  signOut(req: any): any {
    throw new Error('Method not implemented.');
  }
}

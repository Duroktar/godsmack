import { Application } from './Application';
import { ClientAdapter } from './ClientAdapter';
import { HttpServerProvider } from './HttpServer';
import { Logger } from './services';
import { Injectable } from '../injector';
import { transpile } from '../utils';
import type { IClient } from '../interfaces';

@Injectable()
export class Client implements IClient {
  constructor(
    public logger: Logger,
    public server: HttpServerProvider,
  ) {
    this.logger = logger.For(this)
  }
  applyMiddleware(app: Application<any>, endpoint = '/__client.js'): this {
    this.server.use(endpoint, (req, res) => {
      const client = app.container
        .resolve<ClientAdapter>(ClientAdapter)

      const base = ClientAdapter.toString();
      const src = client.constructor.toString();

      const result = transpile(`
      const GodsmackClient = (() => {
        ${base}\n
        var ClientAdapter_1 = { ClientAdapter }
        return ${src}
      })()`)

      res.type('application/javascipt')
      res.send(result)
    })
    this.logger.info('Serving JS API from', endpoint)
    return this
  }
}

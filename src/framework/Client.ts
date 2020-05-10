import { ClientAdapter } from './ClientAdapter';
import { HttpServerProvider } from './HttpServer';
import { Injectable } from '../injector';
import { Logger } from './services';
import { transpile } from '../utils';
import type { IApplication, IClient } from '../interfaces';

@Injectable()
export class JavascriptClient implements IClient {
  constructor(
    public logger: Logger,
    public server: HttpServerProvider,
  ) {
    this.logger = logger.For(this)
  }
  applyMiddleware(app: IApplication<any>, endpoint = '/__client.js') {
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
    this.logger.info('Serving API Client from', endpoint)
    return this
  }
}

import { ClientAdapter } from './ClientAdapter';
import { HttpServerProvider } from './HttpServer';
import { Injectable } from '../injector';
import { Logger } from '../services';
import { transpile } from '../utils';
import type { IApplication, IClient } from '../interfaces';
import { SettingsService } from './Settings';
import { IApplicationSettings } from '../interfaces/IApplicationSettings';

@Injectable()
export class JavascriptClient implements IClient {
  private settings: IApplicationSettings['client']
  constructor(
    public logger: Logger,
    public server: HttpServerProvider,
    public configFactory: SettingsService,
  ) {
    this.logger = logger.For(this)
    this.settings = configFactory.get('client')
  }
  applyMiddleware(app: IApplication<any>) {
    this.server.use(this.settings.endpoint, (req, res) => {
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
    this.logger.info('Serving API Client from', this.settings.endpoint)
    return this
  }
}

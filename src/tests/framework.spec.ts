import { ApplicationBuilder, ApplicationConfigurationService, ApplicationCreationService } from '../framework';
import { staticTestProps } from './staticTestProps';
import { IApplication, IConfigurationApplication } from '../interfaces';
import { ExpressServer } from '../services/ExpressServer';

function ConfigureServices(c: any) { return c }

function configureFunction<T>(app: IConfigurationApplication<T>) {
  const server = app.container.resolve(ExpressServer)
  server.get('/test', (req: any, res: any) => res.send('@@@'))
}

let app: IApplication = ApplicationBuilder.Create({
  ConfigureServices,
  ConfigureServer: app => app.addExpressServer(),
})

app.configure(configureFunction)

describe('Application Class', () => {
  const expect = staticTestProps.expect

  it('works godammit', () => {
    expect(!!app.container.resolve(ExpressServer)).toEqual(true)
  })

  it('creates godammit', () => {
    const service = app.container.resolve(ApplicationCreationService)
    expect(!!service).toEqual(true)
    expect(service.ConfigureServices).toEqual(ConfigureServices)
  })

  it('configures godammit', () => {
    const service = app.container.resolve(ApplicationConfigurationService)
    expect(!!service).toEqual(true)
    expect(service.configure).toEqual(configureFunction)
  })
})

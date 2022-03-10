import { ApplicationBuilder, ApplicationConfigurationService, ApplicationCreationService } from '../index';
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

  it('express server resolves', () => {
    expect(app.container.resolve(ExpressServer))
      .toBeDefined()
  })

  it('creation system works', () => {
    const service = app.container.resolve(ApplicationCreationService)

    expect(service).toBeDefined()
    expect(service.ConfigureServices).toBe(ConfigureServices)
  })

  it('configuration system works', () => {
    const service = app.container.resolve(ApplicationConfigurationService)

    expect(service).toBeDefined()
    expect(service.configure).toBe(configureFunction)
  })
})

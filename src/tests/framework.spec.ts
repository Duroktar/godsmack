import { ApplicationBuilder, ExpressServer, ApplicationConfigurationService, ApplicationCreationService } from '../framework';
import { staticTestProps } from './staticTestProps';
import { IApplication } from '../interfaces';

function ConfigureServices(c: any) { return c }

function configureFunction(app: IApplication) {
  const server = app.container.resolve(ExpressServer)
  server.get('/test', (req, res) => res.send('@@@'))
}

let app: IApplication = ApplicationBuilder.Create({
  ConfigureServices,
  ConfigureServer: app => app.addExpressServer(),
}).configure(configureFunction)

describe('Application Class', () => {
  const expect = staticTestProps.expect

  it('works godammit', () => {
    expect(!!app.container.resolve(ExpressServer)).to.equal(true)
  })

  it('creates godammit', () => {
    const service = app.container.resolve(ApplicationCreationService)
    expect(!!service).to.equal(true)
    expect(service.ConfigureServices).to.equal(ConfigureServices)
  })

  it('configures godammit', () => {
    const service = app.container.resolve(ApplicationConfigurationService)
    expect(!!service).to.equal(true)
    expect(service.configure).to.equal(configureFunction)
  })
})

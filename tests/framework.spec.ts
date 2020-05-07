import { Application } from "../src";
import { staticTestProps } from './staticTestProps';
import { ExpressServer } from '../src/framework';

describe('Application Class', () => {
    const expect = staticTestProps.expect

    const app = Application.Create({
        ConfigureServer: app => app.addExpressServer(),
    })

    app.configure(app => {
        const server = app.container.resolve(ExpressServer)
        server.get('/test', (req, res) => res.send('@@@'))
    })

    before(() => {
        app.main()
    })

    it('works godammit', () => {
        expect(!!app.container.resolve(ExpressServer)).to.equal(true)
    })
})

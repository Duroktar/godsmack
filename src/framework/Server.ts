import createRouter from 'express/lib/router'
import express from 'express'
import type { Application, IApplicationService } from './Application'
import { Logger } from './services/Logger'

export class HttpServerProvider<App extends Application<any> = any> {
    public readonly __server: any = { get: () => { }, listen: () => { } }
    public port = 3000
    public logger: Logger
    constructor(public readonly app: App) {
        this.logger = app.appContainer.resolve(Logger).For(this)
    }
    public get(path: createRouter.PathArgument, ...handlers: createRouter.HandlerArgument[]) {
        this.__server.get(path, ...handlers)
    }
    public post(path: createRouter.PathArgument, ...handlers: createRouter.HandlerArgument[]) {
        this.__server.post(path, ...handlers)
    }
    public registerServices(...services: IApplicationService[]): this {
        throw new Error('Method not implemented!')
    }
    public listen() { this.__server.listen(this.port, this.onServerStarted) }
    public onServerStarted = () => { }
    public use(mw: any) {
        this.__server.use(mw)
        return this
    }
}

export class ExpressServer extends HttpServerProvider {
    public readonly __server: express.Server = express()
    public registerServices(...services: IApplicationService[]): this {
        services.forEach((service) => service(this.app as any, this as any))
        return this
    }

    public onServerStarted = () => {
        this.get('/health', (req: any, res: any) => {
            res.send({ 'ServerId': ExpressServer.name, 'Status': 'OK' })
        })
        this.logger.log(`Web Service listening on port ${this.port}.`)
    }
}

export class NullServer extends HttpServerProvider {
    public readonly __server = { get: () => { }, listen: () => { } } as any
    public registerServices(...services: IApplicationService[]): this { return this }
}

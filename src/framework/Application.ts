import { Container, InferContainerT } from '../injector';
import { HttpServerProvider, ExpressServer, NullServer } from './Server';
import { InMemoryDatabase, DatabaseProvider, NullDatabase } from './Database';
import { CliAppProvider, NullCliApp } from './CommandLine';
import { StartupProvider } from './Startup';

type ApplicationCreateProps<T> = {
    ConfigureServices: (container: Container<EmptyType>) => T;
    ConfigureServer?: <T>(app: Application<T>) => HttpServerProvider;
    ConfigureDatabase?: <T>(app: Application<T>) => DatabaseProvider;
    ConfigureCliApp?: <T>(app: Application<T>) => CliAppProvider;
};

type MergeDefaultProviders<ApplicationContainer> = Container<Exclude<
    | InferContainerT<ApplicationContainer>
    | HttpServerProvider
    | DatabaseProvider
    | CliAppProvider
    | StartupProvider
    , EmptyType>>

export type IApplicationService = (app: Application<any>, server: HttpServerProvider) => void

interface IApplicationServiceHooks {
    create(): void
    configure(): void
    exit(): void
}

export class Application<AppContainer> {

    constructor(public readonly container: AppContainer) { }

    static Create<T>({
        ConfigureServer = app => new NullServer(app),
        ConfigureDatabase = app => new NullDatabase(app),
        ConfigureCliApp = app => new NullCliApp(app),
        ConfigureServices,
    }: ApplicationCreateProps<T>) {
        const application = new Application(new Container())
        application.__hooks.create = () => {
            ConfigureServices(application.container)
            application.addDatabase(ConfigureDatabase(application));
            application.addServer(ConfigureServer(application));
            application.addCliApp(ConfigureCliApp(application));
        }
        application.container.addSingletonInstance(Application, application)
        return application as Application<any> as Application<MergeDefaultProviders<T>>
    }

    /* Public API */
    public main = (argv?: string[]) => {
        this.registerCallbacks()
        this.initializeApplication()
        return this
    }

    public configure = (cb: (app: this) => void) => {
        this.__hooks.configure = () => cb(this)
        return this
    }

    public registerStartupProvider = (provider: Type<StartupProvider>) => {
        this.__hooks.configure = () => this.appContainer
            .addSingleton(StartupProvider, provider)
            .resolve(StartupProvider)
            .configure(this)
        return this
    }

    public stop = () => {
        this.destroyApplication()
    }

    public addDatabase = (database: DatabaseProvider) => {
        this.__database = database
        this.appContainer.addSingletonInstance(DatabaseProvider, database)
    }

    public addServer = (server: HttpServerProvider) => {
        this.__server = server
        this.appContainer.addSingletonInstance(HttpServerProvider, server)
    }

    public addCliApp = (cliApp: CliAppProvider) => {
        this.__cliApp = cliApp
        this.appContainer.addSingletonInstance(CliAppProvider, cliApp)
    }

    public serverStartListening() {
        this.appContainer.resolve(HttpServerProvider).listen();
    }

    public cliAppRun() {
        this.appContainer.resolve(CliAppProvider).run();
    }

    public get appContainer(): MergeDefaultProviders<AppContainer> {
        return this.container as any
    }

    /* Private API */

    private __database!: DatabaseProvider
    private __server!: HttpServerProvider
    private __cliApp!: CliAppProvider

    private __hooks: IApplicationServiceHooks = {
        create: () => null,
        configure: () => null,
        exit: () => null,
    }

    private initializeApplication() {
        this.__hooks.create()
        this.__hooks.configure()
    }
    private destroyApplication() {
        this.__hooks.exit()
    }
    private registerCallbacks() {
        // process.addListener('beforeExit', this.container.onExit)
    }
}

export class TestApplication<T> extends Application<T> {
    static Test(suite: StaticTestProps) {

        class TestDoDo {
            url: string = '/test'
            dodo: string = 'dodo'
            setDodo = (v: string) => { this.dodo = v }
            getDodo() { return { dodo: this.dodo } }
            callback = (req: any, res: any) => res.send(this.getDodo())
        }

        class BoogerWhoop {
            url: string = '/booger'
            dodo: string = 'BoogerWhoop'
            setDodo = (v: string) => { this.dodo = v }
            getDodo() { return { dodo: this.dodo } }
            callback = (req: any, res: any) => res.send(this.getDodo())
        }

        class HammerWho {
            url: string = '/booger'
            dodo: string = 'HammerWho'
            setDodo = (v: string) => { this.dodo = v }
            getDodo() { return { dodo: this.dodo } }
            callback = (req: any, res: any) => res.send(this.getDodo())
        }

        type DefaultAppContainer = MergeDefaultProviders<Container<TestDoDo | BoogerWhoop>>;

        type ITestApplication = Application<DefaultAppContainer>

        const services: IApplicationService[] = [
            (app: ITestApplication, server: HttpServerProvider) => {
                const service = app.container.resolve(TestDoDo)
                server.get(service.url, service.callback)
            },
            (app: ITestApplication, server: HttpServerProvider) => {
                const booger = app.container.resolve(BoogerWhoop)
                server.get(booger.url, booger.callback)
            },
            (app: ITestApplication, server: HttpServerProvider) => {
                const db = app.container.resolve(DatabaseProvider)

                server.get('/users/:id', (req: any, res: any) => {
                    const id = parseInt(req.params.id)
                    if (Number.isNaN(id)) {
                        res.send('Invalid query! id: "' + req.params.id + '" is ' + id)
                    }
                    res.send(db.query(
                        `"select": "*", "from": "users", "where": ["id", "=", ${id}], "take": 1`
                    ))
                })

                server.get('/users/:id/hat', (req: any, res: any) => {
                    const id = parseInt(req.params.id)
                    if (Number.isNaN(id)) {
                        res.send('Invalid query! id: "' + req.params.id + '" is ' + id)
                    }
                    const query = `"select": "*", "from": "userHats", "where": ["userId", "=", ${id}]`;
                    const userHat = db.query<any[]>(query)[0];
                    res.send(db.query(`"select": ["type"], "from": "hats", "where": ["id", "=", ${userHat.id}]`));
                })
            }
        ]

        const app = Application.Create({
            ConfigureServices: container => container
                .addSingleton(TestDoDo, TestDoDo)
                .addSingleton(BoogerWhoop, HammerWho),
            ConfigureServer: app => new ExpressServer(app)
                .registerServices(...services),
            ConfigureDatabase: app => new InMemoryDatabase(app)
                .createDatabase('users')
                .createDatabase('hats')
                .createDatabase('userHats')
        })

        app.configure(app => {
            app.container.resolve(TestDoDo).setDodo('poopoo dodo')

            const db = app.container.resolve(DatabaseProvider)
            db.insert('users', { id: 1, name: 'Admin' })
            db.insert('users', { id: 2, name: 'Test User' })

            db.insert('hats', { id: 1, type: 'Fedora' })

            db.insert('userHats', { id: 1, userId: 1, hatId: 1 })
        })

        app.main(process.argv)
    }
}

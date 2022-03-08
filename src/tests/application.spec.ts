import { ApplicationBuilder, DatabaseProvider, HttpServerProvider } from '../framework'
import { Container } from '../injector'
import { HttpServiceSetup, IApplicationContainer, MergeDefaultProviders } from '../interfaces'
import { InMemoryDatabase } from "../services/MemoryDB"
import { InferContainerTypes } from '../types'

describe('The Application should work', () => {
  interface IBaseClass {
    url: string
    dodo: string
    setDodo(v: string): void
    getDodo(): { dodo: string }
    callback(req: any, res: any): void
  }

  class TestDoDo implements IBaseClass {
    url: string = '/test'
    dodo: string = 'dodo'
    setDodo = (v: string) => { this.dodo = v }
    getDodo() { return { dodo: this.dodo } }
    callback = (req: any, res: any) => res.send(this.getDodo())
  }

  class BoogerWhoop implements IBaseClass {
    url: string = '/booger'
    dodo: string = 'BoogerWhoop'
    setDodo = (v: string) => { this.dodo = v }
    getDodo() { return { dodo: this.dodo } }
    callback = (req: any, res: any) => res.send(this.getDodo())
  }

  class HammerWho implements IBaseClass {
    url: string = '/booger'
    dodo: string = 'HammerWho'
    setDodo = (v: string) => { this.dodo = v }
    getDodo() { return { dodo: this.dodo } }
    callback = (req: any, res: any) => res.send(this.getDodo())
  }

  type DefaultAppContainer = MergeDefaultProviders<Container<TestDoDo | BoogerWhoop>>;

  const services = <T extends IApplicationContainer<DefaultAppContainer>>(app: T): HttpServiceSetup[] => [
    (server: HttpServerProvider) => {
      const service = app.container.resolve(TestDoDo)
      server.get(service.url, service.callback)
    },
    ({ app, engine: server }: HttpServerProvider) => {
      const booger = app.container.resolve(BoogerWhoop)
      server.get(booger.url, booger.callback)
    },
    ({ app, engine: server }: HttpServerProvider) => {
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
        const userHat = db.query(query)[0];
        res.send(db.query(`"select": ["type"], "from": "hats", "where": ["id", "=", ${userHat.id}]`));
      })
    }
  ]

  const app = ApplicationBuilder.Create({
    ConfigureDatabase: app =>
      new InMemoryDatabase(app)
        .createDatabase('users')
        .createDatabase('hats')
        .createDatabase('userHats'),
    ConfigureServer: app => app
      .addExpressServer()
      .registerServices(...services(app)),
    ConfigureServices: container => container
      .addSingleton(TestDoDo, TestDoDo)
      .addSingleton<IBaseClass>(BoogerWhoop)
      .addSingleton(BoogerWhoop, HammerWho)
  })

  class NoNo { }

  type AppTypes = InferContainerTypes<(typeof app)['container']>;

  app.configure(app => {
    app.container.resolve(TestDoDo).setDodo('poopoo dodo')
    app.container.resolve(TestDoDo).setDodo('poopoo dodo')
    app.container.resolve(TestDoDo).setDodo('poopoo dodo')
    app.container.resolve(BoogerWhoop).setDodo('boo dodo')

    // @ts-expect-error
    app.container.resolve(NoNo)

    const db = app.container.resolve<DatabaseProvider>()
    db.insert('users', { id: 1, name: 'Admin' })
    db.insert('users', { id: 2, name: 'Test User' })

    db.insert('hats', { id: 1, type: 'Fedora' })

    db.insert('userHats', { id: 1, userId: 1, hatId: 1 })
  })

  it('seems to work', (done) => {
    app.main(process.argv).then(() => {
      const dep = app.container
        .resolve<IBaseClass>()

      const base = dep.getDodo()

      expect(base.dodo)
        .toEqual('BoogerWhoop')

      done()
    })
  })
})

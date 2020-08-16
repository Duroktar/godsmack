import { Application } from './Application';
import { ApplicationBuilder } from './ApplicationBuilder';
import { Container } from './Container';
import { DatabaseProvider } from './Database';
import { InMemoryDatabase } from "../services/MemoryDB";
import { HttpServerProvider } from './HttpServer';
import type { StaticTestProps, InferApplicationTypes } from '../types';
import type { IApplication, IApplicationService, MergeDefaultProviders } from '../interfaces';

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

    type ITestApplication = IApplication<DefaultAppContainer>

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
          const userHat = db.query(query)[0];
          res.send(db.query(`"select": ["type"], "from": "hats", "where": ["id", "=", ${userHat.id}]`));
        })
      }
    ]

    const app = ApplicationBuilder.Create({
      ConfigureDatabase: app => app.container
        .resolve(InMemoryDatabase)
        .createDatabase('users')
        .createDatabase('hats')
        .createDatabase('userHats'),
      ConfigureServer: app => app
        .addExpressServer()
        .registerServices(...services),
      ConfigureServices: container => container
        .addSingleton(TestDoDo, TestDoDo)
        .addSingleton(BoogerWhoop, HammerWho),
    })

    class NoNo { }

    type AppTypes = InferApplicationTypes<typeof app>;

    app.configure(app => {
      app.container.resolve(TestDoDo).setDodo('poopoo dodo')
      app.container.resolve(BoogerWhoop).setDodo('boo dodo')

      // @ts-expect-error
      app.container.resolve(NoNo)

      const db = app.container.resolve(InMemoryDatabase)
      db.insert('users', { id: 1, name: 'Admin' })
      db.insert('users', { id: 2, name: 'Test User' })

      db.insert('hats', { id: 1, type: 'Fedora' })

      db.insert('userHats', { id: 1, userId: 1, hatId: 1 })
    })

    app.main(process.argv)
  }
}

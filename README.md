# Godsmack (AIC)

Application framework for dummies

## Usage

### Step 1

- Install `@trabpukcip/godsmack` package

```sh
yarn global add @trabpukcip/godsmack
```

### Step 2

- Initialize a new project

```sh
~/ $ mkdir new-project
~/ $ cd new-project
~/new-project $ gs-init
✔ Project Name · new-project
✔ Project Version · 0.0.1
✔ Project License · MIT
✔ Add Docker Support? (y/N) · false
✔ Add Docker Database Support? (y/N) · true
✔ Add Postgres Database Support? (y/N) · true
✔ Base directory for server code? · server
✔ Generating Directories
✔ Installing Dependencies
~/new-project $
```

### Step 3

- Configure Application (Example shown)

> <server_root>/app.ts

```ts
import {
  ApplicationBuilder,
  DatabaseProvider,
  HttpServerProvider,
  LogFactory,
  TaskService,
 } from "@trabpukcip/godsmack";

// not shown
import { ErrorMiddleware } from "./middleware/error";
// not shown
import { defaultSettings } from './settings';

// -- Application Specific Setup
export default ApplicationBuilder.Create({
  ConfigureServices: container => container
    .addSingleton(LogFactory)
  ,
  ConfigureDatabase: app => app
    .addTypeORMPostgresDB()
  ,
  ConfigureServer: app => app
    .addExpressServer()
    .useHelmet()
    .useHealthCheck()
    .parseCookies()
    .parseJsonBody()
    .serveStaticFiles()
    .useJwtExpress()
    .useSpaFallback()
    .useErrorHandler(ErrorMiddleware)
  ,
}).configure(app => app
  .useSettings(defaultSettings)
  .addCronTriggers()
  .addSwaggerDocs()
  .addTypeGraphQl()
  .addHotSwapping()
  .usePrettyConsoleErrors()

  // -- Business Logic
  .onAppStarted(async () => {

    const database = app.container
      .resolve(DatabaseProvider)

    const server = app.container
      .resolve(HttpServerProvider)

    const tasks = app.container
      .resolve(TaskService)

    await database.connect()
    await database.test()
    await database.syncTables()

    await tasks.startAll()

    await server.listen()
  })
)

```

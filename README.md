# Godsmack

Application framework for dummies

- [Usage](#usage)
  * [Step1 (Install)](#step-1)
  * [Step2 (Initialize)](#step-2)
  * [Step3 (Configure)](#step-3)
- [Example Services](#example-services)
  * [Controllers](#controllers)
  * [Tasks](#tasks)
- [License](#license)

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

> File: <server_root>/app.ts

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

## Example Services

### Controllers

> File: <server_root>/controllers/Reaction.ts

```ts

import { Body, http, Singleton, LogFactory } from '@trabpukcip/godsmack';
import {
  Controller,
  Post,
  Request,
  Response,
  Route,
  Security,
  SuccessResponse,
  Tags,
} from 'tsoa';
import { GetTypeIdModel } from '../DTOs/request.dto';
import { ReactionsService } from '../services/reactions';
import { SecureRequest } from '../types';
const { StatusCode } = http;

@Route('reaction')
@Tags('reaction')
@Singleton()
export class ReactionController extends Controller {
  constructor(
    private logger: LogFactory,
    private reactions: ReactionsService,
  ) {
    super()
    this.logger = logger.For(this)
  }

  /**
   * Register a Users reaction to something (WIP)
   *
   * @description UserReaction endpoint.
   * @summary Create a new User Reaction
   *
   * @param {string} userId
   * @param {GetTypeIdModel} requestBody
   *
   */
  @Security('jwt')
  @Security('apiKey')
  @Response(StatusCode.UNPROCESSABLE_ENTITY, "Validation Failed")
  @SuccessResponse(StatusCode.CREATED, "Created")
  @Post('/')
  public async createReaction(
    @Body() requestBody: GetTypeIdModel,
    @Request() { req }: SecureRequest,
  ): Promise<void> {
    this.setStatus(201)

    await this.reactions.createUserReaction(
      req.user.userId,
      requestBody.typeId,
    )
  }
}

```

> File: <server_root>/app.ts

```ts
import {
  ApplicationBuilder,
  HttpServerProvider,
  LogFactory,
 } from "@trabpukcip/godsmack";

export default ApplicationBuilder.Create({
  ConfigureServices: container => container
    .addSingleton(LogFactory)
  ,
  ConfigureServer: app => app
    .addExpressServer()
    .parseJsonBody()
  ,
}).configure(app => app
  .addSwaggerDocs()             // <- This right here
  .onAppStarted(async () => {

    const server = app.container
      .resolve(HttpServerProvider)

    await server.listen()
  })
)

```

### Tasks

> File: <server_root>/jobs/VacuumDB.ts

```ts

import {
  ICronTrigger,
  DatabaseProvider,
  Singleton,
  LogFactory,
} from '@trabpukcip/godsmack'

@Singleton()
export class VacuumDatabaseJob implements ICronTrigger {
  constructor(
    public logger: LogFactory,
    public db: DatabaseProvider,
  ) {
    this.logger = logger.For(this)
  }

  public onTick = async (): Promise<void> => {
    this.logger.info('Vacuuming Database.')
    await this.db.query('VACUUM;')
    this.logger.info('Vacuum Complete.')
  }

  public readonly cronTime: string = "0 22 * * * *"
}

```

> File: <server_root>/app.ts

```ts
import {
  ApplicationBuilder,
  HttpServerProvider,
  LogFactory,
 } from "@trabpukcip/godsmack";

export default ApplicationBuilder.Create({
  ConfigureServices: container => container
    .addSingleton(LogFactory)
  ,
  ConfigureServer: app => app
    .addExpressServer()
  ,
}).configure(app => app
  .addCronTriggers()             // <- This right here
  .onAppStarted(async () => {

    const server = app.container
      .resolve(HttpServerProvider)

    const tasks = app.container
      .resolve(TaskService)

    await tasks.startAll()

    await server.listen()
  })
)

```

# License

- MIT

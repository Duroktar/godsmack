import { Application, Container } from '../../index';
import { DirectoryBuilder } from './DirectoryBuilder';
import { DirectoryVisitor, RunCtx } from './DirectoryVisitor';
import { DirectoryWalker } from './DirectoryWalker';
import { createDirSpec, createFileSpec } from './factories';
import { IDirectoryVisitor } from './interfaces';
import { TemplateSystem } from './TemplateSystem';

describe('templating system', () => {
  it('works', () => {
    const visitor = new DirectoryVisitor()
    const walker = new DirectoryWalker(visitor)
    expect(walker).toBeDefined()

    // -- Step 1: Get system
    const system = new TemplateSystem(walker)
    expect(system).toBeDefined()

    // -- Step 3: Build Spec
    const spec = new DirectoryBuilder()
      .mkDir('client')
      .mkDir('server', dir => dir
          .touch('app.ts')
          .touch('ioc.ts')
          .touch('main.ts')
          .touch('settings.ts'))
      .touch('.editorconfig')
      .touch('.gitignore')
      .touch('tsconfig.json')
      .buildSpec();

    expect(spec).toBeDefined()
  })
})

describe('template integration tests', () => {
  it('integrates with an Application', () => {
    const mockFunctions = {
      vda: jest.fn(),
      vdb: jest.fn(),
      vf: jest.fn(),
    }

    class MockDirectoryVisitor implements IDirectoryVisitor {
      public visitDirectoryAfter = mockFunctions.vda
      public visitDirectoryBefore = mockFunctions.vdb
      public visitFile = mockFunctions.vf
    }

    const container = new Container()
      .addSingleton(DirectoryVisitor, MockDirectoryVisitor)
      .addSingleton(DirectoryWalker)

    type AppContainer = typeof container;

    const app = new Application<AppContainer>(container)

    const visitor = app.container.resolve(DirectoryVisitor)
    expect(visitor).toBeDefined()

    const spec = new DirectoryBuilder()
      .mkDir('client')
      .touch('.editorconfig')
      .buildSpec();
    expect(spec).toBeDefined()

    const walker = app.container.resolve(DirectoryWalker)
    expect(walker).toBeDefined()

    const expectedFileSpec = createFileSpec('.editorconfig');
    const expectedDirSpec = createDirSpec('client');

    const ctx: RunCtx = { steps: [] }

    walker.walkDirSpecRecursive(spec, ctx)

    expect(mockFunctions.vdb).toHaveBeenCalledTimes(1)
    expect(mockFunctions.vdb).toHaveBeenLastCalledWith(expectedDirSpec, ctx)
    expect(mockFunctions.vda).toHaveBeenCalledTimes(1)
    expect(mockFunctions.vda).toHaveBeenLastCalledWith(expectedDirSpec, ctx)
    expect(mockFunctions.vf).toHaveBeenCalledTimes(1)
    expect(mockFunctions.vf).toHaveBeenLastCalledWith(expectedFileSpec, ctx)
  })
})

import { Application, Container } from '../../index';
import { DirectoryBuilder } from './DirectoryBuilder';
import { DirectoryVisitor, RunCtx } from './DirectoryVisitor';
import { DirectoryWalker } from './DirectoryWalker';
import { createDirSpec, createFileSpec } from './factories';
import { IDirectoryVisitor } from './interfaces';
import { TemplateSystem } from './TemplateSystem';

describe('templating system', () => {
  it('basic usage', () => {
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

  it('usage w/ operators', () => {
    const visitor = new DirectoryVisitor()
    const walker = new DirectoryWalker(visitor)
    expect(walker).toBeDefined()

    // -- Step 1: Get system
    const system = new TemplateSystem(walker)
    expect(system).toBeDefined()

    // -- Step 3: Build Spec
    const spec = new DirectoryBuilder()
      .touch('present-when--file').when(true)
      .touch('missing-when--file').when(false)

      .if(true).touch('present-if--file')
      .if(false).touch('missing-if--file')

      .mkDir('present-when--dir').when(true)
      .mkDir('missing-when--dir').when(false)

      .if(true).mkDir('present-if--dir')
      .if(false).mkDir('missing-if--dir')

      .mkDir('present-when--subdir', dir => dir
        // files
        .touch('present--subdir-file')
        .touch('present-when--subdir-file').when(true)
        .if(true).touch('present-if--subdir-file')

        .touch('missing-when--subdir-file').when(false)
        .if(false).touch('missing-if--subdir-file')

        // folders
        .mkDir('present--subdir-dir')
        .mkDir('present-when--subdir-dir').when(true)
        .if(true).mkDir('present-if--subdir-dir')

        .mkDir('missing-when--subdir-dir').when(false)
        .if(false).mkDir('missing-if--subdir-dir')
      ).when(true)

      .if(true).mkDir('present-if--subdir', dir => dir
        // files
        .touch('present--subdir-file')
        .touch('present-when--subdir-file').when(true)
        .if(true).touch('present-if--subdir-file')

        .touch('missing-when--subdir-file').when(false)
        .if(false).touch('missing-if--subdir-file')

        // folders
        .mkDir('present--subdir-dir')
        .mkDir('present-when--subdir-dir').when(true)
        .if(true).mkDir('present-if--subdir-dir')

        .mkDir('missing-when--subdir-dir').when(false)
        .if(false).mkDir('missing-if--subdir-dir')
      )

      .mkDir('missing-when--subdir', dir => dir
        .touch('missing-when--subdir-file')
        .mkDir('missing-when--subdir-dir')
      ).when(false)

      .if(false).mkDir('missing-if--subdir', dir => dir
        .touch('missing-if--subdir-file')
        .mkDir('missing-if--subdir-dir')
      )

      .buildSpec();

    expect(spec).toBeDefined()

    expect(spec.files.map(o => o.name))
      .toEqual([
        'present-when--file',
        'present-if--file',
      ])

    expect(spec.folders.map(o => o.name))
      .toEqual([
        'present-when--dir',
        'present-if--dir',
        'present-when--subdir',
        'present-if--subdir',
      ])

    const presentWhenSubdir = spec.folders.find(o => o.name === 'present-when--subdir')!
    expect(presentWhenSubdir).toBeDefined()

    expect(presentWhenSubdir.files.map(o => o.name))
      .toEqual([
        'present--subdir-file',
        'present-when--subdir-file',
        'present-if--subdir-file',
      ])

    expect(presentWhenSubdir.folders.map(o => o.name))
      .toEqual([
        'present--subdir-dir',
        'present-when--subdir-dir',
        'present-if--subdir-dir',
      ])

    const presentIfSubdir = spec.folders.find(o => o.name === 'present-if--subdir')!
    expect(presentIfSubdir).toBeDefined()

    expect(presentIfSubdir.files.map(o => o.name))
      .toEqual([
        'present--subdir-file',
        'present-when--subdir-file',
        'present-if--subdir-file',
      ])

    expect(presentIfSubdir.folders.map(o => o.name))
      .toEqual([
        'present--subdir-dir',
        'present-when--subdir-dir',
        'present-if--subdir-dir',
      ])
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

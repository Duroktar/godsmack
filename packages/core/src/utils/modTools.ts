import chokidar from 'chokidar'
import type { IContainer } from '../injector'
import type { Type } from '../types'
import { getTsConfigFile } from './getTsConfigFile'

let __lookup: Map<string, NodeModule> = new Map()

export function enableHotSwapping(container: IContainer<any>) {
  __updateIndex()

  const fileNames = getTsConfigFile(process.cwd())
    .fileNames
    .filter(fn => !fn.includes('node_modules') && !fn.includes('app.ts'));

  // console.log(`Watching files:\n${fileNames.join('\n')}`)
  const watcher = chokidar.watch(fileNames, {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
  });

  // console.log(`Watching files:\n${JSON.stringify(Object.getOwnPropertyNames(watcher.getWatched()))}`)

  const injector = container.getInjector()

  console.log('[UseModTools]: using mod tools.')
  watcher.on('change', (path, stats) => {
    if (require.cache[path]) {
      delete require.cache[path]

      const reloaded = require(path)

      const moduleExports = Object.entries<Type<any>>(reloaded)

      for (let [_, target] of moduleExports) {
        if (target.constructor.name === 'Application') {
          continue
        }
        injector.reloadDependency(target)
      }
    }
  })
}

function __updateIndex() {
  // for each file in the cache
  for (let [key, value] of Object.entries(require.cache)) {
    if (!value || key.includes('node_modules'))
      continue

    // for each export from that file
    for (let [exportName, target] of Object.entries(value?.exports)) {
      if (exportName === 'default') {
        // FIX-ME
        __lookup.set(value?.exports[exportName].name, value)
        // @ts-ignore
        continue
      }

      // @ts-ignore
      __lookup.set(exportName, value)
    }
  }
}

export function filenameRec(Klass: any, retry = true): string | null {
  const fromIndex = __lookup.get(Klass.name)

  if (fromIndex) {
    return fromIndex?.filename
  }

  __updateIndex()

  if (!retry)
    return null

  return filenameRec(Klass)
}

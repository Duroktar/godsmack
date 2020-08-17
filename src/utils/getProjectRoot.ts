import ts from 'typescript'
import { dirname } from 'path'

/**
 * Returns the root project dir based on the
 * location of a tsconfig.json file in the
 * provided path (cwd by default).
 *
 * @export
 * @param {string} [path=process.cwd()]
 * @returns {string} The root project path as a string
 */
export function getProjectRoot(path: string = process.cwd()): string {
  const configFilePath = ts.findConfigFile(
    path,
    ts.sys.fileExists,
    "tsconfig.json",
  )
  if (configFilePath == null) {
    throw new Error(`Couldn't find project root in path -> ${path}`)
  }
  return dirname(configFilePath)
}

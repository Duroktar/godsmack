import ts from 'typescript'

export function getTsConfigFile(cwd: string) {
  const configPath = ts.findConfigFile(cwd, ts.sys.fileExists, "tsconfig.json")
  const configContent = ts.readConfigFile(configPath!, ts.sys.readFile)
  return ts.parseJsonConfigFileContent(configContent.config, ts.sys, cwd)
}

import ts from 'typescript'

export function transpile(src: string): string {
  const options = ts.getDefaultCompilerOptions()
  return ts.transpile(src, {
    ...options, ...{
      lib: ["dom"],
      inlineSourceMap: true,
    }
  })
}

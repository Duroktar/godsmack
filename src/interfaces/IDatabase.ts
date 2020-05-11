export interface IDatabaseProvider {
  connect(...args: any): any
  query(...args: any): any
  insert(...args: any): any
  testConnection(...args: any): Promise<any>
  createDockerDB(...args: any): Promise<any>
  findDockerDb(...args: any): Promise<boolean>
}

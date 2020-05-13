export interface IDatabaseProvider {
  connect(...args: any): Promise<any>
  query(...args: any): Promise<any>
  insert(...args: any): Promise<any>
  testConnection(...args: any): Promise<any>
  createDockerDB(...args: any): Promise<any>
  removeDockerDB(...args: any): Promise<any>
  stopDockerDB(...args: any): Promise<any>
  findDockerDb(...args: any): Promise<boolean>
  syncDatabaseTables(...args: any): Promise<any>
}

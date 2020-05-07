export interface IController<T extends {}> {
  get?(req: any): T
  create?(req: any): T
  patch?(req: any): T
  update?(req: any): T
  delete?(req: any): T
}

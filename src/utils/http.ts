abstract class ControllerError extends Error {
  public abstract statusCode: number
  public abstract message: string
}

export class BadRequestError extends ControllerError {
  public statusCode: number = 400
  public message: string = "Bad Request"
}

export class UnauthorizedError extends ControllerError {
  public statusCode: number = 401
  public message: string = "Unauthorized"
}

export class NotFoundError extends ControllerError {
  public statusCode: number = 404
  public message: string = "Not Found"
}

export class InternalServerError extends ControllerError {
  public statusCode: number = 500
  public message: string = "Internal Server Error"
}

type UrlOptions = {
  https?: boolean
  path?: string
  params?: string
}

export function createUrlFrom(host: string, port: number, rest: UrlOptions = {}) {
  const { https = false, path = '/', params = '' } = rest
  return `${https ? 'https' : 'http'}://${host}:${port}${path}${params}`
}

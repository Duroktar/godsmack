abstract class ControllerError extends Error {
  public abstract statusCode: number
  public abstract message: string
  public errorMessage: string | null
  constructor(message?: string) {
    super(message)
    this.errorMessage = message ?? null
  }
}

export class BadRequestError extends ControllerError {
  public statusCode: number = 400
  public message: string
  public errors: any[]
  constructor(message?: string | any[], defaultMessage = "Bad Request") {
    super(typeof message === 'string' ? message : defaultMessage)
    this.message = typeof message === 'string' ? message : defaultMessage
    this.errors = typeof message === 'string' ? [] : message ?? []
  }
}

export class UnauthorizedError extends ControllerError {
  public statusCode: number = 401
  public message: string = "Unauthorized"
}

export class NotFoundError extends ControllerError {
  public statusCode: number = 404
  public message: string = "Not Found"
}

export class UnprocessableEntityError extends ControllerError {
  public statusCode: number = 422
  public message: string
  constructor(public details?: Record<string, { message: string; value?: any; }>, msg = "Unprocessable Entity") {
    super(msg)
    this.message = msg
  }
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

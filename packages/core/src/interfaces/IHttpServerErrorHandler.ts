import type { NextFunction, Request, Response } from 'express'

export type IHttpServerErrorHandler<Err> = (err: Err, req: Request, res: Response, next: NextFunction) => any

export type RequestContext<Req = any, Res = any> = {
  req: Req;
  res: Res;
};



export interface IHttpServerErrorHandler<Request = any, Response = any> {
  onError(err: Error, ctx: RequestContext<Request, Response>): void;
}

export type RequestContext<Req = any, Res = any> = {
  req: Req;
  res: Res;
};

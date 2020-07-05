import type * as JWT from 'jsonwebtoken';

export interface IAuthService {
  createJWT(data: string | object | Buffer, options?: JWT.SignOptions): string | object;
  verifyJWT(token: string, options?: JWT.VerifyOptions): string | object;
}

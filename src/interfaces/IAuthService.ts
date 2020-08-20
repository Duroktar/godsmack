import type * as JWT from 'jsonwebtoken';
import { JwtPayload } from '../services/AuthService';

export interface IAuthService {
  createJWT(data: string | object | Buffer, options?: JWT.SignOptions): string | object;
  verifyJWT<T>(token: string, options?: JWT.VerifyOptions): JwtPayload<T> | null;
}

import type { Request } from 'express';
import * as JWT from 'jsonwebtoken';
import { SettingsService } from '../framework/Settings';
import { Singleton } from '../injector';
import { IApplicationSettings } from '../interfaces';
import { IAuthService } from '../interfaces/IAuthService';
import { AuthServiceError } from '../utils/error';
import { hashPasswordSha512, isSha512PasswordCorrect } from '../utils/saltHashPassword';
import { LogFactory } from './Logger';

export { TokenExpiredError } from 'jsonwebtoken';

export type JwtPayload<T = {}> = T & {
  iat: number;
  exp: number;
  iss: string;
  jti: string;
};

export type JwtAuthData = { userId: string; roles: string[]; };

const isString = (o: any): o is string => typeof o === 'string'

@Singleton()
export class AuthUtilsService implements IAuthService {
  public settings: Required<IApplicationSettings['auth']>
  constructor(
    public settingsService: SettingsService,
    public logger: LogFactory,
  ) {
    this.logger = logger.For(this)
    this.settings = settingsService.get('auth')
  }

  public async hashPasswordSha512(password: string) {
    return hashPasswordSha512(password);
  }

  public async isSha512PasswordCorrect(password: string, hash: string, salt: string) {
    return isSha512PasswordCorrect({ hash, salt }, password);
  }

  public jwtAuthorizationFlow(req: Pick<Request, 'header'>, requiredRoles?: string[] | null) {
    const decoded = this.verifyJwtFromHeadersOrThrow<JwtAuthData>(req);

    if (!requiredRoles)
      return decoded;

    if (!this.userHasPermission(requiredRoles, decoded.roles))
      throw new AuthServiceError('Not authorized to view this resource')

    return decoded
  }

  public userHasPermission(requiredRoles: string[], userRoles: string[]) {
    if (requiredRoles.length === 0)
      return true
    for (let role of requiredRoles) {
      if (!userRoles.includes(role))
        continue
      return true
    }
    return false
  }

  public createJWT(data: string | object | Buffer, options?: JWT.SignOptions): string {
    const defaultOptions: JWT.SignOptions = { expiresIn: '15min' }
    return JWT.sign(data, this.settings.secret, { ...defaultOptions, ...options })
  }

  public verifyJWT<T>(token: string, options?: JWT.VerifyOptions): JwtPayload<T> | null {
    return JWT.verify(token, this.settings.secret, options) as any
  }

  public decodeJWT<T>(token: string, options?: JWT.DecodeOptions): JwtPayload<T> | null {
    return JWT.decode(token, options) as any
  }

  public verifyAccessTokenFromQueryOrThrow<ExtraPayloadData = {}>(req: Pick<Request, 'query'>) {
    const { query: { access_token } } = req

    return this.verifyJwtOrThrow<ExtraPayloadData>(String(access_token));
  }

  public verifyRefreshTokenFromCookieOrThrow<ExtraPayloadData = {}>(req: Pick<Request, 'cookies'>) {
    const { cookies: { refresh_token } } = req

    return this.verifyJwtOrThrow<ExtraPayloadData>(String(refresh_token));
  }

  public verifyJwtFromHeadersOrThrow<ExtraPayloadData = {}>(req: Pick<Request, 'header'>) {
    const { headerTokenPrefix: prefix, headerName } = this.settings;
    const authHeader = req.header(headerName);

    if (!isString(authHeader) || !authHeader.startsWith(prefix))
      throw new AuthServiceError('Invalid Bearer Token (missing prefix)');

    const token = authHeader.substring(prefix.length).trim();

    return this.verifyJwtOrThrow<ExtraPayloadData>(token);
  }

  private verifyJwtOrThrow<ExtraPayloadData = {}>(token: string) {
    if (!token)
      throw new AuthServiceError('Token not found');

    const decoded = this.verifyJWT<ExtraPayloadData>(token);

    if (!decoded)
      throw new AuthServiceError('Token expired');

    return decoded;
  }
}

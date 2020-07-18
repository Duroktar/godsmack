import { Singleton } from '../../injector';
import { IAuthService } from '../../interfaces/IAuthService';
import { IApplicationSettings } from '../../interfaces';
import { SettingsService } from '../Settings';
import { Logger } from './Logger';
import { hashPasswordSha512, isSha512PasswordCorrect } from '../../utils/saltHashPassword';

import * as JWT from 'jsonwebtoken';
import type { Request } from 'express';
import { isString } from '../../utils/assert';
import { AuthServiceError } from '../../utils/error';

export type JwtPayload<T = {}> = T & {
  iat: number;
  exp: number;
  iss: string;
  jti: string;
};

export type JwtAuthData = { userId: string; roles: string[]; };

@Singleton()
export class AuthUtilsService implements IAuthService {
  public settings: IApplicationSettings['auth']
  constructor(
    public settingsService: SettingsService,
    public logger: Logger,
  ) {
    this.logger = logger.For(this)
    this.settings = settingsService.get('auth')
  }

  public createJWT(data: string | object | Buffer, options?: JWT.SignOptions): string {
    const defaultOptions: JWT.SignOptions = { expiresIn: '15min' }
    return JWT.sign(data, this.settings.secret, { ...defaultOptions, ...options })
  }

  public verifyJWT(token: string, options?: JWT.VerifyOptions): string | object {
    return JWT.verify(token, this.settings.secret, options)
  }

  public decodeJWT<T>(token: string, options?: JWT.DecodeOptions): JwtPayload<T> | null {
    return JWT.decode(token, options) as any
  }

  public validateAndDecodeRefreshToken<ExtraPayloadData = {}>(req: Request) {
    const { cookies: { refresh_token } } = req

    if (!refresh_token)
      throw new AuthServiceError('No refresh token found')

    const decoded = this.decodeJWT<ExtraPayloadData>(refresh_token)

    if (!decoded)
      throw new AuthServiceError('Invalid or malformed refresh token')

    const isValid = this.verifyJWT(refresh_token)

    if (!isValid)
      throw new AuthServiceError('Refresh token is expired')

    return decoded
  }

  public getDecodedJwt<ExtraPayloadData = {}>(req: Request) {
    const authHeader = this.getAuthHeaderFromRequest(req);
    const { headerTokenPrefix: prefix } = this.settings;

    if (!isString(authHeader) || !authHeader.startsWith(prefix))
      throw new AuthServiceError('Invalid Bearer Token (missing prefix)');

    return this.getDecodedJwtFromAuthHeader<ExtraPayloadData>(authHeader);
  }

  public getDecodedJwtFromAuthHeader<ExtraPayloadData = {}>(authHeader: string) {
    const token = this.getBearerTokenFromAuthHeader(authHeader);

    if (!token)
      throw new AuthServiceError('Invalid or missing Bearer Token');

    const jwt = this.verifyJWT(token);

    if (!jwt)
      throw new AuthServiceError('Failed to decode Bearer Token');

    return jwt as JwtPayload<ExtraPayloadData>
  }

  public authorizeFlow(authHeader: string | undefined, requiredRoles?: string[] | null) {

    if (!isString(authHeader))
      throw new AuthServiceError('Invalid Authorization Claims')

    const decoded = this.getDecodedJwtFromAuthHeader<JwtAuthData>(authHeader);

    if (!requiredRoles)
      return decoded;

    const has = (role: string) => decoded.roles.includes(role)

    const isAuthorized = requiredRoles
      .reduce((acc, role) => has(role) || acc, false);

    if (!isAuthorized)
      throw new AuthServiceError('Not authorized to view this resource')

    return decoded
  }

  public getAuthHeaderFromRequest(req: Request) {
    const authHeaderName = this.settings.headerName;
    return req.header(authHeaderName);
  }

  public getBearerTokenFromAuthHeader(header: string) {
    const { headerTokenPrefix } = this.settings;
    return header.substring(headerTokenPrefix.length).trim()
  }

  public async hashPasswordSha512(password: string) {
    return hashPasswordSha512(password);
  }

  public async isSha512PasswordCorrect(password: string, hash: string, salt: string) {
    return isSha512PasswordCorrect({ hash, salt }, password);
  }
}

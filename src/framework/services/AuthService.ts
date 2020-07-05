import { Singleton } from '../../injector';
import { IAuthService } from '../../interfaces/IAuthService';
import { IApplicationSettings } from '../../interfaces';
import { SettingsService } from '../Settings';
import { Logger } from './Logger';
import { hashPasswordSha512, isSha512PasswordCorrect } from '../../utils/saltHashPassword';

import * as JWT from 'jsonwebtoken';

@Singleton()
export class AuthService implements IAuthService {
  public settings: IApplicationSettings['auth']
  constructor(
    public settingsService: SettingsService,
    public logger: Logger,
  ) {
    this.logger = logger.For(this)
    this.settings = settingsService.get('auth')
  }

  public createJWT(data: string | object | Buffer, options?: JWT.SignOptions): string {
    return JWT.sign(data, this.settings.secret, options)
  }

  public verifyJWT(token: string, options?: JWT.VerifyOptions): string | object {
    return JWT.verify(token, this.settings.secret, options)
  }

  public authorizeFlow(authHeader: string) {
    const authHeaderPrefix = this.settings.headerTokenPrefix;
    const jwtToken = authHeader.slice(authHeaderPrefix.length);
    return this.verifyJWT(jwtToken.trim());
  }

  public async hashPasswordSha512(password: string) {
    return hashPasswordSha512(password);
  }

  public async isSha512PasswordCorrect(password: string, hash: string, salt: string) {
    return isSha512PasswordCorrect({ hash, salt }, password);
  }
}

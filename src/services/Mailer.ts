import NodeMailer from 'nodemailer';
import { Singleton } from '../injector';
import { SettingsService } from '../framework';
import { LogFactory } from './Logger';

export interface ISendMailResult {
  messageId: string
}

@Singleton()
export class MailerService {
  private transport!: NodeMailer.Transporter
  constructor(
    private logger: LogFactory,
    private config: SettingsService,
  ) {
    this.logger = logger.For(this)
  }

  public initializeService = async () => {
    const settings = this.config.get('mailer')
    const oauth2 = this.config.get('oauth2')
    if (settings.auth.type === 'OAuth2') {
      const oauth2Settings = {
        ...settings,
        auth: {
          ...settings.auth,
          ...oauth2,
        }
      }
      this.transport = NodeMailer.createTransport(oauth2Settings)
    } else {
      this.transport = NodeMailer.createTransport(settings)
    }
  }

  public sendMail = async (options: NodeMailer.SendMailOptions) => {
    return await this.transport.sendMail(options) as ISendMailResult
  }

  public stop = async () => {
    return this.transport.close()
  }
}

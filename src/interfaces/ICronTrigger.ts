export interface ICronTrigger {
  /**
   * A Cron time string.
   *
   * Ex: '0 *\/20 * * * *'  every 20 minutes
   *
   * @type {string}
   * @memberof ICronTrigger
   */
  cronTime: string;
  onTick(): void | Promise<void>;
  onComplete?(): void;
  start?: boolean;
  timezone?: string;
  context?: any;
  runOnInit?: boolean;
}

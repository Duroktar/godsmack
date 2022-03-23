import { IGameModel } from "./IGameModel";

export type GameEventType = 'begin' | 'update' | 'end';

export type IGameEvent = {
  type: GameEventType
  payload: IGameModel
} | {
  type: 'config-changed'
  payload: {
    key: string,
    value: { old: any, new: any },
  }
}

export interface IGamePubSub {
  publish(event: IGameEvent): void;
  subscribe(cb: (event: IGameEvent) => void): void;
  unsubscribe(cb: (event: IGameEvent) => void): void;
}

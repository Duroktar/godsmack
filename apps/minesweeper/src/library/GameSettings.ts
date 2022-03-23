import { Singleton } from "@godsmack/inject";
import { GameDifficulty } from "../enums/GameDifficulty";
import { IGamePubSub } from "../interface/IGamePubSub";
import { IVector2 } from "../interface/IVector2";
import { vec2 } from "../utils/vec2";

type GameSetting = Exclude<keyof GameSettings, 'set' | 'events'>

@Singleton()
export class GameSettings {
  constructor(public events: IGamePubSub) {}

  public cellSize: IVector2 = vec2(25)
  public flagCharacter: string = '🚩'
  public mineCharacter: string = '💣'
  public defaultDifficulty = GameDifficulty.EASY
  public timerInterval = 100

  public set<K extends GameSetting, V extends GameSettings[K]>(key: K, value: V): void {
    const self: GameSettings = this
    const old = self[key]
    self[key] = value

    this.events.publish({
      type: 'config-changed',
      payload: {
        key,
        value: {
          old,
          new: value,
        }
      }
    })
  }
}

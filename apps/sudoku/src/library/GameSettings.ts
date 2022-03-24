import { Singleton } from "@godsmack/inject";
import { GameDifficulty } from "../enums/GameDifficulty";
import { IGamePubSub } from "../interface/IGamePubSub";
import { IVector2 } from "../interface/IVector2";
import { vec2 } from "../utils/vec2";

type GameSetting = Exclude<keyof GameSettings, 'set' | 'events'>

@Singleton()
export class GameSettings {
  constructor(public events: IGamePubSub) {}

  public flagCharacter: string = '🚩'
  public mineCharacter: string = '💣'
  public defaultDifficulty = GameDifficulty.easy
  public timerInterval = 100
  public boardWidth = 540
  public cellSize = vec2(Math.floor(this.boardWidth / 9))

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

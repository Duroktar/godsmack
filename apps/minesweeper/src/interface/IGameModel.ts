import { GameDifficulty } from "../enums/GameDifficulty"
import { GameState } from "../enums/GameState"
import { IGameCell } from "./IGameCell"

export type IGameModel = {
  cells: IGameCell[]
  state: GameState
  seed: string;
  difficulty: GameDifficulty
}

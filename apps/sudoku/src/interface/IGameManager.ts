import { GameDifficulty } from "../enums/GameDifficulty";
import { IGameInput } from "./IGameInput";
import { IGameModel } from "./IGameModel";

export interface IGameManager {
  create(difficulty: GameDifficulty): IGameModel
  update(state: IGameModel, input: IGameInput): IGameModel
}

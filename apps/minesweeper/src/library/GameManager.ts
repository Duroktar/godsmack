import { Singleton } from "@godsmack/inject";
import { GameDifficulty } from "../enums/GameDifficulty";
import { IGameModel } from "../interface/IGameModel";
import { IGameManager } from "../interface/IGameManager";
import { IGameLogic } from "../interface/IGameLogic";
import { GameState } from "../enums/GameState";
import { IGameInput } from "../interface/IGameInput";

@Singleton()
export class GameManager implements IGameManager {
  constructor(public logic: IGameLogic) {}

  create(difficulty: GameDifficulty): IGameModel {
    const seed = this.logic
      .createGameSeed(difficulty)

    const cells = this.logic
      .initializeGameCells(difficulty, seed)

    const result = GameState.PAUSED

    return { cells, seed, state: result, difficulty }
  }

  update(model: IGameModel, input: IGameInput): IGameModel {
    return this.logic.applyGameInput(input, model)
  }
}

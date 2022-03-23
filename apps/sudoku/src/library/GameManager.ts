import { Singleton } from "@godsmack/inject";
import { GameDifficulty } from "../enums/GameDifficulty";
import { IGameModel } from "../interface/IGameModel";
import { IGameManager } from "../interface/IGameManager";
import { IGameLogic } from "../interface/IGameLogic";
import { GameState } from "../enums/GameState";
import { IGameInput } from "../interface/IGameInput";
import { SudokuTS } from "./SudokuTS";

@Singleton()
export class GameManager implements IGameManager {
  constructor(public logic: IGameLogic, public sudoku: SudokuTS) {}

  create(difficulty: GameDifficulty): IGameModel {
    const seed = this.sudoku.generate(difficulty)
    const solution = this.sudoku.solve(seed)

    const cells = this.logic
      .initializeGameCells(seed)

    const state = GameState.PAUSED

    return { cells, seed, state, difficulty, solution }
  }

  update(model: IGameModel, input: IGameInput): IGameModel {
    return this.logic.applyGameInput(input, model)
  }
}

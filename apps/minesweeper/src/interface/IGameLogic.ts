import { GameDifficulty } from "../enums/GameDifficulty";
import { IGameModel } from "./IGameModel";
import { IGameCell } from "./IGameCell";
import { IGameInput } from "./IGameInput";
import { IVector2 } from "./IVector2";

export interface IGameLogic {
  applyGameInput(input: IGameInput, state: IGameModel): IGameModel;
  initializeGameCells(difficulty: GameDifficulty, seed: string): IGameCell[];
  createGameSeed(difficulty: GameDifficulty): string;
  getBoardSize(difficulty: GameDifficulty): IVector2;
  getNumberOfBombs(difficulty: GameDifficulty): number;
  getGameCell(state: IGameModel, index: number): IGameCell;
  getNeighbors(difficulty: GameDifficulty, index: number): number[]
}

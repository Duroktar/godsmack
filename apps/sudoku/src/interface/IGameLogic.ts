import { IGameModel } from "./IGameModel";
import { IGameCell } from "./IGameCell";
import { IGameInput } from "./IGameInput";

export interface IGameLogic {
  applyGameInput(input: IGameInput, state: IGameModel): IGameModel;
  initializeGameCells(seed: string): IGameCell[];
}

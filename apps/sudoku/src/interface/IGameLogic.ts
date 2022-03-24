import { IGameModel } from "./IGameModel";
import { IGameCell } from "./IGameCell";
import { IGameInput } from "./IGameInput";
import { IVector2 } from "./IVector2";

export interface IGameLogic {
  applyGameInput(input: IGameInput, state: IGameModel): IGameModel;
  initializeGameCells(seed: string): IGameCell[];
  getTileVectorForIndex(index: number): IVector2;
  getIndexForTileVector([x, y]: IVector2): number;
}

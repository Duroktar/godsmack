import { IGameModel } from "./IGameModel";

export interface IGameRunner {
  playGame(gameboard: IGameModel): Promise<IGameModel>
}

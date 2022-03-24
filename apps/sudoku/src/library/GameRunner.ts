import { Singleton } from "@godsmack/inject";
import { GameState } from "../enums/GameState";
import { IGameManager } from "../interface/IGameManager";
import { IGameRunner } from "../interface/IGameRunner";
import { IGameModel } from "../interface/IGameModel";
import { GameEventType, IGamePubSub } from "../interface/IGamePubSub";
import { IInputProvider } from "../interface/IInputProvider";

@Singleton()
export class GameRunner implements IGameRunner {
  constructor(
    private manager: IGameManager,
    private events: IGamePubSub,
    private input: IInputProvider,
  ) {}

  async playGame(gameboard: IGameModel): Promise<IGameModel> {
    this.emit("begin", gameboard)

    do {
      const input = await this.input.getNextInput();
      this.manager.update(gameboard, input)
      this.emit("update", gameboard)
    } while (gameboard.state < GameState.WON)

    this.emit("end", gameboard);
    return gameboard
  }

  private emit(type: GameEventType, payload: IGameModel) {
    this.events.publish({ type, payload });
  }
}

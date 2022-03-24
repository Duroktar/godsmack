import { Singleton } from "@godsmack/inject";
import { GameState } from "../enums/GameState";
import { IGameInput } from "../interface/IGameInput";
import { IGameLogic } from "../interface/IGameLogic";
import { IGameModel } from "../interface/IGameModel";
import { IGameCell } from "../interface/IGameCell";
import { UNREACHABLE } from "../utils/assert";
import { IVector2 } from "../interface/IVector2";

@Singleton()
export class GameLogic implements IGameLogic {
  applyGameInput(input: IGameInput, model: IGameModel): IGameModel {

    if (model.state < GameState.WON) {
      switch(input.action) {
        case 'select': {
          model.selected = input.cellIndex
          break
        }
        case 'keypress': {
          if (!model.selected) {
            break
          }
          const cell = model.cells[model.selected]
          if (cell.isHint) {
            break
          }
          if (cell.value === input.key) {
            cell.value = '.'
            break
          }
          cell.value = input.key
          break
        }
        default:
          return UNREACHABLE(input)
      }

      model.state = this.getNextGameState(model)
    }

    return model
  }

  initializeGameCells(seed: string): IGameCell[] {
    const cells: IGameCell[] = []

    for (let i = 0; i < 9 * 9; i++) {
      cells.push(this.createGameCell(i, seed))
    }

    return cells
  }

  getTileVectorForIndex(index: number): IVector2 {
    return [Math.floor(index % 9), Math.floor(index / 9)]
  }

  getIndexForTileVector([x, y]: IVector2): number {
    return y * 9 + x
  }

  private createGameCell(index: number, seed: string): IGameCell {
    return {
      index,
      isHint: seed[index] !== '.',
      value: seed[index],
    }
  }

  private getNextGameState(model: IGameModel): GameState {
    const board = model.cells
      .map(cell => cell.value)
      .join('');

    if (model.solution === board) {
      return GameState.WON
    }
    return model.state
  }
}

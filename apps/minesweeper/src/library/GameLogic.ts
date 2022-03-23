import { Singleton } from "@godsmack/inject";
import { GameDifficulty } from "../enums/GameDifficulty";
import { GameState } from "../enums/GameState";
import { IGameInput } from "../interface/IGameInput";
import { IGameLogic } from "../interface/IGameLogic";
import { IGameModel } from "../interface/IGameModel";
import { IGameCell } from "../interface/IGameCell";
import { IVector2 } from "../interface/IVector2";
import { UNREACHABLE } from "../utils/assert";

@Singleton()
export class GameLogic implements IGameLogic {
  applyGameInput(input: IGameInput, model: IGameModel): IGameModel {

    if (model.state < GameState.WON) {
      switch(input.action) {
        case 'clear': {
          this.floodfill(model, input.cellIndex);
          break
        }
        case 'flag': {
          const { flagged } = model.cells[input.cellIndex]
          model.cells[input.cellIndex].flagged = !flagged;
          break
        }
        default:
          return UNREACHABLE(input.action)
      }

      model.state = this.getNextGameState(model)
    }

    return model
  }

  initializeGameCells(difficulty: GameDifficulty, seed: string): IGameCell[] {
    const cells: IGameCell[] = []

    for (let i = 0; i < this.getNumberOfCells(difficulty); i++) {
      cells.push(this.createGameCell(difficulty, i, seed))
    }

    return cells
  }

  createGameSeed(difficulty: GameDifficulty): string {
    const states = new Array(this.getNumberOfCells(difficulty))
      .fill(0)
      .fill(1, 0, this.getNumberOfBombs(difficulty));

    return this.shuffle(states).join('')
  }

  getBoardSize(difficulty: GameDifficulty): IVector2 {
    switch (difficulty) {
      case GameDifficulty.BEGINNER:
        return [9, 9];
      case GameDifficulty.EASY:
        return [16, 16];
      case GameDifficulty.INTERMEDIATE:
        return [20, 20];
      case GameDifficulty.ADVANCED:
        return [24, 24];
      default:
        return UNREACHABLE(difficulty);
    }
  }

  getNumberOfBombs(difficulty: GameDifficulty): number {
    switch (difficulty) {
      case GameDifficulty.BEGINNER:
        return 10;
      case GameDifficulty.EASY:
        return 40;
      case GameDifficulty.INTERMEDIATE:
        return 60;
      case GameDifficulty.ADVANCED:
        return 99;
      default:
        return UNREACHABLE(difficulty);
    }
  }

  getGameCell(model: IGameModel, index: number): IGameCell {
    return model.cells[index];
  }

  getNeighbors(difficulty: GameDifficulty, index: number): number[] {
    const [maxWidth, maxHeight] = this.getBoardSize(difficulty)
    const [x, y] = this.getTileVectorForIndex(index, difficulty)
    const neighborTiles: IVector2[] = [
      [x - 1, y - 1], [x - 0, y - 1], [x + 1, y - 1],
      [x - 1, y - 0],                 [x + 1, y - 0],
      [x - 1, y + 1], [x - 0, y + 1], [x + 1, y + 1],
    ];
    return neighborTiles
      .map(([x, y]: IVector2) => {
          if (0 <= x && x < maxWidth && 0 <= y && y < maxHeight)
            return this.getIndexForTileVector([x, y], difficulty)
          else
            return -1
        })
      .filter(i => i >= 0)
  }

  private createGameCell(difficulty: GameDifficulty, index: number, seed: string): IGameCell {
    return {
      index,
      flagged: false,
      isMine: Number(seed[index]) === 1,
      mines: this.getNumberOfNeighboringMines(difficulty, index, seed),
      visible: false,
    }
  }

  private floodfill(model: IGameModel, cellIndex: number, seen = new Set<number>()) {
    const cell = model.cells[cellIndex]

    seen.add(cellIndex)

    if (cell.mines === 0 && cell.visible === false) {
      this.getNeighbors(model.difficulty, cellIndex)
        .forEach(neighborIdx => {
          if (!seen.has(neighborIdx)) {
            seen.add(neighborIdx)
            const neighbor = this.getGameCell(model, neighborIdx);
            if (neighbor.visible === false && !neighbor.isMine)
              this.floodfill(model, neighborIdx, seen);
          }
        });
    }

    if (cell.flagged === false)
      cell.visible = true
  }

  private getNextGameState(model: IGameModel): GameState {
    const remaining = model.cells
      .some(val => ! (val.isMine || val.visible))

    if (!remaining) {
      return GameState.WON
    }
    if (model.cells.some(o => o.isMine && o.visible)) {
      return GameState.GAMEOVER
    }
    if (model.state === GameState.PAUSED) {
      return GameState.PLAYING
    }
    return model.state
  }

  private getNumberOfCells(difficulty: GameDifficulty): number {
    const [x, y] = this.getBoardSize(difficulty)
    return x * y
  }

  private getNumberOfNeighboringMines(difficulty: GameDifficulty, index: number, seed: string): number {
    return this.getNeighbors(difficulty, index)
      .map(i => Number(seed[i] ?? '0'))
      .reduce((a, b) => a + b, 0)
  }

  private getTileVectorForIndex(index: number, difficulty: GameDifficulty): IVector2 {
    const [width, _] = this.getBoardSize(difficulty)
    return [Math.floor(index % width), Math.floor(index / width)]
  }

  private getIndexForTileVector([x, y]: IVector2, difficulty: GameDifficulty): number {
    const [width, _] = this.getBoardSize(difficulty)
    return y * width + x
  }

  private shuffle<T>(array: T[]) {
    let currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }
}

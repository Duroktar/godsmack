import { Singleton } from "@godsmack/inject";
import EventEmitter from "events";
import { IGameInput } from "../interface/IGameInput";
import { IInputProvider } from "../interface/IInputProvider";
import { SudokuTS } from "./SudokuTS";

@Singleton()
export class DOMInputProvider implements IInputProvider {
  constructor(private sudoku: SudokuTS) {
    document.addEventListener('click', this.onClickCell)
    document.addEventListener('keypress', this.onKeyPress)
  }

  async getNextInput(): Promise<IGameInput> {
    return new Promise<IGameInput>((resolve) => {
      this.emitter.once('data', data => resolve(data))
    })
  }

  private onClickCell = (e: MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('cell')) {
      const idx = Number((<HTMLElement>e.target).id)
      this.emitData({ action: 'select', cellIndex: idx })
    }
  }

  private onKeyPress = (e: KeyboardEvent) => {
    if (this.sudoku.DIGITS.includes(e.key))
      this.emitData({ action: 'keypress', key: e.key })
  }

  private emitData(data: IGameInput): void {
    this.emitter.emit('data', data)
  }

  private emitter = new EventEmitter();
}

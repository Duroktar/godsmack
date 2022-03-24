import { Singleton } from "@godsmack/inject";
import EventEmitter from "events";
import { IGameInput } from "../interface/IGameInput";
import { IInputProvider } from "../interface/IInputProvider";
import { ISudokuTS } from "../interface/ISudokuTS";

@Singleton()
export class DOMInputProvider implements IInputProvider {
  constructor(private sudoku: ISudokuTS) {
    document.addEventListener('click', this.onClickCell)
    document.addEventListener('keypress', this.onKeyPress)
  }

  async getNextInput(): Promise<IGameInput> {
    return new Promise<IGameInput>((resolve) => {
      this.emitter.once('data', data => resolve(data))
    })
  }

  private onClickCell = (e: MouseEvent) => {
    if (e.target instanceof HTMLElement) {
      if (e.target.classList.contains('cell')) {
        const idx = Number(e.target.getAttribute('idx'))
        this.emitData({ action: 'select', cellIndex: idx })
      }
      if (e.target.parentElement?.classList.contains('cell')) {
        const idx = Number(e.target.parentElement.getAttribute('idx'))
        this.emitData({ action: 'select', cellIndex: idx })
      }
    }
  }

  private onKeyPress = (e: KeyboardEvent) => {
    if (this.sudoku.DIGITS.includes(e.key))
      this.emitData({ action: 'keypress', key: e.key })
  }

  private emitData(data: IGameInput): void {
    console.log('Input', data);

    this.emitter.emit('data', data)
  }

  private emitter = new EventEmitter();
}

import { Singleton } from "@godsmack/inject";
import EventEmitter from "events";
import { IGameInput } from "../interface/IGameInput";
import { IInputProvider } from "../interface/IInputProvider";

@Singleton()
export class DOMInputProvider implements IInputProvider {
  constructor() {
    document.addEventListener('click', this.onClickCell)
  }

  async getNextInput(): Promise<IGameInput> {
    return new Promise<IGameInput>((resolve) => {
      this.emitter.once('data', data => resolve(data))
    })
  }

  private onClickCell = (e: MouseEvent) => {
    if ((e.target as HTMLElement).classList.contains('cell')) {
      const idx = (<HTMLElement>e.target).id
      this.emitData({
        action: e.getModifierState('Meta') ? 'flag' : 'clear',
        cellIndex: Number(idx),
      })
    }
  }

  private emitData(data: IGameInput): void {
    this.emitter.emit('data', data)
  }

  private emitter = new EventEmitter();
}

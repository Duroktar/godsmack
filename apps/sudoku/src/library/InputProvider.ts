import { Singleton } from "@godsmack/inject";
import EventEmitter from "events";
import { IGameInput } from "../interface/IGameInput";
import { IInputProvider } from "../interface/IInputProvider";

@Singleton()
export class DOMInputProvider implements IInputProvider {
  constructor() {}

  async getNextInput(): Promise<IGameInput> {
    return new Promise<IGameInput>((resolve) => {
      this.emitter.once('data', data => resolve(data))
    })
  }

  public putNextInput(data: IGameInput): void {
    console.log('putting input:', data);
    this.emitter.emit('data', data)
  }

  private emitter = new EventEmitter();
}

// export abstract class BaseInputProvider {
//   protected getNextInput(): Promise<IGameInput> {
//     return new Promise<IGameInput>((resolve) =>
//       resolve(this.provideNextInput()))
//   }
//   abstract provideNextInput(): Promise<IGameInput>;
// }

// export class GameInputProvider extends BaseInputProvider {
//   public async provideNextInput(): Promise<IGameInput> {
//   }
// }

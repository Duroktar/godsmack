import { IGameInput } from "./IGameInput"

export interface IInputProvider {
  getNextInput(): Promise<IGameInput>
}

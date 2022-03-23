
export type GameActionType = 'clear' | 'flag';

export type IGameInput = {
  action: GameActionType;
  cellIndex: number;
}

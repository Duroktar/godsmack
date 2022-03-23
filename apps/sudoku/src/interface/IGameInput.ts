
export type GameActionType =
  | 'select'
  | 'keypress'

type IGameSelectInput = {
  action: 'select';
  cellIndex: number;
}

type IGameKeypressInput = {
  action: 'keypress';
  key: string;
}

export type IGameInput =
  | IGameSelectInput
  | IGameKeypressInput

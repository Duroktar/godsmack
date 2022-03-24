import { Difficulty } from "../library/SudokuTS";


export interface ISudokuTS {
  generate(difficulty: Difficulty, unique?: boolean | undefined): string;
  solve(board: string, reverse?: boolean | undefined): string | false;
  getGroupNumber(col: number, row: number): string
  getRemainingDigits(board: string): string[];
  DIGITS: string;
}

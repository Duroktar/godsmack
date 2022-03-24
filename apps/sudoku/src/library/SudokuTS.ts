
/*
    Sudoku.ts
    ---------

    A Sudoku puzzle generator and solver JavaScript library.

    Please see the README for more details.

    > Modified by @Duroktar in 2022 from the original gist[0]

    [0]: https://raw.githubusercontent.com/robatron/sudoku.js/master/sudoku.js
*/

import { Singleton } from "@godsmack/inject";
import { ISudokuTS } from "../interface/ISudokuTS";

export type IGameDifficulty = {
  easy: number;
  medium: number;
  hard: number;
  "very-hard": number;
  insane: number;
  inhuman: number;
};

export type Difficulty = keyof IGameDifficulty;

@Singleton()
export class SudokuTS implements ISudokuTS {
  /**
   *  Allowed sudoku digits (0-9)
   *
   * @type {string}
   * @memberof SudokuTS
   */
  public DIGITS: string
  private DIFFICULTY: IGameDifficulty;
  private ROWS: string                                 // Row lables
  private COLS: string;                                // Column lables
  private SQUARES: string[];                           // Square IDs
  private UNITS: string[][];                           // All units (row, column, or box)
  private SQUARE_UNITS_MAP: Record<string, string[]>;  // Squares -> units map
  private SQUARE_PEERS_MAP: Record<string, string[]>;  // Squares -> peers map
  private MIN_GIVENS: number;                          // Minimum number of givens
  private NR_SQUARES: number;                          // Number of squares
  private BLANK_CHAR: string;
  private BLANK_BOARD: string;

  constructor() {

    this.DIGITS = "123456789";
    this.ROWS = "ABCDEFGHI";
    this.COLS = this.DIGITS;

    this.MIN_GIVENS = 17;
    this.NR_SQUARES = 81;

    // Define difficulties by how many squares are given to the player in a new
    // puzzle.
    this.DIFFICULTY = {
        "easy":         62,
        "medium":       53,
        "hard":         44,
        "very-hard":    35,
        "insane":       26,
        "inhuman":      17,
    };

    // Blank character and board representation
    this.BLANK_CHAR = '.';
    this.BLANK_BOARD = "...................................................." +
            ".............................";

    // Init
    // -------------------------------------------------------------------------
    this.SQUARES             = this._cross(this.ROWS, this.COLS);
    this.UNITS               = this._get_all_units(this.ROWS, this.COLS);
    this.SQUARE_UNITS_MAP    = this._get_square_units_map(this.SQUARES, <any>this.UNITS);
    this.SQUARE_PEERS_MAP    = this._get_square_peers_map(this.SQUARES, this.SQUARE_UNITS_MAP);
  }

  // Generate
  // -------------------------------------------------------------------------
  generate = (difficulty: Difficulty, unique?: boolean): string => {
      /* Generate a new Sudoku puzzle of a particular `difficulty`, e.g.,

          // Generate an "easy" sudoku puzzle
          sudoku.generate("easy");


      Difficulties are as follows, and represent the number of given squares:

              "easy":         61
              "medium":       52
              "hard":         43
              "very-hard":    34
              "insane":       25
              "inhuman":      17


      You may also enter a custom number of squares to be given, e.g.,

          // Generate a new Sudoku puzzle with 60 given squares
          sudoku.generate(60)


      `difficulty` must be a number between 17 and 81 inclusive. If it's
      outside of that range, `difficulty` will be set to the closest bound,
      e.g., 0 -> 17, and 100 -> 81.


      By default, the puzzles are unique, uless you set `unique` to false.
      (Note: Puzzle uniqueness is not yet implemented, so puzzles are *not*
      guaranteed to have unique solutions)
      */

      // If `difficulty` is a string or undefined, convert it to a number or
      // default it to "easy" if undefined.
      let _difficulty: number | undefined;
      if (typeof difficulty === "string" || typeof difficulty === "undefined") {
        _difficulty = this.DIFFICULTY[difficulty] || this.DIFFICULTY.easy;
      }

      // Force difficulty between 17 and 81 inclusive
      _difficulty = this._force_range(_difficulty, this.NR_SQUARES + 1, this.MIN_GIVENS);

      // Default unique to true
      unique = unique ?? true;

      // Get a set of squares and all possible candidates for each square
      let blank_board = "";
      for (let i = 0; i < this.NR_SQUARES; ++i) {
          blank_board += '.';
      }

      const candidates = this._get_candidates_map(blank_board);
      if (candidates === false) {
        throw new Error('False candidates')
      }

      // For each item in a shuffled list of squares
      let shuffled_squares = this._shuffle(this.SQUARES);
      for (let square of shuffled_squares) {

          // If an assignment of a random chioce causes a contradictoin, give
          // up and try again
          let rand_candidate_idx =
                  this._rand_range(candidates[square].length);
          let rand_candidate = candidates[square][rand_candidate_idx];
          if (!this._assign(candidates, square, rand_candidate)) {
              break;
          }

          // Make a list of all single candidates
          let single_candidates = [];
          for (let square of this.SQUARES) {

              if (candidates[square].length == 1) {
                  single_candidates.push(candidates[square]);
              }
          }

          // If we have at least difficulty, and the unique candidate count is
          // at least 8, return the puzzle!
          if (single_candidates.length >= _difficulty &&
                  this._strip_dups(single_candidates).length >= 8) {
              let board = "";
              let givens_idxs = [];
              for (let i = 0; i < this.SQUARES.length; i++) {
                  let square = this.SQUARES[i];
                  if (candidates[square].length == 1) {
                      board += candidates[square];
                      givens_idxs.push(i);
                  } else {
                      board += this.BLANK_CHAR;
                  }
              }

              // If we have more than `difficulty` givens, remove some random
              // givens until we're down to exactly `difficulty`
              let nr_givens = givens_idxs.length;
              if (nr_givens > _difficulty) {
                  givens_idxs = this._shuffle(givens_idxs);
                  for (let i = 0; i < nr_givens - _difficulty; ++i) {
                      let target = parseInt(String(givens_idxs[i]));
                      board = board.substr(0, target) + this.BLANK_CHAR +
                          board.substr(target + 1);
                  }
              }

              // Double check board is solvable
              // TODO: Make a standalone board checker. Solve is expensive.
              if (this.solve(board)) {
                  return board;
              }
          }
      }

      // Give up and try a new puzzle
      return this.generate(difficulty);
  };

  // Solve
  // -------------------------------------------------------------------------
  solve = (board: string, reverse?: boolean) => {
      /* Solve a sudoku puzzle given a sudoku `board`, i.e., an 81-character
      string of sudoku.DIGITS, 1-9, and spaces identified by '.', representing the
      squares. There must be a minimum of 17 givens. If the given board has no
      solutions, return false.

      Optionally set `reverse` to solve "backwards", i.e., rotate through the
      possibilities in reverse. Useful for checking if there is more than one
      solution.
      */

      // Assure a valid board
      let report = this.validate_board(board);
      if (report !== true) {
          return false;
      }

      // Check number of givens is at least MIN_GIVENS
      let nr_givens = 0;
      for (let i of board) {
          if (i !== this.BLANK_CHAR && this._in(i, this.DIGITS)) {
              ++nr_givens;
          }
      }
      if (nr_givens < this.MIN_GIVENS) {
          throw "Too few givens. Minimum givens is " + this.MIN_GIVENS;
      }

      // Default reverse to false
      reverse = reverse || false;

      let candidates = this._get_candidates_map(board);
      let result = this._search(candidates, reverse);

      if (result) {
          let solution = "";
          for (let square in result) {
              solution += result[square];
          }
          return solution;
      }
      return '';
  };

  getCandidates = (board: string) => {
    /* Return all possible candidatees for each square as a grid of
    candidates, returnning `false` if a contradiction is encountered.

    Really just a wrapper for sudoku._get_candidates_map for programmer
    consumption.
    */

    // Assure a valid board
    let report = this.validate_board(board);
    if (report !== true) {
        throw report;
    }

    // Get a candidates map
    let candidates_map = this._get_candidates_map(board);

    // If there's an error, return false
    if (!candidates_map) {
        return false;
    }

    // Transform candidates map into grid
    let rows = [];
    let cur_row = [];
    let i = 0;
    for (let square in candidates_map) {
        let candidates = candidates_map[square];
        cur_row.push(candidates);
        if (i % 9 == 8) {
            rows.push(cur_row);
            cur_row = [];
        }
        ++i;
    }
    return rows;
  }

  getRemainingDigits = (board: string) => {
    const candidates = this.getCandidates(board);
    const characters = (candidates || [])
      .map((item, i) => board[i] === '.' ? item : '')
      .join('');
    return this._strip_dups(characters).sort()
  }

  private _get_candidates_map = (board: string) => {
      /* Get all possible candidates for each square as a map in the form
      {square: sudoku.DIGITS} using recursive constraint propagation. Return `false`
      if a contradiction is encountered
      */

      // Assure a valid board
      let report = this.validate_board(board);
      if (report !== true) {
          throw report;
      }

      let candidate_map: Record<string, string> = {};
      let squares_values_map = this._get_square_vals_map(board);

      // Start by assigning every digit as a candidate to every square
      for (let si of this.SQUARES){
          candidate_map[si] = this.DIGITS;
      }

      // For each non-blank square, assign its value in the candidate map and
      // propigate.
      for (let square in squares_values_map) {
          let val = squares_values_map[square];

          if (this._in(val, this.DIGITS)) {
              let new_candidates = this._assign(candidate_map, square, val);

              // Fail if we can't assign val to square
              if (!new_candidates) {
                  return false;
              }
          }
      }

      return candidate_map;
  };

  private _search = (candidates: Record<string, string> | false, reverse?: boolean): Record<string, string> | false => {
      /* Given a map of squares -> candiates, using depth-first search,
      recursively try all possible values until a solution is found, or false
      if no solution exists.
      */

      // Return if error in previous iteration
      if (!candidates) {
          return false;
      }

      // Default reverse to false
      reverse = reverse || false;

      // If only one candidate for every square, we've a solved puzzle!
      // Return the candidates map.
      let max_nr_candidates = 0;
      let max_candidates_square = null;
      candidates
      for (let square of this.SQUARES) {

          let nr_candidates = candidates[square].length;

          if (nr_candidates > max_nr_candidates) {
              max_nr_candidates = nr_candidates;
              max_candidates_square = square;
          }
      }
      if (max_nr_candidates === 1) {
          return candidates;
      }

      // Choose the blank square with the fewest possibilities > 1
      let min_nr_candidates = 10;
      let min_candidates_square: string = '';
      for (let square of this.SQUARES) {

          let nr_candidates = candidates[square].length;

          if (nr_candidates < min_nr_candidates && nr_candidates > 1) {
              min_nr_candidates = nr_candidates;
              min_candidates_square = square;
          }
      }

      // Recursively search through each of the candidates of the square
      // starting with the one with fewest candidates.

      // Rotate through the candidates forwards
      let min_candidates = candidates[min_candidates_square];
      if (!reverse) {
          for (let val of min_candidates) {

              // TODO: Implement a non-rediculous deep copy function
              let candidates_copy = JSON.parse(JSON.stringify(candidates));
              let candidates_next = this._search(
                  this._assign(candidates_copy, min_candidates_square, val)
              );

              if (candidates_next) {
                  return candidates_next;
              }
          }

      // Rotate through the candidates backwards
      } else {
          for (let vi = min_candidates.length - 1; vi >= 0; --vi) {
              let val = min_candidates[vi];

              // TODO: Implement a non-rediculous deep copy function
              let candidates_copy = JSON.parse(JSON.stringify(candidates));
              let candidates_next = this._search(
                  this._assign(candidates_copy, min_candidates_square, val),
                  reverse
              );

              if (candidates_next) {
                  return candidates_next;
              }
          }
      }

      // If we get through all combinations of the square with the fewest
      // candidates without finding an answer, there isn't one. Return false.
      return false;
  };

  private _assign = (candidates: Record<string, string>, square: string, val: string) => {
      /* Eliminate all values, *except* for `val`, from `candidates` at
      `square` (candidates[square]), and propagate. Return the candidates map
      when finished. If a contradiciton is found, return false.

      WARNING: This will modify the contents of `candidates` directly.
      */

      // Grab a list of canidates without 'val'
      let other_vals = candidates[square].replace(val, "");

      // Loop through all other values and eliminate them from the candidates
      // at the current square, and propigate. If at any point we get a
      // contradiction, return false.
      for (let other_val of other_vals) {

          let candidates_next =
              this._eliminate(candidates, square, other_val);

          if (!candidates_next) {
              //console.log("Contradiction found by _eliminate.");
              return false;
          }
      }

      return candidates;
  };

  private _eliminate = (candidates: Record<string, string>, square: string, val: string) => {
      /* Eliminate `val` from `candidates` at `square`, (candidates[square]),
      and propagate when values or places <= 2. Return updated candidates,
      unless a contradiction is detected, in which case, return false.

      WARNING: This will modify the contents of `candidates` directly.
      */

      // If `val` has already been eliminated from candidates[square], return
      // with candidates.
      if (!this._in(val, candidates[square])) {
          return candidates;
      }

      // Remove `val` from candidates[square]
      candidates[square] = candidates[square].replace(val, '');

      // If the square has only candidate left, eliminate that value from its
      // peers
      let nr_candidates = candidates[square].length;
      if (nr_candidates === 1) {
          let target_val = candidates[square];

          for (let peer of this.SQUARE_PEERS_MAP[square]) {

              let candidates_new =
                      this._eliminate(candidates, peer, target_val);

              if (!candidates_new) {
                  return false;
              }
          }

      // Otherwise, if the square has no candidates, we have a contradiction.
      // Return false.
      } if (nr_candidates === 0) {
          return false;
      }

      // If a unit is reduced to only one place for a value, then assign it
      for (let unit of this.SQUARE_UNITS_MAP[square]) {

          let val_places: string[] = [];
          for (let unit_square of unit) {
              if (this._in(val, candidates[unit_square])) {
                  val_places.push(unit_square);
              }
          }

          // If there's no place for this value, we have a contradition!
          // return false
          if (val_places.length === 0) {
              return false;

          // Otherwise the value can only be in one place. Assign it there.
          } else if (val_places.length === 1) {
              let candidates_new =
                  this._assign(candidates, val_places[0], val);

              if (!candidates_new) {
                  return false;
              }
          }
      }

      return candidates;
  };


  // Groups
  // -------------------------------------------------------------------------
  getGroupNumber = (col: number, row: number): string => {
    const getSectionNumber = (n: number) =>
      n < 3 ? '1' :
      n < 6 ? '2' :
              '3' ;
    return getSectionNumber(col) + getSectionNumber(row)
  }

  // Square relationships
  // -------------------------------------------------------------------------
  // Squares, and their relationships with values, units, and peers.

  private _get_square_vals_map = (board: string) => {
      /* Return a map of squares -> values
      */
      let squares_vals_map: Record<string, string> = {};

      // Make sure `board` is a string of length 81
      if (board.length != this.SQUARES.length) {
          throw "Board/squares length mismatch.";

      } else {
          for (let i = 0; i < this.SQUARES.length; i++) {
              squares_vals_map[this.SQUARES[i]] = board[i];
          }
      }

      return squares_vals_map;
  };

  private _get_square_units_map = (squares: string[], units: string[]) => {
      /* Return a map of `squares` and their associated units (row, col, box)
      */
      let square_unit_map: Record<string, string[]> = {};

      // For every square...
      for (let si in squares){
          let cur_square = squares[si];

          // Maintain a list of the current square's units
          let cur_square_units: string[] = [];

          // Look through the units, and see if the current square is in it,
          // and if so, add it to the list of of the square's units.
          for (let ui in units){
              let cur_unit = units[ui];

              if(cur_unit.indexOf(cur_square) !== -1){
                  cur_square_units.push(cur_unit);
              }
          }

          // Save the current square and its units to the map
          square_unit_map[cur_square] = cur_square_units;
      }

      return square_unit_map;
  };

  private _get_square_peers_map = (squares: string[], units_map: Record<string, string[]>) => {
      /* Return a map of `squares` and their associated peers, i.e., a set of
      other squares in the square's unit.
      */
      let square_peers_map: Record<string, string[]> = {};

      // For every square...
      for (let si in squares) {
          let cur_square = squares[si];
          let cur_square_units = units_map[cur_square];

          // Maintain list of the current square's peers
          let cur_square_peers: string[] = [];

          // Look through the current square's units map...
          for (let sui of cur_square_units) {
              let cur_unit = sui;

              for (let ui of cur_unit) {
                  let cur_unit_square = ui;

                  if(cur_square_peers.indexOf(cur_unit_square) === -1 &&
                          cur_unit_square !== cur_square){
                      cur_square_peers.push(cur_unit_square);
                  }
              }
          }

          // Save the current square an its associated peers to the map
          square_peers_map[cur_square] = cur_square_peers;
      }

      return square_peers_map;
  };

  private _get_all_units = (rows: string, cols: string): string[][] => {
      /* Return a list of all units (rows, cols, boxes)
      */
      let units: string[][] = [];

      // Rows
      for (let ri of rows){
          units.push(this._cross(ri, cols));
      }

      // Columns
      for (let ci of cols){
         units.push(this._cross(rows, ci));
      }

      // Boxes
      let row_squares = ["ABC", "DEF", "GHI"];
      let col_squares = ["123", "456", "789"];
      for (let rsi in row_squares){
          for(let csi in col_squares){
              units.push(this._cross(row_squares[rsi], col_squares[csi]));
          }
      }

      return units;
  };


  // Conversions
  // -------------------------------------------------------------------------
  board_string_to_grid = (board_string: string): string[][] => {
      /* Convert a board string to a two-dimensional array
      */
      const rows = [];
      let cur_row = [];
      for (const i of board_string){
          cur_row.push(i);
          if (Number(i) % 9 == 8){
              rows.push(cur_row);
              cur_row = [];
          }
      }
      return rows;
  };

  board_grid_to_string = (board_grid: string[][]): string => {
      /* Convert a board grid to a string
      */
      let board_string = "";
      for (let r = 0; r < 9; ++r){
          for(let c = 0; c < 9; ++c){
              board_string += board_grid[r][c];
          }
      }
      return board_string;
  };


  // Utility
  // -------------------------------------------------------------------------

  print_board = (board: string) => {
      /* Print a sudoku `board` to the console.
      */

      // Assure a valid board
      let report = this.validate_board(board);
      if (report !== true) {
          throw report;
      }

      let V_PADDING = " ";  // Insert after each square
      let H_PADDING = '\n'; // Insert after each row

      let V_BOX_PADDING = "  "; // Box vertical padding
      let H_BOX_PADDING = '\n'; // Box horizontal padding

      let display_string = "";

      for (let i = 0; i < board.length; i++) {
          let square = board[i];

          // Add the square and some padding
          display_string += square + V_PADDING;

          // Vertical edge of a box, insert v. box padding
          if (i % 3 === 2){
              display_string += V_BOX_PADDING;
          }

          // End of a line, insert horiz. padding
          if (i % 9 === 8){
              display_string += H_PADDING;
          }

          // Horizontal edge of a box, insert h. box padding
          if (i % 27 === 26){
              display_string += H_BOX_PADDING;
          }
      }

      console.log(display_string);
  };

  validate_board = (board: string) => {
      /* Return if the given `board` is valid or not. If it's valid, return
      true. If it's not, return a string of the reason why it's not.
      */

      // Check for empty board
      if (!board) {
          return "Empty board";
      }

      // Invalid board length
      if (board.length !== this.NR_SQUARES) {
          return "Invalid board size. Board must be exactly " + this.NR_SQUARES +
                  " squares.";
      }

      // Check for invalid characters
      for (let i of board) {
          if (!this._in(i, this.DIGITS) && i !== this.BLANK_CHAR) {
              return "Invalid board character encountered at index " + i +
                      ": " + i;
          }
      }

      // Otherwise, we're good. Return true.
      return true;
  };

  private _cross = (a: string, b: string): string[] => {
      /* Cross product of all elements in `a` and `b`, e.g.,
      sudoku._cross("abc", "123") ->
      ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
      */
      let result = [];
      for (let ai of a){
          for (let bi of b){
              result.push(ai + bi);
          }
      }
      return result;
  };

  private _in = (v: string, seq: string | string[]) => {
      /* Return if a value `v` is in sequence `seq`.
      */
      return seq.indexOf(v) !== -1;
  };

  private _first_true = (seq: string | string[]) => {
      /* Return the first element in `seq` that is true. If no element is
      true, return false.
      */
      for (let i of seq){
          if (i) {
              return i;
          }
      }
      return false;
  };

  private _shuffle = <T>(seq: T[]): T[] => {
      /* Return a shuffled version of `seq`
      */

      // Create an array of the same size as `seq` filled with false
      let shuffled: T[] = [];
      for (let i = 0; i < seq.length; ++i){
          shuffled.push(<any>false);
      }

      for (let i of seq) {
          let ti = this._rand_range(seq.length);

          while(shuffled[ti]){
              ti = (ti + 1) > (seq.length - 1) ? 0 : (ti + 1);
          }

          shuffled[ti] = i;
      }

      return shuffled;
  };

  private _rand_range = (max: number, min?: number) => {
      /* Get a random integer in the range of `min` to `max` (non inclusive).
      If `min` not defined, default to 0. If `max` not defined, throw an
      error.
      */
      min = min ?? 0;
      if (max) {
          return Math.floor(Math.random() * (max - min)) + min;
      } else {
          throw "Range undefined";
      }
  };

  private _strip_dups = (seq: string | string[]) => {
      /* Strip duplicate values from `seq`
      */
      let seq_set = [];
      let dup_map: Record<string, boolean> = {};
      for (let e of seq) {
          if (!dup_map[e]) {
              seq_set.push(e);
              dup_map[e] = true;
          }
      }
      return seq_set;
  };

  private _force_range = (nr: number | undefined, max: number, min?: number) => {
      /* Force `nr` to be within the range from `min` to, but not including,
      `max`. `min` is optional, and will default to 0. If `nr` is undefined,
      treat it as zero.
      */
      min = min || 0
      nr = nr || 0
      if(nr < min){
          return min;
      }
      if(nr > max){
          return max;
      }
      return nr
  }
}

// const sudoku = new SudokuTS()

// const game = sudoku.generate('easy')
// game

// const result = sudoku.solve(game)
// result

// const candidates = (<string[][]>sudoku
//   .getCandidates(game))
//   .flat()

// const remaining = [...new Set(candidates.map((candidate, i) => {
//   if (game[i] === '.')
//     return candidate
// }).join('').split(''))].sort()

// console.log(candidates)
// console.log(remaining)
// sudoku.print_board(game)

import { IGameCell } from "../interface/IGameCell";
import { IGameEvent, IGamePubSub } from "../interface/IGamePubSub";
import { IGameLogic } from "../interface/IGameLogic";
import { IGameManager } from "../interface/IGameManager";
import { IGameRunner } from "../interface/IGameRunner";
import { IGameModel } from "../interface/IGameModel";
import { GameState } from "../enums/GameState";
import { GameDifficulty } from "../enums/GameDifficulty";
import { Singleton } from "@godsmack/inject";
import { GameSettings } from "./GameSettings";
import { vec2 } from "../utils/vec2";

@Singleton()
export class VanillaJsView {
  private startTime: number = 0;
  private timer?: NodeJS.Timer;
  private root: HTMLElement;
  private board: HTMLDivElement;
  private ctrl: HTMLDivElement;
  private form: HTMLFormElement;
  private diff: HTMLSelectElement;
  constructor(
    public gameManager: IGameManager,
    public logic: IGameLogic,
    public runner: IGameRunner,
    public events: IGamePubSub,
    public config: GameSettings,
  ) {
    this.board = document.querySelector<HTMLDivElement>('#board')!
    this.ctrl = document.querySelector<HTMLDivElement>('#controls')!
    this.form = document.querySelector<HTMLFormElement>('form')!
    this.diff = document.querySelector<HTMLSelectElement>('form select')!
    this.root = document.querySelector<HTMLElement>(':root')!
  }
  getCellContent(model: IGameModel, cell: IGameCell): string {
    return cell.value === '.' ? '' : cell.value;
  }
  renderCell(model: IGameModel, cell: IGameCell): string {
    const el = document.createElement('div');
    el.id = String(cell.index);

    el.innerText = this.getCellContent(model, cell)
    el.classList.add('centered-content');
    el.classList.add('cell');
    // el.classList.toggle('found',   cell.isMine && model.state === GameState.WON)
    // el.classList.toggle('tripped', cell.isMine && cell.value);
    el.classList.toggle('hint',     cell.isHint);
    el.classList.toggle('selected', model.selected === cell.index);

    return el.outerHTML;
  }
  renderCellList(model: IGameModel) {
    return `
      <div class="container">
        ${model.cells.map(cell => this.renderCell(model, cell)).join('')}
      </div>
    `;
  }
  renderScore(model: IGameModel) {
    return (
        `<h3>Game State: ${GameState[model.state]}</h3>`
      // + `<h3>Game Seed: ${state.seed}</h3>`
      + `<h3>Selected Cell: ${model.selected}</h3>`
      + `<h3>Game Difficulty: ${GameDifficulty[model.difficulty]}</h3>`
      + `<div name="time"></div>`
    );
  }
  renderBoard(model: IGameModel) {
    this.board.innerHTML = `
      ${this.renderCellList(model)}
      ${this.renderScore(model)}
    `;
  }
  renderResult(model: IGameModel) {
    this.renderBoard(model);
    this.updateElapsedTime(model);
    this.showGameResult(model);
  }
  getSecondsElapsed(model: IGameModel) {
    if (model.state === GameState.PREGAME)
      return 0;
    return (new Date().getTime() - this.startTime) / 1000;
  }
  updateElapsedTime(model: IGameModel) {
    const el = this.board.children.namedItem("time")!;
    const seconds = this.getSecondsElapsed(model);
    return el.innerHTML = `<h3>Time: ${seconds} seconds</h3>`;
  }
  showGameResult(model: IGameModel) {
    setTimeout(() => {
      if (model.state === GameState.WON)
        alert(`You won! Time taken: ${this.getSecondsElapsed(model)} seconds`);
      if (model.state === GameState.GAMEOVER)
        alert(`You Lost! Try again..`);
    });
  }
  setCellSize({cellSize: [x, y]}: GameSettings) {
    this.root.style.setProperty('--cell-width',  x + 'px');
    this.root.style.setProperty('--cell-height', y + 'px');
  }
  setCellCharacters({flagCharacter, mineCharacter}: GameSettings) {
    this.root.style.setProperty('--flag-character', flagCharacter);
    this.root.style.setProperty('--mine-character', mineCharacter);
  }
  submitHandler = (event: SubmitEvent) => {
    event.preventDefault();

    const form = new FormData(this.form);
    const difficulty = form.get('difficulty')!;

    const gameboard = this.gameManager
      .create(<any>difficulty);

    this.form.addEventListener('submit', () => {
      if (gameboard.state < GameState.WON)
        gameboard.state = GameState.GAMEOVER;
    }, { once: true });

    this.runner.playGame(gameboard);
  }
  eventHandler = (event: IGameEvent) => {
    switch (event.type) {
      case 'config-changed':
        this.setCellSize(this.config)
        this.setCellCharacters(this.config)
        break
      case 'update':
      case 'begin':
        this.renderBoard(event.payload);
        break;
      case 'end':
        this.renderResult(event.payload);
        break;
    }
  }
  registerListeners() {
    this.events
      .subscribe(this.eventHandler);

    this.form.addEventListener(
      'submit',
      this.submitHandler
    );

    return this
  }
  unregisterListeners() {
    this.events
      .unsubscribe(this.eventHandler);

    this.form.removeEventListener(
      'submit',
      this.submitHandler
    );
    return this
  }
  initializeControls() {
    this.diff.replaceChildren(
      ...(Object.keys(GameDifficulty)).map(value => {
        const el = document.createElement('option')
        el.setAttribute('value', String(value))
        el.textContent = (<any>value)
        if (value === this.config.defaultDifficulty)
          el.selected = true
        return el
      })
    )

    const cellSizeInputEl = this.ctrl
      .querySelector<HTMLInputElement>('[name=cell-size]')!

    cellSizeInputEl.value = String(this.config.cellSize[0])

    cellSizeInputEl
      .addEventListener('change', ev => {
        if (ev.target instanceof HTMLInputElement)
          this.config.set('cellSize', vec2(Number(ev.target.value)))
      })

    return this
  }
  run() {
    this.initializeControls()
    this.registerListeners()
    return this
  }
}

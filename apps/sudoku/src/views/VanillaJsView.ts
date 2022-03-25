import { Singleton } from "@godsmack/inject";
import { GameDifficulty } from "../enums/GameDifficulty";
import { IGameCell } from "../interface/IGameCell";
import { IGameEvent, IGamePubSub } from "../interface/IGamePubSub";
import { IGameLogic } from "../interface/IGameLogic";
import { IGameManager } from "../interface/IGameManager";
import { IGameRunner } from "../interface/IGameRunner";
import { IGameModel } from "../interface/IGameModel";
import { ISudokuTS } from "../interface/ISudokuTS";
import { GameSettings } from "../library/GameSettings";
import { IInputProvider } from "../interface/IInputProvider";
// import { vec2 } from "../utils/vec2";

@Singleton()
export class VanillaJsView {
  private root: HTMLElement;
  private board: HTMLDivElement;
  private form: HTMLFormElement;
  private sidebarToggle: HTMLAnchorElement;
  private restartButton: HTMLAnchorElement;
  private menu: HTMLDivElement;
  private stats: HTMLDivElement;
  private keypadBG: HTMLDivElement;
  private keypad: HTMLDivElement;
  constructor(
    public gameManager: IGameManager,
    public logic: IGameLogic,
    public sudoku: ISudokuTS,
    public runner: IGameRunner,
    public events: IGamePubSub,
    public input: IInputProvider,
    public config: GameSettings,
  ) {
    this.root = document.querySelector<HTMLElement>(':root')!
    this.board = document.querySelector<HTMLDivElement>('.sudoku_board')!
    this.form = document.querySelector<HTMLFormElement>('form')!
    this.sidebarToggle = document.querySelector<HTMLAnchorElement>('#sidebar-toggle')!
    this.restartButton = document.querySelector<HTMLAnchorElement>('#restart_button')!
    this.menu = document.querySelector<HTMLDivElement>('#sudoku_menu')!
    this.stats = document.querySelector<HTMLDivElement>('.statistics')!
    this.keypadBG = document.querySelector<HTMLDivElement>('.board_console_container')!
    this.keypad = document.querySelector<HTMLDivElement>('.board_console')!
  }
  getCellDisplayValue(model: IGameModel, cell: IGameCell): string {
    return cell.value === '.' ? '' : cell.value;
  }
  renderCell(model: IGameModel, cell: IGameCell): string {
    const el = document.createElement('div');

    el.classList.add('cell');
    el.style.height = '62px'

    const [x, y] = this.logic.getTileVectorForIndex(cell.index);
    const slPos = !!model.selected && this.logic.getTileVectorForIndex(model.selected);

    const selectedGroup = slPos && this.sudoku.getGroupNumber(slPos[0], slPos[1])
    const group = this.sudoku.getGroupNumber(x, y)

    const isSelected = model.selected === cell.index;
    const isGroup = group === selectedGroup;
    const isInline = isGroup || (slPos && (slPos[0] === x || slPos[1] === y));

    el.classList.toggle('fix', cell.isHint);
    el.classList.toggle('current', isSelected); // currently selected cell
    el.classList.toggle('group', isGroup);      // same section as selected
    el.classList.toggle('selected', isInline);  // inline with selected

    const isInvalid = cell.value !== '.' &&
      model.solution[cell.index] !== cell.value;

    el.classList.toggle('notvalid', isInvalid);

    el.classList.toggle('border_v', [3, 6].includes(x + 1));
    el.classList.toggle('border_h', [3, 6].includes(y + 1));

    el.setAttribute('x', String(x + 1))
    el.setAttribute('y', String(y + 1))
    el.setAttribute('idx', String(cell.index))

    const span = document.createElement('span')
    span.classList.toggle('samevalue',
      !!model.selected &&
      model.selected !== cell.index &&
      cell.value === model.cells[model.selected].value
    )
    span.style.lineHeight = this.config.cellSize + 'px'

    span.innerHTML = this.getCellDisplayValue(model, cell)

    el.appendChild(span)
    return el.outerHTML;
  }
  renderCellList(model: IGameModel) {
    return model.cells
      .map(cell => this.renderCell(model, cell))
      .join('')
  }
  renderBoard(model: IGameModel) {
    this.board.style.width = this.config.boardWidth + 'px';

    this.board.innerHTML = this.renderCellList(model)
  }
  renderStats(model: IGameModel) {
    const remaining = model.cells.reduce((a, v) => {
      if (!v.isHint && v.value === '.') a++
      return a
    }, 0);
    this.stats.innerHTML = `
      <b>Cells:</b> <span class="cells_complete">${remaining}/81</span> <b>Time:</b> <span class="time">${this.duration}</span>
    `
  }
  setCellSize({cellSize: [x, y]}: GameSettings) {
    this.root.style.setProperty('--cell-width',  x + 'px');
    this.root.style.setProperty('--cell-height', y + 'px');
  }
  setCellCharacters({flagCharacter, mineCharacter}: GameSettings) {
    this.root.style.setProperty('--flag-character', flagCharacter);
    this.root.style.setProperty('--mine-character', mineCharacter);
  }
  startGame = async (difficulty = GameDifficulty.easy) => {
    // console.log('startGame', difficulty);
    const gameboard = this.gameManager.create(difficulty);

    // this.form.addEventListener('submit', () => {
    //   if (gameboard.state < GameState.WON)
    //     gameboard.state = GameState.GAMEOVER;
    // }, { once: true });

    await this.runner.playGame(gameboard);
  }
  submitHandler = (event: SubmitEvent) => {
    event.preventDefault();

    const form = new FormData(this.form);
    const difficulty = form.get('difficulty')!;

    this.startGame(<any>difficulty);
  }
  onClickCell = (e: MouseEvent | TouchEvent) => {
    e.preventDefault()
    if (e.target instanceof HTMLElement) {
      if (e.target.classList.contains('cell')) {
        const idx = Number(e.target.getAttribute('idx'))
        this.input.putNextInput({ action: 'select', cellIndex: idx })
        if (!e.target.classList.contains('fix'))
          this.keypadBG.style.display = 'flex';
      }
      if (e.target.parentElement?.classList.contains('cell')) {
        const idx = Number(e.target.parentElement.getAttribute('idx'))
        this.input.putNextInput({ action: 'select', cellIndex: idx })
        if (!e.target.parentElement.classList.contains('fix'))
          this.keypadBG.style.display = 'flex';
      }
    }
  }
  onKeyPress = (e: KeyboardEvent) => {
    if (this.sudoku.DIGITS.includes(e.key)) {
      this.input.putNextInput({ action: 'keypress', key: e.key })
      this.keypadBG.style.display = 'none';
    }
  }
  timer: any
  eventHandler = (event: IGameEvent) => {
    // console.log('eventHandler', event);
    switch (event.type) {
      case 'config-changed':
        this.setCellSize(this.config)
        this.setCellCharacters(this.config)
        break
      case 'begin':
        this.timer = setInterval(() => {
          this.duration++
          this.renderStats(event.payload);
        }, 1000)
      case 'update': {
        this.renderBoard(event.payload);
        // this.renderStats(event.payload);
        break;
      }
      case 'end': {
        clearInterval(this.timer)
        this.duration = 0
      }
    }
  }
  registerListeners() {

    document.addEventListener('click', this.onClickCell)
    document.addEventListener('touchend', this.onClickCell)
    document.addEventListener('keypress', this.onKeyPress)

    this.restartButton.addEventListener('click', e => {
      e.preventDefault()
      // e.stopPropagation()

      this.menu.classList.toggle('open-sidebar')
      this.startGame()
    })

    this.sidebarToggle.addEventListener('click', e => {
      e.preventDefault()
      // e.stopPropagation()

      this.menu.classList.toggle('open-sidebar')
      // this.keypadBG.style.display = 'none';
    })

    this.keypadBG.addEventListener('click', e => {
      e.preventDefault()
      // e.stopPropagation()
      this.keypadBG.style.display = 'none';
    })

    this.keypad.addEventListener('click', this.onClickPad)
    this.keypad.addEventListener('touchstart', this.onClickPad)

    this.events.subscribe(this.eventHandler);

    return this
  }
  onClickPad = (e: MouseEvent | TouchEvent) => {
    if (!(e.target instanceof HTMLDivElement))
      return
    if (!(e.target.classList.contains('num')))
      return
    e.preventDefault()
    e.stopPropagation()
    if (e.target.innerText.match(/[1-9]/)) {
      this.input.putNextInput({
        action: 'keypress',
        key: e.target.innerText,
      })
      this.keypadBG.style.display = 'none';
    }
    else if (e.target.innerText === 'X') {
      this.input.putNextInput({
        action: 'keypress',
        key: '',
      })
      this.keypadBG.style.display = 'none';
    }
  }
  duration = 0
  unregisterListeners() {
    this.events.unsubscribe(this.eventHandler);

    document.removeEventListener('click', this.onClickCell)
    document.removeEventListener('touchend', this.onClickCell)
    document.removeEventListener('keypress', this.onKeyPress)
    return this
  }
  initializeControls() {

    // this.diff.replaceChildren(
    //   ...(Object.keys(GameDifficulty)).map(value => {
    //     const el = document.createElement('option')
    //     el.setAttribute('value', String(value))
    //     el.textContent = (<any>value)
    //     if (value === this.config.defaultDifficulty)
    //       el.selected = true
    //     return el
    //   })
    // )

    // const cellSizeInputEl = this.ctrl
    //   .querySelector<HTMLInputElement>('[name=cell-size]')!

    // cellSizeInputEl.value = String(this.config.cellSize[0])

    // cellSizeInputEl
    //   .addEventListener('change', ev => {
    //     if (ev.target instanceof HTMLInputElement)
    //       this.config.set('cellSize', vec2(Number(ev.target.value)))
    //   })

    return this
  }
  run() {
    this.initializeControls()
    this.registerListeners()
    return this
  }
}

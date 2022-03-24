import "reflect-metadata"
import { container } from "./container"
import { VanillaJsView } from "./library/VanillaJsView"
import './sudoku.nice.css'

container.resolve(VanillaJsView)
  .registerListeners()
  .startGame()

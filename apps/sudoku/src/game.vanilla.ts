import "reflect-metadata"
import { container } from "./container"
import { VanillaJsView } from "./views/VanillaJsView"
import './styles/sudoku.nice.css'

container.resolve(VanillaJsView)
  .registerListeners()
  .startGame()

import "reflect-metadata"
import { GameDifficulty } from "../enums/GameDifficulty"
import { GameState } from "../enums/GameState"
import { IGameManager } from "../interface/IGameManager"
import { IGameRunner } from "../interface/IGameRunner"
import { container } from "../container"

const runner = container
  .resolve<IGameRunner>()

const gameboard = container
  .resolve<IGameManager>()
  .create(GameDifficulty.easy)

runner
  .playGame(gameboard)
  .then(result => console.log('Result:', GameState[result.state]))

import { Container } from "@godsmack/inject";
import { IGamePubSub } from "./interface/IGamePubSub";
import { IGameManager } from "./interface/IGameManager";
import { IGameRunner } from "./interface/IGameRunner";
import { IGameLogic } from "./interface/IGameLogic";
import { IInputProvider } from "./interface/IInputProvider";
import { ISudokuTS } from "./interface/ISudokuTS";
import { DOMInputProvider } from "./library/InputProvider";
import { GameEvents } from "./library/GameEvents";
import { GameManager } from "./library/GameManager";
import { GameRunner } from "./library/GameRunner";
import { GameLogic } from "./library/GameLogic";
import { GameSettings } from "./library/GameSettings";
import { SudokuTS } from "./library/SudokuTS";
import { VanillaJsView } from "./views/VanillaJsView";

export const container = new Container()
  .addSingleton(VanillaJsView)
  .addSingleton(GameSettings)
  .addSingleton<ISudokuTS>(SudokuTS)
  .addSingleton<IGameManager>(GameManager)
  .addSingleton<IGameRunner>(GameRunner)
  .addSingleton<IGamePubSub>(GameEvents)
  .addSingleton<IGameLogic>(GameLogic)
  .addSingleton<IInputProvider>(DOMInputProvider);

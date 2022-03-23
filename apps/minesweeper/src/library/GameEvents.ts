import { Singleton } from "@godsmack/inject";
import { EventEmitter } from "events";
import { IGameEvent, IGamePubSub } from "../interface/IGamePubSub";

@Singleton()
export class GameEvents implements IGamePubSub {

    publish(event: IGameEvent): void {
        this.emitter.emit(this.GAME_EVENT, event)
    }
    subscribe(cb: (event: IGameEvent) => void): void {
        this.emitter.addListener(this.GAME_EVENT, cb)
    }
    unsubscribe(cb: (event: IGameEvent) => void): void {
        this.emitter.removeListener(this.GAME_EVENT, cb)
    }

    private readonly emitter = new EventEmitter();
    private readonly GAME_EVENT = 'game-event';
}

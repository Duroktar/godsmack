import "reflect-metadata"
import { container } from "./container"
import { VanillaJsView } from "./library/VanillaJsView"

container.resolve(VanillaJsView).run()

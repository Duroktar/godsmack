/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss":
/*!************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss ***!
  \************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto+Mono:700);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --number-of-columns: 9;\n  --cell-width: 25px;\n  --cell-height: 25px;\n}\n\nbody {\n  min-height: 100vh;\n  padding: 1px;\n  box-sizing: border-box;\n  background: teal url(https://assets.codepen.io/15664/bliss.jpg) center/cover no-repeat;\n}\n\n.centered-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#board > .container {\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(var(--number-of-columns), min-content);\n}\n\n#board > .container > .cell {\n  position: relative;\n  display: block;\n  font-family: \"Roboto Mono\", monospace;\n  width: var(--cell-width);\n  height: var(--cell-height);\n  /* border: 0.5px solid #808080; */\n  /* background-color: darkgray; */\n  background: #c0c0c0;\n  box-sizing: border-box;\n  border: solid #808080;\n  border-width: 0 1px 1px 0;\n  flex: 0 0 11.1111111111%;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n#board > .container > .cell:before {\n  content: attr(mine-count);\n  font-size: 0.9rem;\n  font-family: \"Roboto Mono\", monospace;\n  font-weight: bold;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#board > .container > .cell:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: #c0c0c0;\n  border: 2px outset #ececec;\n  font-size: 0.75rem;\n  text-align: center;\n  pointer-events: auto;\n}\n\n#board > .container > .cell.visible:after {\n  visibility: hidden;\n}\n\n#board > .container > .cell.tripped {\n  background-color: #f00;\n}\n\n#board > .container > .cell.tripped:after {\n  visibility: hidden;\n  content: attr(mine-character);\n}\n\n#board > .container > .cell.flagged:after {\n  visibility: visible !important;\n  content: attr(flag-character);\n}\n\n#board > .container > .cell.found {\n  background-color: rgba(21, 126, 21, 0.75);\n}", "",{"version":3,"sources":["webpack://./src/styles/index.scss"],"names":[],"mappings":"AAEA;EACE,sBAAA;EACA,kBAAA;EACA,mBAAA;AAAF;;AAGA;EACC,iBAAA;EAEA,YAAA;EAAc,sBAAA;EACd,sFAAA;AAAD;;AAGA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AAAF;;AAGA;EACE,aAAA;EACA,mBAAA;EACA,oEAAA;AAAF;;AAGA;EACE,kBAAA;EACA,cAAA;EAEA,qCAAA;EAEA,wBAAA;EACA,0BAAA;EAEA,iCAAA;EACA,gCAAA;EAEA,mBAAA;EACA,sBAAA;EACA,qBAAA;EACA,yBAAA;EACA,wBAAA;EACA,gBAAA;EACA,eAAA;AAJF;;AAOA;EACE,yBAAA;EACA,iBAAA;EACA,qCAAA;EACA,iBAAA;EACA,kBAAA;EACA,SAAA;EACA,QAAA;EACA,gCAAA;AAJF;;AAOA;EACE,WAAA;EACA,kBAAA;EACA,OAAA;EACA,MAAA;EACA,WAAA;EACA,YAAA;EACA,sBAAA;EACA,mBAAA;EACA,0BAAA;EACA,kBAAA;EACA,kBAAA;EACA,oBAAA;AAJF;;AAOA;EACE,kBAAA;AAJF;;AAOA;EACE,sBAAA;AAJF;;AAOA;EACE,kBAAA;EACA,6BAAA;AAJF;;AAOA;EACE,8BAAA;EACA,6BAAA;AAJF;;AAOA;EACE,yCAAA;AAJF","sourcesContent":["@import 'https://fonts.googleapis.com/css?family=Roboto+Mono:700';\n\n:root {\n  --number-of-columns: 9;\n  --cell-width: 25px;\n  --cell-height: 25px;\n}\n\nbody {\n\tmin-height: 100vh;\n\n\tpadding: 1px; box-sizing: border-box;\n\tbackground: teal url(https://assets.codepen.io/15664/bliss.jpg) center / cover no-repeat;\n}\n\n.centered-content {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n#board > .container {\n  display: grid;\n  grid-auto-flow: row;\n  grid-template-columns: repeat(var(--number-of-columns), min-content);\n}\n\n#board > .container > .cell {\n  position: relative;\n  display: block;\n\n  font-family: 'Roboto Mono', monospace;\n\n  width: var(--cell-width);\n  height: var(--cell-height);\n\n  /* border: 0.5px solid #808080; */\n  /* background-color: darkgray; */\n\n  background: #c0c0c0;\n  box-sizing: border-box;\n  border: solid #808080;\n  border-width: 0 1px 1px 0;\n  flex: 0 0 11.1111111111%;\n  overflow: hidden;\n  cursor: pointer;\n}\n\n#board > .container > .cell:before {\n  content: attr(mine-count);\n  font-size: 0.9rem;\n  font-family: \"Roboto Mono\", monospace;\n  font-weight: bold;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%);\n}\n\n#board > .container > .cell:after {\n  content: \"\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  box-sizing: border-box;\n  background: #c0c0c0;\n  border: 2px outset #ececec;\n  font-size: 0.75rem;\n  text-align: center;\n  pointer-events: auto;\n}\n\n#board > .container > .cell.visible:after {\n  visibility: hidden;\n}\n\n#board > .container > .cell.tripped {\n  background-color: #f00;\n}\n\n#board > .container > .cell.tripped:after {\n  visibility: hidden;\n  content: attr(mine-character);\n}\n\n#board > .container > .cell.flagged:after {\n  visibility: visible !important;\n  content: attr(flag-character);\n}\n\n#board > .container > .cell.found {\n  background-color: rgba(21, 126, 21, 0.75);\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/index.scss":
/*!*******************************!*\
  !*** ./src/styles/index.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./index.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/index.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_index_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/container.ts":
/*!**************************!*\
  !*** ./src/container.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.container = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameEvents_1 = __webpack_require__(/*! ./library/GameEvents */ "./src/library/GameEvents.ts");
const GameManager_1 = __webpack_require__(/*! ./library/GameManager */ "./src/library/GameManager.ts");
const GameRunner_1 = __webpack_require__(/*! ./library/GameRunner */ "./src/library/GameRunner.ts");
const GameLogic_1 = __webpack_require__(/*! ./library/GameLogic */ "./src/library/GameLogic.ts");
const InputProvider_1 = __webpack_require__(/*! ./library/InputProvider */ "./src/library/InputProvider.ts");
const VanillaJsView_1 = __webpack_require__(/*! ./library/VanillaJsView */ "./src/library/VanillaJsView.ts");
const GameSettings_1 = __webpack_require__(/*! ./library/GameSettings */ "./src/library/GameSettings.ts");
exports.container = new inject_1.Container()
    .addSingleton(VanillaJsView_1.VanillaJsView)
    .addSingleton(GameSettings_1.GameSettings)
    .addSingleton("IGameManager", GameManager_1.GameManager)
    .addSingleton("IGameRunner", GameRunner_1.GameRunner)
    .addSingleton("IGamePubSub", GameEvents_1.GameEvents)
    .addSingleton("IGameLogic", GameLogic_1.GameLogic)
    .addSingleton("IInputProvider", InputProvider_1.DOMInputProvider);


/***/ }),

/***/ "./src/enums/GameDifficulty.ts":
/*!*************************************!*\
  !*** ./src/enums/GameDifficulty.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameDifficulty = void 0;
var GameDifficulty;
(function (GameDifficulty) {
    GameDifficulty[GameDifficulty["BEGINNER"] = 0] = "BEGINNER";
    GameDifficulty[GameDifficulty["EASY"] = 1] = "EASY";
    GameDifficulty[GameDifficulty["INTERMEDIATE"] = 2] = "INTERMEDIATE";
    GameDifficulty[GameDifficulty["ADVANCED"] = 3] = "ADVANCED";
})(GameDifficulty = exports.GameDifficulty || (exports.GameDifficulty = {}));


/***/ }),

/***/ "./src/enums/GameState.ts":
/*!********************************!*\
  !*** ./src/enums/GameState.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameState = void 0;
var GameState;
(function (GameState) {
    GameState[GameState["PREGAME"] = 0] = "PREGAME";
    GameState[GameState["PLAYING"] = 1] = "PLAYING";
    GameState[GameState["PAUSED"] = 2] = "PAUSED";
    GameState[GameState["WON"] = 3] = "WON";
    GameState[GameState["GAMEOVER"] = 4] = "GAMEOVER";
})(GameState = exports.GameState || (exports.GameState = {}));


/***/ }),

/***/ "./src/game.vanilla.ts":
/*!*****************************!*\
  !*** ./src/game.vanilla.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
__webpack_require__(/*! reflect-metadata */ "./node_modules/reflect-metadata/Reflect.js");
const container_1 = __webpack_require__(/*! ./container */ "./src/container.ts");
const VanillaJsView_1 = __webpack_require__(/*! ./library/VanillaJsView */ "./src/library/VanillaJsView.ts");
container_1.container.resolve(VanillaJsView_1.VanillaJsView)
    .init()
    .playGame();


/***/ }),

/***/ "./src/interface/IGameLogic.ts":
/*!*************************************!*\
  !*** ./src/interface/IGameLogic.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/interface/IGameManager.ts":
/*!***************************************!*\
  !*** ./src/interface/IGameManager.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/interface/IGamePubSub.ts":
/*!**************************************!*\
  !*** ./src/interface/IGamePubSub.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/interface/IGameRunner.ts":
/*!**************************************!*\
  !*** ./src/interface/IGameRunner.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/interface/IInputProvider.ts":
/*!*****************************************!*\
  !*** ./src/interface/IInputProvider.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./src/library/GameEvents.ts":
/*!***********************************!*\
  !*** ./src/library/GameEvents.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameEvents = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
let GameEvents = class GameEvents {
    publish(event) {
        this.emitter.emit(this.GAME_EVENT, event);
    }
    subscribe(cb) {
        this.emitter.addListener(this.GAME_EVENT, cb);
    }
    unsubscribe(cb) {
        this.emitter.removeListener(this.GAME_EVENT, cb);
    }
    emitter = new events_1.EventEmitter();
    GAME_EVENT = 'game-event';
};
GameEvents = __decorate([
    (0, inject_1.Singleton)()
], GameEvents);
exports.GameEvents = GameEvents;


/***/ }),

/***/ "./src/library/GameLogic.ts":
/*!**********************************!*\
  !*** ./src/library/GameLogic.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameLogic = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameDifficulty_1 = __webpack_require__(/*! ../enums/GameDifficulty */ "./src/enums/GameDifficulty.ts");
const GameState_1 = __webpack_require__(/*! ../enums/GameState */ "./src/enums/GameState.ts");
const assert_1 = __webpack_require__(/*! ../utils/assert */ "./src/utils/assert.ts");
let GameLogic = class GameLogic {
    applyGameInput(input, model) {
        if (model.state < GameState_1.GameState.WON) {
            switch (input.action) {
                case 'clear': {
                    this.floodfill(model, input.cellIndex);
                    break;
                }
                case 'flag': {
                    const { flagged } = model.cells[input.cellIndex];
                    model.cells[input.cellIndex].flagged = !flagged;
                    break;
                }
                default:
                    return (0, assert_1.UNREACHABLE)(input.action);
            }
            model.state = this.getNextGameState(model);
        }
        return model;
    }
    initializeGameCells(difficulty, seed) {
        const cells = [];
        for (let i = 0; i < this.getNumberOfCells(difficulty); i++) {
            cells.push(this.createGameCell(difficulty, i, seed));
        }
        return cells;
    }
    createGameSeed(difficulty) {
        const states = new Array(this.getNumberOfCells(difficulty))
            .fill(0)
            .fill(1, 0, this.getNumberOfBombs(difficulty));
        return this.shuffle(states).join('');
    }
    getBoardSize(difficulty) {
        switch (difficulty) {
            case GameDifficulty_1.GameDifficulty.BEGINNER:
                return [9, 9];
            case GameDifficulty_1.GameDifficulty.EASY:
                return [16, 16];
            case GameDifficulty_1.GameDifficulty.INTERMEDIATE:
                return [20, 20];
            case GameDifficulty_1.GameDifficulty.ADVANCED:
                return [24, 24];
            default:
                return (0, assert_1.UNREACHABLE)(difficulty);
        }
    }
    getNumberOfBombs(difficulty) {
        switch (difficulty) {
            case GameDifficulty_1.GameDifficulty.BEGINNER:
                return 10;
            case GameDifficulty_1.GameDifficulty.EASY:
                return 40;
            case GameDifficulty_1.GameDifficulty.INTERMEDIATE:
                return 60;
            case GameDifficulty_1.GameDifficulty.ADVANCED:
                return 99;
            default:
                return (0, assert_1.UNREACHABLE)(difficulty);
        }
    }
    getGameCell(model, index) {
        return model.cells[index];
    }
    getNeighbors(difficulty, index) {
        const [maxWidth, maxHeight] = this.getBoardSize(difficulty);
        const [x, y] = this.getTileVectorForIndex(index, difficulty);
        const neighborTiles = [
            [x - 1, y - 1], [x - 0, y - 1], [x + 1, y - 1],
            [x - 1, y - 0], [x + 1, y - 0],
            [x - 1, y + 1], [x - 0, y + 1], [x + 1, y + 1],
        ];
        return neighborTiles
            .map(([x, y]) => {
            if (0 <= x && x < maxWidth && 0 <= y && y < maxHeight)
                return this.getIndexForTileVector([x, y], difficulty);
            else
                return -1;
        })
            .filter(i => i >= 0);
    }
    createGameCell(difficulty, index, seed) {
        return {
            index,
            flagged: false,
            isMine: Number(seed[index]) === 1,
            mines: this.getNumberOfNeighboringMines(difficulty, index, seed),
            visible: false,
        };
    }
    floodfill(model, cellIndex, seen = new Set()) {
        const cell = model.cells[cellIndex];
        seen.add(cellIndex);
        if (cell.mines === 0 && cell.visible === false) {
            this.getNeighbors(model.difficulty, cellIndex)
                .forEach(neighborIdx => {
                if (!seen.has(neighborIdx)) {
                    seen.add(neighborIdx);
                    const neighbor = this.getGameCell(model, neighborIdx);
                    if (neighbor.visible === false && !neighbor.isMine)
                        this.floodfill(model, neighborIdx, seen);
                }
            });
        }
        if (cell.flagged === false)
            cell.visible = true;
    }
    getNextGameState(model) {
        const remaining = model.cells
            .some(val => !(val.isMine || val.visible));
        if (!remaining) {
            return GameState_1.GameState.WON;
        }
        if (model.cells.some(o => o.isMine && o.visible)) {
            return GameState_1.GameState.GAMEOVER;
        }
        if (model.state === GameState_1.GameState.PAUSED) {
            return GameState_1.GameState.PLAYING;
        }
        return model.state;
    }
    getNumberOfCells(difficulty) {
        const [x, y] = this.getBoardSize(difficulty);
        return x * y;
    }
    getNumberOfNeighboringMines(difficulty, index, seed) {
        return this.getNeighbors(difficulty, index)
            .map(i => Number(seed[i] ?? '0'))
            .reduce((a, b) => a + b, 0);
    }
    getTileVectorForIndex(index, difficulty) {
        const [width, _] = this.getBoardSize(difficulty);
        return [Math.floor(index % width), Math.floor(index / width)];
    }
    getIndexForTileVector([x, y], difficulty) {
        const [width, _] = this.getBoardSize(difficulty);
        return y * width + x;
    }
    shuffle(array) {
        let currentIndex = array.length, randomIndex;
        // While there remain elements to shuffle...
        while (currentIndex != 0) {
            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            // And swap it with the current element.
            [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]
            ];
        }
        return array;
    }
};
GameLogic = __decorate([
    (0, inject_1.Singleton)()
], GameLogic);
exports.GameLogic = GameLogic;


/***/ }),

/***/ "./src/library/GameManager.ts":
/*!************************************!*\
  !*** ./src/library/GameManager.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameManager = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const IGameLogic_1 = __webpack_require__(/*! ../interface/IGameLogic */ "./src/interface/IGameLogic.ts");
const GameState_1 = __webpack_require__(/*! ../enums/GameState */ "./src/enums/GameState.ts");
let GameManager = class GameManager {
    logic;
    constructor(logic) {
        this.logic = logic;
    }
    create(difficulty) {
        const seed = this.logic
            .createGameSeed(difficulty);
        const cells = this.logic
            .initializeGameCells(difficulty, seed);
        const result = GameState_1.GameState.PAUSED;
        return { cells, seed, state: result, difficulty };
    }
    update(model, input) {
        return this.logic.applyGameInput(input, model);
    }
};
GameManager = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [typeof (_a = typeof IGameLogic_1.IGameLogic !== "undefined" && IGameLogic_1.IGameLogic) === "function" ? _a : Object])
], GameManager);
exports.GameManager = GameManager;
GameManager["@@godsmack/di:static-deps-prop"] = ["IGameLogic"];


/***/ }),

/***/ "./src/library/GameRunner.ts":
/*!***********************************!*\
  !*** ./src/library/GameRunner.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameRunner = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameState_1 = __webpack_require__(/*! ../enums/GameState */ "./src/enums/GameState.ts");
const IGameManager_1 = __webpack_require__(/*! ../interface/IGameManager */ "./src/interface/IGameManager.ts");
const IGameLogic_1 = __webpack_require__(/*! ../interface/IGameLogic */ "./src/interface/IGameLogic.ts");
const IGamePubSub_1 = __webpack_require__(/*! ../interface/IGamePubSub */ "./src/interface/IGamePubSub.ts");
const IInputProvider_1 = __webpack_require__(/*! ../interface/IInputProvider */ "./src/interface/IInputProvider.ts");
let GameRunner = class GameRunner {
    manager;
    logic;
    events;
    input;
    constructor(manager, logic, events, input) {
        this.manager = manager;
        this.logic = logic;
        this.events = events;
        this.input = input;
    }
    async playGame(gameboard) {
        this.emit("begin", gameboard);
        do {
            const input = await this.input.getNextInput();
            this.manager.update(gameboard, input);
            this.emit("update", gameboard);
        } while (gameboard.state < GameState_1.GameState.WON);
        this.emit("end", gameboard);
        return gameboard;
    }
    emit(type, payload) {
        this.events.publish({ type, payload });
    }
};
GameRunner = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [typeof (_a = typeof IGameManager_1.IGameManager !== "undefined" && IGameManager_1.IGameManager) === "function" ? _a : Object, typeof (_b = typeof IGameLogic_1.IGameLogic !== "undefined" && IGameLogic_1.IGameLogic) === "function" ? _b : Object, typeof (_c = typeof IGamePubSub_1.IGamePubSub !== "undefined" && IGamePubSub_1.IGamePubSub) === "function" ? _c : Object, typeof (_d = typeof IInputProvider_1.IInputProvider !== "undefined" && IInputProvider_1.IInputProvider) === "function" ? _d : Object])
], GameRunner);
exports.GameRunner = GameRunner;
GameRunner["@@godsmack/di:static-deps-prop"] = ["IGameManager", "IGameLogic", "IGamePubSub", "IInputProvider"];


/***/ }),

/***/ "./src/library/GameSettings.ts":
/*!*************************************!*\
  !*** ./src/library/GameSettings.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameSettings = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameDifficulty_1 = __webpack_require__(/*! ../enums/GameDifficulty */ "./src/enums/GameDifficulty.ts");
const IGamePubSub_1 = __webpack_require__(/*! ../interface/IGamePubSub */ "./src/interface/IGamePubSub.ts");
const vec2_1 = __webpack_require__(/*! ../utils/vec2 */ "./src/utils/vec2.ts");
let GameSettings = class GameSettings {
    events;
    constructor(events) {
        this.events = events;
    }
    cellSize = (0, vec2_1.vec2)(25);
    flagCharacter = '🚩';
    mineCharacter = '💣';
    defaultDifficulty = GameDifficulty_1.GameDifficulty.EASY;
    timerInterval = 100;
    set(key, value) {
        const self = this;
        const old = self[key];
        self[key] = value;
        this.events.publish({
            type: 'config-changed',
            payload: {
                key,
                value: {
                    old,
                    new: value,
                }
            }
        });
    }
};
GameSettings = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [typeof (_a = typeof IGamePubSub_1.IGamePubSub !== "undefined" && IGamePubSub_1.IGamePubSub) === "function" ? _a : Object])
], GameSettings);
exports.GameSettings = GameSettings;
GameSettings["@@godsmack/di:static-deps-prop"] = ["IGamePubSub"];


/***/ }),

/***/ "./src/library/InputProvider.ts":
/*!**************************************!*\
  !*** ./src/library/InputProvider.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DOMInputProvider = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const events_1 = __importDefault(__webpack_require__(/*! events */ "./node_modules/events/events.js"));
let DOMInputProvider = class DOMInputProvider {
    constructor() {
        document.addEventListener('click', this.onClickCell);
    }
    async getNextInput() {
        return new Promise((resolve) => {
            this.emitter.once('data', data => resolve(data));
        });
    }
    onClickCell = (e) => {
        if (e.target.classList.contains('cell')) {
            const idx = e.target.id;
            this.emitData({
                action: e.getModifierState('Meta') ? 'flag' : 'clear',
                cellIndex: Number(idx),
            });
        }
    };
    emitData(data) {
        this.emitter.emit('data', data);
    }
    emitter = new events_1.default();
};
DOMInputProvider = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [])
], DOMInputProvider);
exports.DOMInputProvider = DOMInputProvider;
DOMInputProvider["@@godsmack/di:static-deps-prop"] = [];


/***/ }),

/***/ "./src/library/VanillaJsView.ts":
/*!**************************************!*\
  !*** ./src/library/VanillaJsView.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VanillaJsView = void 0;
const IGamePubSub_1 = __webpack_require__(/*! ../interface/IGamePubSub */ "./src/interface/IGamePubSub.ts");
const IGameLogic_1 = __webpack_require__(/*! ../interface/IGameLogic */ "./src/interface/IGameLogic.ts");
const IGameManager_1 = __webpack_require__(/*! ../interface/IGameManager */ "./src/interface/IGameManager.ts");
const IGameRunner_1 = __webpack_require__(/*! ../interface/IGameRunner */ "./src/interface/IGameRunner.ts");
const GameState_1 = __webpack_require__(/*! ../enums/GameState */ "./src/enums/GameState.ts");
const GameDifficulty_1 = __webpack_require__(/*! ../enums/GameDifficulty */ "./src/enums/GameDifficulty.ts");
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameSettings_1 = __webpack_require__(/*! ./GameSettings */ "./src/library/GameSettings.ts");
const vec2_1 = __webpack_require__(/*! ../utils/vec2 */ "./src/utils/vec2.ts");
__webpack_require__(/*! ../styles/index.scss */ "./src/styles/index.scss");
let VanillaJsView = class VanillaJsView {
    gameManager;
    logic;
    runner;
    events;
    config;
    startTime = 0;
    timer;
    root;
    board;
    ctrl;
    form;
    diff;
    constructor(gameManager, logic, runner, events, config) {
        this.gameManager = gameManager;
        this.logic = logic;
        this.runner = runner;
        this.events = events;
        this.config = config;
        this.board = document.querySelector('#board');
        this.ctrl = document.querySelector('#controls');
        this.form = document.querySelector('form');
        this.diff = document.querySelector('form select');
        this.root = document.querySelector(':root');
    }
    getCellContent(model, cell) {
        const isFlagged = (cell) => {
            return cell.flagged && (!cell.visible && model.state !== GameState_1.GameState.WON);
        };
        const isMined = (cell) => {
            return cell.isMine && (cell.visible || model.state === GameState_1.GameState.WON);
        };
        const isNumber = (cell) => {
            return cell.mines > 0 && (cell.visible || model.state === GameState_1.GameState.WON);
        };
        return (isFlagged(cell) ? this.config.flagCharacter :
            isMined(cell) ? this.config.mineCharacter :
                isNumber(cell) ? String(cell.mines) :
                    /* otherwise */ '');
    }
    getCellColor(cell) {
        return cell.mines > 2 ? 'red' :
            cell.mines > 1 ? 'green' :
                /* otherwise */ 'blue';
    }
    renderCell(model, cell) {
        const el = document.createElement('div');
        el.id = String(cell.index);
        el.classList.add('cell');
        el.classList.toggle('flagged', cell.flagged);
        el.classList.toggle('found', cell.isMine && model.state === GameState_1.GameState.WON);
        el.classList.toggle('tripped', cell.isMine && cell.visible);
        el.classList.toggle('visible', cell.visible);
        el.setAttribute('flag-character', this.config.flagCharacter);
        el.setAttribute('mine-character', this.config.mineCharacter);
        el.setAttribute('mine-count', this.getCellContent(model, cell));
        el.style.color = this.getCellColor(cell);
        return el.outerHTML;
    }
    renderCellList(model) {
        return `
      <div class="container">
        ${model.cells.map(cell => this.renderCell(model, cell)).join('')}
      </div>
    `;
    }
    renderScore(model) {
        return (`<h3>Game State: ${GameState_1.GameState[model.state]}</h3>`
            // + `<h3>Game Seed: ${state.seed}</h3>`
            + `<h3>Game Difficulty: ${GameDifficulty_1.GameDifficulty[model.difficulty]}</h3>`
            + `<div name="time"></div>`);
    }
    renderBoard(model) {
        this.board.innerHTML = `
      ${this.renderCellList(model)}
      ${this.renderScore(model)}
    `;
    }
    renderResult(model) {
        this.renderBoard(model);
        this.updateElapsedTime(model);
        this.showGameResult(model);
    }
    getSecondsElapsed(model) {
        if (model.state === GameState_1.GameState.PREGAME)
            return 0;
        return (new Date().getTime() - this.startTime) / 1000;
    }
    updateElapsedTime(model) {
        const el = this.board.children.namedItem("time");
        const seconds = this.getSecondsElapsed(model);
        return el.innerHTML = `<h3>Time: ${seconds} seconds</h3>`;
    }
    showGameResult(model) {
        setTimeout(() => {
            if (model.state === GameState_1.GameState.WON)
                alert(`You won! Time taken: ${this.getSecondsElapsed(model)} seconds`);
            if (model.state === GameState_1.GameState.GAMEOVER)
                alert(`You Lost! Try again..`);
        });
    }
    updateColumnSize(model) {
        const [cols, _] = this.logic
            .getBoardSize(model.difficulty);
        this.setColumnSize(String(cols));
    }
    setColumnSize(cols) {
        this.root.style.setProperty('--number-of-columns', cols);
    }
    setCellSize({ cellSize: [x, y] }) {
        this.root.style.setProperty('--cell-width', x + 'px');
        this.root.style.setProperty('--cell-height', y + 'px');
    }
    setCellCharacters({ flagCharacter, mineCharacter }) {
        this.root.style.setProperty('--flag-character', flagCharacter);
        this.root.style.setProperty('--mine-character', mineCharacter);
    }
    submitHandler = (event) => {
        event.preventDefault();
        const form = new FormData(this.form);
        const difficulty = form.get('difficulty');
        this.playGame(difficulty);
    };
    playGame(difficulty = GameDifficulty_1.GameDifficulty.EASY) {
        const gameboard = this.gameManager
            .create(Number(difficulty));
        this.form.addEventListener('submit', () => {
            if (gameboard.state < GameState_1.GameState.WON)
                gameboard.state = GameState_1.GameState.GAMEOVER;
        }, { once: true });
        this.runner.playGame(gameboard);
    }
    eventHandler = (event) => {
        switch (event.type) {
            case 'config-changed':
                this.setCellSize(this.config);
                this.setCellCharacters(this.config);
                break;
            case 'begin':
                this.updateColumnSize(event.payload);
                this.renderBoard(event.payload);
                break;
            case 'update':
                this.renderBoard(event.payload);
                break;
            case 'end':
                this.renderResult(event.payload);
                break;
        }
    };
    registerListeners() {
        this.events
            .subscribe(this.eventHandler);
        this.form.addEventListener('submit', this.submitHandler);
        return this;
    }
    unregisterListeners() {
        this.events
            .unsubscribe(this.eventHandler);
        this.form.removeEventListener('submit', this.submitHandler);
        return this;
    }
    initializeControls() {
        this.diff.replaceChildren(...[0, 1, 2, 3].map(value => {
            const el = document.createElement('option');
            el.setAttribute('value', String(value));
            el.textContent = GameDifficulty_1.GameDifficulty[value];
            if (value === this.config.defaultDifficulty)
                el.selected = true;
            return el;
        }));
        const cellSizeInputEl = this.ctrl
            .querySelector('[name=cell-size]');
        cellSizeInputEl.value = String(this.config.cellSize[0]);
        cellSizeInputEl
            .addEventListener('change', ev => {
            if (ev.target instanceof HTMLInputElement)
                this.config.set('cellSize', (0, vec2_1.vec2)(Number(ev.target.value)));
        });
        return this;
    }
    init() {
        this.initializeControls();
        this.registerListeners();
        return this;
    }
};
VanillaJsView = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [typeof (_a = typeof IGameManager_1.IGameManager !== "undefined" && IGameManager_1.IGameManager) === "function" ? _a : Object, typeof (_b = typeof IGameLogic_1.IGameLogic !== "undefined" && IGameLogic_1.IGameLogic) === "function" ? _b : Object, typeof (_c = typeof IGameRunner_1.IGameRunner !== "undefined" && IGameRunner_1.IGameRunner) === "function" ? _c : Object, typeof (_d = typeof IGamePubSub_1.IGamePubSub !== "undefined" && IGamePubSub_1.IGamePubSub) === "function" ? _d : Object, typeof (_e = typeof GameSettings_1.GameSettings !== "undefined" && GameSettings_1.GameSettings) === "function" ? _e : Object])
], VanillaJsView);
exports.VanillaJsView = VanillaJsView;
VanillaJsView["@@godsmack/di:static-deps-prop"] = ["IGameManager", "IGameLogic", "IGameRunner", "IGamePubSub", "GameSettings"];


/***/ }),

/***/ "./src/utils/assert.ts":
/*!*****************************!*\
  !*** ./src/utils/assert.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UNREACHABLE = exports.ASSERT = void 0;
const ASSERT = (o) => {
    if (o === undefined || o === null)
        throw new Error(`Assertion error: ${o}`);
    return o;
};
exports.ASSERT = ASSERT;
const UNREACHABLE = (o) => {
    throw new Error(`Unreachable ${o}`);
};
exports.UNREACHABLE = UNREACHABLE;


/***/ }),

/***/ "./src/utils/vec2.ts":
/*!***************************!*\
  !*** ./src/utils/vec2.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.vec2 = void 0;
const vec2 = (x, y = x) => [x, y];
exports.vec2 = vec2;


/***/ }),

/***/ "../../packages/inject/dist/constants.js":
/*!***********************************************!*\
  !*** ../../packages/inject/dist/constants.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.staticDepsProp = exports.reflectTargetType = exports.proxyCompareKey = void 0;
exports.proxyCompareKey = '@@godsmack/di:proxy-comparison-key';
exports.reflectTargetType = '@@godsmack/di:target-singleton';
exports.staticDepsProp = '@@godsmack/di:static-deps-prop';


/***/ }),

/***/ "../../packages/inject/dist/decorators/Injectable.js":
/*!***********************************************************!*\
  !*** ../../packages/inject/dist/decorators/Injectable.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Injectable = void 0;
const InjectableDecoratorFactory_1 = __webpack_require__(/*! ./InjectableDecoratorFactory */ "../../packages/inject/dist/decorators/InjectableDecoratorFactory.js");
const Injectable = () => (0, InjectableDecoratorFactory_1.InjectableDecoratorFactory)();
exports.Injectable = Injectable;


/***/ }),

/***/ "../../packages/inject/dist/decorators/InjectableDecoratorFactory.js":
/*!***************************************************************************!*\
  !*** ../../packages/inject/dist/decorators/InjectableDecoratorFactory.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InjectableDecoratorFactory = void 0;
const constants_1 = __webpack_require__(/*! ../constants */ "../../packages/inject/dist/constants.js");
const InjectableDecoratorFactory = ({ singleton = false } = {}) => {
    return (target) => {
        const targetType = singleton ? 'singleton' : 'transient';
        Reflect.defineMetadata(constants_1.reflectTargetType, targetType, target);
    };
};
exports.InjectableDecoratorFactory = InjectableDecoratorFactory;


/***/ }),

/***/ "../../packages/inject/dist/decorators/Service.js":
/*!********************************************************!*\
  !*** ../../packages/inject/dist/decorators/Service.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Service = void 0;
const InjectableDecoratorFactory_1 = __webpack_require__(/*! ./InjectableDecoratorFactory */ "../../packages/inject/dist/decorators/InjectableDecoratorFactory.js");
const Service = () => (0, InjectableDecoratorFactory_1.InjectableDecoratorFactory)();
exports.Service = Service;


/***/ }),

/***/ "../../packages/inject/dist/decorators/Singleton.js":
/*!**********************************************************!*\
  !*** ../../packages/inject/dist/decorators/Singleton.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Singleton = void 0;
const InjectableDecoratorFactory_1 = __webpack_require__(/*! ./InjectableDecoratorFactory */ "../../packages/inject/dist/decorators/InjectableDecoratorFactory.js");
const Singleton = () => (0, InjectableDecoratorFactory_1.InjectableDecoratorFactory)({ singleton: true });
exports.Singleton = Singleton;


/***/ }),

/***/ "../../packages/inject/dist/decorators/index.js":
/*!******************************************************!*\
  !*** ../../packages/inject/dist/decorators/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Singleton = exports.Service = exports.InjectableDecoratorFactory = exports.Injectable = void 0;
var Injectable_1 = __webpack_require__(/*! ./Injectable */ "../../packages/inject/dist/decorators/Injectable.js");
Object.defineProperty(exports, "Injectable", ({ enumerable: true, get: function () { return Injectable_1.Injectable; } }));
var InjectableDecoratorFactory_1 = __webpack_require__(/*! ./InjectableDecoratorFactory */ "../../packages/inject/dist/decorators/InjectableDecoratorFactory.js");
Object.defineProperty(exports, "InjectableDecoratorFactory", ({ enumerable: true, get: function () { return InjectableDecoratorFactory_1.InjectableDecoratorFactory; } }));
var Service_1 = __webpack_require__(/*! ./Service */ "../../packages/inject/dist/decorators/Service.js");
Object.defineProperty(exports, "Service", ({ enumerable: true, get: function () { return Service_1.Service; } }));
var Singleton_1 = __webpack_require__(/*! ./Singleton */ "../../packages/inject/dist/decorators/Singleton.js");
Object.defineProperty(exports, "Singleton", ({ enumerable: true, get: function () { return Singleton_1.Singleton; } }));


/***/ }),

/***/ "../../packages/inject/dist/index.js":
/*!*******************************************!*\
  !*** ../../packages/inject/dist/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
const tslib_1 = __webpack_require__(/*! tslib */ "../../packages/inject/node_modules/tslib/tslib.es6.js");
tslib_1.__exportStar(__webpack_require__(/*! ./decorators */ "../../packages/inject/dist/decorators/index.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./interface/IContainer */ "../../packages/inject/dist/interface/IContainer.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./interface/IInjector */ "../../packages/inject/dist/interface/IInjector.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./library/Container */ "../../packages/inject/dist/library/Container.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./library/Injector */ "../../packages/inject/dist/library/Injector.js"), exports);
tslib_1.__exportStar(__webpack_require__(/*! ./types */ "../../packages/inject/dist/types.js"), exports);


/***/ }),

/***/ "../../packages/inject/dist/interface/IContainer.js":
/*!**********************************************************!*\
  !*** ../../packages/inject/dist/interface/IContainer.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../packages/inject/dist/interface/IInjector.js":
/*!*********************************************************!*\
  !*** ../../packages/inject/dist/interface/IInjector.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "../../packages/inject/dist/library/Container.js":
/*!*******************************************************!*\
  !*** ../../packages/inject/dist/library/Container.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Container = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../packages/inject/node_modules/tslib/tslib.es6.js");
const Injector_1 = __webpack_require__(/*! ./Injector */ "../../packages/inject/dist/library/Injector.js");
const proxify_1 = __webpack_require__(/*! ../proxify */ "../../packages/inject/dist/proxify.js");
class Container {
    constructor(settings = { hotSwapping: false }) {
        this.settings = settings;
        this.getInjector = () => { return this.injector; };
        this.injector = new Injector_1.Injector(settings);
    }
    resolve(target) {
        if (target == null) {
            throw new ContainerDependencyResolutionError(target);
        }
        const resolved = this.settings.hotSwapping
            ? (0, proxify_1.proxify)(this.injector, target)
            : this.injector.resolve(target);
        return resolved;
    }
    replace(type, impl) {
        return this.addService(type, impl, true);
    }
    create(target) {
        return this.injector.create(target);
    }
    addService(type, impl = type, force = false) {
        this.injector.registerType(type, impl, force);
        return this;
    }
    addServiceInstance(type, instance) {
        this.injector.registerInstance(type, instance);
        return this;
    }
    addSingleton(type, impl = type, force = false) {
        this.injector.registerType(type, impl, force);
        this.injector.registerSingleton(type);
        return this;
    }
    addSingletonInstance(type, instance, force = false) {
        this.injector.registerType(type, type, force);
        this.injector.registerInstance(type, instance);
        return this;
    }
    onExit() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            yield this.injector.destroyAll();
        });
    }
}
exports.Container = Container;
class ContainerDependencyResolutionError extends Error {
    constructor(target) {
        super(`Invalid target: ${target}`);
    }
}


/***/ }),

/***/ "../../packages/inject/dist/library/Injector.js":
/*!******************************************************!*\
  !*** ../../packages/inject/dist/library/Injector.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Injector = void 0;
const tslib_1 = __webpack_require__(/*! tslib */ "../../packages/inject/node_modules/tslib/tslib.es6.js");
const proxify_1 = __webpack_require__(/*! ../proxify */ "../../packages/inject/dist/proxify.js");
const constants_1 = __webpack_require__(/*! ../constants */ "../../packages/inject/dist/constants.js");
class Injector {
    constructor(settings = { hotSwapping: false }) {
        this.settings = settings;
        this.registerSingleton = (type) => {
            this.__singletons.add(this.getTypeName(type));
            return this;
        };
        this.registerType = (type, impl, force = false) => {
            this.__addDependency(type, (impl || type), force);
            return this;
        };
        this.registerInstance = (target, instance) => {
            const typeName = this.getTypeName(target);
            this.__instanceCache.set(typeName, instance);
            return instance;
        };
        this.upsertDependency = (target) => {
            const dependency = this.getDependency(target);
            const typeName = this.getTypeName(target);
            if (dependency != null)
                return dependency;
            if (typeof target === 'string')
                throw new InjectorDependencyNotFoundError(target);
            return this.insertDependency(typeName, target);
        };
        this.reloadDependency = (target) => {
            // this.logger.info(`Hot-Swapping "${target.name}" dependency.`)
            // TODO: this needs more testing
            const dep = this.getDependency(target);
            this.__overrideDependency(target, dep);
            return this.__replaceInstanceInCache(target);
        };
        this.getTypeName = (t) => {
            const rv = (typeof t === 'string') ? t : (t === null || t === void 0 ? void 0 : t.name) || (t === null || t === void 0 ? void 0 : t.constructor.name);
            if (!rv)
                throw new InjectorGetTypeNameError(t);
            return rv;
        };
        //#endregion
        //#region internals
        this.__dependencyCache = new Map();
        this.__instanceCache = new Map();
        this.__singletons = new Set();
        this.__logger = new Proxy(console, {
            get(target, prop, receiver) {
                return (...args) => void 0;
            }
        });
    }
    //#region api
    resolve(target) {
        const typeName = this.getTypeName(target);
        if (this.__instanceCache.has(typeName))
            return this.__instanceCache.get(typeName);
        const instance = this.create(target);
        return instance;
    }
    hasDependency(target) {
        const typename = this.getTypeName(target);
        return this.__dependencyCache.has(typename);
    }
    getDependency(target) {
        return this.__dependencyCache.get(this.getTypeName(target));
    }
    insertDependency(target, resolved, override) {
        this.__addDependency(target, resolved, override);
        return (typeof target !== 'string') ? target : resolved;
    }
    create(target) {
        // this.logger.debug('Resolving dependency =>', typeName);
        const resolved = this.upsertDependency(target);
        const { injections } = this.__resolveTokens(resolved);
        const instance = this.__createObject(resolved, injections);
        const typeName = this.getTypeName(target);
        if (this.__isSingletonInstance(typeName, resolved))
            this.__instanceCache.set(typeName, instance);
        // this.logger.debug('created', instance);
        return instance;
    }
    destroyAll() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const deps = [...this.__instanceCache.values()];
            yield Promise.allSettled(deps.map(each => this.__disposeObject(each)));
            this.__dependencyCache.clear();
            this.__instanceCache.clear();
        });
    }
    listDependencies({ sort = false, log = false } = {}) {
        let result = [...this.__dependencyCache.keys()];
        if (sort)
            result = result.sort();
        if (log)
            this.__logger.info(result);
        return result;
    }
    dependenciesAsJSON() {
        const cacheKeys = [...this.__dependencyCache.keys()];
        return cacheKeys.sort().reduce((acc, n) => {
            var _a;
            const instance = this.__dependencyCache.get(n);
            return Object.assign(Object.assign({}, acc), { [n]: (_a = instance === null || instance === void 0 ? void 0 : instance.constructor) === null || _a === void 0 ? void 0 : _a.name });
        }, {});
    }
    __resolveTokens(resolved) {
        var _a, _b, _c;
        const reflected = Reflect.getMetadata('design:paramtypes', resolved);
        // tokens are required dependencies, while injections are resolved tokens from the Injector
        const tokens = (_b = (_a = reflected === null || reflected === void 0 ? void 0 : reflected.map((o, i) => {
            var _a;
            if (o.name === 'Object') {
                // @ts-expect-error
                return (_a = resolved[constants_1.staticDepsProp]) === null || _a === void 0 ? void 0 : _a[i];
            }
            return o;
        })) === null || _a === void 0 ? void 0 : _a.filter((o) => o != null)) !== null && _b !== void 0 ? _b : [];
        if (tokens.find(o => o.name === 'Object')) {
            throw new InjectorDependencyResolutionError(resolved, tokens);
        }
        tokens.forEach((cls) => {
            if (typeof cls === 'string') {
                const impl = this.getDependency(cls);
                if (impl)
                    this.__addDependency(cls, impl);
            }
            else {
                this.__addDependency(cls, cls);
            }
        });
        const injections = ((_c = this.settings) === null || _c === void 0 ? void 0 : _c.hotSwapping)
            ? tokens.map(token => (0, proxify_1.proxify)(this, token))
            : tokens.map(token => this.resolve(token));
        return { resolved, injections };
    }
    __addDependency(target, resolvedMaybe, override = false) {
        const typeName = this.getTypeName(target);
        if (this.__dependencyCache.has(typeName)) {
            if (!override) {
                return;
            }
            // const typeName = this.getTypeName(resolvedType)
            // this.logger.debug(`Overriding => ${targetName} to => ${typeName}`)
        }
        else {
            // const typeName = this.getTypeName(resolvedType)
            // this.logger.debug(`Setting => ${targetName} to => ${typeName}`)
        }
        const resolvedType = typeof target === 'string' ? resolvedMaybe
            : resolvedMaybe == null ? target
                : /* otherwise */ resolvedMaybe;
        this.__dependencyCache.set(typeName, resolvedType);
        this.__instanceCache.delete(typeName);
    }
    __overrideDependency(target, resolved) {
        this.__addDependency(target, resolved, true);
        return (typeof target !== 'string') ? target : resolved;
    }
    __purgeInstanceFromCache(target) {
        const typeName = this.getTypeName(target);
        return this.__instanceCache.delete(typeName);
    }
    __replaceInstanceInCache(target) {
        this.__purgeInstanceFromCache(target);
        return this.resolve(target);
    }
    __isSingletonInstance(typeName, resolved) {
        return this.__singletons.has(typeName) ||
            this.__reflectTargetType(resolved) === 'singleton';
    }
    __reflectTargetType(resolved) {
        return Reflect.getMetadata(constants_1.reflectTargetType, resolved);
    }
    __createObject(target, injections) {
        this.__logger.log('creating object, typeName:', this.getTypeName(target));
        return new target(...injections);
    }
    __disposeObject(target) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // @ts-expect-error
            const fn = target === null || target === void 0 ? void 0 : target.dispose;
            return yield (fn === null || fn === void 0 ? void 0 : fn());
        });
    }
}
exports.Injector = Injector;
;
class InjectorDependencyResolutionError extends Error {
    constructor(target, tokens) {
        const error = `Unable to resolve dependencies for => ${target.name}, deps => ${tokens.map(o => o.name)}`;
        const help = `Possible misuse of @Injectable() decorator on class ${target.name}`;
        super(`${error}\n${help}`);
    }
}
class InjectorDependencyNotFoundError extends Error {
    constructor(target) {
        super(`Target not found: ${target}`);
    }
}
class InjectorGetTypeNameError extends Error {
    constructor(target) {
        super(`something fucky got passed to getTypeName => ${target}`);
    }
}


/***/ }),

/***/ "../../packages/inject/dist/proxify.js":
/*!*********************************************!*\
  !*** ../../packages/inject/dist/proxify.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compare = exports.proxify = void 0;
const constants_1 = __webpack_require__(/*! ./constants */ "../../packages/inject/dist/constants.js");
class ProxifyNullTokenError extends Error {
}
function proxify(injector, token) {
    if (token == null) {
        throw new ProxifyNullTokenError();
    }
    return new Proxy(/* injector.resolve(token) */ {}, {
        get(_, prop, receiver) {
            const target = injector.resolve(token);
            if (prop === constants_1.proxyCompareKey) {
                return target;
            }
            return Reflect.get(target, prop, receiver);
        },
    });
}
exports.proxify = proxify;
const compare = (a, b) => {
    var _a, _b, _c, _d;
    a = (_b = ((_a = a) !== null && _a !== void 0 ? _a : {})[constants_1.proxyCompareKey]) !== null && _b !== void 0 ? _b : a;
    b = (_d = ((_c = b) !== null && _c !== void 0 ? _c : {})[constants_1.proxyCompareKey]) !== null && _d !== void 0 ? _d : b;
    return Object.is(a, b);
};
exports.compare = compare;


/***/ }),

/***/ "../../packages/inject/dist/types.js":
/*!*******************************************!*\
  !*** ../../packages/inject/dist/types.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkminesweeper"] = self["webpackChunkminesweeper"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_sour-de15f0"], () => (__webpack_require__("./src/game.vanilla.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3MiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvc3R5bGVzL2luZGV4LnNjc3M/NGMzNyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvZW51bXMvR2FtZURpZmZpY3VsdHkudHMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvZW51bXMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2dhbWUudmFuaWxsYS50cyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9pbnRlcmZhY2UvSUdhbWVMb2dpYy50cyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9pbnRlcmZhY2UvSUdhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2ludGVyZmFjZS9JR2FtZVB1YlN1Yi50cyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9pbnRlcmZhY2UvSUdhbWVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvaW50ZXJmYWNlL0lJbnB1dFByb3ZpZGVyLnRzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2xpYnJhcnkvR2FtZUV2ZW50cy50cyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9saWJyYXJ5L0dhbWVMb2dpYy50cyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9saWJyYXJ5L0dhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2xpYnJhcnkvR2FtZVJ1bm5lci50cyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9saWJyYXJ5L0dhbWVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy9saWJyYXJ5L0lucHV0UHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvbGlicmFyeS9WYW5pbGxhSnNWaWV3LnRzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL3V0aWxzL2Fzc2VydC50cyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uL3NyYy91dGlscy92ZWMyLnRzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL0luamVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9pbnRlcmZhY2UvSUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9pbnRlcmZhY2UvSUluamVjdG9yLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2xpYnJhcnkvQ29udGFpbmVyLmpzIiwid2VicGFjazovL21pbmVzd2VlcGVyLy4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2xpYnJhcnkvSW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvcHJveGlmeS5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC90eXBlcy5qcyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL21pbmVzd2VlcGVyL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9taW5lc3dlZXBlci93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bytNb25vOjcwMCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIjpyb290IHtcXG4gIC0tbnVtYmVyLW9mLWNvbHVtbnM6IDk7XFxuICAtLWNlbGwtd2lkdGg6IDI1cHg7XFxuICAtLWNlbGwtaGVpZ2h0OiAyNXB4O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJhY2tncm91bmQ6IHRlYWwgdXJsKGh0dHBzOi8vYXNzZXRzLmNvZGVwZW4uaW8vMTU2NjQvYmxpc3MuanBnKSBjZW50ZXIvY292ZXIgbm8tcmVwZWF0O1xcbn1cXG5cXG4uY2VudGVyZWQtY29udGVudCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jYm9hcmQgPiAuY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWF1dG8tZmxvdzogcm93O1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQodmFyKC0tbnVtYmVyLW9mLWNvbHVtbnMpLCBtaW4tY29udGVudCk7XFxufVxcblxcbiNib2FyZCA+IC5jb250YWluZXIgPiAuY2VsbCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICB3aWR0aDogdmFyKC0tY2VsbC13aWR0aCk7XFxuICBoZWlnaHQ6IHZhcigtLWNlbGwtaGVpZ2h0KTtcXG4gIC8qIGJvcmRlcjogMC41cHggc29saWQgIzgwODA4MDsgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGRhcmtncmF5OyAqL1xcbiAgYmFja2dyb3VuZDogI2MwYzBjMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBib3JkZXI6IHNvbGlkICM4MDgwODA7XFxuICBib3JkZXItd2lkdGg6IDAgMXB4IDFweCAwO1xcbiAgZmxleDogMCAwIDExLjExMTExMTExMTElO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuI2JvYXJkID4gLmNvbnRhaW5lciA+IC5jZWxsOmJlZm9yZSB7XFxuICBjb250ZW50OiBhdHRyKG1pbmUtY291bnQpO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90byBNb25vXFxcIiwgbW9ub3NwYWNlO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiA1MCU7XFxuICB0b3A6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbn1cXG5cXG4jYm9hcmQgPiAuY29udGFpbmVyID4gLmNlbGw6YWZ0ZXIge1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgYmFja2dyb3VuZDogI2MwYzBjMDtcXG4gIGJvcmRlcjogMnB4IG91dHNldCAjZWNlY2VjO1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XFxufVxcblxcbiNib2FyZCA+IC5jb250YWluZXIgPiAuY2VsbC52aXNpYmxlOmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuI2JvYXJkID4gLmNvbnRhaW5lciA+IC5jZWxsLnRyaXBwZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwMDtcXG59XFxuXFxuI2JvYXJkID4gLmNvbnRhaW5lciA+IC5jZWxsLnRyaXBwZWQ6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbiAgY29udGVudDogYXR0cihtaW5lLWNoYXJhY3Rlcik7XFxufVxcblxcbiNib2FyZCA+IC5jb250YWluZXIgPiAuY2VsbC5mbGFnZ2VkOmFmdGVyIHtcXG4gIHZpc2liaWxpdHk6IHZpc2libGUgIWltcG9ydGFudDtcXG4gIGNvbnRlbnQ6IGF0dHIoZmxhZy1jaGFyYWN0ZXIpO1xcbn1cXG5cXG4jYm9hcmQgPiAuY29udGFpbmVyID4gLmNlbGwuZm91bmQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyMSwgMTI2LCAyMSwgMC43NSk7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvaW5kZXguc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQTtFQUNFLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUFGOztBQUdBO0VBQ0MsaUJBQUE7RUFFQSxZQUFBO0VBQWMsc0JBQUE7RUFDZCxzRkFBQTtBQUFEOztBQUdBO0VBQ0UsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFBRjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG9FQUFBO0FBQUY7O0FBR0E7RUFDRSxrQkFBQTtFQUNBLGNBQUE7RUFFQSxxQ0FBQTtFQUVBLHdCQUFBO0VBQ0EsMEJBQUE7RUFFQSxpQ0FBQTtFQUNBLGdDQUFBO0VBRUEsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxRQUFBO0VBQ0EsZ0NBQUE7QUFKRjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUFKRjs7QUFPQTtFQUNFLGtCQUFBO0FBSkY7O0FBT0E7RUFDRSxzQkFBQTtBQUpGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSw2QkFBQTtBQUpGOztBQU9BO0VBQ0UsOEJBQUE7RUFDQSw2QkFBQTtBQUpGOztBQU9BO0VBQ0UseUNBQUE7QUFKRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK01vbm86NzAwJztcXG5cXG46cm9vdCB7XFxuICAtLW51bWJlci1vZi1jb2x1bW5zOiA5O1xcbiAgLS1jZWxsLXdpZHRoOiAyNXB4O1xcbiAgLS1jZWxsLWhlaWdodDogMjVweDtcXG59XFxuXFxuYm9keSB7XFxuXFx0bWluLWhlaWdodDogMTAwdmg7XFxuXFxuXFx0cGFkZGluZzogMXB4OyBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcdGJhY2tncm91bmQ6IHRlYWwgdXJsKGh0dHBzOi8vYXNzZXRzLmNvZGVwZW4uaW8vMTU2NjQvYmxpc3MuanBnKSBjZW50ZXIgLyBjb3ZlciBuby1yZXBlYXQ7XFxufVxcblxcbi5jZW50ZXJlZC1jb250ZW50IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNib2FyZCA+IC5jb250YWluZXIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtYXV0by1mbG93OiByb3c7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCh2YXIoLS1udW1iZXItb2YtY29sdW1ucyksIG1pbi1jb250ZW50KTtcXG59XFxuXFxuI2JvYXJkID4gLmNvbnRhaW5lciA+IC5jZWxsIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcblxcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8gTW9ubycsIG1vbm9zcGFjZTtcXG5cXG4gIHdpZHRoOiB2YXIoLS1jZWxsLXdpZHRoKTtcXG4gIGhlaWdodDogdmFyKC0tY2VsbC1oZWlnaHQpO1xcblxcbiAgLyogYm9yZGVyOiAwLjVweCBzb2xpZCAjODA4MDgwOyAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogZGFya2dyYXk7ICovXFxuXFxuICBiYWNrZ3JvdW5kOiAjYzBjMGMwO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGJvcmRlcjogc29saWQgIzgwODA4MDtcXG4gIGJvcmRlci13aWR0aDogMCAxcHggMXB4IDA7XFxuICBmbGV4OiAwIDAgMTEuMTExMTExMTExMSU7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbn1cXG5cXG4jYm9hcmQgPiAuY29udGFpbmVyID4gLmNlbGw6YmVmb3JlIHtcXG4gIGNvbnRlbnQ6IGF0dHIobWluZS1jb3VudCk7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvIE1vbm9cXFwiLCBtb25vc3BhY2U7XFxuICBmb250LXdlaWdodDogYm9sZDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRvcDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbiNib2FyZCA+IC5jb250YWluZXIgPiAuY2VsbDphZnRlciB7XFxuICBjb250ZW50OiBcXFwiXFxcIjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGxlZnQ6IDA7XFxuICB0b3A6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBiYWNrZ3JvdW5kOiAjYzBjMGMwO1xcbiAgYm9yZGVyOiAycHggb3V0c2V0ICNlY2VjZWM7XFxuICBmb250LXNpemU6IDAuNzVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBwb2ludGVyLWV2ZW50czogYXV0bztcXG59XFxuXFxuI2JvYXJkID4gLmNvbnRhaW5lciA+IC5jZWxsLnZpc2libGU6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4jYm9hcmQgPiAuY29udGFpbmVyID4gLmNlbGwudHJpcHBlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjAwO1xcbn1cXG5cXG4jYm9hcmQgPiAuY29udGFpbmVyID4gLmNlbGwudHJpcHBlZDphZnRlciB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICBjb250ZW50OiBhdHRyKG1pbmUtY2hhcmFjdGVyKTtcXG59XFxuXFxuI2JvYXJkID4gLmNvbnRhaW5lciA+IC5jZWxsLmZsYWdnZWQ6YWZ0ZXIge1xcbiAgdmlzaWJpbGl0eTogdmlzaWJsZSAhaW1wb3J0YW50O1xcbiAgY29udGVudDogYXR0cihmbGFnLWNoYXJhY3Rlcik7XFxufVxcblxcbiNib2FyZCA+IC5jb250YWluZXIgPiAuY2VsbC5mb3VuZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDIxLCAxMjYsIDIxLCAwLjc1KTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vaW5kZXguc2Nzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LnNjc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udGFpbmVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVFdmVudHNfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvR2FtZUV2ZW50c1wiKTtcbmNvbnN0IEdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVNYW5hZ2VyXCIpO1xuY29uc3QgR2FtZVJ1bm5lcl8xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lUnVubmVyXCIpO1xuY29uc3QgR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVMb2dpY1wiKTtcbmNvbnN0IElucHV0UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvSW5wdXRQcm92aWRlclwiKTtcbmNvbnN0IFZhbmlsbGFKc1ZpZXdfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvVmFuaWxsYUpzVmlld1wiKTtcbmNvbnN0IEdhbWVTZXR0aW5nc18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lU2V0dGluZ3NcIik7XG5leHBvcnRzLmNvbnRhaW5lciA9IG5ldyBpbmplY3RfMS5Db250YWluZXIoKVxuICAgIC5hZGRTaW5nbGV0b24oVmFuaWxsYUpzVmlld18xLlZhbmlsbGFKc1ZpZXcpXG4gICAgLmFkZFNpbmdsZXRvbihHYW1lU2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lTWFuYWdlclwiLCBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJR2FtZVJ1bm5lclwiLCBHYW1lUnVubmVyXzEuR2FtZVJ1bm5lcilcbiAgICAuYWRkU2luZ2xldG9uKFwiSUdhbWVQdWJTdWJcIiwgR2FtZUV2ZW50c18xLkdhbWVFdmVudHMpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lTG9naWNcIiwgR2FtZUxvZ2ljXzEuR2FtZUxvZ2ljKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJSW5wdXRQcm92aWRlclwiLCBJbnB1dFByb3ZpZGVyXzEuRE9NSW5wdXRQcm92aWRlcik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZURpZmZpY3VsdHkgPSB2b2lkIDA7XG52YXIgR2FtZURpZmZpY3VsdHk7XG4oZnVuY3Rpb24gKEdhbWVEaWZmaWN1bHR5KSB7XG4gICAgR2FtZURpZmZpY3VsdHlbR2FtZURpZmZpY3VsdHlbXCJCRUdJTk5FUlwiXSA9IDBdID0gXCJCRUdJTk5FUlwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W0dhbWVEaWZmaWN1bHR5W1wiRUFTWVwiXSA9IDFdID0gXCJFQVNZXCI7XG4gICAgR2FtZURpZmZpY3VsdHlbR2FtZURpZmZpY3VsdHlbXCJJTlRFUk1FRElBVEVcIl0gPSAyXSA9IFwiSU5URVJNRURJQVRFXCI7XG4gICAgR2FtZURpZmZpY3VsdHlbR2FtZURpZmZpY3VsdHlbXCJBRFZBTkNFRFwiXSA9IDNdID0gXCJBRFZBTkNFRFwiO1xufSkoR2FtZURpZmZpY3VsdHkgPSBleHBvcnRzLkdhbWVEaWZmaWN1bHR5IHx8IChleHBvcnRzLkdhbWVEaWZmaWN1bHR5ID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lU3RhdGUgPSB2b2lkIDA7XG52YXIgR2FtZVN0YXRlO1xuKGZ1bmN0aW9uIChHYW1lU3RhdGUpIHtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiUFJFR0FNRVwiXSA9IDBdID0gXCJQUkVHQU1FXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIlBMQVlJTkdcIl0gPSAxXSA9IFwiUExBWUlOR1wiO1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJQQVVTRURcIl0gPSAyXSA9IFwiUEFVU0VEXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIldPTlwiXSA9IDNdID0gXCJXT05cIjtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiR0FNRU9WRVJcIl0gPSA0XSA9IFwiR0FNRU9WRVJcIjtcbn0pKEdhbWVTdGF0ZSA9IGV4cG9ydHMuR2FtZVN0YXRlIHx8IChleHBvcnRzLkdhbWVTdGF0ZSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgY29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9jb250YWluZXJcIik7XG5jb25zdCBWYW5pbGxhSnNWaWV3XzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L1ZhbmlsbGFKc1ZpZXdcIik7XG5jb250YWluZXJfMS5jb250YWluZXIucmVzb2x2ZShWYW5pbGxhSnNWaWV3XzEuVmFuaWxsYUpzVmlldylcbiAgICAuaW5pdCgpXG4gICAgLnBsYXlHYW1lKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVFdmVudHMgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xubGV0IEdhbWVFdmVudHMgPSBjbGFzcyBHYW1lRXZlbnRzIHtcbiAgICBwdWJsaXNoKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMuR0FNRV9FVkVOVCwgZXZlbnQpO1xuICAgIH1cbiAgICBzdWJzY3JpYmUoY2IpIHtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmFkZExpc3RlbmVyKHRoaXMuR0FNRV9FVkVOVCwgY2IpO1xuICAgIH1cbiAgICB1bnN1YnNjcmliZShjYikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIodGhpcy5HQU1FX0VWRU5ULCBjYik7XG4gICAgfVxuICAgIGVtaXR0ZXIgPSBuZXcgZXZlbnRzXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgR0FNRV9FVkVOVCA9ICdnYW1lLWV2ZW50Jztcbn07XG5HYW1lRXZlbnRzID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKVxuXSwgR2FtZUV2ZW50cyk7XG5leHBvcnRzLkdhbWVFdmVudHMgPSBHYW1lRXZlbnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVMb2dpYyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lRGlmZmljdWx0eV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVEaWZmaWN1bHR5XCIpO1xuY29uc3QgR2FtZVN0YXRlXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvR2FtZVN0YXRlXCIpO1xuY29uc3QgYXNzZXJ0XzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvYXNzZXJ0XCIpO1xubGV0IEdhbWVMb2dpYyA9IGNsYXNzIEdhbWVMb2dpYyB7XG4gICAgYXBwbHlHYW1lSW5wdXQoaW5wdXQsIG1vZGVsKSB7XG4gICAgICAgIGlmIChtb2RlbC5zdGF0ZSA8IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5XT04pIHtcbiAgICAgICAgICAgIHN3aXRjaCAoaW5wdXQuYWN0aW9uKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnY2xlYXInOiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmxvb2RmaWxsKG1vZGVsLCBpbnB1dC5jZWxsSW5kZXgpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnZmxhZyc6IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBmbGFnZ2VkIH0gPSBtb2RlbC5jZWxsc1tpbnB1dC5jZWxsSW5kZXhdO1xuICAgICAgICAgICAgICAgICAgICBtb2RlbC5jZWxsc1tpbnB1dC5jZWxsSW5kZXhdLmZsYWdnZWQgPSAhZmxhZ2dlZDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgYXNzZXJ0XzEuVU5SRUFDSEFCTEUpKGlucHV0LmFjdGlvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbC5zdGF0ZSA9IHRoaXMuZ2V0TmV4dEdhbWVTdGF0ZShtb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cbiAgICBpbml0aWFsaXplR2FtZUNlbGxzKGRpZmZpY3VsdHksIHNlZWQpIHtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmdldE51bWJlck9mQ2VsbHMoZGlmZmljdWx0eSk7IGkrKykge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh0aGlzLmNyZWF0ZUdhbWVDZWxsKGRpZmZpY3VsdHksIGksIHNlZWQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuICAgIGNyZWF0ZUdhbWVTZWVkKGRpZmZpY3VsdHkpIHtcbiAgICAgICAgY29uc3Qgc3RhdGVzID0gbmV3IEFycmF5KHRoaXMuZ2V0TnVtYmVyT2ZDZWxscyhkaWZmaWN1bHR5KSlcbiAgICAgICAgICAgIC5maWxsKDApXG4gICAgICAgICAgICAuZmlsbCgxLCAwLCB0aGlzLmdldE51bWJlck9mQm9tYnMoZGlmZmljdWx0eSkpO1xuICAgICAgICByZXR1cm4gdGhpcy5zaHVmZmxlKHN0YXRlcykuam9pbignJyk7XG4gICAgfVxuICAgIGdldEJvYXJkU2l6ZShkaWZmaWN1bHR5KSB7XG4gICAgICAgIHN3aXRjaCAoZGlmZmljdWx0eSkge1xuICAgICAgICAgICAgY2FzZSBHYW1lRGlmZmljdWx0eV8xLkdhbWVEaWZmaWN1bHR5LkJFR0lOTkVSOlxuICAgICAgICAgICAgICAgIHJldHVybiBbOSwgOV07XG4gICAgICAgICAgICBjYXNlIEdhbWVEaWZmaWN1bHR5XzEuR2FtZURpZmZpY3VsdHkuRUFTWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzE2LCAxNl07XG4gICAgICAgICAgICBjYXNlIEdhbWVEaWZmaWN1bHR5XzEuR2FtZURpZmZpY3VsdHkuSU5URVJNRURJQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiBbMjAsIDIwXTtcbiAgICAgICAgICAgIGNhc2UgR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eS5BRFZBTkNFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gWzI0LCAyNF07XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgYXNzZXJ0XzEuVU5SRUFDSEFCTEUpKGRpZmZpY3VsdHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldE51bWJlck9mQm9tYnMoZGlmZmljdWx0eSkge1xuICAgICAgICBzd2l0Y2ggKGRpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgIGNhc2UgR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eS5CRUdJTk5FUjpcbiAgICAgICAgICAgICAgICByZXR1cm4gMTA7XG4gICAgICAgICAgICBjYXNlIEdhbWVEaWZmaWN1bHR5XzEuR2FtZURpZmZpY3VsdHkuRUFTWTpcbiAgICAgICAgICAgICAgICByZXR1cm4gNDA7XG4gICAgICAgICAgICBjYXNlIEdhbWVEaWZmaWN1bHR5XzEuR2FtZURpZmZpY3VsdHkuSU5URVJNRURJQVRFOlxuICAgICAgICAgICAgICAgIHJldHVybiA2MDtcbiAgICAgICAgICAgIGNhc2UgR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eS5BRFZBTkNFRDpcbiAgICAgICAgICAgICAgICByZXR1cm4gOTk7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiAoMCwgYXNzZXJ0XzEuVU5SRUFDSEFCTEUpKGRpZmZpY3VsdHkpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEdhbWVDZWxsKG1vZGVsLCBpbmRleCkge1xuICAgICAgICByZXR1cm4gbW9kZWwuY2VsbHNbaW5kZXhdO1xuICAgIH1cbiAgICBnZXROZWlnaGJvcnMoZGlmZmljdWx0eSwgaW5kZXgpIHtcbiAgICAgICAgY29uc3QgW21heFdpZHRoLCBtYXhIZWlnaHRdID0gdGhpcy5nZXRCb2FyZFNpemUoZGlmZmljdWx0eSk7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMuZ2V0VGlsZVZlY3RvckZvckluZGV4KGluZGV4LCBkaWZmaWN1bHR5KTtcbiAgICAgICAgY29uc3QgbmVpZ2hib3JUaWxlcyA9IFtcbiAgICAgICAgICAgIFt4IC0gMSwgeSAtIDFdLCBbeCAtIDAsIHkgLSAxXSwgW3ggKyAxLCB5IC0gMV0sXG4gICAgICAgICAgICBbeCAtIDEsIHkgLSAwXSwgW3ggKyAxLCB5IC0gMF0sXG4gICAgICAgICAgICBbeCAtIDEsIHkgKyAxXSwgW3ggLSAwLCB5ICsgMV0sIFt4ICsgMSwgeSArIDFdLFxuICAgICAgICBdO1xuICAgICAgICByZXR1cm4gbmVpZ2hib3JUaWxlc1xuICAgICAgICAgICAgLm1hcCgoW3gsIHldKSA9PiB7XG4gICAgICAgICAgICBpZiAoMCA8PSB4ICYmIHggPCBtYXhXaWR0aCAmJiAwIDw9IHkgJiYgeSA8IG1heEhlaWdodClcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRJbmRleEZvclRpbGVWZWN0b3IoW3gsIHldLCBkaWZmaWN1bHR5KTtcbiAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0pXG4gICAgICAgICAgICAuZmlsdGVyKGkgPT4gaSA+PSAwKTtcbiAgICB9XG4gICAgY3JlYXRlR2FtZUNlbGwoZGlmZmljdWx0eSwgaW5kZXgsIHNlZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgZmxhZ2dlZDogZmFsc2UsXG4gICAgICAgICAgICBpc01pbmU6IE51bWJlcihzZWVkW2luZGV4XSkgPT09IDEsXG4gICAgICAgICAgICBtaW5lczogdGhpcy5nZXROdW1iZXJPZk5laWdoYm9yaW5nTWluZXMoZGlmZmljdWx0eSwgaW5kZXgsIHNlZWQpLFxuICAgICAgICAgICAgdmlzaWJsZTogZmFsc2UsXG4gICAgICAgIH07XG4gICAgfVxuICAgIGZsb29kZmlsbChtb2RlbCwgY2VsbEluZGV4LCBzZWVuID0gbmV3IFNldCgpKSB7XG4gICAgICAgIGNvbnN0IGNlbGwgPSBtb2RlbC5jZWxsc1tjZWxsSW5kZXhdO1xuICAgICAgICBzZWVuLmFkZChjZWxsSW5kZXgpO1xuICAgICAgICBpZiAoY2VsbC5taW5lcyA9PT0gMCAmJiBjZWxsLnZpc2libGUgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmdldE5laWdoYm9ycyhtb2RlbC5kaWZmaWN1bHR5LCBjZWxsSW5kZXgpXG4gICAgICAgICAgICAgICAgLmZvckVhY2gobmVpZ2hib3JJZHggPT4ge1xuICAgICAgICAgICAgICAgIGlmICghc2Vlbi5oYXMobmVpZ2hib3JJZHgpKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlZW4uYWRkKG5laWdoYm9ySWR4KTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmVpZ2hib3IgPSB0aGlzLmdldEdhbWVDZWxsKG1vZGVsLCBuZWlnaGJvcklkeCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuZWlnaGJvci52aXNpYmxlID09PSBmYWxzZSAmJiAhbmVpZ2hib3IuaXNNaW5lKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5mbG9vZGZpbGwobW9kZWwsIG5laWdoYm9ySWR4LCBzZWVuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2VsbC5mbGFnZ2VkID09PSBmYWxzZSlcbiAgICAgICAgICAgIGNlbGwudmlzaWJsZSA9IHRydWU7XG4gICAgfVxuICAgIGdldE5leHRHYW1lU3RhdGUobW9kZWwpIHtcbiAgICAgICAgY29uc3QgcmVtYWluaW5nID0gbW9kZWwuY2VsbHNcbiAgICAgICAgICAgIC5zb21lKHZhbCA9PiAhKHZhbC5pc01pbmUgfHwgdmFsLnZpc2libGUpKTtcbiAgICAgICAgaWYgKCFyZW1haW5pbmcpIHtcbiAgICAgICAgICAgIHJldHVybiBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2RlbC5jZWxscy5zb21lKG8gPT4gby5pc01pbmUgJiYgby52aXNpYmxlKSkge1xuICAgICAgICAgICAgcmV0dXJuIEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5HQU1FT1ZFUjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kZWwuc3RhdGUgPT09IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5QQVVTRUQpIHtcbiAgICAgICAgICAgIHJldHVybiBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuUExBWUlORztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWwuc3RhdGU7XG4gICAgfVxuICAgIGdldE51bWJlck9mQ2VsbHMoZGlmZmljdWx0eSkge1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmdldEJvYXJkU2l6ZShkaWZmaWN1bHR5KTtcbiAgICAgICAgcmV0dXJuIHggKiB5O1xuICAgIH1cbiAgICBnZXROdW1iZXJPZk5laWdoYm9yaW5nTWluZXMoZGlmZmljdWx0eSwgaW5kZXgsIHNlZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0TmVpZ2hib3JzKGRpZmZpY3VsdHksIGluZGV4KVxuICAgICAgICAgICAgLm1hcChpID0+IE51bWJlcihzZWVkW2ldID8/ICcwJykpXG4gICAgICAgICAgICAucmVkdWNlKChhLCBiKSA9PiBhICsgYiwgMCk7XG4gICAgfVxuICAgIGdldFRpbGVWZWN0b3JGb3JJbmRleChpbmRleCwgZGlmZmljdWx0eSkge1xuICAgICAgICBjb25zdCBbd2lkdGgsIF9dID0gdGhpcy5nZXRCb2FyZFNpemUoZGlmZmljdWx0eSk7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihpbmRleCAlIHdpZHRoKSwgTWF0aC5mbG9vcihpbmRleCAvIHdpZHRoKV07XG4gICAgfVxuICAgIGdldEluZGV4Rm9yVGlsZVZlY3RvcihbeCwgeV0sIGRpZmZpY3VsdHkpIHtcbiAgICAgICAgY29uc3QgW3dpZHRoLCBfXSA9IHRoaXMuZ2V0Qm9hcmRTaXplKGRpZmZpY3VsdHkpO1xuICAgICAgICByZXR1cm4geSAqIHdpZHRoICsgeDtcbiAgICB9XG4gICAgc2h1ZmZsZShhcnJheSkge1xuICAgICAgICBsZXQgY3VycmVudEluZGV4ID0gYXJyYXkubGVuZ3RoLCByYW5kb21JbmRleDtcbiAgICAgICAgLy8gV2hpbGUgdGhlcmUgcmVtYWluIGVsZW1lbnRzIHRvIHNodWZmbGUuLi5cbiAgICAgICAgd2hpbGUgKGN1cnJlbnRJbmRleCAhPSAwKSB7XG4gICAgICAgICAgICAvLyBQaWNrIGEgcmVtYWluaW5nIGVsZW1lbnQuLi5cbiAgICAgICAgICAgIHJhbmRvbUluZGV4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY3VycmVudEluZGV4KTtcbiAgICAgICAgICAgIGN1cnJlbnRJbmRleC0tO1xuICAgICAgICAgICAgLy8gQW5kIHN3YXAgaXQgd2l0aCB0aGUgY3VycmVudCBlbGVtZW50LlxuICAgICAgICAgICAgW2FycmF5W2N1cnJlbnRJbmRleF0sIGFycmF5W3JhbmRvbUluZGV4XV0gPSBbXG4gICAgICAgICAgICAgICAgYXJyYXlbcmFuZG9tSW5kZXhdLCBhcnJheVtjdXJyZW50SW5kZXhdXG4gICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9XG59O1xuR2FtZUxvZ2ljID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKVxuXSwgR2FtZUxvZ2ljKTtcbmV4cG9ydHMuR2FtZUxvZ2ljID0gR2FtZUxvZ2ljO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lTWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBJR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTG9naWNcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5sZXQgR2FtZU1hbmFnZXIgPSBjbGFzcyBHYW1lTWFuYWdlciB7XG4gICAgbG9naWM7XG4gICAgY29uc3RydWN0b3IobG9naWMpIHtcbiAgICAgICAgdGhpcy5sb2dpYyA9IGxvZ2ljO1xuICAgIH1cbiAgICBjcmVhdGUoZGlmZmljdWx0eSkge1xuICAgICAgICBjb25zdCBzZWVkID0gdGhpcy5sb2dpY1xuICAgICAgICAgICAgLmNyZWF0ZUdhbWVTZWVkKGRpZmZpY3VsdHkpO1xuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMubG9naWNcbiAgICAgICAgICAgIC5pbml0aWFsaXplR2FtZUNlbGxzKGRpZmZpY3VsdHksIHNlZWQpO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuUEFVU0VEO1xuICAgICAgICByZXR1cm4geyBjZWxscywgc2VlZCwgc3RhdGU6IHJlc3VsdCwgZGlmZmljdWx0eSB9O1xuICAgIH1cbiAgICB1cGRhdGUobW9kZWwsIGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2ljLmFwcGx5R2FtZUlucHV0KGlucHV0LCBtb2RlbCk7XG4gICAgfVxufTtcbkdhbWVNYW5hZ2VyID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgSUdhbWVMb2dpY18xLklHYW1lTG9naWMgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVMb2dpY18xLklHYW1lTG9naWMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBHYW1lTWFuYWdlcik7XG5leHBvcnRzLkdhbWVNYW5hZ2VyID0gR2FtZU1hbmFnZXI7XG5HYW1lTWFuYWdlcltcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lTG9naWNcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2EsIF9iLCBfYywgX2Q7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVSdW5uZXIgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgR2FtZVN0YXRlXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvR2FtZVN0YXRlXCIpO1xuY29uc3QgSUdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTWFuYWdlclwiKTtcbmNvbnN0IElHYW1lTG9naWNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVMb2dpY1wiKTtcbmNvbnN0IElHYW1lUHViU3ViXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lUHViU3ViXCIpO1xuY29uc3QgSUlucHV0UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUlucHV0UHJvdmlkZXJcIik7XG5sZXQgR2FtZVJ1bm5lciA9IGNsYXNzIEdhbWVSdW5uZXIge1xuICAgIG1hbmFnZXI7XG4gICAgbG9naWM7XG4gICAgZXZlbnRzO1xuICAgIGlucHV0O1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIsIGxvZ2ljLCBldmVudHMsIGlucHV0KSB7XG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gICAgYXN5bmMgcGxheUdhbWUoZ2FtZWJvYXJkKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImJlZ2luXCIsIGdhbWVib2FyZCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gYXdhaXQgdGhpcy5pbnB1dC5nZXROZXh0SW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci51cGRhdGUoZ2FtZWJvYXJkLCBpbnB1dCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgZ2FtZWJvYXJkKTtcbiAgICAgICAgfSB3aGlsZSAoZ2FtZWJvYXJkLnN0YXRlIDwgR2FtZVN0YXRlXzEuR2FtZVN0YXRlLldPTik7XG4gICAgICAgIHRoaXMuZW1pdChcImVuZFwiLCBnYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICAgIH1cbiAgICBlbWl0KHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCh7IHR5cGUsIHBheWxvYWQgfSk7XG4gICAgfVxufTtcbkdhbWVSdW5uZXIgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVNYW5hZ2VyXzEuSUdhbWVNYW5hZ2VyKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSUdhbWVMb2dpY18xLklHYW1lTG9naWMgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVMb2dpY18xLklHYW1lTG9naWMpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdCwgdHlwZW9mIChfYyA9IHR5cGVvZiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIpID09PSBcImZ1bmN0aW9uXCIgPyBfYyA6IE9iamVjdCwgdHlwZW9mIChfZCA9IHR5cGVvZiBJSW5wdXRQcm92aWRlcl8xLklJbnB1dFByb3ZpZGVyICE9PSBcInVuZGVmaW5lZFwiICYmIElJbnB1dFByb3ZpZGVyXzEuSUlucHV0UHJvdmlkZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfZCA6IE9iamVjdF0pXG5dLCBHYW1lUnVubmVyKTtcbmV4cG9ydHMuR2FtZVJ1bm5lciA9IEdhbWVSdW5uZXI7XG5HYW1lUnVubmVyW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW1wiSUdhbWVNYW5hZ2VyXCIsIFwiSUdhbWVMb2dpY1wiLCBcIklHYW1lUHViU3ViXCIsIFwiSUlucHV0UHJvdmlkZXJcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVTZXR0aW5ncyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lRGlmZmljdWx0eV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVEaWZmaWN1bHR5XCIpO1xuY29uc3QgSUdhbWVQdWJTdWJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVQdWJTdWJcIik7XG5jb25zdCB2ZWMyXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmVjMlwiKTtcbmxldCBHYW1lU2V0dGluZ3MgPSBjbGFzcyBHYW1lU2V0dGluZ3Mge1xuICAgIGV2ZW50cztcbiAgICBjb25zdHJ1Y3RvcihldmVudHMpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgfVxuICAgIGNlbGxTaXplID0gKDAsIHZlYzJfMS52ZWMyKSgyNSk7XG4gICAgZmxhZ0NoYXJhY3RlciA9ICfwn5qpJztcbiAgICBtaW5lQ2hhcmFjdGVyID0gJ/CfkqMnO1xuICAgIGRlZmF1bHREaWZmaWN1bHR5ID0gR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eS5FQVNZO1xuICAgIHRpbWVySW50ZXJ2YWwgPSAxMDA7XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9sZCA9IHNlbGZba2V5XTtcbiAgICAgICAgc2VsZltrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goe1xuICAgICAgICAgICAgdHlwZTogJ2NvbmZpZy1jaGFuZ2VkJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgb2xkLFxuICAgICAgICAgICAgICAgICAgICBuZXc6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbkdhbWVTZXR0aW5ncyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YikgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIEdhbWVTZXR0aW5ncyk7XG5leHBvcnRzLkdhbWVTZXR0aW5ncyA9IEdhbWVTZXR0aW5ncztcbkdhbWVTZXR0aW5nc1tcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lUHViU3ViXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ET01JbnB1dFByb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IGV2ZW50c18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJldmVudHNcIikpO1xubGV0IERPTUlucHV0UHJvdmlkZXIgPSBjbGFzcyBET01JbnB1dFByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tDZWxsKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0TmV4dElucHV0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5vbmNlKCdkYXRhJywgZGF0YSA9PiByZXNvbHZlKGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2xpY2tDZWxsID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICBjb25zdCBpZHggPSBlLnRhcmdldC5pZDtcbiAgICAgICAgICAgIHRoaXMuZW1pdERhdGEoe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogZS5nZXRNb2RpZmllclN0YXRlKCdNZXRhJykgPyAnZmxhZycgOiAnY2xlYXInLFxuICAgICAgICAgICAgICAgIGNlbGxJbmRleDogTnVtYmVyKGlkeCksXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgZW1pdERhdGEoZGF0YSkge1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnZGF0YScsIGRhdGEpO1xuICAgIH1cbiAgICBlbWl0dGVyID0gbmV3IGV2ZW50c18xLmRlZmF1bHQoKTtcbn07XG5ET01JbnB1dFByb3ZpZGVyID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBET01JbnB1dFByb3ZpZGVyKTtcbmV4cG9ydHMuRE9NSW5wdXRQcm92aWRlciA9IERPTUlucHV0UHJvdmlkZXI7XG5ET01JbnB1dFByb3ZpZGVyW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW107XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2EsIF9iLCBfYywgX2QsIF9lO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5WYW5pbGxhSnNWaWV3ID0gdm9pZCAwO1xuY29uc3QgSUdhbWVQdWJTdWJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVQdWJTdWJcIik7XG5jb25zdCBJR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTG9naWNcIik7XG5jb25zdCBJR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVNYW5hZ2VyXCIpO1xuY29uc3QgSUdhbWVSdW5uZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVSdW5uZXJcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5jb25zdCBHYW1lRGlmZmljdWx0eV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVEaWZmaWN1bHR5XCIpO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVTZXR0aW5nc18xID0gcmVxdWlyZShcIi4vR2FtZVNldHRpbmdzXCIpO1xuY29uc3QgdmVjMl8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZlYzJcIik7XG5yZXF1aXJlKFwiLi4vc3R5bGVzL2luZGV4LnNjc3NcIik7XG5sZXQgVmFuaWxsYUpzVmlldyA9IGNsYXNzIFZhbmlsbGFKc1ZpZXcge1xuICAgIGdhbWVNYW5hZ2VyO1xuICAgIGxvZ2ljO1xuICAgIHJ1bm5lcjtcbiAgICBldmVudHM7XG4gICAgY29uZmlnO1xuICAgIHN0YXJ0VGltZSA9IDA7XG4gICAgdGltZXI7XG4gICAgcm9vdDtcbiAgICBib2FyZDtcbiAgICBjdHJsO1xuICAgIGZvcm07XG4gICAgZGlmZjtcbiAgICBjb25zdHJ1Y3RvcihnYW1lTWFuYWdlciwgbG9naWMsIHJ1bm5lciwgZXZlbnRzLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGdhbWVNYW5hZ2VyO1xuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9hcmQnKTtcbiAgICAgICAgdGhpcy5jdHJsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NvbnRyb2xzJyk7XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy5kaWZmID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybSBzZWxlY3QnKTtcbiAgICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICB9XG4gICAgZ2V0Q2VsbENvbnRlbnQobW9kZWwsIGNlbGwpIHtcbiAgICAgICAgY29uc3QgaXNGbGFnZ2VkID0gKGNlbGwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmZsYWdnZWQgJiYgKCFjZWxsLnZpc2libGUgJiYgbW9kZWwuc3RhdGUgIT09IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5XT04pO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpc01pbmVkID0gKGNlbGwpID0+IHtcbiAgICAgICAgICAgIHJldHVybiBjZWxsLmlzTWluZSAmJiAoY2VsbC52aXNpYmxlIHx8IG1vZGVsLnN0YXRlID09PSBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaXNOdW1iZXIgPSAoY2VsbCkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNlbGwubWluZXMgPiAwICYmIChjZWxsLnZpc2libGUgfHwgbW9kZWwuc3RhdGUgPT09IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5XT04pO1xuICAgICAgICB9O1xuICAgICAgICByZXR1cm4gKGlzRmxhZ2dlZChjZWxsKSA/IHRoaXMuY29uZmlnLmZsYWdDaGFyYWN0ZXIgOlxuICAgICAgICAgICAgaXNNaW5lZChjZWxsKSA/IHRoaXMuY29uZmlnLm1pbmVDaGFyYWN0ZXIgOlxuICAgICAgICAgICAgICAgIGlzTnVtYmVyKGNlbGwpID8gU3RyaW5nKGNlbGwubWluZXMpIDpcbiAgICAgICAgICAgICAgICAgICAgLyogb3RoZXJ3aXNlICovICcnKTtcbiAgICB9XG4gICAgZ2V0Q2VsbENvbG9yKGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGNlbGwubWluZXMgPiAyID8gJ3JlZCcgOlxuICAgICAgICAgICAgY2VsbC5taW5lcyA+IDEgPyAnZ3JlZW4nIDpcbiAgICAgICAgICAgICAgICAvKiBvdGhlcndpc2UgKi8gJ2JsdWUnO1xuICAgIH1cbiAgICByZW5kZXJDZWxsKG1vZGVsLCBjZWxsKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLmlkID0gU3RyaW5nKGNlbGwuaW5kZXgpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2ZsYWdnZWQnLCBjZWxsLmZsYWdnZWQpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdmb3VuZCcsIGNlbGwuaXNNaW5lICYmIG1vZGVsLnN0YXRlID09PSBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgndHJpcHBlZCcsIGNlbGwuaXNNaW5lICYmIGNlbGwudmlzaWJsZSk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3Zpc2libGUnLCBjZWxsLnZpc2libGUpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2ZsYWctY2hhcmFjdGVyJywgdGhpcy5jb25maWcuZmxhZ0NoYXJhY3Rlcik7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnbWluZS1jaGFyYWN0ZXInLCB0aGlzLmNvbmZpZy5taW5lQ2hhcmFjdGVyKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdtaW5lLWNvdW50JywgdGhpcy5nZXRDZWxsQ29udGVudChtb2RlbCwgY2VsbCkpO1xuICAgICAgICBlbC5zdHlsZS5jb2xvciA9IHRoaXMuZ2V0Q2VsbENvbG9yKGNlbGwpO1xuICAgICAgICByZXR1cm4gZWwub3V0ZXJIVE1MO1xuICAgIH1cbiAgICByZW5kZXJDZWxsTGlzdChtb2RlbCkge1xuICAgICAgICByZXR1cm4gYFxuICAgICAgPGRpdiBjbGFzcz1cImNvbnRhaW5lclwiPlxuICAgICAgICAke21vZGVsLmNlbGxzLm1hcChjZWxsID0+IHRoaXMucmVuZGVyQ2VsbChtb2RlbCwgY2VsbCkpLmpvaW4oJycpfVxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgICB9XG4gICAgcmVuZGVyU2NvcmUobW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIChgPGgzPkdhbWUgU3RhdGU6ICR7R2FtZVN0YXRlXzEuR2FtZVN0YXRlW21vZGVsLnN0YXRlXX08L2gzPmBcbiAgICAgICAgICAgIC8vICsgYDxoMz5HYW1lIFNlZWQ6ICR7c3RhdGUuc2VlZH08L2gzPmBcbiAgICAgICAgICAgICsgYDxoMz5HYW1lIERpZmZpY3VsdHk6ICR7R2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eVttb2RlbC5kaWZmaWN1bHR5XX08L2gzPmBcbiAgICAgICAgICAgICsgYDxkaXYgbmFtZT1cInRpbWVcIj48L2Rpdj5gKTtcbiAgICB9XG4gICAgcmVuZGVyQm9hcmQobW9kZWwpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAke3RoaXMucmVuZGVyQ2VsbExpc3QobW9kZWwpfVxuICAgICAgJHt0aGlzLnJlbmRlclNjb3JlKG1vZGVsKX1cbiAgICBgO1xuICAgIH1cbiAgICByZW5kZXJSZXN1bHQobW9kZWwpIHtcbiAgICAgICAgdGhpcy5yZW5kZXJCb2FyZChtb2RlbCk7XG4gICAgICAgIHRoaXMudXBkYXRlRWxhcHNlZFRpbWUobW9kZWwpO1xuICAgICAgICB0aGlzLnNob3dHYW1lUmVzdWx0KG1vZGVsKTtcbiAgICB9XG4gICAgZ2V0U2Vjb25kc0VsYXBzZWQobW9kZWwpIHtcbiAgICAgICAgaWYgKG1vZGVsLnN0YXRlID09PSBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuUFJFR0FNRSlcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gdGhpcy5zdGFydFRpbWUpIC8gMTAwMDtcbiAgICB9XG4gICAgdXBkYXRlRWxhcHNlZFRpbWUobW9kZWwpIHtcbiAgICAgICAgY29uc3QgZWwgPSB0aGlzLmJvYXJkLmNoaWxkcmVuLm5hbWVkSXRlbShcInRpbWVcIik7XG4gICAgICAgIGNvbnN0IHNlY29uZHMgPSB0aGlzLmdldFNlY29uZHNFbGFwc2VkKG1vZGVsKTtcbiAgICAgICAgcmV0dXJuIGVsLmlubmVySFRNTCA9IGA8aDM+VGltZTogJHtzZWNvbmRzfSBzZWNvbmRzPC9oMz5gO1xuICAgIH1cbiAgICBzaG93R2FtZVJlc3VsdChtb2RlbCkge1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGlmIChtb2RlbC5zdGF0ZSA9PT0gR2FtZVN0YXRlXzEuR2FtZVN0YXRlLldPTilcbiAgICAgICAgICAgICAgICBhbGVydChgWW91IHdvbiEgVGltZSB0YWtlbjogJHt0aGlzLmdldFNlY29uZHNFbGFwc2VkKG1vZGVsKX0gc2Vjb25kc2ApO1xuICAgICAgICAgICAgaWYgKG1vZGVsLnN0YXRlID09PSBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuR0FNRU9WRVIpXG4gICAgICAgICAgICAgICAgYWxlcnQoYFlvdSBMb3N0ISBUcnkgYWdhaW4uLmApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgdXBkYXRlQ29sdW1uU2l6ZShtb2RlbCkge1xuICAgICAgICBjb25zdCBbY29scywgX10gPSB0aGlzLmxvZ2ljXG4gICAgICAgICAgICAuZ2V0Qm9hcmRTaXplKG1vZGVsLmRpZmZpY3VsdHkpO1xuICAgICAgICB0aGlzLnNldENvbHVtblNpemUoU3RyaW5nKGNvbHMpKTtcbiAgICB9XG4gICAgc2V0Q29sdW1uU2l6ZShjb2xzKSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1udW1iZXItb2YtY29sdW1ucycsIGNvbHMpO1xuICAgIH1cbiAgICBzZXRDZWxsU2l6ZSh7IGNlbGxTaXplOiBbeCwgeV0gfSkge1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY2VsbC13aWR0aCcsIHggKyAncHgnKTtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLWNlbGwtaGVpZ2h0JywgeSArICdweCcpO1xuICAgIH1cbiAgICBzZXRDZWxsQ2hhcmFjdGVycyh7IGZsYWdDaGFyYWN0ZXIsIG1pbmVDaGFyYWN0ZXIgfSkge1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tZmxhZy1jaGFyYWN0ZXInLCBmbGFnQ2hhcmFjdGVyKTtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLW1pbmUtY2hhcmFjdGVyJywgbWluZUNoYXJhY3Rlcik7XG4gICAgfVxuICAgIHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCBkaWZmaWN1bHR5ID0gZm9ybS5nZXQoJ2RpZmZpY3VsdHknKTtcbiAgICAgICAgdGhpcy5wbGF5R2FtZShkaWZmaWN1bHR5KTtcbiAgICB9O1xuICAgIHBsYXlHYW1lKGRpZmZpY3VsdHkgPSBHYW1lRGlmZmljdWx0eV8xLkdhbWVEaWZmaWN1bHR5LkVBU1kpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gdGhpcy5nYW1lTWFuYWdlclxuICAgICAgICAgICAgLmNyZWF0ZShOdW1iZXIoZGlmZmljdWx0eSkpO1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGdhbWVib2FyZC5zdGF0ZSA8IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5XT04pXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkLnN0YXRlID0gR2FtZVN0YXRlXzEuR2FtZVN0YXRlLkdBTUVPVkVSO1xuICAgICAgICB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIHRoaXMucnVubmVyLnBsYXlHYW1lKGdhbWVib2FyZCk7XG4gICAgfVxuICAgIGV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZy1jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxTaXplKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxDaGFyYWN0ZXJzKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JlZ2luJzpcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNvbHVtblNpemUoZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJCb2FyZChldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJCb2FyZChldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJSZXN1bHQoZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlZ2lzdGVyTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmV2ZW50c1xuICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN1Ym1pdEhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdW5yZWdpc3Rlckxpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ldmVudHNcbiAgICAgICAgICAgIC51bnN1YnNjcmliZSh0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgICAgIHRoaXMuZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN1Ym1pdEhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbnRyb2xzKCkge1xuICAgICAgICB0aGlzLmRpZmYucmVwbGFjZUNoaWxkcmVuKC4uLlswLCAxLCAyLCAzXS5tYXAodmFsdWUgPT4ge1xuICAgICAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKTtcbiAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgndmFsdWUnLCBTdHJpbmcodmFsdWUpKTtcbiAgICAgICAgICAgIGVsLnRleHRDb250ZW50ID0gR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eVt2YWx1ZV07XG4gICAgICAgICAgICBpZiAodmFsdWUgPT09IHRoaXMuY29uZmlnLmRlZmF1bHREaWZmaWN1bHR5KVxuICAgICAgICAgICAgICAgIGVsLnNlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHJldHVybiBlbDtcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCBjZWxsU2l6ZUlucHV0RWwgPSB0aGlzLmN0cmxcbiAgICAgICAgICAgIC5xdWVyeVNlbGVjdG9yKCdbbmFtZT1jZWxsLXNpemVdJyk7XG4gICAgICAgIGNlbGxTaXplSW5wdXRFbC52YWx1ZSA9IFN0cmluZyh0aGlzLmNvbmZpZy5jZWxsU2l6ZVswXSk7XG4gICAgICAgIGNlbGxTaXplSW5wdXRFbFxuICAgICAgICAgICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ID0+IHtcbiAgICAgICAgICAgIGlmIChldi50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICAgICAgICAgIHRoaXMuY29uZmlnLnNldCgnY2VsbFNpemUnLCAoMCwgdmVjMl8xLnZlYzIpKE51bWJlcihldi50YXJnZXQudmFsdWUpKSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuVmFuaWxsYUpzVmlldyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lTWFuYWdlcl8xLklHYW1lTWFuYWdlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdCwgdHlwZW9mIChfYiA9IHR5cGVvZiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYykgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0LCB0eXBlb2YgKF9jID0gdHlwZW9mIElHYW1lUnVubmVyXzEuSUdhbWVSdW5uZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVSdW5uZXJfMS5JR2FtZVJ1bm5lcikgPT09IFwiZnVuY3Rpb25cIiA/IF9jIDogT2JqZWN0LCB0eXBlb2YgKF9kID0gdHlwZW9mIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YikgPT09IFwiZnVuY3Rpb25cIiA/IF9kIDogT2JqZWN0LCB0eXBlb2YgKF9lID0gdHlwZW9mIEdhbWVTZXR0aW5nc18xLkdhbWVTZXR0aW5ncyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBHYW1lU2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MpID09PSBcImZ1bmN0aW9uXCIgPyBfZSA6IE9iamVjdF0pXG5dLCBWYW5pbGxhSnNWaWV3KTtcbmV4cG9ydHMuVmFuaWxsYUpzVmlldyA9IFZhbmlsbGFKc1ZpZXc7XG5WYW5pbGxhSnNWaWV3W1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW1wiSUdhbWVNYW5hZ2VyXCIsIFwiSUdhbWVMb2dpY1wiLCBcIklHYW1lUnVubmVyXCIsIFwiSUdhbWVQdWJTdWJcIiwgXCJHYW1lU2V0dGluZ3NcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVU5SRUFDSEFCTEUgPSBleHBvcnRzLkFTU0VSVCA9IHZvaWQgMDtcbmNvbnN0IEFTU0VSVCA9IChvKSA9PiB7XG4gICAgaWYgKG8gPT09IHVuZGVmaW5lZCB8fCBvID09PSBudWxsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFzc2VydGlvbiBlcnJvcjogJHtvfWApO1xuICAgIHJldHVybiBvO1xufTtcbmV4cG9ydHMuQVNTRVJUID0gQVNTRVJUO1xuY29uc3QgVU5SRUFDSEFCTEUgPSAobykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWFjaGFibGUgJHtvfWApO1xufTtcbmV4cG9ydHMuVU5SRUFDSEFCTEUgPSBVTlJFQUNIQUJMRTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52ZWMyID0gdm9pZCAwO1xuY29uc3QgdmVjMiA9ICh4LCB5ID0geCkgPT4gW3gsIHldO1xuZXhwb3J0cy52ZWMyID0gdmVjMjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdGF0aWNEZXBzUHJvcCA9IGV4cG9ydHMucmVmbGVjdFRhcmdldFR5cGUgPSBleHBvcnRzLnByb3h5Q29tcGFyZUtleSA9IHZvaWQgMDtcbmV4cG9ydHMucHJveHlDb21wYXJlS2V5ID0gJ0BAZ29kc21hY2svZGk6cHJveHktY29tcGFyaXNvbi1rZXknO1xuZXhwb3J0cy5yZWZsZWN0VGFyZ2V0VHlwZSA9ICdAQGdvZHNtYWNrL2RpOnRhcmdldC1zaW5nbGV0b24nO1xuZXhwb3J0cy5zdGF0aWNEZXBzUHJvcCA9ICdAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3AnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluamVjdGFibGUgPSB2b2lkIDA7XG5jb25zdCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIik7XG5jb25zdCBJbmplY3RhYmxlID0gKCkgPT4gKDAsIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkpKCk7XG5leHBvcnRzLkluamVjdGFibGUgPSBJbmplY3RhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gdm9pZCAwO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkgPSAoeyBzaW5nbGV0b24gPSBmYWxzZSB9ID0ge30pID0+IHtcbiAgICByZXR1cm4gKHRhcmdldCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRUeXBlID0gc2luZ2xldG9uID8gJ3NpbmdsZXRvbicgOiAndHJhbnNpZW50JztcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShjb25zdGFudHNfMS5yZWZsZWN0VGFyZ2V0VHlwZSwgdGFyZ2V0VHlwZSwgdGFyZ2V0KTtcbiAgICB9O1xufTtcbmV4cG9ydHMuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkgPSBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZXJ2aWNlID0gdm9pZCAwO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuY29uc3QgU2VydmljZSA9ICgpID0+ICgwLCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5KSgpO1xuZXhwb3J0cy5TZXJ2aWNlID0gU2VydmljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TaW5nbGV0b24gPSB2b2lkIDA7XG5jb25zdCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIik7XG5jb25zdCBTaW5nbGV0b24gPSAoKSA9PiAoMCwgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMS5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSkoeyBzaW5nbGV0b246IHRydWUgfSk7XG5leHBvcnRzLlNpbmdsZXRvbiA9IFNpbmdsZXRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TaW5nbGV0b24gPSBleHBvcnRzLlNlcnZpY2UgPSBleHBvcnRzLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gZXhwb3J0cy5JbmplY3RhYmxlID0gdm9pZCAwO1xudmFyIEluamVjdGFibGVfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJJbmplY3RhYmxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBJbmplY3RhYmxlXzEuSW5qZWN0YWJsZTsgfSB9KTtcbnZhciBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMS5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeTsgfSB9KTtcbnZhciBTZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2VydmljZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VydmljZV8xLlNlcnZpY2U7IH0gfSk7XG52YXIgU2luZ2xldG9uXzEgPSByZXF1aXJlKFwiLi9TaW5nbGV0b25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTaW5nbGV0b25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNpbmdsZXRvbl8xLlNpbmdsZXRvbjsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlY29yYXRvcnNcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW50ZXJmYWNlL0lDb250YWluZXJcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW50ZXJmYWNlL0lJbmplY3RvclwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9saWJyYXJ5L0NvbnRhaW5lclwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9saWJyYXJ5L0luamVjdG9yXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29udGFpbmVyID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEluamVjdG9yXzEgPSByZXF1aXJlKFwiLi9JbmplY3RvclwiKTtcbmNvbnN0IHByb3hpZnlfMSA9IHJlcXVpcmUoXCIuLi9wcm94aWZ5XCIpO1xuY2xhc3MgQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHsgaG90U3dhcHBpbmc6IGZhbHNlIH0pIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLmdldEluamVjdG9yID0gKCkgPT4geyByZXR1cm4gdGhpcy5pbmplY3RvcjsgfTtcbiAgICAgICAgdGhpcy5pbmplY3RvciA9IG5ldyBJbmplY3Rvcl8xLkluamVjdG9yKHNldHRpbmdzKTtcbiAgICB9XG4gICAgcmVzb2x2ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29udGFpbmVyRGVwZW5kZW5jeVJlc29sdXRpb25FcnJvcih0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy5zZXR0aW5ncy5ob3RTd2FwcGluZ1xuICAgICAgICAgICAgPyAoMCwgcHJveGlmeV8xLnByb3hpZnkpKHRoaXMuaW5qZWN0b3IsIHRhcmdldClcbiAgICAgICAgICAgIDogdGhpcy5pbmplY3Rvci5yZXNvbHZlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICB9XG4gICAgcmVwbGFjZSh0eXBlLCBpbXBsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFNlcnZpY2UodHlwZSwgaW1wbCwgdHJ1ZSk7XG4gICAgfVxuICAgIGNyZWF0ZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuY3JlYXRlKHRhcmdldCk7XG4gICAgfVxuICAgIGFkZFNlcnZpY2UodHlwZSwgaW1wbCA9IHR5cGUsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclR5cGUodHlwZSwgaW1wbCwgZm9yY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkU2VydmljZUluc3RhbmNlKHR5cGUsIGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJJbnN0YW5jZSh0eXBlLCBpbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRTaW5nbGV0b24odHlwZSwgaW1wbCA9IHR5cGUsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclR5cGUodHlwZSwgaW1wbCwgZm9yY2UpO1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVyU2luZ2xldG9uKHR5cGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkU2luZ2xldG9uSW5zdGFuY2UodHlwZSwgaW5zdGFuY2UsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclR5cGUodHlwZSwgdHlwZSwgZm9yY2UpO1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVySW5zdGFuY2UodHlwZSwgaW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb25FeGl0KCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLmluamVjdG9yLmRlc3Ryb3lBbGwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Db250YWluZXIgPSBDb250YWluZXI7XG5jbGFzcyBDb250YWluZXJEZXBlbmRlbmN5UmVzb2x1dGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICBzdXBlcihgSW52YWxpZCB0YXJnZXQ6ICR7dGFyZ2V0fWApO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmplY3RvciA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBwcm94aWZ5XzEgPSByZXF1aXJlKFwiLi4vcHJveGlmeVwiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHsgaG90U3dhcHBpbmc6IGZhbHNlIH0pIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyU2luZ2xldG9uID0gKHR5cGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX19zaW5nbGV0b25zLmFkZCh0aGlzLmdldFR5cGVOYW1lKHR5cGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyVHlwZSA9ICh0eXBlLCBpbXBsLCBmb3JjZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeSh0eXBlLCAoaW1wbCB8fCB0eXBlKSwgZm9yY2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnN0YW5jZSA9ICh0YXJnZXQsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlLnNldCh0eXBlTmFtZSwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwc2VydERlcGVuZGVuY3kgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5ID0gdGhpcy5nZXREZXBlbmRlbmN5KHRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEluamVjdG9yRGVwZW5kZW5jeU5vdEZvdW5kRXJyb3IodGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc2VydERlcGVuZGVuY3kodHlwZU5hbWUsIHRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVsb2FkRGVwZW5kZW5jeSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmluZm8oYEhvdC1Td2FwcGluZyBcIiR7dGFyZ2V0Lm5hbWV9XCIgZGVwZW5kZW5jeS5gKVxuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBuZWVkcyBtb3JlIHRlc3RpbmdcbiAgICAgICAgICAgIGNvbnN0IGRlcCA9IHRoaXMuZ2V0RGVwZW5kZW5jeSh0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5fX292ZXJyaWRlRGVwZW5kZW5jeSh0YXJnZXQsIGRlcCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3JlcGxhY2VJbnN0YW5jZUluQ2FjaGUodGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRUeXBlTmFtZSA9ICh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydiA9ICh0eXBlb2YgdCA9PT0gJ3N0cmluZycpID8gdCA6ICh0ID09PSBudWxsIHx8IHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHQubmFtZSkgfHwgKHQgPT09IG51bGwgfHwgdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdC5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgIGlmICghcnYpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEluamVjdG9yR2V0VHlwZU5hbWVFcnJvcih0KTtcbiAgICAgICAgICAgIHJldHVybiBydjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgICAgIC8vI3JlZ2lvbiBpbnRlcm5hbHNcbiAgICAgICAgdGhpcy5fX2RlcGVuZGVuY3lDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19zaW5nbGV0b25zID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLl9fbG9nZ2VyID0gbmV3IFByb3h5KGNvbnNvbGUsIHtcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyNyZWdpb24gYXBpXG4gICAgcmVzb2x2ZSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VDYWNoZS5oYXModHlwZU5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19pbnN0YW5jZUNhY2hlLmdldCh0eXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jcmVhdGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBoYXNEZXBlbmRlbmN5KHRhcmdldCkge1xuICAgICAgICBjb25zdCB0eXBlbmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuaGFzKHR5cGVuYW1lKTtcbiAgICB9XG4gICAgZ2V0RGVwZW5kZW5jeSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuZ2V0KHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KSk7XG4gICAgfVxuICAgIGluc2VydERlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZCwgb3ZlcnJpZGUpIHtcbiAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZCwgb3ZlcnJpZGUpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB0YXJnZXQgIT09ICdzdHJpbmcnKSA/IHRhcmdldCA6IHJlc29sdmVkO1xuICAgIH1cbiAgICBjcmVhdGUodGFyZ2V0KSB7XG4gICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdSZXNvbHZpbmcgZGVwZW5kZW5jeSA9PicsIHR5cGVOYW1lKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnVwc2VydERlcGVuZGVuY3kodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgeyBpbmplY3Rpb25zIH0gPSB0aGlzLl9fcmVzb2x2ZVRva2VucyhyZXNvbHZlZCk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fX2NyZWF0ZU9iamVjdChyZXNvbHZlZCwgaW5qZWN0aW9ucyk7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5fX2lzU2luZ2xldG9uSW5zdGFuY2UodHlwZU5hbWUsIHJlc29sdmVkKSlcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlLnNldCh0eXBlTmFtZSwgaW5zdGFuY2UpO1xuICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnY3JlYXRlZCcsIGluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBkZXN0cm95QWxsKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkZXBzID0gWy4uLnRoaXMuX19pbnN0YW5jZUNhY2hlLnZhbHVlcygpXTtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsU2V0dGxlZChkZXBzLm1hcChlYWNoID0+IHRoaXMuX19kaXNwb3NlT2JqZWN0KGVhY2gpKSk7XG4gICAgICAgICAgICB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGlzdERlcGVuZGVuY2llcyh7IHNvcnQgPSBmYWxzZSwgbG9nID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbLi4udGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5rZXlzKCldO1xuICAgICAgICBpZiAoc29ydClcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KCk7XG4gICAgICAgIGlmIChsb2cpXG4gICAgICAgICAgICB0aGlzLl9fbG9nZ2VyLmluZm8ocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZGVwZW5kZW5jaWVzQXNKU09OKCkge1xuICAgICAgICBjb25zdCBjYWNoZUtleXMgPSBbLi4udGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5rZXlzKCldO1xuICAgICAgICByZXR1cm4gY2FjaGVLZXlzLnNvcnQoKS5yZWR1Y2UoKGFjYywgbikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmdldChuKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGFjYyksIHsgW25dOiAoX2EgPSBpbnN0YW5jZSA9PT0gbnVsbCB8fCBpbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5zdGFuY2UuY29uc3RydWN0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lIH0pO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIF9fcmVzb2x2ZVRva2VucyhyZXNvbHZlZCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgY29uc3QgcmVmbGVjdGVkID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCByZXNvbHZlZCk7XG4gICAgICAgIC8vIHRva2VucyBhcmUgcmVxdWlyZWQgZGVwZW5kZW5jaWVzLCB3aGlsZSBpbmplY3Rpb25zIGFyZSByZXNvbHZlZCB0b2tlbnMgZnJvbSB0aGUgSW5qZWN0b3JcbiAgICAgICAgY29uc3QgdG9rZW5zID0gKF9iID0gKF9hID0gcmVmbGVjdGVkID09PSBudWxsIHx8IHJlZmxlY3RlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmbGVjdGVkLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKG8ubmFtZSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICAgICAgcmV0dXJuIChfYSA9IHJlc29sdmVkW2NvbnN0YW50c18xLnN0YXRpY0RlcHNQcm9wXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH0pKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZmlsdGVyKChvKSA9PiBvICE9IG51bGwpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBbXTtcbiAgICAgICAgaWYgKHRva2Vucy5maW5kKG8gPT4gby5uYW1lID09PSAnT2JqZWN0JykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBJbmplY3RvckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IocmVzb2x2ZWQsIHRva2Vucyk7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLmZvckVhY2goKGNscykgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1wbCA9IHRoaXMuZ2V0RGVwZW5kZW5jeShjbHMpO1xuICAgICAgICAgICAgICAgIGlmIChpbXBsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeShjbHMsIGltcGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3koY2xzLCBjbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5qZWN0aW9ucyA9ICgoX2MgPSB0aGlzLnNldHRpbmdzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaG90U3dhcHBpbmcpXG4gICAgICAgICAgICA/IHRva2Vucy5tYXAodG9rZW4gPT4gKDAsIHByb3hpZnlfMS5wcm94aWZ5KSh0aGlzLCB0b2tlbikpXG4gICAgICAgICAgICA6IHRva2Vucy5tYXAodG9rZW4gPT4gdGhpcy5yZXNvbHZlKHRva2VuKSk7XG4gICAgICAgIHJldHVybiB7IHJlc29sdmVkLCBpbmplY3Rpb25zIH07XG4gICAgfVxuICAgIF9fYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkTWF5YmUsIG92ZXJyaWRlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmhhcyh0eXBlTmFtZSkpIHtcbiAgICAgICAgICAgIGlmICghb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUocmVzb2x2ZWRUeXBlKVxuICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoYE92ZXJyaWRpbmcgPT4gJHt0YXJnZXROYW1lfSB0byA9PiAke3R5cGVOYW1lfWApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUocmVzb2x2ZWRUeXBlKVxuICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoYFNldHRpbmcgPT4gJHt0YXJnZXROYW1lfSB0byA9PiAke3R5cGVOYW1lfWApXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRUeXBlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyByZXNvbHZlZE1heWJlXG4gICAgICAgICAgICA6IHJlc29sdmVkTWF5YmUgPT0gbnVsbCA/IHRhcmdldFxuICAgICAgICAgICAgICAgIDogLyogb3RoZXJ3aXNlICovIHJlc29sdmVkTWF5YmU7XG4gICAgICAgIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuc2V0KHR5cGVOYW1lLCByZXNvbHZlZFR5cGUpO1xuICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5kZWxldGUodHlwZU5hbWUpO1xuICAgIH1cbiAgICBfX292ZXJyaWRlRGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkKSB7XG4gICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQsIHRydWUpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB0YXJnZXQgIT09ICdzdHJpbmcnKSA/IHRhcmdldCA6IHJlc29sdmVkO1xuICAgIH1cbiAgICBfX3B1cmdlSW5zdGFuY2VGcm9tQ2FjaGUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fX2luc3RhbmNlQ2FjaGUuZGVsZXRlKHR5cGVOYW1lKTtcbiAgICB9XG4gICAgX19yZXBsYWNlSW5zdGFuY2VJbkNhY2hlKHRhcmdldCkge1xuICAgICAgICB0aGlzLl9fcHVyZ2VJbnN0YW5jZUZyb21DYWNoZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKHRhcmdldCk7XG4gICAgfVxuICAgIF9faXNTaW5nbGV0b25JbnN0YW5jZSh0eXBlTmFtZSwgcmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zaW5nbGV0b25zLmhhcyh0eXBlTmFtZSkgfHxcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0VGFyZ2V0VHlwZShyZXNvbHZlZCkgPT09ICdzaW5nbGV0b24nO1xuICAgIH1cbiAgICBfX3JlZmxlY3RUYXJnZXRUeXBlKHJlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGNvbnN0YW50c18xLnJlZmxlY3RUYXJnZXRUeXBlLCByZXNvbHZlZCk7XG4gICAgfVxuICAgIF9fY3JlYXRlT2JqZWN0KHRhcmdldCwgaW5qZWN0aW9ucykge1xuICAgICAgICB0aGlzLl9fbG9nZ2VyLmxvZygnY3JlYXRpbmcgb2JqZWN0LCB0eXBlTmFtZTonLCB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCkpO1xuICAgICAgICByZXR1cm4gbmV3IHRhcmdldCguLi5pbmplY3Rpb25zKTtcbiAgICB9XG4gICAgX19kaXNwb3NlT2JqZWN0KHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICBjb25zdCBmbiA9IHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC5kaXNwb3NlO1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIChmbiA9PT0gbnVsbCB8fCBmbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm4oKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuSW5qZWN0b3IgPSBJbmplY3RvcjtcbjtcbmNsYXNzIEluamVjdG9yRGVwZW5kZW5jeVJlc29sdXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHRva2Vucykge1xuICAgICAgICBjb25zdCBlcnJvciA9IGBVbmFibGUgdG8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMgZm9yID0+ICR7dGFyZ2V0Lm5hbWV9LCBkZXBzID0+ICR7dG9rZW5zLm1hcChvID0+IG8ubmFtZSl9YDtcbiAgICAgICAgY29uc3QgaGVscCA9IGBQb3NzaWJsZSBtaXN1c2Ugb2YgQEluamVjdGFibGUoKSBkZWNvcmF0b3Igb24gY2xhc3MgJHt0YXJnZXQubmFtZX1gO1xuICAgICAgICBzdXBlcihgJHtlcnJvcn1cXG4ke2hlbHB9YCk7XG4gICAgfVxufVxuY2xhc3MgSW5qZWN0b3JEZXBlbmRlbmN5Tm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoYFRhcmdldCBub3QgZm91bmQ6ICR7dGFyZ2V0fWApO1xuICAgIH1cbn1cbmNsYXNzIEluamVjdG9yR2V0VHlwZU5hbWVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoYHNvbWV0aGluZyBmdWNreSBnb3QgcGFzc2VkIHRvIGdldFR5cGVOYW1lID0+ICR7dGFyZ2V0fWApO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb21wYXJlID0gZXhwb3J0cy5wcm94aWZ5ID0gdm9pZCAwO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5jbGFzcyBQcm94aWZ5TnVsbFRva2VuRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5mdW5jdGlvbiBwcm94aWZ5KGluamVjdG9yLCB0b2tlbikge1xuICAgIGlmICh0b2tlbiA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBQcm94aWZ5TnVsbFRva2VuRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm94eSgvKiBpbmplY3Rvci5yZXNvbHZlKHRva2VuKSAqLyB7fSwge1xuICAgICAgICBnZXQoXywgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGluamVjdG9yLnJlc29sdmUodG9rZW4pO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09IGNvbnN0YW50c18xLnByb3h5Q29tcGFyZUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnRzLnByb3hpZnkgPSBwcm94aWZ5O1xuY29uc3QgY29tcGFyZSA9IChhLCBiKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGEgPSAoX2IgPSAoKF9hID0gYSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge30pW2NvbnN0YW50c18xLnByb3h5Q29tcGFyZUtleV0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGE7XG4gICAgYiA9IChfZCA9ICgoX2MgPSBiKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiB7fSlbY29uc3RhbnRzXzEucHJveHlDb21wYXJlS2V5XSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogYjtcbiAgICByZXR1cm4gT2JqZWN0LmlzKGEsIGIpO1xufTtcbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua21pbmVzd2VlcGVyXCJdID0gc2VsZltcIndlYnBhY2tDaHVua21pbmVzd2VlcGVyXCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX3NvdXItZGUxNWYwXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWUudmFuaWxsYS50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
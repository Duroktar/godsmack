/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/sudoku.nice.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/sudoku.nice.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "H1 {\n  background:black;\n  color:white;\n  margin:0px 0px 2px 0px;\n  font-size:20px;\n  padding:2px 1px 5px 1px;\n  text-align:center;\n}\n\nbody {\n  font-family:verdana,helvetica,arial,sans-serif;\n  border:0px; margin:0px; padding:0px;\n\n  background:url(\n      " + ___CSS_LOADER_URL_REPLACEMENT_0___ + "\n  ) repeat;\n}\n\n/* board */\n.sudoku_board {\n  margin:6px auto;\n\n  overflow: hidden;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.sudoku_board .cell {\n  width:11.11%;\n  /* display: inline-block; */\n  float: left;\n  cursor:pointer;\n  text-align: center;\n  overflow: hidden;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n\n  background:white;\n}\n\n.sudoku_board .cell.border_h {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset 0px -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_h.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 black, inset 0px -2px 0 black;\n}\n\n.sudoku_board .cell span {\n  color:#2c3e50;\n  font-size:14px;\n  text-align:middle;\n}\n\n.sudoku_board .cell.selected, .sudoku_board .cell.selected.fix {\n  background:#FFE;\n}\n\n.sudoku_board .cell.selected.current {\n  position:relative;\n  background: #3498db;\n  font-weight:bold;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.sudoku_board .cell.selected.current span {\n  color:white;\n}\n\n.sudoku_board .cell.selected.group {\n  color:blue;\n}\n\n.sudoku_board .cell span.samevalue, .sudoku_board .cell.fix span.samevalue {\n  font-weight:bold;\n  color:#3498db;\n}\n\n.sudoku_board .cell.notvalid, .sudoku_board .cell.selected.notvalid{\n  font-weight:bold;\n  color:white;;\n  background:#e74c3c;\n}\n\n.sudoku_board .cell.fix {\n  background:#ecf0f1;\n  cursor:not-allowed;\n}\n\n.sudoku_board .cell.fix span {\ncolor:#7f8c8d;\n}\n\n.sudoku_board .cell .solution {\nfont-size:10px;\ncolor:#d35400;\n}\n\n.sudoku_board .cell .note {\n  color:#bdc3c7;\n  width:50%;\n  height:50%;\n  display: inline-block;\n  float:left;\n  text-align:center;\n  font-size:14px;\n\n  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.gameover_container .gameover {\n  color:white;\n  font-weight:bold;\n    text-align:center;\n\n  display:block;\n  position:absolute;\n  width:90%;\n  padding:10px;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n\n.restart {\nbackground:#7F8C8D;\ncolor:#ecf0f1;\n}\n\n/* console */\n.board_console_container, .gameover_container {\n  background-color: rgba(127, 140, 141, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.board_console {\n  display: grid;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  grid-template-rows: 8em 8em 8em 8em;\n  position:absolute;\n  width:50%;\n  color:white;\n  background-color: rgba(127, 140, 141, 0.7);\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.board_console .num {\n  /* width:33.33%; */\n  color:#2c3e50;\n  padding: 1px;\n  display: flex;\n  font-weight:bold;\n  font-size:24px;\n  text-align: center;\n  cursor:pointer;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n}\n\n\n.board_console .num:hover {\n  color:white;\n  background:#f1c40f;\n}\n\n.board_console .num.remove {\n  width: 200%;\n}\n\n.board_console .num.note {\n  background:#95a5a6;\n  color:#ecf0f1;\n  position: relative;\n  left: 100%;\n}\n\n.board_console .num.note:hover {\n  background:#95a5a6;\n  color:#f1c40f;\n}\n\n.board_console .num.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected:hover {\ncolor:white;\n}\n\n.board_console .num.no:hover {\n  color:white;\n  cursor:not-allowed;\n}\n\n.board_console .num.remove:hover {\n  color:white;\n  background:#c0392b;\n}\n\n.statistics {\n  text-align:center;\n}\n\n#sudoku_menu {\n  background-color: black;\n  position: absolute;\n  z-index:2;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n#sudoku_menu ul {\n margin: 0;\n padding: 100px 0px 0px 0px;\n list-style: none;\n}\n\n#sudoku_menu ul li{\nmargin: 0px 50px;\n}\n\n#sudoku_menu ul li a {\ntext-align:center;\npadding: 15px 20px;\nfont-size: 28px;\nfont-weight: bold;\ncolor: white;\ntext-decoration: none;\ndisplay: block;\nborder-bottom: 1px solid #2c3e50;\n}\n\n#sudoku_menu.open-sidebar {\nleft:0px;\n}\n\n#sidebar-toggle {\n  z-index:3;\n  background: #bdc3c7;\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  padding: 22px 18px;\n  float: left;\n}\n\n#sidebar-toggle .bar{\n  display: block;\n  width: 28px;\n  margin-bottom: 4px;\n  height: 4px;\n  background-color: #f0f0f0;\n  border-radius: 1px;\n}\n\n#sidebar-toggle .bar:last-child{\n   margin-bottom: 0;\n}\n\n/*Responsive Stuff*/\n\n@media all and (orientation:portrait) and (min-width: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:60px; }\n  .board_console .num { font-size:60px; }\n}\n\n@media all and (orientation:landscape) and (min-height: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:50px; }\n  .board_console .num { font-size:50px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 1000px){\n  .sudoku_board .cell span { font-size:30px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 640px){\n.sudoku_board .cell span { font-size:24px; }\n.sudoku_board .cell .note { font-size:10px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 470px){\n.sudoku_board .cell span { font-size:16px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 320px){\n.sudoku_board .cell span { font-size:12px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and  (max-width: 240px){\n.sudoku_board .cell span { font-size:10px; }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/sudoku.nice.css"],"names":[],"mappings":"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","sourcesContent":["H1 {\n  background:black;\n  color:white;\n  margin:0px 0px 2px 0px;\n  font-size:20px;\n  padding:2px 1px 5px 1px;\n  text-align:center;\n}\n\nbody {\n  font-family:verdana,helvetica,arial,sans-serif;\n  border:0px; margin:0px; padding:0px;\n\n  background:url(\n      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC\n  ) repeat;\n}\n\n/* board */\n.sudoku_board {\n  margin:6px auto;\n\n  overflow: hidden;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.sudoku_board .cell {\n  width:11.11%;\n  /* display: inline-block; */\n  float: left;\n  cursor:pointer;\n  text-align: center;\n  overflow: hidden;\n\n  display: flex;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n\n  background:white;\n}\n\n.sudoku_board .cell.border_h {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset 0px -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_h.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 black, inset 0px -2px 0 black;\n}\n\n.sudoku_board .cell span {\n  color:#2c3e50;\n  font-size:14px;\n  text-align:middle;\n}\n\n.sudoku_board .cell.selected, .sudoku_board .cell.selected.fix {\n  background:#FFE;\n}\n\n.sudoku_board .cell.selected.current {\n  position:relative;\n  background: #3498db;\n  font-weight:bold;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.sudoku_board .cell.selected.current span {\n  color:white;\n}\n\n.sudoku_board .cell.selected.group {\n  color:blue;\n}\n\n.sudoku_board .cell span.samevalue, .sudoku_board .cell.fix span.samevalue {\n  font-weight:bold;\n  color:#3498db;\n}\n\n.sudoku_board .cell.notvalid, .sudoku_board .cell.selected.notvalid{\n  font-weight:bold;\n  color:white;;\n  background:#e74c3c;\n}\n\n.sudoku_board .cell.fix {\n  background:#ecf0f1;\n  cursor:not-allowed;\n}\n\n.sudoku_board .cell.fix span {\ncolor:#7f8c8d;\n}\n\n.sudoku_board .cell .solution {\nfont-size:10px;\ncolor:#d35400;\n}\n\n.sudoku_board .cell .note {\n  color:#bdc3c7;\n  width:50%;\n  height:50%;\n  display: inline-block;\n  float:left;\n  text-align:center;\n  font-size:14px;\n\n  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.gameover_container .gameover {\n  color:white;\n  font-weight:bold;\n    text-align:center;\n\n  display:block;\n  position:absolute;\n  width:90%;\n  padding:10px;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n\n.restart {\nbackground:#7F8C8D;\ncolor:#ecf0f1;\n}\n\n/* console */\n.board_console_container, .gameover_container {\n  background-color: rgba(127, 140, 141, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.board_console {\n  display: grid;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  grid-template-rows: 8em 8em 8em 8em;\n  position:absolute;\n  width:50%;\n  color:white;\n  background-color: rgba(127, 140, 141, 0.7);\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.board_console .num {\n  /* width:33.33%; */\n  color:#2c3e50;\n  padding: 1px;\n  display: flex;\n  font-weight:bold;\n  font-size:24px;\n  text-align: center;\n  cursor:pointer;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n}\n\n\n.board_console .num:hover {\n  color:white;\n  background:#f1c40f;\n}\n\n.board_console .num.remove {\n  width: 200%;\n}\n\n.board_console .num.note {\n  background:#95a5a6;\n  color:#ecf0f1;\n  position: relative;\n  left: 100%;\n}\n\n.board_console .num.note:hover {\n  background:#95a5a6;\n  color:#f1c40f;\n}\n\n.board_console .num.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected:hover {\ncolor:white;\n}\n\n.board_console .num.no:hover {\n  color:white;\n  cursor:not-allowed;\n}\n\n.board_console .num.remove:hover {\n  color:white;\n  background:#c0392b;\n}\n\n.statistics {\n  text-align:center;\n}\n\n#sudoku_menu {\n  background-color: black;\n  position: absolute;\n  z-index:2;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n#sudoku_menu ul {\n margin: 0;\n padding: 100px 0px 0px 0px;\n list-style: none;\n}\n\n#sudoku_menu ul li{\nmargin: 0px 50px;\n}\n\n#sudoku_menu ul li a {\ntext-align:center;\npadding: 15px 20px;\nfont-size: 28px;\nfont-weight: bold;\ncolor: white;\ntext-decoration: none;\ndisplay: block;\nborder-bottom: 1px solid #2c3e50;\n}\n\n#sudoku_menu.open-sidebar {\nleft:0px;\n}\n\n#sidebar-toggle {\n  z-index:3;\n  background: #bdc3c7;\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  padding: 22px 18px;\n  float: left;\n}\n\n#sidebar-toggle .bar{\n  display: block;\n  width: 28px;\n  margin-bottom: 4px;\n  height: 4px;\n  background-color: #f0f0f0;\n  border-radius: 1px;\n}\n\n#sidebar-toggle .bar:last-child{\n   margin-bottom: 0;\n}\n\n/*Responsive Stuff*/\n\n@media all and (orientation:portrait) and (min-width: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:60px; }\n  .board_console .num { font-size:60px; }\n}\n\n@media all and (orientation:landscape) and (min-height: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:50px; }\n  .board_console .num { font-size:50px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 1000px){\n  .sudoku_board .cell span { font-size:30px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 640px){\n.sudoku_board .cell span { font-size:24px; }\n.sudoku_board .cell .note { font-size:10px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 470px){\n.sudoku_board .cell span { font-size:16px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 320px){\n.sudoku_board .cell span { font-size:12px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and  (max-width: 240px){\n.sudoku_board .cell span { font-size:10px; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/styles/sudoku.nice.css":
/*!************************************!*\
  !*** ./src/styles/sudoku.nice.css ***!
  \************************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sudoku_nice_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./sudoku.nice.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/sudoku.nice.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_sudoku_nice_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_sudoku_nice_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_sudoku_nice_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_sudoku_nice_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/container.ts":
/*!**************************!*\
  !*** ./src/container.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.container = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const InputProvider_1 = __webpack_require__(/*! ./library/InputProvider */ "./src/library/InputProvider.ts");
const GameEvents_1 = __webpack_require__(/*! ./library/GameEvents */ "./src/library/GameEvents.ts");
const GameManager_1 = __webpack_require__(/*! ./library/GameManager */ "./src/library/GameManager.ts");
const GameRunner_1 = __webpack_require__(/*! ./library/GameRunner */ "./src/library/GameRunner.ts");
const GameLogic_1 = __webpack_require__(/*! ./library/GameLogic */ "./src/library/GameLogic.ts");
const GameSettings_1 = __webpack_require__(/*! ./library/GameSettings */ "./src/library/GameSettings.ts");
const SudokuTS_1 = __webpack_require__(/*! ./library/SudokuTS */ "./src/library/SudokuTS.ts");
const VanillaJsView_1 = __webpack_require__(/*! ./views/VanillaJsView */ "./src/views/VanillaJsView.ts");
exports.container = new inject_1.Container()
    .addSingleton(VanillaJsView_1.VanillaJsView)
    .addSingleton(GameSettings_1.GameSettings)
    .addSingleton("ISudokuTS", SudokuTS_1.SudokuTS)
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
    GameDifficulty["easy"] = "easy";
    GameDifficulty["medium"] = "medium";
    GameDifficulty["hard"] = "hard";
    GameDifficulty["very-hard"] = "very-hard";
    GameDifficulty["insane"] = "insane";
    GameDifficulty["inhuman"] = "inhuman";
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
const VanillaJsView_1 = __webpack_require__(/*! ./views/VanillaJsView */ "./src/views/VanillaJsView.ts");
__webpack_require__(/*! ./styles/sudoku.nice.css */ "./src/styles/sudoku.nice.css");
container_1.container.resolve(VanillaJsView_1.VanillaJsView)
    .registerListeners()
    .startGame();


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

/***/ "./src/interface/ISudokuTS.ts":
/*!************************************!*\
  !*** ./src/interface/ISudokuTS.ts ***!
  \************************************/
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
const GameState_1 = __webpack_require__(/*! ../enums/GameState */ "./src/enums/GameState.ts");
const assert_1 = __webpack_require__(/*! ../utils/assert */ "./src/utils/assert.ts");
let GameLogic = class GameLogic {
    applyGameInput(input, model) {
        if (model.state < GameState_1.GameState.WON) {
            switch (input.action) {
                case 'select': {
                    model.selected = input.cellIndex;
                    break;
                }
                case 'keypress': {
                    if (!model.selected) {
                        break;
                    }
                    const cell = model.cells[model.selected];
                    if (cell.isHint) {
                        break;
                    }
                    if (cell.value === input.key || input.key === '') {
                        cell.value = '.';
                        break;
                    }
                    cell.value = input.key;
                    break;
                }
                default:
                    return (0, assert_1.UNREACHABLE)(input);
            }
            model.state = this.getNextGameState(model);
        }
        return model;
    }
    initializeGameCells(seed) {
        const cells = [];
        for (let i = 0; i < 9 * 9; i++) {
            cells.push(this.createGameCell(i, seed));
        }
        return cells;
    }
    getTileVectorForIndex(index) {
        return [Math.floor(index % 9), Math.floor(index / 9)];
    }
    getIndexForTileVector([x, y]) {
        return y * 9 + x;
    }
    createGameCell(index, seed) {
        return {
            index,
            isHint: seed[index] !== '.',
            value: seed[index],
        };
    }
    getNextGameState(model) {
        const board = model.cells
            .map(cell => cell.value)
            .join('');
        if (model.solution === board) {
            return GameState_1.GameState.WON;
        }
        return model.state;
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameManager = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameState_1 = __webpack_require__(/*! ../enums/GameState */ "./src/enums/GameState.ts");
const IGameLogic_1 = __webpack_require__(/*! ../interface/IGameLogic */ "./src/interface/IGameLogic.ts");
const ISudokuTS_1 = __webpack_require__(/*! ../interface/ISudokuTS */ "./src/interface/ISudokuTS.ts");
let GameManager = class GameManager {
    logic;
    sudoku;
    constructor(logic, sudoku) {
        this.logic = logic;
        this.sudoku = sudoku;
    }
    create(difficulty) {
        const seed = this.sudoku.generate(difficulty);
        const solution = this.sudoku.solve(seed);
        const cells = this.logic
            .initializeGameCells(seed);
        const state = GameState_1.GameState.PAUSED;
        return { cells, seed, state, difficulty, solution };
    }
    update(model, input) {
        return this.logic.applyGameInput(input, model);
    }
};
GameManager = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [typeof (_a = typeof IGameLogic_1.IGameLogic !== "undefined" && IGameLogic_1.IGameLogic) === "function" ? _a : Object, typeof (_b = typeof ISudokuTS_1.ISudokuTS !== "undefined" && ISudokuTS_1.ISudokuTS) === "function" ? _b : Object])
], GameManager);
exports.GameManager = GameManager;
GameManager["@@godsmack/di:static-deps-prop"] = ["IGameLogic", "ISudokuTS"];


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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GameRunner = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameState_1 = __webpack_require__(/*! ../enums/GameState */ "./src/enums/GameState.ts");
const IGameManager_1 = __webpack_require__(/*! ../interface/IGameManager */ "./src/interface/IGameManager.ts");
const IGamePubSub_1 = __webpack_require__(/*! ../interface/IGamePubSub */ "./src/interface/IGamePubSub.ts");
const IInputProvider_1 = __webpack_require__(/*! ../interface/IInputProvider */ "./src/interface/IInputProvider.ts");
let GameRunner = class GameRunner {
    manager;
    events;
    input;
    constructor(manager, events, input) {
        this.manager = manager;
        this.events = events;
        this.input = input;
    }
    async playGame(gameboard) {
        this.emit("begin", gameboard);
        do {
            const input = await this.input.getNextInput();
            this.emit("input", gameboard);
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
    __metadata("design:paramtypes", [typeof (_a = typeof IGameManager_1.IGameManager !== "undefined" && IGameManager_1.IGameManager) === "function" ? _a : Object, typeof (_b = typeof IGamePubSub_1.IGamePubSub !== "undefined" && IGamePubSub_1.IGamePubSub) === "function" ? _b : Object, typeof (_c = typeof IInputProvider_1.IInputProvider !== "undefined" && IInputProvider_1.IInputProvider) === "function" ? _c : Object])
], GameRunner);
exports.GameRunner = GameRunner;
GameRunner["@@godsmack/di:static-deps-prop"] = ["IGameManager", "IGamePubSub", "IInputProvider"];


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
    flagCharacter = '🚩';
    mineCharacter = '💣';
    defaultDifficulty = GameDifficulty_1.GameDifficulty.easy;
    timerInterval = 100;
    boardWidth = 540;
    cellSize = (0, vec2_1.vec2)(Math.floor(this.boardWidth / 9));
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
    constructor() { }
    async getNextInput() {
        return new Promise((resolve) => {
            this.emitter.once('data', data => resolve(data));
        });
    }
    putNextInput(data) {
        console.log('putting input:', data);
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
// export abstract class BaseInputProvider {
//   protected getNextInput(): Promise<IGameInput> {
//     return new Promise<IGameInput>((resolve) =>
//       resolve(this.provideNextInput()))
//   }
//   abstract provideNextInput(): Promise<IGameInput>;
// }
// export class GameInputProvider extends BaseInputProvider {
//   public async provideNextInput(): Promise<IGameInput> {
//   }
// }


/***/ }),

/***/ "./src/library/SudokuTS.ts":
/*!*********************************!*\
  !*** ./src/library/SudokuTS.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


/*
    Sudoku.ts
    ---------

    A Sudoku puzzle generator and solver JavaScript library.

    Please see the README for more details.

    > Modified by @Duroktar in 2022 from the original gist[0]

    [0]: https://raw.githubusercontent.com/robatron/sudoku.js/master/sudoku.js
*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SudokuTS = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
let SudokuTS = class SudokuTS {
    /**
     *  Allowed sudoku digits (0-9)
     *
     * @type {string}
     * @memberof SudokuTS
     */
    DIGITS;
    DIFFICULTY;
    ROWS; // Row lables
    COLS; // Column lables
    SQUARES; // Square IDs
    UNITS; // All units (row, column, or box)
    SQUARE_UNITS_MAP; // Squares -> units map
    SQUARE_PEERS_MAP; // Squares -> peers map
    MIN_GIVENS; // Minimum number of givens
    NR_SQUARES; // Number of squares
    BLANK_CHAR;
    BLANK_BOARD;
    constructor() {
        this.DIGITS = "123456789";
        this.ROWS = "ABCDEFGHI";
        this.COLS = this.DIGITS;
        this.MIN_GIVENS = 17;
        this.NR_SQUARES = 81;
        // Define difficulties by how many squares are given to the player in a new
        // puzzle.
        this.DIFFICULTY = {
            "easy": 62,
            "medium": 53,
            "hard": 44,
            "very-hard": 35,
            "insane": 26,
            "inhuman": 17,
        };
        // Blank character and board representation
        this.BLANK_CHAR = '.';
        this.BLANK_BOARD = "...................................................." +
            ".............................";
        // Init
        // -------------------------------------------------------------------------
        this.SQUARES = this._cross(this.ROWS, this.COLS);
        this.UNITS = this._get_all_units(this.ROWS, this.COLS);
        this.SQUARE_UNITS_MAP = this._get_square_units_map(this.SQUARES, this.UNITS);
        this.SQUARE_PEERS_MAP = this._get_square_peers_map(this.SQUARES, this.SQUARE_UNITS_MAP);
    }
    // Generate
    // -------------------------------------------------------------------------
    generate = (difficulty, unique) => {
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
        let _difficulty;
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
            throw new Error('False candidates');
        }
        // For each item in a shuffled list of squares
        let shuffled_squares = this._shuffle(this.SQUARES);
        for (let square of shuffled_squares) {
            // If an assignment of a random chioce causes a contradictoin, give
            // up and try again
            let rand_candidate_idx = this._rand_range(candidates[square].length);
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
                    }
                    else {
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
    solve = (board, reverse) => {
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
    getCandidates = (board) => {
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
    };
    getRemainingDigits = (board) => {
        const candidates = this.getCandidates(board);
        const characters = (candidates || [])
            .map((item, i) => board[i] === '.' ? item : '')
            .join('');
        return this._strip_dups(characters).sort();
    };
    _get_candidates_map = (board) => {
        /* Get all possible candidates for each square as a map in the form
        {square: sudoku.DIGITS} using recursive constraint propagation. Return `false`
        if a contradiction is encountered
        */
        // Assure a valid board
        let report = this.validate_board(board);
        if (report !== true) {
            throw report;
        }
        let candidate_map = {};
        let squares_values_map = this._get_square_vals_map(board);
        // Start by assigning every digit as a candidate to every square
        for (let si of this.SQUARES) {
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
    _search = (candidates, reverse) => {
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
        candidates;
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
        let min_candidates_square = '';
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
                let candidates_next = this._search(this._assign(candidates_copy, min_candidates_square, val));
                if (candidates_next) {
                    return candidates_next;
                }
            }
            // Rotate through the candidates backwards
        }
        else {
            for (let vi = min_candidates.length - 1; vi >= 0; --vi) {
                let val = min_candidates[vi];
                // TODO: Implement a non-rediculous deep copy function
                let candidates_copy = JSON.parse(JSON.stringify(candidates));
                let candidates_next = this._search(this._assign(candidates_copy, min_candidates_square, val), reverse);
                if (candidates_next) {
                    return candidates_next;
                }
            }
        }
        // If we get through all combinations of the square with the fewest
        // candidates without finding an answer, there isn't one. Return false.
        return false;
    };
    _assign = (candidates, square, val) => {
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
            let candidates_next = this._eliminate(candidates, square, other_val);
            if (!candidates_next) {
                //console.log("Contradiction found by _eliminate.");
                return false;
            }
        }
        return candidates;
    };
    _eliminate = (candidates, square, val) => {
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
                let candidates_new = this._eliminate(candidates, peer, target_val);
                if (!candidates_new) {
                    return false;
                }
            }
            // Otherwise, if the square has no candidates, we have a contradiction.
            // Return false.
        }
        if (nr_candidates === 0) {
            return false;
        }
        // If a unit is reduced to only one place for a value, then assign it
        for (let unit of this.SQUARE_UNITS_MAP[square]) {
            let val_places = [];
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
            }
            else if (val_places.length === 1) {
                let candidates_new = this._assign(candidates, val_places[0], val);
                if (!candidates_new) {
                    return false;
                }
            }
        }
        return candidates;
    };
    // Groups
    // -------------------------------------------------------------------------
    getGroupNumber = (col, row) => {
        const getSectionNumber = (n) => n < 3 ? '1' :
            n < 6 ? '2' :
                '3';
        return getSectionNumber(col) + getSectionNumber(row);
    };
    // Square relationships
    // -------------------------------------------------------------------------
    // Squares, and their relationships with values, units, and peers.
    _get_square_vals_map = (board) => {
        /* Return a map of squares -> values
        */
        let squares_vals_map = {};
        // Make sure `board` is a string of length 81
        if (board.length != this.SQUARES.length) {
            throw "Board/squares length mismatch.";
        }
        else {
            for (let i = 0; i < this.SQUARES.length; i++) {
                squares_vals_map[this.SQUARES[i]] = board[i];
            }
        }
        return squares_vals_map;
    };
    _get_square_units_map = (squares, units) => {
        /* Return a map of `squares` and their associated units (row, col, box)
        */
        let square_unit_map = {};
        // For every square...
        for (let si in squares) {
            let cur_square = squares[si];
            // Maintain a list of the current square's units
            let cur_square_units = [];
            // Look through the units, and see if the current square is in it,
            // and if so, add it to the list of of the square's units.
            for (let ui in units) {
                let cur_unit = units[ui];
                if (cur_unit.indexOf(cur_square) !== -1) {
                    cur_square_units.push(cur_unit);
                }
            }
            // Save the current square and its units to the map
            square_unit_map[cur_square] = cur_square_units;
        }
        return square_unit_map;
    };
    _get_square_peers_map = (squares, units_map) => {
        /* Return a map of `squares` and their associated peers, i.e., a set of
        other squares in the square's unit.
        */
        let square_peers_map = {};
        // For every square...
        for (let si in squares) {
            let cur_square = squares[si];
            let cur_square_units = units_map[cur_square];
            // Maintain list of the current square's peers
            let cur_square_peers = [];
            // Look through the current square's units map...
            for (let sui of cur_square_units) {
                let cur_unit = sui;
                for (let ui of cur_unit) {
                    let cur_unit_square = ui;
                    if (cur_square_peers.indexOf(cur_unit_square) === -1 &&
                        cur_unit_square !== cur_square) {
                        cur_square_peers.push(cur_unit_square);
                    }
                }
            }
            // Save the current square an its associated peers to the map
            square_peers_map[cur_square] = cur_square_peers;
        }
        return square_peers_map;
    };
    _get_all_units = (rows, cols) => {
        /* Return a list of all units (rows, cols, boxes)
        */
        let units = [];
        // Rows
        for (let ri of rows) {
            units.push(this._cross(ri, cols));
        }
        // Columns
        for (let ci of cols) {
            units.push(this._cross(rows, ci));
        }
        // Boxes
        let row_squares = ["ABC", "DEF", "GHI"];
        let col_squares = ["123", "456", "789"];
        for (let rsi in row_squares) {
            for (let csi in col_squares) {
                units.push(this._cross(row_squares[rsi], col_squares[csi]));
            }
        }
        return units;
    };
    // Conversions
    // -------------------------------------------------------------------------
    board_string_to_grid = (board_string) => {
        /* Convert a board string to a two-dimensional array
        */
        const rows = [];
        let cur_row = [];
        for (const i of board_string) {
            cur_row.push(i);
            if (Number(i) % 9 == 8) {
                rows.push(cur_row);
                cur_row = [];
            }
        }
        return rows;
    };
    board_grid_to_string = (board_grid) => {
        /* Convert a board grid to a string
        */
        let board_string = "";
        for (let r = 0; r < 9; ++r) {
            for (let c = 0; c < 9; ++c) {
                board_string += board_grid[r][c];
            }
        }
        return board_string;
    };
    // Utility
    // -------------------------------------------------------------------------
    print_board = (board) => {
        /* Print a sudoku `board` to the console.
        */
        // Assure a valid board
        let report = this.validate_board(board);
        if (report !== true) {
            throw report;
        }
        let V_PADDING = " "; // Insert after each square
        let H_PADDING = '\n'; // Insert after each row
        let V_BOX_PADDING = "  "; // Box vertical padding
        let H_BOX_PADDING = '\n'; // Box horizontal padding
        let display_string = "";
        for (let i = 0; i < board.length; i++) {
            let square = board[i];
            // Add the square and some padding
            display_string += square + V_PADDING;
            // Vertical edge of a box, insert v. box padding
            if (i % 3 === 2) {
                display_string += V_BOX_PADDING;
            }
            // End of a line, insert horiz. padding
            if (i % 9 === 8) {
                display_string += H_PADDING;
            }
            // Horizontal edge of a box, insert h. box padding
            if (i % 27 === 26) {
                display_string += H_BOX_PADDING;
            }
        }
        console.log(display_string);
    };
    validate_board = (board) => {
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
    _cross = (a, b) => {
        /* Cross product of all elements in `a` and `b`, e.g.,
        sudoku._cross("abc", "123") ->
        ["a1", "a2", "a3", "b1", "b2", "b3", "c1", "c2", "c3"]
        */
        let result = [];
        for (let ai of a) {
            for (let bi of b) {
                result.push(ai + bi);
            }
        }
        return result;
    };
    _in = (v, seq) => {
        /* Return if a value `v` is in sequence `seq`.
        */
        return seq.indexOf(v) !== -1;
    };
    _first_true = (seq) => {
        /* Return the first element in `seq` that is true. If no element is
        true, return false.
        */
        for (let i of seq) {
            if (i) {
                return i;
            }
        }
        return false;
    };
    _shuffle = (seq) => {
        /* Return a shuffled version of `seq`
        */
        // Create an array of the same size as `seq` filled with false
        let shuffled = [];
        for (let i = 0; i < seq.length; ++i) {
            shuffled.push(false);
        }
        for (let i of seq) {
            let ti = this._rand_range(seq.length);
            while (shuffled[ti]) {
                ti = (ti + 1) > (seq.length - 1) ? 0 : (ti + 1);
            }
            shuffled[ti] = i;
        }
        return shuffled;
    };
    _rand_range = (max, min) => {
        /* Get a random integer in the range of `min` to `max` (non inclusive).
        If `min` not defined, default to 0. If `max` not defined, throw an
        error.
        */
        min = min ?? 0;
        if (max) {
            return Math.floor(Math.random() * (max - min)) + min;
        }
        else {
            throw "Range undefined";
        }
    };
    _strip_dups = (seq) => {
        /* Strip duplicate values from `seq`
        */
        let seq_set = [];
        let dup_map = {};
        for (let e of seq) {
            if (!dup_map[e]) {
                seq_set.push(e);
                dup_map[e] = true;
            }
        }
        return seq_set;
    };
    _force_range = (nr, max, min) => {
        /* Force `nr` to be within the range from `min` to, but not including,
        `max`. `min` is optional, and will default to 0. If `nr` is undefined,
        treat it as zero.
        */
        min = min || 0;
        nr = nr || 0;
        if (nr < min) {
            return min;
        }
        if (nr > max) {
            return max;
        }
        return nr;
    };
};
SudokuTS = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [])
], SudokuTS);
exports.SudokuTS = SudokuTS;
SudokuTS["@@godsmack/di:static-deps-prop"] = [];
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

/***/ "./src/views/VanillaJsView.ts":
/*!************************************!*\
  !*** ./src/views/VanillaJsView.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VanillaJsView = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameDifficulty_1 = __webpack_require__(/*! ../enums/GameDifficulty */ "./src/enums/GameDifficulty.ts");
const IGamePubSub_1 = __webpack_require__(/*! ../interface/IGamePubSub */ "./src/interface/IGamePubSub.ts");
const IGameLogic_1 = __webpack_require__(/*! ../interface/IGameLogic */ "./src/interface/IGameLogic.ts");
const IGameManager_1 = __webpack_require__(/*! ../interface/IGameManager */ "./src/interface/IGameManager.ts");
const IGameRunner_1 = __webpack_require__(/*! ../interface/IGameRunner */ "./src/interface/IGameRunner.ts");
const ISudokuTS_1 = __webpack_require__(/*! ../interface/ISudokuTS */ "./src/interface/ISudokuTS.ts");
const GameSettings_1 = __webpack_require__(/*! ../library/GameSettings */ "./src/library/GameSettings.ts");
const IInputProvider_1 = __webpack_require__(/*! ../interface/IInputProvider */ "./src/interface/IInputProvider.ts");
// import { vec2 } from "../utils/vec2";
let VanillaJsView = class VanillaJsView {
    gameManager;
    logic;
    sudoku;
    runner;
    events;
    input;
    config;
    root;
    board;
    form;
    sidebarToggle;
    restartButton;
    menu;
    stats;
    keypadBG;
    keypad;
    constructor(gameManager, logic, sudoku, runner, events, input, config) {
        this.gameManager = gameManager;
        this.logic = logic;
        this.sudoku = sudoku;
        this.runner = runner;
        this.events = events;
        this.input = input;
        this.config = config;
        this.root = document.querySelector(':root');
        this.board = document.querySelector('.sudoku_board');
        this.form = document.querySelector('form');
        this.sidebarToggle = document.querySelector('#sidebar-toggle');
        this.restartButton = document.querySelector('#restart_button');
        this.menu = document.querySelector('#sudoku_menu');
        this.stats = document.querySelector('.statistics');
        this.keypadBG = document.querySelector('.board_console_container');
        this.keypad = document.querySelector('.board_console');
    }
    getCellDisplayValue(model, cell) {
        return cell.value === '.' ? '' : cell.value;
    }
    renderCell(model, cell) {
        const el = document.createElement('div');
        el.classList.add('cell');
        el.style.height = '62px';
        const [x, y] = this.logic.getTileVectorForIndex(cell.index);
        const slPos = !!model.selected && this.logic.getTileVectorForIndex(model.selected);
        const selectedGroup = slPos && this.sudoku.getGroupNumber(slPos[0], slPos[1]);
        const group = this.sudoku.getGroupNumber(x, y);
        const isSelected = model.selected === cell.index;
        const isGroup = group === selectedGroup;
        const isInline = isGroup || (slPos && (slPos[0] === x || slPos[1] === y));
        el.classList.toggle('fix', cell.isHint);
        el.classList.toggle('current', isSelected); // currently selected cell
        el.classList.toggle('group', isGroup); // same section as selected
        el.classList.toggle('selected', isInline); // inline with selected
        const isInvalid = cell.value !== '.' &&
            model.solution[cell.index] !== cell.value;
        el.classList.toggle('notvalid', isInvalid);
        el.classList.toggle('border_v', [3, 6].includes(x + 1));
        el.classList.toggle('border_h', [3, 6].includes(y + 1));
        el.setAttribute('x', String(x + 1));
        el.setAttribute('y', String(y + 1));
        el.setAttribute('idx', String(cell.index));
        const span = document.createElement('span');
        span.classList.toggle('samevalue', !!model.selected &&
            model.selected !== cell.index &&
            cell.value === model.cells[model.selected].value);
        span.style.lineHeight = this.config.cellSize + 'px';
        span.innerHTML = this.getCellDisplayValue(model, cell);
        el.appendChild(span);
        return el.outerHTML;
    }
    renderCellList(model) {
        return model.cells
            .map(cell => this.renderCell(model, cell))
            .join('');
    }
    renderBoard(model) {
        this.board.style.width = this.config.boardWidth + 'px';
        this.board.innerHTML = this.renderCellList(model);
    }
    renderStats(model) {
        const remaining = model.cells.reduce((a, v) => {
            if (!v.isHint && v.value === '.')
                a++;
            return a;
        }, 0);
        this.stats.innerHTML = `
      <b>Cells:</b> <span class="cells_complete">${remaining}/81</span> <b>Time:</b> <span class="time">${this.duration}</span>
    `;
    }
    setCellSize({ cellSize: [x, y] }) {
        this.root.style.setProperty('--cell-width', x + 'px');
        this.root.style.setProperty('--cell-height', y + 'px');
    }
    setCellCharacters({ flagCharacter, mineCharacter }) {
        this.root.style.setProperty('--flag-character', flagCharacter);
        this.root.style.setProperty('--mine-character', mineCharacter);
    }
    startGame = async (difficulty = GameDifficulty_1.GameDifficulty.easy) => {
        // console.log('startGame', difficulty);
        const gameboard = this.gameManager.create(difficulty);
        // this.form.addEventListener('submit', () => {
        //   if (gameboard.state < GameState.WON)
        //     gameboard.state = GameState.GAMEOVER;
        // }, { once: true });
        await this.runner.playGame(gameboard);
    };
    submitHandler = (event) => {
        event.preventDefault();
        const form = new FormData(this.form);
        const difficulty = form.get('difficulty');
        this.startGame(difficulty);
    };
    onClickCell = (e) => {
        e.preventDefault();
        if (e.target instanceof HTMLElement) {
            if (e.target.classList.contains('cell')) {
                const idx = Number(e.target.getAttribute('idx'));
                this.input.putNextInput({ action: 'select', cellIndex: idx });
                if (!e.target.classList.contains('fix'))
                    this.keypadBG.style.display = 'flex';
            }
            if (e.target.parentElement?.classList.contains('cell')) {
                const idx = Number(e.target.parentElement.getAttribute('idx'));
                this.input.putNextInput({ action: 'select', cellIndex: idx });
                if (!e.target.parentElement.classList.contains('fix'))
                    this.keypadBG.style.display = 'flex';
            }
        }
    };
    onKeyPress = (e) => {
        if (this.sudoku.DIGITS.includes(e.key)) {
            this.input.putNextInput({ action: 'keypress', key: e.key });
            this.keypadBG.style.display = 'none';
        }
    };
    eventHandler = (event) => {
        // console.log('eventHandler', event);
        switch (event.type) {
            case 'config-changed':
                this.setCellSize(this.config);
                this.setCellCharacters(this.config);
                break;
            case 'begin':
                clearInterval(this.timer);
                this.timer = setInterval(() => {
                    this.duration++;
                    this.renderStats(event.payload);
                }, 1000);
                this.duration = 0;
            case 'update': {
                this.renderBoard(event.payload);
                this.renderStats(event.payload);
                break;
            }
            case 'end': {
                this.duration = 0;
                clearInterval(this.timer);
                this.renderBoard(event.payload);
                this.renderStats(event.payload);
            }
        }
    };
    registerListeners() {
        document.addEventListener('click', this.onClickCell);
        document.addEventListener('touchend', this.onClickCell);
        document.addEventListener('keypress', this.onKeyPress);
        this.restartButton.addEventListener('click', e => {
            e.preventDefault();
            this.menu.classList.toggle('open-sidebar');
            this.startGame();
        });
        this.sidebarToggle.addEventListener('click', e => {
            e.preventDefault();
            this.menu.classList.toggle('open-sidebar');
        });
        this.keypadBG.addEventListener('click', e => {
            e.preventDefault();
            this.keypadBG.style.display = 'none';
        });
        this.keypad.addEventListener('click', this.onClickPad);
        this.keypad.addEventListener('touchstart', this.onClickPad);
        this.events.subscribe(this.eventHandler);
        return this;
    }
    onClickPad = (e) => {
        if (!(e.target instanceof HTMLDivElement))
            return;
        if (!(e.target.classList.contains('num')))
            return;
        e.preventDefault();
        e.stopPropagation();
        if (e.target.innerText.match(/[1-9]/)) {
            this.input.putNextInput({
                action: 'keypress',
                key: e.target.innerText,
            });
            this.keypadBG.style.display = 'none';
        }
        else if (e.target.innerText === 'X') {
            this.input.putNextInput({
                action: 'keypress',
                key: '',
            });
            this.keypadBG.style.display = 'none';
        }
    };
    unregisterListeners() {
        this.events.unsubscribe(this.eventHandler);
        document.removeEventListener('click', this.onClickCell);
        document.removeEventListener('touchend', this.onClickCell);
        document.removeEventListener('keypress', this.onKeyPress);
        return this;
    }
    initializeControls() {
        return this;
    }
    run() {
        this.initializeControls();
        this.registerListeners();
        return this;
    }
    duration = 0;
    timer;
};
VanillaJsView = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [typeof (_a = typeof IGameManager_1.IGameManager !== "undefined" && IGameManager_1.IGameManager) === "function" ? _a : Object, typeof (_b = typeof IGameLogic_1.IGameLogic !== "undefined" && IGameLogic_1.IGameLogic) === "function" ? _b : Object, typeof (_c = typeof ISudokuTS_1.ISudokuTS !== "undefined" && ISudokuTS_1.ISudokuTS) === "function" ? _c : Object, typeof (_d = typeof IGameRunner_1.IGameRunner !== "undefined" && IGameRunner_1.IGameRunner) === "function" ? _d : Object, typeof (_e = typeof IGamePubSub_1.IGamePubSub !== "undefined" && IGamePubSub_1.IGamePubSub) === "function" ? _e : Object, typeof (_f = typeof IInputProvider_1.IInputProvider !== "undefined" && IInputProvider_1.IInputProvider) === "function" ? _f : Object, typeof (_g = typeof GameSettings_1.GameSettings !== "undefined" && GameSettings_1.GameSettings) === "function" ? _g : Object])
], VanillaJsView);
exports.VanillaJsView = VanillaJsView;
VanillaJsView["@@godsmack/di:static-deps-prop"] = ["IGameManager", "IGameLogic", "ISudokuTS", "IGameRunner", "IGamePubSub", "IInputProvider", "GameSettings"];


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


/***/ }),

/***/ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC":
/*!******************************************************************************************************************************************************!*\
  !*** data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC ***!
  \******************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC";

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
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
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
/******/ 		var chunkLoadingGlobal = self["webpackChunksudoku"] = self["webpackChunksudoku"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["vendors-node_modules_css-loader_dist_runtime_api_js-node_modules_css-loader_dist_runtime_getU-9dabd3"], () => (__webpack_require__("./src/game.vanilla.ts")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5QkFBeUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw2QkFBNkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFlBQVk7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSx1QkFBdUIsNEJBQTRCLElBQUk7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQWlELFVBQVUsbUlBQW1JO0FBQzlMLFNBQVMsSUFBSTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0QsWUFBWSxRQUFRLFNBQVM7QUFDL0U7QUFDQTtBQUNBO0FBQ0EsK0NBQStDLFlBQVksUUFBUSxTQUFTO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQSwrREFBK0QsWUFBWSxZQUFZLHdCQUF3QjtBQUMvRyw0RUFBNEUsWUFBWTtBQUN4RixpQkFBaUIsTUFBTSxJQUFJLEtBQUs7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBbUMsT0FBTztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxPQUFPO0FBQ3JFO0FBQ0E7Ozs7Ozs7Ozs7O0FDL01hO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGVBQWUsR0FBRyxlQUFlO0FBQ2pDLG9CQUFvQixtQkFBTyxDQUFDLDREQUFhO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRDtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsS0FBSztBQUNMO0FBQ0EsZUFBZTtBQUNmO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0QsMkRBQTJEO0FBQzNEO0FBQ0E7QUFDQSxlQUFlOzs7Ozs7Ozs7OztBQzNCRjtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7VUNEN0Q7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOzs7OztXQ3pCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLCtCQUErQix3Q0FBd0M7V0FDdkU7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQkFBaUIscUJBQXFCO1dBQ3RDO1dBQ0E7V0FDQSxrQkFBa0IscUJBQXFCO1dBQ3ZDO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQzNCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDLFdBQVc7V0FDNUM7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQSxDQUFDOzs7OztXQ1BEOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7V0NOQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsTUFBTSxxQkFBcUI7V0FDM0I7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7Ozs7O1VFaERBO1VBQ0E7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvc3R5bGVzL3N1ZG9rdS5uaWNlLmNzcyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvc3R5bGVzL3N1ZG9rdS5uaWNlLmNzcz80MjkxIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2VudW1zL0dhbWVEaWZmaWN1bHR5LnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9lbnVtcy9HYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2dhbWUudmFuaWxsYS50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lHYW1lTG9naWMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JR2FtZVB1YlN1Yi50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lHYW1lUnVubmVyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSUlucHV0UHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JU3Vkb2t1VFMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZUV2ZW50cy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9HYW1lTG9naWMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZVJ1bm5lci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9HYW1lU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvSW5wdXRQcm92aWRlci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9TdWRva3VUUy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvdXRpbHMvYXNzZXJ0LnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy91dGlscy92ZWMyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy92aWV3cy9WYW5pbGxhSnNWaWV3LnRzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9jb25zdGFudHMuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvSW5qZWN0YWJsZS5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeS5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9TZXJ2aWNlLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL1NpbmdsZXRvbi5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2ludGVyZmFjZS9JQ29udGFpbmVyLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9pbnRlcmZhY2UvSUluamVjdG9yLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9saWJyYXJ5L0NvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvbGlicmFyeS9JbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvcHJveGlmeS5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvdHlwZXMuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL3J1bnRpbWUvY2h1bmsgbG9hZGVkIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcImRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFJVWxFUVZRWVYyTjg5dXJ0ZndZaUFDTklvWlNZTUNNaHRhTUs4WVlRMGNFREFHNXlKOGVMUmhUZkFBQUFBRWxGVGtTdVFtQ0NcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJIMSB7XFxuICBiYWNrZ3JvdW5kOmJsYWNrO1xcbiAgY29sb3I6d2hpdGU7XFxuICBtYXJnaW46MHB4IDBweCAycHggMHB4O1xcbiAgZm9udC1zaXplOjIwcHg7XFxuICBwYWRkaW5nOjJweCAxcHggNXB4IDFweDtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OnZlcmRhbmEsaGVsdmV0aWNhLGFyaWFsLHNhbnMtc2VyaWY7XFxuICBib3JkZXI6MHB4OyBtYXJnaW46MHB4OyBwYWRkaW5nOjBweDtcXG5cXG4gIGJhY2tncm91bmQ6dXJsKFxcbiAgICAgIFwiICsgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyArIFwiXFxuICApIHJlcGVhdDtcXG59XFxuXFxuLyogYm9hcmQgKi9cXG4uc3Vkb2t1X2JvYXJkIHtcXG4gIG1hcmdpbjo2cHggYXV0bztcXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwge1xcbiAgd2lkdGg6MTEuMTElO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzc7XFxuXFxuICBiYWNrZ3JvdW5kOndoaXRlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl9oIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAwcHggLTJweCAwIDAgIzM0NDk1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfdiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgLTJweCAwIDAgIzM0NDk1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfaC5ib3JkZXJfdiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgLTJweCAwIDAgYmxhY2ssIGluc2V0IDBweCAtMnB4IDAgYmxhY2s7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7XFxuICBjb2xvcjojMmMzZTUwO1xcbiAgZm9udC1zaXplOjE0cHg7XFxuICB0ZXh0LWFsaWduOm1pZGRsZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZCwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5maXgge1xcbiAgYmFja2dyb3VuZDojRkZFO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmN1cnJlbnQge1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmN1cnJlbnQgc3BhbiB7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5ncm91cCB7XFxuICBjb2xvcjpibHVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4uc2FtZXZhbHVlLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCBzcGFuLnNhbWV2YWx1ZSB7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgY29sb3I6IzM0OThkYjtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ub3R2YWxpZCwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5ub3R2YWxpZHtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBjb2xvcjp3aGl0ZTs7XFxuICBiYWNrZ3JvdW5kOiNlNzRjM2M7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHtcXG4gIGJhY2tncm91bmQ6I2VjZjBmMTtcXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXggc3BhbiB7XFxuY29sb3I6IzdmOGM4ZDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAuc29sdXRpb24ge1xcbmZvbnQtc2l6ZToxMHB4O1xcbmNvbG9yOiNkMzU0MDA7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUge1xcbiAgY29sb3I6I2JkYzNjNztcXG4gIHdpZHRoOjUwJTtcXG4gIGhlaWdodDo1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDpsZWZ0O1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICBmb250LXNpemU6MTRweDtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZ2FtZW92ZXJfY29udGFpbmVyIC5nYW1lb3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcblxcbiAgZGlzcGxheTpibG9jaztcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6OTAlO1xcbiAgcGFkZGluZzoxMHB4O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcblxcbi5yZXN0YXJ0IHtcXG5iYWNrZ3JvdW5kOiM3RjhDOEQ7XFxuY29sb3I6I2VjZjBmMTtcXG59XFxuXFxuLyogY29uc29sZSAqL1xcbi5ib2FyZF9jb25zb2xlX2NvbnRhaW5lciwgLmdhbWVvdmVyX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMTQwLCAxNDEsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zJSAzMy4zJSAzMy4zJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOGVtIDhlbSA4ZW0gOGVtO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB3aWR0aDo1MCU7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAxNDAsIDE0MSwgMC43KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtIHtcXG4gIC8qIHdpZHRoOjMzLjMzJTsgKi9cXG4gIGNvbG9yOiMyYzNlNTA7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGZvbnQtc2l6ZToyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNztcXG59XFxuXFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bTpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5yZW1vdmUge1xcbiAgd2lkdGg6IDIwMCU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZSB7XFxuICBiYWNrZ3JvdW5kOiM5NWE1YTY7XFxuICBjb2xvcjojZWNmMGYxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6Izk1YTVhNjtcXG4gIGNvbG9yOiNmMWM0MGY7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlLnNlbGVjdGVkOmhvdmVyIHtcXG5jb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ubzpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5yZW1vdmU6aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kOiNjMDM5MmI7XFxufVxcblxcbi5zdGF0aXN0aWNzIHtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OjI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIHtcXG4gbWFyZ2luOiAwO1xcbiBwYWRkaW5nOiAxMDBweCAwcHggMHB4IDBweDtcXG4gbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIGxpe1xcbm1hcmdpbjogMHB4IDUwcHg7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCBsaSBhIHtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG5wYWRkaW5nOiAxNXB4IDIwcHg7XFxuZm9udC1zaXplOiAyOHB4O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmNvbG9yOiB3aGl0ZTtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuZGlzcGxheTogYmxvY2s7XFxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYzNlNTA7XFxufVxcblxcbiNzdWRva3VfbWVudS5vcGVuLXNpZGViYXIge1xcbmxlZnQ6MHB4O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUge1xcbiAgei1pbmRleDozO1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMjJweCAxOHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSAuYmFye1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjhweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIC5iYXI6bGFzdC1jaGlsZHtcXG4gICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4vKlJlc3BvbnNpdmUgU3R1ZmYqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6IDY0MHB4KXtcXG4gIGgxIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5zdGF0aXN0aWNzIHsgZm9udC1zaXplOjMwcHg7IH1cXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTo2MHB4OyB9XFxuICAuYm9hcmRfY29uc29sZSAubnVtIHsgZm9udC1zaXplOjYwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtaW4taGVpZ2h0OiA2NDBweCl7XFxuICBoMSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuc3RhdGlzdGljcyB7IGZvbnQtc2l6ZTozMHB4OyB9XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6NTBweDsgfVxcbiAgLmJvYXJkX2NvbnNvbGUgLm51bSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MzBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjI0cHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjEwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDcwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxNnB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZTo4cHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxMnB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZTo4cHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgIChtYXgtd2lkdGg6IDI0MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTBweDsgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N1ZG9rdS5uaWNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVzs7RUFFbkM7O1VBRVE7QUFDVjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxlQUFlOztFQUVmLGdCQUFnQjs7RUFFaEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCOztFQUVqQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7RUFFaEIsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7O0VBRW5CLDhCQUE4QixFQUFFLGdDQUFnQztJQUM5RCwyQkFBMkIsS0FBSyx5QkFBeUI7SUFDekQsc0JBQXNCOztFQUV4QixtQ0FBbUM7O0VBRW5DLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLDJEQUEyRDtBQUM3RDs7QUFFQTtFQUNFLGlGQUFpRjtBQUNuRjs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2QsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixrQkFBa0I7QUFDcEI7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7O0FBRUE7QUFDQSxjQUFjO0FBQ2QsYUFBYTtBQUNiOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFNBQVM7RUFDVCxVQUFVO0VBQ1YscUJBQXFCO0VBQ3JCLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsY0FBYzs7RUFFZCw4QkFBOEI7SUFDNUIsMkJBQTJCO0lBQzNCLHNCQUFzQjtBQUMxQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxnQkFBZ0I7SUFDZCxpQkFBaUI7O0VBRW5CLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsU0FBUztFQUNULFlBQVk7O0VBRVosbUNBQW1DO0FBQ3JDOzs7QUFHQTtBQUNBLGtCQUFrQjtBQUNsQixhQUFhO0FBQ2I7O0FBRUEsWUFBWTtBQUNaO0VBQ0UsMENBQTBDO0VBQzFDLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFdBQVc7RUFDWCxZQUFZO0VBQ1osdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsYUFBYTtFQUNiLHdDQUF3QztFQUN4QyxtQ0FBbUM7RUFDbkMsaUJBQWlCO0VBQ2pCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsMENBQTBDO0VBQzFDLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLG1CQUFtQjs7RUFFbkIsOEJBQThCLEVBQUUsZ0NBQWdDO0lBQzlELDJCQUEyQixLQUFLLHlCQUF5QjtJQUN6RCxzQkFBc0I7O0VBRXhCLG1DQUFtQztBQUNyQzs7O0FBR0E7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVTtBQUNaOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtFQUNsQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsbUNBQW1DO0FBQ3JDOztBQUVBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0VBQ0UsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxXQUFXO0VBQ1gsWUFBWTtFQUNaLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsMkJBQTJCO0FBQzdCOztBQUVBO0NBQ0MsU0FBUztDQUNULDBCQUEwQjtDQUMxQixnQkFBZ0I7QUFDakI7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7O0FBRUE7QUFDQSxpQkFBaUI7QUFDakIsa0JBQWtCO0FBQ2xCLGVBQWU7QUFDZixpQkFBaUI7QUFDakIsWUFBWTtBQUNaLHFCQUFxQjtBQUNyQixjQUFjO0FBQ2QsZ0NBQWdDO0FBQ2hDOztBQUVBO0FBQ0EsUUFBUTtBQUNSOztBQUVBO0VBQ0UsU0FBUztFQUNULG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsV0FBVztBQUNiOztBQUVBO0VBQ0UsY0FBYztFQUNkLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLHlCQUF5QjtFQUN6QixrQkFBa0I7QUFDcEI7O0FBRUE7R0FDRyxnQkFBZ0I7QUFDbkI7O0FBRUEsbUJBQW1COztBQUVuQjtFQUNFLEtBQUssY0FBYyxFQUFFO0VBQ3JCLGNBQWMsY0FBYyxFQUFFO0VBQzlCLDJCQUEyQixjQUFjLEVBQUU7RUFDM0Msc0JBQXNCLGNBQWMsRUFBRTtBQUN4Qzs7QUFFQTtFQUNFLEtBQUssY0FBYyxFQUFFO0VBQ3JCLGNBQWMsY0FBYyxFQUFFO0VBQzlCLDJCQUEyQixjQUFjLEVBQUU7RUFDM0Msc0JBQXNCLGNBQWMsRUFBRTtBQUN4Qzs7QUFFQTtFQUNFLDJCQUEyQixjQUFjLEVBQUU7QUFDN0M7O0FBRUE7QUFDQSwyQkFBMkIsY0FBYyxFQUFFO0FBQzNDLDRCQUE0QixjQUFjLEVBQUU7QUFDNUM7O0FBRUE7QUFDQSwyQkFBMkIsY0FBYyxFQUFFO0FBQzNDLDRCQUE0QixhQUFhLEVBQUU7QUFDM0M7O0FBRUE7QUFDQSwyQkFBMkIsY0FBYyxFQUFFO0FBQzNDLDRCQUE0QixhQUFhLEVBQUU7QUFDM0M7O0FBRUE7QUFDQSwyQkFBMkIsY0FBYyxFQUFFO0FBQzNDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkgxIHtcXG4gIGJhY2tncm91bmQ6YmxhY2s7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIG1hcmdpbjowcHggMHB4IDJweCAwcHg7XFxuICBmb250LXNpemU6MjBweDtcXG4gIHBhZGRpbmc6MnB4IDFweCA1cHggMXB4O1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6dmVyZGFuYSxoZWx2ZXRpY2EsYXJpYWwsc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjowcHg7IG1hcmdpbjowcHg7IHBhZGRpbmc6MHB4O1xcblxcbiAgYmFja2dyb3VuZDp1cmwoXFxuICAgICAgZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQUlVbEVRVlFZVjJOODl1cnRmd1lpQUNOSW9aU1lNQ01odGFNSzhZWVEwY0VEQUc1eUo4ZUxSaFRmQUFBQUFFbEZUa1N1UW1DQ1xcbiAgKSByZXBlYXQ7XFxufVxcblxcbi8qIGJvYXJkICovXFxuLnN1ZG9rdV9ib2FyZCB7XFxuICBtYXJnaW46NnB4IGF1dG87XFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHtcXG4gIHdpZHRoOjExLjExJTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIGZsb2F0OiBsZWZ0O1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3O1xcblxcbiAgYmFja2dyb3VuZDp3aGl0ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfaCB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgMHB4IC0ycHggMCAwICMzNDQ5NWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX3Yge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IC0ycHggMCAwICMzNDQ5NWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX2guYm9yZGVyX3Yge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IC0ycHggMCAwIGJsYWNrLCBpbnNldCAwcHggLTJweCAwIGJsYWNrO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4ge1xcbiAgY29sb3I6IzJjM2U1MDtcXG4gIGZvbnQtc2l6ZToxNHB4O1xcbiAgdGV4dC1hbGlnbjptaWRkbGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQsIC5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuZml4IHtcXG4gIGJhY2tncm91bmQ6I0ZGRTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5jdXJyZW50IHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5jdXJyZW50IHNwYW4ge1xcbiAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuZ3JvdXAge1xcbiAgY29sb3I6Ymx1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuLnNhbWV2YWx1ZSwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXggc3Bhbi5zYW1ldmFsdWUge1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGNvbG9yOiMzNDk4ZGI7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwubm90dmFsaWQsIC5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQubm90dmFsaWR7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgY29sb3I6d2hpdGU7O1xcbiAgYmFja2dyb3VuZDojZTc0YzNjO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCB7XFxuICBiYWNrZ3JvdW5kOiNlY2YwZjE7XFxuICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHNwYW4ge1xcbmNvbG9yOiM3ZjhjOGQ7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLnNvbHV0aW9uIHtcXG5mb250LXNpemU6MTBweDtcXG5jb2xvcjojZDM1NDAwO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHtcXG4gIGNvbG9yOiNiZGMzYzc7XFxuICB3aWR0aDo1MCU7XFxuICBoZWlnaHQ6NTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6bGVmdDtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgZm9udC1zaXplOjE0cHg7XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmdhbWVvdmVyX2NvbnRhaW5lciAuZ2FtZW92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6YmxvY2s7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHdpZHRoOjkwJTtcXG4gIHBhZGRpbmc6MTBweDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG5cXG4ucmVzdGFydCB7XFxuYmFja2dyb3VuZDojN0Y4QzhEO1xcbmNvbG9yOiNlY2YwZjE7XFxufVxcblxcbi8qIGNvbnNvbGUgKi9cXG4uYm9hcmRfY29uc29sZV9jb250YWluZXIsIC5nYW1lb3Zlcl9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDE0MCwgMTQxLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMyUgMzMuMyUgMzMuMyU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDhlbSA4ZW0gOGVtIDhlbTtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6NTAlO1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMTQwLCAxNDEsIDAuNyk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bSB7XFxuICAvKiB3aWR0aDozMy4zMyU7ICovXFxuICBjb2xvcjojMmMzZTUwO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBmb250LXNpemU6MjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzc7XFxufVxcblxcblxcbi5ib2FyZF9jb25zb2xlIC5udW06aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ucmVtb3ZlIHtcXG4gIHdpZHRoOiAyMDAlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUge1xcbiAgYmFja2dyb3VuZDojOTVhNWE2O1xcbiAgY29sb3I6I2VjZjBmMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiM5NWE1YTY7XFxuICBjb2xvcjojZjFjNDBmO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZS5zZWxlY3RlZDpob3ZlciB7XFxuY29sb3I6d2hpdGU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm86aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ucmVtb3ZlOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZDojYzAzOTJiO1xcbn1cXG5cXG4uc3RhdGlzdGljcyB7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDoyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCB7XFxuIG1hcmdpbjogMDtcXG4gcGFkZGluZzogMTAwcHggMHB4IDBweCAwcHg7XFxuIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCBsaXtcXG5tYXJnaW46IDBweCA1MHB4O1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwgbGkgYSB7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxucGFkZGluZzogMTVweCAyMHB4O1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5jb2xvcjogd2hpdGU7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmRpc3BsYXk6IGJsb2NrO1xcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmMzZTUwO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUub3Blbi1zaWRlYmFyIHtcXG5sZWZ0OjBweDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIHtcXG4gIHotaW5kZXg6MztcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIycHggMThweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUgLmJhcntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSAuYmFyOmxhc3QtY2hpbGR7XFxuICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLypSZXNwb25zaXZlIFN0dWZmKi9cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiA2NDBweCl7XFxuICBoMSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuc3RhdGlzdGljcyB7IGZvbnQtc2l6ZTozMHB4OyB9XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6NjBweDsgfVxcbiAgLmJvYXJkX2NvbnNvbGUgLm51bSB7IGZvbnQtc2l6ZTo2MHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIGFuZCAobWluLWhlaWdodDogNjQwcHgpe1xcbiAgaDEgeyBmb250LXNpemU6NTBweDsgfVxcbiAgLnN0YXRpc3RpY3MgeyBmb250LXNpemU6MzBweDsgfVxcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5ib2FyZF9jb25zb2xlIC5udW0geyBmb250LXNpemU6NTBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjMwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNjQwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToyNHB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZToxMHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ3MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTZweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6OHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTJweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6OHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kICAobWF4LXdpZHRoOiAyNDBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjEwcHg7IH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdWRva3UubmljZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N1ZG9rdS5uaWNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250YWluZXIgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgSW5wdXRQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vbGlicmFyeS9JbnB1dFByb3ZpZGVyXCIpO1xuY29uc3QgR2FtZUV2ZW50c18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lRXZlbnRzXCIpO1xuY29uc3QgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvR2FtZU1hbmFnZXJcIik7XG5jb25zdCBHYW1lUnVubmVyXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVSdW5uZXJcIik7XG5jb25zdCBHYW1lTG9naWNfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvR2FtZUxvZ2ljXCIpO1xuY29uc3QgR2FtZVNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVTZXR0aW5nc1wiKTtcbmNvbnN0IFN1ZG9rdVRTXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L1N1ZG9rdVRTXCIpO1xuY29uc3QgVmFuaWxsYUpzVmlld18xID0gcmVxdWlyZShcIi4vdmlld3MvVmFuaWxsYUpzVmlld1wiKTtcbmV4cG9ydHMuY29udGFpbmVyID0gbmV3IGluamVjdF8xLkNvbnRhaW5lcigpXG4gICAgLmFkZFNpbmdsZXRvbihWYW5pbGxhSnNWaWV3XzEuVmFuaWxsYUpzVmlldylcbiAgICAuYWRkU2luZ2xldG9uKEdhbWVTZXR0aW5nc18xLkdhbWVTZXR0aW5ncylcbiAgICAuYWRkU2luZ2xldG9uKFwiSVN1ZG9rdVRTXCIsIFN1ZG9rdVRTXzEuU3Vkb2t1VFMpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lTWFuYWdlclwiLCBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJR2FtZVJ1bm5lclwiLCBHYW1lUnVubmVyXzEuR2FtZVJ1bm5lcilcbiAgICAuYWRkU2luZ2xldG9uKFwiSUdhbWVQdWJTdWJcIiwgR2FtZUV2ZW50c18xLkdhbWVFdmVudHMpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lTG9naWNcIiwgR2FtZUxvZ2ljXzEuR2FtZUxvZ2ljKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJSW5wdXRQcm92aWRlclwiLCBJbnB1dFByb3ZpZGVyXzEuRE9NSW5wdXRQcm92aWRlcik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZURpZmZpY3VsdHkgPSB2b2lkIDA7XG52YXIgR2FtZURpZmZpY3VsdHk7XG4oZnVuY3Rpb24gKEdhbWVEaWZmaWN1bHR5KSB7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJlYXN5XCJdID0gXCJlYXN5XCI7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJtZWRpdW1cIl0gPSBcIm1lZGl1bVwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1wiaGFyZFwiXSA9IFwiaGFyZFwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1widmVyeS1oYXJkXCJdID0gXCJ2ZXJ5LWhhcmRcIjtcbiAgICBHYW1lRGlmZmljdWx0eVtcImluc2FuZVwiXSA9IFwiaW5zYW5lXCI7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJpbmh1bWFuXCJdID0gXCJpbmh1bWFuXCI7XG59KShHYW1lRGlmZmljdWx0eSA9IGV4cG9ydHMuR2FtZURpZmZpY3VsdHkgfHwgKGV4cG9ydHMuR2FtZURpZmZpY3VsdHkgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVTdGF0ZSA9IHZvaWQgMDtcbnZhciBHYW1lU3RhdGU7XG4oZnVuY3Rpb24gKEdhbWVTdGF0ZSkge1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJQUkVHQU1FXCJdID0gMF0gPSBcIlBSRUdBTUVcIjtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiUExBWUlOR1wiXSA9IDFdID0gXCJQTEFZSU5HXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIlBBVVNFRFwiXSA9IDJdID0gXCJQQVVTRURcIjtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiV09OXCJdID0gM10gPSBcIldPTlwiO1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJHQU1FT1ZFUlwiXSA9IDRdID0gXCJHQU1FT1ZFUlwiO1xufSkoR2FtZVN0YXRlID0gZXhwb3J0cy5HYW1lU3RhdGUgfHwgKGV4cG9ydHMuR2FtZVN0YXRlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCBjb250YWluZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnRhaW5lclwiKTtcbmNvbnN0IFZhbmlsbGFKc1ZpZXdfMSA9IHJlcXVpcmUoXCIuL3ZpZXdzL1ZhbmlsbGFKc1ZpZXdcIik7XG5yZXF1aXJlKFwiLi9zdHlsZXMvc3Vkb2t1Lm5pY2UuY3NzXCIpO1xuY29udGFpbmVyXzEuY29udGFpbmVyLnJlc29sdmUoVmFuaWxsYUpzVmlld18xLlZhbmlsbGFKc1ZpZXcpXG4gICAgLnJlZ2lzdGVyTGlzdGVuZXJzKClcbiAgICAuc3RhcnRHYW1lKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZUV2ZW50cyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5sZXQgR2FtZUV2ZW50cyA9IGNsYXNzIEdhbWVFdmVudHMge1xuICAgIHB1Ymxpc2goZXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5HQU1FX0VWRU5ULCBldmVudCk7XG4gICAgfVxuICAgIHN1YnNjcmliZShjYikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIuYWRkTGlzdGVuZXIodGhpcy5HQU1FX0VWRU5ULCBjYik7XG4gICAgfVxuICAgIHVuc3Vic2NyaWJlKGNiKSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5yZW1vdmVMaXN0ZW5lcih0aGlzLkdBTUVfRVZFTlQsIGNiKTtcbiAgICB9XG4gICAgZW1pdHRlciA9IG5ldyBldmVudHNfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICBHQU1FX0VWRU5UID0gJ2dhbWUtZXZlbnQnO1xufTtcbkdhbWVFdmVudHMgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpXG5dLCBHYW1lRXZlbnRzKTtcbmV4cG9ydHMuR2FtZUV2ZW50cyA9IEdhbWVFdmVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZUxvZ2ljID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVTdGF0ZV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVTdGF0ZVwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2Fzc2VydFwiKTtcbmxldCBHYW1lTG9naWMgPSBjbGFzcyBHYW1lTG9naWMge1xuICAgIGFwcGx5R2FtZUlucHV0KGlucHV0LCBtb2RlbCkge1xuICAgICAgICBpZiAobW9kZWwuc3RhdGUgPCBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucHV0LmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc2VsZWN0ZWQgPSBpbnB1dC5jZWxsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdrZXlwcmVzcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2RlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IG1vZGVsLmNlbGxzW21vZGVsLnNlbGVjdGVkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNIaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC52YWx1ZSA9PT0gaW5wdXQua2V5IHx8IGlucHV0LmtleSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNlbGwudmFsdWUgPSAnLic7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjZWxsLnZhbHVlID0gaW5wdXQua2V5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgwLCBhc3NlcnRfMS5VTlJFQUNIQUJMRSkoaW5wdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kZWwuc3RhdGUgPSB0aGlzLmdldE5leHRHYW1lU3RhdGUobW9kZWwpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUdhbWVDZWxscyhzZWVkKSB7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgOSAqIDk7IGkrKykge1xuICAgICAgICAgICAgY2VsbHMucHVzaCh0aGlzLmNyZWF0ZUdhbWVDZWxsKGksIHNlZWQpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgfVxuICAgIGdldFRpbGVWZWN0b3JGb3JJbmRleChpbmRleCkge1xuICAgICAgICByZXR1cm4gW01hdGguZmxvb3IoaW5kZXggJSA5KSwgTWF0aC5mbG9vcihpbmRleCAvIDkpXTtcbiAgICB9XG4gICAgZ2V0SW5kZXhGb3JUaWxlVmVjdG9yKFt4LCB5XSkge1xuICAgICAgICByZXR1cm4geSAqIDkgKyB4O1xuICAgIH1cbiAgICBjcmVhdGVHYW1lQ2VsbChpbmRleCwgc2VlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBpc0hpbnQ6IHNlZWRbaW5kZXhdICE9PSAnLicsXG4gICAgICAgICAgICB2YWx1ZTogc2VlZFtpbmRleF0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldE5leHRHYW1lU3RhdGUobW9kZWwpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBtb2RlbC5jZWxsc1xuICAgICAgICAgICAgLm1hcChjZWxsID0+IGNlbGwudmFsdWUpXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIGlmIChtb2RlbC5zb2x1dGlvbiA9PT0gYm9hcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbC5zdGF0ZTtcbiAgICB9XG59O1xuR2FtZUxvZ2ljID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKVxuXSwgR2FtZUxvZ2ljKTtcbmV4cG9ydHMuR2FtZUxvZ2ljID0gR2FtZUxvZ2ljO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9hLCBfYjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZU1hbmFnZXIgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgR2FtZVN0YXRlXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvR2FtZVN0YXRlXCIpO1xuY29uc3QgSUdhbWVMb2dpY18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZUxvZ2ljXCIpO1xuY29uc3QgSVN1ZG9rdVRTXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lTdWRva3VUU1wiKTtcbmxldCBHYW1lTWFuYWdlciA9IGNsYXNzIEdhbWVNYW5hZ2VyIHtcbiAgICBsb2dpYztcbiAgICBzdWRva3U7XG4gICAgY29uc3RydWN0b3IobG9naWMsIHN1ZG9rdSkge1xuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMuc3Vkb2t1ID0gc3Vkb2t1O1xuICAgIH1cbiAgICBjcmVhdGUoZGlmZmljdWx0eSkge1xuICAgICAgICBjb25zdCBzZWVkID0gdGhpcy5zdWRva3UuZ2VuZXJhdGUoZGlmZmljdWx0eSk7XG4gICAgICAgIGNvbnN0IHNvbHV0aW9uID0gdGhpcy5zdWRva3Uuc29sdmUoc2VlZCk7XG4gICAgICAgIGNvbnN0IGNlbGxzID0gdGhpcy5sb2dpY1xuICAgICAgICAgICAgLmluaXRpYWxpemVHYW1lQ2VsbHMoc2VlZCk7XG4gICAgICAgIGNvbnN0IHN0YXRlID0gR2FtZVN0YXRlXzEuR2FtZVN0YXRlLlBBVVNFRDtcbiAgICAgICAgcmV0dXJuIHsgY2VsbHMsIHNlZWQsIHN0YXRlLCBkaWZmaWN1bHR5LCBzb2x1dGlvbiB9O1xuICAgIH1cbiAgICB1cGRhdGUobW9kZWwsIGlucHV0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmxvZ2ljLmFwcGx5R2FtZUlucHV0KGlucHV0LCBtb2RlbCk7XG4gICAgfVxufTtcbkdhbWVNYW5hZ2VyID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgSUdhbWVMb2dpY18xLklHYW1lTG9naWMgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVMb2dpY18xLklHYW1lTG9naWMpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdCwgdHlwZW9mIChfYiA9IHR5cGVvZiBJU3Vkb2t1VFNfMS5JU3Vkb2t1VFMgIT09IFwidW5kZWZpbmVkXCIgJiYgSVN1ZG9rdVRTXzEuSVN1ZG9rdVRTKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3RdKVxuXSwgR2FtZU1hbmFnZXIpO1xuZXhwb3J0cy5HYW1lTWFuYWdlciA9IEdhbWVNYW5hZ2VyO1xuR2FtZU1hbmFnZXJbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXCJJR2FtZUxvZ2ljXCIsIFwiSVN1ZG9rdVRTXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9hLCBfYiwgX2M7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVSdW5uZXIgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgR2FtZVN0YXRlXzEgPSByZXF1aXJlKFwiLi4vZW51bXMvR2FtZVN0YXRlXCIpO1xuY29uc3QgSUdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTWFuYWdlclwiKTtcbmNvbnN0IElHYW1lUHViU3ViXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lUHViU3ViXCIpO1xuY29uc3QgSUlucHV0UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUlucHV0UHJvdmlkZXJcIik7XG5sZXQgR2FtZVJ1bm5lciA9IGNsYXNzIEdhbWVSdW5uZXIge1xuICAgIG1hbmFnZXI7XG4gICAgZXZlbnRzO1xuICAgIGlucHV0O1xuICAgIGNvbnN0cnVjdG9yKG1hbmFnZXIsIGV2ZW50cywgaW5wdXQpIHtcbiAgICAgICAgdGhpcy5tYW5hZ2VyID0gbWFuYWdlcjtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICB9XG4gICAgYXN5bmMgcGxheUdhbWUoZ2FtZWJvYXJkKSB7XG4gICAgICAgIHRoaXMuZW1pdChcImJlZ2luXCIsIGdhbWVib2FyZCk7XG4gICAgICAgIGRvIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gYXdhaXQgdGhpcy5pbnB1dC5nZXROZXh0SW5wdXQoKTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcImlucHV0XCIsIGdhbWVib2FyZCk7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIudXBkYXRlKGdhbWVib2FyZCwgaW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIGdhbWVib2FyZCk7XG4gICAgICAgIH0gd2hpbGUgKGdhbWVib2FyZC5zdGF0ZSA8IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5XT04pO1xuICAgICAgICB0aGlzLmVtaXQoXCJlbmRcIiwgZ2FtZWJvYXJkKTtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgICB9XG4gICAgZW1pdCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goeyB0eXBlLCBwYXlsb2FkIH0pO1xuICAgIH1cbn07XG5HYW1lUnVubmVyID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgSUdhbWVNYW5hZ2VyXzEuSUdhbWVNYW5hZ2VyICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lTWFuYWdlcl8xLklHYW1lTWFuYWdlcikgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0LCB0eXBlb2YgKF9iID0gdHlwZW9mIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YikgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0LCB0eXBlb2YgKF9jID0gdHlwZW9mIElJbnB1dFByb3ZpZGVyXzEuSUlucHV0UHJvdmlkZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUlucHV0UHJvdmlkZXJfMS5JSW5wdXRQcm92aWRlcikgPT09IFwiZnVuY3Rpb25cIiA/IF9jIDogT2JqZWN0XSlcbl0sIEdhbWVSdW5uZXIpO1xuZXhwb3J0cy5HYW1lUnVubmVyID0gR2FtZVJ1bm5lcjtcbkdhbWVSdW5uZXJbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXCJJR2FtZU1hbmFnZXJcIiwgXCJJR2FtZVB1YlN1YlwiLCBcIklJbnB1dFByb3ZpZGVyXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lU2V0dGluZ3MgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgR2FtZURpZmZpY3VsdHlfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lRGlmZmljdWx0eVwiKTtcbmNvbnN0IElHYW1lUHViU3ViXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lUHViU3ViXCIpO1xuY29uc3QgdmVjMl8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZlYzJcIik7XG5sZXQgR2FtZVNldHRpbmdzID0gY2xhc3MgR2FtZVNldHRpbmdzIHtcbiAgICBldmVudHM7XG4gICAgY29uc3RydWN0b3IoZXZlbnRzKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIH1cbiAgICBmbGFnQ2hhcmFjdGVyID0gJ/CfmqknO1xuICAgIG1pbmVDaGFyYWN0ZXIgPSAn8J+Soyc7XG4gICAgZGVmYXVsdERpZmZpY3VsdHkgPSBHYW1lRGlmZmljdWx0eV8xLkdhbWVEaWZmaWN1bHR5LmVhc3k7XG4gICAgdGltZXJJbnRlcnZhbCA9IDEwMDtcbiAgICBib2FyZFdpZHRoID0gNTQwO1xuICAgIGNlbGxTaXplID0gKDAsIHZlYzJfMS52ZWMyKShNYXRoLmZsb29yKHRoaXMuYm9hcmRXaWR0aCAvIDkpKTtcbiAgICBzZXQoa2V5LCB2YWx1ZSkge1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgY29uc3Qgb2xkID0gc2VsZltrZXldO1xuICAgICAgICBzZWxmW2tleV0gPSB2YWx1ZTtcbiAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCh7XG4gICAgICAgICAgICB0eXBlOiAnY29uZmlnLWNoYW5nZWQnLFxuICAgICAgICAgICAgcGF5bG9hZDoge1xuICAgICAgICAgICAgICAgIGtleSxcbiAgICAgICAgICAgICAgICB2YWx1ZToge1xuICAgICAgICAgICAgICAgICAgICBvbGQsXG4gICAgICAgICAgICAgICAgICAgIG5ldzogdmFsdWUsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59O1xuR2FtZVNldHRpbmdzID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgR2FtZVNldHRpbmdzKTtcbmV4cG9ydHMuR2FtZVNldHRpbmdzID0gR2FtZVNldHRpbmdzO1xuR2FtZVNldHRpbmdzW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW1wiSUdhbWVQdWJTdWJcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX19pbXBvcnREZWZhdWx0ID0gKHRoaXMgJiYgdGhpcy5fX2ltcG9ydERlZmF1bHQpIHx8IGZ1bmN0aW9uIChtb2QpIHtcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IFwiZGVmYXVsdFwiOiBtb2QgfTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkRPTUlucHV0UHJvdmlkZXIgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgZXZlbnRzXzEgPSBfX2ltcG9ydERlZmF1bHQocmVxdWlyZShcImV2ZW50c1wiKSk7XG5sZXQgRE9NSW5wdXRQcm92aWRlciA9IGNsYXNzIERPTUlucHV0UHJvdmlkZXIge1xuICAgIGNvbnN0cnVjdG9yKCkgeyB9XG4gICAgYXN5bmMgZ2V0TmV4dElucHV0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5vbmNlKCdkYXRhJywgZGF0YSA9PiByZXNvbHZlKGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHB1dE5leHRJbnB1dChkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwdXR0aW5nIGlucHV0OicsIGRhdGEpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnZGF0YScsIGRhdGEpO1xuICAgIH1cbiAgICBlbWl0dGVyID0gbmV3IGV2ZW50c18xLmRlZmF1bHQoKTtcbn07XG5ET01JbnB1dFByb3ZpZGVyID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBET01JbnB1dFByb3ZpZGVyKTtcbmV4cG9ydHMuRE9NSW5wdXRQcm92aWRlciA9IERPTUlucHV0UHJvdmlkZXI7XG5ET01JbnB1dFByb3ZpZGVyW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW107XG4vLyBleHBvcnQgYWJzdHJhY3QgY2xhc3MgQmFzZUlucHV0UHJvdmlkZXIge1xuLy8gICBwcm90ZWN0ZWQgZ2V0TmV4dElucHV0KCk6IFByb21pc2U8SUdhbWVJbnB1dD4ge1xuLy8gICAgIHJldHVybiBuZXcgUHJvbWlzZTxJR2FtZUlucHV0PigocmVzb2x2ZSkgPT5cbi8vICAgICAgIHJlc29sdmUodGhpcy5wcm92aWRlTmV4dElucHV0KCkpKVxuLy8gICB9XG4vLyAgIGFic3RyYWN0IHByb3ZpZGVOZXh0SW5wdXQoKTogUHJvbWlzZTxJR2FtZUlucHV0Pjtcbi8vIH1cbi8vIGV4cG9ydCBjbGFzcyBHYW1lSW5wdXRQcm92aWRlciBleHRlbmRzIEJhc2VJbnB1dFByb3ZpZGVyIHtcbi8vICAgcHVibGljIGFzeW5jIHByb3ZpZGVOZXh0SW5wdXQoKTogUHJvbWlzZTxJR2FtZUlucHV0PiB7XG4vLyAgIH1cbi8vIH1cbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAgICBTdWRva3UudHNcbiAgICAtLS0tLS0tLS1cblxuICAgIEEgU3Vkb2t1IHB1enpsZSBnZW5lcmF0b3IgYW5kIHNvbHZlciBKYXZhU2NyaXB0IGxpYnJhcnkuXG5cbiAgICBQbGVhc2Ugc2VlIHRoZSBSRUFETUUgZm9yIG1vcmUgZGV0YWlscy5cblxuICAgID4gTW9kaWZpZWQgYnkgQER1cm9rdGFyIGluIDIwMjIgZnJvbSB0aGUgb3JpZ2luYWwgZ2lzdFswXVxuXG4gICAgWzBdOiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcm9iYXRyb24vc3Vkb2t1LmpzL21hc3Rlci9zdWRva3UuanNcbiovXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdWRva3VUUyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5sZXQgU3Vkb2t1VFMgPSBjbGFzcyBTdWRva3VUUyB7XG4gICAgLyoqXG4gICAgICogIEFsbG93ZWQgc3Vkb2t1IGRpZ2l0cyAoMC05KVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU3Vkb2t1VFNcbiAgICAgKi9cbiAgICBESUdJVFM7XG4gICAgRElGRklDVUxUWTtcbiAgICBST1dTOyAvLyBSb3cgbGFibGVzXG4gICAgQ09MUzsgLy8gQ29sdW1uIGxhYmxlc1xuICAgIFNRVUFSRVM7IC8vIFNxdWFyZSBJRHNcbiAgICBVTklUUzsgLy8gQWxsIHVuaXRzIChyb3csIGNvbHVtbiwgb3IgYm94KVxuICAgIFNRVUFSRV9VTklUU19NQVA7IC8vIFNxdWFyZXMgLT4gdW5pdHMgbWFwXG4gICAgU1FVQVJFX1BFRVJTX01BUDsgLy8gU3F1YXJlcyAtPiBwZWVycyBtYXBcbiAgICBNSU5fR0lWRU5TOyAvLyBNaW5pbXVtIG51bWJlciBvZiBnaXZlbnNcbiAgICBOUl9TUVVBUkVTOyAvLyBOdW1iZXIgb2Ygc3F1YXJlc1xuICAgIEJMQU5LX0NIQVI7XG4gICAgQkxBTktfQk9BUkQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuRElHSVRTID0gXCIxMjM0NTY3ODlcIjtcbiAgICAgICAgdGhpcy5ST1dTID0gXCJBQkNERUZHSElcIjtcbiAgICAgICAgdGhpcy5DT0xTID0gdGhpcy5ESUdJVFM7XG4gICAgICAgIHRoaXMuTUlOX0dJVkVOUyA9IDE3O1xuICAgICAgICB0aGlzLk5SX1NRVUFSRVMgPSA4MTtcbiAgICAgICAgLy8gRGVmaW5lIGRpZmZpY3VsdGllcyBieSBob3cgbWFueSBzcXVhcmVzIGFyZSBnaXZlbiB0byB0aGUgcGxheWVyIGluIGEgbmV3XG4gICAgICAgIC8vIHB1enpsZS5cbiAgICAgICAgdGhpcy5ESUZGSUNVTFRZID0ge1xuICAgICAgICAgICAgXCJlYXN5XCI6IDYyLFxuICAgICAgICAgICAgXCJtZWRpdW1cIjogNTMsXG4gICAgICAgICAgICBcImhhcmRcIjogNDQsXG4gICAgICAgICAgICBcInZlcnktaGFyZFwiOiAzNSxcbiAgICAgICAgICAgIFwiaW5zYW5lXCI6IDI2LFxuICAgICAgICAgICAgXCJpbmh1bWFuXCI6IDE3LFxuICAgICAgICB9O1xuICAgICAgICAvLyBCbGFuayBjaGFyYWN0ZXIgYW5kIGJvYXJkIHJlcHJlc2VudGF0aW9uXG4gICAgICAgIHRoaXMuQkxBTktfQ0hBUiA9ICcuJztcbiAgICAgICAgdGhpcy5CTEFOS19CT0FSRCA9IFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiICtcbiAgICAgICAgICAgIFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIjtcbiAgICAgICAgLy8gSW5pdFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHRoaXMuU1FVQVJFUyA9IHRoaXMuX2Nyb3NzKHRoaXMuUk9XUywgdGhpcy5DT0xTKTtcbiAgICAgICAgdGhpcy5VTklUUyA9IHRoaXMuX2dldF9hbGxfdW5pdHModGhpcy5ST1dTLCB0aGlzLkNPTFMpO1xuICAgICAgICB0aGlzLlNRVUFSRV9VTklUU19NQVAgPSB0aGlzLl9nZXRfc3F1YXJlX3VuaXRzX21hcCh0aGlzLlNRVUFSRVMsIHRoaXMuVU5JVFMpO1xuICAgICAgICB0aGlzLlNRVUFSRV9QRUVSU19NQVAgPSB0aGlzLl9nZXRfc3F1YXJlX3BlZXJzX21hcCh0aGlzLlNRVUFSRVMsIHRoaXMuU1FVQVJFX1VOSVRTX01BUCk7XG4gICAgfVxuICAgIC8vIEdlbmVyYXRlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdlbmVyYXRlID0gKGRpZmZpY3VsdHksIHVuaXF1ZSkgPT4ge1xuICAgICAgICAvKiBHZW5lcmF0ZSBhIG5ldyBTdWRva3UgcHV6emxlIG9mIGEgcGFydGljdWxhciBgZGlmZmljdWx0eWAsIGUuZy4sXG4gIFxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYW4gXCJlYXN5XCIgc3Vkb2t1IHB1enpsZVxuICAgICAgICAgICAgc3Vkb2t1LmdlbmVyYXRlKFwiZWFzeVwiKTtcbiAgXG4gIFxuICAgICAgICBEaWZmaWN1bHRpZXMgYXJlIGFzIGZvbGxvd3MsIGFuZCByZXByZXNlbnQgdGhlIG51bWJlciBvZiBnaXZlbiBzcXVhcmVzOlxuICBcbiAgICAgICAgICAgICAgICBcImVhc3lcIjogICAgICAgICA2MVxuICAgICAgICAgICAgICAgIFwibWVkaXVtXCI6ICAgICAgIDUyXG4gICAgICAgICAgICAgICAgXCJoYXJkXCI6ICAgICAgICAgNDNcbiAgICAgICAgICAgICAgICBcInZlcnktaGFyZFwiOiAgICAzNFxuICAgICAgICAgICAgICAgIFwiaW5zYW5lXCI6ICAgICAgIDI1XG4gICAgICAgICAgICAgICAgXCJpbmh1bWFuXCI6ICAgICAgMTdcbiAgXG4gIFxuICAgICAgICBZb3UgbWF5IGFsc28gZW50ZXIgYSBjdXN0b20gbnVtYmVyIG9mIHNxdWFyZXMgdG8gYmUgZ2l2ZW4sIGUuZy4sXG4gIFxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgU3Vkb2t1IHB1enpsZSB3aXRoIDYwIGdpdmVuIHNxdWFyZXNcbiAgICAgICAgICAgIHN1ZG9rdS5nZW5lcmF0ZSg2MClcbiAgXG4gIFxuICAgICAgICBgZGlmZmljdWx0eWAgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDE3IGFuZCA4MSBpbmNsdXNpdmUuIElmIGl0J3NcbiAgICAgICAgb3V0c2lkZSBvZiB0aGF0IHJhbmdlLCBgZGlmZmljdWx0eWAgd2lsbCBiZSBzZXQgdG8gdGhlIGNsb3Nlc3QgYm91bmQsXG4gICAgICAgIGUuZy4sIDAgLT4gMTcsIGFuZCAxMDAgLT4gODEuXG4gIFxuICBcbiAgICAgICAgQnkgZGVmYXVsdCwgdGhlIHB1enpsZXMgYXJlIHVuaXF1ZSwgdWxlc3MgeW91IHNldCBgdW5pcXVlYCB0byBmYWxzZS5cbiAgICAgICAgKE5vdGU6IFB1enpsZSB1bmlxdWVuZXNzIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQsIHNvIHB1enpsZXMgYXJlICpub3QqXG4gICAgICAgIGd1YXJhbnRlZWQgdG8gaGF2ZSB1bmlxdWUgc29sdXRpb25zKVxuICAgICAgICAqL1xuICAgICAgICAvLyBJZiBgZGlmZmljdWx0eWAgaXMgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBjb252ZXJ0IGl0IHRvIGEgbnVtYmVyIG9yXG4gICAgICAgIC8vIGRlZmF1bHQgaXQgdG8gXCJlYXN5XCIgaWYgdW5kZWZpbmVkLlxuICAgICAgICBsZXQgX2RpZmZpY3VsdHk7XG4gICAgICAgIGlmICh0eXBlb2YgZGlmZmljdWx0eSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGlmZmljdWx0eSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgX2RpZmZpY3VsdHkgPSB0aGlzLkRJRkZJQ1VMVFlbZGlmZmljdWx0eV0gfHwgdGhpcy5ESUZGSUNVTFRZLmVhc3k7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yY2UgZGlmZmljdWx0eSBiZXR3ZWVuIDE3IGFuZCA4MSBpbmNsdXNpdmVcbiAgICAgICAgX2RpZmZpY3VsdHkgPSB0aGlzLl9mb3JjZV9yYW5nZShfZGlmZmljdWx0eSwgdGhpcy5OUl9TUVVBUkVTICsgMSwgdGhpcy5NSU5fR0lWRU5TKTtcbiAgICAgICAgLy8gRGVmYXVsdCB1bmlxdWUgdG8gdHJ1ZVxuICAgICAgICB1bmlxdWUgPSB1bmlxdWUgPz8gdHJ1ZTtcbiAgICAgICAgLy8gR2V0IGEgc2V0IG9mIHNxdWFyZXMgYW5kIGFsbCBwb3NzaWJsZSBjYW5kaWRhdGVzIGZvciBlYWNoIHNxdWFyZVxuICAgICAgICBsZXQgYmxhbmtfYm9hcmQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTlJfU1FVQVJFUzsgKytpKSB7XG4gICAgICAgICAgICBibGFua19ib2FyZCArPSAnLic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IHRoaXMuX2dldF9jYW5kaWRhdGVzX21hcChibGFua19ib2FyZCk7XG4gICAgICAgIGlmIChjYW5kaWRhdGVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWxzZSBjYW5kaWRhdGVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGVhY2ggaXRlbSBpbiBhIHNodWZmbGVkIGxpc3Qgb2Ygc3F1YXJlc1xuICAgICAgICBsZXQgc2h1ZmZsZWRfc3F1YXJlcyA9IHRoaXMuX3NodWZmbGUodGhpcy5TUVVBUkVTKTtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNodWZmbGVkX3NxdWFyZXMpIHtcbiAgICAgICAgICAgIC8vIElmIGFuIGFzc2lnbm1lbnQgb2YgYSByYW5kb20gY2hpb2NlIGNhdXNlcyBhIGNvbnRyYWRpY3RvaW4sIGdpdmVcbiAgICAgICAgICAgIC8vIHVwIGFuZCB0cnkgYWdhaW5cbiAgICAgICAgICAgIGxldCByYW5kX2NhbmRpZGF0ZV9pZHggPSB0aGlzLl9yYW5kX3JhbmdlKGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHJhbmRfY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tzcXVhcmVdW3JhbmRfY2FuZGlkYXRlX2lkeF07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Fzc2lnbihjYW5kaWRhdGVzLCBzcXVhcmUsIHJhbmRfY2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBhIGxpc3Qgb2YgYWxsIHNpbmdsZSBjYW5kaWRhdGVzXG4gICAgICAgICAgICBsZXQgc2luZ2xlX2NhbmRpZGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZV9jYW5kaWRhdGVzLnB1c2goY2FuZGlkYXRlc1tzcXVhcmVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGF0IGxlYXN0IGRpZmZpY3VsdHksIGFuZCB0aGUgdW5pcXVlIGNhbmRpZGF0ZSBjb3VudCBpc1xuICAgICAgICAgICAgLy8gYXQgbGVhc3QgOCwgcmV0dXJuIHRoZSBwdXp6bGUhXG4gICAgICAgICAgICBpZiAoc2luZ2xlX2NhbmRpZGF0ZXMubGVuZ3RoID49IF9kaWZmaWN1bHR5ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaXBfZHVwcyhzaW5nbGVfY2FuZGlkYXRlcykubGVuZ3RoID49IDgpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9hcmQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxldCBnaXZlbnNfaWR4cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5TUVVBUkVTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLlNRVUFSRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzW3NxdWFyZV0ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkICs9IGNhbmRpZGF0ZXNbc3F1YXJlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpdmVuc19pZHhzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZCArPSB0aGlzLkJMQU5LX0NIQVI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHRoYW4gYGRpZmZpY3VsdHlgIGdpdmVucywgcmVtb3ZlIHNvbWUgcmFuZG9tXG4gICAgICAgICAgICAgICAgLy8gZ2l2ZW5zIHVudGlsIHdlJ3JlIGRvd24gdG8gZXhhY3RseSBgZGlmZmljdWx0eWBcbiAgICAgICAgICAgICAgICBsZXQgbnJfZ2l2ZW5zID0gZ2l2ZW5zX2lkeHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChucl9naXZlbnMgPiBfZGlmZmljdWx0eSkge1xuICAgICAgICAgICAgICAgICAgICBnaXZlbnNfaWR4cyA9IHRoaXMuX3NodWZmbGUoZ2l2ZW5zX2lkeHMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5yX2dpdmVucyAtIF9kaWZmaWN1bHR5OyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBwYXJzZUludChTdHJpbmcoZ2l2ZW5zX2lkeHNbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkID0gYm9hcmQuc3Vic3RyKDAsIHRhcmdldCkgKyB0aGlzLkJMQU5LX0NIQVIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnN1YnN0cih0YXJnZXQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEb3VibGUgY2hlY2sgYm9hcmQgaXMgc29sdmFibGVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBNYWtlIGEgc3RhbmRhbG9uZSBib2FyZCBjaGVja2VyLiBTb2x2ZSBpcyBleHBlbnNpdmUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29sdmUoYm9hcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2l2ZSB1cCBhbmQgdHJ5IGEgbmV3IHB1enpsZVxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZShkaWZmaWN1bHR5KTtcbiAgICB9O1xuICAgIC8vIFNvbHZlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHNvbHZlID0gKGJvYXJkLCByZXZlcnNlKSA9PiB7XG4gICAgICAgIC8qIFNvbHZlIGEgc3Vkb2t1IHB1enpsZSBnaXZlbiBhIHN1ZG9rdSBgYm9hcmRgLCBpLmUuLCBhbiA4MS1jaGFyYWN0ZXJcbiAgICAgICAgc3RyaW5nIG9mIHN1ZG9rdS5ESUdJVFMsIDEtOSwgYW5kIHNwYWNlcyBpZGVudGlmaWVkIGJ5ICcuJywgcmVwcmVzZW50aW5nIHRoZVxuICAgICAgICBzcXVhcmVzLiBUaGVyZSBtdXN0IGJlIGEgbWluaW11bSBvZiAxNyBnaXZlbnMuIElmIHRoZSBnaXZlbiBib2FyZCBoYXMgbm9cbiAgICAgICAgc29sdXRpb25zLCByZXR1cm4gZmFsc2UuXG4gIFxuICAgICAgICBPcHRpb25hbGx5IHNldCBgcmV2ZXJzZWAgdG8gc29sdmUgXCJiYWNrd2FyZHNcIiwgaS5lLiwgcm90YXRlIHRocm91Z2ggdGhlXG4gICAgICAgIHBvc3NpYmlsaXRpZXMgaW4gcmV2ZXJzZS4gVXNlZnVsIGZvciBjaGVja2luZyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lXG4gICAgICAgIHNvbHV0aW9uLlxuICAgICAgICAqL1xuICAgICAgICAvLyBBc3N1cmUgYSB2YWxpZCBib2FyZFxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy52YWxpZGF0ZV9ib2FyZChib2FyZCk7XG4gICAgICAgIGlmIChyZXBvcnQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBudW1iZXIgb2YgZ2l2ZW5zIGlzIGF0IGxlYXN0IE1JTl9HSVZFTlNcbiAgICAgICAgbGV0IG5yX2dpdmVucyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgb2YgYm9hcmQpIHtcbiAgICAgICAgICAgIGlmIChpICE9PSB0aGlzLkJMQU5LX0NIQVIgJiYgdGhpcy5faW4oaSwgdGhpcy5ESUdJVFMpKSB7XG4gICAgICAgICAgICAgICAgKytucl9naXZlbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5yX2dpdmVucyA8IHRoaXMuTUlOX0dJVkVOUykge1xuICAgICAgICAgICAgdGhyb3cgXCJUb28gZmV3IGdpdmVucy4gTWluaW11bSBnaXZlbnMgaXMgXCIgKyB0aGlzLk1JTl9HSVZFTlM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVmYXVsdCByZXZlcnNlIHRvIGZhbHNlXG4gICAgICAgIHJldmVyc2UgPSByZXZlcnNlIHx8IGZhbHNlO1xuICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IHRoaXMuX2dldF9jYW5kaWRhdGVzX21hcChib2FyZCk7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9zZWFyY2goY2FuZGlkYXRlcywgcmV2ZXJzZSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGxldCBzb2x1dGlvbiA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmUgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc29sdXRpb24gKz0gcmVzdWx0W3NxdWFyZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc29sdXRpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH07XG4gICAgZ2V0Q2FuZGlkYXRlcyA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYWxsIHBvc3NpYmxlIGNhbmRpZGF0ZWVzIGZvciBlYWNoIHNxdWFyZSBhcyBhIGdyaWQgb2ZcbiAgICAgICAgY2FuZGlkYXRlcywgcmV0dXJubmluZyBgZmFsc2VgIGlmIGEgY29udHJhZGljdGlvbiBpcyBlbmNvdW50ZXJlZC5cbiAgICBcbiAgICAgICAgUmVhbGx5IGp1c3QgYSB3cmFwcGVyIGZvciBzdWRva3UuX2dldF9jYW5kaWRhdGVzX21hcCBmb3IgcHJvZ3JhbW1lclxuICAgICAgICBjb25zdW1wdGlvbi5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gQXNzdXJlIGEgdmFsaWQgYm9hcmRcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMudmFsaWRhdGVfYm9hcmQoYm9hcmQpO1xuICAgICAgICBpZiAocmVwb3J0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyByZXBvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IGEgY2FuZGlkYXRlcyBtYXBcbiAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbWFwID0gdGhpcy5fZ2V0X2NhbmRpZGF0ZXNfbWFwKGJvYXJkKTtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhbiBlcnJvciwgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICghY2FuZGlkYXRlc19tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2Zvcm0gY2FuZGlkYXRlcyBtYXAgaW50byBncmlkXG4gICAgICAgIGxldCByb3dzID0gW107XG4gICAgICAgIGxldCBjdXJfcm93ID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIGluIGNhbmRpZGF0ZXNfbWFwKSB7XG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXNfbWFwW3NxdWFyZV07XG4gICAgICAgICAgICBjdXJfcm93LnB1c2goY2FuZGlkYXRlcyk7XG4gICAgICAgICAgICBpZiAoaSAlIDkgPT0gOCkge1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChjdXJfcm93KTtcbiAgICAgICAgICAgICAgICBjdXJfcm93ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICArK2k7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfTtcbiAgICBnZXRSZW1haW5pbmdEaWdpdHMgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IHRoaXMuZ2V0Q2FuZGlkYXRlcyhib2FyZCk7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAoY2FuZGlkYXRlcyB8fCBbXSlcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGkpID0+IGJvYXJkW2ldID09PSAnLicgPyBpdGVtIDogJycpXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHJpcF9kdXBzKGNoYXJhY3RlcnMpLnNvcnQoKTtcbiAgICB9O1xuICAgIF9nZXRfY2FuZGlkYXRlc19tYXAgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogR2V0IGFsbCBwb3NzaWJsZSBjYW5kaWRhdGVzIGZvciBlYWNoIHNxdWFyZSBhcyBhIG1hcCBpbiB0aGUgZm9ybVxuICAgICAgICB7c3F1YXJlOiBzdWRva3UuRElHSVRTfSB1c2luZyByZWN1cnNpdmUgY29uc3RyYWludCBwcm9wYWdhdGlvbi4gUmV0dXJuIGBmYWxzZWBcbiAgICAgICAgaWYgYSBjb250cmFkaWN0aW9uIGlzIGVuY291bnRlcmVkXG4gICAgICAgICovXG4gICAgICAgIC8vIEFzc3VyZSBhIHZhbGlkIGJvYXJkXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLnZhbGlkYXRlX2JvYXJkKGJvYXJkKTtcbiAgICAgICAgaWYgKHJlcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgcmVwb3J0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYW5kaWRhdGVfbWFwID0ge307XG4gICAgICAgIGxldCBzcXVhcmVzX3ZhbHVlc19tYXAgPSB0aGlzLl9nZXRfc3F1YXJlX3ZhbHNfbWFwKGJvYXJkKTtcbiAgICAgICAgLy8gU3RhcnQgYnkgYXNzaWduaW5nIGV2ZXJ5IGRpZ2l0IGFzIGEgY2FuZGlkYXRlIHRvIGV2ZXJ5IHNxdWFyZVxuICAgICAgICBmb3IgKGxldCBzaSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZV9tYXBbc2ldID0gdGhpcy5ESUdJVFM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGVhY2ggbm9uLWJsYW5rIHNxdWFyZSwgYXNzaWduIGl0cyB2YWx1ZSBpbiB0aGUgY2FuZGlkYXRlIG1hcCBhbmRcbiAgICAgICAgLy8gcHJvcGlnYXRlLlxuICAgICAgICBmb3IgKGxldCBzcXVhcmUgaW4gc3F1YXJlc192YWx1ZXNfbWFwKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gc3F1YXJlc192YWx1ZXNfbWFwW3NxdWFyZV07XG4gICAgICAgICAgICBpZiAodGhpcy5faW4odmFsLCB0aGlzLkRJR0lUUykpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3X2NhbmRpZGF0ZXMgPSB0aGlzLl9hc3NpZ24oY2FuZGlkYXRlX21hcCwgc3F1YXJlLCB2YWwpO1xuICAgICAgICAgICAgICAgIC8vIEZhaWwgaWYgd2UgY2FuJ3QgYXNzaWduIHZhbCB0byBzcXVhcmVcbiAgICAgICAgICAgICAgICBpZiAoIW5ld19jYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZV9tYXA7XG4gICAgfTtcbiAgICBfc2VhcmNoID0gKGNhbmRpZGF0ZXMsIHJldmVyc2UpID0+IHtcbiAgICAgICAgLyogR2l2ZW4gYSBtYXAgb2Ygc3F1YXJlcyAtPiBjYW5kaWF0ZXMsIHVzaW5nIGRlcHRoLWZpcnN0IHNlYXJjaCxcbiAgICAgICAgcmVjdXJzaXZlbHkgdHJ5IGFsbCBwb3NzaWJsZSB2YWx1ZXMgdW50aWwgYSBzb2x1dGlvbiBpcyBmb3VuZCwgb3IgZmFsc2VcbiAgICAgICAgaWYgbm8gc29sdXRpb24gZXhpc3RzLlxuICAgICAgICAqL1xuICAgICAgICAvLyBSZXR1cm4gaWYgZXJyb3IgaW4gcHJldmlvdXMgaXRlcmF0aW9uXG4gICAgICAgIGlmICghY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgcmV2ZXJzZSB0byBmYWxzZVxuICAgICAgICByZXZlcnNlID0gcmV2ZXJzZSB8fCBmYWxzZTtcbiAgICAgICAgLy8gSWYgb25seSBvbmUgY2FuZGlkYXRlIGZvciBldmVyeSBzcXVhcmUsIHdlJ3ZlIGEgc29sdmVkIHB1enpsZSFcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBjYW5kaWRhdGVzIG1hcC5cbiAgICAgICAgbGV0IG1heF9ucl9jYW5kaWRhdGVzID0gMDtcbiAgICAgICAgbGV0IG1heF9jYW5kaWRhdGVzX3NxdWFyZSA9IG51bGw7XG4gICAgICAgIGNhbmRpZGF0ZXM7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGxldCBucl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChucl9jYW5kaWRhdGVzID4gbWF4X25yX2NhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBtYXhfbnJfY2FuZGlkYXRlcyA9IG5yX2NhbmRpZGF0ZXM7XG4gICAgICAgICAgICAgICAgbWF4X2NhbmRpZGF0ZXNfc3F1YXJlID0gc3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhfbnJfY2FuZGlkYXRlcyA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hvb3NlIHRoZSBibGFuayBzcXVhcmUgd2l0aCB0aGUgZmV3ZXN0IHBvc3NpYmlsaXRpZXMgPiAxXG4gICAgICAgIGxldCBtaW5fbnJfY2FuZGlkYXRlcyA9IDEwO1xuICAgICAgICBsZXQgbWluX2NhbmRpZGF0ZXNfc3F1YXJlID0gJyc7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGxldCBucl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChucl9jYW5kaWRhdGVzIDwgbWluX25yX2NhbmRpZGF0ZXMgJiYgbnJfY2FuZGlkYXRlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBtaW5fbnJfY2FuZGlkYXRlcyA9IG5yX2NhbmRpZGF0ZXM7XG4gICAgICAgICAgICAgICAgbWluX2NhbmRpZGF0ZXNfc3F1YXJlID0gc3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNlYXJjaCB0aHJvdWdoIGVhY2ggb2YgdGhlIGNhbmRpZGF0ZXMgb2YgdGhlIHNxdWFyZVxuICAgICAgICAvLyBzdGFydGluZyB3aXRoIHRoZSBvbmUgd2l0aCBmZXdlc3QgY2FuZGlkYXRlcy5cbiAgICAgICAgLy8gUm90YXRlIHRocm91Z2ggdGhlIGNhbmRpZGF0ZXMgZm9yd2FyZHNcbiAgICAgICAgbGV0IG1pbl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1ttaW5fY2FuZGlkYXRlc19zcXVhcmVdO1xuICAgICAgICBpZiAoIXJldmVyc2UpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHZhbCBvZiBtaW5fY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBhIG5vbi1yZWRpY3Vsb3VzIGRlZXAgY29weSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX2NvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZXMpKTtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXh0ID0gdGhpcy5fc2VhcmNoKHRoaXMuX2Fzc2lnbihjYW5kaWRhdGVzX2NvcHksIG1pbl9jYW5kaWRhdGVzX3NxdWFyZSwgdmFsKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXNfbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlc19uZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJvdGF0ZSB0aHJvdWdoIHRoZSBjYW5kaWRhdGVzIGJhY2t3YXJkc1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgdmkgPSBtaW5fY2FuZGlkYXRlcy5sZW5ndGggLSAxOyB2aSA+PSAwOyAtLXZpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IG1pbl9jYW5kaWRhdGVzW3ZpXTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgYSBub24tcmVkaWN1bG91cyBkZWVwIGNvcHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19jb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVzKSk7XG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbmV4dCA9IHRoaXMuX3NlYXJjaCh0aGlzLl9hc3NpZ24oY2FuZGlkYXRlc19jb3B5LCBtaW5fY2FuZGlkYXRlc19zcXVhcmUsIHZhbCksIHJldmVyc2UpO1xuICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzX25leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNfbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZ2V0IHRocm91Z2ggYWxsIGNvbWJpbmF0aW9ucyBvZiB0aGUgc3F1YXJlIHdpdGggdGhlIGZld2VzdFxuICAgICAgICAvLyBjYW5kaWRhdGVzIHdpdGhvdXQgZmluZGluZyBhbiBhbnN3ZXIsIHRoZXJlIGlzbid0IG9uZS4gUmV0dXJuIGZhbHNlLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBfYXNzaWduID0gKGNhbmRpZGF0ZXMsIHNxdWFyZSwgdmFsKSA9PiB7XG4gICAgICAgIC8qIEVsaW1pbmF0ZSBhbGwgdmFsdWVzLCAqZXhjZXB0KiBmb3IgYHZhbGAsIGZyb20gYGNhbmRpZGF0ZXNgIGF0XG4gICAgICAgIGBzcXVhcmVgIChjYW5kaWRhdGVzW3NxdWFyZV0pLCBhbmQgcHJvcGFnYXRlLiBSZXR1cm4gdGhlIGNhbmRpZGF0ZXMgbWFwXG4gICAgICAgIHdoZW4gZmluaXNoZWQuIElmIGEgY29udHJhZGljaXRvbiBpcyBmb3VuZCwgcmV0dXJuIGZhbHNlLlxuICBcbiAgICAgICAgV0FSTklORzogVGhpcyB3aWxsIG1vZGlmeSB0aGUgY29udGVudHMgb2YgYGNhbmRpZGF0ZXNgIGRpcmVjdGx5LlxuICAgICAgICAqL1xuICAgICAgICAvLyBHcmFiIGEgbGlzdCBvZiBjYW5pZGF0ZXMgd2l0aG91dCAndmFsJ1xuICAgICAgICBsZXQgb3RoZXJfdmFscyA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5yZXBsYWNlKHZhbCwgXCJcIik7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgb3RoZXIgdmFsdWVzIGFuZCBlbGltaW5hdGUgdGhlbSBmcm9tIHRoZSBjYW5kaWRhdGVzXG4gICAgICAgIC8vIGF0IHRoZSBjdXJyZW50IHNxdWFyZSwgYW5kIHByb3BpZ2F0ZS4gSWYgYXQgYW55IHBvaW50IHdlIGdldCBhXG4gICAgICAgIC8vIGNvbnRyYWRpY3Rpb24sIHJldHVybiBmYWxzZS5cbiAgICAgICAgZm9yIChsZXQgb3RoZXJfdmFsIG9mIG90aGVyX3ZhbHMpIHtcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX25leHQgPSB0aGlzLl9lbGltaW5hdGUoY2FuZGlkYXRlcywgc3F1YXJlLCBvdGhlcl92YWwpO1xuICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGVzX25leHQpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29udHJhZGljdGlvbiBmb3VuZCBieSBfZWxpbWluYXRlLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgfTtcbiAgICBfZWxpbWluYXRlID0gKGNhbmRpZGF0ZXMsIHNxdWFyZSwgdmFsKSA9PiB7XG4gICAgICAgIC8qIEVsaW1pbmF0ZSBgdmFsYCBmcm9tIGBjYW5kaWRhdGVzYCBhdCBgc3F1YXJlYCwgKGNhbmRpZGF0ZXNbc3F1YXJlXSksXG4gICAgICAgIGFuZCBwcm9wYWdhdGUgd2hlbiB2YWx1ZXMgb3IgcGxhY2VzIDw9IDIuIFJldHVybiB1cGRhdGVkIGNhbmRpZGF0ZXMsXG4gICAgICAgIHVubGVzcyBhIGNvbnRyYWRpY3Rpb24gaXMgZGV0ZWN0ZWQsIGluIHdoaWNoIGNhc2UsIHJldHVybiBmYWxzZS5cbiAgXG4gICAgICAgIFdBUk5JTkc6IFRoaXMgd2lsbCBtb2RpZnkgdGhlIGNvbnRlbnRzIG9mIGBjYW5kaWRhdGVzYCBkaXJlY3RseS5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gSWYgYHZhbGAgaGFzIGFscmVhZHkgYmVlbiBlbGltaW5hdGVkIGZyb20gY2FuZGlkYXRlc1tzcXVhcmVdLCByZXR1cm5cbiAgICAgICAgLy8gd2l0aCBjYW5kaWRhdGVzLlxuICAgICAgICBpZiAoIXRoaXMuX2luKHZhbCwgY2FuZGlkYXRlc1tzcXVhcmVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGB2YWxgIGZyb20gY2FuZGlkYXRlc1tzcXVhcmVdXG4gICAgICAgIGNhbmRpZGF0ZXNbc3F1YXJlXSA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5yZXBsYWNlKHZhbCwgJycpO1xuICAgICAgICAvLyBJZiB0aGUgc3F1YXJlIGhhcyBvbmx5IGNhbmRpZGF0ZSBsZWZ0LCBlbGltaW5hdGUgdGhhdCB2YWx1ZSBmcm9tIGl0c1xuICAgICAgICAvLyBwZWVyc1xuICAgICAgICBsZXQgbnJfY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGg7XG4gICAgICAgIGlmIChucl9jYW5kaWRhdGVzID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0X3ZhbCA9IGNhbmRpZGF0ZXNbc3F1YXJlXTtcbiAgICAgICAgICAgIGZvciAobGV0IHBlZXIgb2YgdGhpcy5TUVVBUkVfUEVFUlNfTUFQW3NxdWFyZV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXcgPSB0aGlzLl9lbGltaW5hdGUoY2FuZGlkYXRlcywgcGVlciwgdGFyZ2V0X3ZhbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGVzX25ldykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgc3F1YXJlIGhhcyBubyBjYW5kaWRhdGVzLCB3ZSBoYXZlIGEgY29udHJhZGljdGlvbi5cbiAgICAgICAgICAgIC8vIFJldHVybiBmYWxzZS5cbiAgICAgICAgfVxuICAgICAgICBpZiAobnJfY2FuZGlkYXRlcyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgdW5pdCBpcyByZWR1Y2VkIHRvIG9ubHkgb25lIHBsYWNlIGZvciBhIHZhbHVlLCB0aGVuIGFzc2lnbiBpdFxuICAgICAgICBmb3IgKGxldCB1bml0IG9mIHRoaXMuU1FVQVJFX1VOSVRTX01BUFtzcXVhcmVdKSB7XG4gICAgICAgICAgICBsZXQgdmFsX3BsYWNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgdW5pdF9zcXVhcmUgb2YgdW5pdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbih2YWwsIGNhbmRpZGF0ZXNbdW5pdF9zcXVhcmVdKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxfcGxhY2VzLnB1c2godW5pdF9zcXVhcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGxhY2UgZm9yIHRoaXMgdmFsdWUsIHdlIGhhdmUgYSBjb250cmFkaXRpb24hXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGlmICh2YWxfcGxhY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgdGhlIHZhbHVlIGNhbiBvbmx5IGJlIGluIG9uZSBwbGFjZS4gQXNzaWduIGl0IHRoZXJlLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsX3BsYWNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXcgPSB0aGlzLl9hc3NpZ24oY2FuZGlkYXRlcywgdmFsX3BsYWNlc1swXSwgdmFsKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmRpZGF0ZXNfbmV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgfTtcbiAgICAvLyBHcm91cHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2V0R3JvdXBOdW1iZXIgPSAoY29sLCByb3cpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0U2VjdGlvbk51bWJlciA9IChuKSA9PiBuIDwgMyA/ICcxJyA6XG4gICAgICAgICAgICBuIDwgNiA/ICcyJyA6XG4gICAgICAgICAgICAgICAgJzMnO1xuICAgICAgICByZXR1cm4gZ2V0U2VjdGlvbk51bWJlcihjb2wpICsgZ2V0U2VjdGlvbk51bWJlcihyb3cpO1xuICAgIH07XG4gICAgLy8gU3F1YXJlIHJlbGF0aW9uc2hpcHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3F1YXJlcywgYW5kIHRoZWlyIHJlbGF0aW9uc2hpcHMgd2l0aCB2YWx1ZXMsIHVuaXRzLCBhbmQgcGVlcnMuXG4gICAgX2dldF9zcXVhcmVfdmFsc19tYXAgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgbWFwIG9mIHNxdWFyZXMgLT4gdmFsdWVzXG4gICAgICAgICovXG4gICAgICAgIGxldCBzcXVhcmVzX3ZhbHNfbWFwID0ge307XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBgYm9hcmRgIGlzIGEgc3RyaW5nIG9mIGxlbmd0aCA4MVxuICAgICAgICBpZiAoYm9hcmQubGVuZ3RoICE9IHRoaXMuU1FVQVJFUy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IFwiQm9hcmQvc3F1YXJlcyBsZW5ndGggbWlzbWF0Y2guXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuU1FVQVJFUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNxdWFyZXNfdmFsc19tYXBbdGhpcy5TUVVBUkVTW2ldXSA9IGJvYXJkW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmVzX3ZhbHNfbWFwO1xuICAgIH07XG4gICAgX2dldF9zcXVhcmVfdW5pdHNfbWFwID0gKHNxdWFyZXMsIHVuaXRzKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhIG1hcCBvZiBgc3F1YXJlc2AgYW5kIHRoZWlyIGFzc29jaWF0ZWQgdW5pdHMgKHJvdywgY29sLCBib3gpXG4gICAgICAgICovXG4gICAgICAgIGxldCBzcXVhcmVfdW5pdF9tYXAgPSB7fTtcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHNxdWFyZS4uLlxuICAgICAgICBmb3IgKGxldCBzaSBpbiBzcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZSA9IHNxdWFyZXNbc2ldO1xuICAgICAgICAgICAgLy8gTWFpbnRhaW4gYSBsaXN0IG9mIHRoZSBjdXJyZW50IHNxdWFyZSdzIHVuaXRzXG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZV91bml0cyA9IFtdO1xuICAgICAgICAgICAgLy8gTG9vayB0aHJvdWdoIHRoZSB1bml0cywgYW5kIHNlZSBpZiB0aGUgY3VycmVudCBzcXVhcmUgaXMgaW4gaXQsXG4gICAgICAgICAgICAvLyBhbmQgaWYgc28sIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBvZiB0aGUgc3F1YXJlJ3MgdW5pdHMuXG4gICAgICAgICAgICBmb3IgKGxldCB1aSBpbiB1bml0cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJfdW5pdCA9IHVuaXRzW3VpXTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyX3VuaXQuaW5kZXhPZihjdXJfc3F1YXJlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyX3NxdWFyZV91bml0cy5wdXNoKGN1cl91bml0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHNxdWFyZSBhbmQgaXRzIHVuaXRzIHRvIHRoZSBtYXBcbiAgICAgICAgICAgIHNxdWFyZV91bml0X21hcFtjdXJfc3F1YXJlXSA9IGN1cl9zcXVhcmVfdW5pdHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZV91bml0X21hcDtcbiAgICB9O1xuICAgIF9nZXRfc3F1YXJlX3BlZXJzX21hcCA9IChzcXVhcmVzLCB1bml0c19tYXApID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgbWFwIG9mIGBzcXVhcmVzYCBhbmQgdGhlaXIgYXNzb2NpYXRlZCBwZWVycywgaS5lLiwgYSBzZXQgb2ZcbiAgICAgICAgb3RoZXIgc3F1YXJlcyBpbiB0aGUgc3F1YXJlJ3MgdW5pdC5cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNxdWFyZV9wZWVyc19tYXAgPSB7fTtcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHNxdWFyZS4uLlxuICAgICAgICBmb3IgKGxldCBzaSBpbiBzcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZSA9IHNxdWFyZXNbc2ldO1xuICAgICAgICAgICAgbGV0IGN1cl9zcXVhcmVfdW5pdHMgPSB1bml0c19tYXBbY3VyX3NxdWFyZV07XG4gICAgICAgICAgICAvLyBNYWludGFpbiBsaXN0IG9mIHRoZSBjdXJyZW50IHNxdWFyZSdzIHBlZXJzXG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZV9wZWVycyA9IFtdO1xuICAgICAgICAgICAgLy8gTG9vayB0aHJvdWdoIHRoZSBjdXJyZW50IHNxdWFyZSdzIHVuaXRzIG1hcC4uLlxuICAgICAgICAgICAgZm9yIChsZXQgc3VpIG9mIGN1cl9zcXVhcmVfdW5pdHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX3VuaXQgPSBzdWk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdWkgb2YgY3VyX3VuaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cl91bml0X3NxdWFyZSA9IHVpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyX3NxdWFyZV9wZWVycy5pbmRleE9mKGN1cl91bml0X3NxdWFyZSkgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJfdW5pdF9zcXVhcmUgIT09IGN1cl9zcXVhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cl9zcXVhcmVfcGVlcnMucHVzaChjdXJfdW5pdF9zcXVhcmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBzcXVhcmUgYW4gaXRzIGFzc29jaWF0ZWQgcGVlcnMgdG8gdGhlIG1hcFxuICAgICAgICAgICAgc3F1YXJlX3BlZXJzX21hcFtjdXJfc3F1YXJlXSA9IGN1cl9zcXVhcmVfcGVlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZV9wZWVyc19tYXA7XG4gICAgfTtcbiAgICBfZ2V0X2FsbF91bml0cyA9IChyb3dzLCBjb2xzKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhIGxpc3Qgb2YgYWxsIHVuaXRzIChyb3dzLCBjb2xzLCBib3hlcylcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHVuaXRzID0gW107XG4gICAgICAgIC8vIFJvd3NcbiAgICAgICAgZm9yIChsZXQgcmkgb2Ygcm93cykge1xuICAgICAgICAgICAgdW5pdHMucHVzaCh0aGlzLl9jcm9zcyhyaSwgY29scykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENvbHVtbnNcbiAgICAgICAgZm9yIChsZXQgY2kgb2YgY29scykge1xuICAgICAgICAgICAgdW5pdHMucHVzaCh0aGlzLl9jcm9zcyhyb3dzLCBjaSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJveGVzXG4gICAgICAgIGxldCByb3dfc3F1YXJlcyA9IFtcIkFCQ1wiLCBcIkRFRlwiLCBcIkdISVwiXTtcbiAgICAgICAgbGV0IGNvbF9zcXVhcmVzID0gW1wiMTIzXCIsIFwiNDU2XCIsIFwiNzg5XCJdO1xuICAgICAgICBmb3IgKGxldCByc2kgaW4gcm93X3NxdWFyZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNzaSBpbiBjb2xfc3F1YXJlcykge1xuICAgICAgICAgICAgICAgIHVuaXRzLnB1c2godGhpcy5fY3Jvc3Mocm93X3NxdWFyZXNbcnNpXSwgY29sX3NxdWFyZXNbY3NpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bml0cztcbiAgICB9O1xuICAgIC8vIENvbnZlcnNpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGJvYXJkX3N0cmluZ190b19ncmlkID0gKGJvYXJkX3N0cmluZykgPT4ge1xuICAgICAgICAvKiBDb252ZXJ0IGEgYm9hcmQgc3RyaW5nIHRvIGEgdHdvLWRpbWVuc2lvbmFsIGFycmF5XG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgbGV0IGN1cl9yb3cgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGJvYXJkX3N0cmluZykge1xuICAgICAgICAgICAgY3VyX3Jvdy5wdXNoKGkpO1xuICAgICAgICAgICAgaWYgKE51bWJlcihpKSAlIDkgPT0gOCkge1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChjdXJfcm93KTtcbiAgICAgICAgICAgICAgICBjdXJfcm93ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfTtcbiAgICBib2FyZF9ncmlkX3RvX3N0cmluZyA9IChib2FyZF9ncmlkKSA9PiB7XG4gICAgICAgIC8qIENvbnZlcnQgYSBib2FyZCBncmlkIHRvIGEgc3RyaW5nXG4gICAgICAgICovXG4gICAgICAgIGxldCBib2FyZF9zdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IDk7ICsrcikge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA5OyArK2MpIHtcbiAgICAgICAgICAgICAgICBib2FyZF9zdHJpbmcgKz0gYm9hcmRfZ3JpZFtyXVtjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmRfc3RyaW5nO1xuICAgIH07XG4gICAgLy8gVXRpbGl0eVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcmludF9ib2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBQcmludCBhIHN1ZG9rdSBgYm9hcmRgIHRvIHRoZSBjb25zb2xlLlxuICAgICAgICAqL1xuICAgICAgICAvLyBBc3N1cmUgYSB2YWxpZCBib2FyZFxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy52YWxpZGF0ZV9ib2FyZChib2FyZCk7XG4gICAgICAgIGlmIChyZXBvcnQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IHJlcG9ydDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgVl9QQURESU5HID0gXCIgXCI7IC8vIEluc2VydCBhZnRlciBlYWNoIHNxdWFyZVxuICAgICAgICBsZXQgSF9QQURESU5HID0gJ1xcbic7IC8vIEluc2VydCBhZnRlciBlYWNoIHJvd1xuICAgICAgICBsZXQgVl9CT1hfUEFERElORyA9IFwiICBcIjsgLy8gQm94IHZlcnRpY2FsIHBhZGRpbmdcbiAgICAgICAgbGV0IEhfQk9YX1BBRERJTkcgPSAnXFxuJzsgLy8gQm94IGhvcml6b250YWwgcGFkZGluZ1xuICAgICAgICBsZXQgZGlzcGxheV9zdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gYm9hcmRbaV07XG4gICAgICAgICAgICAvLyBBZGQgdGhlIHNxdWFyZSBhbmQgc29tZSBwYWRkaW5nXG4gICAgICAgICAgICBkaXNwbGF5X3N0cmluZyArPSBzcXVhcmUgKyBWX1BBRERJTkc7XG4gICAgICAgICAgICAvLyBWZXJ0aWNhbCBlZGdlIG9mIGEgYm94LCBpbnNlcnQgdi4gYm94IHBhZGRpbmdcbiAgICAgICAgICAgIGlmIChpICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfc3RyaW5nICs9IFZfQk9YX1BBRERJTkc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFbmQgb2YgYSBsaW5lLCBpbnNlcnQgaG9yaXouIHBhZGRpbmdcbiAgICAgICAgICAgIGlmIChpICUgOSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfc3RyaW5nICs9IEhfUEFERElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhvcml6b250YWwgZWRnZSBvZiBhIGJveCwgaW5zZXJ0IGguIGJveCBwYWRkaW5nXG4gICAgICAgICAgICBpZiAoaSAlIDI3ID09PSAyNikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfc3RyaW5nICs9IEhfQk9YX1BBRERJTkc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZGlzcGxheV9zdHJpbmcpO1xuICAgIH07XG4gICAgdmFsaWRhdGVfYm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGlmIHRoZSBnaXZlbiBgYm9hcmRgIGlzIHZhbGlkIG9yIG5vdC4gSWYgaXQncyB2YWxpZCwgcmV0dXJuXG4gICAgICAgIHRydWUuIElmIGl0J3Mgbm90LCByZXR1cm4gYSBzdHJpbmcgb2YgdGhlIHJlYXNvbiB3aHkgaXQncyBub3QuXG4gICAgICAgICovXG4gICAgICAgIC8vIENoZWNrIGZvciBlbXB0eSBib2FyZFxuICAgICAgICBpZiAoIWJvYXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJFbXB0eSBib2FyZFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIEludmFsaWQgYm9hcmQgbGVuZ3RoXG4gICAgICAgIGlmIChib2FyZC5sZW5ndGggIT09IHRoaXMuTlJfU1FVQVJFUykge1xuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBib2FyZCBzaXplLiBCb2FyZCBtdXN0IGJlIGV4YWN0bHkgXCIgKyB0aGlzLk5SX1NRVUFSRVMgK1xuICAgICAgICAgICAgICAgIFwiIHNxdWFyZXMuXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGludmFsaWQgY2hhcmFjdGVyc1xuICAgICAgICBmb3IgKGxldCBpIG9mIGJvYXJkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luKGksIHRoaXMuRElHSVRTKSAmJiBpICE9PSB0aGlzLkJMQU5LX0NIQVIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGJvYXJkIGNoYXJhY3RlciBlbmNvdW50ZXJlZCBhdCBpbmRleCBcIiArIGkgK1xuICAgICAgICAgICAgICAgICAgICBcIjogXCIgKyBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UncmUgZ29vZC4gUmV0dXJuIHRydWUuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgX2Nyb3NzID0gKGEsIGIpID0+IHtcbiAgICAgICAgLyogQ3Jvc3MgcHJvZHVjdCBvZiBhbGwgZWxlbWVudHMgaW4gYGFgIGFuZCBgYmAsIGUuZy4sXG4gICAgICAgIHN1ZG9rdS5fY3Jvc3MoXCJhYmNcIiwgXCIxMjNcIikgLT5cbiAgICAgICAgW1wiYTFcIiwgXCJhMlwiLCBcImEzXCIsIFwiYjFcIiwgXCJiMlwiLCBcImIzXCIsIFwiYzFcIiwgXCJjMlwiLCBcImMzXCJdXG4gICAgICAgICovXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgYWkgb2YgYSkge1xuICAgICAgICAgICAgZm9yIChsZXQgYmkgb2YgYikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFpICsgYmkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBfaW4gPSAodiwgc2VxKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBpZiBhIHZhbHVlIGB2YCBpcyBpbiBzZXF1ZW5jZSBgc2VxYC5cbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHNlcS5pbmRleE9mKHYpICE9PSAtMTtcbiAgICB9O1xuICAgIF9maXJzdF90cnVlID0gKHNlcSkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gdGhlIGZpcnN0IGVsZW1lbnQgaW4gYHNlcWAgdGhhdCBpcyB0cnVlLiBJZiBubyBlbGVtZW50IGlzXG4gICAgICAgIHRydWUsIHJldHVybiBmYWxzZS5cbiAgICAgICAgKi9cbiAgICAgICAgZm9yIChsZXQgaSBvZiBzZXEpIHtcbiAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgX3NodWZmbGUgPSAoc2VxKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhIHNodWZmbGVkIHZlcnNpb24gb2YgYHNlcWBcbiAgICAgICAgKi9cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIHRoZSBzYW1lIHNpemUgYXMgYHNlcWAgZmlsbGVkIHdpdGggZmFsc2VcbiAgICAgICAgbGV0IHNodWZmbGVkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBzaHVmZmxlZC5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpIG9mIHNlcSkge1xuICAgICAgICAgICAgbGV0IHRpID0gdGhpcy5fcmFuZF9yYW5nZShzZXEubGVuZ3RoKTtcbiAgICAgICAgICAgIHdoaWxlIChzaHVmZmxlZFt0aV0pIHtcbiAgICAgICAgICAgICAgICB0aSA9ICh0aSArIDEpID4gKHNlcS5sZW5ndGggLSAxKSA/IDAgOiAodGkgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNodWZmbGVkW3RpXSA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH07XG4gICAgX3JhbmRfcmFuZ2UgPSAobWF4LCBtaW4pID0+IHtcbiAgICAgICAgLyogR2V0IGEgcmFuZG9tIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIGBtaW5gIHRvIGBtYXhgIChub24gaW5jbHVzaXZlKS5cbiAgICAgICAgSWYgYG1pbmAgbm90IGRlZmluZWQsIGRlZmF1bHQgdG8gMC4gSWYgYG1heGAgbm90IGRlZmluZWQsIHRocm93IGFuXG4gICAgICAgIGVycm9yLlxuICAgICAgICAqL1xuICAgICAgICBtaW4gPSBtaW4gPz8gMDtcbiAgICAgICAgaWYgKG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiUmFuZ2UgdW5kZWZpbmVkXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIF9zdHJpcF9kdXBzID0gKHNlcSkgPT4ge1xuICAgICAgICAvKiBTdHJpcCBkdXBsaWNhdGUgdmFsdWVzIGZyb20gYHNlcWBcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNlcV9zZXQgPSBbXTtcbiAgICAgICAgbGV0IGR1cF9tYXAgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgZSBvZiBzZXEpIHtcbiAgICAgICAgICAgIGlmICghZHVwX21hcFtlXSkge1xuICAgICAgICAgICAgICAgIHNlcV9zZXQucHVzaChlKTtcbiAgICAgICAgICAgICAgICBkdXBfbWFwW2VdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VxX3NldDtcbiAgICB9O1xuICAgIF9mb3JjZV9yYW5nZSA9IChuciwgbWF4LCBtaW4pID0+IHtcbiAgICAgICAgLyogRm9yY2UgYG5yYCB0byBiZSB3aXRoaW4gdGhlIHJhbmdlIGZyb20gYG1pbmAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLFxuICAgICAgICBgbWF4YC4gYG1pbmAgaXMgb3B0aW9uYWwsIGFuZCB3aWxsIGRlZmF1bHQgdG8gMC4gSWYgYG5yYCBpcyB1bmRlZmluZWQsXG4gICAgICAgIHRyZWF0IGl0IGFzIHplcm8uXG4gICAgICAgICovXG4gICAgICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgICAgICBuciA9IG5yIHx8IDA7XG4gICAgICAgIGlmIChuciA8IG1pbikge1xuICAgICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnIgPiBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5yO1xuICAgIH07XG59O1xuU3Vkb2t1VFMgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFN1ZG9rdVRTKTtcbmV4cG9ydHMuU3Vkb2t1VFMgPSBTdWRva3VUUztcblN1ZG9rdVRTW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW107XG4vLyBjb25zdCBzdWRva3UgPSBuZXcgU3Vkb2t1VFMoKVxuLy8gY29uc3QgZ2FtZSA9IHN1ZG9rdS5nZW5lcmF0ZSgnZWFzeScpXG4vLyBnYW1lXG4vLyBjb25zdCByZXN1bHQgPSBzdWRva3Uuc29sdmUoZ2FtZSlcbi8vIHJlc3VsdFxuLy8gY29uc3QgY2FuZGlkYXRlcyA9ICg8c3RyaW5nW11bXT5zdWRva3Vcbi8vICAgLmdldENhbmRpZGF0ZXMoZ2FtZSkpXG4vLyAgIC5mbGF0KClcbi8vIGNvbnN0IHJlbWFpbmluZyA9IFsuLi5uZXcgU2V0KGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsIGkpID0+IHtcbi8vICAgaWYgKGdhbWVbaV0gPT09ICcuJylcbi8vICAgICByZXR1cm4gY2FuZGlkYXRlXG4vLyB9KS5qb2luKCcnKS5zcGxpdCgnJykpXS5zb3J0KClcbi8vIGNvbnNvbGUubG9nKGNhbmRpZGF0ZXMpXG4vLyBjb25zb2xlLmxvZyhyZW1haW5pbmcpXG4vLyBzdWRva3UucHJpbnRfYm9hcmQoZ2FtZSlcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5VTlJFQUNIQUJMRSA9IGV4cG9ydHMuQVNTRVJUID0gdm9pZCAwO1xuY29uc3QgQVNTRVJUID0gKG8pID0+IHtcbiAgICBpZiAobyA9PT0gdW5kZWZpbmVkIHx8IG8gPT09IG51bGwpXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgQXNzZXJ0aW9uIGVycm9yOiAke299YCk7XG4gICAgcmV0dXJuIG87XG59O1xuZXhwb3J0cy5BU1NFUlQgPSBBU1NFUlQ7XG5jb25zdCBVTlJFQUNIQUJMRSA9IChvKSA9PiB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnJlYWNoYWJsZSAke299YCk7XG59O1xuZXhwb3J0cy5VTlJFQUNIQUJMRSA9IFVOUkVBQ0hBQkxFO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnZlYzIgPSB2b2lkIDA7XG5jb25zdCB2ZWMyID0gKHgsIHkgPSB4KSA9PiBbeCwgeV07XG5leHBvcnRzLnZlYzIgPSB2ZWMyO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9hLCBfYiwgX2MsIF9kLCBfZSwgX2YsIF9nO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5WYW5pbGxhSnNWaWV3ID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVEaWZmaWN1bHR5XzEgPSByZXF1aXJlKFwiLi4vZW51bXMvR2FtZURpZmZpY3VsdHlcIik7XG5jb25zdCBJR2FtZVB1YlN1Yl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZVB1YlN1YlwiKTtcbmNvbnN0IElHYW1lTG9naWNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVMb2dpY1wiKTtcbmNvbnN0IElHYW1lTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZU1hbmFnZXJcIik7XG5jb25zdCBJR2FtZVJ1bm5lcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZVJ1bm5lclwiKTtcbmNvbnN0IElTdWRva3VUU18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JU3Vkb2t1VFNcIik7XG5jb25zdCBHYW1lU2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuLi9saWJyYXJ5L0dhbWVTZXR0aW5nc1wiKTtcbmNvbnN0IElJbnB1dFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lJbnB1dFByb3ZpZGVyXCIpO1xuLy8gaW1wb3J0IHsgdmVjMiB9IGZyb20gXCIuLi91dGlscy92ZWMyXCI7XG5sZXQgVmFuaWxsYUpzVmlldyA9IGNsYXNzIFZhbmlsbGFKc1ZpZXcge1xuICAgIGdhbWVNYW5hZ2VyO1xuICAgIGxvZ2ljO1xuICAgIHN1ZG9rdTtcbiAgICBydW5uZXI7XG4gICAgZXZlbnRzO1xuICAgIGlucHV0O1xuICAgIGNvbmZpZztcbiAgICByb290O1xuICAgIGJvYXJkO1xuICAgIGZvcm07XG4gICAgc2lkZWJhclRvZ2dsZTtcbiAgICByZXN0YXJ0QnV0dG9uO1xuICAgIG1lbnU7XG4gICAgc3RhdHM7XG4gICAga2V5cGFkQkc7XG4gICAga2V5cGFkO1xuICAgIGNvbnN0cnVjdG9yKGdhbWVNYW5hZ2VyLCBsb2dpYywgc3Vkb2t1LCBydW5uZXIsIGV2ZW50cywgaW5wdXQsIGNvbmZpZykge1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ2FtZU1hbmFnZXI7XG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgdGhpcy5zdWRva3UgPSBzdWRva3U7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgICAgICB0aGlzLmNvbmZpZyA9IGNvbmZpZztcbiAgICAgICAgdGhpcy5yb290ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignOnJvb3QnKTtcbiAgICAgICAgdGhpcy5ib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdWRva3VfYm9hcmQnKTtcbiAgICAgICAgdGhpcy5mb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignZm9ybScpO1xuICAgICAgICB0aGlzLnNpZGViYXJUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhci10b2dnbGUnKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jlc3RhcnRfYnV0dG9uJyk7XG4gICAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWRva3VfbWVudScpO1xuICAgICAgICB0aGlzLnN0YXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXRpc3RpY3MnKTtcbiAgICAgICAgdGhpcy5rZXlwYWRCRyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZF9jb25zb2xlX2NvbnRhaW5lcicpO1xuICAgICAgICB0aGlzLmtleXBhZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZF9jb25zb2xlJyk7XG4gICAgfVxuICAgIGdldENlbGxEaXNwbGF5VmFsdWUobW9kZWwsIGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGNlbGwudmFsdWUgPT09ICcuJyA/ICcnIDogY2VsbC52YWx1ZTtcbiAgICB9XG4gICAgcmVuZGVyQ2VsbChtb2RlbCwgY2VsbCkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIGVsLnN0eWxlLmhlaWdodCA9ICc2MnB4JztcbiAgICAgICAgY29uc3QgW3gsIHldID0gdGhpcy5sb2dpYy5nZXRUaWxlVmVjdG9yRm9ySW5kZXgoY2VsbC5pbmRleCk7XG4gICAgICAgIGNvbnN0IHNsUG9zID0gISFtb2RlbC5zZWxlY3RlZCAmJiB0aGlzLmxvZ2ljLmdldFRpbGVWZWN0b3JGb3JJbmRleChtb2RlbC5zZWxlY3RlZCk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkR3JvdXAgPSBzbFBvcyAmJiB0aGlzLnN1ZG9rdS5nZXRHcm91cE51bWJlcihzbFBvc1swXSwgc2xQb3NbMV0pO1xuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuc3Vkb2t1LmdldEdyb3VwTnVtYmVyKHgsIHkpO1xuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gbW9kZWwuc2VsZWN0ZWQgPT09IGNlbGwuaW5kZXg7XG4gICAgICAgIGNvbnN0IGlzR3JvdXAgPSBncm91cCA9PT0gc2VsZWN0ZWRHcm91cDtcbiAgICAgICAgY29uc3QgaXNJbmxpbmUgPSBpc0dyb3VwIHx8IChzbFBvcyAmJiAoc2xQb3NbMF0gPT09IHggfHwgc2xQb3NbMV0gPT09IHkpKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnZml4JywgY2VsbC5pc0hpbnQpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdjdXJyZW50JywgaXNTZWxlY3RlZCk7IC8vIGN1cnJlbnRseSBzZWxlY3RlZCBjZWxsXG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2dyb3VwJywgaXNHcm91cCk7IC8vIHNhbWUgc2VjdGlvbiBhcyBzZWxlY3RlZFxuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdzZWxlY3RlZCcsIGlzSW5saW5lKTsgLy8gaW5saW5lIHdpdGggc2VsZWN0ZWRcbiAgICAgICAgY29uc3QgaXNJbnZhbGlkID0gY2VsbC52YWx1ZSAhPT0gJy4nICYmXG4gICAgICAgICAgICBtb2RlbC5zb2x1dGlvbltjZWxsLmluZGV4XSAhPT0gY2VsbC52YWx1ZTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnbm90dmFsaWQnLCBpc0ludmFsaWQpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdib3JkZXJfdicsIFszLCA2XS5pbmNsdWRlcyh4ICsgMSkpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdib3JkZXJfaCcsIFszLCA2XS5pbmNsdWRlcyh5ICsgMSkpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3gnLCBTdHJpbmcoeCArIDEpKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd5JywgU3RyaW5nKHkgKyAxKSk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaWR4JywgU3RyaW5nKGNlbGwuaW5kZXgpKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QudG9nZ2xlKCdzYW1ldmFsdWUnLCAhIW1vZGVsLnNlbGVjdGVkICYmXG4gICAgICAgICAgICBtb2RlbC5zZWxlY3RlZCAhPT0gY2VsbC5pbmRleCAmJlxuICAgICAgICAgICAgY2VsbC52YWx1ZSA9PT0gbW9kZWwuY2VsbHNbbW9kZWwuc2VsZWN0ZWRdLnZhbHVlKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gdGhpcy5jb25maWcuY2VsbFNpemUgKyAncHgnO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2VsbERpc3BsYXlWYWx1ZShtb2RlbCwgY2VsbCk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICByZXR1cm4gZWwub3V0ZXJIVE1MO1xuICAgIH1cbiAgICByZW5kZXJDZWxsTGlzdChtb2RlbCkge1xuICAgICAgICByZXR1cm4gbW9kZWwuY2VsbHNcbiAgICAgICAgICAgIC5tYXAoY2VsbCA9PiB0aGlzLnJlbmRlckNlbGwobW9kZWwsIGNlbGwpKVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICByZW5kZXJCb2FyZChtb2RlbCkge1xuICAgICAgICB0aGlzLmJvYXJkLnN0eWxlLndpZHRoID0gdGhpcy5jb25maWcuYm9hcmRXaWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJDZWxsTGlzdChtb2RlbCk7XG4gICAgfVxuICAgIHJlbmRlclN0YXRzKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IG1vZGVsLmNlbGxzLnJlZHVjZSgoYSwgdikgPT4ge1xuICAgICAgICAgICAgaWYgKCF2LmlzSGludCAmJiB2LnZhbHVlID09PSAnLicpXG4gICAgICAgICAgICAgICAgYSsrO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0sIDApO1xuICAgICAgICB0aGlzLnN0YXRzLmlubmVySFRNTCA9IGBcbiAgICAgIDxiPkNlbGxzOjwvYj4gPHNwYW4gY2xhc3M9XCJjZWxsc19jb21wbGV0ZVwiPiR7cmVtYWluaW5nfS84MTwvc3Bhbj4gPGI+VGltZTo8L2I+IDxzcGFuIGNsYXNzPVwidGltZVwiPiR7dGhpcy5kdXJhdGlvbn08L3NwYW4+XG4gICAgYDtcbiAgICB9XG4gICAgc2V0Q2VsbFNpemUoeyBjZWxsU2l6ZTogW3gsIHldIH0pIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLWNlbGwtd2lkdGgnLCB4ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jZWxsLWhlaWdodCcsIHkgKyAncHgnKTtcbiAgICB9XG4gICAgc2V0Q2VsbENoYXJhY3RlcnMoeyBmbGFnQ2hhcmFjdGVyLCBtaW5lQ2hhcmFjdGVyIH0pIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLWZsYWctY2hhcmFjdGVyJywgZmxhZ0NoYXJhY3Rlcik7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1taW5lLWNoYXJhY3RlcicsIG1pbmVDaGFyYWN0ZXIpO1xuICAgIH1cbiAgICBzdGFydEdhbWUgPSBhc3luYyAoZGlmZmljdWx0eSA9IEdhbWVEaWZmaWN1bHR5XzEuR2FtZURpZmZpY3VsdHkuZWFzeSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhcnRHYW1lJywgZGlmZmljdWx0eSk7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZ2FtZU1hbmFnZXIuY3JlYXRlKGRpZmZpY3VsdHkpO1xuICAgICAgICAvLyB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAvLyAgIGlmIChnYW1lYm9hcmQuc3RhdGUgPCBHYW1lU3RhdGUuV09OKVxuICAgICAgICAvLyAgICAgZ2FtZWJvYXJkLnN0YXRlID0gR2FtZVN0YXRlLkdBTUVPVkVSO1xuICAgICAgICAvLyB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMucnVubmVyLnBsYXlHYW1lKGdhbWVib2FyZCk7XG4gICAgfTtcbiAgICBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgY29uc3QgZGlmZmljdWx0eSA9IGZvcm0uZ2V0KCdkaWZmaWN1bHR5Jyk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKGRpZmZpY3VsdHkpO1xuICAgIH07XG4gICAgb25DbGlja0NlbGwgPSAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGlmIChlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxFbGVtZW50KSB7XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBOdW1iZXIoZS50YXJnZXQuZ2V0QXR0cmlidXRlKCdpZHgnKSk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5wdXROZXh0SW5wdXQoeyBhY3Rpb246ICdzZWxlY3QnLCBjZWxsSW5kZXg6IGlkeCB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZml4JykpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5cGFkQkcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWR4JykpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQucHV0TmV4dElucHV0KHsgYWN0aW9uOiAnc2VsZWN0JywgY2VsbEluZGV4OiBpZHggfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZml4JykpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMua2V5cGFkQkcuc3R5bGUuZGlzcGxheSA9ICdmbGV4JztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgb25LZXlQcmVzcyA9IChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN1ZG9rdS5ESUdJVFMuaW5jbHVkZXMoZS5rZXkpKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnB1dE5leHRJbnB1dCh7IGFjdGlvbjogJ2tleXByZXNzJywga2V5OiBlLmtleSB9KTtcbiAgICAgICAgICAgIHRoaXMua2V5cGFkQkcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgZXZlbnRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdldmVudEhhbmRsZXInLCBldmVudCk7XG4gICAgICAgIHN3aXRjaCAoZXZlbnQudHlwZSkge1xuICAgICAgICAgICAgY2FzZSAnY29uZmlnLWNoYW5nZWQnOlxuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2VsbFNpemUodGhpcy5jb25maWcpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2V0Q2VsbENoYXJhY3RlcnModGhpcy5jb25maWcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYmVnaW4nOlxuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy50aW1lciA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbisrO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbmRlclN0YXRzKGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgIHRoaXMuZHVyYXRpb24gPSAwO1xuICAgICAgICAgICAgY2FzZSAndXBkYXRlJzoge1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQm9hcmQoZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTdGF0cyhldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNhc2UgJ2VuZCc6IHtcbiAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uID0gMDtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHRoaXMudGltZXIpO1xuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQm9hcmQoZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJTdGF0cyhldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgcmVnaXN0ZXJMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrQ2VsbCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbkNsaWNrQ2VsbCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgdGhpcy5yZXN0YXJ0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1zaWRlYmFyJyk7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0R2FtZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5zaWRlYmFyVG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLm1lbnUuY2xhc3NMaXN0LnRvZ2dsZSgnb3Blbi1zaWRlYmFyJyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmtleXBhZEJHLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmtleXBhZEJHLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmtleXBhZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja1BhZCk7XG4gICAgICAgIHRoaXMua2V5cGFkLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCB0aGlzLm9uQ2xpY2tQYWQpO1xuICAgICAgICB0aGlzLmV2ZW50cy5zdWJzY3JpYmUodGhpcy5ldmVudEhhbmRsZXIpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb25DbGlja1BhZCA9IChlKSA9PiB7XG4gICAgICAgIGlmICghKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTERpdkVsZW1lbnQpKVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICBpZiAoIShlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ251bScpKSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0Lm1hdGNoKC9bMS05XS8pKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnB1dE5leHRJbnB1dCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAna2V5cHJlc3MnLFxuICAgICAgICAgICAgICAgIGtleTogZS50YXJnZXQuaW5uZXJUZXh0LFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLmtleXBhZEJHLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoZS50YXJnZXQuaW5uZXJUZXh0ID09PSAnWCcpIHtcbiAgICAgICAgICAgIHRoaXMuaW5wdXQucHV0TmV4dElucHV0KHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdrZXlwcmVzcycsXG4gICAgICAgICAgICAgICAga2V5OiAnJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5rZXlwYWRCRy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB1bnJlZ2lzdGVyTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmV2ZW50cy51bnN1YnNjcmliZSh0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrQ2VsbCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbkNsaWNrQ2VsbCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb250cm9scygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgZHVyYXRpb24gPSAwO1xuICAgIHRpbWVyO1xufTtcblZhbmlsbGFKc1ZpZXcgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVNYW5hZ2VyXzEuSUdhbWVNYW5hZ2VyKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSUdhbWVMb2dpY18xLklHYW1lTG9naWMgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVMb2dpY18xLklHYW1lTG9naWMpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdCwgdHlwZW9mIChfYyA9IHR5cGVvZiBJU3Vkb2t1VFNfMS5JU3Vkb2t1VFMgIT09IFwidW5kZWZpbmVkXCIgJiYgSVN1ZG9rdVRTXzEuSVN1ZG9rdVRTKSA9PT0gXCJmdW5jdGlvblwiID8gX2MgOiBPYmplY3QsIHR5cGVvZiAoX2QgPSB0eXBlb2YgSUdhbWVSdW5uZXJfMS5JR2FtZVJ1bm5lciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZVJ1bm5lcl8xLklHYW1lUnVubmVyKSA9PT0gXCJmdW5jdGlvblwiID8gX2QgOiBPYmplY3QsIHR5cGVvZiAoX2UgPSB0eXBlb2YgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViKSA9PT0gXCJmdW5jdGlvblwiID8gX2UgOiBPYmplY3QsIHR5cGVvZiAoX2YgPSB0eXBlb2YgSUlucHV0UHJvdmlkZXJfMS5JSW5wdXRQcm92aWRlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJSW5wdXRQcm92aWRlcl8xLklJbnB1dFByb3ZpZGVyKSA9PT0gXCJmdW5jdGlvblwiID8gX2YgOiBPYmplY3QsIHR5cGVvZiAoX2cgPSB0eXBlb2YgR2FtZVNldHRpbmdzXzEuR2FtZVNldHRpbmdzICE9PSBcInVuZGVmaW5lZFwiICYmIEdhbWVTZXR0aW5nc18xLkdhbWVTZXR0aW5ncykgPT09IFwiZnVuY3Rpb25cIiA/IF9nIDogT2JqZWN0XSlcbl0sIFZhbmlsbGFKc1ZpZXcpO1xuZXhwb3J0cy5WYW5pbGxhSnNWaWV3ID0gVmFuaWxsYUpzVmlldztcblZhbmlsbGFKc1ZpZXdbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXCJJR2FtZU1hbmFnZXJcIiwgXCJJR2FtZUxvZ2ljXCIsIFwiSVN1ZG9rdVRTXCIsIFwiSUdhbWVSdW5uZXJcIiwgXCJJR2FtZVB1YlN1YlwiLCBcIklJbnB1dFByb3ZpZGVyXCIsIFwiR2FtZVNldHRpbmdzXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLnN0YXRpY0RlcHNQcm9wID0gZXhwb3J0cy5yZWZsZWN0VGFyZ2V0VHlwZSA9IGV4cG9ydHMucHJveHlDb21wYXJlS2V5ID0gdm9pZCAwO1xuZXhwb3J0cy5wcm94eUNvbXBhcmVLZXkgPSAnQEBnb2RzbWFjay9kaTpwcm94eS1jb21wYXJpc29uLWtleSc7XG5leHBvcnRzLnJlZmxlY3RUYXJnZXRUeXBlID0gJ0BAZ29kc21hY2svZGk6dGFyZ2V0LXNpbmdsZXRvbic7XG5leHBvcnRzLnN0YXRpY0RlcHNQcm9wID0gJ0BAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcCc7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW5qZWN0YWJsZSA9IHZvaWQgMDtcbmNvbnN0IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeVwiKTtcbmNvbnN0IEluamVjdGFibGUgPSAoKSA9PiAoMCwgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMS5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSkoKTtcbmV4cG9ydHMuSW5qZWN0YWJsZSA9IEluamVjdGFibGU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkgPSB2b2lkIDA7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jb25zdCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSA9ICh7IHNpbmdsZXRvbiA9IGZhbHNlIH0gPSB7fSkgPT4ge1xuICAgIHJldHVybiAodGFyZ2V0KSA9PiB7XG4gICAgICAgIGNvbnN0IHRhcmdldFR5cGUgPSBzaW5nbGV0b24gPyAnc2luZ2xldG9uJyA6ICd0cmFuc2llbnQnO1xuICAgICAgICBSZWZsZWN0LmRlZmluZU1ldGFkYXRhKGNvbnN0YW50c18xLnJlZmxlY3RUYXJnZXRUeXBlLCB0YXJnZXRUeXBlLCB0YXJnZXQpO1xuICAgIH07XG59O1xuZXhwb3J0cy5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSA9IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5O1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNlcnZpY2UgPSB2b2lkIDA7XG5jb25zdCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIik7XG5jb25zdCBTZXJ2aWNlID0gKCkgPT4gKDAsIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkpKCk7XG5leHBvcnRzLlNlcnZpY2UgPSBTZXJ2aWNlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNpbmdsZXRvbiA9IHZvaWQgMDtcbmNvbnN0IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeVwiKTtcbmNvbnN0IFNpbmdsZXRvbiA9ICgpID0+ICgwLCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5KSh7IHNpbmdsZXRvbjogdHJ1ZSB9KTtcbmV4cG9ydHMuU2luZ2xldG9uID0gU2luZ2xldG9uO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlNpbmdsZXRvbiA9IGV4cG9ydHMuU2VydmljZSA9IGV4cG9ydHMuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkgPSBleHBvcnRzLkluamVjdGFibGUgPSB2b2lkIDA7XG52YXIgSW5qZWN0YWJsZV8xID0gcmVxdWlyZShcIi4vSW5qZWN0YWJsZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkluamVjdGFibGVcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEluamVjdGFibGVfMS5JbmplY3RhYmxlOyB9IH0pO1xudmFyIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5OyB9IH0pO1xudmFyIFNlcnZpY2VfMSA9IHJlcXVpcmUoXCIuL1NlcnZpY2VcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTZXJ2aWNlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTZXJ2aWNlXzEuU2VydmljZTsgfSB9KTtcbnZhciBTaW5nbGV0b25fMSA9IHJlcXVpcmUoXCIuL1NpbmdsZXRvblwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNpbmdsZXRvblwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU2luZ2xldG9uXzEuU2luZ2xldG9uOyB9IH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vZGVjb3JhdG9yc1wiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbnRlcmZhY2UvSUNvbnRhaW5lclwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9pbnRlcmZhY2UvSUluamVjdG9yXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2xpYnJhcnkvQ29udGFpbmVyXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2xpYnJhcnkvSW5qZWN0b3JcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vdHlwZXNcIiksIGV4cG9ydHMpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5Db250YWluZXIgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgSW5qZWN0b3JfMSA9IHJlcXVpcmUoXCIuL0luamVjdG9yXCIpO1xuY29uc3QgcHJveGlmeV8xID0gcmVxdWlyZShcIi4uL3Byb3hpZnlcIik7XG5jbGFzcyBDb250YWluZXIge1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0geyBob3RTd2FwcGluZzogZmFsc2UgfSkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMuZ2V0SW5qZWN0b3IgPSAoKSA9PiB7IHJldHVybiB0aGlzLmluamVjdG9yOyB9O1xuICAgICAgICB0aGlzLmluamVjdG9yID0gbmV3IEluamVjdG9yXzEuSW5qZWN0b3Ioc2V0dGluZ3MpO1xuICAgIH1cbiAgICByZXNvbHZlKHRhcmdldCkge1xuICAgICAgICBpZiAodGFyZ2V0ID09IG51bGwpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBDb250YWluZXJEZXBlbmRlbmN5UmVzb2x1dGlvbkVycm9yKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnNldHRpbmdzLmhvdFN3YXBwaW5nXG4gICAgICAgICAgICA/ICgwLCBwcm94aWZ5XzEucHJveGlmeSkodGhpcy5pbmplY3RvciwgdGFyZ2V0KVxuICAgICAgICAgICAgOiB0aGlzLmluamVjdG9yLnJlc29sdmUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHJlc29sdmVkO1xuICAgIH1cbiAgICByZXBsYWNlKHR5cGUsIGltcGwpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYWRkU2VydmljZSh0eXBlLCBpbXBsLCB0cnVlKTtcbiAgICB9XG4gICAgY3JlYXRlKHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbmplY3Rvci5jcmVhdGUodGFyZ2V0KTtcbiAgICB9XG4gICAgYWRkU2VydmljZSh0eXBlLCBpbXBsID0gdHlwZSwgZm9yY2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVyVHlwZSh0eXBlLCBpbXBsLCBmb3JjZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRTZXJ2aWNlSW5zdGFuY2UodHlwZSwgaW5zdGFuY2UpIHtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3Rlckluc3RhbmNlKHR5cGUsIGluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFNpbmdsZXRvbih0eXBlLCBpbXBsID0gdHlwZSwgZm9yY2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVyVHlwZSh0eXBlLCBpbXBsLCBmb3JjZSk7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJTaW5nbGV0b24odHlwZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRTaW5nbGV0b25JbnN0YW5jZSh0eXBlLCBpbnN0YW5jZSwgZm9yY2UgPSBmYWxzZSkge1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVyVHlwZSh0eXBlLCB0eXBlLCBmb3JjZSk7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJJbnN0YW5jZSh0eXBlLCBpbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBvbkV4aXQoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIHlpZWxkIHRoaXMuaW5qZWN0b3IuZGVzdHJveUFsbCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkNvbnRhaW5lciA9IENvbnRhaW5lcjtcbmNsYXNzIENvbnRhaW5lckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKGBJbnZhbGlkIHRhcmdldDogJHt0YXJnZXR9YCk7XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluamVjdG9yID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IHByb3hpZnlfMSA9IHJlcXVpcmUoXCIuLi9wcm94aWZ5XCIpO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY2xhc3MgSW5qZWN0b3Ige1xuICAgIGNvbnN0cnVjdG9yKHNldHRpbmdzID0geyBob3RTd2FwcGluZzogZmFsc2UgfSkge1xuICAgICAgICB0aGlzLnNldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJTaW5nbGV0b24gPSAodHlwZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fX3NpbmdsZXRvbnMuYWRkKHRoaXMuZ2V0VHlwZU5hbWUodHlwZSkpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJUeXBlID0gKHR5cGUsIGltcGwsIGZvcmNlID0gZmFsc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KHR5cGUsIChpbXBsIHx8IHR5cGUpLCBmb3JjZSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckluc3RhbmNlID0gKHRhcmdldCwgaW5zdGFuY2UpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUuc2V0KHR5cGVOYW1lLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudXBzZXJ0RGVwZW5kZW5jeSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGRlcGVuZGVuY3kgPSB0aGlzLmdldERlcGVuZGVuY3kodGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICAgICAgaWYgKGRlcGVuZGVuY3kgIT0gbnVsbClcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVwZW5kZW5jeTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW5qZWN0b3JEZXBlbmRlbmN5Tm90Rm91bmRFcnJvcih0YXJnZXQpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaW5zZXJ0RGVwZW5kZW5jeSh0eXBlTmFtZSwgdGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWxvYWREZXBlbmRlbmN5ID0gKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIuaW5mbyhgSG90LVN3YXBwaW5nIFwiJHt0YXJnZXQubmFtZX1cIiBkZXBlbmRlbmN5LmApXG4gICAgICAgICAgICAvLyBUT0RPOiB0aGlzIG5lZWRzIG1vcmUgdGVzdGluZ1xuICAgICAgICAgICAgY29uc3QgZGVwID0gdGhpcy5nZXREZXBlbmRlbmN5KHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLl9fb3ZlcnJpZGVEZXBlbmRlbmN5KHRhcmdldCwgZGVwKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9fcmVwbGFjZUluc3RhbmNlSW5DYWNoZSh0YXJnZXQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmdldFR5cGVOYW1lID0gKHQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJ2ID0gKHR5cGVvZiB0ID09PSAnc3RyaW5nJykgPyB0IDogKHQgPT09IG51bGwgfHwgdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdC5uYW1lKSB8fCAodCA9PT0gbnVsbCB8fCB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0LmNvbnN0cnVjdG9yLm5hbWUpO1xuICAgICAgICAgICAgaWYgKCFydilcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgSW5qZWN0b3JHZXRUeXBlTmFtZUVycm9yKHQpO1xuICAgICAgICAgICAgcmV0dXJuIHJ2O1xuICAgICAgICB9O1xuICAgICAgICAvLyNlbmRyZWdpb25cbiAgICAgICAgLy8jcmVnaW9uIGludGVybmFsc1xuICAgICAgICB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fX3NpbmdsZXRvbnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIHRoaXMuX19sb2dnZXIgPSBuZXcgUHJveHkoY29uc29sZSwge1xuICAgICAgICAgICAgZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKC4uLmFyZ3MpID0+IHZvaWQgMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vI3JlZ2lvbiBhcGlcbiAgICByZXNvbHZlKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMuX19pbnN0YW5jZUNhY2hlLmhhcyh0eXBlTmFtZSkpXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX2luc3RhbmNlQ2FjaGUuZ2V0KHR5cGVOYW1lKTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLmNyZWF0ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGhhc0RlcGVuZGVuY3kodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHR5cGVuYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5oYXModHlwZW5hbWUpO1xuICAgIH1cbiAgICBnZXREZXBlbmRlbmN5KHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5nZXQodGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpKTtcbiAgICB9XG4gICAgaW5zZXJ0RGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkLCBvdmVycmlkZSkge1xuICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkLCBvdmVycmlkZSk7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpID8gdGFyZ2V0IDogcmVzb2x2ZWQ7XG4gICAgfVxuICAgIGNyZWF0ZSh0YXJnZXQpIHtcbiAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ1Jlc29sdmluZyBkZXBlbmRlbmN5ID0+JywgdHlwZU5hbWUpO1xuICAgICAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMudXBzZXJ0RGVwZW5kZW5jeSh0YXJnZXQpO1xuICAgICAgICBjb25zdCB7IGluamVjdGlvbnMgfSA9IHRoaXMuX19yZXNvbHZlVG9rZW5zKHJlc29sdmVkKTtcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9fY3JlYXRlT2JqZWN0KHJlc29sdmVkLCBpbmplY3Rpb25zKTtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLl9faXNTaW5nbGV0b25JbnN0YW5jZSh0eXBlTmFtZSwgcmVzb2x2ZWQpKVxuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUuc2V0KHR5cGVOYW1lLCBpbnN0YW5jZSk7XG4gICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdjcmVhdGVkJywgaW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gaW5zdGFuY2U7XG4gICAgfVxuICAgIGRlc3Ryb3lBbGwoKSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlcHMgPSBbLi4udGhpcy5fX2luc3RhbmNlQ2FjaGUudmFsdWVzKCldO1xuICAgICAgICAgICAgeWllbGQgUHJvbWlzZS5hbGxTZXR0bGVkKGRlcHMubWFwKGVhY2ggPT4gdGhpcy5fX2Rpc3Bvc2VPYmplY3QoZWFjaCkpKTtcbiAgICAgICAgICAgIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuY2xlYXIoKTtcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlLmNsZWFyKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsaXN0RGVwZW5kZW5jaWVzKHsgc29ydCA9IGZhbHNlLCBsb2cgPSBmYWxzZSB9ID0ge30pIHtcbiAgICAgICAgbGV0IHJlc3VsdCA9IFsuLi50aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmtleXMoKV07XG4gICAgICAgIGlmIChzb3J0KVxuICAgICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnNvcnQoKTtcbiAgICAgICAgaWYgKGxvZylcbiAgICAgICAgICAgIHRoaXMuX19sb2dnZXIuaW5mbyhyZXN1bHQpO1xuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICBkZXBlbmRlbmNpZXNBc0pTT04oKSB7XG4gICAgICAgIGNvbnN0IGNhY2hlS2V5cyA9IFsuLi50aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmtleXMoKV07XG4gICAgICAgIHJldHVybiBjYWNoZUtleXMuc29ydCgpLnJlZHVjZSgoYWNjLCBuKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuZ2V0KG4pO1xuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgYWNjKSwgeyBbbl06IChfYSA9IGluc3RhbmNlID09PSBudWxsIHx8IGluc3RhbmNlID09PSB2b2lkIDAgPyB2b2lkIDAgOiBpbnN0YW5jZS5jb25zdHJ1Y3RvcikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm5hbWUgfSk7XG4gICAgICAgIH0sIHt9KTtcbiAgICB9XG4gICAgX19yZXNvbHZlVG9rZW5zKHJlc29sdmVkKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBjb25zdCByZWZsZWN0ZWQgPSBSZWZsZWN0LmdldE1ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIHJlc29sdmVkKTtcbiAgICAgICAgLy8gdG9rZW5zIGFyZSByZXF1aXJlZCBkZXBlbmRlbmNpZXMsIHdoaWxlIGluamVjdGlvbnMgYXJlIHJlc29sdmVkIHRva2VucyBmcm9tIHRoZSBJbmplY3RvclxuICAgICAgICBjb25zdCB0b2tlbnMgPSAoX2IgPSAoX2EgPSByZWZsZWN0ZWQgPT09IG51bGwgfHwgcmVmbGVjdGVkID09PSB2b2lkIDAgPyB2b2lkIDAgOiByZWZsZWN0ZWQubWFwKChvLCBpKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoby5uYW1lID09PSAnT2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgICAgICByZXR1cm4gKF9hID0gcmVzb2x2ZWRbY29uc3RhbnRzXzEuc3RhdGljRGVwc1Byb3BdKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2FbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbztcbiAgICAgICAgfSkpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5maWx0ZXIoKG8pID0+IG8gIT0gbnVsbCkpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IFtdO1xuICAgICAgICBpZiAodG9rZW5zLmZpbmQobyA9PiBvLm5hbWUgPT09ICdPYmplY3QnKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEluamVjdG9yRGVwZW5kZW5jeVJlc29sdXRpb25FcnJvcihyZXNvbHZlZCwgdG9rZW5zKTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMuZm9yRWFjaCgoY2xzKSA9PiB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIGNscyA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpbXBsID0gdGhpcy5nZXREZXBlbmRlbmN5KGNscyk7XG4gICAgICAgICAgICAgICAgaWYgKGltcGwpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KGNscywgaW1wbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeShjbHMsIGNscyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBpbmplY3Rpb25zID0gKChfYyA9IHRoaXMuc2V0dGluZ3MpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5ob3RTd2FwcGluZylcbiAgICAgICAgICAgID8gdG9rZW5zLm1hcCh0b2tlbiA9PiAoMCwgcHJveGlmeV8xLnByb3hpZnkpKHRoaXMsIHRva2VuKSlcbiAgICAgICAgICAgIDogdG9rZW5zLm1hcCh0b2tlbiA9PiB0aGlzLnJlc29sdmUodG9rZW4pKTtcbiAgICAgICAgcmV0dXJuIHsgcmVzb2x2ZWQsIGluamVjdGlvbnMgfTtcbiAgICB9XG4gICAgX19hZGREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWRNYXliZSwgb3ZlcnJpZGUgPSBmYWxzZSkge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuaGFzKHR5cGVOYW1lKSkge1xuICAgICAgICAgICAgaWYgKCFvdmVycmlkZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZShyZXNvbHZlZFR5cGUpXG4gICAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZyhgT3ZlcnJpZGluZyA9PiAke3RhcmdldE5hbWV9IHRvID0+ICR7dHlwZU5hbWV9YClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZShyZXNvbHZlZFR5cGUpXG4gICAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZyhgU2V0dGluZyA9PiAke3RhcmdldE5hbWV9IHRvID0+ICR7dHlwZU5hbWV9YClcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvbHZlZFR5cGUgPSB0eXBlb2YgdGFyZ2V0ID09PSAnc3RyaW5nJyA/IHJlc29sdmVkTWF5YmVcbiAgICAgICAgICAgIDogcmVzb2x2ZWRNYXliZSA9PSBudWxsID8gdGFyZ2V0XG4gICAgICAgICAgICAgICAgOiAvKiBvdGhlcndpc2UgKi8gcmVzb2x2ZWRNYXliZTtcbiAgICAgICAgdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5zZXQodHlwZU5hbWUsIHJlc29sdmVkVHlwZSk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlLmRlbGV0ZSh0eXBlTmFtZSk7XG4gICAgfVxuICAgIF9fb3ZlcnJpZGVEZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQpIHtcbiAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZCwgdHJ1ZSk7XG4gICAgICAgIHJldHVybiAodHlwZW9mIHRhcmdldCAhPT0gJ3N0cmluZycpID8gdGFyZ2V0IDogcmVzb2x2ZWQ7XG4gICAgfVxuICAgIF9fcHVyZ2VJbnN0YW5jZUZyb21DYWNoZSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9faW5zdGFuY2VDYWNoZS5kZWxldGUodHlwZU5hbWUpO1xuICAgIH1cbiAgICBfX3JlcGxhY2VJbnN0YW5jZUluQ2FjaGUodGFyZ2V0KSB7XG4gICAgICAgIHRoaXMuX19wdXJnZUluc3RhbmNlRnJvbUNhY2hlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlc29sdmUodGFyZ2V0KTtcbiAgICB9XG4gICAgX19pc1NpbmdsZXRvbkluc3RhbmNlKHR5cGVOYW1lLCByZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fX3NpbmdsZXRvbnMuaGFzKHR5cGVOYW1lKSB8fFxuICAgICAgICAgICAgdGhpcy5fX3JlZmxlY3RUYXJnZXRUeXBlKHJlc29sdmVkKSA9PT0gJ3NpbmdsZXRvbic7XG4gICAgfVxuICAgIF9fcmVmbGVjdFRhcmdldFR5cGUocmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0TWV0YWRhdGEoY29uc3RhbnRzXzEucmVmbGVjdFRhcmdldFR5cGUsIHJlc29sdmVkKTtcbiAgICB9XG4gICAgX19jcmVhdGVPYmplY3QodGFyZ2V0LCBpbmplY3Rpb25zKSB7XG4gICAgICAgIHRoaXMuX19sb2dnZXIubG9nKCdjcmVhdGluZyBvYmplY3QsIHR5cGVOYW1lOicsIHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KSk7XG4gICAgICAgIHJldHVybiBuZXcgdGFyZ2V0KC4uLmluamVjdGlvbnMpO1xuICAgIH1cbiAgICBfX2Rpc3Bvc2VPYmplY3QodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0c2xpYl8xLl9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24qICgpIHtcbiAgICAgICAgICAgIC8vIEB0cy1leHBlY3QtZXJyb3JcbiAgICAgICAgICAgIGNvbnN0IGZuID0gdGFyZ2V0ID09PSBudWxsIHx8IHRhcmdldCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdGFyZ2V0LmRpc3Bvc2U7XG4gICAgICAgICAgICByZXR1cm4geWllbGQgKGZuID09PSBudWxsIHx8IGZuID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmbigpKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5JbmplY3RvciA9IEluamVjdG9yO1xuO1xuY2xhc3MgSW5qZWN0b3JEZXBlbmRlbmN5UmVzb2x1dGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCwgdG9rZW5zKSB7XG4gICAgICAgIGNvbnN0IGVycm9yID0gYFVuYWJsZSB0byByZXNvbHZlIGRlcGVuZGVuY2llcyBmb3IgPT4gJHt0YXJnZXQubmFtZX0sIGRlcHMgPT4gJHt0b2tlbnMubWFwKG8gPT4gby5uYW1lKX1gO1xuICAgICAgICBjb25zdCBoZWxwID0gYFBvc3NpYmxlIG1pc3VzZSBvZiBASW5qZWN0YWJsZSgpIGRlY29yYXRvciBvbiBjbGFzcyAke3RhcmdldC5uYW1lfWA7XG4gICAgICAgIHN1cGVyKGAke2Vycm9yfVxcbiR7aGVscH1gKTtcbiAgICB9XG59XG5jbGFzcyBJbmplY3RvckRlcGVuZGVuY3lOb3RGb3VuZEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICBzdXBlcihgVGFyZ2V0IG5vdCBmb3VuZDogJHt0YXJnZXR9YCk7XG4gICAgfVxufVxuY2xhc3MgSW5qZWN0b3JHZXRUeXBlTmFtZUVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICBzdXBlcihgc29tZXRoaW5nIGZ1Y2t5IGdvdCBwYXNzZWQgdG8gZ2V0VHlwZU5hbWUgPT4gJHt0YXJnZXR9YCk7XG4gICAgfVxufVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLmNvbXBhcmUgPSBleHBvcnRzLnByb3hpZnkgPSB2b2lkIDA7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuL2NvbnN0YW50c1wiKTtcbmNsYXNzIFByb3hpZnlOdWxsVG9rZW5FcnJvciBleHRlbmRzIEVycm9yIHtcbn1cbmZ1bmN0aW9uIHByb3hpZnkoaW5qZWN0b3IsIHRva2VuKSB7XG4gICAgaWYgKHRva2VuID09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IFByb3hpZnlOdWxsVG9rZW5FcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gbmV3IFByb3h5KC8qIGluamVjdG9yLnJlc29sdmUodG9rZW4pICovIHt9LCB7XG4gICAgICAgIGdldChfLCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gaW5qZWN0b3IucmVzb2x2ZSh0b2tlbik7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gY29uc3RhbnRzXzEucHJveHlDb21wYXJlS2V5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBSZWZsZWN0LmdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKTtcbiAgICAgICAgfSxcbiAgICB9KTtcbn1cbmV4cG9ydHMucHJveGlmeSA9IHByb3hpZnk7XG5jb25zdCBjb21wYXJlID0gKGEsIGIpID0+IHtcbiAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgYSA9IChfYiA9ICgoX2EgPSBhKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiB7fSlbY29uc3RhbnRzXzEucHJveHlDb21wYXJlS2V5XSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogYTtcbiAgICBiID0gKF9kID0gKChfYyA9IGIpICE9PSBudWxsICYmIF9jICE9PSB2b2lkIDAgPyBfYyA6IHt9KVtjb25zdGFudHNfMS5wcm94eUNvbXBhcmVLZXldKSAhPT0gbnVsbCAmJiBfZCAhPT0gdm9pZCAwID8gX2QgOiBiO1xuICAgIHJldHVybiBPYmplY3QuaXMoYSwgYik7XG59O1xuZXhwb3J0cy5jb21wYXJlID0gY29tcGFyZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCJ2YXIgZGVmZXJyZWQgPSBbXTtcbl9fd2VicGFja19yZXF1aXJlX18uTyA9IChyZXN1bHQsIGNodW5rSWRzLCBmbiwgcHJpb3JpdHkpID0+IHtcblx0aWYoY2h1bmtJZHMpIHtcblx0XHRwcmlvcml0eSA9IHByaW9yaXR5IHx8IDA7XG5cdFx0Zm9yKHZhciBpID0gZGVmZXJyZWQubGVuZ3RoOyBpID4gMCAmJiBkZWZlcnJlZFtpIC0gMV1bMl0gPiBwcmlvcml0eTsgaS0tKSBkZWZlcnJlZFtpXSA9IGRlZmVycmVkW2kgLSAxXTtcblx0XHRkZWZlcnJlZFtpXSA9IFtjaHVua0lkcywgZm4sIHByaW9yaXR5XTtcblx0XHRyZXR1cm47XG5cdH1cblx0dmFyIG5vdEZ1bGZpbGxlZCA9IEluZmluaXR5O1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IGRlZmVycmVkLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIFtjaHVua0lkcywgZm4sIHByaW9yaXR5XSA9IGRlZmVycmVkW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvciAodmFyIGogPSAwOyBqIDwgY2h1bmtJZHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdGlmICgocHJpb3JpdHkgJiAxID09PSAwIHx8IG5vdEZ1bGZpbGxlZCA+PSBwcmlvcml0eSkgJiYgT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5PKS5ldmVyeSgoa2V5KSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5PW2tleV0oY2h1bmtJZHNbal0pKSkpIHtcblx0XHRcdFx0Y2h1bmtJZHMuc3BsaWNlKGotLSwgMSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHRcdFx0aWYocHJpb3JpdHkgPCBub3RGdWxmaWxsZWQpIG5vdEZ1bGZpbGxlZCA9IHByaW9yaXR5O1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkLnNwbGljZShpLS0sIDEpXG5cdFx0XHR2YXIgciA9IGZuKCk7XG5cdFx0XHRpZiAociAhPT0gdW5kZWZpbmVkKSByZXN1bHQgPSByO1xuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufTsiLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uYiA9IGRvY3VtZW50LmJhc2VVUkkgfHwgc2VsZi5sb2NhdGlvbi5ocmVmO1xuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwibWFpblwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8uaiA9IChjaHVua0lkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID09PSAwKTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLk8ocmVzdWx0KTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdWRva3VcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3Vkb2t1XCJdIHx8IFtdO1xuY2h1bmtMb2FkaW5nR2xvYmFsLmZvckVhY2god2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCAwKSk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpKTsiLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGRlcGVuZHMgb24gb3RoZXIgbG9hZGVkIGNodW5rcyBhbmQgZXhlY3V0aW9uIG5lZWQgdG8gYmUgZGVsYXllZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8odW5kZWZpbmVkLCBbXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9hcGlfanMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2dldFUtOWRhYmQzXCJdLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vc3JjL2dhbWUudmFuaWxsYS50c1wiKSkpXG5fX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKF9fd2VicGFja19leHBvcnRzX18pO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9
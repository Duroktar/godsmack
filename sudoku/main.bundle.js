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
                this.timer = setInterval(() => {
                    this.duration++;
                    this.renderStats(event.payload);
                }, 1000);
            case 'update': {
                this.renderBoard(event.payload);
                // this.renderStats(event.payload);
                break;
            }
            case 'end': {
                clearInterval(this.timer);
                this.duration = 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5QkFBeUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw2QkFBNkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3N0eWxlcy9zdWRva3UubmljZS5jc3MiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3N0eWxlcy9zdWRva3UubmljZS5jc3M/NDI5MSIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvY29udGFpbmVyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9lbnVtcy9HYW1lRGlmZmljdWx0eS50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvZW51bXMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9nYW1lLnZhbmlsbGEudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JR2FtZUxvZ2ljLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSUdhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSUdhbWVQdWJTdWIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JR2FtZVJ1bm5lci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lJbnB1dFByb3ZpZGVyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSVN1ZG9rdVRTLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0dhbWVFdmVudHMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZUxvZ2ljLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0dhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0dhbWVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZVNldHRpbmdzLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0lucHV0UHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvU3Vkb2t1VFMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3V0aWxzL2Fzc2VydC50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvdXRpbHMvdmVjMi50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvdmlld3MvVmFuaWxsYUpzVmlldy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL0luamVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvU2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9pbnRlcmZhY2UvSUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvaW50ZXJmYWNlL0lJbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvbGlicmFyeS9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2xpYnJhcnkvSW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L3Byb3hpZnkuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L3R5cGVzLmpzIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBSVVsRVFWUVlWMk44OXVydGZ3WWlBQ05Jb1pTWU1DTWh0YU1LOFlZUTBjRURBRzV5SjhlTFJoVGZBQUFBQUVsRlRrU3VRbUNDXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiSDEge1xcbiAgYmFja2dyb3VuZDpibGFjaztcXG4gIGNvbG9yOndoaXRlO1xcbiAgbWFyZ2luOjBweCAwcHggMnB4IDBweDtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbiAgcGFkZGluZzoycHggMXB4IDVweCAxcHg7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTp2ZXJkYW5hLGhlbHZldGljYSxhcmlhbCxzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOjBweDsgbWFyZ2luOjBweDsgcGFkZGluZzowcHg7XFxuXFxuICBiYWNrZ3JvdW5kOnVybChcXG4gICAgICBcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcbiAgKSByZXBlYXQ7XFxufVxcblxcbi8qIGJvYXJkICovXFxuLnN1ZG9rdV9ib2FyZCB7XFxuICBtYXJnaW46NnB4IGF1dG87XFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHtcXG4gIHdpZHRoOjExLjExJTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIGZsb2F0OiBsZWZ0O1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3O1xcblxcbiAgYmFja2dyb3VuZDp3aGl0ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfaCB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgMHB4IC0ycHggMCAwICMzNDQ5NWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX3Yge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IC0ycHggMCAwICMzNDQ5NWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX2guYm9yZGVyX3Yge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IC0ycHggMCAwIGJsYWNrLCBpbnNldCAwcHggLTJweCAwIGJsYWNrO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4ge1xcbiAgY29sb3I6IzJjM2U1MDtcXG4gIGZvbnQtc2l6ZToxNHB4O1xcbiAgdGV4dC1hbGlnbjptaWRkbGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQsIC5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuZml4IHtcXG4gIGJhY2tncm91bmQ6I0ZGRTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5jdXJyZW50IHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5jdXJyZW50IHNwYW4ge1xcbiAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuZ3JvdXAge1xcbiAgY29sb3I6Ymx1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuLnNhbWV2YWx1ZSwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXggc3Bhbi5zYW1ldmFsdWUge1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGNvbG9yOiMzNDk4ZGI7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwubm90dmFsaWQsIC5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQubm90dmFsaWR7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgY29sb3I6d2hpdGU7O1xcbiAgYmFja2dyb3VuZDojZTc0YzNjO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCB7XFxuICBiYWNrZ3JvdW5kOiNlY2YwZjE7XFxuICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHNwYW4ge1xcbmNvbG9yOiM3ZjhjOGQ7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLnNvbHV0aW9uIHtcXG5mb250LXNpemU6MTBweDtcXG5jb2xvcjojZDM1NDAwO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHtcXG4gIGNvbG9yOiNiZGMzYzc7XFxuICB3aWR0aDo1MCU7XFxuICBoZWlnaHQ6NTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6bGVmdDtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgZm9udC1zaXplOjE0cHg7XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmdhbWVvdmVyX2NvbnRhaW5lciAuZ2FtZW92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6YmxvY2s7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHdpZHRoOjkwJTtcXG4gIHBhZGRpbmc6MTBweDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG5cXG4ucmVzdGFydCB7XFxuYmFja2dyb3VuZDojN0Y4QzhEO1xcbmNvbG9yOiNlY2YwZjE7XFxufVxcblxcbi8qIGNvbnNvbGUgKi9cXG4uYm9hcmRfY29uc29sZV9jb250YWluZXIsIC5nYW1lb3Zlcl9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDE0MCwgMTQxLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMzMuMyUgMzMuMyUgMzMuMyU7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDhlbSA4ZW0gOGVtIDhlbTtcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6NTAlO1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMTQwLCAxNDEsIDAuNyk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bSB7XFxuICAvKiB3aWR0aDozMy4zMyU7ICovXFxuICBjb2xvcjojMmMzZTUwO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBmb250LXNpemU6MjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzc7XFxufVxcblxcblxcbi5ib2FyZF9jb25zb2xlIC5udW06aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ucmVtb3ZlIHtcXG4gIHdpZHRoOiAyMDAlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUge1xcbiAgYmFja2dyb3VuZDojOTVhNWE2O1xcbiAgY29sb3I6I2VjZjBmMTtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGxlZnQ6IDEwMCU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiM5NWE1YTY7XFxuICBjb2xvcjojZjFjNDBmO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZS5zZWxlY3RlZDpob3ZlciB7XFxuY29sb3I6d2hpdGU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm86aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ucmVtb3ZlOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZDojYzAzOTJiO1xcbn1cXG5cXG4uc3RhdGlzdGljcyB7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDoyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCB7XFxuIG1hcmdpbjogMDtcXG4gcGFkZGluZzogMTAwcHggMHB4IDBweCAwcHg7XFxuIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCBsaXtcXG5tYXJnaW46IDBweCA1MHB4O1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwgbGkgYSB7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxucGFkZGluZzogMTVweCAyMHB4O1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5jb2xvcjogd2hpdGU7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmRpc3BsYXk6IGJsb2NrO1xcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmMzZTUwO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUub3Blbi1zaWRlYmFyIHtcXG5sZWZ0OjBweDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIHtcXG4gIHotaW5kZXg6MztcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIycHggMThweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUgLmJhcntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSAuYmFyOmxhc3QtY2hpbGR7XFxuICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLypSZXNwb25zaXZlIFN0dWZmKi9cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiA2NDBweCl7XFxuICBoMSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuc3RhdGlzdGljcyB7IGZvbnQtc2l6ZTozMHB4OyB9XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6NjBweDsgfVxcbiAgLmJvYXJkX2NvbnNvbGUgLm51bSB7IGZvbnQtc2l6ZTo2MHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIGFuZCAobWluLWhlaWdodDogNjQwcHgpe1xcbiAgaDEgeyBmb250LXNpemU6NTBweDsgfVxcbiAgLnN0YXRpc3RpY3MgeyBmb250LXNpemU6MzBweDsgfVxcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5ib2FyZF9jb25zb2xlIC5udW0geyBmb250LXNpemU6NTBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjMwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNjQwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToyNHB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZToxMHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ3MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTZweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6OHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTJweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6OHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kICAobWF4LXdpZHRoOiAyNDBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjEwcHg7IH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9zdWRva3UubmljZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxnQkFBZ0I7RUFDaEIsV0FBVztFQUNYLHNCQUFzQjtFQUN0QixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLDhDQUE4QztFQUM5QyxVQUFVLEVBQUUsVUFBVSxFQUFFLFdBQVc7O0VBRW5DOztVQUVRO0FBQ1Y7O0FBRUEsVUFBVTtBQUNWO0VBQ0UsZUFBZTs7RUFFZixnQkFBZ0I7O0VBRWhCLHlCQUF5QjtFQUN6QixzQkFBc0I7RUFDdEIscUJBQXFCO0VBQ3JCLGlCQUFpQjs7RUFFakIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJCQUEyQjtFQUMzQixXQUFXO0VBQ1gsY0FBYztFQUNkLGtCQUFrQjtFQUNsQixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQiw4QkFBOEIsRUFBRSxnQ0FBZ0M7SUFDOUQsMkJBQTJCLEtBQUsseUJBQXlCO0lBQ3pELHNCQUFzQjs7RUFFeEIsbUNBQW1DOztFQUVuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxpRkFBaUY7QUFDbkY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FB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RTtFQUM5QiwyQkFBMkIsY0FBYyxFQUFFO0VBQzNDLHNCQUFzQixjQUFjLEVBQUU7QUFDeEM7O0FBRUE7RUFDRSxLQUFLLGNBQWMsRUFBRTtFQUNyQixjQUFjLGNBQWMsRUFBRTtFQUM5QiwyQkFBMkIsY0FBYyxFQUFFO0VBQzNDLHNCQUFzQixjQUFjLEVBQUU7QUFDeEM7O0FBRUE7RUFDRSwyQkFBMkIsY0FBYyxFQUFFO0FBQzdDOztBQUVBO0FBQ0EsMkJBQTJCLGNBQWMsRUFBRTtBQUMzQyw0QkFBNEIsY0FBYyxFQUFFO0FBQzVDOztBQUVBO0FBQ0EsMkJBQTJCLGNBQWMsRUFBRTtBQUMzQyw0QkFBNEIsYUFBYSxFQUFFO0FBQzNDOztBQUVBO0FBQ0EsMkJBQTJCLGNBQWMsRUFBRTtBQUMzQyw0QkFBNEIsYUFBYSxFQUFFO0FBQzNDOztBQUVBO0FBQ0EsMkJBQTJCLGNBQWMsRUFBRTtBQUMzQ1wiLFwic291cmNlc0NvbnRlbnRcIjpbXCJIMSB7XFxuICBiYWNrZ3JvdW5kOmJsYWNrO1xcbiAgY29sb3I6d2hpdGU7XFxuICBtYXJnaW46MHB4IDBweCAycHggMHB4O1xcbiAgZm9udC1zaXplOjIwcHg7XFxuICBwYWRkaW5nOjJweCAxcHggNXB4IDFweDtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGZvbnQtZmFtaWx5OnZlcmRhbmEsaGVsdmV0aWNhLGFyaWFsLHNhbnMtc2VyaWY7XFxuICBib3JkZXI6MHB4OyBtYXJnaW46MHB4OyBwYWRkaW5nOjBweDtcXG5cXG4gIGJhY2tncm91bmQ6dXJsKFxcbiAgICAgIGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQW9BQUFBS0NBWUFBQUNOTXMrOUFBQUFJVWxFUVZRWVYyTjg5dXJ0ZndZaUFDTklvWlNZTUNNaHRhTUs4WVlRMGNFREFHNXlKOGVMUmhUZkFBQUFBRWxGVGtTdVFtQ0NcXG4gICkgcmVwZWF0O1xcbn1cXG5cXG4vKiBib2FyZCAqL1xcbi5zdWRva3VfYm9hcmQge1xcbiAgbWFyZ2luOjZweCBhdXRvO1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCB7XFxuICB3aWR0aDoxMS4xMSU7XFxuICAvKiBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7ICovXFxuICBmbG9hdDogbGVmdDtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNztcXG5cXG4gIGJhY2tncm91bmQ6d2hpdGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX2gge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IDBweCAtMnB4IDAgMCAjMzQ0OTVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl92IHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAtMnB4IDAgMCAjMzQ0OTVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl9oLmJvcmRlcl92IHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAtMnB4IDAgMCBibGFjaywgaW5zZXQgMHB4IC0ycHggMCBibGFjaztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHtcXG4gIGNvbG9yOiMyYzNlNTA7XFxuICBmb250LXNpemU6MTRweDtcXG4gIHRleHQtYWxpZ246bWlkZGxlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmZpeCB7XFxuICBiYWNrZ3JvdW5kOiNGRkU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuY3VycmVudCB7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuY3VycmVudCBzcGFuIHtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmdyb3VwIHtcXG4gIGNvbG9yOmJsdWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3Bhbi5zYW1ldmFsdWUsIC5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHNwYW4uc2FtZXZhbHVlIHtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBjb2xvcjojMzQ5OGRiO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLm5vdHZhbGlkLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLm5vdHZhbGlke1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGNvbG9yOndoaXRlOztcXG4gIGJhY2tncm91bmQ6I2U3NGMzYztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXgge1xcbiAgYmFja2dyb3VuZDojZWNmMGYxO1xcbiAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCBzcGFuIHtcXG5jb2xvcjojN2Y4YzhkO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5zb2x1dGlvbiB7XFxuZm9udC1zaXplOjEwcHg7XFxuY29sb3I6I2QzNTQwMDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7XFxuICBjb2xvcjojYmRjM2M3O1xcbiAgd2lkdGg6NTAlO1xcbiAgaGVpZ2h0OjUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OmxlZnQ7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gIGZvbnQtc2l6ZToxNHB4O1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5nYW1lb3Zlcl9jb250YWluZXIgLmdhbWVvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuXFxuICBkaXNwbGF5OmJsb2NrO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB3aWR0aDo5MCU7XFxuICBwYWRkaW5nOjEwcHg7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuXFxuLnJlc3RhcnQge1xcbmJhY2tncm91bmQ6IzdGOEM4RDtcXG5jb2xvcjojZWNmMGYxO1xcbn1cXG5cXG4vKiBjb25zb2xlICovXFxuLmJvYXJkX2NvbnNvbGVfY29udGFpbmVyLCAuZ2FtZW92ZXJfY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAxNDAsIDE0MSwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzLjMlIDMzLjMlIDMzLjMlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZW0gOGVtIDhlbSA4ZW07XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHdpZHRoOjUwJTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDE0MCwgMTQxLCAwLjcpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ge1xcbiAgLyogd2lkdGg6MzMuMzMlOyAqL1xcbiAgY29sb3I6IzJjM2U1MDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgZm9udC1zaXplOjI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3O1xcbn1cXG5cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnJlbW92ZSB7XFxuICB3aWR0aDogMjAwJTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlIHtcXG4gIGJhY2tncm91bmQ6Izk1YTVhNjtcXG4gIGNvbG9yOiNlY2YwZjE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDojOTVhNWE2O1xcbiAgY29sb3I6I2YxYzQwZjtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUuc2VsZWN0ZWQ6aG92ZXIge1xcbmNvbG9yOndoaXRlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnJlbW92ZTpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQ6I2MwMzkyYjtcXG59XFxuXFxuLnN0YXRpc3RpY3Mge1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbiNzdWRva3VfbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwge1xcbiBtYXJnaW46IDA7XFxuIHBhZGRpbmc6IDEwMHB4IDBweCAwcHggMHB4O1xcbiBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwgbGl7XFxubWFyZ2luOiAwcHggNTBweDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIGxpIGEge1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbnBhZGRpbmc6IDE1cHggMjBweDtcXG5mb250LXNpemU6IDI4cHg7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuY29sb3I6IHdoaXRlO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5kaXNwbGF5OiBibG9jaztcXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51Lm9wZW4tc2lkZWJhciB7XFxubGVmdDowcHg7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSB7XFxuICB6LWluZGV4OjM7XFxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyMnB4IDE4cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIC5iYXJ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUgLmJhcjpsYXN0LWNoaWxke1xcbiAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi8qUmVzcG9uc2l2ZSBTdHVmZiovXFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogNjQwcHgpe1xcbiAgaDEgeyBmb250LXNpemU6NTBweDsgfVxcbiAgLnN0YXRpc3RpY3MgeyBmb250LXNpemU6MzBweDsgfVxcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjYwcHg7IH1cXG4gIC5ib2FyZF9jb25zb2xlIC5udW0geyBmb250LXNpemU6NjBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KXtcXG4gIGgxIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5zdGF0aXN0aWNzIHsgZm9udC1zaXplOjMwcHg7IH1cXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuYm9hcmRfY29uc29sZSAubnVtIHsgZm9udC1zaXplOjUwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTozMHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MjRweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6MTBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NzBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjE2cHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjhweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjEycHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjhweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAgKG1heC13aWR0aDogMjQwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxMHB4OyB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3Vkb2t1Lm5pY2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdWRva3UubmljZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udGFpbmVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IElucHV0UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvSW5wdXRQcm92aWRlclwiKTtcbmNvbnN0IEdhbWVFdmVudHNfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvR2FtZUV2ZW50c1wiKTtcbmNvbnN0IEdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVNYW5hZ2VyXCIpO1xuY29uc3QgR2FtZVJ1bm5lcl8xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lUnVubmVyXCIpO1xuY29uc3QgR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVMb2dpY1wiKTtcbmNvbnN0IEdhbWVTZXR0aW5nc18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lU2V0dGluZ3NcIik7XG5jb25zdCBTdWRva3VUU18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9TdWRva3VUU1wiKTtcbmNvbnN0IFZhbmlsbGFKc1ZpZXdfMSA9IHJlcXVpcmUoXCIuL3ZpZXdzL1ZhbmlsbGFKc1ZpZXdcIik7XG5leHBvcnRzLmNvbnRhaW5lciA9IG5ldyBpbmplY3RfMS5Db250YWluZXIoKVxuICAgIC5hZGRTaW5nbGV0b24oVmFuaWxsYUpzVmlld18xLlZhbmlsbGFKc1ZpZXcpXG4gICAgLmFkZFNpbmdsZXRvbihHYW1lU2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MpXG4gICAgLmFkZFNpbmdsZXRvbihcIklTdWRva3VUU1wiLCBTdWRva3VUU18xLlN1ZG9rdVRTKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJR2FtZU1hbmFnZXJcIiwgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlcilcbiAgICAuYWRkU2luZ2xldG9uKFwiSUdhbWVSdW5uZXJcIiwgR2FtZVJ1bm5lcl8xLkdhbWVSdW5uZXIpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lUHViU3ViXCIsIEdhbWVFdmVudHNfMS5HYW1lRXZlbnRzKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJR2FtZUxvZ2ljXCIsIEdhbWVMb2dpY18xLkdhbWVMb2dpYylcbiAgICAuYWRkU2luZ2xldG9uKFwiSUlucHV0UHJvdmlkZXJcIiwgSW5wdXRQcm92aWRlcl8xLkRPTUlucHV0UHJvdmlkZXIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVEaWZmaWN1bHR5ID0gdm9pZCAwO1xudmFyIEdhbWVEaWZmaWN1bHR5O1xuKGZ1bmN0aW9uIChHYW1lRGlmZmljdWx0eSkge1xuICAgIEdhbWVEaWZmaWN1bHR5W1wiZWFzeVwiXSA9IFwiZWFzeVwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1wibWVkaXVtXCJdID0gXCJtZWRpdW1cIjtcbiAgICBHYW1lRGlmZmljdWx0eVtcImhhcmRcIl0gPSBcImhhcmRcIjtcbiAgICBHYW1lRGlmZmljdWx0eVtcInZlcnktaGFyZFwiXSA9IFwidmVyeS1oYXJkXCI7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJpbnNhbmVcIl0gPSBcImluc2FuZVwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1wiaW5odW1hblwiXSA9IFwiaW5odW1hblwiO1xufSkoR2FtZURpZmZpY3VsdHkgPSBleHBvcnRzLkdhbWVEaWZmaWN1bHR5IHx8IChleHBvcnRzLkdhbWVEaWZmaWN1bHR5ID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lU3RhdGUgPSB2b2lkIDA7XG52YXIgR2FtZVN0YXRlO1xuKGZ1bmN0aW9uIChHYW1lU3RhdGUpIHtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiUFJFR0FNRVwiXSA9IDBdID0gXCJQUkVHQU1FXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIlBMQVlJTkdcIl0gPSAxXSA9IFwiUExBWUlOR1wiO1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJQQVVTRURcIl0gPSAyXSA9IFwiUEFVU0VEXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIldPTlwiXSA9IDNdID0gXCJXT05cIjtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiR0FNRU9WRVJcIl0gPSA0XSA9IFwiR0FNRU9WRVJcIjtcbn0pKEdhbWVTdGF0ZSA9IGV4cG9ydHMuR2FtZVN0YXRlIHx8IChleHBvcnRzLkdhbWVTdGF0ZSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgY29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9jb250YWluZXJcIik7XG5jb25zdCBWYW5pbGxhSnNWaWV3XzEgPSByZXF1aXJlKFwiLi92aWV3cy9WYW5pbGxhSnNWaWV3XCIpO1xucmVxdWlyZShcIi4vc3R5bGVzL3N1ZG9rdS5uaWNlLmNzc1wiKTtcbmNvbnRhaW5lcl8xLmNvbnRhaW5lci5yZXNvbHZlKFZhbmlsbGFKc1ZpZXdfMS5WYW5pbGxhSnNWaWV3KVxuICAgIC5yZWdpc3Rlckxpc3RlbmVycygpXG4gICAgLnN0YXJ0R2FtZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVFdmVudHMgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xubGV0IEdhbWVFdmVudHMgPSBjbGFzcyBHYW1lRXZlbnRzIHtcbiAgICBwdWJsaXNoKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMuR0FNRV9FVkVOVCwgZXZlbnQpO1xuICAgIH1cbiAgICBzdWJzY3JpYmUoY2IpIHtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmFkZExpc3RlbmVyKHRoaXMuR0FNRV9FVkVOVCwgY2IpO1xuICAgIH1cbiAgICB1bnN1YnNjcmliZShjYikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIodGhpcy5HQU1FX0VWRU5ULCBjYik7XG4gICAgfVxuICAgIGVtaXR0ZXIgPSBuZXcgZXZlbnRzXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgR0FNRV9FVkVOVCA9ICdnYW1lLWV2ZW50Jztcbn07XG5HYW1lRXZlbnRzID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKVxuXSwgR2FtZUV2ZW50cyk7XG5leHBvcnRzLkdhbWVFdmVudHMgPSBHYW1lRXZlbnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVMb2dpYyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9hc3NlcnRcIik7XG5sZXQgR2FtZUxvZ2ljID0gY2xhc3MgR2FtZUxvZ2ljIHtcbiAgICBhcHBseUdhbWVJbnB1dChpbnB1dCwgbW9kZWwpIHtcbiAgICAgICAgaWYgKG1vZGVsLnN0YXRlIDwgR2FtZVN0YXRlXzEuR2FtZVN0YXRlLldPTikge1xuICAgICAgICAgICAgc3dpdGNoIChpbnB1dC5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnNlbGVjdGVkID0gaW5wdXQuY2VsbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAna2V5cHJlc3MnOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbW9kZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBtb2RlbC5jZWxsc1ttb2RlbC5zZWxlY3RlZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzSGludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwudmFsdWUgPT09IGlucHV0LmtleSB8fCBpbnB1dC5rZXkgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnZhbHVlID0gJy4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2VsbC52YWx1ZSA9IGlucHV0LmtleTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgYXNzZXJ0XzEuVU5SRUFDSEFCTEUpKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGVsLnN0YXRlID0gdGhpcy5nZXROZXh0R2FtZVN0YXRlKG1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxuICAgIGluaXRpYWxpemVHYW1lQ2VsbHMoc2VlZCkge1xuICAgICAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkgKiA5OyBpKyspIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2godGhpcy5jcmVhdGVHYW1lQ2VsbChpLCBzZWVkKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH1cbiAgICBnZXRUaWxlVmVjdG9yRm9ySW5kZXgoaW5kZXgpIHtcbiAgICAgICAgcmV0dXJuIFtNYXRoLmZsb29yKGluZGV4ICUgOSksIE1hdGguZmxvb3IoaW5kZXggLyA5KV07XG4gICAgfVxuICAgIGdldEluZGV4Rm9yVGlsZVZlY3RvcihbeCwgeV0pIHtcbiAgICAgICAgcmV0dXJuIHkgKiA5ICsgeDtcbiAgICB9XG4gICAgY3JlYXRlR2FtZUNlbGwoaW5kZXgsIHNlZWQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgaXNIaW50OiBzZWVkW2luZGV4XSAhPT0gJy4nLFxuICAgICAgICAgICAgdmFsdWU6IHNlZWRbaW5kZXhdLFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXROZXh0R2FtZVN0YXRlKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IGJvYXJkID0gbW9kZWwuY2VsbHNcbiAgICAgICAgICAgIC5tYXAoY2VsbCA9PiBjZWxsLnZhbHVlKVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgICAgICBpZiAobW9kZWwuc29sdXRpb24gPT09IGJvYXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gR2FtZVN0YXRlXzEuR2FtZVN0YXRlLldPTjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWwuc3RhdGU7XG4gICAgfVxufTtcbkdhbWVMb2dpYyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKClcbl0sIEdhbWVMb2dpYyk7XG5leHBvcnRzLkdhbWVMb2dpYyA9IEdhbWVMb2dpYztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYSwgX2I7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVNYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVTdGF0ZV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVTdGF0ZVwiKTtcbmNvbnN0IElHYW1lTG9naWNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVMb2dpY1wiKTtcbmNvbnN0IElTdWRva3VUU18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JU3Vkb2t1VFNcIik7XG5sZXQgR2FtZU1hbmFnZXIgPSBjbGFzcyBHYW1lTWFuYWdlciB7XG4gICAgbG9naWM7XG4gICAgc3Vkb2t1O1xuICAgIGNvbnN0cnVjdG9yKGxvZ2ljLCBzdWRva3UpIHtcbiAgICAgICAgdGhpcy5sb2dpYyA9IGxvZ2ljO1xuICAgICAgICB0aGlzLnN1ZG9rdSA9IHN1ZG9rdTtcbiAgICB9XG4gICAgY3JlYXRlKGRpZmZpY3VsdHkpIHtcbiAgICAgICAgY29uc3Qgc2VlZCA9IHRoaXMuc3Vkb2t1LmdlbmVyYXRlKGRpZmZpY3VsdHkpO1xuICAgICAgICBjb25zdCBzb2x1dGlvbiA9IHRoaXMuc3Vkb2t1LnNvbHZlKHNlZWQpO1xuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMubG9naWNcbiAgICAgICAgICAgIC5pbml0aWFsaXplR2FtZUNlbGxzKHNlZWQpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5QQVVTRUQ7XG4gICAgICAgIHJldHVybiB7IGNlbGxzLCBzZWVkLCBzdGF0ZSwgZGlmZmljdWx0eSwgc29sdXRpb24gfTtcbiAgICB9XG4gICAgdXBkYXRlKG1vZGVsLCBpbnB1dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dpYy5hcHBseUdhbWVJbnB1dChpbnB1dCwgbW9kZWwpO1xuICAgIH1cbn07XG5HYW1lTWFuYWdlciA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lTG9naWNfMS5JR2FtZUxvZ2ljICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lTG9naWNfMS5JR2FtZUxvZ2ljKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSVN1ZG9rdVRTXzEuSVN1ZG9rdVRTICE9PSBcInVuZGVmaW5lZFwiICYmIElTdWRva3VUU18xLklTdWRva3VUUykgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0XSlcbl0sIEdhbWVNYW5hZ2VyKTtcbmV4cG9ydHMuR2FtZU1hbmFnZXIgPSBHYW1lTWFuYWdlcjtcbkdhbWVNYW5hZ2VyW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW1wiSUdhbWVMb2dpY1wiLCBcIklTdWRva3VUU1wiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYSwgX2IsIF9jO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lUnVubmVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVTdGF0ZV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVTdGF0ZVwiKTtcbmNvbnN0IElHYW1lTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZU1hbmFnZXJcIik7XG5jb25zdCBJR2FtZVB1YlN1Yl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZVB1YlN1YlwiKTtcbmNvbnN0IElJbnB1dFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lJbnB1dFByb3ZpZGVyXCIpO1xubGV0IEdhbWVSdW5uZXIgPSBjbGFzcyBHYW1lUnVubmVyIHtcbiAgICBtYW5hZ2VyO1xuICAgIGV2ZW50cztcbiAgICBpbnB1dDtcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCBldmVudHMsIGlucHV0KSB7XG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuICAgIGFzeW5jIHBsYXlHYW1lKGdhbWVib2FyZCkge1xuICAgICAgICB0aGlzLmVtaXQoXCJiZWdpblwiLCBnYW1lYm9hcmQpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGF3YWl0IHRoaXMuaW5wdXQuZ2V0TmV4dElucHV0KCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJpbnB1dFwiLCBnYW1lYm9hcmQpO1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLnVwZGF0ZShnYW1lYm9hcmQsIGlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCBnYW1lYm9hcmQpO1xuICAgICAgICB9IHdoaWxlIChnYW1lYm9hcmQuc3RhdGUgPCBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OKTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZW5kXCIsIGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gICAgfVxuICAgIGVtaXQodHlwZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKHsgdHlwZSwgcGF5bG9hZCB9KTtcbiAgICB9XG59O1xuR2FtZVJ1bm5lciA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lTWFuYWdlcl8xLklHYW1lTWFuYWdlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdCwgdHlwZW9mIChfYiA9IHR5cGVvZiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdCwgdHlwZW9mIChfYyA9IHR5cGVvZiBJSW5wdXRQcm92aWRlcl8xLklJbnB1dFByb3ZpZGVyICE9PSBcInVuZGVmaW5lZFwiICYmIElJbnB1dFByb3ZpZGVyXzEuSUlucHV0UHJvdmlkZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfYyA6IE9iamVjdF0pXG5dLCBHYW1lUnVubmVyKTtcbmV4cG9ydHMuR2FtZVJ1bm5lciA9IEdhbWVSdW5uZXI7XG5HYW1lUnVubmVyW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW1wiSUdhbWVNYW5hZ2VyXCIsIFwiSUdhbWVQdWJTdWJcIiwgXCJJSW5wdXRQcm92aWRlclwiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZVNldHRpbmdzID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVEaWZmaWN1bHR5XzEgPSByZXF1aXJlKFwiLi4vZW51bXMvR2FtZURpZmZpY3VsdHlcIik7XG5jb25zdCBJR2FtZVB1YlN1Yl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZVB1YlN1YlwiKTtcbmNvbnN0IHZlYzJfMSA9IHJlcXVpcmUoXCIuLi91dGlscy92ZWMyXCIpO1xubGV0IEdhbWVTZXR0aW5ncyA9IGNsYXNzIEdhbWVTZXR0aW5ncyB7XG4gICAgZXZlbnRzO1xuICAgIGNvbnN0cnVjdG9yKGV2ZW50cykge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB9XG4gICAgZmxhZ0NoYXJhY3RlciA9ICfwn5qpJztcbiAgICBtaW5lQ2hhcmFjdGVyID0gJ/CfkqMnO1xuICAgIGRlZmF1bHREaWZmaWN1bHR5ID0gR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eS5lYXN5O1xuICAgIHRpbWVySW50ZXJ2YWwgPSAxMDA7XG4gICAgYm9hcmRXaWR0aCA9IDU0MDtcbiAgICBjZWxsU2l6ZSA9ICgwLCB2ZWMyXzEudmVjMikoTWF0aC5mbG9vcih0aGlzLmJvYXJkV2lkdGggLyA5KSk7XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9sZCA9IHNlbGZba2V5XTtcbiAgICAgICAgc2VsZltrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goe1xuICAgICAgICAgICAgdHlwZTogJ2NvbmZpZy1jaGFuZ2VkJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgb2xkLFxuICAgICAgICAgICAgICAgICAgICBuZXc6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbkdhbWVTZXR0aW5ncyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YikgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIEdhbWVTZXR0aW5ncyk7XG5leHBvcnRzLkdhbWVTZXR0aW5ncyA9IEdhbWVTZXR0aW5ncztcbkdhbWVTZXR0aW5nc1tcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lUHViU3ViXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ET01JbnB1dFByb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IGV2ZW50c18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJldmVudHNcIikpO1xubGV0IERPTUlucHV0UHJvdmlkZXIgPSBjbGFzcyBET01JbnB1dFByb3ZpZGVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHsgfVxuICAgIGFzeW5jIGdldE5leHRJbnB1dCgpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVtaXR0ZXIub25jZSgnZGF0YScsIGRhdGEgPT4gcmVzb2x2ZShkYXRhKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBwdXROZXh0SW5wdXQoZGF0YSkge1xuICAgICAgICBjb25zb2xlLmxvZygncHV0dGluZyBpbnB1dDonLCBkYXRhKTtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQoJ2RhdGEnLCBkYXRhKTtcbiAgICB9XG4gICAgZW1pdHRlciA9IG5ldyBldmVudHNfMS5kZWZhdWx0KCk7XG59O1xuRE9NSW5wdXRQcm92aWRlciA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgRE9NSW5wdXRQcm92aWRlcik7XG5leHBvcnRzLkRPTUlucHV0UHJvdmlkZXIgPSBET01JbnB1dFByb3ZpZGVyO1xuRE9NSW5wdXRQcm92aWRlcltcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtdO1xuLy8gZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VJbnB1dFByb3ZpZGVyIHtcbi8vICAgcHJvdGVjdGVkIGdldE5leHRJbnB1dCgpOiBQcm9taXNlPElHYW1lSW5wdXQ+IHtcbi8vICAgICByZXR1cm4gbmV3IFByb21pc2U8SUdhbWVJbnB1dD4oKHJlc29sdmUpID0+XG4vLyAgICAgICByZXNvbHZlKHRoaXMucHJvdmlkZU5leHRJbnB1dCgpKSlcbi8vICAgfVxuLy8gICBhYnN0cmFjdCBwcm92aWRlTmV4dElucHV0KCk6IFByb21pc2U8SUdhbWVJbnB1dD47XG4vLyB9XG4vLyBleHBvcnQgY2xhc3MgR2FtZUlucHV0UHJvdmlkZXIgZXh0ZW5kcyBCYXNlSW5wdXRQcm92aWRlciB7XG4vLyAgIHB1YmxpYyBhc3luYyBwcm92aWRlTmV4dElucHV0KCk6IFByb21pc2U8SUdhbWVJbnB1dD4ge1xuLy8gICB9XG4vLyB9XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gICAgU3Vkb2t1LnRzXG4gICAgLS0tLS0tLS0tXG5cbiAgICBBIFN1ZG9rdSBwdXp6bGUgZ2VuZXJhdG9yIGFuZCBzb2x2ZXIgSmF2YVNjcmlwdCBsaWJyYXJ5LlxuXG4gICAgUGxlYXNlIHNlZSB0aGUgUkVBRE1FIGZvciBtb3JlIGRldGFpbHMuXG5cbiAgICA+IE1vZGlmaWVkIGJ5IEBEdXJva3RhciBpbiAyMDIyIGZyb20gdGhlIG9yaWdpbmFsIGdpc3RbMF1cblxuICAgIFswXTogaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JvYmF0cm9uL3N1ZG9rdS5qcy9tYXN0ZXIvc3Vkb2t1LmpzXG4qL1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3Vkb2t1VFMgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xubGV0IFN1ZG9rdVRTID0gY2xhc3MgU3Vkb2t1VFMge1xuICAgIC8qKlxuICAgICAqICBBbGxvd2VkIHN1ZG9rdSBkaWdpdHMgKDAtOSlcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFN1ZG9rdVRTXG4gICAgICovXG4gICAgRElHSVRTO1xuICAgIERJRkZJQ1VMVFk7XG4gICAgUk9XUzsgLy8gUm93IGxhYmxlc1xuICAgIENPTFM7IC8vIENvbHVtbiBsYWJsZXNcbiAgICBTUVVBUkVTOyAvLyBTcXVhcmUgSURzXG4gICAgVU5JVFM7IC8vIEFsbCB1bml0cyAocm93LCBjb2x1bW4sIG9yIGJveClcbiAgICBTUVVBUkVfVU5JVFNfTUFQOyAvLyBTcXVhcmVzIC0+IHVuaXRzIG1hcFxuICAgIFNRVUFSRV9QRUVSU19NQVA7IC8vIFNxdWFyZXMgLT4gcGVlcnMgbWFwXG4gICAgTUlOX0dJVkVOUzsgLy8gTWluaW11bSBudW1iZXIgb2YgZ2l2ZW5zXG4gICAgTlJfU1FVQVJFUzsgLy8gTnVtYmVyIG9mIHNxdWFyZXNcbiAgICBCTEFOS19DSEFSO1xuICAgIEJMQU5LX0JPQVJEO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkRJR0lUUyA9IFwiMTIzNDU2Nzg5XCI7XG4gICAgICAgIHRoaXMuUk9XUyA9IFwiQUJDREVGR0hJXCI7XG4gICAgICAgIHRoaXMuQ09MUyA9IHRoaXMuRElHSVRTO1xuICAgICAgICB0aGlzLk1JTl9HSVZFTlMgPSAxNztcbiAgICAgICAgdGhpcy5OUl9TUVVBUkVTID0gODE7XG4gICAgICAgIC8vIERlZmluZSBkaWZmaWN1bHRpZXMgYnkgaG93IG1hbnkgc3F1YXJlcyBhcmUgZ2l2ZW4gdG8gdGhlIHBsYXllciBpbiBhIG5ld1xuICAgICAgICAvLyBwdXp6bGUuXG4gICAgICAgIHRoaXMuRElGRklDVUxUWSA9IHtcbiAgICAgICAgICAgIFwiZWFzeVwiOiA2MixcbiAgICAgICAgICAgIFwibWVkaXVtXCI6IDUzLFxuICAgICAgICAgICAgXCJoYXJkXCI6IDQ0LFxuICAgICAgICAgICAgXCJ2ZXJ5LWhhcmRcIjogMzUsXG4gICAgICAgICAgICBcImluc2FuZVwiOiAyNixcbiAgICAgICAgICAgIFwiaW5odW1hblwiOiAxNyxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmxhbmsgY2hhcmFjdGVyIGFuZCBib2FyZCByZXByZXNlbnRhdGlvblxuICAgICAgICB0aGlzLkJMQU5LX0NIQVIgPSAnLic7XG4gICAgICAgIHRoaXMuQkxBTktfQk9BUkQgPSBcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIiArXG4gICAgICAgICAgICBcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCI7XG4gICAgICAgIC8vIEluaXRcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLlNRVUFSRVMgPSB0aGlzLl9jcm9zcyh0aGlzLlJPV1MsIHRoaXMuQ09MUyk7XG4gICAgICAgIHRoaXMuVU5JVFMgPSB0aGlzLl9nZXRfYWxsX3VuaXRzKHRoaXMuUk9XUywgdGhpcy5DT0xTKTtcbiAgICAgICAgdGhpcy5TUVVBUkVfVU5JVFNfTUFQID0gdGhpcy5fZ2V0X3NxdWFyZV91bml0c19tYXAodGhpcy5TUVVBUkVTLCB0aGlzLlVOSVRTKTtcbiAgICAgICAgdGhpcy5TUVVBUkVfUEVFUlNfTUFQID0gdGhpcy5fZ2V0X3NxdWFyZV9wZWVyc19tYXAodGhpcy5TUVVBUkVTLCB0aGlzLlNRVUFSRV9VTklUU19NQVApO1xuICAgIH1cbiAgICAvLyBHZW5lcmF0ZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnZW5lcmF0ZSA9IChkaWZmaWN1bHR5LCB1bmlxdWUpID0+IHtcbiAgICAgICAgLyogR2VuZXJhdGUgYSBuZXcgU3Vkb2t1IHB1enpsZSBvZiBhIHBhcnRpY3VsYXIgYGRpZmZpY3VsdHlgLCBlLmcuLFxuICBcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuIFwiZWFzeVwiIHN1ZG9rdSBwdXp6bGVcbiAgICAgICAgICAgIHN1ZG9rdS5nZW5lcmF0ZShcImVhc3lcIik7XG4gIFxuICBcbiAgICAgICAgRGlmZmljdWx0aWVzIGFyZSBhcyBmb2xsb3dzLCBhbmQgcmVwcmVzZW50IHRoZSBudW1iZXIgb2YgZ2l2ZW4gc3F1YXJlczpcbiAgXG4gICAgICAgICAgICAgICAgXCJlYXN5XCI6ICAgICAgICAgNjFcbiAgICAgICAgICAgICAgICBcIm1lZGl1bVwiOiAgICAgICA1MlxuICAgICAgICAgICAgICAgIFwiaGFyZFwiOiAgICAgICAgIDQzXG4gICAgICAgICAgICAgICAgXCJ2ZXJ5LWhhcmRcIjogICAgMzRcbiAgICAgICAgICAgICAgICBcImluc2FuZVwiOiAgICAgICAyNVxuICAgICAgICAgICAgICAgIFwiaW5odW1hblwiOiAgICAgIDE3XG4gIFxuICBcbiAgICAgICAgWW91IG1heSBhbHNvIGVudGVyIGEgY3VzdG9tIG51bWJlciBvZiBzcXVhcmVzIHRvIGJlIGdpdmVuLCBlLmcuLFxuICBcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IFN1ZG9rdSBwdXp6bGUgd2l0aCA2MCBnaXZlbiBzcXVhcmVzXG4gICAgICAgICAgICBzdWRva3UuZ2VuZXJhdGUoNjApXG4gIFxuICBcbiAgICAgICAgYGRpZmZpY3VsdHlgIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAxNyBhbmQgODEgaW5jbHVzaXZlLiBJZiBpdCdzXG4gICAgICAgIG91dHNpZGUgb2YgdGhhdCByYW5nZSwgYGRpZmZpY3VsdHlgIHdpbGwgYmUgc2V0IHRvIHRoZSBjbG9zZXN0IGJvdW5kLFxuICAgICAgICBlLmcuLCAwIC0+IDE3LCBhbmQgMTAwIC0+IDgxLlxuICBcbiAgXG4gICAgICAgIEJ5IGRlZmF1bHQsIHRoZSBwdXp6bGVzIGFyZSB1bmlxdWUsIHVsZXNzIHlvdSBzZXQgYHVuaXF1ZWAgdG8gZmFsc2UuXG4gICAgICAgIChOb3RlOiBQdXp6bGUgdW5pcXVlbmVzcyBpcyBub3QgeWV0IGltcGxlbWVudGVkLCBzbyBwdXp6bGVzIGFyZSAqbm90KlxuICAgICAgICBndWFyYW50ZWVkIHRvIGhhdmUgdW5pcXVlIHNvbHV0aW9ucylcbiAgICAgICAgKi9cbiAgICAgICAgLy8gSWYgYGRpZmZpY3VsdHlgIGlzIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgY29udmVydCBpdCB0byBhIG51bWJlciBvclxuICAgICAgICAvLyBkZWZhdWx0IGl0IHRvIFwiZWFzeVwiIGlmIHVuZGVmaW5lZC5cbiAgICAgICAgbGV0IF9kaWZmaWN1bHR5O1xuICAgICAgICBpZiAodHlwZW9mIGRpZmZpY3VsdHkgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRpZmZpY3VsdHkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIF9kaWZmaWN1bHR5ID0gdGhpcy5ESUZGSUNVTFRZW2RpZmZpY3VsdHldIHx8IHRoaXMuRElGRklDVUxUWS5lYXN5O1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvcmNlIGRpZmZpY3VsdHkgYmV0d2VlbiAxNyBhbmQgODEgaW5jbHVzaXZlXG4gICAgICAgIF9kaWZmaWN1bHR5ID0gdGhpcy5fZm9yY2VfcmFuZ2UoX2RpZmZpY3VsdHksIHRoaXMuTlJfU1FVQVJFUyArIDEsIHRoaXMuTUlOX0dJVkVOUyk7XG4gICAgICAgIC8vIERlZmF1bHQgdW5pcXVlIHRvIHRydWVcbiAgICAgICAgdW5pcXVlID0gdW5pcXVlID8/IHRydWU7XG4gICAgICAgIC8vIEdldCBhIHNldCBvZiBzcXVhcmVzIGFuZCBhbGwgcG9zc2libGUgY2FuZGlkYXRlcyBmb3IgZWFjaCBzcXVhcmVcbiAgICAgICAgbGV0IGJsYW5rX2JvYXJkID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk5SX1NRVUFSRVM7ICsraSkge1xuICAgICAgICAgICAgYmxhbmtfYm9hcmQgKz0gJy4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSB0aGlzLl9nZXRfY2FuZGlkYXRlc19tYXAoYmxhbmtfYm9hcmQpO1xuICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFsc2UgY2FuZGlkYXRlcycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBlYWNoIGl0ZW0gaW4gYSBzaHVmZmxlZCBsaXN0IG9mIHNxdWFyZXNcbiAgICAgICAgbGV0IHNodWZmbGVkX3NxdWFyZXMgPSB0aGlzLl9zaHVmZmxlKHRoaXMuU1FVQVJFUyk7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzaHVmZmxlZF9zcXVhcmVzKSB7XG4gICAgICAgICAgICAvLyBJZiBhbiBhc3NpZ25tZW50IG9mIGEgcmFuZG9tIGNoaW9jZSBjYXVzZXMgYSBjb250cmFkaWN0b2luLCBnaXZlXG4gICAgICAgICAgICAvLyB1cCBhbmQgdHJ5IGFnYWluXG4gICAgICAgICAgICBsZXQgcmFuZF9jYW5kaWRhdGVfaWR4ID0gdGhpcy5fcmFuZF9yYW5nZShjYW5kaWRhdGVzW3NxdWFyZV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCByYW5kX2NhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbc3F1YXJlXVtyYW5kX2NhbmRpZGF0ZV9pZHhdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hc3NpZ24oY2FuZGlkYXRlcywgc3F1YXJlLCByYW5kX2NhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgYSBsaXN0IG9mIGFsbCBzaW5nbGUgY2FuZGlkYXRlc1xuICAgICAgICAgICAgbGV0IHNpbmdsZV9jYW5kaWRhdGVzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgdGhpcy5TUVVBUkVTKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzaW5nbGVfY2FuZGlkYXRlcy5wdXNoKGNhbmRpZGF0ZXNbc3F1YXJlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhdCBsZWFzdCBkaWZmaWN1bHR5LCBhbmQgdGhlIHVuaXF1ZSBjYW5kaWRhdGUgY291bnQgaXNcbiAgICAgICAgICAgIC8vIGF0IGxlYXN0IDgsIHJldHVybiB0aGUgcHV6emxlIVxuICAgICAgICAgICAgaWYgKHNpbmdsZV9jYW5kaWRhdGVzLmxlbmd0aCA+PSBfZGlmZmljdWx0eSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmlwX2R1cHMoc2luZ2xlX2NhbmRpZGF0ZXMpLmxlbmd0aCA+PSA4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsZXQgZ2l2ZW5zX2lkeHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuU1FVQVJFUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5TUVVBUkVTW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZCArPSBjYW5kaWRhdGVzW3NxdWFyZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBnaXZlbnNfaWR4cy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQgKz0gdGhpcy5CTEFOS19DSEFSO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgbW9yZSB0aGFuIGBkaWZmaWN1bHR5YCBnaXZlbnMsIHJlbW92ZSBzb21lIHJhbmRvbVxuICAgICAgICAgICAgICAgIC8vIGdpdmVucyB1bnRpbCB3ZSdyZSBkb3duIHRvIGV4YWN0bHkgYGRpZmZpY3VsdHlgXG4gICAgICAgICAgICAgICAgbGV0IG5yX2dpdmVucyA9IGdpdmVuc19pZHhzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobnJfZ2l2ZW5zID4gX2RpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2l2ZW5zX2lkeHMgPSB0aGlzLl9zaHVmZmxlKGdpdmVuc19pZHhzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBucl9naXZlbnMgLSBfZGlmZmljdWx0eTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyc2VJbnQoU3RyaW5nKGdpdmVuc19pZHhzW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZCA9IGJvYXJkLnN1YnN0cigwLCB0YXJnZXQpICsgdGhpcy5CTEFOS19DSEFSICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5zdWJzdHIodGFyZ2V0ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRG91YmxlIGNoZWNrIGJvYXJkIGlzIHNvbHZhYmxlXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogTWFrZSBhIHN0YW5kYWxvbmUgYm9hcmQgY2hlY2tlci4gU29sdmUgaXMgZXhwZW5zaXZlLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvbHZlKGJvYXJkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdpdmUgdXAgYW5kIHRyeSBhIG5ldyBwdXp6bGVcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGUoZGlmZmljdWx0eSk7XG4gICAgfTtcbiAgICAvLyBTb2x2ZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBzb2x2ZSA9IChib2FyZCwgcmV2ZXJzZSkgPT4ge1xuICAgICAgICAvKiBTb2x2ZSBhIHN1ZG9rdSBwdXp6bGUgZ2l2ZW4gYSBzdWRva3UgYGJvYXJkYCwgaS5lLiwgYW4gODEtY2hhcmFjdGVyXG4gICAgICAgIHN0cmluZyBvZiBzdWRva3UuRElHSVRTLCAxLTksIGFuZCBzcGFjZXMgaWRlbnRpZmllZCBieSAnLicsIHJlcHJlc2VudGluZyB0aGVcbiAgICAgICAgc3F1YXJlcy4gVGhlcmUgbXVzdCBiZSBhIG1pbmltdW0gb2YgMTcgZ2l2ZW5zLiBJZiB0aGUgZ2l2ZW4gYm9hcmQgaGFzIG5vXG4gICAgICAgIHNvbHV0aW9ucywgcmV0dXJuIGZhbHNlLlxuICBcbiAgICAgICAgT3B0aW9uYWxseSBzZXQgYHJldmVyc2VgIHRvIHNvbHZlIFwiYmFja3dhcmRzXCIsIGkuZS4sIHJvdGF0ZSB0aHJvdWdoIHRoZVxuICAgICAgICBwb3NzaWJpbGl0aWVzIGluIHJldmVyc2UuIFVzZWZ1bCBmb3IgY2hlY2tpbmcgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZVxuICAgICAgICBzb2x1dGlvbi5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gQXNzdXJlIGEgdmFsaWQgYm9hcmRcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMudmFsaWRhdGVfYm9hcmQoYm9hcmQpO1xuICAgICAgICBpZiAocmVwb3J0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgbnVtYmVyIG9mIGdpdmVucyBpcyBhdCBsZWFzdCBNSU5fR0lWRU5TXG4gICAgICAgIGxldCBucl9naXZlbnMgPSAwO1xuICAgICAgICBmb3IgKGxldCBpIG9mIGJvYXJkKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gdGhpcy5CTEFOS19DSEFSICYmIHRoaXMuX2luKGksIHRoaXMuRElHSVRTKSkge1xuICAgICAgICAgICAgICAgICsrbnJfZ2l2ZW5zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChucl9naXZlbnMgPCB0aGlzLk1JTl9HSVZFTlMpIHtcbiAgICAgICAgICAgIHRocm93IFwiVG9vIGZldyBnaXZlbnMuIE1pbmltdW0gZ2l2ZW5zIGlzIFwiICsgdGhpcy5NSU5fR0lWRU5TO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgcmV2ZXJzZSB0byBmYWxzZVxuICAgICAgICByZXZlcnNlID0gcmV2ZXJzZSB8fCBmYWxzZTtcbiAgICAgICAgbGV0IGNhbmRpZGF0ZXMgPSB0aGlzLl9nZXRfY2FuZGlkYXRlc19tYXAoYm9hcmQpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fc2VhcmNoKGNhbmRpZGF0ZXMsIHJldmVyc2UpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBsZXQgc29sdXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNvbHV0aW9uICs9IHJlc3VsdFtzcXVhcmVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNvbHV0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9O1xuICAgIGdldENhbmRpZGF0ZXMgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGFsbCBwb3NzaWJsZSBjYW5kaWRhdGVlcyBmb3IgZWFjaCBzcXVhcmUgYXMgYSBncmlkIG9mXG4gICAgICAgIGNhbmRpZGF0ZXMsIHJldHVybm5pbmcgYGZhbHNlYCBpZiBhIGNvbnRyYWRpY3Rpb24gaXMgZW5jb3VudGVyZWQuXG4gICAgXG4gICAgICAgIFJlYWxseSBqdXN0IGEgd3JhcHBlciBmb3Igc3Vkb2t1Ll9nZXRfY2FuZGlkYXRlc19tYXAgZm9yIHByb2dyYW1tZXJcbiAgICAgICAgY29uc3VtcHRpb24uXG4gICAgICAgICovXG4gICAgICAgIC8vIEFzc3VyZSBhIHZhbGlkIGJvYXJkXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLnZhbGlkYXRlX2JvYXJkKGJvYXJkKTtcbiAgICAgICAgaWYgKHJlcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgcmVwb3J0O1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCBhIGNhbmRpZGF0ZXMgbWFwXG4gICAgICAgIGxldCBjYW5kaWRhdGVzX21hcCA9IHRoaXMuX2dldF9jYW5kaWRhdGVzX21hcChib2FyZCk7XG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IsIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAoIWNhbmRpZGF0ZXNfbWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJhbnNmb3JtIGNhbmRpZGF0ZXMgbWFwIGludG8gZ3JpZFxuICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICBsZXQgY3VyX3JvdyA9IFtdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBpbiBjYW5kaWRhdGVzX21hcCkge1xuICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzX21hcFtzcXVhcmVdO1xuICAgICAgICAgICAgY3VyX3Jvdy5wdXNoKGNhbmRpZGF0ZXMpO1xuICAgICAgICAgICAgaWYgKGkgJSA5ID09IDgpIHtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goY3VyX3Jvdyk7XG4gICAgICAgICAgICAgICAgY3VyX3JvdyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKytpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH07XG4gICAgZ2V0UmVtYWluaW5nRGlnaXRzID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSB0aGlzLmdldENhbmRpZGF0ZXMoYm9hcmQpO1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gKGNhbmRpZGF0ZXMgfHwgW10pXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpKSA9PiBib2FyZFtpXSA9PT0gJy4nID8gaXRlbSA6ICcnKVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgICAgICByZXR1cm4gdGhpcy5fc3RyaXBfZHVwcyhjaGFyYWN0ZXJzKS5zb3J0KCk7XG4gICAgfTtcbiAgICBfZ2V0X2NhbmRpZGF0ZXNfbWFwID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIC8qIEdldCBhbGwgcG9zc2libGUgY2FuZGlkYXRlcyBmb3IgZWFjaCBzcXVhcmUgYXMgYSBtYXAgaW4gdGhlIGZvcm1cbiAgICAgICAge3NxdWFyZTogc3Vkb2t1LkRJR0lUU30gdXNpbmcgcmVjdXJzaXZlIGNvbnN0cmFpbnQgcHJvcGFnYXRpb24uIFJldHVybiBgZmFsc2VgXG4gICAgICAgIGlmIGEgY29udHJhZGljdGlvbiBpcyBlbmNvdW50ZXJlZFxuICAgICAgICAqL1xuICAgICAgICAvLyBBc3N1cmUgYSB2YWxpZCBib2FyZFxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy52YWxpZGF0ZV9ib2FyZChib2FyZCk7XG4gICAgICAgIGlmIChyZXBvcnQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IHJlcG9ydDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgY2FuZGlkYXRlX21hcCA9IHt9O1xuICAgICAgICBsZXQgc3F1YXJlc192YWx1ZXNfbWFwID0gdGhpcy5fZ2V0X3NxdWFyZV92YWxzX21hcChib2FyZCk7XG4gICAgICAgIC8vIFN0YXJ0IGJ5IGFzc2lnbmluZyBldmVyeSBkaWdpdCBhcyBhIGNhbmRpZGF0ZSB0byBldmVyeSBzcXVhcmVcbiAgICAgICAgZm9yIChsZXQgc2kgb2YgdGhpcy5TUVVBUkVTKSB7XG4gICAgICAgICAgICBjYW5kaWRhdGVfbWFwW3NpXSA9IHRoaXMuRElHSVRTO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBlYWNoIG5vbi1ibGFuayBzcXVhcmUsIGFzc2lnbiBpdHMgdmFsdWUgaW4gdGhlIGNhbmRpZGF0ZSBtYXAgYW5kXG4gICAgICAgIC8vIHByb3BpZ2F0ZS5cbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIGluIHNxdWFyZXNfdmFsdWVzX21hcCkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IHNxdWFyZXNfdmFsdWVzX21hcFtzcXVhcmVdO1xuICAgICAgICAgICAgaWYgKHRoaXMuX2luKHZhbCwgdGhpcy5ESUdJVFMpKSB7XG4gICAgICAgICAgICAgICAgbGV0IG5ld19jYW5kaWRhdGVzID0gdGhpcy5fYXNzaWduKGNhbmRpZGF0ZV9tYXAsIHNxdWFyZSwgdmFsKTtcbiAgICAgICAgICAgICAgICAvLyBGYWlsIGlmIHdlIGNhbid0IGFzc2lnbiB2YWwgdG8gc3F1YXJlXG4gICAgICAgICAgICAgICAgaWYgKCFuZXdfY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVfbWFwO1xuICAgIH07XG4gICAgX3NlYXJjaCA9IChjYW5kaWRhdGVzLCByZXZlcnNlKSA9PiB7XG4gICAgICAgIC8qIEdpdmVuIGEgbWFwIG9mIHNxdWFyZXMgLT4gY2FuZGlhdGVzLCB1c2luZyBkZXB0aC1maXJzdCBzZWFyY2gsXG4gICAgICAgIHJlY3Vyc2l2ZWx5IHRyeSBhbGwgcG9zc2libGUgdmFsdWVzIHVudGlsIGEgc29sdXRpb24gaXMgZm91bmQsIG9yIGZhbHNlXG4gICAgICAgIGlmIG5vIHNvbHV0aW9uIGV4aXN0cy5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gUmV0dXJuIGlmIGVycm9yIGluIHByZXZpb3VzIGl0ZXJhdGlvblxuICAgICAgICBpZiAoIWNhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBEZWZhdWx0IHJldmVyc2UgdG8gZmFsc2VcbiAgICAgICAgcmV2ZXJzZSA9IHJldmVyc2UgfHwgZmFsc2U7XG4gICAgICAgIC8vIElmIG9ubHkgb25lIGNhbmRpZGF0ZSBmb3IgZXZlcnkgc3F1YXJlLCB3ZSd2ZSBhIHNvbHZlZCBwdXp6bGUhXG4gICAgICAgIC8vIFJldHVybiB0aGUgY2FuZGlkYXRlcyBtYXAuXG4gICAgICAgIGxldCBtYXhfbnJfY2FuZGlkYXRlcyA9IDA7XG4gICAgICAgIGxldCBtYXhfY2FuZGlkYXRlc19zcXVhcmUgPSBudWxsO1xuICAgICAgICBjYW5kaWRhdGVzO1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgdGhpcy5TUVVBUkVTKSB7XG4gICAgICAgICAgICBsZXQgbnJfY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobnJfY2FuZGlkYXRlcyA+IG1heF9ucl9jYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgbWF4X25yX2NhbmRpZGF0ZXMgPSBucl9jYW5kaWRhdGVzO1xuICAgICAgICAgICAgICAgIG1heF9jYW5kaWRhdGVzX3NxdWFyZSA9IHNxdWFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4X25yX2NhbmRpZGF0ZXMgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIENob29zZSB0aGUgYmxhbmsgc3F1YXJlIHdpdGggdGhlIGZld2VzdCBwb3NzaWJpbGl0aWVzID4gMVxuICAgICAgICBsZXQgbWluX25yX2NhbmRpZGF0ZXMgPSAxMDtcbiAgICAgICAgbGV0IG1pbl9jYW5kaWRhdGVzX3NxdWFyZSA9ICcnO1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgdGhpcy5TUVVBUkVTKSB7XG4gICAgICAgICAgICBsZXQgbnJfY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGg7XG4gICAgICAgICAgICBpZiAobnJfY2FuZGlkYXRlcyA8IG1pbl9ucl9jYW5kaWRhdGVzICYmIG5yX2NhbmRpZGF0ZXMgPiAxKSB7XG4gICAgICAgICAgICAgICAgbWluX25yX2NhbmRpZGF0ZXMgPSBucl9jYW5kaWRhdGVzO1xuICAgICAgICAgICAgICAgIG1pbl9jYW5kaWRhdGVzX3NxdWFyZSA9IHNxdWFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBSZWN1cnNpdmVseSBzZWFyY2ggdGhyb3VnaCBlYWNoIG9mIHRoZSBjYW5kaWRhdGVzIG9mIHRoZSBzcXVhcmVcbiAgICAgICAgLy8gc3RhcnRpbmcgd2l0aCB0aGUgb25lIHdpdGggZmV3ZXN0IGNhbmRpZGF0ZXMuXG4gICAgICAgIC8vIFJvdGF0ZSB0aHJvdWdoIHRoZSBjYW5kaWRhdGVzIGZvcndhcmRzXG4gICAgICAgIGxldCBtaW5fY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXNbbWluX2NhbmRpZGF0ZXNfc3F1YXJlXTtcbiAgICAgICAgaWYgKCFyZXZlcnNlKSB7XG4gICAgICAgICAgICBmb3IgKGxldCB2YWwgb2YgbWluX2NhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgYSBub24tcmVkaWN1bG91cyBkZWVwIGNvcHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19jb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVzKSk7XG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbmV4dCA9IHRoaXMuX3NlYXJjaCh0aGlzLl9hc3NpZ24oY2FuZGlkYXRlc19jb3B5LCBtaW5fY2FuZGlkYXRlc19zcXVhcmUsIHZhbCkpO1xuICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzX25leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNfbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBSb3RhdGUgdGhyb3VnaCB0aGUgY2FuZGlkYXRlcyBiYWNrd2FyZHNcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IHZpID0gbWluX2NhbmRpZGF0ZXMubGVuZ3RoIC0gMTsgdmkgPj0gMDsgLS12aSkge1xuICAgICAgICAgICAgICAgIGxldCB2YWwgPSBtaW5fY2FuZGlkYXRlc1t2aV07XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGEgbm9uLXJlZGljdWxvdXMgZGVlcCBjb3B5IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfY29weSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2FuZGlkYXRlcykpO1xuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX25leHQgPSB0aGlzLl9zZWFyY2godGhpcy5fYXNzaWduKGNhbmRpZGF0ZXNfY29weSwgbWluX2NhbmRpZGF0ZXNfc3F1YXJlLCB2YWwpLCByZXZlcnNlKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlc19uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzX25leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIElmIHdlIGdldCB0aHJvdWdoIGFsbCBjb21iaW5hdGlvbnMgb2YgdGhlIHNxdWFyZSB3aXRoIHRoZSBmZXdlc3RcbiAgICAgICAgLy8gY2FuZGlkYXRlcyB3aXRob3V0IGZpbmRpbmcgYW4gYW5zd2VyLCB0aGVyZSBpc24ndCBvbmUuIFJldHVybiBmYWxzZS5cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgX2Fzc2lnbiA9IChjYW5kaWRhdGVzLCBzcXVhcmUsIHZhbCkgPT4ge1xuICAgICAgICAvKiBFbGltaW5hdGUgYWxsIHZhbHVlcywgKmV4Y2VwdCogZm9yIGB2YWxgLCBmcm9tIGBjYW5kaWRhdGVzYCBhdFxuICAgICAgICBgc3F1YXJlYCAoY2FuZGlkYXRlc1tzcXVhcmVdKSwgYW5kIHByb3BhZ2F0ZS4gUmV0dXJuIHRoZSBjYW5kaWRhdGVzIG1hcFxuICAgICAgICB3aGVuIGZpbmlzaGVkLiBJZiBhIGNvbnRyYWRpY2l0b24gaXMgZm91bmQsIHJldHVybiBmYWxzZS5cbiAgXG4gICAgICAgIFdBUk5JTkc6IFRoaXMgd2lsbCBtb2RpZnkgdGhlIGNvbnRlbnRzIG9mIGBjYW5kaWRhdGVzYCBkaXJlY3RseS5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gR3JhYiBhIGxpc3Qgb2YgY2FuaWRhdGVzIHdpdGhvdXQgJ3ZhbCdcbiAgICAgICAgbGV0IG90aGVyX3ZhbHMgPSBjYW5kaWRhdGVzW3NxdWFyZV0ucmVwbGFjZSh2YWwsIFwiXCIpO1xuICAgICAgICAvLyBMb29wIHRocm91Z2ggYWxsIG90aGVyIHZhbHVlcyBhbmQgZWxpbWluYXRlIHRoZW0gZnJvbSB0aGUgY2FuZGlkYXRlc1xuICAgICAgICAvLyBhdCB0aGUgY3VycmVudCBzcXVhcmUsIGFuZCBwcm9waWdhdGUuIElmIGF0IGFueSBwb2ludCB3ZSBnZXQgYVxuICAgICAgICAvLyBjb250cmFkaWN0aW9uLCByZXR1cm4gZmFsc2UuXG4gICAgICAgIGZvciAobGV0IG90aGVyX3ZhbCBvZiBvdGhlcl92YWxzKSB7XG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXh0ID0gdGhpcy5fZWxpbWluYXRlKGNhbmRpZGF0ZXMsIHNxdWFyZSwgb3RoZXJfdmFsKTtcbiAgICAgICAgICAgIGlmICghY2FuZGlkYXRlc19uZXh0KSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkNvbnRyYWRpY3Rpb24gZm91bmQgYnkgX2VsaW1pbmF0ZS5cIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVzO1xuICAgIH07XG4gICAgX2VsaW1pbmF0ZSA9IChjYW5kaWRhdGVzLCBzcXVhcmUsIHZhbCkgPT4ge1xuICAgICAgICAvKiBFbGltaW5hdGUgYHZhbGAgZnJvbSBgY2FuZGlkYXRlc2AgYXQgYHNxdWFyZWAsIChjYW5kaWRhdGVzW3NxdWFyZV0pLFxuICAgICAgICBhbmQgcHJvcGFnYXRlIHdoZW4gdmFsdWVzIG9yIHBsYWNlcyA8PSAyLiBSZXR1cm4gdXBkYXRlZCBjYW5kaWRhdGVzLFxuICAgICAgICB1bmxlc3MgYSBjb250cmFkaWN0aW9uIGlzIGRldGVjdGVkLCBpbiB3aGljaCBjYXNlLCByZXR1cm4gZmFsc2UuXG4gIFxuICAgICAgICBXQVJOSU5HOiBUaGlzIHdpbGwgbW9kaWZ5IHRoZSBjb250ZW50cyBvZiBgY2FuZGlkYXRlc2AgZGlyZWN0bHkuXG4gICAgICAgICovXG4gICAgICAgIC8vIElmIGB2YWxgIGhhcyBhbHJlYWR5IGJlZW4gZWxpbWluYXRlZCBmcm9tIGNhbmRpZGF0ZXNbc3F1YXJlXSwgcmV0dXJuXG4gICAgICAgIC8vIHdpdGggY2FuZGlkYXRlcy5cbiAgICAgICAgaWYgKCF0aGlzLl9pbih2YWwsIGNhbmRpZGF0ZXNbc3F1YXJlXSkpIHtcbiAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzO1xuICAgICAgICB9XG4gICAgICAgIC8vIFJlbW92ZSBgdmFsYCBmcm9tIGNhbmRpZGF0ZXNbc3F1YXJlXVxuICAgICAgICBjYW5kaWRhdGVzW3NxdWFyZV0gPSBjYW5kaWRhdGVzW3NxdWFyZV0ucmVwbGFjZSh2YWwsICcnKTtcbiAgICAgICAgLy8gSWYgdGhlIHNxdWFyZSBoYXMgb25seSBjYW5kaWRhdGUgbGVmdCwgZWxpbWluYXRlIHRoYXQgdmFsdWUgZnJvbSBpdHNcbiAgICAgICAgLy8gcGVlcnNcbiAgICAgICAgbGV0IG5yX2NhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzW3NxdWFyZV0ubGVuZ3RoO1xuICAgICAgICBpZiAobnJfY2FuZGlkYXRlcyA9PT0gMSkge1xuICAgICAgICAgICAgbGV0IHRhcmdldF92YWwgPSBjYW5kaWRhdGVzW3NxdWFyZV07XG4gICAgICAgICAgICBmb3IgKGxldCBwZWVyIG9mIHRoaXMuU1FVQVJFX1BFRVJTX01BUFtzcXVhcmVdKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbmV3ID0gdGhpcy5fZWxpbWluYXRlKGNhbmRpZGF0ZXMsIHBlZXIsIHRhcmdldF92YWwpO1xuICAgICAgICAgICAgICAgIGlmICghY2FuZGlkYXRlc19uZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE90aGVyd2lzZSwgaWYgdGhlIHNxdWFyZSBoYXMgbm8gY2FuZGlkYXRlcywgd2UgaGF2ZSBhIGNvbnRyYWRpY3Rpb24uXG4gICAgICAgICAgICAvLyBSZXR1cm4gZmFsc2UuXG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5yX2NhbmRpZGF0ZXMgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBJZiBhIHVuaXQgaXMgcmVkdWNlZCB0byBvbmx5IG9uZSBwbGFjZSBmb3IgYSB2YWx1ZSwgdGhlbiBhc3NpZ24gaXRcbiAgICAgICAgZm9yIChsZXQgdW5pdCBvZiB0aGlzLlNRVUFSRV9VTklUU19NQVBbc3F1YXJlXSkge1xuICAgICAgICAgICAgbGV0IHZhbF9wbGFjZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHVuaXRfc3F1YXJlIG9mIHVuaXQpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faW4odmFsLCBjYW5kaWRhdGVzW3VuaXRfc3F1YXJlXSkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsX3BsYWNlcy5wdXNoKHVuaXRfc3F1YXJlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB0aGVyZSdzIG5vIHBsYWNlIGZvciB0aGlzIHZhbHVlLCB3ZSBoYXZlIGEgY29udHJhZGl0aW9uIVxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlXG4gICAgICAgICAgICBpZiAodmFsX3BsYWNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIHRoZSB2YWx1ZSBjYW4gb25seSBiZSBpbiBvbmUgcGxhY2UuIEFzc2lnbiBpdCB0aGVyZS5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHZhbF9wbGFjZXMubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbmV3ID0gdGhpcy5fYXNzaWduKGNhbmRpZGF0ZXMsIHZhbF9wbGFjZXNbMF0sIHZhbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGVzX25ldykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjYW5kaWRhdGVzO1xuICAgIH07XG4gICAgLy8gR3JvdXBzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdldEdyb3VwTnVtYmVyID0gKGNvbCwgcm93KSA9PiB7XG4gICAgICAgIGNvbnN0IGdldFNlY3Rpb25OdW1iZXIgPSAobikgPT4gbiA8IDMgPyAnMScgOlxuICAgICAgICAgICAgbiA8IDYgPyAnMicgOlxuICAgICAgICAgICAgICAgICczJztcbiAgICAgICAgcmV0dXJuIGdldFNlY3Rpb25OdW1iZXIoY29sKSArIGdldFNlY3Rpb25OdW1iZXIocm93KTtcbiAgICB9O1xuICAgIC8vIFNxdWFyZSByZWxhdGlvbnNoaXBzXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIC8vIFNxdWFyZXMsIGFuZCB0aGVpciByZWxhdGlvbnNoaXBzIHdpdGggdmFsdWVzLCB1bml0cywgYW5kIHBlZXJzLlxuICAgIF9nZXRfc3F1YXJlX3ZhbHNfbWFwID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhIG1hcCBvZiBzcXVhcmVzIC0+IHZhbHVlc1xuICAgICAgICAqL1xuICAgICAgICBsZXQgc3F1YXJlc192YWxzX21hcCA9IHt9O1xuICAgICAgICAvLyBNYWtlIHN1cmUgYGJvYXJkYCBpcyBhIHN0cmluZyBvZiBsZW5ndGggODFcbiAgICAgICAgaWYgKGJvYXJkLmxlbmd0aCAhPSB0aGlzLlNRVUFSRVMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aHJvdyBcIkJvYXJkL3NxdWFyZXMgbGVuZ3RoIG1pc21hdGNoLlwiO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlNRVUFSRVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBzcXVhcmVzX3ZhbHNfbWFwW3RoaXMuU1FVQVJFU1tpXV0gPSBib2FyZFtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlc192YWxzX21hcDtcbiAgICB9O1xuICAgIF9nZXRfc3F1YXJlX3VuaXRzX21hcCA9IChzcXVhcmVzLCB1bml0cykgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYSBtYXAgb2YgYHNxdWFyZXNgIGFuZCB0aGVpciBhc3NvY2lhdGVkIHVuaXRzIChyb3csIGNvbCwgYm94KVxuICAgICAgICAqL1xuICAgICAgICBsZXQgc3F1YXJlX3VuaXRfbWFwID0ge307XG4gICAgICAgIC8vIEZvciBldmVyeSBzcXVhcmUuLi5cbiAgICAgICAgZm9yIChsZXQgc2kgaW4gc3F1YXJlcykge1xuICAgICAgICAgICAgbGV0IGN1cl9zcXVhcmUgPSBzcXVhcmVzW3NpXTtcbiAgICAgICAgICAgIC8vIE1haW50YWluIGEgbGlzdCBvZiB0aGUgY3VycmVudCBzcXVhcmUncyB1bml0c1xuICAgICAgICAgICAgbGV0IGN1cl9zcXVhcmVfdW5pdHMgPSBbXTtcbiAgICAgICAgICAgIC8vIExvb2sgdGhyb3VnaCB0aGUgdW5pdHMsIGFuZCBzZWUgaWYgdGhlIGN1cnJlbnQgc3F1YXJlIGlzIGluIGl0LFxuICAgICAgICAgICAgLy8gYW5kIGlmIHNvLCBhZGQgaXQgdG8gdGhlIGxpc3Qgb2Ygb2YgdGhlIHNxdWFyZSdzIHVuaXRzLlxuICAgICAgICAgICAgZm9yIChsZXQgdWkgaW4gdW5pdHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX3VuaXQgPSB1bml0c1t1aV07XG4gICAgICAgICAgICAgICAgaWYgKGN1cl91bml0LmluZGV4T2YoY3VyX3NxdWFyZSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cl9zcXVhcmVfdW5pdHMucHVzaChjdXJfdW5pdCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBzcXVhcmUgYW5kIGl0cyB1bml0cyB0byB0aGUgbWFwXG4gICAgICAgICAgICBzcXVhcmVfdW5pdF9tYXBbY3VyX3NxdWFyZV0gPSBjdXJfc3F1YXJlX3VuaXRzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmVfdW5pdF9tYXA7XG4gICAgfTtcbiAgICBfZ2V0X3NxdWFyZV9wZWVyc19tYXAgPSAoc3F1YXJlcywgdW5pdHNfbWFwKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhIG1hcCBvZiBgc3F1YXJlc2AgYW5kIHRoZWlyIGFzc29jaWF0ZWQgcGVlcnMsIGkuZS4sIGEgc2V0IG9mXG4gICAgICAgIG90aGVyIHNxdWFyZXMgaW4gdGhlIHNxdWFyZSdzIHVuaXQuXG4gICAgICAgICovXG4gICAgICAgIGxldCBzcXVhcmVfcGVlcnNfbWFwID0ge307XG4gICAgICAgIC8vIEZvciBldmVyeSBzcXVhcmUuLi5cbiAgICAgICAgZm9yIChsZXQgc2kgaW4gc3F1YXJlcykge1xuICAgICAgICAgICAgbGV0IGN1cl9zcXVhcmUgPSBzcXVhcmVzW3NpXTtcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlX3VuaXRzID0gdW5pdHNfbWFwW2N1cl9zcXVhcmVdO1xuICAgICAgICAgICAgLy8gTWFpbnRhaW4gbGlzdCBvZiB0aGUgY3VycmVudCBzcXVhcmUncyBwZWVyc1xuICAgICAgICAgICAgbGV0IGN1cl9zcXVhcmVfcGVlcnMgPSBbXTtcbiAgICAgICAgICAgIC8vIExvb2sgdGhyb3VnaCB0aGUgY3VycmVudCBzcXVhcmUncyB1bml0cyBtYXAuLi5cbiAgICAgICAgICAgIGZvciAobGV0IHN1aSBvZiBjdXJfc3F1YXJlX3VuaXRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cl91bml0ID0gc3VpO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IHVpIG9mIGN1cl91bml0KSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjdXJfdW5pdF9zcXVhcmUgPSB1aTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGN1cl9zcXVhcmVfcGVlcnMuaW5kZXhPZihjdXJfdW5pdF9zcXVhcmUpID09PSAtMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgY3VyX3VuaXRfc3F1YXJlICE9PSBjdXJfc3F1YXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJfc3F1YXJlX3BlZXJzLnB1c2goY3VyX3VuaXRfc3F1YXJlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgc3F1YXJlIGFuIGl0cyBhc3NvY2lhdGVkIHBlZXJzIHRvIHRoZSBtYXBcbiAgICAgICAgICAgIHNxdWFyZV9wZWVyc19tYXBbY3VyX3NxdWFyZV0gPSBjdXJfc3F1YXJlX3BlZXJzO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmVfcGVlcnNfbWFwO1xuICAgIH07XG4gICAgX2dldF9hbGxfdW5pdHMgPSAocm93cywgY29scykgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYSBsaXN0IG9mIGFsbCB1bml0cyAocm93cywgY29scywgYm94ZXMpXG4gICAgICAgICovXG4gICAgICAgIGxldCB1bml0cyA9IFtdO1xuICAgICAgICAvLyBSb3dzXG4gICAgICAgIGZvciAobGV0IHJpIG9mIHJvd3MpIHtcbiAgICAgICAgICAgIHVuaXRzLnB1c2godGhpcy5fY3Jvc3MocmksIGNvbHMpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDb2x1bW5zXG4gICAgICAgIGZvciAobGV0IGNpIG9mIGNvbHMpIHtcbiAgICAgICAgICAgIHVuaXRzLnB1c2godGhpcy5fY3Jvc3Mocm93cywgY2kpKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBCb3hlc1xuICAgICAgICBsZXQgcm93X3NxdWFyZXMgPSBbXCJBQkNcIiwgXCJERUZcIiwgXCJHSElcIl07XG4gICAgICAgIGxldCBjb2xfc3F1YXJlcyA9IFtcIjEyM1wiLCBcIjQ1NlwiLCBcIjc4OVwiXTtcbiAgICAgICAgZm9yIChsZXQgcnNpIGluIHJvd19zcXVhcmVzKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjc2kgaW4gY29sX3NxdWFyZXMpIHtcbiAgICAgICAgICAgICAgICB1bml0cy5wdXNoKHRoaXMuX2Nyb3NzKHJvd19zcXVhcmVzW3JzaV0sIGNvbF9zcXVhcmVzW2NzaV0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5pdHM7XG4gICAgfTtcbiAgICAvLyBDb252ZXJzaW9uc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBib2FyZF9zdHJpbmdfdG9fZ3JpZCA9IChib2FyZF9zdHJpbmcpID0+IHtcbiAgICAgICAgLyogQ29udmVydCBhIGJvYXJkIHN0cmluZyB0byBhIHR3by1kaW1lbnNpb25hbCBhcnJheVxuICAgICAgICAqL1xuICAgICAgICBjb25zdCByb3dzID0gW107XG4gICAgICAgIGxldCBjdXJfcm93ID0gW107XG4gICAgICAgIGZvciAoY29uc3QgaSBvZiBib2FyZF9zdHJpbmcpIHtcbiAgICAgICAgICAgIGN1cl9yb3cucHVzaChpKTtcbiAgICAgICAgICAgIGlmIChOdW1iZXIoaSkgJSA5ID09IDgpIHtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goY3VyX3Jvdyk7XG4gICAgICAgICAgICAgICAgY3VyX3JvdyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH07XG4gICAgYm9hcmRfZ3JpZF90b19zdHJpbmcgPSAoYm9hcmRfZ3JpZCkgPT4ge1xuICAgICAgICAvKiBDb252ZXJ0IGEgYm9hcmQgZ3JpZCB0byBhIHN0cmluZ1xuICAgICAgICAqL1xuICAgICAgICBsZXQgYm9hcmRfc3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgciA9IDA7IHIgPCA5OyArK3IpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGMgPSAwOyBjIDwgOTsgKytjKSB7XG4gICAgICAgICAgICAgICAgYm9hcmRfc3RyaW5nICs9IGJvYXJkX2dyaWRbcl1bY107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJvYXJkX3N0cmluZztcbiAgICB9O1xuICAgIC8vIFV0aWxpdHlcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgcHJpbnRfYm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogUHJpbnQgYSBzdWRva3UgYGJvYXJkYCB0byB0aGUgY29uc29sZS5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gQXNzdXJlIGEgdmFsaWQgYm9hcmRcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMudmFsaWRhdGVfYm9hcmQoYm9hcmQpO1xuICAgICAgICBpZiAocmVwb3J0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyByZXBvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IFZfUEFERElORyA9IFwiIFwiOyAvLyBJbnNlcnQgYWZ0ZXIgZWFjaCBzcXVhcmVcbiAgICAgICAgbGV0IEhfUEFERElORyA9ICdcXG4nOyAvLyBJbnNlcnQgYWZ0ZXIgZWFjaCByb3dcbiAgICAgICAgbGV0IFZfQk9YX1BBRERJTkcgPSBcIiAgXCI7IC8vIEJveCB2ZXJ0aWNhbCBwYWRkaW5nXG4gICAgICAgIGxldCBIX0JPWF9QQURESU5HID0gJ1xcbic7IC8vIEJveCBob3Jpem9udGFsIHBhZGRpbmdcbiAgICAgICAgbGV0IGRpc3BsYXlfc3RyaW5nID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBib2FyZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IHNxdWFyZSA9IGJvYXJkW2ldO1xuICAgICAgICAgICAgLy8gQWRkIHRoZSBzcXVhcmUgYW5kIHNvbWUgcGFkZGluZ1xuICAgICAgICAgICAgZGlzcGxheV9zdHJpbmcgKz0gc3F1YXJlICsgVl9QQURESU5HO1xuICAgICAgICAgICAgLy8gVmVydGljYWwgZWRnZSBvZiBhIGJveCwgaW5zZXJ0IHYuIGJveCBwYWRkaW5nXG4gICAgICAgICAgICBpZiAoaSAlIDMgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5X3N0cmluZyArPSBWX0JPWF9QQURESU5HO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gRW5kIG9mIGEgbGluZSwgaW5zZXJ0IGhvcml6LiBwYWRkaW5nXG4gICAgICAgICAgICBpZiAoaSAlIDkgPT09IDgpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5X3N0cmluZyArPSBIX1BBRERJTkc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBIb3Jpem9udGFsIGVkZ2Ugb2YgYSBib3gsIGluc2VydCBoLiBib3ggcGFkZGluZ1xuICAgICAgICAgICAgaWYgKGkgJSAyNyA9PT0gMjYpIHtcbiAgICAgICAgICAgICAgICBkaXNwbGF5X3N0cmluZyArPSBIX0JPWF9QQURESU5HO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKGRpc3BsYXlfc3RyaW5nKTtcbiAgICB9O1xuICAgIHZhbGlkYXRlX2JvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBpZiB0aGUgZ2l2ZW4gYGJvYXJkYCBpcyB2YWxpZCBvciBub3QuIElmIGl0J3MgdmFsaWQsIHJldHVyblxuICAgICAgICB0cnVlLiBJZiBpdCdzIG5vdCwgcmV0dXJuIGEgc3RyaW5nIG9mIHRoZSByZWFzb24gd2h5IGl0J3Mgbm90LlxuICAgICAgICAqL1xuICAgICAgICAvLyBDaGVjayBmb3IgZW1wdHkgYm9hcmRcbiAgICAgICAgaWYgKCFib2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiRW1wdHkgYm9hcmRcIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBJbnZhbGlkIGJvYXJkIGxlbmd0aFxuICAgICAgICBpZiAoYm9hcmQubGVuZ3RoICE9PSB0aGlzLk5SX1NRVUFSRVMpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgYm9hcmQgc2l6ZS4gQm9hcmQgbXVzdCBiZSBleGFjdGx5IFwiICsgdGhpcy5OUl9TUVVBUkVTICtcbiAgICAgICAgICAgICAgICBcIiBzcXVhcmVzLlwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIGZvciBpbnZhbGlkIGNoYXJhY3RlcnNcbiAgICAgICAgZm9yIChsZXQgaSBvZiBib2FyZCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9pbihpLCB0aGlzLkRJR0lUUykgJiYgaSAhPT0gdGhpcy5CTEFOS19DSEFSKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBib2FyZCBjaGFyYWN0ZXIgZW5jb3VudGVyZWQgYXQgaW5kZXggXCIgKyBpICtcbiAgICAgICAgICAgICAgICAgICAgXCI6IFwiICsgaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBPdGhlcndpc2UsIHdlJ3JlIGdvb2QuIFJldHVybiB0cnVlLlxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9O1xuICAgIF9jcm9zcyA9IChhLCBiKSA9PiB7XG4gICAgICAgIC8qIENyb3NzIHByb2R1Y3Qgb2YgYWxsIGVsZW1lbnRzIGluIGBhYCBhbmQgYGJgLCBlLmcuLFxuICAgICAgICBzdWRva3UuX2Nyb3NzKFwiYWJjXCIsIFwiMTIzXCIpIC0+XG4gICAgICAgIFtcImExXCIsIFwiYTJcIiwgXCJhM1wiLCBcImIxXCIsIFwiYjJcIiwgXCJiM1wiLCBcImMxXCIsIFwiYzJcIiwgXCJjM1wiXVxuICAgICAgICAqL1xuICAgICAgICBsZXQgcmVzdWx0ID0gW107XG4gICAgICAgIGZvciAobGV0IGFpIG9mIGEpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGJpIG9mIGIpIHtcbiAgICAgICAgICAgICAgICByZXN1bHQucHVzaChhaSArIGJpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH07XG4gICAgX2luID0gKHYsIHNlcSkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gaWYgYSB2YWx1ZSBgdmAgaXMgaW4gc2VxdWVuY2UgYHNlcWAuXG4gICAgICAgICovXG4gICAgICAgIHJldHVybiBzZXEuaW5kZXhPZih2KSAhPT0gLTE7XG4gICAgfTtcbiAgICBfZmlyc3RfdHJ1ZSA9IChzZXEpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIHRoZSBmaXJzdCBlbGVtZW50IGluIGBzZXFgIHRoYXQgaXMgdHJ1ZS4gSWYgbm8gZWxlbWVudCBpc1xuICAgICAgICB0cnVlLCByZXR1cm4gZmFsc2UuXG4gICAgICAgICovXG4gICAgICAgIGZvciAobGV0IGkgb2Ygc2VxKSB7XG4gICAgICAgICAgICBpZiAoaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIF9zaHVmZmxlID0gKHNlcSkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYSBzaHVmZmxlZCB2ZXJzaW9uIG9mIGBzZXFgXG4gICAgICAgICovXG4gICAgICAgIC8vIENyZWF0ZSBhbiBhcnJheSBvZiB0aGUgc2FtZSBzaXplIGFzIGBzZXFgIGZpbGxlZCB3aXRoIGZhbHNlXG4gICAgICAgIGxldCBzaHVmZmxlZCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHNlcS5sZW5ndGg7ICsraSkge1xuICAgICAgICAgICAgc2h1ZmZsZWQucHVzaChmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSBvZiBzZXEpIHtcbiAgICAgICAgICAgIGxldCB0aSA9IHRoaXMuX3JhbmRfcmFuZ2Uoc2VxLmxlbmd0aCk7XG4gICAgICAgICAgICB3aGlsZSAoc2h1ZmZsZWRbdGldKSB7XG4gICAgICAgICAgICAgICAgdGkgPSAodGkgKyAxKSA+IChzZXEubGVuZ3RoIC0gMSkgPyAwIDogKHRpICsgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaHVmZmxlZFt0aV0gPSBpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzaHVmZmxlZDtcbiAgICB9O1xuICAgIF9yYW5kX3JhbmdlID0gKG1heCwgbWluKSA9PiB7XG4gICAgICAgIC8qIEdldCBhIHJhbmRvbSBpbnRlZ2VyIGluIHRoZSByYW5nZSBvZiBgbWluYCB0byBgbWF4YCAobm9uIGluY2x1c2l2ZSkuXG4gICAgICAgIElmIGBtaW5gIG5vdCBkZWZpbmVkLCBkZWZhdWx0IHRvIDAuIElmIGBtYXhgIG5vdCBkZWZpbmVkLCB0aHJvdyBhblxuICAgICAgICBlcnJvci5cbiAgICAgICAgKi9cbiAgICAgICAgbWluID0gbWluID8/IDA7XG4gICAgICAgIGlmIChtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluKSkgKyBtaW47XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBcIlJhbmdlIHVuZGVmaW5lZFwiO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBfc3RyaXBfZHVwcyA9IChzZXEpID0+IHtcbiAgICAgICAgLyogU3RyaXAgZHVwbGljYXRlIHZhbHVlcyBmcm9tIGBzZXFgXG4gICAgICAgICovXG4gICAgICAgIGxldCBzZXFfc2V0ID0gW107XG4gICAgICAgIGxldCBkdXBfbWFwID0ge307XG4gICAgICAgIGZvciAobGV0IGUgb2Ygc2VxKSB7XG4gICAgICAgICAgICBpZiAoIWR1cF9tYXBbZV0pIHtcbiAgICAgICAgICAgICAgICBzZXFfc2V0LnB1c2goZSk7XG4gICAgICAgICAgICAgICAgZHVwX21hcFtlXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNlcV9zZXQ7XG4gICAgfTtcbiAgICBfZm9yY2VfcmFuZ2UgPSAobnIsIG1heCwgbWluKSA9PiB7XG4gICAgICAgIC8qIEZvcmNlIGBucmAgdG8gYmUgd2l0aGluIHRoZSByYW5nZSBmcm9tIGBtaW5gIHRvLCBidXQgbm90IGluY2x1ZGluZyxcbiAgICAgICAgYG1heGAuIGBtaW5gIGlzIG9wdGlvbmFsLCBhbmQgd2lsbCBkZWZhdWx0IHRvIDAuIElmIGBucmAgaXMgdW5kZWZpbmVkLFxuICAgICAgICB0cmVhdCBpdCBhcyB6ZXJvLlxuICAgICAgICAqL1xuICAgICAgICBtaW4gPSBtaW4gfHwgMDtcbiAgICAgICAgbnIgPSBuciB8fCAwO1xuICAgICAgICBpZiAobnIgPCBtaW4pIHtcbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5yID4gbWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gbWF4O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBucjtcbiAgICB9O1xufTtcblN1ZG9rdVRTID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW10pXG5dLCBTdWRva3VUUyk7XG5leHBvcnRzLlN1ZG9rdVRTID0gU3Vkb2t1VFM7XG5TdWRva3VUU1tcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtdO1xuLy8gY29uc3Qgc3Vkb2t1ID0gbmV3IFN1ZG9rdVRTKClcbi8vIGNvbnN0IGdhbWUgPSBzdWRva3UuZ2VuZXJhdGUoJ2Vhc3knKVxuLy8gZ2FtZVxuLy8gY29uc3QgcmVzdWx0ID0gc3Vkb2t1LnNvbHZlKGdhbWUpXG4vLyByZXN1bHRcbi8vIGNvbnN0IGNhbmRpZGF0ZXMgPSAoPHN0cmluZ1tdW10+c3Vkb2t1XG4vLyAgIC5nZXRDYW5kaWRhdGVzKGdhbWUpKVxuLy8gICAuZmxhdCgpXG4vLyBjb25zdCByZW1haW5pbmcgPSBbLi4ubmV3IFNldChjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLCBpKSA9PiB7XG4vLyAgIGlmIChnYW1lW2ldID09PSAnLicpXG4vLyAgICAgcmV0dXJuIGNhbmRpZGF0ZVxuLy8gfSkuam9pbignJykuc3BsaXQoJycpKV0uc29ydCgpXG4vLyBjb25zb2xlLmxvZyhjYW5kaWRhdGVzKVxuLy8gY29uc29sZS5sb2cocmVtYWluaW5nKVxuLy8gc3Vkb2t1LnByaW50X2JvYXJkKGdhbWUpXG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVU5SRUFDSEFCTEUgPSBleHBvcnRzLkFTU0VSVCA9IHZvaWQgMDtcbmNvbnN0IEFTU0VSVCA9IChvKSA9PiB7XG4gICAgaWYgKG8gPT09IHVuZGVmaW5lZCB8fCBvID09PSBudWxsKVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYEFzc2VydGlvbiBlcnJvcjogJHtvfWApO1xuICAgIHJldHVybiBvO1xufTtcbmV4cG9ydHMuQVNTRVJUID0gQVNTRVJUO1xuY29uc3QgVU5SRUFDSEFCTEUgPSAobykgPT4ge1xuICAgIHRocm93IG5ldyBFcnJvcihgVW5yZWFjaGFibGUgJHtvfWApO1xufTtcbmV4cG9ydHMuVU5SRUFDSEFCTEUgPSBVTlJFQUNIQUJMRTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy52ZWMyID0gdm9pZCAwO1xuY29uc3QgdmVjMiA9ICh4LCB5ID0geCkgPT4gW3gsIHldO1xuZXhwb3J0cy52ZWMyID0gdmVjMjtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mLCBfZztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuVmFuaWxsYUpzVmlldyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lRGlmZmljdWx0eV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVEaWZmaWN1bHR5XCIpO1xuY29uc3QgSUdhbWVQdWJTdWJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVQdWJTdWJcIik7XG5jb25zdCBJR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTG9naWNcIik7XG5jb25zdCBJR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVNYW5hZ2VyXCIpO1xuY29uc3QgSUdhbWVSdW5uZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVSdW5uZXJcIik7XG5jb25zdCBJU3Vkb2t1VFNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSVN1ZG9rdVRTXCIpO1xuY29uc3QgR2FtZVNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi4vbGlicmFyeS9HYW1lU2V0dGluZ3NcIik7XG5jb25zdCBJSW5wdXRQcm92aWRlcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JSW5wdXRQcm92aWRlclwiKTtcbi8vIGltcG9ydCB7IHZlYzIgfSBmcm9tIFwiLi4vdXRpbHMvdmVjMlwiO1xubGV0IFZhbmlsbGFKc1ZpZXcgPSBjbGFzcyBWYW5pbGxhSnNWaWV3IHtcbiAgICBnYW1lTWFuYWdlcjtcbiAgICBsb2dpYztcbiAgICBzdWRva3U7XG4gICAgcnVubmVyO1xuICAgIGV2ZW50cztcbiAgICBpbnB1dDtcbiAgICBjb25maWc7XG4gICAgcm9vdDtcbiAgICBib2FyZDtcbiAgICBmb3JtO1xuICAgIHNpZGViYXJUb2dnbGU7XG4gICAgcmVzdGFydEJ1dHRvbjtcbiAgICBtZW51O1xuICAgIHN0YXRzO1xuICAgIGtleXBhZEJHO1xuICAgIGtleXBhZDtcbiAgICBjb25zdHJ1Y3RvcihnYW1lTWFuYWdlciwgbG9naWMsIHN1ZG9rdSwgcnVubmVyLCBldmVudHMsIGlucHV0LCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGdhbWVNYW5hZ2VyO1xuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMuc3Vkb2t1ID0gc3Vkb2t1O1xuICAgICAgICB0aGlzLnJ1bm5lciA9IHJ1bm5lcjtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgICAgIHRoaXMuaW5wdXQgPSBpbnB1dDtcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vkb2t1X2JvYXJkJyk7XG4gICAgICAgIHRoaXMuZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKTtcbiAgICAgICAgdGhpcy5zaWRlYmFyVG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXItdG9nZ2xlJyk7XG4gICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZXN0YXJ0X2J1dHRvbicpO1xuICAgICAgICB0aGlzLm1lbnUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3Vkb2t1X21lbnUnKTtcbiAgICAgICAgdGhpcy5zdGF0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGF0aXN0aWNzJyk7XG4gICAgICAgIHRoaXMua2V5cGFkQkcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRfY29uc29sZV9jb250YWluZXInKTtcbiAgICAgICAgdGhpcy5rZXlwYWQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRfY29uc29sZScpO1xuICAgIH1cbiAgICBnZXRDZWxsRGlzcGxheVZhbHVlKG1vZGVsLCBjZWxsKSB7XG4gICAgICAgIHJldHVybiBjZWxsLnZhbHVlID09PSAnLicgPyAnJyA6IGNlbGwudmFsdWU7XG4gICAgfVxuICAgIHJlbmRlckNlbGwobW9kZWwsIGNlbGwpIHtcbiAgICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LmFkZCgnY2VsbCcpO1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAnNjJweCc7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMubG9naWMuZ2V0VGlsZVZlY3RvckZvckluZGV4KGNlbGwuaW5kZXgpO1xuICAgICAgICBjb25zdCBzbFBvcyA9ICEhbW9kZWwuc2VsZWN0ZWQgJiYgdGhpcy5sb2dpYy5nZXRUaWxlVmVjdG9yRm9ySW5kZXgobW9kZWwuc2VsZWN0ZWQpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gc2xQb3MgJiYgdGhpcy5zdWRva3UuZ2V0R3JvdXBOdW1iZXIoc2xQb3NbMF0sIHNsUG9zWzFdKTtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLnN1ZG9rdS5nZXRHcm91cE51bWJlcih4LCB5KTtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IG1vZGVsLnNlbGVjdGVkID09PSBjZWxsLmluZGV4O1xuICAgICAgICBjb25zdCBpc0dyb3VwID0gZ3JvdXAgPT09IHNlbGVjdGVkR3JvdXA7XG4gICAgICAgIGNvbnN0IGlzSW5saW5lID0gaXNHcm91cCB8fCAoc2xQb3MgJiYgKHNsUG9zWzBdID09PSB4IHx8IHNsUG9zWzFdID09PSB5KSk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2ZpeCcsIGNlbGwuaXNIaW50KTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnY3VycmVudCcsIGlzU2VsZWN0ZWQpOyAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgY2VsbFxuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdncm91cCcsIGlzR3JvdXApOyAvLyBzYW1lIHNlY3Rpb24gYXMgc2VsZWN0ZWRcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBpc0lubGluZSk7IC8vIGlubGluZSB3aXRoIHNlbGVjdGVkXG4gICAgICAgIGNvbnN0IGlzSW52YWxpZCA9IGNlbGwudmFsdWUgIT09ICcuJyAmJlxuICAgICAgICAgICAgbW9kZWwuc29sdXRpb25bY2VsbC5pbmRleF0gIT09IGNlbGwudmFsdWU7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ25vdHZhbGlkJywgaXNJbnZhbGlkKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYm9yZGVyX3YnLCBbMywgNl0uaW5jbHVkZXMoeCArIDEpKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnYm9yZGVyX2gnLCBbMywgNl0uaW5jbHVkZXMoeSArIDEpKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd4JywgU3RyaW5nKHggKyAxKSk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgneScsIFN0cmluZyh5ICsgMSkpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ2lkeCcsIFN0cmluZyhjZWxsLmluZGV4KSk7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LnRvZ2dsZSgnc2FtZXZhbHVlJywgISFtb2RlbC5zZWxlY3RlZCAmJlxuICAgICAgICAgICAgbW9kZWwuc2VsZWN0ZWQgIT09IGNlbGwuaW5kZXggJiZcbiAgICAgICAgICAgIGNlbGwudmFsdWUgPT09IG1vZGVsLmNlbGxzW21vZGVsLnNlbGVjdGVkXS52YWx1ZSk7XG4gICAgICAgIHNwYW4uc3R5bGUubGluZUhlaWdodCA9IHRoaXMuY29uZmlnLmNlbGxTaXplICsgJ3B4JztcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENlbGxEaXNwbGF5VmFsdWUobW9kZWwsIGNlbGwpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIGVsLm91dGVySFRNTDtcbiAgICB9XG4gICAgcmVuZGVyQ2VsbExpc3QobW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIG1vZGVsLmNlbGxzXG4gICAgICAgICAgICAubWFwKGNlbGwgPT4gdGhpcy5yZW5kZXJDZWxsKG1vZGVsLCBjZWxsKSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgcmVuZGVyQm9hcmQobW9kZWwpIHtcbiAgICAgICAgdGhpcy5ib2FyZC5zdHlsZS53aWR0aCA9IHRoaXMuY29uZmlnLmJvYXJkV2lkdGggKyAncHgnO1xuICAgICAgICB0aGlzLmJvYXJkLmlubmVySFRNTCA9IHRoaXMucmVuZGVyQ2VsbExpc3QobW9kZWwpO1xuICAgIH1cbiAgICByZW5kZXJTdGF0cyhtb2RlbCkge1xuICAgICAgICBjb25zdCByZW1haW5pbmcgPSBtb2RlbC5jZWxscy5yZWR1Y2UoKGEsIHYpID0+IHtcbiAgICAgICAgICAgIGlmICghdi5pc0hpbnQgJiYgdi52YWx1ZSA9PT0gJy4nKVxuICAgICAgICAgICAgICAgIGErKztcbiAgICAgICAgICAgIHJldHVybiBhO1xuICAgICAgICB9LCAwKTtcbiAgICAgICAgdGhpcy5zdGF0cy5pbm5lckhUTUwgPSBgXG4gICAgICA8Yj5DZWxsczo8L2I+IDxzcGFuIGNsYXNzPVwiY2VsbHNfY29tcGxldGVcIj4ke3JlbWFpbmluZ30vODE8L3NwYW4+IDxiPlRpbWU6PC9iPiA8c3BhbiBjbGFzcz1cInRpbWVcIj4ke3RoaXMuZHVyYXRpb259PC9zcGFuPlxuICAgIGA7XG4gICAgfVxuICAgIHNldENlbGxTaXplKHsgY2VsbFNpemU6IFt4LCB5XSB9KSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jZWxsLXdpZHRoJywgeCArICdweCcpO1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY2VsbC1oZWlnaHQnLCB5ICsgJ3B4Jyk7XG4gICAgfVxuICAgIHNldENlbGxDaGFyYWN0ZXJzKHsgZmxhZ0NoYXJhY3RlciwgbWluZUNoYXJhY3RlciB9KSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mbGFnLWNoYXJhY3RlcicsIGZsYWdDaGFyYWN0ZXIpO1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbWluZS1jaGFyYWN0ZXInLCBtaW5lQ2hhcmFjdGVyKTtcbiAgICB9XG4gICAgc3RhcnRHYW1lID0gYXN5bmMgKGRpZmZpY3VsdHkgPSBHYW1lRGlmZmljdWx0eV8xLkdhbWVEaWZmaWN1bHR5LmVhc3kpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0R2FtZScsIGRpZmZpY3VsdHkpO1xuICAgICAgICBjb25zdCBnYW1lYm9hcmQgPSB0aGlzLmdhbWVNYW5hZ2VyLmNyZWF0ZShkaWZmaWN1bHR5KTtcbiAgICAgICAgLy8gdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgLy8gICBpZiAoZ2FtZWJvYXJkLnN0YXRlIDwgR2FtZVN0YXRlLldPTilcbiAgICAgICAgLy8gICAgIGdhbWVib2FyZC5zdGF0ZSA9IEdhbWVTdGF0ZS5HQU1FT1ZFUjtcbiAgICAgICAgLy8gfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnJ1bm5lci5wbGF5R2FtZShnYW1lYm9hcmQpO1xuICAgIH07XG4gICAgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBmb3JtLmdldCgnZGlmZmljdWx0eScpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZShkaWZmaWN1bHR5KTtcbiAgICB9O1xuICAgIG9uQ2xpY2tDZWxsID0gKGUpID0+IHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWR4JykpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQucHV0TmV4dElucHV0KHsgYWN0aW9uOiAnc2VsZWN0JywgY2VsbEluZGV4OiBpZHggfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeCcpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXBhZEJHLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBOdW1iZXIoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkeCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnB1dE5leHRJbnB1dCh7IGFjdGlvbjogJ3NlbGVjdCcsIGNlbGxJbmRleDogaWR4IH0pO1xuICAgICAgICAgICAgICAgIGlmICghZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeCcpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXBhZEJHLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIG9uS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdWRva3UuRElHSVRTLmluY2x1ZGVzKGUua2V5KSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5wdXROZXh0SW5wdXQoeyBhY3Rpb246ICdrZXlwcmVzcycsIGtleTogZS5rZXkgfSk7XG4gICAgICAgICAgICB0aGlzLmtleXBhZEJHLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZXZlbnRIYW5kbGVyJywgZXZlbnQpO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZy1jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxTaXplKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxDaGFyYWN0ZXJzKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JlZ2luJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhdHMoZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBjYXNlICd1cGRhdGUnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJCb2FyZChldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlclN0YXRzKGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnZW5kJzoge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlZ2lzdGVyTGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0NlbGwpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25DbGlja0NlbGwpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tc2lkZWJhcicpO1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tc2lkZWJhcicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5rZXlwYWRCRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5rZXlwYWRCRy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5rZXlwYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tQYWQpO1xuICAgICAgICB0aGlzLmtleXBhZC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5vbkNsaWNrUGFkKTtcbiAgICAgICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKHRoaXMuZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9uQ2xpY2tQYWQgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoIShlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50KSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKCEoZS50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdudW0nKSkpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgaWYgKGUudGFyZ2V0LmlubmVyVGV4dC5tYXRjaCgvWzEtOV0vKSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5wdXROZXh0SW5wdXQoe1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2tleXByZXNzJyxcbiAgICAgICAgICAgICAgICBrZXk6IGUudGFyZ2V0LmlubmVyVGV4dCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgdGhpcy5rZXlwYWRCRy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1gnKSB7XG4gICAgICAgICAgICB0aGlzLmlucHV0LnB1dE5leHRJbnB1dCh7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAna2V5cHJlc3MnLFxuICAgICAgICAgICAgICAgIGtleTogJycsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMua2V5cGFkQkcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfVxuICAgIH07XG4gICAgdW5yZWdpc3Rlckxpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ldmVudHMudW5zdWJzY3JpYmUodGhpcy5ldmVudEhhbmRsZXIpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0NlbGwpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25DbGlja0NlbGwpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBpbml0aWFsaXplQ29udHJvbHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGR1cmF0aW9uID0gMDtcbiAgICB0aW1lcjtcbn07XG5WYW5pbGxhSnNWaWV3ID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgSUdhbWVNYW5hZ2VyXzEuSUdhbWVNYW5hZ2VyICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lTWFuYWdlcl8xLklHYW1lTWFuYWdlcikgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0LCB0eXBlb2YgKF9iID0gdHlwZW9mIElHYW1lTG9naWNfMS5JR2FtZUxvZ2ljICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lTG9naWNfMS5JR2FtZUxvZ2ljKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3QsIHR5cGVvZiAoX2MgPSB0eXBlb2YgSVN1ZG9rdVRTXzEuSVN1ZG9rdVRTICE9PSBcInVuZGVmaW5lZFwiICYmIElTdWRva3VUU18xLklTdWRva3VUUykgPT09IFwiZnVuY3Rpb25cIiA/IF9jIDogT2JqZWN0LCB0eXBlb2YgKF9kID0gdHlwZW9mIElHYW1lUnVubmVyXzEuSUdhbWVSdW5uZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVSdW5uZXJfMS5JR2FtZVJ1bm5lcikgPT09IFwiZnVuY3Rpb25cIiA/IF9kIDogT2JqZWN0LCB0eXBlb2YgKF9lID0gdHlwZW9mIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YikgPT09IFwiZnVuY3Rpb25cIiA/IF9lIDogT2JqZWN0LCB0eXBlb2YgKF9mID0gdHlwZW9mIElJbnB1dFByb3ZpZGVyXzEuSUlucHV0UHJvdmlkZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUlucHV0UHJvdmlkZXJfMS5JSW5wdXRQcm92aWRlcikgPT09IFwiZnVuY3Rpb25cIiA/IF9mIDogT2JqZWN0LCB0eXBlb2YgKF9nID0gdHlwZW9mIEdhbWVTZXR0aW5nc18xLkdhbWVTZXR0aW5ncyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBHYW1lU2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MpID09PSBcImZ1bmN0aW9uXCIgPyBfZyA6IE9iamVjdF0pXG5dLCBWYW5pbGxhSnNWaWV3KTtcbmV4cG9ydHMuVmFuaWxsYUpzVmlldyA9IFZhbmlsbGFKc1ZpZXc7XG5WYW5pbGxhSnNWaWV3W1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW1wiSUdhbWVNYW5hZ2VyXCIsIFwiSUdhbWVMb2dpY1wiLCBcIklTdWRva3VUU1wiLCBcIklHYW1lUnVubmVyXCIsIFwiSUdhbWVQdWJTdWJcIiwgXCJJSW5wdXRQcm92aWRlclwiLCBcIkdhbWVTZXR0aW5nc1wiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5zdGF0aWNEZXBzUHJvcCA9IGV4cG9ydHMucmVmbGVjdFRhcmdldFR5cGUgPSBleHBvcnRzLnByb3h5Q29tcGFyZUtleSA9IHZvaWQgMDtcbmV4cG9ydHMucHJveHlDb21wYXJlS2V5ID0gJ0BAZ29kc21hY2svZGk6cHJveHktY29tcGFyaXNvbi1rZXknO1xuZXhwb3J0cy5yZWZsZWN0VGFyZ2V0VHlwZSA9ICdAQGdvZHNtYWNrL2RpOnRhcmdldC1zaW5nbGV0b24nO1xuZXhwb3J0cy5zdGF0aWNEZXBzUHJvcCA9ICdAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3AnO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluamVjdGFibGUgPSB2b2lkIDA7XG5jb25zdCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIik7XG5jb25zdCBJbmplY3RhYmxlID0gKCkgPT4gKDAsIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkpKCk7XG5leHBvcnRzLkluamVjdGFibGUgPSBJbmplY3RhYmxlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gdm9pZCAwO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi4vY29uc3RhbnRzXCIpO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkgPSAoeyBzaW5nbGV0b24gPSBmYWxzZSB9ID0ge30pID0+IHtcbiAgICByZXR1cm4gKHRhcmdldCkgPT4ge1xuICAgICAgICBjb25zdCB0YXJnZXRUeXBlID0gc2luZ2xldG9uID8gJ3NpbmdsZXRvbicgOiAndHJhbnNpZW50JztcbiAgICAgICAgUmVmbGVjdC5kZWZpbmVNZXRhZGF0YShjb25zdGFudHNfMS5yZWZsZWN0VGFyZ2V0VHlwZSwgdGFyZ2V0VHlwZSwgdGFyZ2V0KTtcbiAgICB9O1xufTtcbmV4cG9ydHMuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkgPSBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TZXJ2aWNlID0gdm9pZCAwO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuY29uc3QgU2VydmljZSA9ICgpID0+ICgwLCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5KSgpO1xuZXhwb3J0cy5TZXJ2aWNlID0gU2VydmljZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TaW5nbGV0b24gPSB2b2lkIDA7XG5jb25zdCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIik7XG5jb25zdCBTaW5nbGV0b24gPSAoKSA9PiAoMCwgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMS5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSkoeyBzaW5nbGV0b246IHRydWUgfSk7XG5leHBvcnRzLlNpbmdsZXRvbiA9IFNpbmdsZXRvbjtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TaW5nbGV0b24gPSBleHBvcnRzLlNlcnZpY2UgPSBleHBvcnRzLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gZXhwb3J0cy5JbmplY3RhYmxlID0gdm9pZCAwO1xudmFyIEluamVjdGFibGVfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJJbmplY3RhYmxlXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBJbmplY3RhYmxlXzEuSW5qZWN0YWJsZTsgfSB9KTtcbnZhciBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xID0gcmVxdWlyZShcIi4vSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMS5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeTsgfSB9KTtcbnZhciBTZXJ2aWNlXzEgPSByZXF1aXJlKFwiLi9TZXJ2aWNlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2VydmljZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gU2VydmljZV8xLlNlcnZpY2U7IH0gfSk7XG52YXIgU2luZ2xldG9uXzEgPSByZXF1aXJlKFwiLi9TaW5nbGV0b25cIik7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJTaW5nbGV0b25cIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNpbmdsZXRvbl8xLlNpbmdsZXRvbjsgfSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2RlY29yYXRvcnNcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW50ZXJmYWNlL0lDb250YWluZXJcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vaW50ZXJmYWNlL0lJbmplY3RvclwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9saWJyYXJ5L0NvbnRhaW5lclwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9saWJyYXJ5L0luamVjdG9yXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL3R5cGVzXCIpLCBleHBvcnRzKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuQ29udGFpbmVyID0gdm9pZCAwO1xuY29uc3QgdHNsaWJfMSA9IHJlcXVpcmUoXCJ0c2xpYlwiKTtcbmNvbnN0IEluamVjdG9yXzEgPSByZXF1aXJlKFwiLi9JbmplY3RvclwiKTtcbmNvbnN0IHByb3hpZnlfMSA9IHJlcXVpcmUoXCIuLi9wcm94aWZ5XCIpO1xuY2xhc3MgQ29udGFpbmVyIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHsgaG90U3dhcHBpbmc6IGZhbHNlIH0pIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLmdldEluamVjdG9yID0gKCkgPT4geyByZXR1cm4gdGhpcy5pbmplY3RvcjsgfTtcbiAgICAgICAgdGhpcy5pbmplY3RvciA9IG5ldyBJbmplY3Rvcl8xLkluamVjdG9yKHNldHRpbmdzKTtcbiAgICB9XG4gICAgcmVzb2x2ZSh0YXJnZXQpIHtcbiAgICAgICAgaWYgKHRhcmdldCA9PSBudWxsKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgQ29udGFpbmVyRGVwZW5kZW5jeVJlc29sdXRpb25FcnJvcih0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy5zZXR0aW5ncy5ob3RTd2FwcGluZ1xuICAgICAgICAgICAgPyAoMCwgcHJveGlmeV8xLnByb3hpZnkpKHRoaXMuaW5qZWN0b3IsIHRhcmdldClcbiAgICAgICAgICAgIDogdGhpcy5pbmplY3Rvci5yZXNvbHZlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiByZXNvbHZlZDtcbiAgICB9XG4gICAgcmVwbGFjZSh0eXBlLCBpbXBsKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFkZFNlcnZpY2UodHlwZSwgaW1wbCwgdHJ1ZSk7XG4gICAgfVxuICAgIGNyZWF0ZSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5qZWN0b3IuY3JlYXRlKHRhcmdldCk7XG4gICAgfVxuICAgIGFkZFNlcnZpY2UodHlwZSwgaW1wbCA9IHR5cGUsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclR5cGUodHlwZSwgaW1wbCwgZm9yY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkU2VydmljZUluc3RhbmNlKHR5cGUsIGluc3RhbmNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJJbnN0YW5jZSh0eXBlLCBpbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBhZGRTaW5nbGV0b24odHlwZSwgaW1wbCA9IHR5cGUsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclR5cGUodHlwZSwgaW1wbCwgZm9yY2UpO1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVyU2luZ2xldG9uKHR5cGUpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkU2luZ2xldG9uSW5zdGFuY2UodHlwZSwgaW5zdGFuY2UsIGZvcmNlID0gZmFsc2UpIHtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclR5cGUodHlwZSwgdHlwZSwgZm9yY2UpO1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVySW5zdGFuY2UodHlwZSwgaW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgb25FeGl0KCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICB5aWVsZCB0aGlzLmluamVjdG9yLmRlc3Ryb3lBbGwoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0cy5Db250YWluZXIgPSBDb250YWluZXI7XG5jbGFzcyBDb250YWluZXJEZXBlbmRlbmN5UmVzb2x1dGlvbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKHRhcmdldCkge1xuICAgICAgICBzdXBlcihgSW52YWxpZCB0YXJnZXQ6ICR7dGFyZ2V0fWApO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmplY3RvciA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBwcm94aWZ5XzEgPSByZXF1aXJlKFwiLi4vcHJveGlmeVwiKTtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNsYXNzIEluamVjdG9yIHtcbiAgICBjb25zdHJ1Y3RvcihzZXR0aW5ncyA9IHsgaG90U3dhcHBpbmc6IGZhbHNlIH0pIHtcbiAgICAgICAgdGhpcy5zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyU2luZ2xldG9uID0gKHR5cGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuX19zaW5nbGV0b25zLmFkZCh0aGlzLmdldFR5cGVOYW1lKHR5cGUpKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVyVHlwZSA9ICh0eXBlLCBpbXBsLCBmb3JjZSA9IGZhbHNlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeSh0eXBlLCAoaW1wbCB8fCB0eXBlKSwgZm9yY2UpO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVnaXN0ZXJJbnN0YW5jZSA9ICh0YXJnZXQsIGluc3RhbmNlKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlLnNldCh0eXBlTmFtZSwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnVwc2VydERlcGVuZGVuY3kgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBkZXBlbmRlbmN5ID0gdGhpcy5nZXREZXBlbmRlbmN5KHRhcmdldCk7XG4gICAgICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgICAgIGlmIChkZXBlbmRlbmN5ICE9IG51bGwpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGRlcGVuZGVuY3k7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEluamVjdG9yRGVwZW5kZW5jeU5vdEZvdW5kRXJyb3IodGFyZ2V0KTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmluc2VydERlcGVuZGVuY3kodHlwZU5hbWUsIHRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMucmVsb2FkRGVwZW5kZW5jeSA9ICh0YXJnZXQpID0+IHtcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmluZm8oYEhvdC1Td2FwcGluZyBcIiR7dGFyZ2V0Lm5hbWV9XCIgZGVwZW5kZW5jeS5gKVxuICAgICAgICAgICAgLy8gVE9ETzogdGhpcyBuZWVkcyBtb3JlIHRlc3RpbmdcbiAgICAgICAgICAgIGNvbnN0IGRlcCA9IHRoaXMuZ2V0RGVwZW5kZW5jeSh0YXJnZXQpO1xuICAgICAgICAgICAgdGhpcy5fX292ZXJyaWRlRGVwZW5kZW5jeSh0YXJnZXQsIGRlcCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fX3JlcGxhY2VJbnN0YW5jZUluQ2FjaGUodGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5nZXRUeXBlTmFtZSA9ICh0KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBydiA9ICh0eXBlb2YgdCA9PT0gJ3N0cmluZycpID8gdCA6ICh0ID09PSBudWxsIHx8IHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHQubmFtZSkgfHwgKHQgPT09IG51bGwgfHwgdCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdC5jb25zdHJ1Y3Rvci5uYW1lKTtcbiAgICAgICAgICAgIGlmICghcnYpXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEluamVjdG9yR2V0VHlwZU5hbWVFcnJvcih0KTtcbiAgICAgICAgICAgIHJldHVybiBydjtcbiAgICAgICAgfTtcbiAgICAgICAgLy8jZW5kcmVnaW9uXG4gICAgICAgIC8vI3JlZ2lvbiBpbnRlcm5hbHNcbiAgICAgICAgdGhpcy5fX2RlcGVuZGVuY3lDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19zaW5nbGV0b25zID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLl9fbG9nZ2VyID0gbmV3IFByb3h5KGNvbnNvbGUsIHtcbiAgICAgICAgICAgIGdldCh0YXJnZXQsIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICguLi5hcmdzKSA9PiB2b2lkIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyNyZWdpb24gYXBpXG4gICAgcmVzb2x2ZSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLl9faW5zdGFuY2VDYWNoZS5oYXModHlwZU5hbWUpKVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19pbnN0YW5jZUNhY2hlLmdldCh0eXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5jcmVhdGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBoYXNEZXBlbmRlbmN5KHRhcmdldCkge1xuICAgICAgICBjb25zdCB0eXBlbmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuaGFzKHR5cGVuYW1lKTtcbiAgICB9XG4gICAgZ2V0RGVwZW5kZW5jeSh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuZ2V0KHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KSk7XG4gICAgfVxuICAgIGluc2VydERlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZCwgb3ZlcnJpZGUpIHtcbiAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZCwgb3ZlcnJpZGUpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB0YXJnZXQgIT09ICdzdHJpbmcnKSA/IHRhcmdldCA6IHJlc29sdmVkO1xuICAgIH1cbiAgICBjcmVhdGUodGFyZ2V0KSB7XG4gICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKCdSZXNvbHZpbmcgZGVwZW5kZW5jeSA9PicsIHR5cGVOYW1lKTtcbiAgICAgICAgY29uc3QgcmVzb2x2ZWQgPSB0aGlzLnVwc2VydERlcGVuZGVuY3kodGFyZ2V0KTtcbiAgICAgICAgY29uc3QgeyBpbmplY3Rpb25zIH0gPSB0aGlzLl9fcmVzb2x2ZVRva2VucyhyZXNvbHZlZCk7XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fX2NyZWF0ZU9iamVjdChyZXNvbHZlZCwgaW5qZWN0aW9ucyk7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5fX2lzU2luZ2xldG9uSW5zdGFuY2UodHlwZU5hbWUsIHJlc29sdmVkKSlcbiAgICAgICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlLnNldCh0eXBlTmFtZSwgaW5zdGFuY2UpO1xuICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnY3JlYXRlZCcsIGluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbiAgICBkZXN0cm95QWxsKCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICBjb25zdCBkZXBzID0gWy4uLnRoaXMuX19pbnN0YW5jZUNhY2hlLnZhbHVlcygpXTtcbiAgICAgICAgICAgIHlpZWxkIFByb21pc2UuYWxsU2V0dGxlZChkZXBzLm1hcChlYWNoID0+IHRoaXMuX19kaXNwb3NlT2JqZWN0KGVhY2gpKSk7XG4gICAgICAgICAgICB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmNsZWFyKCk7XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5jbGVhcigpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGlzdERlcGVuZGVuY2llcyh7IHNvcnQgPSBmYWxzZSwgbG9nID0gZmFsc2UgfSA9IHt9KSB7XG4gICAgICAgIGxldCByZXN1bHQgPSBbLi4udGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5rZXlzKCldO1xuICAgICAgICBpZiAoc29ydClcbiAgICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5zb3J0KCk7XG4gICAgICAgIGlmIChsb2cpXG4gICAgICAgICAgICB0aGlzLl9fbG9nZ2VyLmluZm8ocmVzdWx0KTtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgZGVwZW5kZW5jaWVzQXNKU09OKCkge1xuICAgICAgICBjb25zdCBjYWNoZUtleXMgPSBbLi4udGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5rZXlzKCldO1xuICAgICAgICByZXR1cm4gY2FjaGVLZXlzLnNvcnQoKS5yZWR1Y2UoKGFjYywgbikgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmdldChuKTtcbiAgICAgICAgICAgIHJldHVybiBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGFjYyksIHsgW25dOiAoX2EgPSBpbnN0YW5jZSA9PT0gbnVsbCB8fCBpbnN0YW5jZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaW5zdGFuY2UuY29uc3RydWN0b3IpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5uYW1lIH0pO1xuICAgICAgICB9LCB7fSk7XG4gICAgfVxuICAgIF9fcmVzb2x2ZVRva2VucyhyZXNvbHZlZCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgY29uc3QgcmVmbGVjdGVkID0gUmVmbGVjdC5nZXRNZXRhZGF0YSgnZGVzaWduOnBhcmFtdHlwZXMnLCByZXNvbHZlZCk7XG4gICAgICAgIC8vIHRva2VucyBhcmUgcmVxdWlyZWQgZGVwZW5kZW5jaWVzLCB3aGlsZSBpbmplY3Rpb25zIGFyZSByZXNvbHZlZCB0b2tlbnMgZnJvbSB0aGUgSW5qZWN0b3JcbiAgICAgICAgY29uc3QgdG9rZW5zID0gKF9iID0gKF9hID0gcmVmbGVjdGVkID09PSBudWxsIHx8IHJlZmxlY3RlZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcmVmbGVjdGVkLm1hcCgobywgaSkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKG8ubmFtZSA9PT0gJ09iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICAgICAgcmV0dXJuIChfYSA9IHJlc29sdmVkW2NvbnN0YW50c18xLnN0YXRpY0RlcHNQcm9wXSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgIH0pKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuZmlsdGVyKChvKSA9PiBvICE9IG51bGwpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBbXTtcbiAgICAgICAgaWYgKHRva2Vucy5maW5kKG8gPT4gby5uYW1lID09PSAnT2JqZWN0JykpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBJbmplY3RvckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IocmVzb2x2ZWQsIHRva2Vucyk7XG4gICAgICAgIH1cbiAgICAgICAgdG9rZW5zLmZvckVhY2goKGNscykgPT4ge1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBjbHMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1wbCA9IHRoaXMuZ2V0RGVwZW5kZW5jeShjbHMpO1xuICAgICAgICAgICAgICAgIGlmIChpbXBsKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeShjbHMsIGltcGwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3koY2xzLCBjbHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgaW5qZWN0aW9ucyA9ICgoX2MgPSB0aGlzLnNldHRpbmdzKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MuaG90U3dhcHBpbmcpXG4gICAgICAgICAgICA/IHRva2Vucy5tYXAodG9rZW4gPT4gKDAsIHByb3hpZnlfMS5wcm94aWZ5KSh0aGlzLCB0b2tlbikpXG4gICAgICAgICAgICA6IHRva2Vucy5tYXAodG9rZW4gPT4gdGhpcy5yZXNvbHZlKHRva2VuKSk7XG4gICAgICAgIHJldHVybiB7IHJlc29sdmVkLCBpbmplY3Rpb25zIH07XG4gICAgfVxuICAgIF9fYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkTWF5YmUsIG92ZXJyaWRlID0gZmFsc2UpIHtcbiAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIGlmICh0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmhhcyh0eXBlTmFtZSkpIHtcbiAgICAgICAgICAgIGlmICghb3ZlcnJpZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUocmVzb2x2ZWRUeXBlKVxuICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoYE92ZXJyaWRpbmcgPT4gJHt0YXJnZXROYW1lfSB0byA9PiAke3R5cGVOYW1lfWApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAvLyBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUocmVzb2x2ZWRUeXBlKVxuICAgICAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoYFNldHRpbmcgPT4gJHt0YXJnZXROYW1lfSB0byA9PiAke3R5cGVOYW1lfWApXG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVzb2x2ZWRUeXBlID0gdHlwZW9mIHRhcmdldCA9PT0gJ3N0cmluZycgPyByZXNvbHZlZE1heWJlXG4gICAgICAgICAgICA6IHJlc29sdmVkTWF5YmUgPT0gbnVsbCA/IHRhcmdldFxuICAgICAgICAgICAgICAgIDogLyogb3RoZXJ3aXNlICovIHJlc29sdmVkTWF5YmU7XG4gICAgICAgIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUuc2V0KHR5cGVOYW1lLCByZXNvbHZlZFR5cGUpO1xuICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5kZWxldGUodHlwZU5hbWUpO1xuICAgIH1cbiAgICBfX292ZXJyaWRlRGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkKSB7XG4gICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQsIHRydWUpO1xuICAgICAgICByZXR1cm4gKHR5cGVvZiB0YXJnZXQgIT09ICdzdHJpbmcnKSA/IHRhcmdldCA6IHJlc29sdmVkO1xuICAgIH1cbiAgICBfX3B1cmdlSW5zdGFuY2VGcm9tQ2FjaGUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5fX2luc3RhbmNlQ2FjaGUuZGVsZXRlKHR5cGVOYW1lKTtcbiAgICB9XG4gICAgX19yZXBsYWNlSW5zdGFuY2VJbkNhY2hlKHRhcmdldCkge1xuICAgICAgICB0aGlzLl9fcHVyZ2VJbnN0YW5jZUZyb21DYWNoZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXNvbHZlKHRhcmdldCk7XG4gICAgfVxuICAgIF9faXNTaW5nbGV0b25JbnN0YW5jZSh0eXBlTmFtZSwgcmVzb2x2ZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19zaW5nbGV0b25zLmhhcyh0eXBlTmFtZSkgfHxcbiAgICAgICAgICAgIHRoaXMuX19yZWZsZWN0VGFyZ2V0VHlwZShyZXNvbHZlZCkgPT09ICdzaW5nbGV0b24nO1xuICAgIH1cbiAgICBfX3JlZmxlY3RUYXJnZXRUeXBlKHJlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiBSZWZsZWN0LmdldE1ldGFkYXRhKGNvbnN0YW50c18xLnJlZmxlY3RUYXJnZXRUeXBlLCByZXNvbHZlZCk7XG4gICAgfVxuICAgIF9fY3JlYXRlT2JqZWN0KHRhcmdldCwgaW5qZWN0aW9ucykge1xuICAgICAgICB0aGlzLl9fbG9nZ2VyLmxvZygnY3JlYXRpbmcgb2JqZWN0LCB0eXBlTmFtZTonLCB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCkpO1xuICAgICAgICByZXR1cm4gbmV3IHRhcmdldCguLi5pbmplY3Rpb25zKTtcbiAgICB9XG4gICAgX19kaXNwb3NlT2JqZWN0KHRhcmdldCkge1xuICAgICAgICByZXR1cm4gdHNsaWJfMS5fX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uKiAoKSB7XG4gICAgICAgICAgICAvLyBAdHMtZXhwZWN0LWVycm9yXG4gICAgICAgICAgICBjb25zdCBmbiA9IHRhcmdldCA9PT0gbnVsbCB8fCB0YXJnZXQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHRhcmdldC5kaXNwb3NlO1xuICAgICAgICAgICAgcmV0dXJuIHlpZWxkIChmbiA9PT0gbnVsbCB8fCBmbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm4oKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuSW5qZWN0b3IgPSBJbmplY3RvcjtcbjtcbmNsYXNzIEluamVjdG9yRGVwZW5kZW5jeVJlc29sdXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQsIHRva2Vucykge1xuICAgICAgICBjb25zdCBlcnJvciA9IGBVbmFibGUgdG8gcmVzb2x2ZSBkZXBlbmRlbmNpZXMgZm9yID0+ICR7dGFyZ2V0Lm5hbWV9LCBkZXBzID0+ICR7dG9rZW5zLm1hcChvID0+IG8ubmFtZSl9YDtcbiAgICAgICAgY29uc3QgaGVscCA9IGBQb3NzaWJsZSBtaXN1c2Ugb2YgQEluamVjdGFibGUoKSBkZWNvcmF0b3Igb24gY2xhc3MgJHt0YXJnZXQubmFtZX1gO1xuICAgICAgICBzdXBlcihgJHtlcnJvcn1cXG4ke2hlbHB9YCk7XG4gICAgfVxufVxuY2xhc3MgSW5qZWN0b3JEZXBlbmRlbmN5Tm90Rm91bmRFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoYFRhcmdldCBub3QgZm91bmQ6ICR7dGFyZ2V0fWApO1xuICAgIH1cbn1cbmNsYXNzIEluamVjdG9yR2V0VHlwZU5hbWVFcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoYHNvbWV0aGluZyBmdWNreSBnb3QgcGFzc2VkIHRvIGdldFR5cGVOYW1lID0+ICR7dGFyZ2V0fWApO1xuICAgIH1cbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb21wYXJlID0gZXhwb3J0cy5wcm94aWZ5ID0gdm9pZCAwO1xuY29uc3QgY29uc3RhbnRzXzEgPSByZXF1aXJlKFwiLi9jb25zdGFudHNcIik7XG5jbGFzcyBQcm94aWZ5TnVsbFRva2VuRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG59XG5mdW5jdGlvbiBwcm94aWZ5KGluamVjdG9yLCB0b2tlbikge1xuICAgIGlmICh0b2tlbiA9PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBQcm94aWZ5TnVsbFRva2VuRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBQcm94eSgvKiBpbmplY3Rvci5yZXNvbHZlKHRva2VuKSAqLyB7fSwge1xuICAgICAgICBnZXQoXywgcHJvcCwgcmVjZWl2ZXIpIHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGluamVjdG9yLnJlc29sdmUodG9rZW4pO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09IGNvbnN0YW50c18xLnByb3h5Q29tcGFyZUtleSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcik7XG4gICAgICAgIH0sXG4gICAgfSk7XG59XG5leHBvcnRzLnByb3hpZnkgPSBwcm94aWZ5O1xuY29uc3QgY29tcGFyZSA9IChhLCBiKSA9PiB7XG4gICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgIGEgPSAoX2IgPSAoKF9hID0gYSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDoge30pW2NvbnN0YW50c18xLnByb3h5Q29tcGFyZUtleV0pICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6IGE7XG4gICAgYiA9IChfZCA9ICgoX2MgPSBiKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiB7fSlbY29uc3RhbnRzXzEucHJveHlDb21wYXJlS2V5XSkgIT09IG51bGwgJiYgX2QgIT09IHZvaWQgMCA/IF9kIDogYjtcbiAgICByZXR1cm4gT2JqZWN0LmlzKGEsIGIpO1xufTtcbmV4cG9ydHMuY29tcGFyZSA9IGNvbXBhcmU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwidmFyIGRlZmVycmVkID0gW107XG5fX3dlYnBhY2tfcmVxdWlyZV9fLk8gPSAocmVzdWx0LCBjaHVua0lkcywgZm4sIHByaW9yaXR5KSA9PiB7XG5cdGlmKGNodW5rSWRzKSB7XG5cdFx0cHJpb3JpdHkgPSBwcmlvcml0eSB8fCAwO1xuXHRcdGZvcih2YXIgaSA9IGRlZmVycmVkLmxlbmd0aDsgaSA+IDAgJiYgZGVmZXJyZWRbaSAtIDFdWzJdID4gcHJpb3JpdHk7IGktLSkgZGVmZXJyZWRbaV0gPSBkZWZlcnJlZFtpIC0gMV07XG5cdFx0ZGVmZXJyZWRbaV0gPSBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV07XG5cdFx0cmV0dXJuO1xuXHR9XG5cdHZhciBub3RGdWxmaWxsZWQgPSBJbmZpbml0eTtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBbY2h1bmtJZHMsIGZuLCBwcmlvcml0eV0gPSBkZWZlcnJlZFtpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGNodW5rSWRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRpZiAoKHByaW9yaXR5ICYgMSA9PT0gMCB8fCBub3RGdWxmaWxsZWQgPj0gcHJpb3JpdHkpICYmIE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uTykuZXZlcnkoKGtleSkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uT1trZXldKGNodW5rSWRzW2pdKSkpKSB7XG5cdFx0XHRcdGNodW5rSWRzLnNwbGljZShqLS0sIDEpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0XHRcdGlmKHByaW9yaXR5IDwgbm90RnVsZmlsbGVkKSBub3RGdWxmaWxsZWQgPSBwcmlvcml0eTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZC5zcGxpY2UoaS0tLCAxKVxuXHRcdFx0dmFyIHIgPSBmbigpO1xuXHRcdFx0aWYgKHIgIT09IHVuZGVmaW5lZCkgcmVzdWx0ID0gcjtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn07IiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5PLmogPSAoY2h1bmtJZCkgPT4gKGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9PT0gMCk7XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uLCBkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMDtcblx0aWYoY2h1bmtJZHMuc29tZSgoaWQpID0+IChpbnN0YWxsZWRDaHVua3NbaWRdICE9PSAwKSkpIHtcblx0XHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKHJ1bnRpbWUpIHZhciByZXN1bHQgPSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHR9XG5cdGlmKHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKSBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0oKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHJlc3VsdCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3Vkb2t1XCJdID0gc2VsZltcIndlYnBhY2tDaHVua3N1ZG9rdVwiXSB8fCBbXTtcbmNodW5rTG9hZGluZ0dsb2JhbC5mb3JFYWNoKHdlYnBhY2tKc29ucENhbGxiYWNrLmJpbmQobnVsbCwgMCkpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKSk7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBkZXBlbmRzIG9uIG90aGVyIGxvYWRlZCBjaHVua3MgYW5kIGV4ZWN1dGlvbiBuZWVkIHRvIGJlIGRlbGF5ZWRcbnZhciBfX3dlYnBhY2tfZXhwb3J0c19fID0gX193ZWJwYWNrX3JlcXVpcmVfXy5PKHVuZGVmaW5lZCwgW1widmVuZG9ycy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfYXBpX2pzLW5vZGVfbW9kdWxlc19jc3MtbG9hZGVyX2Rpc3RfcnVudGltZV9nZXRVLTlkYWJkM1wiXSwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9nYW1lLnZhbmlsbGEudHNcIikpKVxuX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyhfX3dlYnBhY2tfZXhwb3J0c19fKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==
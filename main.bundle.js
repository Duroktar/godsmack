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
___CSS_LOADER_EXPORT___.push([module.id, "H1 {\n  background:black;\n  color:white;\n  margin:0px 0px 2px 0px;\n  font-size:20px;\n  padding:2px 1px 5px 1px;\n  text-align:center;\n}\n\nbody {\n  font-family:verdana,helvetica,arial,sans-serif;\n  border:0px; margin:0px; padding:0px;\n\n  background:url(\n      " + ___CSS_LOADER_URL_REPLACEMENT_0___ + "\n  ) repeat;\n}\n\n/* board */\n.sudoku_board {\n  margin:6px auto;\n\n  overflow: hidden;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.sudoku_board .cell {\n  width:11.11%;\n  /* display: inline-block; */\n  float: left;\n  cursor:pointer;\n  text-align: center;\n  overflow: hidden;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n\n  background:white;\n}\n\n.sudoku_board .cell.border_h {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset 0px -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_h.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 black, inset 0px -2px 0 black;\n}\n\n.sudoku_board .cell span {\n  color:#2c3e50;\n  font-size:14px;\n  text-align:middle;\n}\n\n.sudoku_board .cell.selected, .sudoku_board .cell.selected.fix {\n  background:#FFE;\n}\n\n.sudoku_board .cell.selected.current {\n  position:relative;\n  background: #3498db;\n  font-weight:bold;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.sudoku_board .cell.selected.current span {\n  color:white;\n}\n\n.sudoku_board .cell.selected.group {\n  color:blue;\n}\n\n.sudoku_board .cell span.samevalue, .sudoku_board .cell.fix span.samevalue {\n  font-weight:bold;\n  color:#3498db;\n}\n\n.sudoku_board .cell.notvalid, .sudoku_board .cell.selected.notvalid{\n  font-weight:bold;\n  color:white;;\n  background:#e74c3c;\n}\n\n.sudoku_board .cell.fix {\n  background:#ecf0f1;\n  cursor:not-allowed;\n}\n\n.sudoku_board .cell.fix span {\ncolor:#7f8c8d;\n}\n\n.sudoku_board .cell .solution {\nfont-size:10px;\ncolor:#d35400;\n}\n\n.sudoku_board .cell .note {\n  color:#bdc3c7;\n  width:50%;\n  height:50%;\n  display: inline-block;\n  float:left;\n  text-align:center;\n  font-size:14px;\n\n  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.gameover_container .gameover {\n  color:white;\n  font-weight:bold;\n    text-align:center;\n\n  display:block;\n  position:absolute;\n  width:90%;\n  padding:10px;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n\n.restart {\nbackground:#7F8C8D;\ncolor:#ecf0f1;\n}\n\n/* console */\n.board_console_container, .gameover_container {\n  background-color: rgba(127, 140, 141, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.board_console {\n  display: grid;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  grid-template-rows: 8em 8em 8em 8em;\n  position:absolute;\n  width:50%;\n  color:white;\n  background-color: rgba(127, 140, 141, 0.7);\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.board_console .num {\n  /* width:33.33%; */\n  color:#2c3e50;\n  padding: 1px;\n  display: flex;\n  font-weight:bold;\n  font-size:24px;\n  text-align: center;\n  cursor:pointer;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n}\n\n\n.board_console .num:hover {\n  color:white;\n  background:#f1c40f;\n}\n\n.board_console .num.remove {\n  width: 200%;\n}\n\n.board_console .num.note {\n  background:#95a5a6;\n  color:#ecf0f1;\n  position: relative;\n  left: 100%;\n}\n\n.board_console .num.note:hover {\n  background:#95a5a6;\n  color:#f1c40f;\n}\n\n.board_console .num.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected:hover {\ncolor:white;\n}\n\n.board_console .num.no:hover {\n  color:white;\n  cursor:not-allowed;\n}\n\n.board_console .num.remove:hover {\n  color:white;\n  background:#c0392b;\n}\n\n.statistics {\n  text-align:center;\n}\n\n#sudoku_menu {\n  background-color: black;\n  position: absolute;\n  z-index:2;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n#sudoku_menu ul {\n margin: 0;\n padding: 100px 0px 0px 0px;\n list-style: none;\n}\n\n#sudoku_menu ul li{\nmargin: 0px 50px;\n}\n\n#sudoku_menu ul li a {\ntext-align:center;\npadding: 15px 20px;\nfont-size: 28px;\nfont-weight: bold;\ncolor: white;\ntext-decoration: none;\ndisplay: block;\nborder-bottom: 1px solid #2c3e50;\n}\n\n#sudoku_menu.open-sidebar {\nleft:0px;\n}\n\n#sidebar-toggle {\n  z-index:3;\n  background: #bdc3c7;\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  padding: 22px 18px;\n  float: left;\n}\n\n#sidebar-toggle .bar{\n  display: block;\n  width: 28px;\n  margin-bottom: 4px;\n  height: 4px;\n  background-color: #f0f0f0;\n  border-radius: 1px;\n}\n\n#sidebar-toggle .bar:last-child{\n   margin-bottom: 0;\n}\n\n/*Responsive Stuff*/\n\n@media all and (orientation:portrait) and (min-width: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:60px; }\n  .board_console .num { font-size:60px; }\n}\n\n@media all and (orientation:landscape) and (min-height: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:50px; }\n  .board_console .num { font-size:50px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 1000px){\n  .sudoku_board .cell span { font-size:30px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 640px){\n.sudoku_board .cell span { font-size:24px; }\n.sudoku_board .cell .note { font-size:10px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 470px){\n.sudoku_board .cell span { font-size:16px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 320px){\n.sudoku_board .cell span { font-size:12px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and  (max-width: 240px){\n.sudoku_board .cell span { font-size:10px; }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/sudoku.nice.css"],"names":[],"mappings":"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","sourcesContent":["H1 {\n  background:black;\n  color:white;\n  margin:0px 0px 2px 0px;\n  font-size:20px;\n  padding:2px 1px 5px 1px;\n  text-align:center;\n}\n\nbody {\n  font-family:verdana,helvetica,arial,sans-serif;\n  border:0px; margin:0px; padding:0px;\n\n  background:url(\n      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC\n  ) repeat;\n}\n\n/* board */\n.sudoku_board {\n  margin:6px auto;\n\n  overflow: hidden;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.sudoku_board .cell {\n  width:11.11%;\n  /* display: inline-block; */\n  float: left;\n  cursor:pointer;\n  text-align: center;\n  overflow: hidden;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n\n  background:white;\n}\n\n.sudoku_board .cell.border_h {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset 0px -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_h.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 black, inset 0px -2px 0 black;\n}\n\n.sudoku_board .cell span {\n  color:#2c3e50;\n  font-size:14px;\n  text-align:middle;\n}\n\n.sudoku_board .cell.selected, .sudoku_board .cell.selected.fix {\n  background:#FFE;\n}\n\n.sudoku_board .cell.selected.current {\n  position:relative;\n  background: #3498db;\n  font-weight:bold;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.sudoku_board .cell.selected.current span {\n  color:white;\n}\n\n.sudoku_board .cell.selected.group {\n  color:blue;\n}\n\n.sudoku_board .cell span.samevalue, .sudoku_board .cell.fix span.samevalue {\n  font-weight:bold;\n  color:#3498db;\n}\n\n.sudoku_board .cell.notvalid, .sudoku_board .cell.selected.notvalid{\n  font-weight:bold;\n  color:white;;\n  background:#e74c3c;\n}\n\n.sudoku_board .cell.fix {\n  background:#ecf0f1;\n  cursor:not-allowed;\n}\n\n.sudoku_board .cell.fix span {\ncolor:#7f8c8d;\n}\n\n.sudoku_board .cell .solution {\nfont-size:10px;\ncolor:#d35400;\n}\n\n.sudoku_board .cell .note {\n  color:#bdc3c7;\n  width:50%;\n  height:50%;\n  display: inline-block;\n  float:left;\n  text-align:center;\n  font-size:14px;\n\n  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.gameover_container .gameover {\n  color:white;\n  font-weight:bold;\n    text-align:center;\n\n  display:block;\n  position:absolute;\n  width:90%;\n  padding:10px;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n\n.restart {\nbackground:#7F8C8D;\ncolor:#ecf0f1;\n}\n\n/* console */\n.board_console_container, .gameover_container {\n  background-color: rgba(127, 140, 141, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n\n.board_console {\n  display: grid;\n  grid-template-columns: 33.3% 33.3% 33.3%;\n  grid-template-rows: 8em 8em 8em 8em;\n  position:absolute;\n  width:50%;\n  color:white;\n  background-color: rgba(127, 140, 141, 0.7);\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.board_console .num {\n  /* width:33.33%; */\n  color:#2c3e50;\n  padding: 1px;\n  display: flex;\n  font-weight:bold;\n  font-size:24px;\n  text-align: center;\n  cursor:pointer;\n  justify-content: center;\n  align-items: center;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n}\n\n\n.board_console .num:hover {\n  color:white;\n  background:#f1c40f;\n}\n\n.board_console .num.remove {\n  width: 200%;\n}\n\n.board_console .num.note {\n  background:#95a5a6;\n  color:#ecf0f1;\n  position: relative;\n  left: 100%;\n}\n\n.board_console .num.note:hover {\n  background:#95a5a6;\n  color:#f1c40f;\n}\n\n.board_console .num.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected:hover {\ncolor:white;\n}\n\n.board_console .num.no:hover {\n  color:white;\n  cursor:not-allowed;\n}\n\n.board_console .num.remove:hover {\n  color:white;\n  background:#c0392b;\n}\n\n.statistics {\n  text-align:center;\n}\n\n#sudoku_menu {\n  background-color: black;\n  position: absolute;\n  z-index:2;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n#sudoku_menu ul {\n margin: 0;\n padding: 100px 0px 0px 0px;\n list-style: none;\n}\n\n#sudoku_menu ul li{\nmargin: 0px 50px;\n}\n\n#sudoku_menu ul li a {\ntext-align:center;\npadding: 15px 20px;\nfont-size: 28px;\nfont-weight: bold;\ncolor: white;\ntext-decoration: none;\ndisplay: block;\nborder-bottom: 1px solid #2c3e50;\n}\n\n#sudoku_menu.open-sidebar {\nleft:0px;\n}\n\n#sidebar-toggle {\n  z-index:3;\n  background: #bdc3c7;\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  padding: 22px 18px;\n  float: left;\n}\n\n#sidebar-toggle .bar{\n  display: block;\n  width: 28px;\n  margin-bottom: 4px;\n  height: 4px;\n  background-color: #f0f0f0;\n  border-radius: 1px;\n}\n\n#sidebar-toggle .bar:last-child{\n   margin-bottom: 0;\n}\n\n/*Responsive Stuff*/\n\n@media all and (orientation:portrait) and (min-width: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:60px; }\n  .board_console .num { font-size:60px; }\n}\n\n@media all and (orientation:landscape) and (min-height: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:50px; }\n  .board_console .num { font-size:50px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 1000px){\n  .sudoku_board .cell span { font-size:30px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 640px){\n.sudoku_board .cell span { font-size:24px; }\n.sudoku_board .cell .note { font-size:10px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 470px){\n.sudoku_board .cell span { font-size:16px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 320px){\n.sudoku_board .cell span { font-size:12px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and  (max-width: 240px){\n.sudoku_board .cell span { font-size:10px; }\n}\n"],"sourceRoot":""}]);
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
                    if (cell.value === input.key) {
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
        el.classList.toggle('notvalid', cell.value !== '.' &&
            model.solution[cell.index] !== cell.value);
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
    timer;
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
            // this.keypadBG.style.display = 'none';
        });
        this.keypadBG.addEventListener('click', e => {
            e.preventDefault();
            this.keypadBG.style.display = 'none';
        });
        this.keypad.addEventListener('click', e => {
            e.preventDefault();
            e.stopPropagation();
            if (!(e.target instanceof HTMLDivElement))
                return;
            if (!(e.target.classList.contains('num')))
                return;
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
        });
        this.events.subscribe(this.eventHandler);
        return this;
    }
    duration = 0;
    unregisterListeners() {
        this.events.unsubscribe(this.eventHandler);
        document.removeEventListener('click', this.onClickCell);
        document.removeEventListener('touchend', this.onClickCell);
        document.removeEventListener('keypress', this.onKeyPress);
        return this;
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
        return this;
    }
    run() {
        this.initializeControls();
        this.registerListeners();
        return this;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyx5QkFBeUI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyw2QkFBNkI7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTLHVCQUF1QjtBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFEQUFxRCxTQUFTO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7Ozs7V0MzQkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsQ0FBQzs7Ozs7V0NQRDs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0scUJBQXFCO1dBQzNCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOzs7OztVRWhEQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3N0eWxlcy9zdWRva3UubmljZS5jc3MiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3N0eWxlcy9zdWRva3UubmljZS5jc3M/NDI5MSIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvY29udGFpbmVyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9lbnVtcy9HYW1lRGlmZmljdWx0eS50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvZW51bXMvR2FtZVN0YXRlLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9nYW1lLnZhbmlsbGEudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JR2FtZUxvZ2ljLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSUdhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSUdhbWVQdWJTdWIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JR2FtZVJ1bm5lci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lJbnB1dFByb3ZpZGVyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSVN1ZG9rdVRTLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0dhbWVFdmVudHMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZUxvZ2ljLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0dhbWVNYW5hZ2VyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0dhbWVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZVNldHRpbmdzLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0lucHV0UHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvU3Vkb2t1VFMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3V0aWxzL2Fzc2VydC50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvdXRpbHMvdmVjMi50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvdmlld3MvVmFuaWxsYUpzVmlldy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL0luamVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvU2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9pbnRlcmZhY2UvSUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvaW50ZXJmYWNlL0lJbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvbGlicmFyeS9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2xpYnJhcnkvSW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L3Byb3hpZnkuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L3R5cGVzLmpzIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBSVVsRVFWUVlWMk44OXVydGZ3WWlBQ05Jb1pTWU1DTWh0YU1LOFlZUTBjRURBRzV5SjhlTFJoVGZBQUFBQUVsRlRrU3VRbUNDXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiSDEge1xcbiAgYmFja2dyb3VuZDpibGFjaztcXG4gIGNvbG9yOndoaXRlO1xcbiAgbWFyZ2luOjBweCAwcHggMnB4IDBweDtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbiAgcGFkZGluZzoycHggMXB4IDVweCAxcHg7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTp2ZXJkYW5hLGhlbHZldGljYSxhcmlhbCxzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOjBweDsgbWFyZ2luOjBweDsgcGFkZGluZzowcHg7XFxuXFxuICBiYWNrZ3JvdW5kOnVybChcXG4gICAgICBcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcbiAgKSByZXBlYXQ7XFxufVxcblxcbi8qIGJvYXJkICovXFxuLnN1ZG9rdV9ib2FyZCB7XFxuICBtYXJnaW46NnB4IGF1dG87XFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHtcXG4gIHdpZHRoOjExLjExJTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIGZsb2F0OiBsZWZ0O1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzc7XFxuXFxuICBiYWNrZ3JvdW5kOndoaXRlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl9oIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAwcHggLTJweCAwIDAgIzM0NDk1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfdiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgLTJweCAwIDAgIzM0NDk1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfaC5ib3JkZXJfdiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgLTJweCAwIDAgYmxhY2ssIGluc2V0IDBweCAtMnB4IDAgYmxhY2s7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7XFxuICBjb2xvcjojMmMzZTUwO1xcbiAgZm9udC1zaXplOjE0cHg7XFxuICB0ZXh0LWFsaWduOm1pZGRsZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZCwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5maXgge1xcbiAgYmFja2dyb3VuZDojRkZFO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmN1cnJlbnQge1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmN1cnJlbnQgc3BhbiB7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5ncm91cCB7XFxuICBjb2xvcjpibHVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4uc2FtZXZhbHVlLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCBzcGFuLnNhbWV2YWx1ZSB7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgY29sb3I6IzM0OThkYjtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ub3R2YWxpZCwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5ub3R2YWxpZHtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBjb2xvcjp3aGl0ZTs7XFxuICBiYWNrZ3JvdW5kOiNlNzRjM2M7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHtcXG4gIGJhY2tncm91bmQ6I2VjZjBmMTtcXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXggc3BhbiB7XFxuY29sb3I6IzdmOGM4ZDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAuc29sdXRpb24ge1xcbmZvbnQtc2l6ZToxMHB4O1xcbmNvbG9yOiNkMzU0MDA7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUge1xcbiAgY29sb3I6I2JkYzNjNztcXG4gIHdpZHRoOjUwJTtcXG4gIGhlaWdodDo1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDpsZWZ0O1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICBmb250LXNpemU6MTRweDtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZ2FtZW92ZXJfY29udGFpbmVyIC5nYW1lb3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcblxcbiAgZGlzcGxheTpibG9jaztcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6OTAlO1xcbiAgcGFkZGluZzoxMHB4O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcblxcbi5yZXN0YXJ0IHtcXG5iYWNrZ3JvdW5kOiM3RjhDOEQ7XFxuY29sb3I6I2VjZjBmMTtcXG59XFxuXFxuLyogY29uc29sZSAqL1xcbi5ib2FyZF9jb25zb2xlX2NvbnRhaW5lciwgLmdhbWVvdmVyX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMTQwLCAxNDEsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzMy4zJSAzMy4zJSAzMy4zJTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogOGVtIDhlbSA4ZW0gOGVtO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB3aWR0aDo1MCU7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAxNDAsIDE0MSwgMC43KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtIHtcXG4gIC8qIHdpZHRoOjMzLjMzJTsgKi9cXG4gIGNvbG9yOiMyYzNlNTA7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGZvbnQtc2l6ZToyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNztcXG59XFxuXFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bTpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5yZW1vdmUge1xcbiAgd2lkdGg6IDIwMCU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZSB7XFxuICBiYWNrZ3JvdW5kOiM5NWE1YTY7XFxuICBjb2xvcjojZWNmMGYxO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgbGVmdDogMTAwJTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6Izk1YTVhNjtcXG4gIGNvbG9yOiNmMWM0MGY7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlLnNlbGVjdGVkOmhvdmVyIHtcXG5jb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ubzpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5yZW1vdmU6aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kOiNjMDM5MmI7XFxufVxcblxcbi5zdGF0aXN0aWNzIHtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OjI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIHtcXG4gbWFyZ2luOiAwO1xcbiBwYWRkaW5nOiAxMDBweCAwcHggMHB4IDBweDtcXG4gbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIGxpe1xcbm1hcmdpbjogMHB4IDUwcHg7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCBsaSBhIHtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG5wYWRkaW5nOiAxNXB4IDIwcHg7XFxuZm9udC1zaXplOiAyOHB4O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmNvbG9yOiB3aGl0ZTtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuZGlzcGxheTogYmxvY2s7XFxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYzNlNTA7XFxufVxcblxcbiNzdWRva3VfbWVudS5vcGVuLXNpZGViYXIge1xcbmxlZnQ6MHB4O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUge1xcbiAgei1pbmRleDozO1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMjJweCAxOHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSAuYmFye1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjhweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIC5iYXI6bGFzdC1jaGlsZHtcXG4gICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4vKlJlc3BvbnNpdmUgU3R1ZmYqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6IDY0MHB4KXtcXG4gIGgxIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5zdGF0aXN0aWNzIHsgZm9udC1zaXplOjMwcHg7IH1cXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTo2MHB4OyB9XFxuICAuYm9hcmRfY29uc29sZSAubnVtIHsgZm9udC1zaXplOjYwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtaW4taGVpZ2h0OiA2NDBweCl7XFxuICBoMSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuc3RhdGlzdGljcyB7IGZvbnQtc2l6ZTozMHB4OyB9XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6NTBweDsgfVxcbiAgLmJvYXJkX2NvbnNvbGUgLm51bSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MzBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjI0cHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjEwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDcwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxNnB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZTo4cHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxMnB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZTo4cHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgIChtYXgtd2lkdGg6IDI0MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTBweDsgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL3N1ZG9rdS5uaWNlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLGNBQWM7RUFDZCx1QkFBdUI7RUFDdkIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsOENBQThDO0VBQzlDLFVBQVUsRUFBRSxVQUFVLEVBQUUsV0FBVzs7RUFFbkM7O1VBRVE7QUFDVjs7QUFFQSxVQUFVO0FBQ1Y7RUFDRSxlQUFlOztFQUVmLGdCQUFnQjs7RUFFaEIseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsaUJBQWlCOztFQUVqQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLFdBQVc7RUFDWCxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGdCQUFnQjs7RUFFaEIsOEJBQThCLEVBQUUsZ0NBQWdDO0lBQzlELDJCQUEyQixLQUFLLHlCQUF5QjtJQUN6RCxzQkFBc0I7O0VBRXhCLG1DQUFtQzs7RUFFbkMsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsK0RBQStEO0FBQ2pFOztBQUVBO0VBQ0UsMkRBQTJEO0FBQzdEOztBQUVBO0VBQ0UsaUZBQWlGO0FBQ25GOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsVUFBVTtBQUNaOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsa0JBQWtCO0FB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LEVBQUU7RUFDckIsY0FBYyxjQUFjLEVBQUU7RUFDOUIsMkJBQTJCLGNBQWMsRUFBRTtFQUMzQyxzQkFBc0IsY0FBYyxFQUFFO0FBQ3hDOztBQUVBO0VBQ0UsMkJBQTJCLGNBQWMsRUFBRTtBQUM3Qzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0MsNEJBQTRCLGNBQWMsRUFBRTtBQUM1Qzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0MsNEJBQTRCLGFBQWEsRUFBRTtBQUMzQzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0MsNEJBQTRCLGFBQWEsRUFBRTtBQUMzQzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiSDEge1xcbiAgYmFja2dyb3VuZDpibGFjaztcXG4gIGNvbG9yOndoaXRlO1xcbiAgbWFyZ2luOjBweCAwcHggMnB4IDBweDtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbiAgcGFkZGluZzoycHggMXB4IDVweCAxcHg7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTp2ZXJkYW5hLGhlbHZldGljYSxhcmlhbCxzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOjBweDsgbWFyZ2luOjBweDsgcGFkZGluZzowcHg7XFxuXFxuICBiYWNrZ3JvdW5kOnVybChcXG4gICAgICBkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBSVVsRVFWUVlWMk44OXVydGZ3WWlBQ05Jb1pTWU1DTWh0YU1LOFlZUTBjRURBRzV5SjhlTFJoVGZBQUFBQUVsRlRrU3VRbUNDXFxuICApIHJlcGVhdDtcXG59XFxuXFxuLyogYm9hcmQgKi9cXG4uc3Vkb2t1X2JvYXJkIHtcXG4gIG1hcmdpbjo2cHggYXV0bztcXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwge1xcbiAgd2lkdGg6MTEuMTElO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNztcXG5cXG4gIGJhY2tncm91bmQ6d2hpdGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX2gge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IDBweCAtMnB4IDAgMCAjMzQ0OTVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl92IHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAtMnB4IDAgMCAjMzQ0OTVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl9oLmJvcmRlcl92IHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAtMnB4IDAgMCBibGFjaywgaW5zZXQgMHB4IC0ycHggMCBibGFjaztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHtcXG4gIGNvbG9yOiMyYzNlNTA7XFxuICBmb250LXNpemU6MTRweDtcXG4gIHRleHQtYWxpZ246bWlkZGxlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmZpeCB7XFxuICBiYWNrZ3JvdW5kOiNGRkU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuY3VycmVudCB7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuY3VycmVudCBzcGFuIHtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmdyb3VwIHtcXG4gIGNvbG9yOmJsdWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3Bhbi5zYW1ldmFsdWUsIC5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHNwYW4uc2FtZXZhbHVlIHtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBjb2xvcjojMzQ5OGRiO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLm5vdHZhbGlkLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLm5vdHZhbGlke1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGNvbG9yOndoaXRlOztcXG4gIGJhY2tncm91bmQ6I2U3NGMzYztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXgge1xcbiAgYmFja2dyb3VuZDojZWNmMGYxO1xcbiAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCBzcGFuIHtcXG5jb2xvcjojN2Y4YzhkO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5zb2x1dGlvbiB7XFxuZm9udC1zaXplOjEwcHg7XFxuY29sb3I6I2QzNTQwMDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7XFxuICBjb2xvcjojYmRjM2M3O1xcbiAgd2lkdGg6NTAlO1xcbiAgaGVpZ2h0OjUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OmxlZnQ7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gIGZvbnQtc2l6ZToxNHB4O1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5nYW1lb3Zlcl9jb250YWluZXIgLmdhbWVvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuXFxuICBkaXNwbGF5OmJsb2NrO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB3aWR0aDo5MCU7XFxuICBwYWRkaW5nOjEwcHg7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuXFxuLnJlc3RhcnQge1xcbmJhY2tncm91bmQ6IzdGOEM4RDtcXG5jb2xvcjojZWNmMGYxO1xcbn1cXG5cXG4vKiBjb25zb2xlICovXFxuLmJvYXJkX2NvbnNvbGVfY29udGFpbmVyLCAuZ2FtZW92ZXJfY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAxNDAsIDE0MSwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIHtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDMzLjMlIDMzLjMlIDMzLjMlO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiA4ZW0gOGVtIDhlbSA4ZW07XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHdpZHRoOjUwJTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDE0MCwgMTQxLCAwLjcpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ge1xcbiAgLyogd2lkdGg6MzMuMzMlOyAqL1xcbiAgY29sb3I6IzJjM2U1MDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgZm9udC1zaXplOjI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3O1xcbn1cXG5cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnJlbW92ZSB7XFxuICB3aWR0aDogMjAwJTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlIHtcXG4gIGJhY2tncm91bmQ6Izk1YTVhNjtcXG4gIGNvbG9yOiNlY2YwZjE7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBsZWZ0OiAxMDAlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDojOTVhNWE2O1xcbiAgY29sb3I6I2YxYzQwZjtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUuc2VsZWN0ZWQ6aG92ZXIge1xcbmNvbG9yOndoaXRlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnJlbW92ZTpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQ6I2MwMzkyYjtcXG59XFxuXFxuLnN0YXRpc3RpY3Mge1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbiNzdWRva3VfbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwge1xcbiBtYXJnaW46IDA7XFxuIHBhZGRpbmc6IDEwMHB4IDBweCAwcHggMHB4O1xcbiBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwgbGl7XFxubWFyZ2luOiAwcHggNTBweDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIGxpIGEge1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbnBhZGRpbmc6IDE1cHggMjBweDtcXG5mb250LXNpemU6IDI4cHg7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuY29sb3I6IHdoaXRlO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5kaXNwbGF5OiBibG9jaztcXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51Lm9wZW4tc2lkZWJhciB7XFxubGVmdDowcHg7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSB7XFxuICB6LWluZGV4OjM7XFxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyMnB4IDE4cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIC5iYXJ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUgLmJhcjpsYXN0LWNoaWxke1xcbiAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi8qUmVzcG9uc2l2ZSBTdHVmZiovXFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogNjQwcHgpe1xcbiAgaDEgeyBmb250LXNpemU6NTBweDsgfVxcbiAgLnN0YXRpc3RpY3MgeyBmb250LXNpemU6MzBweDsgfVxcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjYwcHg7IH1cXG4gIC5ib2FyZF9jb25zb2xlIC5udW0geyBmb250LXNpemU6NjBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KXtcXG4gIGgxIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5zdGF0aXN0aWNzIHsgZm9udC1zaXplOjMwcHg7IH1cXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuYm9hcmRfY29uc29sZSAubnVtIHsgZm9udC1zaXplOjUwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTozMHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MjRweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6MTBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NzBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjE2cHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjhweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjEycHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjhweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAgKG1heC13aWR0aDogMjQwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxMHB4OyB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3Vkb2t1Lm5pY2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdWRva3UubmljZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udGFpbmVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IElucHV0UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvSW5wdXRQcm92aWRlclwiKTtcbmNvbnN0IEdhbWVFdmVudHNfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvR2FtZUV2ZW50c1wiKTtcbmNvbnN0IEdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVNYW5hZ2VyXCIpO1xuY29uc3QgR2FtZVJ1bm5lcl8xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lUnVubmVyXCIpO1xuY29uc3QgR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVMb2dpY1wiKTtcbmNvbnN0IEdhbWVTZXR0aW5nc18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lU2V0dGluZ3NcIik7XG5jb25zdCBTdWRva3VUU18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9TdWRva3VUU1wiKTtcbmNvbnN0IFZhbmlsbGFKc1ZpZXdfMSA9IHJlcXVpcmUoXCIuL3ZpZXdzL1ZhbmlsbGFKc1ZpZXdcIik7XG5leHBvcnRzLmNvbnRhaW5lciA9IG5ldyBpbmplY3RfMS5Db250YWluZXIoKVxuICAgIC5hZGRTaW5nbGV0b24oVmFuaWxsYUpzVmlld18xLlZhbmlsbGFKc1ZpZXcpXG4gICAgLmFkZFNpbmdsZXRvbihHYW1lU2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MpXG4gICAgLmFkZFNpbmdsZXRvbihcIklTdWRva3VUU1wiLCBTdWRva3VUU18xLlN1ZG9rdVRTKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJR2FtZU1hbmFnZXJcIiwgR2FtZU1hbmFnZXJfMS5HYW1lTWFuYWdlcilcbiAgICAuYWRkU2luZ2xldG9uKFwiSUdhbWVSdW5uZXJcIiwgR2FtZVJ1bm5lcl8xLkdhbWVSdW5uZXIpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lUHViU3ViXCIsIEdhbWVFdmVudHNfMS5HYW1lRXZlbnRzKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJR2FtZUxvZ2ljXCIsIEdhbWVMb2dpY18xLkdhbWVMb2dpYylcbiAgICAuYWRkU2luZ2xldG9uKFwiSUlucHV0UHJvdmlkZXJcIiwgSW5wdXRQcm92aWRlcl8xLkRPTUlucHV0UHJvdmlkZXIpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVEaWZmaWN1bHR5ID0gdm9pZCAwO1xudmFyIEdhbWVEaWZmaWN1bHR5O1xuKGZ1bmN0aW9uIChHYW1lRGlmZmljdWx0eSkge1xuICAgIEdhbWVEaWZmaWN1bHR5W1wiZWFzeVwiXSA9IFwiZWFzeVwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1wibWVkaXVtXCJdID0gXCJtZWRpdW1cIjtcbiAgICBHYW1lRGlmZmljdWx0eVtcImhhcmRcIl0gPSBcImhhcmRcIjtcbiAgICBHYW1lRGlmZmljdWx0eVtcInZlcnktaGFyZFwiXSA9IFwidmVyeS1oYXJkXCI7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJpbnNhbmVcIl0gPSBcImluc2FuZVwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1wiaW5odW1hblwiXSA9IFwiaW5odW1hblwiO1xufSkoR2FtZURpZmZpY3VsdHkgPSBleHBvcnRzLkdhbWVEaWZmaWN1bHR5IHx8IChleHBvcnRzLkdhbWVEaWZmaWN1bHR5ID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lU3RhdGUgPSB2b2lkIDA7XG52YXIgR2FtZVN0YXRlO1xuKGZ1bmN0aW9uIChHYW1lU3RhdGUpIHtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiUFJFR0FNRVwiXSA9IDBdID0gXCJQUkVHQU1FXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIlBMQVlJTkdcIl0gPSAxXSA9IFwiUExBWUlOR1wiO1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJQQVVTRURcIl0gPSAyXSA9IFwiUEFVU0VEXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIldPTlwiXSA9IDNdID0gXCJXT05cIjtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiR0FNRU9WRVJcIl0gPSA0XSA9IFwiR0FNRU9WRVJcIjtcbn0pKEdhbWVTdGF0ZSA9IGV4cG9ydHMuR2FtZVN0YXRlIHx8IChleHBvcnRzLkdhbWVTdGF0ZSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnJlcXVpcmUoXCJyZWZsZWN0LW1ldGFkYXRhXCIpO1xuY29uc3QgY29udGFpbmVyXzEgPSByZXF1aXJlKFwiLi9jb250YWluZXJcIik7XG5jb25zdCBWYW5pbGxhSnNWaWV3XzEgPSByZXF1aXJlKFwiLi92aWV3cy9WYW5pbGxhSnNWaWV3XCIpO1xucmVxdWlyZShcIi4vc3R5bGVzL3N1ZG9rdS5uaWNlLmNzc1wiKTtcbmNvbnRhaW5lcl8xLmNvbnRhaW5lci5yZXNvbHZlKFZhbmlsbGFKc1ZpZXdfMS5WYW5pbGxhSnNWaWV3KVxuICAgIC5yZWdpc3Rlckxpc3RlbmVycygpXG4gICAgLnN0YXJ0R2FtZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVFdmVudHMgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xubGV0IEdhbWVFdmVudHMgPSBjbGFzcyBHYW1lRXZlbnRzIHtcbiAgICBwdWJsaXNoKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMuR0FNRV9FVkVOVCwgZXZlbnQpO1xuICAgIH1cbiAgICBzdWJzY3JpYmUoY2IpIHtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmFkZExpc3RlbmVyKHRoaXMuR0FNRV9FVkVOVCwgY2IpO1xuICAgIH1cbiAgICB1bnN1YnNjcmliZShjYikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIodGhpcy5HQU1FX0VWRU5ULCBjYik7XG4gICAgfVxuICAgIGVtaXR0ZXIgPSBuZXcgZXZlbnRzXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgR0FNRV9FVkVOVCA9ICdnYW1lLWV2ZW50Jztcbn07XG5HYW1lRXZlbnRzID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKVxuXSwgR2FtZUV2ZW50cyk7XG5leHBvcnRzLkdhbWVFdmVudHMgPSBHYW1lRXZlbnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVMb2dpYyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9hc3NlcnRcIik7XG5sZXQgR2FtZUxvZ2ljID0gY2xhc3MgR2FtZUxvZ2ljIHtcbiAgICBhcHBseUdhbWVJbnB1dChpbnB1dCwgbW9kZWwpIHtcbiAgICAgICAgaWYgKG1vZGVsLnN0YXRlIDwgR2FtZVN0YXRlXzEuR2FtZVN0YXRlLldPTikge1xuICAgICAgICAgICAgc3dpdGNoIChpbnB1dC5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnNlbGVjdGVkID0gaW5wdXQuY2VsbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAna2V5cHJlc3MnOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbW9kZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBtb2RlbC5jZWxsc1ttb2RlbC5zZWxlY3RlZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzSGludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwudmFsdWUgPT09IGlucHV0LmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC52YWx1ZSA9ICcuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudmFsdWUgPSBpbnB1dC5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIGFzc2VydF8xLlVOUkVBQ0hBQkxFKShpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbC5zdGF0ZSA9IHRoaXMuZ2V0TmV4dEdhbWVTdGF0ZShtb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cbiAgICBpbml0aWFsaXplR2FtZUNlbGxzKHNlZWQpIHtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5ICogOTsgaSsrKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHRoaXMuY3JlYXRlR2FtZUNlbGwoaSwgc2VlZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG4gICAgZ2V0VGlsZVZlY3RvckZvckluZGV4KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihpbmRleCAlIDkpLCBNYXRoLmZsb29yKGluZGV4IC8gOSldO1xuICAgIH1cbiAgICBnZXRJbmRleEZvclRpbGVWZWN0b3IoW3gsIHldKSB7XG4gICAgICAgIHJldHVybiB5ICogOSArIHg7XG4gICAgfVxuICAgIGNyZWF0ZUdhbWVDZWxsKGluZGV4LCBzZWVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGlzSGludDogc2VlZFtpbmRleF0gIT09ICcuJyxcbiAgICAgICAgICAgIHZhbHVlOiBzZWVkW2luZGV4XSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0TmV4dEdhbWVTdGF0ZShtb2RlbCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IG1vZGVsLmNlbGxzXG4gICAgICAgICAgICAubWFwKGNlbGwgPT4gY2VsbC52YWx1ZSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgaWYgKG1vZGVsLnNvbHV0aW9uID09PSBib2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuIEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5XT047XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsLnN0YXRlO1xuICAgIH1cbn07XG5HYW1lTG9naWMgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpXG5dLCBHYW1lTG9naWMpO1xuZXhwb3J0cy5HYW1lTG9naWMgPSBHYW1lTG9naWM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lTWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5jb25zdCBJR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTG9naWNcIik7XG5jb25zdCBJU3Vkb2t1VFNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSVN1ZG9rdVRTXCIpO1xubGV0IEdhbWVNYW5hZ2VyID0gY2xhc3MgR2FtZU1hbmFnZXIge1xuICAgIGxvZ2ljO1xuICAgIHN1ZG9rdTtcbiAgICBjb25zdHJ1Y3Rvcihsb2dpYywgc3Vkb2t1KSB7XG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgdGhpcy5zdWRva3UgPSBzdWRva3U7XG4gICAgfVxuICAgIGNyZWF0ZShkaWZmaWN1bHR5KSB7XG4gICAgICAgIGNvbnN0IHNlZWQgPSB0aGlzLnN1ZG9rdS5nZW5lcmF0ZShkaWZmaWN1bHR5KTtcbiAgICAgICAgY29uc3Qgc29sdXRpb24gPSB0aGlzLnN1ZG9rdS5zb2x2ZShzZWVkKTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmxvZ2ljXG4gICAgICAgICAgICAuaW5pdGlhbGl6ZUdhbWVDZWxscyhzZWVkKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuUEFVU0VEO1xuICAgICAgICByZXR1cm4geyBjZWxscywgc2VlZCwgc3RhdGUsIGRpZmZpY3VsdHksIHNvbHV0aW9uIH07XG4gICAgfVxuICAgIHVwZGF0ZShtb2RlbCwgaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naWMuYXBwbHlHYW1lSW5wdXQoaW5wdXQsIG1vZGVsKTtcbiAgICB9XG59O1xuR2FtZU1hbmFnZXIgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0LCB0eXBlb2YgKF9iID0gdHlwZW9mIElTdWRva3VUU18xLklTdWRva3VUUyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJU3Vkb2t1VFNfMS5JU3Vkb2t1VFMpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdF0pXG5dLCBHYW1lTWFuYWdlcik7XG5leHBvcnRzLkdhbWVNYW5hZ2VyID0gR2FtZU1hbmFnZXI7XG5HYW1lTWFuYWdlcltcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lTG9naWNcIiwgXCJJU3Vkb2t1VFNcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2EsIF9iLCBfYztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZVJ1bm5lciA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5jb25zdCBJR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVNYW5hZ2VyXCIpO1xuY29uc3QgSUdhbWVQdWJTdWJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVQdWJTdWJcIik7XG5jb25zdCBJSW5wdXRQcm92aWRlcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JSW5wdXRQcm92aWRlclwiKTtcbmxldCBHYW1lUnVubmVyID0gY2xhc3MgR2FtZVJ1bm5lciB7XG4gICAgbWFuYWdlcjtcbiAgICBldmVudHM7XG4gICAgaW5wdXQ7XG4gICAgY29uc3RydWN0b3IobWFuYWdlciwgZXZlbnRzLCBpbnB1dCkge1xuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICBhc3luYyBwbGF5R2FtZShnYW1lYm9hcmQpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiYmVnaW5cIiwgZ2FtZWJvYXJkKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBhd2FpdCB0aGlzLmlucHV0LmdldE5leHRJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwiaW5wdXRcIiwgZ2FtZWJvYXJkKTtcbiAgICAgICAgICAgIHRoaXMubWFuYWdlci51cGRhdGUoZ2FtZWJvYXJkLCBpbnB1dCk7XG4gICAgICAgICAgICB0aGlzLmVtaXQoXCJ1cGRhdGVcIiwgZ2FtZWJvYXJkKTtcbiAgICAgICAgfSB3aGlsZSAoZ2FtZWJvYXJkLnN0YXRlIDwgR2FtZVN0YXRlXzEuR2FtZVN0YXRlLldPTik7XG4gICAgICAgIHRoaXMuZW1pdChcImVuZFwiLCBnYW1lYm9hcmQpO1xuICAgICAgICByZXR1cm4gZ2FtZWJvYXJkO1xuICAgIH1cbiAgICBlbWl0KHR5cGUsIHBheWxvYWQpIHtcbiAgICAgICAgdGhpcy5ldmVudHMucHVibGlzaCh7IHR5cGUsIHBheWxvYWQgfSk7XG4gICAgfVxufTtcbkdhbWVSdW5uZXIgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVNYW5hZ2VyXzEuSUdhbWVNYW5hZ2VyKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YiAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViKSA9PT0gXCJmdW5jdGlvblwiID8gX2IgOiBPYmplY3QsIHR5cGVvZiAoX2MgPSB0eXBlb2YgSUlucHV0UHJvdmlkZXJfMS5JSW5wdXRQcm92aWRlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJSW5wdXRQcm92aWRlcl8xLklJbnB1dFByb3ZpZGVyKSA9PT0gXCJmdW5jdGlvblwiID8gX2MgOiBPYmplY3RdKVxuXSwgR2FtZVJ1bm5lcik7XG5leHBvcnRzLkdhbWVSdW5uZXIgPSBHYW1lUnVubmVyO1xuR2FtZVJ1bm5lcltcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lTWFuYWdlclwiLCBcIklHYW1lUHViU3ViXCIsIFwiSUlucHV0UHJvdmlkZXJcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2E7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVTZXR0aW5ncyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lRGlmZmljdWx0eV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVEaWZmaWN1bHR5XCIpO1xuY29uc3QgSUdhbWVQdWJTdWJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVQdWJTdWJcIik7XG5jb25zdCB2ZWMyXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmVjMlwiKTtcbmxldCBHYW1lU2V0dGluZ3MgPSBjbGFzcyBHYW1lU2V0dGluZ3Mge1xuICAgIGV2ZW50cztcbiAgICBjb25zdHJ1Y3RvcihldmVudHMpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgfVxuICAgIGZsYWdDaGFyYWN0ZXIgPSAn8J+aqSc7XG4gICAgbWluZUNoYXJhY3RlciA9ICfwn5KjJztcbiAgICBkZWZhdWx0RGlmZmljdWx0eSA9IEdhbWVEaWZmaWN1bHR5XzEuR2FtZURpZmZpY3VsdHkuZWFzeTtcbiAgICB0aW1lckludGVydmFsID0gMTAwO1xuICAgIGJvYXJkV2lkdGggPSA1NDA7XG4gICAgY2VsbFNpemUgPSAoMCwgdmVjMl8xLnZlYzIpKE1hdGguZmxvb3IodGhpcy5ib2FyZFdpZHRoIC8gOSkpO1xuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvbGQgPSBzZWxmW2tleV07XG4gICAgICAgIHNlbGZba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjb25maWctY2hhbmdlZCcsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9sZCxcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5HYW1lU2V0dGluZ3MgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBHYW1lU2V0dGluZ3MpO1xuZXhwb3J0cy5HYW1lU2V0dGluZ3MgPSBHYW1lU2V0dGluZ3M7XG5HYW1lU2V0dGluZ3NbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXCJJR2FtZVB1YlN1YlwiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRE9NSW5wdXRQcm92aWRlciA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBldmVudHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXZlbnRzXCIpKTtcbmxldCBET01JbnB1dFByb3ZpZGVyID0gY2xhc3MgRE9NSW5wdXRQcm92aWRlciB7XG4gICAgY29uc3RydWN0b3IoKSB7IH1cbiAgICBhc3luYyBnZXROZXh0SW5wdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLm9uY2UoJ2RhdGEnLCBkYXRhID0+IHJlc29sdmUoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgcHV0TmV4dElucHV0KGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3B1dHRpbmcgaW5wdXQ6JywgZGF0YSk7XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkYXRhJywgZGF0YSk7XG4gICAgfVxuICAgIGVtaXR0ZXIgPSBuZXcgZXZlbnRzXzEuZGVmYXVsdCgpO1xufTtcbkRPTUlucHV0UHJvdmlkZXIgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIERPTUlucHV0UHJvdmlkZXIpO1xuZXhwb3J0cy5ET01JbnB1dFByb3ZpZGVyID0gRE9NSW5wdXRQcm92aWRlcjtcbkRPTUlucHV0UHJvdmlkZXJbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXTtcbi8vIGV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlSW5wdXRQcm92aWRlciB7XG4vLyAgIHByb3RlY3RlZCBnZXROZXh0SW5wdXQoKTogUHJvbWlzZTxJR2FtZUlucHV0PiB7XG4vLyAgICAgcmV0dXJuIG5ldyBQcm9taXNlPElHYW1lSW5wdXQ+KChyZXNvbHZlKSA9PlxuLy8gICAgICAgcmVzb2x2ZSh0aGlzLnByb3ZpZGVOZXh0SW5wdXQoKSkpXG4vLyAgIH1cbi8vICAgYWJzdHJhY3QgcHJvdmlkZU5leHRJbnB1dCgpOiBQcm9taXNlPElHYW1lSW5wdXQ+O1xuLy8gfVxuLy8gZXhwb3J0IGNsYXNzIEdhbWVJbnB1dFByb3ZpZGVyIGV4dGVuZHMgQmFzZUlucHV0UHJvdmlkZXIge1xuLy8gICBwdWJsaWMgYXN5bmMgcHJvdmlkZU5leHRJbnB1dCgpOiBQcm9taXNlPElHYW1lSW5wdXQ+IHtcbi8vICAgfVxuLy8gfVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG4vKlxuICAgIFN1ZG9rdS50c1xuICAgIC0tLS0tLS0tLVxuXG4gICAgQSBTdWRva3UgcHV6emxlIGdlbmVyYXRvciBhbmQgc29sdmVyIEphdmFTY3JpcHQgbGlicmFyeS5cblxuICAgIFBsZWFzZSBzZWUgdGhlIFJFQURNRSBmb3IgbW9yZSBkZXRhaWxzLlxuXG4gICAgPiBNb2RpZmllZCBieSBARHVyb2t0YXIgaW4gMjAyMiBmcm9tIHRoZSBvcmlnaW5hbCBnaXN0WzBdXG5cbiAgICBbMF06IGh0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS9yb2JhdHJvbi9zdWRva3UuanMvbWFzdGVyL3N1ZG9rdS5qc1xuKi9cbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlN1ZG9rdVRTID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmxldCBTdWRva3VUUyA9IGNsYXNzIFN1ZG9rdVRTIHtcbiAgICAvKipcbiAgICAgKiAgQWxsb3dlZCBzdWRva3UgZGlnaXRzICgwLTkpXG4gICAgICpcbiAgICAgKiBAdHlwZSB7c3RyaW5nfVxuICAgICAqIEBtZW1iZXJvZiBTdWRva3VUU1xuICAgICAqL1xuICAgIERJR0lUUztcbiAgICBESUZGSUNVTFRZO1xuICAgIFJPV1M7IC8vIFJvdyBsYWJsZXNcbiAgICBDT0xTOyAvLyBDb2x1bW4gbGFibGVzXG4gICAgU1FVQVJFUzsgLy8gU3F1YXJlIElEc1xuICAgIFVOSVRTOyAvLyBBbGwgdW5pdHMgKHJvdywgY29sdW1uLCBvciBib3gpXG4gICAgU1FVQVJFX1VOSVRTX01BUDsgLy8gU3F1YXJlcyAtPiB1bml0cyBtYXBcbiAgICBTUVVBUkVfUEVFUlNfTUFQOyAvLyBTcXVhcmVzIC0+IHBlZXJzIG1hcFxuICAgIE1JTl9HSVZFTlM7IC8vIE1pbmltdW0gbnVtYmVyIG9mIGdpdmVuc1xuICAgIE5SX1NRVUFSRVM7IC8vIE51bWJlciBvZiBzcXVhcmVzXG4gICAgQkxBTktfQ0hBUjtcbiAgICBCTEFOS19CT0FSRDtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ESUdJVFMgPSBcIjEyMzQ1Njc4OVwiO1xuICAgICAgICB0aGlzLlJPV1MgPSBcIkFCQ0RFRkdISVwiO1xuICAgICAgICB0aGlzLkNPTFMgPSB0aGlzLkRJR0lUUztcbiAgICAgICAgdGhpcy5NSU5fR0lWRU5TID0gMTc7XG4gICAgICAgIHRoaXMuTlJfU1FVQVJFUyA9IDgxO1xuICAgICAgICAvLyBEZWZpbmUgZGlmZmljdWx0aWVzIGJ5IGhvdyBtYW55IHNxdWFyZXMgYXJlIGdpdmVuIHRvIHRoZSBwbGF5ZXIgaW4gYSBuZXdcbiAgICAgICAgLy8gcHV6emxlLlxuICAgICAgICB0aGlzLkRJRkZJQ1VMVFkgPSB7XG4gICAgICAgICAgICBcImVhc3lcIjogNjIsXG4gICAgICAgICAgICBcIm1lZGl1bVwiOiA1MyxcbiAgICAgICAgICAgIFwiaGFyZFwiOiA0NCxcbiAgICAgICAgICAgIFwidmVyeS1oYXJkXCI6IDM1LFxuICAgICAgICAgICAgXCJpbnNhbmVcIjogMjYsXG4gICAgICAgICAgICBcImluaHVtYW5cIjogMTcsXG4gICAgICAgIH07XG4gICAgICAgIC8vIEJsYW5rIGNoYXJhY3RlciBhbmQgYm9hcmQgcmVwcmVzZW50YXRpb25cbiAgICAgICAgdGhpcy5CTEFOS19DSEFSID0gJy4nO1xuICAgICAgICB0aGlzLkJMQU5LX0JPQVJEID0gXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCIgK1xuICAgICAgICAgICAgXCIuLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiO1xuICAgICAgICAvLyBJbml0XG4gICAgICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAgICAgdGhpcy5TUVVBUkVTID0gdGhpcy5fY3Jvc3ModGhpcy5ST1dTLCB0aGlzLkNPTFMpO1xuICAgICAgICB0aGlzLlVOSVRTID0gdGhpcy5fZ2V0X2FsbF91bml0cyh0aGlzLlJPV1MsIHRoaXMuQ09MUyk7XG4gICAgICAgIHRoaXMuU1FVQVJFX1VOSVRTX01BUCA9IHRoaXMuX2dldF9zcXVhcmVfdW5pdHNfbWFwKHRoaXMuU1FVQVJFUywgdGhpcy5VTklUUyk7XG4gICAgICAgIHRoaXMuU1FVQVJFX1BFRVJTX01BUCA9IHRoaXMuX2dldF9zcXVhcmVfcGVlcnNfbWFwKHRoaXMuU1FVQVJFUywgdGhpcy5TUVVBUkVfVU5JVFNfTUFQKTtcbiAgICB9XG4gICAgLy8gR2VuZXJhdGVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2VuZXJhdGUgPSAoZGlmZmljdWx0eSwgdW5pcXVlKSA9PiB7XG4gICAgICAgIC8qIEdlbmVyYXRlIGEgbmV3IFN1ZG9rdSBwdXp6bGUgb2YgYSBwYXJ0aWN1bGFyIGBkaWZmaWN1bHR5YCwgZS5nLixcbiAgXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhbiBcImVhc3lcIiBzdWRva3UgcHV6emxlXG4gICAgICAgICAgICBzdWRva3UuZ2VuZXJhdGUoXCJlYXN5XCIpO1xuICBcbiAgXG4gICAgICAgIERpZmZpY3VsdGllcyBhcmUgYXMgZm9sbG93cywgYW5kIHJlcHJlc2VudCB0aGUgbnVtYmVyIG9mIGdpdmVuIHNxdWFyZXM6XG4gIFxuICAgICAgICAgICAgICAgIFwiZWFzeVwiOiAgICAgICAgIDYxXG4gICAgICAgICAgICAgICAgXCJtZWRpdW1cIjogICAgICAgNTJcbiAgICAgICAgICAgICAgICBcImhhcmRcIjogICAgICAgICA0M1xuICAgICAgICAgICAgICAgIFwidmVyeS1oYXJkXCI6ICAgIDM0XG4gICAgICAgICAgICAgICAgXCJpbnNhbmVcIjogICAgICAgMjVcbiAgICAgICAgICAgICAgICBcImluaHVtYW5cIjogICAgICAxN1xuICBcbiAgXG4gICAgICAgIFlvdSBtYXkgYWxzbyBlbnRlciBhIGN1c3RvbSBudW1iZXIgb2Ygc3F1YXJlcyB0byBiZSBnaXZlbiwgZS5nLixcbiAgXG4gICAgICAgICAgICAvLyBHZW5lcmF0ZSBhIG5ldyBTdWRva3UgcHV6emxlIHdpdGggNjAgZ2l2ZW4gc3F1YXJlc1xuICAgICAgICAgICAgc3Vkb2t1LmdlbmVyYXRlKDYwKVxuICBcbiAgXG4gICAgICAgIGBkaWZmaWN1bHR5YCBtdXN0IGJlIGEgbnVtYmVyIGJldHdlZW4gMTcgYW5kIDgxIGluY2x1c2l2ZS4gSWYgaXQnc1xuICAgICAgICBvdXRzaWRlIG9mIHRoYXQgcmFuZ2UsIGBkaWZmaWN1bHR5YCB3aWxsIGJlIHNldCB0byB0aGUgY2xvc2VzdCBib3VuZCxcbiAgICAgICAgZS5nLiwgMCAtPiAxNywgYW5kIDEwMCAtPiA4MS5cbiAgXG4gIFxuICAgICAgICBCeSBkZWZhdWx0LCB0aGUgcHV6emxlcyBhcmUgdW5pcXVlLCB1bGVzcyB5b3Ugc2V0IGB1bmlxdWVgIHRvIGZhbHNlLlxuICAgICAgICAoTm90ZTogUHV6emxlIHVuaXF1ZW5lc3MgaXMgbm90IHlldCBpbXBsZW1lbnRlZCwgc28gcHV6emxlcyBhcmUgKm5vdCpcbiAgICAgICAgZ3VhcmFudGVlZCB0byBoYXZlIHVuaXF1ZSBzb2x1dGlvbnMpXG4gICAgICAgICovXG4gICAgICAgIC8vIElmIGBkaWZmaWN1bHR5YCBpcyBhIHN0cmluZyBvciB1bmRlZmluZWQsIGNvbnZlcnQgaXQgdG8gYSBudW1iZXIgb3JcbiAgICAgICAgLy8gZGVmYXVsdCBpdCB0byBcImVhc3lcIiBpZiB1bmRlZmluZWQuXG4gICAgICAgIGxldCBfZGlmZmljdWx0eTtcbiAgICAgICAgaWYgKHR5cGVvZiBkaWZmaWN1bHR5ID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiBkaWZmaWN1bHR5ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBfZGlmZmljdWx0eSA9IHRoaXMuRElGRklDVUxUWVtkaWZmaWN1bHR5XSB8fCB0aGlzLkRJRkZJQ1VMVFkuZWFzeTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3JjZSBkaWZmaWN1bHR5IGJldHdlZW4gMTcgYW5kIDgxIGluY2x1c2l2ZVxuICAgICAgICBfZGlmZmljdWx0eSA9IHRoaXMuX2ZvcmNlX3JhbmdlKF9kaWZmaWN1bHR5LCB0aGlzLk5SX1NRVUFSRVMgKyAxLCB0aGlzLk1JTl9HSVZFTlMpO1xuICAgICAgICAvLyBEZWZhdWx0IHVuaXF1ZSB0byB0cnVlXG4gICAgICAgIHVuaXF1ZSA9IHVuaXF1ZSA/PyB0cnVlO1xuICAgICAgICAvLyBHZXQgYSBzZXQgb2Ygc3F1YXJlcyBhbmQgYWxsIHBvc3NpYmxlIGNhbmRpZGF0ZXMgZm9yIGVhY2ggc3F1YXJlXG4gICAgICAgIGxldCBibGFua19ib2FyZCA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5OUl9TUVVBUkVTOyArK2kpIHtcbiAgICAgICAgICAgIGJsYW5rX2JvYXJkICs9ICcuJztcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gdGhpcy5fZ2V0X2NhbmRpZGF0ZXNfbWFwKGJsYW5rX2JvYXJkKTtcbiAgICAgICAgaWYgKGNhbmRpZGF0ZXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhbHNlIGNhbmRpZGF0ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgZWFjaCBpdGVtIGluIGEgc2h1ZmZsZWQgbGlzdCBvZiBzcXVhcmVzXG4gICAgICAgIGxldCBzaHVmZmxlZF9zcXVhcmVzID0gdGhpcy5fc2h1ZmZsZSh0aGlzLlNRVUFSRVMpO1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2Ygc2h1ZmZsZWRfc3F1YXJlcykge1xuICAgICAgICAgICAgLy8gSWYgYW4gYXNzaWdubWVudCBvZiBhIHJhbmRvbSBjaGlvY2UgY2F1c2VzIGEgY29udHJhZGljdG9pbiwgZ2l2ZVxuICAgICAgICAgICAgLy8gdXAgYW5kIHRyeSBhZ2FpblxuICAgICAgICAgICAgbGV0IHJhbmRfY2FuZGlkYXRlX2lkeCA9IHRoaXMuX3JhbmRfcmFuZ2UoY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aCk7XG4gICAgICAgICAgICBsZXQgcmFuZF9jYW5kaWRhdGUgPSBjYW5kaWRhdGVzW3NxdWFyZV1bcmFuZF9jYW5kaWRhdGVfaWR4XTtcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXNzaWduKGNhbmRpZGF0ZXMsIHNxdWFyZSwgcmFuZF9jYW5kaWRhdGUpKSB7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBNYWtlIGEgbGlzdCBvZiBhbGwgc2luZ2xlIGNhbmRpZGF0ZXNcbiAgICAgICAgICAgIGxldCBzaW5nbGVfY2FuZGlkYXRlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHRoaXMuU1FVQVJFUykge1xuICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzW3NxdWFyZV0ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgc2luZ2xlX2NhbmRpZGF0ZXMucHVzaChjYW5kaWRhdGVzW3NxdWFyZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgYXQgbGVhc3QgZGlmZmljdWx0eSwgYW5kIHRoZSB1bmlxdWUgY2FuZGlkYXRlIGNvdW50IGlzXG4gICAgICAgICAgICAvLyBhdCBsZWFzdCA4LCByZXR1cm4gdGhlIHB1enpsZSFcbiAgICAgICAgICAgIGlmIChzaW5nbGVfY2FuZGlkYXRlcy5sZW5ndGggPj0gX2RpZmZpY3VsdHkgJiZcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpcF9kdXBzKHNpbmdsZV9jYW5kaWRhdGVzKS5sZW5ndGggPj0gOCkge1xuICAgICAgICAgICAgICAgIGxldCBib2FyZCA9IFwiXCI7XG4gICAgICAgICAgICAgICAgbGV0IGdpdmVuc19pZHhzID0gW107XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLlNRVUFSRVMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNxdWFyZSA9IHRoaXMuU1FVQVJFU1tpXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQgKz0gY2FuZGlkYXRlc1tzcXVhcmVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZ2l2ZW5zX2lkeHMucHVzaChpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkICs9IHRoaXMuQkxBTktfQ0hBUjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIG1vcmUgdGhhbiBgZGlmZmljdWx0eWAgZ2l2ZW5zLCByZW1vdmUgc29tZSByYW5kb21cbiAgICAgICAgICAgICAgICAvLyBnaXZlbnMgdW50aWwgd2UncmUgZG93biB0byBleGFjdGx5IGBkaWZmaWN1bHR5YFxuICAgICAgICAgICAgICAgIGxldCBucl9naXZlbnMgPSBnaXZlbnNfaWR4cy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgaWYgKG5yX2dpdmVucyA+IF9kaWZmaWN1bHR5KSB7XG4gICAgICAgICAgICAgICAgICAgIGdpdmVuc19pZHhzID0gdGhpcy5fc2h1ZmZsZShnaXZlbnNfaWR4cyk7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbnJfZ2l2ZW5zIC0gX2RpZmZpY3VsdHk7ICsraSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHRhcmdldCA9IHBhcnNlSW50KFN0cmluZyhnaXZlbnNfaWR4c1tpXSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQgPSBib2FyZC5zdWJzdHIoMCwgdGFyZ2V0KSArIHRoaXMuQkxBTktfQ0hBUiArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQuc3Vic3RyKHRhcmdldCArIDEpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIERvdWJsZSBjaGVjayBib2FyZCBpcyBzb2x2YWJsZVxuICAgICAgICAgICAgICAgIC8vIFRPRE86IE1ha2UgYSBzdGFuZGFsb25lIGJvYXJkIGNoZWNrZXIuIFNvbHZlIGlzIGV4cGVuc2l2ZS5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zb2x2ZShib2FyZCkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvYXJkO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBHaXZlIHVwIGFuZCB0cnkgYSBuZXcgcHV6emxlXG4gICAgICAgIHJldHVybiB0aGlzLmdlbmVyYXRlKGRpZmZpY3VsdHkpO1xuICAgIH07XG4gICAgLy8gU29sdmVcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgc29sdmUgPSAoYm9hcmQsIHJldmVyc2UpID0+IHtcbiAgICAgICAgLyogU29sdmUgYSBzdWRva3UgcHV6emxlIGdpdmVuIGEgc3Vkb2t1IGBib2FyZGAsIGkuZS4sIGFuIDgxLWNoYXJhY3RlclxuICAgICAgICBzdHJpbmcgb2Ygc3Vkb2t1LkRJR0lUUywgMS05LCBhbmQgc3BhY2VzIGlkZW50aWZpZWQgYnkgJy4nLCByZXByZXNlbnRpbmcgdGhlXG4gICAgICAgIHNxdWFyZXMuIFRoZXJlIG11c3QgYmUgYSBtaW5pbXVtIG9mIDE3IGdpdmVucy4gSWYgdGhlIGdpdmVuIGJvYXJkIGhhcyBub1xuICAgICAgICBzb2x1dGlvbnMsIHJldHVybiBmYWxzZS5cbiAgXG4gICAgICAgIE9wdGlvbmFsbHkgc2V0IGByZXZlcnNlYCB0byBzb2x2ZSBcImJhY2t3YXJkc1wiLCBpLmUuLCByb3RhdGUgdGhyb3VnaCB0aGVcbiAgICAgICAgcG9zc2liaWxpdGllcyBpbiByZXZlcnNlLiBVc2VmdWwgZm9yIGNoZWNraW5nIGlmIHRoZXJlIGlzIG1vcmUgdGhhbiBvbmVcbiAgICAgICAgc29sdXRpb24uXG4gICAgICAgICovXG4gICAgICAgIC8vIEFzc3VyZSBhIHZhbGlkIGJvYXJkXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLnZhbGlkYXRlX2JvYXJkKGJvYXJkKTtcbiAgICAgICAgaWYgKHJlcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIENoZWNrIG51bWJlciBvZiBnaXZlbnMgaXMgYXQgbGVhc3QgTUlOX0dJVkVOU1xuICAgICAgICBsZXQgbnJfZ2l2ZW5zID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSBvZiBib2FyZCkge1xuICAgICAgICAgICAgaWYgKGkgIT09IHRoaXMuQkxBTktfQ0hBUiAmJiB0aGlzLl9pbihpLCB0aGlzLkRJR0lUUykpIHtcbiAgICAgICAgICAgICAgICArK25yX2dpdmVucztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobnJfZ2l2ZW5zIDwgdGhpcy5NSU5fR0lWRU5TKSB7XG4gICAgICAgICAgICB0aHJvdyBcIlRvbyBmZXcgZ2l2ZW5zLiBNaW5pbXVtIGdpdmVucyBpcyBcIiArIHRoaXMuTUlOX0dJVkVOUztcbiAgICAgICAgfVxuICAgICAgICAvLyBEZWZhdWx0IHJldmVyc2UgdG8gZmFsc2VcbiAgICAgICAgcmV2ZXJzZSA9IHJldmVyc2UgfHwgZmFsc2U7XG4gICAgICAgIGxldCBjYW5kaWRhdGVzID0gdGhpcy5fZ2V0X2NhbmRpZGF0ZXNfbWFwKGJvYXJkKTtcbiAgICAgICAgbGV0IHJlc3VsdCA9IHRoaXMuX3NlYXJjaChjYW5kaWRhdGVzLCByZXZlcnNlKTtcbiAgICAgICAgaWYgKHJlc3VsdCkge1xuICAgICAgICAgICAgbGV0IHNvbHV0aW9uID0gXCJcIjtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZSBpbiByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICBzb2x1dGlvbiArPSByZXN1bHRbc3F1YXJlXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzb2x1dGlvbjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gJyc7XG4gICAgfTtcbiAgICBnZXRDYW5kaWRhdGVzID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhbGwgcG9zc2libGUgY2FuZGlkYXRlZXMgZm9yIGVhY2ggc3F1YXJlIGFzIGEgZ3JpZCBvZlxuICAgICAgICBjYW5kaWRhdGVzLCByZXR1cm5uaW5nIGBmYWxzZWAgaWYgYSBjb250cmFkaWN0aW9uIGlzIGVuY291bnRlcmVkLlxuICAgIFxuICAgICAgICBSZWFsbHkganVzdCBhIHdyYXBwZXIgZm9yIHN1ZG9rdS5fZ2V0X2NhbmRpZGF0ZXNfbWFwIGZvciBwcm9ncmFtbWVyXG4gICAgICAgIGNvbnN1bXB0aW9uLlxuICAgICAgICAqL1xuICAgICAgICAvLyBBc3N1cmUgYSB2YWxpZCBib2FyZFxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy52YWxpZGF0ZV9ib2FyZChib2FyZCk7XG4gICAgICAgIGlmIChyZXBvcnQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IHJlcG9ydDtcbiAgICAgICAgfVxuICAgICAgICAvLyBHZXQgYSBjYW5kaWRhdGVzIG1hcFxuICAgICAgICBsZXQgY2FuZGlkYXRlc19tYXAgPSB0aGlzLl9nZXRfY2FuZGlkYXRlc19tYXAoYm9hcmQpO1xuICAgICAgICAvLyBJZiB0aGVyZSdzIGFuIGVycm9yLCByZXR1cm4gZmFsc2VcbiAgICAgICAgaWYgKCFjYW5kaWRhdGVzX21hcCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIFRyYW5zZm9ybSBjYW5kaWRhdGVzIG1hcCBpbnRvIGdyaWRcbiAgICAgICAgbGV0IHJvd3MgPSBbXTtcbiAgICAgICAgbGV0IGN1cl9yb3cgPSBbXTtcbiAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICBmb3IgKGxldCBzcXVhcmUgaW4gY2FuZGlkYXRlc19tYXApIHtcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzID0gY2FuZGlkYXRlc19tYXBbc3F1YXJlXTtcbiAgICAgICAgICAgIGN1cl9yb3cucHVzaChjYW5kaWRhdGVzKTtcbiAgICAgICAgICAgIGlmIChpICUgOSA9PSA4KSB7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKGN1cl9yb3cpO1xuICAgICAgICAgICAgICAgIGN1cl9yb3cgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICsraTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9O1xuICAgIGdldFJlbWFpbmluZ0RpZ2l0cyA9IChib2FyZCkgPT4ge1xuICAgICAgICBjb25zdCBjYW5kaWRhdGVzID0gdGhpcy5nZXRDYW5kaWRhdGVzKGJvYXJkKTtcbiAgICAgICAgY29uc3QgY2hhcmFjdGVycyA9IChjYW5kaWRhdGVzIHx8IFtdKVxuICAgICAgICAgICAgLm1hcCgoaXRlbSwgaSkgPT4gYm9hcmRbaV0gPT09ICcuJyA/IGl0ZW0gOiAnJylcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmlwX2R1cHMoY2hhcmFjdGVycykuc29ydCgpO1xuICAgIH07XG4gICAgX2dldF9jYW5kaWRhdGVzX21hcCA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBHZXQgYWxsIHBvc3NpYmxlIGNhbmRpZGF0ZXMgZm9yIGVhY2ggc3F1YXJlIGFzIGEgbWFwIGluIHRoZSBmb3JtXG4gICAgICAgIHtzcXVhcmU6IHN1ZG9rdS5ESUdJVFN9IHVzaW5nIHJlY3Vyc2l2ZSBjb25zdHJhaW50IHByb3BhZ2F0aW9uLiBSZXR1cm4gYGZhbHNlYFxuICAgICAgICBpZiBhIGNvbnRyYWRpY3Rpb24gaXMgZW5jb3VudGVyZWRcbiAgICAgICAgKi9cbiAgICAgICAgLy8gQXNzdXJlIGEgdmFsaWQgYm9hcmRcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMudmFsaWRhdGVfYm9hcmQoYm9hcmQpO1xuICAgICAgICBpZiAocmVwb3J0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyByZXBvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGNhbmRpZGF0ZV9tYXAgPSB7fTtcbiAgICAgICAgbGV0IHNxdWFyZXNfdmFsdWVzX21hcCA9IHRoaXMuX2dldF9zcXVhcmVfdmFsc19tYXAoYm9hcmQpO1xuICAgICAgICAvLyBTdGFydCBieSBhc3NpZ25pbmcgZXZlcnkgZGlnaXQgYXMgYSBjYW5kaWRhdGUgdG8gZXZlcnkgc3F1YXJlXG4gICAgICAgIGZvciAobGV0IHNpIG9mIHRoaXMuU1FVQVJFUykge1xuICAgICAgICAgICAgY2FuZGlkYXRlX21hcFtzaV0gPSB0aGlzLkRJR0lUUztcbiAgICAgICAgfVxuICAgICAgICAvLyBGb3IgZWFjaCBub24tYmxhbmsgc3F1YXJlLCBhc3NpZ24gaXRzIHZhbHVlIGluIHRoZSBjYW5kaWRhdGUgbWFwIGFuZFxuICAgICAgICAvLyBwcm9waWdhdGUuXG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBpbiBzcXVhcmVzX3ZhbHVlc19tYXApIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSBzcXVhcmVzX3ZhbHVlc19tYXBbc3F1YXJlXTtcbiAgICAgICAgICAgIGlmICh0aGlzLl9pbih2YWwsIHRoaXMuRElHSVRTKSkge1xuICAgICAgICAgICAgICAgIGxldCBuZXdfY2FuZGlkYXRlcyA9IHRoaXMuX2Fzc2lnbihjYW5kaWRhdGVfbWFwLCBzcXVhcmUsIHZhbCk7XG4gICAgICAgICAgICAgICAgLy8gRmFpbCBpZiB3ZSBjYW4ndCBhc3NpZ24gdmFsIHRvIHNxdWFyZVxuICAgICAgICAgICAgICAgIGlmICghbmV3X2NhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlX21hcDtcbiAgICB9O1xuICAgIF9zZWFyY2ggPSAoY2FuZGlkYXRlcywgcmV2ZXJzZSkgPT4ge1xuICAgICAgICAvKiBHaXZlbiBhIG1hcCBvZiBzcXVhcmVzIC0+IGNhbmRpYXRlcywgdXNpbmcgZGVwdGgtZmlyc3Qgc2VhcmNoLFxuICAgICAgICByZWN1cnNpdmVseSB0cnkgYWxsIHBvc3NpYmxlIHZhbHVlcyB1bnRpbCBhIHNvbHV0aW9uIGlzIGZvdW5kLCBvciBmYWxzZVxuICAgICAgICBpZiBubyBzb2x1dGlvbiBleGlzdHMuXG4gICAgICAgICovXG4gICAgICAgIC8vIFJldHVybiBpZiBlcnJvciBpbiBwcmV2aW91cyBpdGVyYXRpb25cbiAgICAgICAgaWYgKCFjYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVmYXVsdCByZXZlcnNlIHRvIGZhbHNlXG4gICAgICAgIHJldmVyc2UgPSByZXZlcnNlIHx8IGZhbHNlO1xuICAgICAgICAvLyBJZiBvbmx5IG9uZSBjYW5kaWRhdGUgZm9yIGV2ZXJ5IHNxdWFyZSwgd2UndmUgYSBzb2x2ZWQgcHV6emxlIVxuICAgICAgICAvLyBSZXR1cm4gdGhlIGNhbmRpZGF0ZXMgbWFwLlxuICAgICAgICBsZXQgbWF4X25yX2NhbmRpZGF0ZXMgPSAwO1xuICAgICAgICBsZXQgbWF4X2NhbmRpZGF0ZXNfc3F1YXJlID0gbnVsbDtcbiAgICAgICAgY2FuZGlkYXRlcztcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHRoaXMuU1FVQVJFUykge1xuICAgICAgICAgICAgbGV0IG5yX2NhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzW3NxdWFyZV0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKG5yX2NhbmRpZGF0ZXMgPiBtYXhfbnJfY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgIG1heF9ucl9jYW5kaWRhdGVzID0gbnJfY2FuZGlkYXRlcztcbiAgICAgICAgICAgICAgICBtYXhfY2FuZGlkYXRlc19zcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heF9ucl9jYW5kaWRhdGVzID09PSAxKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBDaG9vc2UgdGhlIGJsYW5rIHNxdWFyZSB3aXRoIHRoZSBmZXdlc3QgcG9zc2liaWxpdGllcyA+IDFcbiAgICAgICAgbGV0IG1pbl9ucl9jYW5kaWRhdGVzID0gMTA7XG4gICAgICAgIGxldCBtaW5fY2FuZGlkYXRlc19zcXVhcmUgPSAnJztcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHRoaXMuU1FVQVJFUykge1xuICAgICAgICAgICAgbGV0IG5yX2NhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzW3NxdWFyZV0ubGVuZ3RoO1xuICAgICAgICAgICAgaWYgKG5yX2NhbmRpZGF0ZXMgPCBtaW5fbnJfY2FuZGlkYXRlcyAmJiBucl9jYW5kaWRhdGVzID4gMSkge1xuICAgICAgICAgICAgICAgIG1pbl9ucl9jYW5kaWRhdGVzID0gbnJfY2FuZGlkYXRlcztcbiAgICAgICAgICAgICAgICBtaW5fY2FuZGlkYXRlc19zcXVhcmUgPSBzcXVhcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVjdXJzaXZlbHkgc2VhcmNoIHRocm91Z2ggZWFjaCBvZiB0aGUgY2FuZGlkYXRlcyBvZiB0aGUgc3F1YXJlXG4gICAgICAgIC8vIHN0YXJ0aW5nIHdpdGggdGhlIG9uZSB3aXRoIGZld2VzdCBjYW5kaWRhdGVzLlxuICAgICAgICAvLyBSb3RhdGUgdGhyb3VnaCB0aGUgY2FuZGlkYXRlcyBmb3J3YXJkc1xuICAgICAgICBsZXQgbWluX2NhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzW21pbl9jYW5kaWRhdGVzX3NxdWFyZV07XG4gICAgICAgIGlmICghcmV2ZXJzZSkge1xuICAgICAgICAgICAgZm9yIChsZXQgdmFsIG9mIG1pbl9jYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgLy8gVE9ETzogSW1wbGVtZW50IGEgbm9uLXJlZGljdWxvdXMgZGVlcCBjb3B5IGZ1bmN0aW9uXG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfY29weSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoY2FuZGlkYXRlcykpO1xuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX25leHQgPSB0aGlzLl9zZWFyY2godGhpcy5fYXNzaWduKGNhbmRpZGF0ZXNfY29weSwgbWluX2NhbmRpZGF0ZXNfc3F1YXJlLCB2YWwpKTtcbiAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlc19uZXh0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBjYW5kaWRhdGVzX25leHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gUm90YXRlIHRocm91Z2ggdGhlIGNhbmRpZGF0ZXMgYmFja3dhcmRzXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCB2aSA9IG1pbl9jYW5kaWRhdGVzLmxlbmd0aCAtIDE7IHZpID49IDA7IC0tdmkpIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gbWluX2NhbmRpZGF0ZXNbdmldO1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBhIG5vbi1yZWRpY3Vsb3VzIGRlZXAgY29weSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX2NvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZXMpKTtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXh0ID0gdGhpcy5fc2VhcmNoKHRoaXMuX2Fzc2lnbihjYW5kaWRhdGVzX2NvcHksIG1pbl9jYW5kaWRhdGVzX3NxdWFyZSwgdmFsKSwgcmV2ZXJzZSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXNfbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlc19uZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBJZiB3ZSBnZXQgdGhyb3VnaCBhbGwgY29tYmluYXRpb25zIG9mIHRoZSBzcXVhcmUgd2l0aCB0aGUgZmV3ZXN0XG4gICAgICAgIC8vIGNhbmRpZGF0ZXMgd2l0aG91dCBmaW5kaW5nIGFuIGFuc3dlciwgdGhlcmUgaXNuJ3Qgb25lLiBSZXR1cm4gZmFsc2UuXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9O1xuICAgIF9hc3NpZ24gPSAoY2FuZGlkYXRlcywgc3F1YXJlLCB2YWwpID0+IHtcbiAgICAgICAgLyogRWxpbWluYXRlIGFsbCB2YWx1ZXMsICpleGNlcHQqIGZvciBgdmFsYCwgZnJvbSBgY2FuZGlkYXRlc2AgYXRcbiAgICAgICAgYHNxdWFyZWAgKGNhbmRpZGF0ZXNbc3F1YXJlXSksIGFuZCBwcm9wYWdhdGUuIFJldHVybiB0aGUgY2FuZGlkYXRlcyBtYXBcbiAgICAgICAgd2hlbiBmaW5pc2hlZC4gSWYgYSBjb250cmFkaWNpdG9uIGlzIGZvdW5kLCByZXR1cm4gZmFsc2UuXG4gIFxuICAgICAgICBXQVJOSU5HOiBUaGlzIHdpbGwgbW9kaWZ5IHRoZSBjb250ZW50cyBvZiBgY2FuZGlkYXRlc2AgZGlyZWN0bHkuXG4gICAgICAgICovXG4gICAgICAgIC8vIEdyYWIgYSBsaXN0IG9mIGNhbmlkYXRlcyB3aXRob3V0ICd2YWwnXG4gICAgICAgIGxldCBvdGhlcl92YWxzID0gY2FuZGlkYXRlc1tzcXVhcmVdLnJlcGxhY2UodmFsLCBcIlwiKTtcbiAgICAgICAgLy8gTG9vcCB0aHJvdWdoIGFsbCBvdGhlciB2YWx1ZXMgYW5kIGVsaW1pbmF0ZSB0aGVtIGZyb20gdGhlIGNhbmRpZGF0ZXNcbiAgICAgICAgLy8gYXQgdGhlIGN1cnJlbnQgc3F1YXJlLCBhbmQgcHJvcGlnYXRlLiBJZiBhdCBhbnkgcG9pbnQgd2UgZ2V0IGFcbiAgICAgICAgLy8gY29udHJhZGljdGlvbiwgcmV0dXJuIGZhbHNlLlxuICAgICAgICBmb3IgKGxldCBvdGhlcl92YWwgb2Ygb3RoZXJfdmFscykge1xuICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbmV4dCA9IHRoaXMuX2VsaW1pbmF0ZShjYW5kaWRhdGVzLCBzcXVhcmUsIG90aGVyX3ZhbCk7XG4gICAgICAgICAgICBpZiAoIWNhbmRpZGF0ZXNfbmV4dCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJDb250cmFkaWN0aW9uIGZvdW5kIGJ5IF9lbGltaW5hdGUuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlcztcbiAgICB9O1xuICAgIF9lbGltaW5hdGUgPSAoY2FuZGlkYXRlcywgc3F1YXJlLCB2YWwpID0+IHtcbiAgICAgICAgLyogRWxpbWluYXRlIGB2YWxgIGZyb20gYGNhbmRpZGF0ZXNgIGF0IGBzcXVhcmVgLCAoY2FuZGlkYXRlc1tzcXVhcmVdKSxcbiAgICAgICAgYW5kIHByb3BhZ2F0ZSB3aGVuIHZhbHVlcyBvciBwbGFjZXMgPD0gMi4gUmV0dXJuIHVwZGF0ZWQgY2FuZGlkYXRlcyxcbiAgICAgICAgdW5sZXNzIGEgY29udHJhZGljdGlvbiBpcyBkZXRlY3RlZCwgaW4gd2hpY2ggY2FzZSwgcmV0dXJuIGZhbHNlLlxuICBcbiAgICAgICAgV0FSTklORzogVGhpcyB3aWxsIG1vZGlmeSB0aGUgY29udGVudHMgb2YgYGNhbmRpZGF0ZXNgIGRpcmVjdGx5LlxuICAgICAgICAqL1xuICAgICAgICAvLyBJZiBgdmFsYCBoYXMgYWxyZWFkeSBiZWVuIGVsaW1pbmF0ZWQgZnJvbSBjYW5kaWRhdGVzW3NxdWFyZV0sIHJldHVyblxuICAgICAgICAvLyB3aXRoIGNhbmRpZGF0ZXMuXG4gICAgICAgIGlmICghdGhpcy5faW4odmFsLCBjYW5kaWRhdGVzW3NxdWFyZV0pKSB7XG4gICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlcztcbiAgICAgICAgfVxuICAgICAgICAvLyBSZW1vdmUgYHZhbGAgZnJvbSBjYW5kaWRhdGVzW3NxdWFyZV1cbiAgICAgICAgY2FuZGlkYXRlc1tzcXVhcmVdID0gY2FuZGlkYXRlc1tzcXVhcmVdLnJlcGxhY2UodmFsLCAnJyk7XG4gICAgICAgIC8vIElmIHRoZSBzcXVhcmUgaGFzIG9ubHkgY2FuZGlkYXRlIGxlZnQsIGVsaW1pbmF0ZSB0aGF0IHZhbHVlIGZyb20gaXRzXG4gICAgICAgIC8vIHBlZXJzXG4gICAgICAgIGxldCBucl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aDtcbiAgICAgICAgaWYgKG5yX2NhbmRpZGF0ZXMgPT09IDEpIHtcbiAgICAgICAgICAgIGxldCB0YXJnZXRfdmFsID0gY2FuZGlkYXRlc1tzcXVhcmVdO1xuICAgICAgICAgICAgZm9yIChsZXQgcGVlciBvZiB0aGlzLlNRVUFSRV9QRUVSU19NQVBbc3F1YXJlXSkge1xuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX25ldyA9IHRoaXMuX2VsaW1pbmF0ZShjYW5kaWRhdGVzLCBwZWVyLCB0YXJnZXRfdmFsKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmRpZGF0ZXNfbmV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBPdGhlcndpc2UsIGlmIHRoZSBzcXVhcmUgaGFzIG5vIGNhbmRpZGF0ZXMsIHdlIGhhdmUgYSBjb250cmFkaWN0aW9uLlxuICAgICAgICAgICAgLy8gUmV0dXJuIGZhbHNlLlxuICAgICAgICB9XG4gICAgICAgIGlmIChucl9jYW5kaWRhdGVzID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgYSB1bml0IGlzIHJlZHVjZWQgdG8gb25seSBvbmUgcGxhY2UgZm9yIGEgdmFsdWUsIHRoZW4gYXNzaWduIGl0XG4gICAgICAgIGZvciAobGV0IHVuaXQgb2YgdGhpcy5TUVVBUkVfVU5JVFNfTUFQW3NxdWFyZV0pIHtcbiAgICAgICAgICAgIGxldCB2YWxfcGxhY2VzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCB1bml0X3NxdWFyZSBvZiB1bml0KSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2luKHZhbCwgY2FuZGlkYXRlc1t1bml0X3NxdWFyZV0pKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhbF9wbGFjZXMucHVzaCh1bml0X3NxdWFyZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgdGhlcmUncyBubyBwbGFjZSBmb3IgdGhpcyB2YWx1ZSwgd2UgaGF2ZSBhIGNvbnRyYWRpdGlvbiFcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZVxuICAgICAgICAgICAgaWYgKHZhbF9wbGFjZXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIC8vIE90aGVyd2lzZSB0aGUgdmFsdWUgY2FuIG9ubHkgYmUgaW4gb25lIHBsYWNlLiBBc3NpZ24gaXQgdGhlcmUuXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICh2YWxfcGxhY2VzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX25ldyA9IHRoaXMuX2Fzc2lnbihjYW5kaWRhdGVzLCB2YWxfcGxhY2VzWzBdLCB2YWwpO1xuICAgICAgICAgICAgICAgIGlmICghY2FuZGlkYXRlc19uZXcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY2FuZGlkYXRlcztcbiAgICB9O1xuICAgIC8vIEdyb3Vwc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnZXRHcm91cE51bWJlciA9IChjb2wsIHJvdykgPT4ge1xuICAgICAgICBjb25zdCBnZXRTZWN0aW9uTnVtYmVyID0gKG4pID0+IG4gPCAzID8gJzEnIDpcbiAgICAgICAgICAgIG4gPCA2ID8gJzInIDpcbiAgICAgICAgICAgICAgICAnMyc7XG4gICAgICAgIHJldHVybiBnZXRTZWN0aW9uTnVtYmVyKGNvbCkgKyBnZXRTZWN0aW9uTnVtYmVyKHJvdyk7XG4gICAgfTtcbiAgICAvLyBTcXVhcmUgcmVsYXRpb25zaGlwc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcXVhcmVzLCBhbmQgdGhlaXIgcmVsYXRpb25zaGlwcyB3aXRoIHZhbHVlcywgdW5pdHMsIGFuZCBwZWVycy5cbiAgICBfZ2V0X3NxdWFyZV92YWxzX21hcCA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYSBtYXAgb2Ygc3F1YXJlcyAtPiB2YWx1ZXNcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNxdWFyZXNfdmFsc19tYXAgPSB7fTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGBib2FyZGAgaXMgYSBzdHJpbmcgb2YgbGVuZ3RoIDgxXG4gICAgICAgIGlmIChib2FyZC5sZW5ndGggIT0gdGhpcy5TUVVBUkVTLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgXCJCb2FyZC9zcXVhcmVzIGxlbmd0aCBtaXNtYXRjaC5cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5TUVVBUkVTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlc192YWxzX21hcFt0aGlzLlNRVUFSRVNbaV1dID0gYm9hcmRbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZXNfdmFsc19tYXA7XG4gICAgfTtcbiAgICBfZ2V0X3NxdWFyZV91bml0c19tYXAgPSAoc3F1YXJlcywgdW5pdHMpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgbWFwIG9mIGBzcXVhcmVzYCBhbmQgdGhlaXIgYXNzb2NpYXRlZCB1bml0cyAocm93LCBjb2wsIGJveClcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNxdWFyZV91bml0X21hcCA9IHt9O1xuICAgICAgICAvLyBGb3IgZXZlcnkgc3F1YXJlLi4uXG4gICAgICAgIGZvciAobGV0IHNpIGluIHNxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlID0gc3F1YXJlc1tzaV07XG4gICAgICAgICAgICAvLyBNYWludGFpbiBhIGxpc3Qgb2YgdGhlIGN1cnJlbnQgc3F1YXJlJ3MgdW5pdHNcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlX3VuaXRzID0gW107XG4gICAgICAgICAgICAvLyBMb29rIHRocm91Z2ggdGhlIHVuaXRzLCBhbmQgc2VlIGlmIHRoZSBjdXJyZW50IHNxdWFyZSBpcyBpbiBpdCxcbiAgICAgICAgICAgIC8vIGFuZCBpZiBzbywgYWRkIGl0IHRvIHRoZSBsaXN0IG9mIG9mIHRoZSBzcXVhcmUncyB1bml0cy5cbiAgICAgICAgICAgIGZvciAobGV0IHVpIGluIHVuaXRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cl91bml0ID0gdW5pdHNbdWldO1xuICAgICAgICAgICAgICAgIGlmIChjdXJfdW5pdC5pbmRleE9mKGN1cl9zcXVhcmUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJfc3F1YXJlX3VuaXRzLnB1c2goY3VyX3VuaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgc3F1YXJlIGFuZCBpdHMgdW5pdHMgdG8gdGhlIG1hcFxuICAgICAgICAgICAgc3F1YXJlX3VuaXRfbWFwW2N1cl9zcXVhcmVdID0gY3VyX3NxdWFyZV91bml0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlX3VuaXRfbWFwO1xuICAgIH07XG4gICAgX2dldF9zcXVhcmVfcGVlcnNfbWFwID0gKHNxdWFyZXMsIHVuaXRzX21hcCkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYSBtYXAgb2YgYHNxdWFyZXNgIGFuZCB0aGVpciBhc3NvY2lhdGVkIHBlZXJzLCBpLmUuLCBhIHNldCBvZlxuICAgICAgICBvdGhlciBzcXVhcmVzIGluIHRoZSBzcXVhcmUncyB1bml0LlxuICAgICAgICAqL1xuICAgICAgICBsZXQgc3F1YXJlX3BlZXJzX21hcCA9IHt9O1xuICAgICAgICAvLyBGb3IgZXZlcnkgc3F1YXJlLi4uXG4gICAgICAgIGZvciAobGV0IHNpIGluIHNxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlID0gc3F1YXJlc1tzaV07XG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZV91bml0cyA9IHVuaXRzX21hcFtjdXJfc3F1YXJlXTtcbiAgICAgICAgICAgIC8vIE1haW50YWluIGxpc3Qgb2YgdGhlIGN1cnJlbnQgc3F1YXJlJ3MgcGVlcnNcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlX3BlZXJzID0gW107XG4gICAgICAgICAgICAvLyBMb29rIHRocm91Z2ggdGhlIGN1cnJlbnQgc3F1YXJlJ3MgdW5pdHMgbWFwLi4uXG4gICAgICAgICAgICBmb3IgKGxldCBzdWkgb2YgY3VyX3NxdWFyZV91bml0cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJfdW5pdCA9IHN1aTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB1aSBvZiBjdXJfdW5pdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyX3VuaXRfc3F1YXJlID0gdWk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJfc3F1YXJlX3BlZXJzLmluZGV4T2YoY3VyX3VuaXRfc3F1YXJlKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cl91bml0X3NxdWFyZSAhPT0gY3VyX3NxdWFyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyX3NxdWFyZV9wZWVycy5wdXNoKGN1cl91bml0X3NxdWFyZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHNxdWFyZSBhbiBpdHMgYXNzb2NpYXRlZCBwZWVycyB0byB0aGUgbWFwXG4gICAgICAgICAgICBzcXVhcmVfcGVlcnNfbWFwW2N1cl9zcXVhcmVdID0gY3VyX3NxdWFyZV9wZWVycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlX3BlZXJzX21hcDtcbiAgICB9O1xuICAgIF9nZXRfYWxsX3VuaXRzID0gKHJvd3MsIGNvbHMpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgbGlzdCBvZiBhbGwgdW5pdHMgKHJvd3MsIGNvbHMsIGJveGVzKVxuICAgICAgICAqL1xuICAgICAgICBsZXQgdW5pdHMgPSBbXTtcbiAgICAgICAgLy8gUm93c1xuICAgICAgICBmb3IgKGxldCByaSBvZiByb3dzKSB7XG4gICAgICAgICAgICB1bml0cy5wdXNoKHRoaXMuX2Nyb3NzKHJpLCBjb2xzKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29sdW1uc1xuICAgICAgICBmb3IgKGxldCBjaSBvZiBjb2xzKSB7XG4gICAgICAgICAgICB1bml0cy5wdXNoKHRoaXMuX2Nyb3NzKHJvd3MsIGNpKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQm94ZXNcbiAgICAgICAgbGV0IHJvd19zcXVhcmVzID0gW1wiQUJDXCIsIFwiREVGXCIsIFwiR0hJXCJdO1xuICAgICAgICBsZXQgY29sX3NxdWFyZXMgPSBbXCIxMjNcIiwgXCI0NTZcIiwgXCI3ODlcIl07XG4gICAgICAgIGZvciAobGV0IHJzaSBpbiByb3dfc3F1YXJlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgY3NpIGluIGNvbF9zcXVhcmVzKSB7XG4gICAgICAgICAgICAgICAgdW5pdHMucHVzaCh0aGlzLl9jcm9zcyhyb3dfc3F1YXJlc1tyc2ldLCBjb2xfc3F1YXJlc1tjc2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuaXRzO1xuICAgIH07XG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYm9hcmRfc3RyaW5nX3RvX2dyaWQgPSAoYm9hcmRfc3RyaW5nKSA9PiB7XG4gICAgICAgIC8qIENvbnZlcnQgYSBib2FyZCBzdHJpbmcgdG8gYSB0d28tZGltZW5zaW9uYWwgYXJyYXlcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuICAgICAgICBsZXQgY3VyX3JvdyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgYm9hcmRfc3RyaW5nKSB7XG4gICAgICAgICAgICBjdXJfcm93LnB1c2goaSk7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGkpICUgOSA9PSA4KSB7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKGN1cl9yb3cpO1xuICAgICAgICAgICAgICAgIGN1cl9yb3cgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9O1xuICAgIGJvYXJkX2dyaWRfdG9fc3RyaW5nID0gKGJvYXJkX2dyaWQpID0+IHtcbiAgICAgICAgLyogQ29udmVydCBhIGJvYXJkIGdyaWQgdG8gYSBzdHJpbmdcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGJvYXJkX3N0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgOTsgKytyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDk7ICsrYykge1xuICAgICAgICAgICAgICAgIGJvYXJkX3N0cmluZyArPSBib2FyZF9ncmlkW3JdW2NdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZF9zdHJpbmc7XG4gICAgfTtcbiAgICAvLyBVdGlsaXR5XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaW50X2JvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIC8qIFByaW50IGEgc3Vkb2t1IGBib2FyZGAgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgICovXG4gICAgICAgIC8vIEFzc3VyZSBhIHZhbGlkIGJvYXJkXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLnZhbGlkYXRlX2JvYXJkKGJvYXJkKTtcbiAgICAgICAgaWYgKHJlcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgcmVwb3J0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBWX1BBRERJTkcgPSBcIiBcIjsgLy8gSW5zZXJ0IGFmdGVyIGVhY2ggc3F1YXJlXG4gICAgICAgIGxldCBIX1BBRERJTkcgPSAnXFxuJzsgLy8gSW5zZXJ0IGFmdGVyIGVhY2ggcm93XG4gICAgICAgIGxldCBWX0JPWF9QQURESU5HID0gXCIgIFwiOyAvLyBCb3ggdmVydGljYWwgcGFkZGluZ1xuICAgICAgICBsZXQgSF9CT1hfUEFERElORyA9ICdcXG4nOyAvLyBCb3ggaG9yaXpvbnRhbCBwYWRkaW5nXG4gICAgICAgIGxldCBkaXNwbGF5X3N0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSBib2FyZFtpXTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgc3F1YXJlIGFuZCBzb21lIHBhZGRpbmdcbiAgICAgICAgICAgIGRpc3BsYXlfc3RyaW5nICs9IHNxdWFyZSArIFZfUEFERElORztcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsIGVkZ2Ugb2YgYSBib3gsIGluc2VydCB2LiBib3ggcGFkZGluZ1xuICAgICAgICAgICAgaWYgKGkgJSAzID09PSAyKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheV9zdHJpbmcgKz0gVl9CT1hfUEFERElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVuZCBvZiBhIGxpbmUsIGluc2VydCBob3Jpei4gcGFkZGluZ1xuICAgICAgICAgICAgaWYgKGkgJSA5ID09PSA4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheV9zdHJpbmcgKz0gSF9QQURESU5HO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSG9yaXpvbnRhbCBlZGdlIG9mIGEgYm94LCBpbnNlcnQgaC4gYm94IHBhZGRpbmdcbiAgICAgICAgICAgIGlmIChpICUgMjcgPT09IDI2KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheV9zdHJpbmcgKz0gSF9CT1hfUEFERElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkaXNwbGF5X3N0cmluZyk7XG4gICAgfTtcbiAgICB2YWxpZGF0ZV9ib2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gaWYgdGhlIGdpdmVuIGBib2FyZGAgaXMgdmFsaWQgb3Igbm90LiBJZiBpdCdzIHZhbGlkLCByZXR1cm5cbiAgICAgICAgdHJ1ZS4gSWYgaXQncyBub3QsIHJldHVybiBhIHN0cmluZyBvZiB0aGUgcmVhc29uIHdoeSBpdCdzIG5vdC5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGVtcHR5IGJvYXJkXG4gICAgICAgIGlmICghYm9hcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkVtcHR5IGJvYXJkXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW52YWxpZCBib2FyZCBsZW5ndGhcbiAgICAgICAgaWYgKGJvYXJkLmxlbmd0aCAhPT0gdGhpcy5OUl9TUVVBUkVTKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGJvYXJkIHNpemUuIEJvYXJkIG11c3QgYmUgZXhhY3RseSBcIiArIHRoaXMuTlJfU1FVQVJFUyArXG4gICAgICAgICAgICAgICAgXCIgc3F1YXJlcy5cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBmb3IgaW52YWxpZCBjaGFyYWN0ZXJzXG4gICAgICAgIGZvciAobGV0IGkgb2YgYm9hcmQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW4oaSwgdGhpcy5ESUdJVFMpICYmIGkgIT09IHRoaXMuQkxBTktfQ0hBUikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgYm9hcmQgY2hhcmFjdGVyIGVuY291bnRlcmVkIGF0IGluZGV4IFwiICsgaSArXG4gICAgICAgICAgICAgICAgICAgIFwiOiBcIiArIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdyZSBnb29kLiBSZXR1cm4gdHJ1ZS5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBfY3Jvc3MgPSAoYSwgYikgPT4ge1xuICAgICAgICAvKiBDcm9zcyBwcm9kdWN0IG9mIGFsbCBlbGVtZW50cyBpbiBgYWAgYW5kIGBiYCwgZS5nLixcbiAgICAgICAgc3Vkb2t1Ll9jcm9zcyhcImFiY1wiLCBcIjEyM1wiKSAtPlxuICAgICAgICBbXCJhMVwiLCBcImEyXCIsIFwiYTNcIiwgXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJjMVwiLCBcImMyXCIsIFwiYzNcIl1cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBhaSBvZiBhKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBiaSBvZiBiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWkgKyBiaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIF9pbiA9ICh2LCBzZXEpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGlmIGEgdmFsdWUgYHZgIGlzIGluIHNlcXVlbmNlIGBzZXFgLlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gc2VxLmluZGV4T2YodikgIT09IC0xO1xuICAgIH07XG4gICAgX2ZpcnN0X3RydWUgPSAoc2VxKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiB0aGUgZmlyc3QgZWxlbWVudCBpbiBgc2VxYCB0aGF0IGlzIHRydWUuIElmIG5vIGVsZW1lbnQgaXNcbiAgICAgICAgdHJ1ZSwgcmV0dXJuIGZhbHNlLlxuICAgICAgICAqL1xuICAgICAgICBmb3IgKGxldCBpIG9mIHNlcSkge1xuICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBfc2h1ZmZsZSA9IChzZXEpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgc2h1ZmZsZWQgdmVyc2lvbiBvZiBgc2VxYFxuICAgICAgICAqL1xuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgdGhlIHNhbWUgc2l6ZSBhcyBgc2VxYCBmaWxsZWQgd2l0aCBmYWxzZVxuICAgICAgICBsZXQgc2h1ZmZsZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHNodWZmbGVkLnB1c2goZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgb2Ygc2VxKSB7XG4gICAgICAgICAgICBsZXQgdGkgPSB0aGlzLl9yYW5kX3JhbmdlKHNlcS5sZW5ndGgpO1xuICAgICAgICAgICAgd2hpbGUgKHNodWZmbGVkW3RpXSkge1xuICAgICAgICAgICAgICAgIHRpID0gKHRpICsgMSkgPiAoc2VxLmxlbmd0aCAtIDEpID8gMCA6ICh0aSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2h1ZmZsZWRbdGldID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfTtcbiAgICBfcmFuZF9yYW5nZSA9IChtYXgsIG1pbikgPT4ge1xuICAgICAgICAvKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgcmFuZ2Ugb2YgYG1pbmAgdG8gYG1heGAgKG5vbiBpbmNsdXNpdmUpLlxuICAgICAgICBJZiBgbWluYCBub3QgZGVmaW5lZCwgZGVmYXVsdCB0byAwLiBJZiBgbWF4YCBub3QgZGVmaW5lZCwgdGhyb3cgYW5cbiAgICAgICAgZXJyb3IuXG4gICAgICAgICovXG4gICAgICAgIG1pbiA9IG1pbiA/PyAwO1xuICAgICAgICBpZiAobWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJSYW5nZSB1bmRlZmluZWRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX3N0cmlwX2R1cHMgPSAoc2VxKSA9PiB7XG4gICAgICAgIC8qIFN0cmlwIGR1cGxpY2F0ZSB2YWx1ZXMgZnJvbSBgc2VxYFxuICAgICAgICAqL1xuICAgICAgICBsZXQgc2VxX3NldCA9IFtdO1xuICAgICAgICBsZXQgZHVwX21hcCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBlIG9mIHNlcSkge1xuICAgICAgICAgICAgaWYgKCFkdXBfbWFwW2VdKSB7XG4gICAgICAgICAgICAgICAgc2VxX3NldC5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIGR1cF9tYXBbZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXFfc2V0O1xuICAgIH07XG4gICAgX2ZvcmNlX3JhbmdlID0gKG5yLCBtYXgsIG1pbikgPT4ge1xuICAgICAgICAvKiBGb3JjZSBgbnJgIHRvIGJlIHdpdGhpbiB0aGUgcmFuZ2UgZnJvbSBgbWluYCB0bywgYnV0IG5vdCBpbmNsdWRpbmcsXG4gICAgICAgIGBtYXhgLiBgbWluYCBpcyBvcHRpb25hbCwgYW5kIHdpbGwgZGVmYXVsdCB0byAwLiBJZiBgbnJgIGlzIHVuZGVmaW5lZCxcbiAgICAgICAgdHJlYXQgaXQgYXMgemVyby5cbiAgICAgICAgKi9cbiAgICAgICAgbWluID0gbWluIHx8IDA7XG4gICAgICAgIG5yID0gbnIgfHwgMDtcbiAgICAgICAgaWYgKG5yIDwgbWluKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuciA+IG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnI7XG4gICAgfTtcbn07XG5TdWRva3VUUyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU3Vkb2t1VFMpO1xuZXhwb3J0cy5TdWRva3VUUyA9IFN1ZG9rdVRTO1xuU3Vkb2t1VFNbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXTtcbi8vIGNvbnN0IHN1ZG9rdSA9IG5ldyBTdWRva3VUUygpXG4vLyBjb25zdCBnYW1lID0gc3Vkb2t1LmdlbmVyYXRlKCdlYXN5Jylcbi8vIGdhbWVcbi8vIGNvbnN0IHJlc3VsdCA9IHN1ZG9rdS5zb2x2ZShnYW1lKVxuLy8gcmVzdWx0XG4vLyBjb25zdCBjYW5kaWRhdGVzID0gKDxzdHJpbmdbXVtdPnN1ZG9rdVxuLy8gICAuZ2V0Q2FuZGlkYXRlcyhnYW1lKSlcbi8vICAgLmZsYXQoKVxuLy8gY29uc3QgcmVtYWluaW5nID0gWy4uLm5ldyBTZXQoY2FuZGlkYXRlcy5tYXAoKGNhbmRpZGF0ZSwgaSkgPT4ge1xuLy8gICBpZiAoZ2FtZVtpXSA9PT0gJy4nKVxuLy8gICAgIHJldHVybiBjYW5kaWRhdGVcbi8vIH0pLmpvaW4oJycpLnNwbGl0KCcnKSldLnNvcnQoKVxuLy8gY29uc29sZS5sb2coY2FuZGlkYXRlcylcbi8vIGNvbnNvbGUubG9nKHJlbWFpbmluZylcbi8vIHN1ZG9rdS5wcmludF9ib2FyZChnYW1lKVxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVOUkVBQ0hBQkxFID0gZXhwb3J0cy5BU1NFUlQgPSB2b2lkIDA7XG5jb25zdCBBU1NFUlQgPSAobykgPT4ge1xuICAgIGlmIChvID09PSB1bmRlZmluZWQgfHwgbyA9PT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3NlcnRpb24gZXJyb3I6ICR7b31gKTtcbiAgICByZXR1cm4gbztcbn07XG5leHBvcnRzLkFTU0VSVCA9IEFTU0VSVDtcbmNvbnN0IFVOUkVBQ0hBQkxFID0gKG8pID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVhY2hhYmxlICR7b31gKTtcbn07XG5leHBvcnRzLlVOUkVBQ0hBQkxFID0gVU5SRUFDSEFCTEU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVjMiA9IHZvaWQgMDtcbmNvbnN0IHZlYzIgPSAoeCwgeSA9IHgpID0+IFt4LCB5XTtcbmV4cG9ydHMudmVjMiA9IHZlYzI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2EsIF9iLCBfYywgX2QsIF9lLCBfZiwgX2c7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlZhbmlsbGFKc1ZpZXcgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgR2FtZURpZmZpY3VsdHlfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lRGlmZmljdWx0eVwiKTtcbmNvbnN0IElHYW1lUHViU3ViXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lUHViU3ViXCIpO1xuY29uc3QgSUdhbWVMb2dpY18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZUxvZ2ljXCIpO1xuY29uc3QgSUdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTWFuYWdlclwiKTtcbmNvbnN0IElHYW1lUnVubmVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lUnVubmVyXCIpO1xuY29uc3QgSVN1ZG9rdVRTXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lTdWRva3VUU1wiKTtcbmNvbnN0IEdhbWVTZXR0aW5nc18xID0gcmVxdWlyZShcIi4uL2xpYnJhcnkvR2FtZVNldHRpbmdzXCIpO1xuY29uc3QgSUlucHV0UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUlucHV0UHJvdmlkZXJcIik7XG4vLyBpbXBvcnQgeyB2ZWMyIH0gZnJvbSBcIi4uL3V0aWxzL3ZlYzJcIjtcbmxldCBWYW5pbGxhSnNWaWV3ID0gY2xhc3MgVmFuaWxsYUpzVmlldyB7XG4gICAgZ2FtZU1hbmFnZXI7XG4gICAgbG9naWM7XG4gICAgc3Vkb2t1O1xuICAgIHJ1bm5lcjtcbiAgICBldmVudHM7XG4gICAgaW5wdXQ7XG4gICAgY29uZmlnO1xuICAgIHJvb3Q7XG4gICAgYm9hcmQ7XG4gICAgZm9ybTtcbiAgICBzaWRlYmFyVG9nZ2xlO1xuICAgIHJlc3RhcnRCdXR0b247XG4gICAgbWVudTtcbiAgICBzdGF0cztcbiAgICBrZXlwYWRCRztcbiAgICBrZXlwYWQ7XG4gICAgY29uc3RydWN0b3IoZ2FtZU1hbmFnZXIsIGxvZ2ljLCBzdWRva3UsIHJ1bm5lciwgZXZlbnRzLCBpbnB1dCwgY29uZmlnKSB7XG4gICAgICAgIHRoaXMuZ2FtZU1hbmFnZXIgPSBnYW1lTWFuYWdlcjtcbiAgICAgICAgdGhpcy5sb2dpYyA9IGxvZ2ljO1xuICAgICAgICB0aGlzLnN1ZG9rdSA9IHN1ZG9rdTtcbiAgICAgICAgdGhpcy5ydW5uZXIgPSBydW5uZXI7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgICAgIHRoaXMuY29uZmlnID0gY29uZmlnO1xuICAgICAgICB0aGlzLnJvb3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCc6cm9vdCcpO1xuICAgICAgICB0aGlzLmJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN1ZG9rdV9ib2FyZCcpO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIHRoaXMuc2lkZWJhclRvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyLXRvZ2dsZScpO1xuICAgICAgICB0aGlzLnJlc3RhcnRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzdGFydF9idXR0b24nKTtcbiAgICAgICAgdGhpcy5tZW51ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1ZG9rdV9tZW51Jyk7XG4gICAgICAgIHRoaXMuc3RhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhdGlzdGljcycpO1xuICAgICAgICB0aGlzLmtleXBhZEJHID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkX2NvbnNvbGVfY29udGFpbmVyJyk7XG4gICAgICAgIHRoaXMua2V5cGFkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkX2NvbnNvbGUnKTtcbiAgICB9XG4gICAgZ2V0Q2VsbERpc3BsYXlWYWx1ZShtb2RlbCwgY2VsbCkge1xuICAgICAgICByZXR1cm4gY2VsbC52YWx1ZSA9PT0gJy4nID8gJycgOiBjZWxsLnZhbHVlO1xuICAgIH1cbiAgICByZW5kZXJDZWxsKG1vZGVsLCBjZWxsKSB7XG4gICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC5hZGQoJ2NlbGwnKTtcbiAgICAgICAgZWwuc3R5bGUuaGVpZ2h0ID0gJzYycHgnO1xuICAgICAgICBjb25zdCBbeCwgeV0gPSB0aGlzLmxvZ2ljLmdldFRpbGVWZWN0b3JGb3JJbmRleChjZWxsLmluZGV4KTtcbiAgICAgICAgY29uc3Qgc2xQb3MgPSAhIW1vZGVsLnNlbGVjdGVkICYmIHRoaXMubG9naWMuZ2V0VGlsZVZlY3RvckZvckluZGV4KG1vZGVsLnNlbGVjdGVkKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRHcm91cCA9IHNsUG9zICYmIHRoaXMuc3Vkb2t1LmdldEdyb3VwTnVtYmVyKHNsUG9zWzBdLCBzbFBvc1sxXSk7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGhpcy5zdWRva3UuZ2V0R3JvdXBOdW1iZXIoeCwgeSk7XG4gICAgICAgIGNvbnN0IGlzU2VsZWN0ZWQgPSBtb2RlbC5zZWxlY3RlZCA9PT0gY2VsbC5pbmRleDtcbiAgICAgICAgY29uc3QgaXNHcm91cCA9IGdyb3VwID09PSBzZWxlY3RlZEdyb3VwO1xuICAgICAgICBjb25zdCBpc0lubGluZSA9IGlzR3JvdXAgfHwgKHNsUG9zICYmIChzbFBvc1swXSA9PT0geCB8fCBzbFBvc1sxXSA9PT0geSkpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdmaXgnLCBjZWxsLmlzSGludCk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2N1cnJlbnQnLCBpc1NlbGVjdGVkKTsgLy8gY3VycmVudGx5IHNlbGVjdGVkIGNlbGxcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnZ3JvdXAnLCBpc0dyb3VwKTsgLy8gc2FtZSBzZWN0aW9uIGFzIHNlbGVjdGVkXG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ3NlbGVjdGVkJywgaXNJbmxpbmUpOyAvLyBpbmxpbmUgd2l0aCBzZWxlY3RlZFxuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdub3R2YWxpZCcsIGNlbGwudmFsdWUgIT09ICcuJyAmJlxuICAgICAgICAgICAgbW9kZWwuc29sdXRpb25bY2VsbC5pbmRleF0gIT09IGNlbGwudmFsdWUpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdib3JkZXJfdicsIFszLCA2XS5pbmNsdWRlcyh4ICsgMSkpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdib3JkZXJfaCcsIFszLCA2XS5pbmNsdWRlcyh5ICsgMSkpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3gnLCBTdHJpbmcoeCArIDEpKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd5JywgU3RyaW5nKHkgKyAxKSk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaWR4JywgU3RyaW5nKGNlbGwuaW5kZXgpKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgc3Bhbi5jbGFzc0xpc3QudG9nZ2xlKCdzYW1ldmFsdWUnLCAhIW1vZGVsLnNlbGVjdGVkICYmXG4gICAgICAgICAgICBtb2RlbC5zZWxlY3RlZCAhPT0gY2VsbC5pbmRleCAmJlxuICAgICAgICAgICAgY2VsbC52YWx1ZSA9PT0gbW9kZWwuY2VsbHNbbW9kZWwuc2VsZWN0ZWRdLnZhbHVlKTtcbiAgICAgICAgc3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gdGhpcy5jb25maWcuY2VsbFNpemUgKyAncHgnO1xuICAgICAgICBzcGFuLmlubmVySFRNTCA9IHRoaXMuZ2V0Q2VsbERpc3BsYXlWYWx1ZShtb2RlbCwgY2VsbCk7XG4gICAgICAgIGVsLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICByZXR1cm4gZWwub3V0ZXJIVE1MO1xuICAgIH1cbiAgICByZW5kZXJDZWxsTGlzdChtb2RlbCkge1xuICAgICAgICByZXR1cm4gbW9kZWwuY2VsbHNcbiAgICAgICAgICAgIC5tYXAoY2VsbCA9PiB0aGlzLnJlbmRlckNlbGwobW9kZWwsIGNlbGwpKVxuICAgICAgICAgICAgLmpvaW4oJycpO1xuICAgIH1cbiAgICByZW5kZXJCb2FyZChtb2RlbCkge1xuICAgICAgICB0aGlzLmJvYXJkLnN0eWxlLndpZHRoID0gdGhpcy5jb25maWcuYm9hcmRXaWR0aCArICdweCc7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJDZWxsTGlzdChtb2RlbCk7XG4gICAgfVxuICAgIHJlbmRlclN0YXRzKG1vZGVsKSB7XG4gICAgICAgIGNvbnN0IHJlbWFpbmluZyA9IG1vZGVsLmNlbGxzLnJlZHVjZSgoYSwgdikgPT4ge1xuICAgICAgICAgICAgaWYgKCF2LmlzSGludCAmJiB2LnZhbHVlID09PSAnLicpXG4gICAgICAgICAgICAgICAgYSsrO1xuICAgICAgICAgICAgcmV0dXJuIGE7XG4gICAgICAgIH0sIDApO1xuICAgICAgICB0aGlzLnN0YXRzLmlubmVySFRNTCA9IGBcbiAgICAgIDxiPkNlbGxzOjwvYj4gPHNwYW4gY2xhc3M9XCJjZWxsc19jb21wbGV0ZVwiPiR7cmVtYWluaW5nfS84MTwvc3Bhbj4gPGI+VGltZTo8L2I+IDxzcGFuIGNsYXNzPVwidGltZVwiPiR7dGhpcy5kdXJhdGlvbn08L3NwYW4+XG4gICAgYDtcbiAgICB9XG4gICAgc2V0Q2VsbFNpemUoeyBjZWxsU2l6ZTogW3gsIHldIH0pIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLWNlbGwtd2lkdGgnLCB4ICsgJ3B4Jyk7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jZWxsLWhlaWdodCcsIHkgKyAncHgnKTtcbiAgICB9XG4gICAgc2V0Q2VsbENoYXJhY3RlcnMoeyBmbGFnQ2hhcmFjdGVyLCBtaW5lQ2hhcmFjdGVyIH0pIHtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLWZsYWctY2hhcmFjdGVyJywgZmxhZ0NoYXJhY3Rlcik7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1taW5lLWNoYXJhY3RlcicsIG1pbmVDaGFyYWN0ZXIpO1xuICAgIH1cbiAgICBzdGFydEdhbWUgPSBhc3luYyAoZGlmZmljdWx0eSA9IEdhbWVEaWZmaWN1bHR5XzEuR2FtZURpZmZpY3VsdHkuZWFzeSkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3RhcnRHYW1lJywgZGlmZmljdWx0eSk7XG4gICAgICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZ2FtZU1hbmFnZXIuY3JlYXRlKGRpZmZpY3VsdHkpO1xuICAgICAgICAvLyB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKCkgPT4ge1xuICAgICAgICAvLyAgIGlmIChnYW1lYm9hcmQuc3RhdGUgPCBHYW1lU3RhdGUuV09OKVxuICAgICAgICAvLyAgICAgZ2FtZWJvYXJkLnN0YXRlID0gR2FtZVN0YXRlLkdBTUVPVkVSO1xuICAgICAgICAvLyB9LCB7IG9uY2U6IHRydWUgfSk7XG4gICAgICAgIGF3YWl0IHRoaXMucnVubmVyLnBsYXlHYW1lKGdhbWVib2FyZCk7XG4gICAgfTtcbiAgICBzdWJtaXRIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGZvcm0gPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgY29uc3QgZGlmZmljdWx0eSA9IGZvcm0uZ2V0KCdkaWZmaWN1bHR5Jyk7XG4gICAgICAgIHRoaXMuc3RhcnRHYW1lKGRpZmZpY3VsdHkpO1xuICAgIH07XG4gICAgb25DbGlja0NlbGwgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWR4JykpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5wdXQucHV0TmV4dElucHV0KHsgYWN0aW9uOiAnc2VsZWN0JywgY2VsbEluZGV4OiBpZHggfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeCcpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXBhZEJHLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBOdW1iZXIoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkeCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmlucHV0LnB1dE5leHRJbnB1dCh7IGFjdGlvbjogJ3NlbGVjdCcsIGNlbGxJbmRleDogaWR4IH0pO1xuICAgICAgICAgICAgICAgIGlmICghZS50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2ZpeCcpKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmtleXBhZEJHLnN0eWxlLmRpc3BsYXkgPSAnZmxleCc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIG9uS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdWRva3UuRElHSVRTLmluY2x1ZGVzKGUua2V5KSkge1xuICAgICAgICAgICAgdGhpcy5pbnB1dC5wdXROZXh0SW5wdXQoeyBhY3Rpb246ICdrZXlwcmVzcycsIGtleTogZS5rZXkgfSk7XG4gICAgICAgICAgICB0aGlzLmtleXBhZEJHLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHRpbWVyO1xuICAgIGV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZXZlbnRIYW5kbGVyJywgZXZlbnQpO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZy1jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxTaXplKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxDaGFyYWN0ZXJzKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2JlZ2luJzpcbiAgICAgICAgICAgICAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmR1cmF0aW9uKys7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyU3RhdHMoZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICBjYXNlICd1cGRhdGUnOiB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW5kZXJCb2FyZChldmVudC5wYXlsb2FkKTtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnJlbmRlclN0YXRzKGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2FzZSAnZW5kJzoge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5kdXJhdGlvbiA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlZ2lzdGVyTGlzdGVuZXJzKCkge1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMub25DbGlja0NlbGwpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMub25DbGlja0NlbGwpO1xuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHRoaXMub25LZXlQcmVzcyk7XG4gICAgICAgIHRoaXMucmVzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tc2lkZWJhcicpO1xuICAgICAgICAgICAgdGhpcy5zdGFydEdhbWUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuc2lkZWJhclRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5tZW51LmNsYXNzTGlzdC50b2dnbGUoJ29wZW4tc2lkZWJhcicpO1xuICAgICAgICAgICAgLy8gdGhpcy5rZXlwYWRCRy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5rZXlwYWRCRy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGUgPT4ge1xuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5rZXlwYWRCRy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5rZXlwYWQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBlID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoIShlLnRhcmdldCBpbnN0YW5jZW9mIEhUTUxEaXZFbGVtZW50KSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoIShlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ251bScpKSlcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQuaW5uZXJUZXh0Lm1hdGNoKC9bMS05XS8pKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5wdXROZXh0SW5wdXQoe1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdrZXlwcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogZS50YXJnZXQuaW5uZXJUZXh0LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHRoaXMua2V5cGFkQkcuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGUudGFyZ2V0LmlubmVyVGV4dCA9PT0gJ1gnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5pbnB1dC5wdXROZXh0SW5wdXQoe1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdrZXlwcmVzcycsXG4gICAgICAgICAgICAgICAgICAgIGtleTogJycsXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgdGhpcy5rZXlwYWRCRy5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ldmVudHMuc3Vic2NyaWJlKHRoaXMuZXZlbnRIYW5kbGVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGR1cmF0aW9uID0gMDtcbiAgICB1bnJlZ2lzdGVyTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmV2ZW50cy51bnN1YnNjcmliZSh0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrQ2VsbCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RvdWNoZW5kJywgdGhpcy5vbkNsaWNrQ2VsbCk7XG4gICAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5vbktleVByZXNzKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb250cm9scygpIHtcbiAgICAgICAgLy8gdGhpcy5kaWZmLnJlcGxhY2VDaGlsZHJlbihcbiAgICAgICAgLy8gICAuLi4oT2JqZWN0LmtleXMoR2FtZURpZmZpY3VsdHkpKS5tYXAodmFsdWUgPT4ge1xuICAgICAgICAvLyAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdvcHRpb24nKVxuICAgICAgICAvLyAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIFN0cmluZyh2YWx1ZSkpXG4gICAgICAgIC8vICAgICBlbC50ZXh0Q29udGVudCA9ICg8YW55PnZhbHVlKVxuICAgICAgICAvLyAgICAgaWYgKHZhbHVlID09PSB0aGlzLmNvbmZpZy5kZWZhdWx0RGlmZmljdWx0eSlcbiAgICAgICAgLy8gICAgICAgZWwuc2VsZWN0ZWQgPSB0cnVlXG4gICAgICAgIC8vICAgICByZXR1cm4gZWxcbiAgICAgICAgLy8gICB9KVxuICAgICAgICAvLyApXG4gICAgICAgIC8vIGNvbnN0IGNlbGxTaXplSW5wdXRFbCA9IHRoaXMuY3RybFxuICAgICAgICAvLyAgIC5xdWVyeVNlbGVjdG9yPEhUTUxJbnB1dEVsZW1lbnQ+KCdbbmFtZT1jZWxsLXNpemVdJykhXG4gICAgICAgIC8vIGNlbGxTaXplSW5wdXRFbC52YWx1ZSA9IFN0cmluZyh0aGlzLmNvbmZpZy5jZWxsU2l6ZVswXSlcbiAgICAgICAgLy8gY2VsbFNpemVJbnB1dEVsXG4gICAgICAgIC8vICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ID0+IHtcbiAgICAgICAgLy8gICAgIGlmIChldi50YXJnZXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KVxuICAgICAgICAvLyAgICAgICB0aGlzLmNvbmZpZy5zZXQoJ2NlbGxTaXplJywgdmVjMihOdW1iZXIoZXYudGFyZ2V0LnZhbHVlKSkpXG4gICAgICAgIC8vICAgfSlcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuVmFuaWxsYUpzVmlldyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lTWFuYWdlcl8xLklHYW1lTWFuYWdlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdCwgdHlwZW9mIChfYiA9IHR5cGVvZiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYykgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0LCB0eXBlb2YgKF9jID0gdHlwZW9mIElTdWRva3VUU18xLklTdWRva3VUUyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJU3Vkb2t1VFNfMS5JU3Vkb2t1VFMpID09PSBcImZ1bmN0aW9uXCIgPyBfYyA6IE9iamVjdCwgdHlwZW9mIChfZCA9IHR5cGVvZiBJR2FtZVJ1bm5lcl8xLklHYW1lUnVubmVyICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUnVubmVyXzEuSUdhbWVSdW5uZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfZCA6IE9iamVjdCwgdHlwZW9mIChfZSA9IHR5cGVvZiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIpID09PSBcImZ1bmN0aW9uXCIgPyBfZSA6IE9iamVjdCwgdHlwZW9mIChfZiA9IHR5cGVvZiBJSW5wdXRQcm92aWRlcl8xLklJbnB1dFByb3ZpZGVyICE9PSBcInVuZGVmaW5lZFwiICYmIElJbnB1dFByb3ZpZGVyXzEuSUlucHV0UHJvdmlkZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfZiA6IE9iamVjdCwgdHlwZW9mIChfZyA9IHR5cGVvZiBHYW1lU2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MgIT09IFwidW5kZWZpbmVkXCIgJiYgR2FtZVNldHRpbmdzXzEuR2FtZVNldHRpbmdzKSA9PT0gXCJmdW5jdGlvblwiID8gX2cgOiBPYmplY3RdKVxuXSwgVmFuaWxsYUpzVmlldyk7XG5leHBvcnRzLlZhbmlsbGFKc1ZpZXcgPSBWYW5pbGxhSnNWaWV3O1xuVmFuaWxsYUpzVmlld1tcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lTWFuYWdlclwiLCBcIklHYW1lTG9naWNcIiwgXCJJU3Vkb2t1VFNcIiwgXCJJR2FtZVJ1bm5lclwiLCBcIklHYW1lUHViU3ViXCIsIFwiSUlucHV0UHJvdmlkZXJcIiwgXCJHYW1lU2V0dGluZ3NcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RhdGljRGVwc1Byb3AgPSBleHBvcnRzLnJlZmxlY3RUYXJnZXRUeXBlID0gZXhwb3J0cy5wcm94eUNvbXBhcmVLZXkgPSB2b2lkIDA7XG5leHBvcnRzLnByb3h5Q29tcGFyZUtleSA9ICdAQGdvZHNtYWNrL2RpOnByb3h5LWNvbXBhcmlzb24ta2V5JztcbmV4cG9ydHMucmVmbGVjdFRhcmdldFR5cGUgPSAnQEBnb2RzbWFjay9kaTp0YXJnZXQtc2luZ2xldG9uJztcbmV4cG9ydHMuc3RhdGljRGVwc1Byb3AgPSAnQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmplY3RhYmxlID0gdm9pZCAwO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuY29uc3QgSW5qZWN0YWJsZSA9ICgpID0+ICgwLCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5KSgpO1xuZXhwb3J0cy5JbmplY3RhYmxlID0gSW5qZWN0YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gKHsgc2luZ2xldG9uID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gICAgcmV0dXJuICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VHlwZSA9IHNpbmdsZXRvbiA/ICdzaW5nbGV0b24nIDogJ3RyYW5zaWVudCc7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoY29uc3RhbnRzXzEucmVmbGVjdFRhcmdldFR5cGUsIHRhcmdldFR5cGUsIHRhcmdldCk7XG4gICAgfTtcbn07XG5leHBvcnRzLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gSW5qZWN0YWJsZURlY29yYXRvckZhY3Rvcnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VydmljZSA9IHZvaWQgMDtcbmNvbnN0IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeVwiKTtcbmNvbnN0IFNlcnZpY2UgPSAoKSA9PiAoMCwgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMS5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSkoKTtcbmV4cG9ydHMuU2VydmljZSA9IFNlcnZpY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2luZ2xldG9uID0gdm9pZCAwO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuY29uc3QgU2luZ2xldG9uID0gKCkgPT4gKDAsIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkpKHsgc2luZ2xldG9uOiB0cnVlIH0pO1xuZXhwb3J0cy5TaW5nbGV0b24gPSBTaW5nbGV0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2luZ2xldG9uID0gZXhwb3J0cy5TZXJ2aWNlID0gZXhwb3J0cy5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSA9IGV4cG9ydHMuSW5qZWN0YWJsZSA9IHZvaWQgMDtcbnZhciBJbmplY3RhYmxlXzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSW5qZWN0YWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gSW5qZWN0YWJsZV8xLkluamVjdGFibGU7IH0gfSk7XG52YXIgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3Rvcnk7IH0gfSk7XG52YXIgU2VydmljZV8xID0gcmVxdWlyZShcIi4vU2VydmljZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNlcnZpY2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlcnZpY2VfMS5TZXJ2aWNlOyB9IH0pO1xudmFyIFNpbmdsZXRvbl8xID0gcmVxdWlyZShcIi4vU2luZ2xldG9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2luZ2xldG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTaW5nbGV0b25fMS5TaW5nbGV0b247IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9kZWNvcmF0b3JzXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ludGVyZmFjZS9JQ29udGFpbmVyXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ludGVyZmFjZS9JSW5qZWN0b3JcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGlicmFyeS9Db250YWluZXJcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGlicmFyeS9JbmplY3RvclwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbnRhaW5lciA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBJbmplY3Rvcl8xID0gcmVxdWlyZShcIi4vSW5qZWN0b3JcIik7XG5jb25zdCBwcm94aWZ5XzEgPSByZXF1aXJlKFwiLi4vcHJveGlmeVwiKTtcbmNsYXNzIENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7IGhvdFN3YXBwaW5nOiBmYWxzZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5nZXRJbmplY3RvciA9ICgpID0+IHsgcmV0dXJuIHRoaXMuaW5qZWN0b3I7IH07XG4gICAgICAgIHRoaXMuaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3JfMS5JbmplY3RvcihzZXR0aW5ncyk7XG4gICAgfVxuICAgIHJlc29sdmUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbnRhaW5lckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMuc2V0dGluZ3MuaG90U3dhcHBpbmdcbiAgICAgICAgICAgID8gKDAsIHByb3hpZnlfMS5wcm94aWZ5KSh0aGlzLmluamVjdG9yLCB0YXJnZXQpXG4gICAgICAgICAgICA6IHRoaXMuaW5qZWN0b3IucmVzb2x2ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIHJlcGxhY2UodHlwZSwgaW1wbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRTZXJ2aWNlKHR5cGUsIGltcGwsIHRydWUpO1xuICAgIH1cbiAgICBjcmVhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmNyZWF0ZSh0YXJnZXQpO1xuICAgIH1cbiAgICBhZGRTZXJ2aWNlKHR5cGUsIGltcGwgPSB0eXBlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIGltcGwsIGZvcmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFNlcnZpY2VJbnN0YW5jZSh0eXBlLCBpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVySW5zdGFuY2UodHlwZSwgaW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkU2luZ2xldG9uKHR5cGUsIGltcGwgPSB0eXBlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIGltcGwsIGZvcmNlKTtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclNpbmdsZXRvbih0eXBlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFNpbmdsZXRvbkluc3RhbmNlKHR5cGUsIGluc3RhbmNlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIHR5cGUsIGZvcmNlKTtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3Rlckluc3RhbmNlKHR5cGUsIGluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9uRXhpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5pbmplY3Rvci5kZXN0cm95QWxsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyO1xuY2xhc3MgQ29udGFpbmVyRGVwZW5kZW5jeVJlc29sdXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoYEludmFsaWQgdGFyZ2V0OiAke3RhcmdldH1gKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW5qZWN0b3IgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgcHJveGlmeV8xID0gcmVxdWlyZShcIi4uL3Byb3hpZnlcIik7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7IGhvdFN3YXBwaW5nOiBmYWxzZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5yZWdpc3RlclNpbmdsZXRvbiA9ICh0eXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9fc2luZ2xldG9ucy5hZGQodGhpcy5nZXRUeXBlTmFtZSh0eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclR5cGUgPSAodHlwZSwgaW1wbCwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3kodHlwZSwgKGltcGwgfHwgdHlwZSksIGZvcmNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW5zdGFuY2UgPSAodGFyZ2V0LCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5zZXQodHlwZU5hbWUsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cHNlcnREZXBlbmRlbmN5ID0gKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jeSA9IHRoaXMuZ2V0RGVwZW5kZW5jeSh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoZGVwZW5kZW5jeSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbmplY3RvckRlcGVuZGVuY3lOb3RGb3VuZEVycm9yKHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnREZXBlbmRlbmN5KHR5cGVOYW1lLCB0YXJnZXQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbG9hZERlcGVuZGVuY3kgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5pbmZvKGBIb3QtU3dhcHBpbmcgXCIke3RhcmdldC5uYW1lfVwiIGRlcGVuZGVuY3kuYClcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgbmVlZHMgbW9yZSB0ZXN0aW5nXG4gICAgICAgICAgICBjb25zdCBkZXAgPSB0aGlzLmdldERlcGVuZGVuY3kodGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuX19vdmVycmlkZURlcGVuZGVuY3kodGFyZ2V0LCBkZXApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19yZXBsYWNlSW5zdGFuY2VJbkNhY2hlKHRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0VHlwZU5hbWUgPSAodCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnYgPSAodHlwZW9mIHQgPT09ICdzdHJpbmcnKSA/IHQgOiAodCA9PT0gbnVsbCB8fCB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0Lm5hbWUpIHx8ICh0ID09PSBudWxsIHx8IHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHQuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICBpZiAoIXJ2KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbmplY3RvckdldFR5cGVOYW1lRXJyb3IodCk7XG4gICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgIH07XG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgICAgICAvLyNyZWdpb24gaW50ZXJuYWxzXG4gICAgICAgIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9fc2luZ2xldG9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fX2xvZ2dlciA9IG5ldyBQcm94eShjb25zb2xlLCB7XG4gICAgICAgICAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8jcmVnaW9uIGFwaVxuICAgIHJlc29sdmUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5fX2luc3RhbmNlQ2FjaGUuaGFzKHR5cGVOYW1lKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9faW5zdGFuY2VDYWNoZS5nZXQodHlwZU5hbWUpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgaGFzRGVwZW5kZW5jeSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdHlwZW5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmhhcyh0eXBlbmFtZSk7XG4gICAgfVxuICAgIGdldERlcGVuZGVuY3kodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmdldCh0aGlzLmdldFR5cGVOYW1lKHRhcmdldCkpO1xuICAgIH1cbiAgICBpbnNlcnREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQsIG92ZXJyaWRlKSB7XG4gICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQsIG92ZXJyaWRlKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykgPyB0YXJnZXQgOiByZXNvbHZlZDtcbiAgICB9XG4gICAgY3JlYXRlKHRhcmdldCkge1xuICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVzb2x2aW5nIGRlcGVuZGVuY3kgPT4nLCB0eXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy51cHNlcnREZXBlbmRlbmN5KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHsgaW5qZWN0aW9ucyB9ID0gdGhpcy5fX3Jlc29sdmVUb2tlbnMocmVzb2x2ZWQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX19jcmVhdGVPYmplY3QocmVzb2x2ZWQsIGluamVjdGlvbnMpO1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1NpbmdsZXRvbkluc3RhbmNlKHR5cGVOYW1lLCByZXNvbHZlZCkpXG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5zZXQodHlwZU5hbWUsIGluc3RhbmNlKTtcbiAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ2NyZWF0ZWQnLCBpbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgZGVzdHJveUFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZGVwcyA9IFsuLi50aGlzLl9faW5zdGFuY2VDYWNoZS52YWx1ZXMoKV07XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbFNldHRsZWQoZGVwcy5tYXAoZWFjaCA9PiB0aGlzLl9fZGlzcG9zZU9iamVjdChlYWNoKSkpO1xuICAgICAgICAgICAgdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxpc3REZXBlbmRlbmNpZXMoeyBzb3J0ID0gZmFsc2UsIGxvZyA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWy4uLnRoaXMuX19kZXBlbmRlbmN5Q2FjaGUua2V5cygpXTtcbiAgICAgICAgaWYgKHNvcnQpXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc29ydCgpO1xuICAgICAgICBpZiAobG9nKVxuICAgICAgICAgICAgdGhpcy5fX2xvZ2dlci5pbmZvKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGRlcGVuZGVuY2llc0FzSlNPTigpIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXlzID0gWy4uLnRoaXMuX19kZXBlbmRlbmN5Q2FjaGUua2V5cygpXTtcbiAgICAgICAgcmV0dXJuIGNhY2hlS2V5cy5zb3J0KCkucmVkdWNlKChhY2MsIG4pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5nZXQobik7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY2MpLCB7IFtuXTogKF9hID0gaW5zdGFuY2UgPT09IG51bGwgfHwgaW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluc3RhbmNlLmNvbnN0cnVjdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSB9KTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBfX3Jlc29sdmVUb2tlbnMocmVzb2x2ZWQpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGNvbnN0IHJlZmxlY3RlZCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgcmVzb2x2ZWQpO1xuICAgICAgICAvLyB0b2tlbnMgYXJlIHJlcXVpcmVkIGRlcGVuZGVuY2llcywgd2hpbGUgaW5qZWN0aW9ucyBhcmUgcmVzb2x2ZWQgdG9rZW5zIGZyb20gdGhlIEluamVjdG9yXG4gICAgICAgIGNvbnN0IHRva2VucyA9IChfYiA9IChfYSA9IHJlZmxlY3RlZCA9PT0gbnVsbCB8fCByZWZsZWN0ZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZmxlY3RlZC5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChvLm5hbWUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2EgPSByZXNvbHZlZFtjb25zdGFudHNfMS5zdGF0aWNEZXBzUHJvcF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbHRlcigobykgPT4gbyAhPSBudWxsKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgICAgIGlmICh0b2tlbnMuZmluZChvID0+IG8ubmFtZSA9PT0gJ09iamVjdCcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW5qZWN0b3JEZXBlbmRlbmN5UmVzb2x1dGlvbkVycm9yKHJlc29sdmVkLCB0b2tlbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltcGwgPSB0aGlzLmdldERlcGVuZGVuY3koY2xzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1wbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3koY2xzLCBpbXBsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KGNscywgY2xzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluamVjdGlvbnMgPSAoKF9jID0gdGhpcy5zZXR0aW5ncykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmhvdFN3YXBwaW5nKVxuICAgICAgICAgICAgPyB0b2tlbnMubWFwKHRva2VuID0+ICgwLCBwcm94aWZ5XzEucHJveGlmeSkodGhpcywgdG9rZW4pKVxuICAgICAgICAgICAgOiB0b2tlbnMubWFwKHRva2VuID0+IHRoaXMucmVzb2x2ZSh0b2tlbikpO1xuICAgICAgICByZXR1cm4geyByZXNvbHZlZCwgaW5qZWN0aW9ucyB9O1xuICAgIH1cbiAgICBfX2FkZERlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZE1heWJlLCBvdmVycmlkZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5oYXModHlwZU5hbWUpKSB7XG4gICAgICAgICAgICBpZiAoIW92ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHJlc29sdmVkVHlwZSlcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKGBPdmVycmlkaW5nID0+ICR7dGFyZ2V0TmFtZX0gdG8gPT4gJHt0eXBlTmFtZX1gKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHJlc29sdmVkVHlwZSlcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKGBTZXR0aW5nID0+ICR7dGFyZ2V0TmFtZX0gdG8gPT4gJHt0eXBlTmFtZX1gKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc29sdmVkVHlwZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gcmVzb2x2ZWRNYXliZVxuICAgICAgICAgICAgOiByZXNvbHZlZE1heWJlID09IG51bGwgPyB0YXJnZXRcbiAgICAgICAgICAgICAgICA6IC8qIG90aGVyd2lzZSAqLyByZXNvbHZlZE1heWJlO1xuICAgICAgICB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLnNldCh0eXBlTmFtZSwgcmVzb2x2ZWRUeXBlKTtcbiAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUuZGVsZXRlKHR5cGVOYW1lKTtcbiAgICB9XG4gICAgX19vdmVycmlkZURlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZCkge1xuICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykgPyB0YXJnZXQgOiByZXNvbHZlZDtcbiAgICB9XG4gICAgX19wdXJnZUluc3RhbmNlRnJvbUNhY2hlKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbnN0YW5jZUNhY2hlLmRlbGV0ZSh0eXBlTmFtZSk7XG4gICAgfVxuICAgIF9fcmVwbGFjZUluc3RhbmNlSW5DYWNoZSh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fX3B1cmdlSW5zdGFuY2VGcm9tQ2FjaGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZSh0YXJnZXQpO1xuICAgIH1cbiAgICBfX2lzU2luZ2xldG9uSW5zdGFuY2UodHlwZU5hbWUsIHJlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc2luZ2xldG9ucy5oYXModHlwZU5hbWUpIHx8XG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdFRhcmdldFR5cGUocmVzb2x2ZWQpID09PSAnc2luZ2xldG9uJztcbiAgICB9XG4gICAgX19yZWZsZWN0VGFyZ2V0VHlwZShyZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShjb25zdGFudHNfMS5yZWZsZWN0VGFyZ2V0VHlwZSwgcmVzb2x2ZWQpO1xuICAgIH1cbiAgICBfX2NyZWF0ZU9iamVjdCh0YXJnZXQsIGluamVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fX2xvZ2dlci5sb2coJ2NyZWF0aW5nIG9iamVjdCwgdHlwZU5hbWU6JywgdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpKTtcbiAgICAgICAgcmV0dXJuIG5ldyB0YXJnZXQoLi4uaW5qZWN0aW9ucyk7XG4gICAgfVxuICAgIF9fZGlzcG9zZU9iamVjdCh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgY29uc3QgZm4gPSB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQuZGlzcG9zZTtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCAoZm4gPT09IG51bGwgfHwgZm4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZuKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkluamVjdG9yID0gSW5qZWN0b3I7XG47XG5jbGFzcyBJbmplY3RvckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCB0b2tlbnMpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBgVW5hYmxlIHRvIHJlc29sdmUgZGVwZW5kZW5jaWVzIGZvciA9PiAke3RhcmdldC5uYW1lfSwgZGVwcyA9PiAke3Rva2Vucy5tYXAobyA9PiBvLm5hbWUpfWA7XG4gICAgICAgIGNvbnN0IGhlbHAgPSBgUG9zc2libGUgbWlzdXNlIG9mIEBJbmplY3RhYmxlKCkgZGVjb3JhdG9yIG9uIGNsYXNzICR7dGFyZ2V0Lm5hbWV9YDtcbiAgICAgICAgc3VwZXIoYCR7ZXJyb3J9XFxuJHtoZWxwfWApO1xuICAgIH1cbn1cbmNsYXNzIEluamVjdG9yRGVwZW5kZW5jeU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKGBUYXJnZXQgbm90IGZvdW5kOiAke3RhcmdldH1gKTtcbiAgICB9XG59XG5jbGFzcyBJbmplY3RvckdldFR5cGVOYW1lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKGBzb21ldGhpbmcgZnVja3kgZ290IHBhc3NlZCB0byBnZXRUeXBlTmFtZSA9PiAke3RhcmdldH1gKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29tcGFyZSA9IGV4cG9ydHMucHJveGlmeSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY2xhc3MgUHJveGlmeU51bGxUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZnVuY3Rpb24gcHJveGlmeShpbmplY3RvciwgdG9rZW4pIHtcbiAgICBpZiAodG9rZW4gPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgUHJveGlmeU51bGxUb2tlbkVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJveHkoLyogaW5qZWN0b3IucmVzb2x2ZSh0b2tlbikgKi8ge30sIHtcbiAgICAgICAgZ2V0KF8sIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBpbmplY3Rvci5yZXNvbHZlKHRva2VuKTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBjb25zdGFudHNfMS5wcm94eUNvbXBhcmVLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuZXhwb3J0cy5wcm94aWZ5ID0gcHJveGlmeTtcbmNvbnN0IGNvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBhID0gKF9iID0gKChfYSA9IGEpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9KVtjb25zdGFudHNfMS5wcm94eUNvbXBhcmVLZXldKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBhO1xuICAgIGIgPSAoX2QgPSAoKF9jID0gYikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDoge30pW2NvbnN0YW50c18xLnByb3h5Q29tcGFyZUtleV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGI7XG4gICAgcmV0dXJuIE9iamVjdC5pcyhhLCBiKTtcbn07XG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N1ZG9rdVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdWRva3VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VS05ZGFiZDNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZS52YW5pbGxhLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
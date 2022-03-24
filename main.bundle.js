/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/sudoku.nice.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/sudoku.nice.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC */ "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "H1 {\n  background:black;\n  color:white;\n  margin:0px 0px 2px 0px;\n  font-size:20px;\n  padding:2px 1px 5px 1px;\n  text-align:center;\n}\n\nbody {\n  font-family:verdana,helvetica,arial,sans-serif;\n  border:0px; margin:0px; padding:0px;\n\n  background:url(\n      " + ___CSS_LOADER_URL_REPLACEMENT_0___ + "\n  ) repeat;\n}\n\n/* board */\n.sudoku_board {\n  margin:6px auto;\n\n  overflow: hidden;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.sudoku_board .cell {\n  width:11.11%;\n  display: inline-block;\n  float:left;\n  cursor:pointer;\n  text-align: center;\n  overflow: hidden;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n\n  background:white;\n}\n\n.sudoku_board .cell.border_h {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset 0px -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_h.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 black, inset 0px -2px 0 black;\n}\n\n.sudoku_board .cell span {\n  color:#2c3e50;\n  font-size:14px;\n  text-align:middle;\n}\n\n.sudoku_board .cell.selected, .sudoku_board .cell.selected.fix {\n  background:#FFE;\n}\n\n.sudoku_board .cell.selected.current {\n  position:relative;\n  background: #3498db;\n  font-weight:bold;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.sudoku_board .cell.selected.current span {\n  color:white;\n}\n\n.sudoku_board .cell.selected.group {\n  color:blue;\n}\n\n.sudoku_board .cell span.samevalue, .sudoku_board .cell.fix span.samevalue {\n  font-weight:bold;\n  color:#3498db;\n}\n\n.sudoku_board .cell.notvalid, .sudoku_board .cell.selected.notvalid{\n  font-weight:bold;\n  color:white;;\n  background:#e74c3c;\n}\n\n.sudoku_board .cell.fix {\n  background:#ecf0f1;\n  cursor:not-allowed;\n}\n\n.sudoku_board .cell.fix span {\ncolor:#7f8c8d;\n}\n\n.sudoku_board .cell .solution {\nfont-size:10px;\ncolor:#d35400;\n}\n\n.sudoku_board .cell .note {\n  color:#bdc3c7;\n  width:50%;\n  height:50%;\n  display: inline-block;\n  float:left;\n  text-align:center;\n  font-size:14px;\n\n  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.gameover_container .gameover {\n  color:white;\n  font-weight:bold;\n    text-align:center;\n\n  display:block;\n  position:absolute;\n  width:90%;\n  padding:10px;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n\n.restart {\nbackground:#7F8C8D;\ncolor:#ecf0f1;\n}\n\n/* console */\n.board_console_container, .gameover_container {\n  background-color: rgba(127, 140, 141, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n   user-select: none;\n}\n\n.board_console {\n  display:block;\n  position:absolute;\n  width:50%;\n  color:white;\n  background-color: rgba(127, 140, 141, 0.7);\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.board_console .num {\n  width:33.33%;\n  color:#2c3e50;\n  padding: 1px;\n  display: inline-block;\n  font-weight:bold;\n  font-size:24px;\n  text-align: center;\n  cursor:pointer;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n}\n\n\n.board_console .num:hover {\n  color:white;\n  background:#f1c40f;\n}\n\n.board_console .num.remove {\n  width:66.66%;\n}\n\n.board_console .num.note {\n  background:#95a5a6;\n  color:#ecf0f1;\n}\n\n.board_console .num.note:hover {\n  background:#95a5a6;\n  color:#f1c40f;\n}\n\n.board_console .num.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected:hover {\ncolor:white;\n}\n\n.board_console .num.no:hover {\n  color:white;\n  cursor:not-allowed;\n}\n\n.board_console .num.remove:hover {\n  color:white;\n  background:#c0392b;\n}\n\n.statistics {\n  text-align:center;\n}\n\n#sudoku_menu {\n  background-color: black;\n  position: absolute;\n  z-index:2;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n#sudoku_menu ul {\n margin: 0;\n padding: 100px 0px 0px 0px;\n list-style: none;\n}\n\n#sudoku_menu ul li{\nmargin: 0px 50px;\n}\n\n#sudoku_menu ul li a {\ntext-align:center;\npadding: 15px 20px;\nfont-size: 28px;\nfont-weight: bold;\ncolor: white;\ntext-decoration: none;\ndisplay: block;\nborder-bottom: 1px solid #2c3e50;\n}\n\n#sudoku_menu.open-sidebar {\nleft:0px;\n}\n\n#sidebar-toggle {\n  z-index:3;\n  background: #bdc3c7;\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  padding: 22px 18px;\n  float: left;\n}\n\n#sidebar-toggle .bar{\n  display: block;\n  width: 28px;\n  margin-bottom: 4px;\n  height: 4px;\n  background-color: #f0f0f0;\n  border-radius: 1px;\n}\n\n#sidebar-toggle .bar:last-child{\n   margin-bottom: 0;\n}\n\n/*Responsive Stuff*/\n\n@media all and (orientation:portrait) and (min-width: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:60px; }\n  .board_console .num { font-size:60px; }\n}\n\n@media all and (orientation:landscape) and (min-height: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:50px; }\n  .board_console .num { font-size:50px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 1000px){\n  .sudoku_board .cell span { font-size:30px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 640px){\n.sudoku_board .cell span { font-size:24px; }\n.sudoku_board .cell .note { font-size:10px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 470px){\n.sudoku_board .cell span { font-size:16px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 320px){\n.sudoku_board .cell span { font-size:12px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and  (max-width: 240px){\n.sudoku_board .cell span { font-size:10px; }\n}\n", "",{"version":3,"sources":["webpack://./src/sudoku.nice.css"],"names":[],"mappings":"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","sourcesContent":["H1 {\n  background:black;\n  color:white;\n  margin:0px 0px 2px 0px;\n  font-size:20px;\n  padding:2px 1px 5px 1px;\n  text-align:center;\n}\n\nbody {\n  font-family:verdana,helvetica,arial,sans-serif;\n  border:0px; margin:0px; padding:0px;\n\n  background:url(\n      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC\n  ) repeat;\n}\n\n/* board */\n.sudoku_board {\n  margin:6px auto;\n\n  overflow: hidden;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.sudoku_board .cell {\n  width:11.11%;\n  display: inline-block;\n  float:left;\n  cursor:pointer;\n  text-align: center;\n  overflow: hidden;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n\n  background:white;\n}\n\n.sudoku_board .cell.border_h {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset 0px -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_h.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 black, inset 0px -2px 0 black;\n}\n\n.sudoku_board .cell span {\n  color:#2c3e50;\n  font-size:14px;\n  text-align:middle;\n}\n\n.sudoku_board .cell.selected, .sudoku_board .cell.selected.fix {\n  background:#FFE;\n}\n\n.sudoku_board .cell.selected.current {\n  position:relative;\n  background: #3498db;\n  font-weight:bold;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.sudoku_board .cell.selected.current span {\n  color:white;\n}\n\n.sudoku_board .cell.selected.group {\n  color:blue;\n}\n\n.sudoku_board .cell span.samevalue, .sudoku_board .cell.fix span.samevalue {\n  font-weight:bold;\n  color:#3498db;\n}\n\n.sudoku_board .cell.notvalid, .sudoku_board .cell.selected.notvalid{\n  font-weight:bold;\n  color:white;;\n  background:#e74c3c;\n}\n\n.sudoku_board .cell.fix {\n  background:#ecf0f1;\n  cursor:not-allowed;\n}\n\n.sudoku_board .cell.fix span {\ncolor:#7f8c8d;\n}\n\n.sudoku_board .cell .solution {\nfont-size:10px;\ncolor:#d35400;\n}\n\n.sudoku_board .cell .note {\n  color:#bdc3c7;\n  width:50%;\n  height:50%;\n  display: inline-block;\n  float:left;\n  text-align:center;\n  font-size:14px;\n\n  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.gameover_container .gameover {\n  color:white;\n  font-weight:bold;\n    text-align:center;\n\n  display:block;\n  position:absolute;\n  width:90%;\n  padding:10px;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n\n.restart {\nbackground:#7F8C8D;\ncolor:#ecf0f1;\n}\n\n/* console */\n.board_console_container, .gameover_container {\n  background-color: rgba(127, 140, 141, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n   user-select: none;\n}\n\n.board_console {\n  display:block;\n  position:absolute;\n  width:50%;\n  color:white;\n  background-color: rgba(127, 140, 141, 0.7);\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.board_console .num {\n  width:33.33%;\n  color:#2c3e50;\n  padding: 1px;\n  display: inline-block;\n  font-weight:bold;\n  font-size:24px;\n  text-align: center;\n  cursor:pointer;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n}\n\n\n.board_console .num:hover {\n  color:white;\n  background:#f1c40f;\n}\n\n.board_console .num.remove {\n  width:66.66%;\n}\n\n.board_console .num.note {\n  background:#95a5a6;\n  color:#ecf0f1;\n}\n\n.board_console .num.note:hover {\n  background:#95a5a6;\n  color:#f1c40f;\n}\n\n.board_console .num.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected:hover {\ncolor:white;\n}\n\n.board_console .num.no:hover {\n  color:white;\n  cursor:not-allowed;\n}\n\n.board_console .num.remove:hover {\n  color:white;\n  background:#c0392b;\n}\n\n.statistics {\n  text-align:center;\n}\n\n#sudoku_menu {\n  background-color: black;\n  position: absolute;\n  z-index:2;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n#sudoku_menu ul {\n margin: 0;\n padding: 100px 0px 0px 0px;\n list-style: none;\n}\n\n#sudoku_menu ul li{\nmargin: 0px 50px;\n}\n\n#sudoku_menu ul li a {\ntext-align:center;\npadding: 15px 20px;\nfont-size: 28px;\nfont-weight: bold;\ncolor: white;\ntext-decoration: none;\ndisplay: block;\nborder-bottom: 1px solid #2c3e50;\n}\n\n#sudoku_menu.open-sidebar {\nleft:0px;\n}\n\n#sidebar-toggle {\n  z-index:3;\n  background: #bdc3c7;\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  padding: 22px 18px;\n  float: left;\n}\n\n#sidebar-toggle .bar{\n  display: block;\n  width: 28px;\n  margin-bottom: 4px;\n  height: 4px;\n  background-color: #f0f0f0;\n  border-radius: 1px;\n}\n\n#sidebar-toggle .bar:last-child{\n   margin-bottom: 0;\n}\n\n/*Responsive Stuff*/\n\n@media all and (orientation:portrait) and (min-width: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:60px; }\n  .board_console .num { font-size:60px; }\n}\n\n@media all and (orientation:landscape) and (min-height: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:50px; }\n  .board_console .num { font-size:50px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 1000px){\n  .sudoku_board .cell span { font-size:30px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 640px){\n.sudoku_board .cell span { font-size:24px; }\n.sudoku_board .cell .note { font-size:10px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 470px){\n.sudoku_board .cell span { font-size:16px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 320px){\n.sudoku_board .cell span { font-size:12px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and  (max-width: 240px){\n.sudoku_board .cell span { font-size:10px; }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/sudoku.nice.css":
/*!*****************************!*\
  !*** ./src/sudoku.nice.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_sudoku_nice_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./sudoku.nice.css */ "./node_modules/css-loader/dist/cjs.js!./src/sudoku.nice.css");

      
      
      
      
      
      
      
      
      

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
const VanillaJsView_1 = __webpack_require__(/*! ./library/VanillaJsView */ "./src/library/VanillaJsView.ts");
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
const VanillaJsView_1 = __webpack_require__(/*! ./library/VanillaJsView */ "./src/library/VanillaJsView.ts");
__webpack_require__(/*! ./sudoku.nice.css */ "./src/sudoku.nice.css");
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
    getTileVectorForIndex(index) {
        return [Math.floor(index % 9), Math.floor(index / 9)];
    }
    getIndexForTileVector([x, y]) {
        return y * 9 + x;
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
    cellSize = (0, vec2_1.vec2)(25);
    flagCharacter = '🚩';
    mineCharacter = '💣';
    defaultDifficulty = GameDifficulty_1.GameDifficulty.easy;
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DOMInputProvider = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const events_1 = __importDefault(__webpack_require__(/*! events */ "./node_modules/events/events.js"));
const ISudokuTS_1 = __webpack_require__(/*! ../interface/ISudokuTS */ "./src/interface/ISudokuTS.ts");
let DOMInputProvider = class DOMInputProvider {
    sudoku;
    constructor(sudoku) {
        this.sudoku = sudoku;
        document.addEventListener('click', this.onClickCell);
        document.addEventListener('keypress', this.onKeyPress);
    }
    async getNextInput() {
        return new Promise((resolve) => {
            this.emitter.once('data', data => resolve(data));
        });
    }
    onClickCell = (e) => {
        if (e.target instanceof HTMLElement) {
            if (e.target.classList.contains('cell')) {
                const idx = Number(e.target.getAttribute('idx'));
                this.emitData({ action: 'select', cellIndex: idx });
            }
            if (e.target.parentElement?.classList.contains('cell')) {
                const idx = Number(e.target.parentElement.getAttribute('idx'));
                this.emitData({ action: 'select', cellIndex: idx });
            }
        }
    };
    onKeyPress = (e) => {
        if (this.sudoku.DIGITS.includes(e.key))
            this.emitData({ action: 'keypress', key: e.key });
    };
    emitData(data) {
        console.log('Input', data);
        this.emitter.emit('data', data);
    }
    emitter = new events_1.default();
};
DOMInputProvider = __decorate([
    (0, inject_1.Singleton)(),
    __metadata("design:paramtypes", [typeof (_a = typeof ISudokuTS_1.ISudokuTS !== "undefined" && ISudokuTS_1.ISudokuTS) === "function" ? _a : Object])
], DOMInputProvider);
exports.DOMInputProvider = DOMInputProvider;
DOMInputProvider["@@godsmack/di:static-deps-prop"] = ["ISudokuTS"];


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
            .map((item, i) => game[i] === '.' ? item : '')
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
const sudoku = new SudokuTS();
const game = sudoku.generate('easy');
game;
const result = sudoku.solve(game);
result;
const candidates = sudoku
    .getCandidates(game)
    .flat();
const remaining = [...new Set(candidates.map((candidate, i) => {
        if (game[i] === '.')
            return candidate;
    }).join('').split(''))].sort();
console.log(candidates);
console.log(remaining);
sudoku.print_board(game);


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
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameDifficulty_1 = __webpack_require__(/*! ../enums/GameDifficulty */ "./src/enums/GameDifficulty.ts");
const IGamePubSub_1 = __webpack_require__(/*! ../interface/IGamePubSub */ "./src/interface/IGamePubSub.ts");
const IGameLogic_1 = __webpack_require__(/*! ../interface/IGameLogic */ "./src/interface/IGameLogic.ts");
const IGameManager_1 = __webpack_require__(/*! ../interface/IGameManager */ "./src/interface/IGameManager.ts");
const IGameRunner_1 = __webpack_require__(/*! ../interface/IGameRunner */ "./src/interface/IGameRunner.ts");
const GameSettings_1 = __webpack_require__(/*! ./GameSettings */ "./src/library/GameSettings.ts");
const vec2_1 = __webpack_require__(/*! ../utils/vec2 */ "./src/utils/vec2.ts");
let VanillaJsView = class VanillaJsView {
    gameManager;
    logic;
    runner;
    events;
    config;
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
        this.board = document.querySelector('.sudoku_board');
        this.ctrl = document.querySelector('#controls');
        this.form = document.querySelector('form');
        this.diff = document.querySelector('form select');
        this.root = document.querySelector(':root');
    }
    getCellDisplayValue(model, cell) {
        return cell.value === '.' ? '' : cell.value;
    }
    renderCell(model, cell) {
        const el = document.createElement('div');
        el.classList.add('cell');
        // el.style.height = '25px'
        el.style.height = '62px';
        const [x, y] = this.logic.getTileVectorForIndex(cell.index);
        const isSelected = model.selected === cell.index;
        el.classList.toggle('fix', cell.isHint);
        el.classList.toggle('selected', isSelected);
        el.classList.toggle('current', isSelected);
        el.classList.toggle('group', isSelected);
        el.classList.toggle('border_v', [3, 6].includes(x + 1));
        el.classList.toggle('border_h', [3, 6].includes(y + 1));
        el.setAttribute('x', String(x + 1));
        el.setAttribute('y', String(y + 1));
        el.setAttribute('idx', String(cell.index));
        const span = document.createElement('span');
        // span.style.lineHeight = '25px'
        span.style.lineHeight = '62px';
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
        // console.log('renderBoard', model);
        this.board.style.width = "553px";
        // this.board.style.width = "220px";
        this.board.innerHTML = this.renderCellList(model);
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
    eventHandler = (event) => {
        // console.log('eventHandler', event);
        switch (event.type) {
            case 'config-changed':
                this.setCellSize(this.config);
                this.setCellCharacters(this.config);
                break;
            case 'update':
            case 'begin':
            case 'end':
                this.renderBoard(event.payload);
                break;
        }
    };
    registerListeners() {
        this.events
            .subscribe(this.eventHandler);
        // this.form.addEventListener(
        //   'submit',
        //   this.submitHandler
        // );
        return this;
    }
    unregisterListeners() {
        this.events
            .unsubscribe(this.eventHandler);
        // this.form.removeEventListener(
        //   'submit',
        //   this.submitHandler
        // );
        return this;
    }
    initializeControls() {
        this.diff.replaceChildren(...(Object.keys(GameDifficulty_1.GameDifficulty)).map(value => {
            const el = document.createElement('option');
            el.setAttribute('value', String(value));
            el.textContent = value;
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
    run() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxxV0FBaUs7QUFDN00sOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix5Q0FBeUMsc0ZBQStCO0FBQ3hFO0FBQ0EsOENBQThDLHFCQUFxQixnQkFBZ0IsMkJBQTJCLG1CQUFtQiw0QkFBNEIsc0JBQXNCLEdBQUcsVUFBVSxtREFBbUQsZ0JBQWdCLFlBQVksWUFBWSxvRkFBb0YsR0FBRyxnQ0FBZ0Msb0JBQW9CLHVCQUF1QixnQ0FBZ0MsMkJBQTJCLDBCQUEwQixzQkFBc0IsMENBQTBDLEdBQUcseUJBQXlCLGlCQUFpQiwwQkFBMEIsZUFBZSxtQkFBbUIsdUJBQXVCLHFCQUFxQixzQ0FBc0MsdUVBQXVFLHVEQUF1RCwwQ0FBMEMsdUJBQXVCLEdBQUcsa0NBQWtDLG9FQUFvRSxHQUFHLGtDQUFrQyxnRUFBZ0UsR0FBRywyQ0FBMkMsc0ZBQXNGLEdBQUcsOEJBQThCLGtCQUFrQixtQkFBbUIsc0JBQXNCLEdBQUcsb0VBQW9FLG9CQUFvQixHQUFHLDBDQUEwQyxzQkFBc0Isd0JBQXdCLHFCQUFxQix3Q0FBd0MsR0FBRywrQ0FBK0MsZ0JBQWdCLEdBQUcsd0NBQXdDLGVBQWUsR0FBRyxnRkFBZ0YscUJBQXFCLGtCQUFrQixHQUFHLHdFQUF3RSxxQkFBcUIsaUJBQWlCLHVCQUF1QixHQUFHLDZCQUE2Qix1QkFBdUIsdUJBQXVCLEdBQUcsa0NBQWtDLGdCQUFnQixHQUFHLG1DQUFtQyxpQkFBaUIsZ0JBQWdCLEdBQUcsK0JBQStCLGtCQUFrQixjQUFjLGVBQWUsMEJBQTBCLGVBQWUsc0JBQXNCLG1CQUFtQixxQ0FBcUMsa0NBQWtDLDZCQUE2QixHQUFHLG1DQUFtQyxnQkFBZ0IscUJBQXFCLHdCQUF3QixvQkFBb0Isc0JBQXNCLGNBQWMsaUJBQWlCLDBDQUEwQyxHQUFHLGdCQUFnQixxQkFBcUIsZ0JBQWdCLEdBQUcsa0VBQWtFLCtDQUErQyx1QkFBdUIsV0FBVyxZQUFZLGdCQUFnQixpQkFBaUIsaUNBQWlDLDRCQUE0QiwyQkFBMkIsdUJBQXVCLEdBQUcsb0JBQW9CLGtCQUFrQixzQkFBc0IsY0FBYyxnQkFBZ0IsK0NBQStDLHdDQUF3QyxHQUFHLHlCQUF5QixpQkFBaUIsa0JBQWtCLGlCQUFpQiwwQkFBMEIscUJBQXFCLG1CQUFtQix1QkFBdUIsbUJBQW1CLHNDQUFzQyx1RUFBdUUsdURBQXVELDBDQUEwQyxHQUFHLGlDQUFpQyxnQkFBZ0IsdUJBQXVCLEdBQUcsZ0NBQWdDLGlCQUFpQixHQUFHLDhCQUE4Qix1QkFBdUIsa0JBQWtCLEdBQUcsb0NBQW9DLHVCQUF1QixrQkFBa0IsR0FBRyxrQ0FBa0MsdUJBQXVCLHdDQUF3QyxHQUFHLHVDQUF1Qyx1QkFBdUIsd0NBQXdDLEdBQUcsNkNBQTZDLGNBQWMsR0FBRyxrQ0FBa0MsZ0JBQWdCLHVCQUF1QixHQUFHLHNDQUFzQyxnQkFBZ0IsdUJBQXVCLEdBQUcsaUJBQWlCLHNCQUFzQixHQUFHLGtCQUFrQiw0QkFBNEIsdUJBQXVCLGNBQWMsZ0JBQWdCLGlCQUFpQixnQkFBZ0IsMkJBQTJCLGdDQUFnQyxHQUFHLHFCQUFxQixhQUFhLDhCQUE4QixvQkFBb0IsR0FBRyx1QkFBdUIsbUJBQW1CLEdBQUcsMEJBQTBCLG9CQUFvQixxQkFBcUIsa0JBQWtCLG9CQUFvQixlQUFlLHdCQUF3QixpQkFBaUIsbUNBQW1DLEdBQUcsK0JBQStCLFdBQVcsR0FBRyxxQkFBcUIsY0FBYyx3QkFBd0IsdUJBQXVCLG1CQUFtQix1QkFBdUIsdUJBQXVCLGdCQUFnQixHQUFHLHlCQUF5QixtQkFBbUIsZ0JBQWdCLHVCQUF1QixnQkFBZ0IsOEJBQThCLHVCQUF1QixHQUFHLG9DQUFvQyxzQkFBc0IsR0FBRyx5RkFBeUYsU0FBUyxpQkFBaUIsa0JBQWtCLGlCQUFpQiwrQkFBK0IsaUJBQWlCLDBCQUEwQixpQkFBaUIsR0FBRyxtRUFBbUUsU0FBUyxpQkFBaUIsa0JBQWtCLGlCQUFpQiwrQkFBK0IsaUJBQWlCLDBCQUEwQixpQkFBaUIsR0FBRyxrRUFBa0UsK0JBQStCLGlCQUFpQixHQUFHLGlFQUFpRSw2QkFBNkIsaUJBQWlCLDhCQUE4QixpQkFBaUIsR0FBRyxpRUFBaUUsNkJBQTZCLGlCQUFpQiw4QkFBOEIsZ0JBQWdCLEdBQUcsaUVBQWlFLDZCQUE2QixpQkFBaUIsOEJBQThCLGdCQUFnQixHQUFHLGtFQUFrRSw2QkFBNkIsaUJBQWlCLEdBQUcsU0FBUyxzRkFBc0YsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksZ0NBQWdDLE9BQU8sS0FBSyxNQUFNLFVBQVUsS0FBSyxXQUFXLGFBQWEsYUFBYSxhQUFhLGFBQWEsY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFlBQVksY0FBYyx5QkFBeUIseUJBQXlCLGNBQWMsY0FBYyxhQUFhLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFlBQVksWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFdBQVcsWUFBWSxRQUFRLEtBQUssWUFBWSxXQUFXLE1BQU0sVUFBVSxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxXQUFXLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsV0FBVyxZQUFZLFlBQVksd0JBQXdCLHlCQUF5QixjQUFjLGFBQWEsUUFBUSxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxNQUFNLEtBQUssWUFBWSxXQUFXLE1BQU0sS0FBSyxZQUFZLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLFdBQVcsWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLE1BQU0sS0FBSyxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxPQUFPLEtBQUssWUFBWSxPQUFPLGFBQWEsTUFBTSxvQkFBb0IscUJBQXFCLHVCQUF1Qix1QkFBdUIsT0FBTyxLQUFLLG9CQUFvQixxQkFBcUIsdUJBQXVCLHVCQUF1QixPQUFPLEtBQUssc0JBQXNCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsdUJBQXVCLE9BQU8sS0FBSyxzQkFBc0IsOEJBQThCLHFCQUFxQixnQkFBZ0IsMkJBQTJCLG1CQUFtQiw0QkFBNEIsc0JBQXNCLEdBQUcsVUFBVSxtREFBbUQsZ0JBQWdCLFlBQVksWUFBWSw0Q0FBNEMsNElBQTRJLEdBQUcsZ0NBQWdDLG9CQUFvQix1QkFBdUIsZ0NBQWdDLDJCQUEyQiwwQkFBMEIsc0JBQXNCLDBDQUEwQyxHQUFHLHlCQUF5QixpQkFBaUIsMEJBQTBCLGVBQWUsbUJBQW1CLHVCQUF1QixxQkFBcUIsc0NBQXNDLHVFQUF1RSx1REFBdUQsMENBQTBDLHVCQUF1QixHQUFHLGtDQUFrQyxvRUFBb0UsR0FBRyxrQ0FBa0MsZ0VBQWdFLEdBQUcsMkNBQTJDLHNGQUFzRixHQUFHLDhCQUE4QixrQkFBa0IsbUJBQW1CLHNCQUFzQixHQUFHLG9FQUFvRSxvQkFBb0IsR0FBRywwQ0FBMEMsc0JBQXNCLHdCQUF3QixxQkFBcUIsd0NBQXdDLEdBQUcsK0NBQStDLGdCQUFnQixHQUFHLHdDQUF3QyxlQUFlLEdBQUcsZ0ZBQWdGLHFCQUFxQixrQkFBa0IsR0FBRyx3RUFBd0UscUJBQXFCLGlCQUFpQix1QkFBdUIsR0FBRyw2QkFBNkIsdUJBQXVCLHVCQUF1QixHQUFHLGtDQUFrQyxnQkFBZ0IsR0FBRyxtQ0FBbUMsaUJBQWlCLGdCQUFnQixHQUFHLCtCQUErQixrQkFBa0IsY0FBYyxlQUFlLDBCQUEwQixlQUFlLHNCQUFzQixtQkFBbUIscUNBQXFDLGtDQUFrQyw2QkFBNkIsR0FBRyxtQ0FBbUMsZ0JBQWdCLHFCQUFxQix3QkFBd0Isb0JBQW9CLHNCQUFzQixjQUFjLGlCQUFpQiwwQ0FBMEMsR0FBRyxnQkFBZ0IscUJBQXFCLGdCQUFnQixHQUFHLGtFQUFrRSwrQ0FBK0MsdUJBQXVCLFdBQVcsWUFBWSxnQkFBZ0IsaUJBQWlCLGlDQUFpQyw0QkFBNEIsMkJBQTJCLHVCQUF1QixHQUFHLG9CQUFvQixrQkFBa0Isc0JBQXNCLGNBQWMsZ0JBQWdCLCtDQUErQyx3Q0FBd0MsR0FBRyx5QkFBeUIsaUJBQWlCLGtCQUFrQixpQkFBaUIsMEJBQTBCLHFCQUFxQixtQkFBbUIsdUJBQXVCLG1CQUFtQixzQ0FBc0MsdUVBQXVFLHVEQUF1RCwwQ0FBMEMsR0FBRyxpQ0FBaUMsZ0JBQWdCLHVCQUF1QixHQUFHLGdDQUFnQyxpQkFBaUIsR0FBRyw4QkFBOEIsdUJBQXVCLGtCQUFrQixHQUFHLG9DQUFvQyx1QkFBdUIsa0JBQWtCLEdBQUcsa0NBQWtDLHVCQUF1Qix3Q0FBd0MsR0FBRyx1Q0FBdUMsdUJBQXVCLHdDQUF3QyxHQUFHLDZDQUE2QyxjQUFjLEdBQUcsa0NBQWtDLGdCQUFnQix1QkFBdUIsR0FBRyxzQ0FBc0MsZ0JBQWdCLHVCQUF1QixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxrQkFBa0IsNEJBQTRCLHVCQUF1QixjQUFjLGdCQUFnQixpQkFBaUIsZ0JBQWdCLDJCQUEyQixnQ0FBZ0MsR0FBRyxxQkFBcUIsYUFBYSw4QkFBOEIsb0JBQW9CLEdBQUcsdUJBQXVCLG1CQUFtQixHQUFHLDBCQUEwQixvQkFBb0IscUJBQXFCLGtCQUFrQixvQkFBb0IsZUFBZSx3QkFBd0IsaUJBQWlCLG1DQUFtQyxHQUFHLCtCQUErQixXQUFXLEdBQUcscUJBQXFCLGNBQWMsd0JBQXdCLHVCQUF1QixtQkFBbUIsdUJBQXVCLHVCQUF1QixnQkFBZ0IsR0FBRyx5QkFBeUIsbUJBQW1CLGdCQUFnQix1QkFBdUIsZ0JBQWdCLDhCQUE4Qix1QkFBdUIsR0FBRyxvQ0FBb0Msc0JBQXNCLEdBQUcseUZBQXlGLFNBQVMsaUJBQWlCLGtCQUFrQixpQkFBaUIsK0JBQStCLGlCQUFpQiwwQkFBMEIsaUJBQWlCLEdBQUcsbUVBQW1FLFNBQVMsaUJBQWlCLGtCQUFrQixpQkFBaUIsK0JBQStCLGlCQUFpQiwwQkFBMEIsaUJBQWlCLEdBQUcsa0VBQWtFLCtCQUErQixpQkFBaUIsR0FBRyxpRUFBaUUsNkJBQTZCLGlCQUFpQiw4QkFBOEIsaUJBQWlCLEdBQUcsaUVBQWlFLDZCQUE2QixpQkFBaUIsOEJBQThCLGdCQUFnQixHQUFHLGlFQUFpRSw2QkFBNkIsaUJBQWlCLDhCQUE4QixnQkFBZ0IsR0FBRyxrRUFBa0UsNkJBQTZCLGlCQUFpQixHQUFHLHFCQUFxQjtBQUNub2Y7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNUdkMsTUFBK0Y7QUFDL0YsTUFBcUY7QUFDckYsTUFBNEY7QUFDNUYsTUFBK0c7QUFDL0csTUFBd0c7QUFDeEcsTUFBd0c7QUFDeEcsTUFBeUc7QUFDekc7QUFDQTs7QUFFQTs7QUFFQSw0QkFBNEIscUdBQW1CO0FBQy9DLHdCQUF3QixrSEFBYTs7QUFFckMsdUJBQXVCLHVHQUFhO0FBQ3BDO0FBQ0EsaUJBQWlCLCtGQUFNO0FBQ3ZCLDZCQUE2QixzR0FBa0I7O0FBRS9DLGFBQWEsMEdBQUcsQ0FBQyw0RkFBTzs7OztBQUltRDtBQUMzRSxPQUFPLGlFQUFlLDRGQUFPLElBQUksbUdBQWMsR0FBRyxtR0FBYyxZQUFZLEVBQUM7Ozs7Ozs7Ozs7O0FDMUJoRTtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxpQkFBaUI7QUFDakIsaUJBQWlCLG1CQUFPLENBQUMsNkRBQWtCO0FBQzNDLHdCQUF3QixtQkFBTyxDQUFDLCtEQUF5QjtBQUN6RCxxQkFBcUIsbUJBQU8sQ0FBQyx5REFBc0I7QUFDbkQsc0JBQXNCLG1CQUFPLENBQUMsMkRBQXVCO0FBQ3JELHFCQUFxQixtQkFBTyxDQUFDLHlEQUFzQjtBQUNuRCxvQkFBb0IsbUJBQU8sQ0FBQyx1REFBcUI7QUFDakQsdUJBQXVCLG1CQUFPLENBQUMsNkRBQXdCO0FBQ3ZELG1CQUFtQixtQkFBTyxDQUFDLHFEQUFvQjtBQUMvQyx3QkFBd0IsbUJBQU8sQ0FBQywrREFBeUI7QUFDekQsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7O0FDcEJhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyw4Q0FBOEMsc0JBQXNCLEtBQUs7Ozs7Ozs7Ozs7O0FDWDdEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsb0NBQW9DLGlCQUFpQixLQUFLOzs7Ozs7Ozs7OztBQ1Y5QztBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxtQkFBTyxDQUFDLG9FQUFrQjtBQUMxQixvQkFBb0IsbUJBQU8sQ0FBQyx1Q0FBYTtBQUN6Qyx3QkFBd0IsbUJBQU8sQ0FBQywrREFBeUI7QUFDekQsbUJBQU8sQ0FBQyxnREFBbUI7QUFDM0I7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1JhO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDOzs7Ozs7Ozs7OztBQ0RoRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7QUNEaEQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDRGhEO0FBQ2IsOENBQTZDLEVBQUUsYUFBYSxFQUFDOzs7Ozs7Ozs7OztBQ0RoRDtBQUNiLDhDQUE2QyxFQUFFLGFBQWEsRUFBQzs7Ozs7Ozs7Ozs7QUNEaEQ7QUFDYiw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7Ozs7Ozs7Ozs7O0FDRGhEO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsaUJBQWlCLG1CQUFPLENBQUMsNkRBQWtCO0FBQzNDLGlCQUFpQixtQkFBTyxDQUFDLCtDQUFRO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCOzs7Ozs7Ozs7OztBQzNCTDtBQUNiO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0QsaUJBQWlCO0FBQ2pCLGlCQUFpQixtQkFBTyxDQUFDLDZEQUFrQjtBQUMzQyxvQkFBb0IsbUJBQU8sQ0FBQyxvREFBb0I7QUFDaEQsaUJBQWlCLG1CQUFPLENBQUMsOENBQWlCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsV0FBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7Ozs7Ozs7Ozs7O0FDM0VKO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG1CQUFtQjtBQUNuQixpQkFBaUIsbUJBQU8sQ0FBQyw2REFBa0I7QUFDM0Msb0JBQW9CLG1CQUFPLENBQUMsb0RBQW9CO0FBQ2hELHFCQUFxQixtQkFBTyxDQUFDLDhEQUF5QjtBQUN0RCxvQkFBb0IsbUJBQU8sQ0FBQyw0REFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CO0FBQ25COzs7Ozs7Ozs7OztBQ3pDYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QyxRQUFRO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxrQkFBa0I7QUFDbEIsaUJBQWlCLG1CQUFPLENBQUMsNkRBQWtCO0FBQzNDLG9CQUFvQixtQkFBTyxDQUFDLG9EQUFvQjtBQUNoRCx1QkFBdUIsbUJBQU8sQ0FBQyxrRUFBMkI7QUFDMUQsc0JBQXNCLG1CQUFPLENBQUMsZ0VBQTBCO0FBQ3hELHlCQUF5QixtQkFBTyxDQUFDLHNFQUE2QjtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsZUFBZTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7Ozs7Ozs7Ozs7O0FDOUNhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQTZDLEVBQUUsYUFBYSxFQUFDO0FBQzdELG9CQUFvQjtBQUNwQixpQkFBaUIsbUJBQU8sQ0FBQyw2REFBa0I7QUFDM0MseUJBQXlCLG1CQUFPLENBQUMsOERBQXlCO0FBQzFELHNCQUFzQixtQkFBTyxDQUFDLGdFQUEwQjtBQUN4RCxlQUFlLG1CQUFPLENBQUMsMENBQWU7QUFDdEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7Ozs7Ozs7Ozs7O0FDaERhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDO0FBQzdDO0FBQ0E7QUFDQSw4Q0FBNkMsRUFBRSxhQUFhLEVBQUM7QUFDN0Qsd0JBQXdCO0FBQ3hCLGlCQUFpQixtQkFBTyxDQUFDLDZEQUFrQjtBQUMzQyxpQ0FBaUMsbUJBQU8sQ0FBQywrQ0FBUTtBQUNqRCxvQkFBb0IsbUJBQU8sQ0FBQyw0REFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxrQ0FBa0M7QUFDbEU7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGtDQUFrQztBQUNsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdDQUFnQztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCO0FBQ3hCOzs7Ozs7Ozs7OztBQzFEYTtBQUNiO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFFBQVE7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhDQUE2QyxFQUFFLGFBQWEsRUFBQztBQUM3RCxnQkFBZ0I7QUFDaEIsaUJBQWlCLG1CQUFPLENBQUMsNkRBQWtCO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWLFVBQVU7QUFDVixhQUFhO0FBQ2IsV0FBVztBQUNYLHNCQUFzQjtBQUN0QixzQkFBc0I7QUFDdEIsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNkJBQTZCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLE9BQU87QUFDL0IsNEJBQTRCLE9BQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLDhCQUE4QjtBQUM5QixrQ0FBa0M7QUFDbEMsa0NBQWtDO0FBQ2xDO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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ekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsK0JBQStCLHdDQUF3QztXQUN2RTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlCQUFpQixxQkFBcUI7V0FDdEM7V0FDQTtXQUNBLGtCQUFrQixxQkFBcUI7V0FDdkM7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7Ozs7O1dDM0JBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7Ozs7VUVoREE7VUFDQTtVQUNBO1VBQ0E7VUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3N1ZG9rdS8uL3NyYy9zdWRva3UubmljZS5jc3MiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3N1ZG9rdS5uaWNlLmNzcz8yNzllIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9jb250YWluZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2VudW1zL0dhbWVEaWZmaWN1bHR5LnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9lbnVtcy9HYW1lU3RhdGUudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2dhbWUudmFuaWxsYS50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lHYW1lTG9naWMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JR2FtZVB1YlN1Yi50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lHYW1lUnVubmVyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSUlucHV0UHJvdmlkZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JU3Vkb2t1VFMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZUV2ZW50cy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9HYW1lTG9naWMudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZU1hbmFnZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvR2FtZVJ1bm5lci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9HYW1lU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2xpYnJhcnkvSW5wdXRQcm92aWRlci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9TdWRva3VUUy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9WYW5pbGxhSnNWaWV3LnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy91dGlscy9hc3NlcnQudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3V0aWxzL3ZlYzIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2NvbnN0YW50cy5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9JbmplY3RhYmxlLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5LmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL1NlcnZpY2UuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvU2luZ2xldG9uLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL2luZGV4LmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9pbmRleC5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvaW50ZXJmYWNlL0lDb250YWluZXIuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2ludGVyZmFjZS9JSW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2xpYnJhcnkvQ29udGFpbmVyLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9saWJyYXJ5L0luamVjdG9yLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9wcm94aWZ5LmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC90eXBlcy5qcyIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9jaHVuayBsb2FkZWQiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL2JlZm9yZS1zdGFydHVwIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBb0FBQUFLQ0FZQUFBQ05Ncys5QUFBQUlVbEVRVlFZVjJOODl1cnRmd1lpQUNOSW9aU1lNQ01odGFNSzhZWVEwY0VEQUc1eUo4ZUxSaFRmQUFBQUFFbEZUa1N1UW1DQ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkgxIHtcXG4gIGJhY2tncm91bmQ6YmxhY2s7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIG1hcmdpbjowcHggMHB4IDJweCAwcHg7XFxuICBmb250LXNpemU6MjBweDtcXG4gIHBhZGRpbmc6MnB4IDFweCA1cHggMXB4O1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbmJvZHkge1xcbiAgZm9udC1mYW1pbHk6dmVyZGFuYSxoZWx2ZXRpY2EsYXJpYWwsc2Fucy1zZXJpZjtcXG4gIGJvcmRlcjowcHg7IG1hcmdpbjowcHg7IHBhZGRpbmc6MHB4O1xcblxcbiAgYmFja2dyb3VuZDp1cmwoXFxuICAgICAgXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCJcXG4gICkgcmVwZWF0O1xcbn1cXG5cXG4vKiBib2FyZCAqL1xcbi5zdWRva3VfYm9hcmQge1xcbiAgbWFyZ2luOjZweCBhdXRvO1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgdXNlci1zZWxlY3Q6IG5vbmU7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCB7XFxuICB3aWR0aDoxMS4xMSU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDpsZWZ0O1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzc7XFxuXFxuICBiYWNrZ3JvdW5kOndoaXRlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl9oIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAwcHggLTJweCAwIDAgIzM0NDk1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfdiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgLTJweCAwIDAgIzM0NDk1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfaC5ib3JkZXJfdiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgLTJweCAwIDAgYmxhY2ssIGluc2V0IDBweCAtMnB4IDAgYmxhY2s7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7XFxuICBjb2xvcjojMmMzZTUwO1xcbiAgZm9udC1zaXplOjE0cHg7XFxuICB0ZXh0LWFsaWduOm1pZGRsZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZCwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5maXgge1xcbiAgYmFja2dyb3VuZDojRkZFO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmN1cnJlbnQge1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmN1cnJlbnQgc3BhbiB7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5ncm91cCB7XFxuICBjb2xvcjpibHVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4uc2FtZXZhbHVlLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCBzcGFuLnNhbWV2YWx1ZSB7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgY29sb3I6IzM0OThkYjtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ub3R2YWxpZCwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5ub3R2YWxpZHtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBjb2xvcjp3aGl0ZTs7XFxuICBiYWNrZ3JvdW5kOiNlNzRjM2M7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHtcXG4gIGJhY2tncm91bmQ6I2VjZjBmMTtcXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXggc3BhbiB7XFxuY29sb3I6IzdmOGM4ZDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAuc29sdXRpb24ge1xcbmZvbnQtc2l6ZToxMHB4O1xcbmNvbG9yOiNkMzU0MDA7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUge1xcbiAgY29sb3I6I2JkYzNjNztcXG4gIHdpZHRoOjUwJTtcXG4gIGhlaWdodDo1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDpsZWZ0O1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICBmb250LXNpemU6MTRweDtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZ2FtZW92ZXJfY29udGFpbmVyIC5nYW1lb3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcblxcbiAgZGlzcGxheTpibG9jaztcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6OTAlO1xcbiAgcGFkZGluZzoxMHB4O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcblxcbi5yZXN0YXJ0IHtcXG5iYWNrZ3JvdW5kOiM3RjhDOEQ7XFxuY29sb3I6I2VjZjBmMTtcXG59XFxuXFxuLyogY29uc29sZSAqL1xcbi5ib2FyZF9jb25zb2xlX2NvbnRhaW5lciwgLmdhbWVvdmVyX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMTQwLCAxNDEsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUge1xcbiAgZGlzcGxheTpibG9jaztcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6NTAlO1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMTQwLCAxNDEsIDAuNyk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bSB7XFxuICB3aWR0aDozMy4zMyU7XFxuICBjb2xvcjojMmMzZTUwO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGZvbnQtc2l6ZToyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNztcXG59XFxuXFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bTpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5yZW1vdmUge1xcbiAgd2lkdGg6NjYuNjYlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUge1xcbiAgYmFja2dyb3VuZDojOTVhNWE2O1xcbiAgY29sb3I6I2VjZjBmMTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6Izk1YTVhNjtcXG4gIGNvbG9yOiNmMWM0MGY7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlLnNlbGVjdGVkOmhvdmVyIHtcXG5jb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ubzpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5yZW1vdmU6aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kOiNjMDM5MmI7XFxufVxcblxcbi5zdGF0aXN0aWNzIHtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OjI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIHtcXG4gbWFyZ2luOiAwO1xcbiBwYWRkaW5nOiAxMDBweCAwcHggMHB4IDBweDtcXG4gbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIGxpe1xcbm1hcmdpbjogMHB4IDUwcHg7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCBsaSBhIHtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG5wYWRkaW5nOiAxNXB4IDIwcHg7XFxuZm9udC1zaXplOiAyOHB4O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmNvbG9yOiB3aGl0ZTtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuZGlzcGxheTogYmxvY2s7XFxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYzNlNTA7XFxufVxcblxcbiNzdWRva3VfbWVudS5vcGVuLXNpZGViYXIge1xcbmxlZnQ6MHB4O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUge1xcbiAgei1pbmRleDozO1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMjJweCAxOHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSAuYmFye1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjhweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIC5iYXI6bGFzdC1jaGlsZHtcXG4gICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4vKlJlc3BvbnNpdmUgU3R1ZmYqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6IDY0MHB4KXtcXG4gIGgxIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5zdGF0aXN0aWNzIHsgZm9udC1zaXplOjMwcHg7IH1cXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTo2MHB4OyB9XFxuICAuYm9hcmRfY29uc29sZSAubnVtIHsgZm9udC1zaXplOjYwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtaW4taGVpZ2h0OiA2NDBweCl7XFxuICBoMSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuc3RhdGlzdGljcyB7IGZvbnQtc2l6ZTozMHB4OyB9XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6NTBweDsgfVxcbiAgLmJvYXJkX2NvbnNvbGUgLm51bSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MzBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjI0cHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjEwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDcwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxNnB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZTo4cHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxMnB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZTo4cHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgIChtYXgtd2lkdGg6IDI0MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTBweDsgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3Vk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NEJBQTRCLGFBQWEsRUFBRTtBQUMzQzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0MsNEJBQTRCLGFBQWEsRUFBRTtBQUMzQzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiSDEge1xcbiAgYmFja2dyb3VuZDpibGFjaztcXG4gIGNvbG9yOndoaXRlO1xcbiAgbWFyZ2luOjBweCAwcHggMnB4IDBweDtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbiAgcGFkZGluZzoycHggMXB4IDVweCAxcHg7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTp2ZXJkYW5hLGhlbHZldGljYSxhcmlhbCxzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOjBweDsgbWFyZ2luOjBweDsgcGFkZGluZzowcHg7XFxuXFxuICBiYWNrZ3JvdW5kOnVybChcXG4gICAgICBkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBSVVsRVFWUVlWMk44OXVydGZ3WWlBQ05Jb1pTWU1DTWh0YU1LOFlZUTBjRURBRzV5SjhlTFJoVGZBQUFBQUVsRlRrU3VRbUNDXFxuICApIHJlcGVhdDtcXG59XFxuXFxuLyogYm9hcmQgKi9cXG4uc3Vkb2t1X2JvYXJkIHtcXG4gIG1hcmdpbjo2cHggYXV0bztcXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwge1xcbiAgd2lkdGg6MTEuMTElO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6bGVmdDtcXG4gIGN1cnNvcjpwb2ludGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3O1xcblxcbiAgYmFja2dyb3VuZDp3aGl0ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfaCB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgMHB4IC0ycHggMCAwICMzNDQ5NWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX3Yge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IC0ycHggMCAwICMzNDQ5NWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX2guYm9yZGVyX3Yge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IC0ycHggMCAwIGJsYWNrLCBpbnNldCAwcHggLTJweCAwIGJsYWNrO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4ge1xcbiAgY29sb3I6IzJjM2U1MDtcXG4gIGZvbnQtc2l6ZToxNHB4O1xcbiAgdGV4dC1hbGlnbjptaWRkbGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQsIC5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuZml4IHtcXG4gIGJhY2tncm91bmQ6I0ZGRTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5jdXJyZW50IHtcXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xcbiAgYmFja2dyb3VuZDogIzM0OThkYjtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5jdXJyZW50IHNwYW4ge1xcbiAgY29sb3I6d2hpdGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuZ3JvdXAge1xcbiAgY29sb3I6Ymx1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuLnNhbWV2YWx1ZSwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXggc3Bhbi5zYW1ldmFsdWUge1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGNvbG9yOiMzNDk4ZGI7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwubm90dmFsaWQsIC5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQubm90dmFsaWR7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgY29sb3I6d2hpdGU7O1xcbiAgYmFja2dyb3VuZDojZTc0YzNjO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCB7XFxuICBiYWNrZ3JvdW5kOiNlY2YwZjE7XFxuICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHNwYW4ge1xcbmNvbG9yOiM3ZjhjOGQ7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLnNvbHV0aW9uIHtcXG5mb250LXNpemU6MTBweDtcXG5jb2xvcjojZDM1NDAwO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHtcXG4gIGNvbG9yOiNiZGMzYzc7XFxuICB3aWR0aDo1MCU7XFxuICBoZWlnaHQ6NTAlO1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZmxvYXQ6bGVmdDtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbiAgZm9udC1zaXplOjE0cHg7XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuLmdhbWVvdmVyX2NvbnRhaW5lciAuZ2FtZW92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcXG5cXG4gIGRpc3BsYXk6YmxvY2s7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHdpZHRoOjkwJTtcXG4gIHBhZGRpbmc6MTBweDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG5cXG4ucmVzdGFydCB7XFxuYmFja2dyb3VuZDojN0Y4QzhEO1xcbmNvbG9yOiNlY2YwZjE7XFxufVxcblxcbi8qIGNvbnNvbGUgKi9cXG4uYm9hcmRfY29uc29sZV9jb250YWluZXIsIC5nYW1lb3Zlcl9jb250YWluZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDE0MCwgMTQxLCAwLjcpO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcblxcbiAgIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgdXNlci1zZWxlY3Q6IG5vbmU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIHtcXG4gIGRpc3BsYXk6YmxvY2s7XFxuICBwb3NpdGlvbjphYnNvbHV0ZTtcXG4gIHdpZHRoOjUwJTtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgxMjcsIDE0MCwgMTQxLCAwLjcpO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ge1xcbiAgd2lkdGg6MzMuMzMlO1xcbiAgY29sb3I6IzJjM2U1MDtcXG4gIHBhZGRpbmc6IDFweDtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBmb250LXNpemU6MjRweDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGN1cnNvcjpwb2ludGVyO1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzc7XFxufVxcblxcblxcbi5ib2FyZF9jb25zb2xlIC5udW06aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ucmVtb3ZlIHtcXG4gIHdpZHRoOjY2LjY2JTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlIHtcXG4gIGJhY2tncm91bmQ6Izk1YTVhNjtcXG4gIGNvbG9yOiNlY2YwZjE7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kOiM5NWE1YTY7XFxuICBjb2xvcjojZjFjNDBmO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUuc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZS5zZWxlY3RlZDpob3ZlciB7XFxuY29sb3I6d2hpdGU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm86aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBjdXJzb3I6bm90LWFsbG93ZWQ7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ucmVtb3ZlOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZDojYzAzOTJiO1xcbn1cXG5cXG4uc3RhdGlzdGljcyB7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDoyO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBsZWZ0OiAtMTAwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCB7XFxuIG1hcmdpbjogMDtcXG4gcGFkZGluZzogMTAwcHggMHB4IDBweCAwcHg7XFxuIGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCBsaXtcXG5tYXJnaW46IDBweCA1MHB4O1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwgbGkgYSB7XFxudGV4dC1hbGlnbjpjZW50ZXI7XFxucGFkZGluZzogMTVweCAyMHB4O1xcbmZvbnQtc2l6ZTogMjhweDtcXG5mb250LXdlaWdodDogYm9sZDtcXG5jb2xvcjogd2hpdGU7XFxudGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbmRpc3BsYXk6IGJsb2NrO1xcbmJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMmMzZTUwO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUub3Blbi1zaWRlYmFyIHtcXG5sZWZ0OjBweDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIHtcXG4gIHotaW5kZXg6MztcXG4gIGJhY2tncm91bmQ6ICNiZGMzYzc7XFxuICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIHBhZGRpbmc6IDIycHggMThweDtcXG4gIGZsb2F0OiBsZWZ0O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUgLmJhcntcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgd2lkdGg6IDI4cHg7XFxuICBtYXJnaW4tYm90dG9tOiA0cHg7XFxuICBoZWlnaHQ6IDRweDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmMGYwZjA7XFxuICBib3JkZXItcmFkaXVzOiAxcHg7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSAuYmFyOmxhc3QtY2hpbGR7XFxuICAgbWFyZ2luLWJvdHRvbTogMDtcXG59XFxuXFxuLypSZXNwb25zaXZlIFN0dWZmKi9cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWluLXdpZHRoOiA2NDBweCl7XFxuICBoMSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuc3RhdGlzdGljcyB7IGZvbnQtc2l6ZTozMHB4OyB9XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6NjBweDsgfVxcbiAgLmJvYXJkX2NvbnNvbGUgLm51bSB7IGZvbnQtc2l6ZTo2MHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpsYW5kc2NhcGUpIGFuZCAobWluLWhlaWdodDogNjQwcHgpe1xcbiAgaDEgeyBmb250LXNpemU6NTBweDsgfVxcbiAgLnN0YXRpc3RpY3MgeyBmb250LXNpemU6MzBweDsgfVxcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5ib2FyZF9jb25zb2xlIC5udW0geyBmb250LXNpemU6NTBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAxMDAwcHgpe1xcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjMwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNjQwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToyNHB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZToxMHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDQ3MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTZweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6OHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDMyMHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTJweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6OHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kICAobWF4LXdpZHRoOiAyNDBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjEwcHg7IH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdWRva3UubmljZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N1ZG9rdS5uaWNlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5jb250YWluZXIgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgSW5wdXRQcm92aWRlcl8xID0gcmVxdWlyZShcIi4vbGlicmFyeS9JbnB1dFByb3ZpZGVyXCIpO1xuY29uc3QgR2FtZUV2ZW50c18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lRXZlbnRzXCIpO1xuY29uc3QgR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvR2FtZU1hbmFnZXJcIik7XG5jb25zdCBHYW1lUnVubmVyXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVSdW5uZXJcIik7XG5jb25zdCBHYW1lTG9naWNfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvR2FtZUxvZ2ljXCIpO1xuY29uc3QgR2FtZVNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVTZXR0aW5nc1wiKTtcbmNvbnN0IFN1ZG9rdVRTXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L1N1ZG9rdVRTXCIpO1xuY29uc3QgVmFuaWxsYUpzVmlld18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9WYW5pbGxhSnNWaWV3XCIpO1xuZXhwb3J0cy5jb250YWluZXIgPSBuZXcgaW5qZWN0XzEuQ29udGFpbmVyKClcbiAgICAuYWRkU2luZ2xldG9uKFZhbmlsbGFKc1ZpZXdfMS5WYW5pbGxhSnNWaWV3KVxuICAgIC5hZGRTaW5nbGV0b24oR2FtZVNldHRpbmdzXzEuR2FtZVNldHRpbmdzKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJU3Vkb2t1VFNcIiwgU3Vkb2t1VFNfMS5TdWRva3VUUylcbiAgICAuYWRkU2luZ2xldG9uKFwiSUdhbWVNYW5hZ2VyXCIsIEdhbWVNYW5hZ2VyXzEuR2FtZU1hbmFnZXIpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lUnVubmVyXCIsIEdhbWVSdW5uZXJfMS5HYW1lUnVubmVyKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJR2FtZVB1YlN1YlwiLCBHYW1lRXZlbnRzXzEuR2FtZUV2ZW50cylcbiAgICAuYWRkU2luZ2xldG9uKFwiSUdhbWVMb2dpY1wiLCBHYW1lTG9naWNfMS5HYW1lTG9naWMpXG4gICAgLmFkZFNpbmdsZXRvbihcIklJbnB1dFByb3ZpZGVyXCIsIElucHV0UHJvdmlkZXJfMS5ET01JbnB1dFByb3ZpZGVyKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lRGlmZmljdWx0eSA9IHZvaWQgMDtcbnZhciBHYW1lRGlmZmljdWx0eTtcbihmdW5jdGlvbiAoR2FtZURpZmZpY3VsdHkpIHtcbiAgICBHYW1lRGlmZmljdWx0eVtcImVhc3lcIl0gPSBcImVhc3lcIjtcbiAgICBHYW1lRGlmZmljdWx0eVtcIm1lZGl1bVwiXSA9IFwibWVkaXVtXCI7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJoYXJkXCJdID0gXCJoYXJkXCI7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJ2ZXJ5LWhhcmRcIl0gPSBcInZlcnktaGFyZFwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1wiaW5zYW5lXCJdID0gXCJpbnNhbmVcIjtcbiAgICBHYW1lRGlmZmljdWx0eVtcImluaHVtYW5cIl0gPSBcImluaHVtYW5cIjtcbn0pKEdhbWVEaWZmaWN1bHR5ID0gZXhwb3J0cy5HYW1lRGlmZmljdWx0eSB8fCAoZXhwb3J0cy5HYW1lRGlmZmljdWx0eSA9IHt9KSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZVN0YXRlID0gdm9pZCAwO1xudmFyIEdhbWVTdGF0ZTtcbihmdW5jdGlvbiAoR2FtZVN0YXRlKSB7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIlBSRUdBTUVcIl0gPSAwXSA9IFwiUFJFR0FNRVwiO1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJQTEFZSU5HXCJdID0gMV0gPSBcIlBMQVlJTkdcIjtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiUEFVU0VEXCJdID0gMl0gPSBcIlBBVVNFRFwiO1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJXT05cIl0gPSAzXSA9IFwiV09OXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIkdBTUVPVkVSXCJdID0gNF0gPSBcIkdBTUVPVkVSXCI7XG59KShHYW1lU3RhdGUgPSBleHBvcnRzLkdhbWVTdGF0ZSB8fCAoZXhwb3J0cy5HYW1lU3RhdGUgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5yZXF1aXJlKFwicmVmbGVjdC1tZXRhZGF0YVwiKTtcbmNvbnN0IGNvbnRhaW5lcl8xID0gcmVxdWlyZShcIi4vY29udGFpbmVyXCIpO1xuY29uc3QgVmFuaWxsYUpzVmlld18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9WYW5pbGxhSnNWaWV3XCIpO1xucmVxdWlyZShcIi4vc3Vkb2t1Lm5pY2UuY3NzXCIpO1xuY29udGFpbmVyXzEuY29udGFpbmVyLnJlc29sdmUoVmFuaWxsYUpzVmlld18xLlZhbmlsbGFKc1ZpZXcpXG4gICAgLnJlZ2lzdGVyTGlzdGVuZXJzKClcbiAgICAuc3RhcnRHYW1lKCk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZUV2ZW50cyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBldmVudHNfMSA9IHJlcXVpcmUoXCJldmVudHNcIik7XG5sZXQgR2FtZUV2ZW50cyA9IGNsYXNzIEdhbWVFdmVudHMge1xuICAgIHB1Ymxpc2goZXZlbnQpIHtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmVtaXQodGhpcy5HQU1FX0VWRU5ULCBldmVudCk7XG4gICAgfVxuICAgIHN1YnNjcmliZShjYikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIuYWRkTGlzdGVuZXIodGhpcy5HQU1FX0VWRU5ULCBjYik7XG4gICAgfVxuICAgIHVuc3Vic2NyaWJlKGNiKSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5yZW1vdmVMaXN0ZW5lcih0aGlzLkdBTUVfRVZFTlQsIGNiKTtcbiAgICB9XG4gICAgZW1pdHRlciA9IG5ldyBldmVudHNfMS5FdmVudEVtaXR0ZXIoKTtcbiAgICBHQU1FX0VWRU5UID0gJ2dhbWUtZXZlbnQnO1xufTtcbkdhbWVFdmVudHMgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpXG5dLCBHYW1lRXZlbnRzKTtcbmV4cG9ydHMuR2FtZUV2ZW50cyA9IEdhbWVFdmVudHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZUxvZ2ljID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVTdGF0ZV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVTdGF0ZVwiKTtcbmNvbnN0IGFzc2VydF8xID0gcmVxdWlyZShcIi4uL3V0aWxzL2Fzc2VydFwiKTtcbmxldCBHYW1lTG9naWMgPSBjbGFzcyBHYW1lTG9naWMge1xuICAgIGFwcGx5R2FtZUlucHV0KGlucHV0LCBtb2RlbCkge1xuICAgICAgICBpZiAobW9kZWwuc3RhdGUgPCBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OKSB7XG4gICAgICAgICAgICBzd2l0Y2ggKGlucHV0LmFjdGlvbikge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3NlbGVjdCc6IHtcbiAgICAgICAgICAgICAgICAgICAgbW9kZWwuc2VsZWN0ZWQgPSBpbnB1dC5jZWxsSW5kZXg7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYXNlICdrZXlwcmVzcyc6IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtb2RlbC5zZWxlY3RlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY2VsbCA9IG1vZGVsLmNlbGxzW21vZGVsLnNlbGVjdGVkXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwuaXNIaW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoY2VsbC52YWx1ZSA9PT0gaW5wdXQua2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjZWxsLnZhbHVlID0gJy4nO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2VsbC52YWx1ZSA9IGlucHV0LmtleTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoMCwgYXNzZXJ0XzEuVU5SRUFDSEFCTEUpKGlucHV0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZGVsLnN0YXRlID0gdGhpcy5nZXROZXh0R2FtZVN0YXRlKG1vZGVsKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbW9kZWw7XG4gICAgfVxuICAgIGluaXRpYWxpemVHYW1lQ2VsbHMoc2VlZCkge1xuICAgICAgICBjb25zdCBjZWxscyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDkgKiA5OyBpKyspIHtcbiAgICAgICAgICAgIGNlbGxzLnB1c2godGhpcy5jcmVhdGVHYW1lQ2VsbChpLCBzZWVkKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH1cbiAgICBjcmVhdGVHYW1lQ2VsbChpbmRleCwgc2VlZCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICBpc0hpbnQ6IHNlZWRbaW5kZXhdICE9PSAnLicsXG4gICAgICAgICAgICB2YWx1ZTogc2VlZFtpbmRleF0sXG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldE5leHRHYW1lU3RhdGUobW9kZWwpIHtcbiAgICAgICAgY29uc3QgYm9hcmQgPSBtb2RlbC5jZWxsc1xuICAgICAgICAgICAgLm1hcChjZWxsID0+IGNlbGwudmFsdWUpXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIGlmIChtb2RlbC5zb2x1dGlvbiA9PT0gYm9hcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBtb2RlbC5zdGF0ZTtcbiAgICB9XG4gICAgZ2V0VGlsZVZlY3RvckZvckluZGV4KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihpbmRleCAlIDkpLCBNYXRoLmZsb29yKGluZGV4IC8gOSldO1xuICAgIH1cbiAgICBnZXRJbmRleEZvclRpbGVWZWN0b3IoW3gsIHldKSB7XG4gICAgICAgIHJldHVybiB5ICogOSArIHg7XG4gICAgfVxufTtcbkdhbWVMb2dpYyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKClcbl0sIEdhbWVMb2dpYyk7XG5leHBvcnRzLkdhbWVMb2dpYyA9IEdhbWVMb2dpYztcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYSwgX2I7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVNYW5hZ2VyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVTdGF0ZV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVTdGF0ZVwiKTtcbmNvbnN0IElHYW1lTG9naWNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVMb2dpY1wiKTtcbmNvbnN0IElTdWRva3VUU18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JU3Vkb2t1VFNcIik7XG5sZXQgR2FtZU1hbmFnZXIgPSBjbGFzcyBHYW1lTWFuYWdlciB7XG4gICAgbG9naWM7XG4gICAgc3Vkb2t1O1xuICAgIGNvbnN0cnVjdG9yKGxvZ2ljLCBzdWRva3UpIHtcbiAgICAgICAgdGhpcy5sb2dpYyA9IGxvZ2ljO1xuICAgICAgICB0aGlzLnN1ZG9rdSA9IHN1ZG9rdTtcbiAgICB9XG4gICAgY3JlYXRlKGRpZmZpY3VsdHkpIHtcbiAgICAgICAgY29uc3Qgc2VlZCA9IHRoaXMuc3Vkb2t1LmdlbmVyYXRlKGRpZmZpY3VsdHkpO1xuICAgICAgICBjb25zdCBzb2x1dGlvbiA9IHRoaXMuc3Vkb2t1LnNvbHZlKHNlZWQpO1xuICAgICAgICBjb25zdCBjZWxscyA9IHRoaXMubG9naWNcbiAgICAgICAgICAgIC5pbml0aWFsaXplR2FtZUNlbGxzKHNlZWQpO1xuICAgICAgICBjb25zdCBzdGF0ZSA9IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5QQVVTRUQ7XG4gICAgICAgIHJldHVybiB7IGNlbGxzLCBzZWVkLCBzdGF0ZSwgZGlmZmljdWx0eSwgc29sdXRpb24gfTtcbiAgICB9XG4gICAgdXBkYXRlKG1vZGVsLCBpbnB1dCkge1xuICAgICAgICByZXR1cm4gdGhpcy5sb2dpYy5hcHBseUdhbWVJbnB1dChpbnB1dCwgbW9kZWwpO1xuICAgIH1cbn07XG5HYW1lTWFuYWdlciA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lTG9naWNfMS5JR2FtZUxvZ2ljICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lTG9naWNfMS5JR2FtZUxvZ2ljKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSVN1ZG9rdVRTXzEuSVN1ZG9rdVRTICE9PSBcInVuZGVmaW5lZFwiICYmIElTdWRva3VUU18xLklTdWRva3VUUykgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0XSlcbl0sIEdhbWVNYW5hZ2VyKTtcbmV4cG9ydHMuR2FtZU1hbmFnZXIgPSBHYW1lTWFuYWdlcjtcbkdhbWVNYW5hZ2VyW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW1wiSUdhbWVMb2dpY1wiLCBcIklTdWRva3VUU1wiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYSwgX2IsIF9jO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lUnVubmVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVTdGF0ZV8xID0gcmVxdWlyZShcIi4uL2VudW1zL0dhbWVTdGF0ZVwiKTtcbmNvbnN0IElHYW1lTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZU1hbmFnZXJcIik7XG5jb25zdCBJR2FtZVB1YlN1Yl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZVB1YlN1YlwiKTtcbmNvbnN0IElJbnB1dFByb3ZpZGVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lJbnB1dFByb3ZpZGVyXCIpO1xubGV0IEdhbWVSdW5uZXIgPSBjbGFzcyBHYW1lUnVubmVyIHtcbiAgICBtYW5hZ2VyO1xuICAgIGV2ZW50cztcbiAgICBpbnB1dDtcbiAgICBjb25zdHJ1Y3RvcihtYW5hZ2VyLCBldmVudHMsIGlucHV0KSB7XG4gICAgICAgIHRoaXMubWFuYWdlciA9IG1hbmFnZXI7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICB0aGlzLmlucHV0ID0gaW5wdXQ7XG4gICAgfVxuICAgIGFzeW5jIHBsYXlHYW1lKGdhbWVib2FyZCkge1xuICAgICAgICB0aGlzLmVtaXQoXCJiZWdpblwiLCBnYW1lYm9hcmQpO1xuICAgICAgICBkbyB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGF3YWl0IHRoaXMuaW5wdXQuZ2V0TmV4dElucHV0KCk7XG4gICAgICAgICAgICB0aGlzLm1hbmFnZXIudXBkYXRlKGdhbWVib2FyZCwgaW5wdXQpO1xuICAgICAgICAgICAgdGhpcy5lbWl0KFwidXBkYXRlXCIsIGdhbWVib2FyZCk7XG4gICAgICAgIH0gd2hpbGUgKGdhbWVib2FyZC5zdGF0ZSA8IEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5XT04pO1xuICAgICAgICB0aGlzLmVtaXQoXCJlbmRcIiwgZ2FtZWJvYXJkKTtcbiAgICAgICAgcmV0dXJuIGdhbWVib2FyZDtcbiAgICB9XG4gICAgZW1pdCh0eXBlLCBwYXlsb2FkKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goeyB0eXBlLCBwYXlsb2FkIH0pO1xuICAgIH1cbn07XG5HYW1lUnVubmVyID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgSUdhbWVNYW5hZ2VyXzEuSUdhbWVNYW5hZ2VyICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lTWFuYWdlcl8xLklHYW1lTWFuYWdlcikgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0LCB0eXBlb2YgKF9iID0gdHlwZW9mIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YikgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0LCB0eXBlb2YgKF9jID0gdHlwZW9mIElJbnB1dFByb3ZpZGVyXzEuSUlucHV0UHJvdmlkZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUlucHV0UHJvdmlkZXJfMS5JSW5wdXRQcm92aWRlcikgPT09IFwiZnVuY3Rpb25cIiA/IF9jIDogT2JqZWN0XSlcbl0sIEdhbWVSdW5uZXIpO1xuZXhwb3J0cy5HYW1lUnVubmVyID0gR2FtZVJ1bm5lcjtcbkdhbWVSdW5uZXJbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXCJJR2FtZU1hbmFnZXJcIiwgXCJJR2FtZVB1YlN1YlwiLCBcIklJbnB1dFByb3ZpZGVyXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lU2V0dGluZ3MgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgR2FtZURpZmZpY3VsdHlfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lRGlmZmljdWx0eVwiKTtcbmNvbnN0IElHYW1lUHViU3ViXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lUHViU3ViXCIpO1xuY29uc3QgdmVjMl8xID0gcmVxdWlyZShcIi4uL3V0aWxzL3ZlYzJcIik7XG5sZXQgR2FtZVNldHRpbmdzID0gY2xhc3MgR2FtZVNldHRpbmdzIHtcbiAgICBldmVudHM7XG4gICAgY29uc3RydWN0b3IoZXZlbnRzKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgIH1cbiAgICBjZWxsU2l6ZSA9ICgwLCB2ZWMyXzEudmVjMikoMjUpO1xuICAgIGZsYWdDaGFyYWN0ZXIgPSAn8J+aqSc7XG4gICAgbWluZUNoYXJhY3RlciA9ICfwn5KjJztcbiAgICBkZWZhdWx0RGlmZmljdWx0eSA9IEdhbWVEaWZmaWN1bHR5XzEuR2FtZURpZmZpY3VsdHkuZWFzeTtcbiAgICB0aW1lckludGVydmFsID0gMTAwO1xuICAgIHNldChrZXksIHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICBjb25zdCBvbGQgPSBzZWxmW2tleV07XG4gICAgICAgIHNlbGZba2V5XSA9IHZhbHVlO1xuICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKHtcbiAgICAgICAgICAgIHR5cGU6ICdjb25maWctY2hhbmdlZCcsXG4gICAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgICAgIHZhbHVlOiB7XG4gICAgICAgICAgICAgICAgICAgIG9sZCxcbiAgICAgICAgICAgICAgICAgICAgbmV3OiB2YWx1ZSxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn07XG5HYW1lU2V0dGluZ3MgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdF0pXG5dLCBHYW1lU2V0dGluZ3MpO1xuZXhwb3J0cy5HYW1lU2V0dGluZ3MgPSBHYW1lU2V0dGluZ3M7XG5HYW1lU2V0dGluZ3NbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXCJJR2FtZVB1YlN1YlwiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfX2ltcG9ydERlZmF1bHQgPSAodGhpcyAmJiB0aGlzLl9faW1wb3J0RGVmYXVsdCkgfHwgZnVuY3Rpb24gKG1vZCkge1xuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgXCJkZWZhdWx0XCI6IG1vZCB9O1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuRE9NSW5wdXRQcm92aWRlciA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBldmVudHNfMSA9IF9faW1wb3J0RGVmYXVsdChyZXF1aXJlKFwiZXZlbnRzXCIpKTtcbmNvbnN0IElTdWRva3VUU18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JU3Vkb2t1VFNcIik7XG5sZXQgRE9NSW5wdXRQcm92aWRlciA9IGNsYXNzIERPTUlucHV0UHJvdmlkZXIge1xuICAgIHN1ZG9rdTtcbiAgICBjb25zdHJ1Y3RvcihzdWRva3UpIHtcbiAgICAgICAgdGhpcy5zdWRva3UgPSBzdWRva3U7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5vbkNsaWNrQ2VsbCk7XG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgdGhpcy5vbktleVByZXNzKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0TmV4dElucHV0KCkge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZW1pdHRlci5vbmNlKCdkYXRhJywgZGF0YSA9PiByZXNvbHZlKGRhdGEpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2xpY2tDZWxsID0gKGUpID0+IHtcbiAgICAgICAgaWYgKGUudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IE51bWJlcihlLnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2lkeCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXREYXRhKHsgYWN0aW9uOiAnc2VsZWN0JywgY2VsbEluZGV4OiBpZHggfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZS50YXJnZXQucGFyZW50RWxlbWVudD8uY2xhc3NMaXN0LmNvbnRhaW5zKCdjZWxsJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBOdW1iZXIoZS50YXJnZXQucGFyZW50RWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2lkeCcpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVtaXREYXRhKHsgYWN0aW9uOiAnc2VsZWN0JywgY2VsbEluZGV4OiBpZHggfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIG9uS2V5UHJlc3MgPSAoZSkgPT4ge1xuICAgICAgICBpZiAodGhpcy5zdWRva3UuRElHSVRTLmluY2x1ZGVzKGUua2V5KSlcbiAgICAgICAgICAgIHRoaXMuZW1pdERhdGEoeyBhY3Rpb246ICdrZXlwcmVzcycsIGtleTogZS5rZXkgfSk7XG4gICAgfTtcbiAgICBlbWl0RGF0YShkYXRhKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdJbnB1dCcsIGRhdGEpO1xuICAgICAgICB0aGlzLmVtaXR0ZXIuZW1pdCgnZGF0YScsIGRhdGEpO1xuICAgIH1cbiAgICBlbWl0dGVyID0gbmV3IGV2ZW50c18xLmRlZmF1bHQoKTtcbn07XG5ET01JbnB1dFByb3ZpZGVyID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKSxcbiAgICBfX21ldGFkYXRhKFwiZGVzaWduOnBhcmFtdHlwZXNcIiwgW3R5cGVvZiAoX2EgPSB0eXBlb2YgSVN1ZG9rdVRTXzEuSVN1ZG9rdVRTICE9PSBcInVuZGVmaW5lZFwiICYmIElTdWRva3VUU18xLklTdWRva3VUUykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIERPTUlucHV0UHJvdmlkZXIpO1xuZXhwb3J0cy5ET01JbnB1dFByb3ZpZGVyID0gRE9NSW5wdXRQcm92aWRlcjtcbkRPTUlucHV0UHJvdmlkZXJbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXCJJU3Vkb2t1VFNcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbi8qXG4gICAgU3Vkb2t1LnRzXG4gICAgLS0tLS0tLS0tXG5cbiAgICBBIFN1ZG9rdSBwdXp6bGUgZ2VuZXJhdG9yIGFuZCBzb2x2ZXIgSmF2YVNjcmlwdCBsaWJyYXJ5LlxuXG4gICAgUGxlYXNlIHNlZSB0aGUgUkVBRE1FIGZvciBtb3JlIGRldGFpbHMuXG5cbiAgICA+IE1vZGlmaWVkIGJ5IEBEdXJva3RhciBpbiAyMDIyIGZyb20gdGhlIG9yaWdpbmFsIGdpc3RbMF1cblxuICAgIFswXTogaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3JvYmF0cm9uL3N1ZG9rdS5qcy9tYXN0ZXIvc3Vkb2t1LmpzXG4qL1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU3Vkb2t1VFMgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xubGV0IFN1ZG9rdVRTID0gY2xhc3MgU3Vkb2t1VFMge1xuICAgIC8qKlxuICAgICAqICBBbGxvd2VkIHN1ZG9rdSBkaWdpdHMgKDAtOSlcbiAgICAgKlxuICAgICAqIEB0eXBlIHtzdHJpbmd9XG4gICAgICogQG1lbWJlcm9mIFN1ZG9rdVRTXG4gICAgICovXG4gICAgRElHSVRTO1xuICAgIERJRkZJQ1VMVFk7XG4gICAgUk9XUzsgLy8gUm93IGxhYmxlc1xuICAgIENPTFM7IC8vIENvbHVtbiBsYWJsZXNcbiAgICBTUVVBUkVTOyAvLyBTcXVhcmUgSURzXG4gICAgVU5JVFM7IC8vIEFsbCB1bml0cyAocm93LCBjb2x1bW4sIG9yIGJveClcbiAgICBTUVVBUkVfVU5JVFNfTUFQOyAvLyBTcXVhcmVzIC0+IHVuaXRzIG1hcFxuICAgIFNRVUFSRV9QRUVSU19NQVA7IC8vIFNxdWFyZXMgLT4gcGVlcnMgbWFwXG4gICAgTUlOX0dJVkVOUzsgLy8gTWluaW11bSBudW1iZXIgb2YgZ2l2ZW5zXG4gICAgTlJfU1FVQVJFUzsgLy8gTnVtYmVyIG9mIHNxdWFyZXNcbiAgICBCTEFOS19DSEFSO1xuICAgIEJMQU5LX0JPQVJEO1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLkRJR0lUUyA9IFwiMTIzNDU2Nzg5XCI7XG4gICAgICAgIHRoaXMuUk9XUyA9IFwiQUJDREVGR0hJXCI7XG4gICAgICAgIHRoaXMuQ09MUyA9IHRoaXMuRElHSVRTO1xuICAgICAgICB0aGlzLk1JTl9HSVZFTlMgPSAxNztcbiAgICAgICAgdGhpcy5OUl9TUVVBUkVTID0gODE7XG4gICAgICAgIC8vIERlZmluZSBkaWZmaWN1bHRpZXMgYnkgaG93IG1hbnkgc3F1YXJlcyBhcmUgZ2l2ZW4gdG8gdGhlIHBsYXllciBpbiBhIG5ld1xuICAgICAgICAvLyBwdXp6bGUuXG4gICAgICAgIHRoaXMuRElGRklDVUxUWSA9IHtcbiAgICAgICAgICAgIFwiZWFzeVwiOiA2MixcbiAgICAgICAgICAgIFwibWVkaXVtXCI6IDUzLFxuICAgICAgICAgICAgXCJoYXJkXCI6IDQ0LFxuICAgICAgICAgICAgXCJ2ZXJ5LWhhcmRcIjogMzUsXG4gICAgICAgICAgICBcImluc2FuZVwiOiAyNixcbiAgICAgICAgICAgIFwiaW5odW1hblwiOiAxNyxcbiAgICAgICAgfTtcbiAgICAgICAgLy8gQmxhbmsgY2hhcmFjdGVyIGFuZCBib2FyZCByZXByZXNlbnRhdGlvblxuICAgICAgICB0aGlzLkJMQU5LX0NIQVIgPSAnLic7XG4gICAgICAgIHRoaXMuQkxBTktfQk9BUkQgPSBcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIiArXG4gICAgICAgICAgICBcIi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uXCI7XG4gICAgICAgIC8vIEluaXRcbiAgICAgICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgICAgICB0aGlzLlNRVUFSRVMgPSB0aGlzLl9jcm9zcyh0aGlzLlJPV1MsIHRoaXMuQ09MUyk7XG4gICAgICAgIHRoaXMuVU5JVFMgPSB0aGlzLl9nZXRfYWxsX3VuaXRzKHRoaXMuUk9XUywgdGhpcy5DT0xTKTtcbiAgICAgICAgdGhpcy5TUVVBUkVfVU5JVFNfTUFQID0gdGhpcy5fZ2V0X3NxdWFyZV91bml0c19tYXAodGhpcy5TUVVBUkVTLCB0aGlzLlVOSVRTKTtcbiAgICAgICAgdGhpcy5TUVVBUkVfUEVFUlNfTUFQID0gdGhpcy5fZ2V0X3NxdWFyZV9wZWVyc19tYXAodGhpcy5TUVVBUkVTLCB0aGlzLlNRVUFSRV9VTklUU19NQVApO1xuICAgIH1cbiAgICAvLyBHZW5lcmF0ZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBnZW5lcmF0ZSA9IChkaWZmaWN1bHR5LCB1bmlxdWUpID0+IHtcbiAgICAgICAgLyogR2VuZXJhdGUgYSBuZXcgU3Vkb2t1IHB1enpsZSBvZiBhIHBhcnRpY3VsYXIgYGRpZmZpY3VsdHlgLCBlLmcuLFxuICBcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGFuIFwiZWFzeVwiIHN1ZG9rdSBwdXp6bGVcbiAgICAgICAgICAgIHN1ZG9rdS5nZW5lcmF0ZShcImVhc3lcIik7XG4gIFxuICBcbiAgICAgICAgRGlmZmljdWx0aWVzIGFyZSBhcyBmb2xsb3dzLCBhbmQgcmVwcmVzZW50IHRoZSBudW1iZXIgb2YgZ2l2ZW4gc3F1YXJlczpcbiAgXG4gICAgICAgICAgICAgICAgXCJlYXN5XCI6ICAgICAgICAgNjFcbiAgICAgICAgICAgICAgICBcIm1lZGl1bVwiOiAgICAgICA1MlxuICAgICAgICAgICAgICAgIFwiaGFyZFwiOiAgICAgICAgIDQzXG4gICAgICAgICAgICAgICAgXCJ2ZXJ5LWhhcmRcIjogICAgMzRcbiAgICAgICAgICAgICAgICBcImluc2FuZVwiOiAgICAgICAyNVxuICAgICAgICAgICAgICAgIFwiaW5odW1hblwiOiAgICAgIDE3XG4gIFxuICBcbiAgICAgICAgWW91IG1heSBhbHNvIGVudGVyIGEgY3VzdG9tIG51bWJlciBvZiBzcXVhcmVzIHRvIGJlIGdpdmVuLCBlLmcuLFxuICBcbiAgICAgICAgICAgIC8vIEdlbmVyYXRlIGEgbmV3IFN1ZG9rdSBwdXp6bGUgd2l0aCA2MCBnaXZlbiBzcXVhcmVzXG4gICAgICAgICAgICBzdWRva3UuZ2VuZXJhdGUoNjApXG4gIFxuICBcbiAgICAgICAgYGRpZmZpY3VsdHlgIG11c3QgYmUgYSBudW1iZXIgYmV0d2VlbiAxNyBhbmQgODEgaW5jbHVzaXZlLiBJZiBpdCdzXG4gICAgICAgIG91dHNpZGUgb2YgdGhhdCByYW5nZSwgYGRpZmZpY3VsdHlgIHdpbGwgYmUgc2V0IHRvIHRoZSBjbG9zZXN0IGJvdW5kLFxuICAgICAgICBlLmcuLCAwIC0+IDE3LCBhbmQgMTAwIC0+IDgxLlxuICBcbiAgXG4gICAgICAgIEJ5IGRlZmF1bHQsIHRoZSBwdXp6bGVzIGFyZSB1bmlxdWUsIHVsZXNzIHlvdSBzZXQgYHVuaXF1ZWAgdG8gZmFsc2UuXG4gICAgICAgIChOb3RlOiBQdXp6bGUgdW5pcXVlbmVzcyBpcyBub3QgeWV0IGltcGxlbWVudGVkLCBzbyBwdXp6bGVzIGFyZSAqbm90KlxuICAgICAgICBndWFyYW50ZWVkIHRvIGhhdmUgdW5pcXVlIHNvbHV0aW9ucylcbiAgICAgICAgKi9cbiAgICAgICAgLy8gSWYgYGRpZmZpY3VsdHlgIGlzIGEgc3RyaW5nIG9yIHVuZGVmaW5lZCwgY29udmVydCBpdCB0byBhIG51bWJlciBvclxuICAgICAgICAvLyBkZWZhdWx0IGl0IHRvIFwiZWFzeVwiIGlmIHVuZGVmaW5lZC5cbiAgICAgICAgbGV0IF9kaWZmaWN1bHR5O1xuICAgICAgICBpZiAodHlwZW9mIGRpZmZpY3VsdHkgPT09IFwic3RyaW5nXCIgfHwgdHlwZW9mIGRpZmZpY3VsdHkgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICAgIF9kaWZmaWN1bHR5ID0gdGhpcy5ESUZGSUNVTFRZW2RpZmZpY3VsdHldIHx8IHRoaXMuRElGRklDVUxUWS5lYXN5O1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvcmNlIGRpZmZpY3VsdHkgYmV0d2VlbiAxNyBhbmQgODEgaW5jbHVzaXZlXG4gICAgICAgIF9kaWZmaWN1bHR5ID0gdGhpcy5fZm9yY2VfcmFuZ2UoX2RpZmZpY3VsdHksIHRoaXMuTlJfU1FVQVJFUyArIDEsIHRoaXMuTUlOX0dJVkVOUyk7XG4gICAgICAgIC8vIERlZmF1bHQgdW5pcXVlIHRvIHRydWVcbiAgICAgICAgdW5pcXVlID0gdW5pcXVlID8/IHRydWU7XG4gICAgICAgIC8vIEdldCBhIHNldCBvZiBzcXVhcmVzIGFuZCBhbGwgcG9zc2libGUgY2FuZGlkYXRlcyBmb3IgZWFjaCBzcXVhcmVcbiAgICAgICAgbGV0IGJsYW5rX2JvYXJkID0gXCJcIjtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLk5SX1NRVUFSRVM7ICsraSkge1xuICAgICAgICAgICAgYmxhbmtfYm9hcmQgKz0gJy4nO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSB0aGlzLl9nZXRfY2FuZGlkYXRlc19tYXAoYmxhbmtfYm9hcmQpO1xuICAgICAgICBpZiAoY2FuZGlkYXRlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmFsc2UgY2FuZGlkYXRlcycpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEZvciBlYWNoIGl0ZW0gaW4gYSBzaHVmZmxlZCBsaXN0IG9mIHNxdWFyZXNcbiAgICAgICAgbGV0IHNodWZmbGVkX3NxdWFyZXMgPSB0aGlzLl9zaHVmZmxlKHRoaXMuU1FVQVJFUyk7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiBzaHVmZmxlZF9zcXVhcmVzKSB7XG4gICAgICAgICAgICAvLyBJZiBhbiBhc3NpZ25tZW50IG9mIGEgcmFuZG9tIGNoaW9jZSBjYXVzZXMgYSBjb250cmFkaWN0b2luLCBnaXZlXG4gICAgICAgICAgICAvLyB1cCBhbmQgdHJ5IGFnYWluXG4gICAgICAgICAgICBsZXQgcmFuZF9jYW5kaWRhdGVfaWR4ID0gdGhpcy5fcmFuZF9yYW5nZShjYW5kaWRhdGVzW3NxdWFyZV0ubGVuZ3RoKTtcbiAgICAgICAgICAgIGxldCByYW5kX2NhbmRpZGF0ZSA9IGNhbmRpZGF0ZXNbc3F1YXJlXVtyYW5kX2NhbmRpZGF0ZV9pZHhdO1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9hc3NpZ24oY2FuZGlkYXRlcywgc3F1YXJlLCByYW5kX2NhbmRpZGF0ZSkpIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIE1ha2UgYSBsaXN0IG9mIGFsbCBzaW5nbGUgY2FuZGlkYXRlc1xuICAgICAgICAgICAgbGV0IHNpbmdsZV9jYW5kaWRhdGVzID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmUgb2YgdGhpcy5TUVVBUkVTKSB7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBzaW5nbGVfY2FuZGlkYXRlcy5wdXNoKGNhbmRpZGF0ZXNbc3F1YXJlXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBhdCBsZWFzdCBkaWZmaWN1bHR5LCBhbmQgdGhlIHVuaXF1ZSBjYW5kaWRhdGUgY291bnQgaXNcbiAgICAgICAgICAgIC8vIGF0IGxlYXN0IDgsIHJldHVybiB0aGUgcHV6emxlIVxuICAgICAgICAgICAgaWYgKHNpbmdsZV9jYW5kaWRhdGVzLmxlbmd0aCA+PSBfZGlmZmljdWx0eSAmJlxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmlwX2R1cHMoc2luZ2xlX2NhbmRpZGF0ZXMpLmxlbmd0aCA+PSA4KSB7XG4gICAgICAgICAgICAgICAgbGV0IGJvYXJkID0gXCJcIjtcbiAgICAgICAgICAgICAgICBsZXQgZ2l2ZW5zX2lkeHMgPSBbXTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuU1FVQVJFUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgc3F1YXJlID0gdGhpcy5TUVVBUkVTW2ldO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZCArPSBjYW5kaWRhdGVzW3NxdWFyZV07XG4gICAgICAgICAgICAgICAgICAgICAgICBnaXZlbnNfaWR4cy5wdXNoKGkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9hcmQgKz0gdGhpcy5CTEFOS19DSEFSO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIElmIHdlIGhhdmUgbW9yZSB0aGFuIGBkaWZmaWN1bHR5YCBnaXZlbnMsIHJlbW92ZSBzb21lIHJhbmRvbVxuICAgICAgICAgICAgICAgIC8vIGdpdmVucyB1bnRpbCB3ZSdyZSBkb3duIHRvIGV4YWN0bHkgYGRpZmZpY3VsdHlgXG4gICAgICAgICAgICAgICAgbGV0IG5yX2dpdmVucyA9IGdpdmVuc19pZHhzLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBpZiAobnJfZ2l2ZW5zID4gX2RpZmZpY3VsdHkpIHtcbiAgICAgICAgICAgICAgICAgICAgZ2l2ZW5zX2lkeHMgPSB0aGlzLl9zaHVmZmxlKGdpdmVuc19pZHhzKTtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBucl9naXZlbnMgLSBfZGlmZmljdWx0eTsgKytpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgdGFyZ2V0ID0gcGFyc2VJbnQoU3RyaW5nKGdpdmVuc19pZHhzW2ldKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZCA9IGJvYXJkLnN1YnN0cigwLCB0YXJnZXQpICsgdGhpcy5CTEFOS19DSEFSICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib2FyZC5zdWJzdHIodGFyZ2V0ICsgMSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gRG91YmxlIGNoZWNrIGJvYXJkIGlzIHNvbHZhYmxlXG4gICAgICAgICAgICAgICAgLy8gVE9ETzogTWFrZSBhIHN0YW5kYWxvbmUgYm9hcmQgY2hlY2tlci4gU29sdmUgaXMgZXhwZW5zaXZlLlxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNvbHZlKGJvYXJkKSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9hcmQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIEdpdmUgdXAgYW5kIHRyeSBhIG5ldyBwdXp6bGVcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2VuZXJhdGUoZGlmZmljdWx0eSk7XG4gICAgfTtcbiAgICAvLyBTb2x2ZVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBzb2x2ZSA9IChib2FyZCwgcmV2ZXJzZSkgPT4ge1xuICAgICAgICAvKiBTb2x2ZSBhIHN1ZG9rdSBwdXp6bGUgZ2l2ZW4gYSBzdWRva3UgYGJvYXJkYCwgaS5lLiwgYW4gODEtY2hhcmFjdGVyXG4gICAgICAgIHN0cmluZyBvZiBzdWRva3UuRElHSVRTLCAxLTksIGFuZCBzcGFjZXMgaWRlbnRpZmllZCBieSAnLicsIHJlcHJlc2VudGluZyB0aGVcbiAgICAgICAgc3F1YXJlcy4gVGhlcmUgbXVzdCBiZSBhIG1pbmltdW0gb2YgMTcgZ2l2ZW5zLiBJZiB0aGUgZ2l2ZW4gYm9hcmQgaGFzIG5vXG4gICAgICAgIHNvbHV0aW9ucywgcmV0dXJuIGZhbHNlLlxuICBcbiAgICAgICAgT3B0aW9uYWxseSBzZXQgYHJldmVyc2VgIHRvIHNvbHZlIFwiYmFja3dhcmRzXCIsIGkuZS4sIHJvdGF0ZSB0aHJvdWdoIHRoZVxuICAgICAgICBwb3NzaWJpbGl0aWVzIGluIHJldmVyc2UuIFVzZWZ1bCBmb3IgY2hlY2tpbmcgaWYgdGhlcmUgaXMgbW9yZSB0aGFuIG9uZVxuICAgICAgICBzb2x1dGlvbi5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gQXNzdXJlIGEgdmFsaWQgYm9hcmRcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMudmFsaWRhdGVfYm9hcmQoYm9hcmQpO1xuICAgICAgICBpZiAocmVwb3J0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgbnVtYmVyIG9mIGdpdmVucyBpcyBhdCBsZWFzdCBNSU5fR0lWRU5TXG4gICAgICAgIGxldCBucl9naXZlbnMgPSAwO1xuICAgICAgICBmb3IgKGxldCBpIG9mIGJvYXJkKSB7XG4gICAgICAgICAgICBpZiAoaSAhPT0gdGhpcy5CTEFOS19DSEFSICYmIHRoaXMuX2luKGksIHRoaXMuRElHSVRTKSkge1xuICAgICAgICAgICAgICAgICsrbnJfZ2l2ZW5zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChucl9naXZlbnMgPCB0aGlzLk1JTl9HSVZFTlMpIHtcbiAgICAgICAgICAgIHRocm93IFwiVG9vIGZldyBnaXZlbnMuIE1pbmltdW0gZ2l2ZW5zIGlzIFwiICsgdGhpcy5NSU5fR0lWRU5TO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgcmV2ZXJzZSB0byBmYWxzZVxuICAgICAgICByZXZlcnNlID0gcmV2ZXJzZSB8fCBmYWxzZTtcbiAgICAgICAgbGV0IGNhbmRpZGF0ZXMgPSB0aGlzLl9nZXRfY2FuZGlkYXRlc19tYXAoYm9hcmQpO1xuICAgICAgICBsZXQgcmVzdWx0ID0gdGhpcy5fc2VhcmNoKGNhbmRpZGF0ZXMsIHJldmVyc2UpO1xuICAgICAgICBpZiAocmVzdWx0KSB7XG4gICAgICAgICAgICBsZXQgc29sdXRpb24gPSBcIlwiO1xuICAgICAgICAgICAgZm9yIChsZXQgc3F1YXJlIGluIHJlc3VsdCkge1xuICAgICAgICAgICAgICAgIHNvbHV0aW9uICs9IHJlc3VsdFtzcXVhcmVdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNvbHV0aW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9O1xuICAgIGdldENhbmRpZGF0ZXMgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGFsbCBwb3NzaWJsZSBjYW5kaWRhdGVlcyBmb3IgZWFjaCBzcXVhcmUgYXMgYSBncmlkIG9mXG4gICAgICAgIGNhbmRpZGF0ZXMsIHJldHVybm5pbmcgYGZhbHNlYCBpZiBhIGNvbnRyYWRpY3Rpb24gaXMgZW5jb3VudGVyZWQuXG4gICAgXG4gICAgICAgIFJlYWxseSBqdXN0IGEgd3JhcHBlciBmb3Igc3Vkb2t1Ll9nZXRfY2FuZGlkYXRlc19tYXAgZm9yIHByb2dyYW1tZXJcbiAgICAgICAgY29uc3VtcHRpb24uXG4gICAgICAgICovXG4gICAgICAgIC8vIEFzc3VyZSBhIHZhbGlkIGJvYXJkXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLnZhbGlkYXRlX2JvYXJkKGJvYXJkKTtcbiAgICAgICAgaWYgKHJlcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgcmVwb3J0O1xuICAgICAgICB9XG4gICAgICAgIC8vIEdldCBhIGNhbmRpZGF0ZXMgbWFwXG4gICAgICAgIGxldCBjYW5kaWRhdGVzX21hcCA9IHRoaXMuX2dldF9jYW5kaWRhdGVzX21hcChib2FyZCk7XG4gICAgICAgIC8vIElmIHRoZXJlJ3MgYW4gZXJyb3IsIHJldHVybiBmYWxzZVxuICAgICAgICBpZiAoIWNhbmRpZGF0ZXNfbWFwKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gVHJhbnNmb3JtIGNhbmRpZGF0ZXMgbWFwIGludG8gZ3JpZFxuICAgICAgICBsZXQgcm93cyA9IFtdO1xuICAgICAgICBsZXQgY3VyX3JvdyA9IFtdO1xuICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBpbiBjYW5kaWRhdGVzX21hcCkge1xuICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXMgPSBjYW5kaWRhdGVzX21hcFtzcXVhcmVdO1xuICAgICAgICAgICAgY3VyX3Jvdy5wdXNoKGNhbmRpZGF0ZXMpO1xuICAgICAgICAgICAgaWYgKGkgJSA5ID09IDgpIHtcbiAgICAgICAgICAgICAgICByb3dzLnB1c2goY3VyX3Jvdyk7XG4gICAgICAgICAgICAgICAgY3VyX3JvdyA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKytpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByb3dzO1xuICAgIH07XG4gICAgZ2V0UmVtYWluaW5nRGlnaXRzID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIGNvbnN0IGNhbmRpZGF0ZXMgPSB0aGlzLmdldENhbmRpZGF0ZXMoYm9hcmQpO1xuICAgICAgICBjb25zdCBjaGFyYWN0ZXJzID0gKGNhbmRpZGF0ZXMgfHwgW10pXG4gICAgICAgICAgICAubWFwKChpdGVtLCBpKSA9PiBnYW1lW2ldID09PSAnLicgPyBpdGVtIDogJycpXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHJpcF9kdXBzKGNoYXJhY3RlcnMpLnNvcnQoKTtcbiAgICB9O1xuICAgIF9nZXRfY2FuZGlkYXRlc19tYXAgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogR2V0IGFsbCBwb3NzaWJsZSBjYW5kaWRhdGVzIGZvciBlYWNoIHNxdWFyZSBhcyBhIG1hcCBpbiB0aGUgZm9ybVxuICAgICAgICB7c3F1YXJlOiBzdWRva3UuRElHSVRTfSB1c2luZyByZWN1cnNpdmUgY29uc3RyYWludCBwcm9wYWdhdGlvbi4gUmV0dXJuIGBmYWxzZWBcbiAgICAgICAgaWYgYSBjb250cmFkaWN0aW9uIGlzIGVuY291bnRlcmVkXG4gICAgICAgICovXG4gICAgICAgIC8vIEFzc3VyZSBhIHZhbGlkIGJvYXJkXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLnZhbGlkYXRlX2JvYXJkKGJvYXJkKTtcbiAgICAgICAgaWYgKHJlcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgcmVwb3J0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYW5kaWRhdGVfbWFwID0ge307XG4gICAgICAgIGxldCBzcXVhcmVzX3ZhbHVlc19tYXAgPSB0aGlzLl9nZXRfc3F1YXJlX3ZhbHNfbWFwKGJvYXJkKTtcbiAgICAgICAgLy8gU3RhcnQgYnkgYXNzaWduaW5nIGV2ZXJ5IGRpZ2l0IGFzIGEgY2FuZGlkYXRlIHRvIGV2ZXJ5IHNxdWFyZVxuICAgICAgICBmb3IgKGxldCBzaSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZV9tYXBbc2ldID0gdGhpcy5ESUdJVFM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGVhY2ggbm9uLWJsYW5rIHNxdWFyZSwgYXNzaWduIGl0cyB2YWx1ZSBpbiB0aGUgY2FuZGlkYXRlIG1hcCBhbmRcbiAgICAgICAgLy8gcHJvcGlnYXRlLlxuICAgICAgICBmb3IgKGxldCBzcXVhcmUgaW4gc3F1YXJlc192YWx1ZXNfbWFwKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gc3F1YXJlc192YWx1ZXNfbWFwW3NxdWFyZV07XG4gICAgICAgICAgICBpZiAodGhpcy5faW4odmFsLCB0aGlzLkRJR0lUUykpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3X2NhbmRpZGF0ZXMgPSB0aGlzLl9hc3NpZ24oY2FuZGlkYXRlX21hcCwgc3F1YXJlLCB2YWwpO1xuICAgICAgICAgICAgICAgIC8vIEZhaWwgaWYgd2UgY2FuJ3QgYXNzaWduIHZhbCB0byBzcXVhcmVcbiAgICAgICAgICAgICAgICBpZiAoIW5ld19jYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZV9tYXA7XG4gICAgfTtcbiAgICBfc2VhcmNoID0gKGNhbmRpZGF0ZXMsIHJldmVyc2UpID0+IHtcbiAgICAgICAgLyogR2l2ZW4gYSBtYXAgb2Ygc3F1YXJlcyAtPiBjYW5kaWF0ZXMsIHVzaW5nIGRlcHRoLWZpcnN0IHNlYXJjaCxcbiAgICAgICAgcmVjdXJzaXZlbHkgdHJ5IGFsbCBwb3NzaWJsZSB2YWx1ZXMgdW50aWwgYSBzb2x1dGlvbiBpcyBmb3VuZCwgb3IgZmFsc2VcbiAgICAgICAgaWYgbm8gc29sdXRpb24gZXhpc3RzLlxuICAgICAgICAqL1xuICAgICAgICAvLyBSZXR1cm4gaWYgZXJyb3IgaW4gcHJldmlvdXMgaXRlcmF0aW9uXG4gICAgICAgIGlmICghY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgcmV2ZXJzZSB0byBmYWxzZVxuICAgICAgICByZXZlcnNlID0gcmV2ZXJzZSB8fCBmYWxzZTtcbiAgICAgICAgLy8gSWYgb25seSBvbmUgY2FuZGlkYXRlIGZvciBldmVyeSBzcXVhcmUsIHdlJ3ZlIGEgc29sdmVkIHB1enpsZSFcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBjYW5kaWRhdGVzIG1hcC5cbiAgICAgICAgbGV0IG1heF9ucl9jYW5kaWRhdGVzID0gMDtcbiAgICAgICAgbGV0IG1heF9jYW5kaWRhdGVzX3NxdWFyZSA9IG51bGw7XG4gICAgICAgIGNhbmRpZGF0ZXM7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGxldCBucl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChucl9jYW5kaWRhdGVzID4gbWF4X25yX2NhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBtYXhfbnJfY2FuZGlkYXRlcyA9IG5yX2NhbmRpZGF0ZXM7XG4gICAgICAgICAgICAgICAgbWF4X2NhbmRpZGF0ZXNfc3F1YXJlID0gc3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhfbnJfY2FuZGlkYXRlcyA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hvb3NlIHRoZSBibGFuayBzcXVhcmUgd2l0aCB0aGUgZmV3ZXN0IHBvc3NpYmlsaXRpZXMgPiAxXG4gICAgICAgIGxldCBtaW5fbnJfY2FuZGlkYXRlcyA9IDEwO1xuICAgICAgICBsZXQgbWluX2NhbmRpZGF0ZXNfc3F1YXJlID0gJyc7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGxldCBucl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChucl9jYW5kaWRhdGVzIDwgbWluX25yX2NhbmRpZGF0ZXMgJiYgbnJfY2FuZGlkYXRlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBtaW5fbnJfY2FuZGlkYXRlcyA9IG5yX2NhbmRpZGF0ZXM7XG4gICAgICAgICAgICAgICAgbWluX2NhbmRpZGF0ZXNfc3F1YXJlID0gc3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNlYXJjaCB0aHJvdWdoIGVhY2ggb2YgdGhlIGNhbmRpZGF0ZXMgb2YgdGhlIHNxdWFyZVxuICAgICAgICAvLyBzdGFydGluZyB3aXRoIHRoZSBvbmUgd2l0aCBmZXdlc3QgY2FuZGlkYXRlcy5cbiAgICAgICAgLy8gUm90YXRlIHRocm91Z2ggdGhlIGNhbmRpZGF0ZXMgZm9yd2FyZHNcbiAgICAgICAgbGV0IG1pbl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1ttaW5fY2FuZGlkYXRlc19zcXVhcmVdO1xuICAgICAgICBpZiAoIXJldmVyc2UpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHZhbCBvZiBtaW5fY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBhIG5vbi1yZWRpY3Vsb3VzIGRlZXAgY29weSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX2NvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZXMpKTtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXh0ID0gdGhpcy5fc2VhcmNoKHRoaXMuX2Fzc2lnbihjYW5kaWRhdGVzX2NvcHksIG1pbl9jYW5kaWRhdGVzX3NxdWFyZSwgdmFsKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXNfbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlc19uZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJvdGF0ZSB0aHJvdWdoIHRoZSBjYW5kaWRhdGVzIGJhY2t3YXJkc1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgdmkgPSBtaW5fY2FuZGlkYXRlcy5sZW5ndGggLSAxOyB2aSA+PSAwOyAtLXZpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IG1pbl9jYW5kaWRhdGVzW3ZpXTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgYSBub24tcmVkaWN1bG91cyBkZWVwIGNvcHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19jb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVzKSk7XG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbmV4dCA9IHRoaXMuX3NlYXJjaCh0aGlzLl9hc3NpZ24oY2FuZGlkYXRlc19jb3B5LCBtaW5fY2FuZGlkYXRlc19zcXVhcmUsIHZhbCksIHJldmVyc2UpO1xuICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzX25leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNfbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZ2V0IHRocm91Z2ggYWxsIGNvbWJpbmF0aW9ucyBvZiB0aGUgc3F1YXJlIHdpdGggdGhlIGZld2VzdFxuICAgICAgICAvLyBjYW5kaWRhdGVzIHdpdGhvdXQgZmluZGluZyBhbiBhbnN3ZXIsIHRoZXJlIGlzbid0IG9uZS4gUmV0dXJuIGZhbHNlLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBfYXNzaWduID0gKGNhbmRpZGF0ZXMsIHNxdWFyZSwgdmFsKSA9PiB7XG4gICAgICAgIC8qIEVsaW1pbmF0ZSBhbGwgdmFsdWVzLCAqZXhjZXB0KiBmb3IgYHZhbGAsIGZyb20gYGNhbmRpZGF0ZXNgIGF0XG4gICAgICAgIGBzcXVhcmVgIChjYW5kaWRhdGVzW3NxdWFyZV0pLCBhbmQgcHJvcGFnYXRlLiBSZXR1cm4gdGhlIGNhbmRpZGF0ZXMgbWFwXG4gICAgICAgIHdoZW4gZmluaXNoZWQuIElmIGEgY29udHJhZGljaXRvbiBpcyBmb3VuZCwgcmV0dXJuIGZhbHNlLlxuICBcbiAgICAgICAgV0FSTklORzogVGhpcyB3aWxsIG1vZGlmeSB0aGUgY29udGVudHMgb2YgYGNhbmRpZGF0ZXNgIGRpcmVjdGx5LlxuICAgICAgICAqL1xuICAgICAgICAvLyBHcmFiIGEgbGlzdCBvZiBjYW5pZGF0ZXMgd2l0aG91dCAndmFsJ1xuICAgICAgICBsZXQgb3RoZXJfdmFscyA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5yZXBsYWNlKHZhbCwgXCJcIik7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgb3RoZXIgdmFsdWVzIGFuZCBlbGltaW5hdGUgdGhlbSBmcm9tIHRoZSBjYW5kaWRhdGVzXG4gICAgICAgIC8vIGF0IHRoZSBjdXJyZW50IHNxdWFyZSwgYW5kIHByb3BpZ2F0ZS4gSWYgYXQgYW55IHBvaW50IHdlIGdldCBhXG4gICAgICAgIC8vIGNvbnRyYWRpY3Rpb24sIHJldHVybiBmYWxzZS5cbiAgICAgICAgZm9yIChsZXQgb3RoZXJfdmFsIG9mIG90aGVyX3ZhbHMpIHtcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX25leHQgPSB0aGlzLl9lbGltaW5hdGUoY2FuZGlkYXRlcywgc3F1YXJlLCBvdGhlcl92YWwpO1xuICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGVzX25leHQpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29udHJhZGljdGlvbiBmb3VuZCBieSBfZWxpbWluYXRlLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgfTtcbiAgICBfZWxpbWluYXRlID0gKGNhbmRpZGF0ZXMsIHNxdWFyZSwgdmFsKSA9PiB7XG4gICAgICAgIC8qIEVsaW1pbmF0ZSBgdmFsYCBmcm9tIGBjYW5kaWRhdGVzYCBhdCBgc3F1YXJlYCwgKGNhbmRpZGF0ZXNbc3F1YXJlXSksXG4gICAgICAgIGFuZCBwcm9wYWdhdGUgd2hlbiB2YWx1ZXMgb3IgcGxhY2VzIDw9IDIuIFJldHVybiB1cGRhdGVkIGNhbmRpZGF0ZXMsXG4gICAgICAgIHVubGVzcyBhIGNvbnRyYWRpY3Rpb24gaXMgZGV0ZWN0ZWQsIGluIHdoaWNoIGNhc2UsIHJldHVybiBmYWxzZS5cbiAgXG4gICAgICAgIFdBUk5JTkc6IFRoaXMgd2lsbCBtb2RpZnkgdGhlIGNvbnRlbnRzIG9mIGBjYW5kaWRhdGVzYCBkaXJlY3RseS5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gSWYgYHZhbGAgaGFzIGFscmVhZHkgYmVlbiBlbGltaW5hdGVkIGZyb20gY2FuZGlkYXRlc1tzcXVhcmVdLCByZXR1cm5cbiAgICAgICAgLy8gd2l0aCBjYW5kaWRhdGVzLlxuICAgICAgICBpZiAoIXRoaXMuX2luKHZhbCwgY2FuZGlkYXRlc1tzcXVhcmVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGB2YWxgIGZyb20gY2FuZGlkYXRlc1tzcXVhcmVdXG4gICAgICAgIGNhbmRpZGF0ZXNbc3F1YXJlXSA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5yZXBsYWNlKHZhbCwgJycpO1xuICAgICAgICAvLyBJZiB0aGUgc3F1YXJlIGhhcyBvbmx5IGNhbmRpZGF0ZSBsZWZ0LCBlbGltaW5hdGUgdGhhdCB2YWx1ZSBmcm9tIGl0c1xuICAgICAgICAvLyBwZWVyc1xuICAgICAgICBsZXQgbnJfY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGg7XG4gICAgICAgIGlmIChucl9jYW5kaWRhdGVzID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0X3ZhbCA9IGNhbmRpZGF0ZXNbc3F1YXJlXTtcbiAgICAgICAgICAgIGZvciAobGV0IHBlZXIgb2YgdGhpcy5TUVVBUkVfUEVFUlNfTUFQW3NxdWFyZV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXcgPSB0aGlzLl9lbGltaW5hdGUoY2FuZGlkYXRlcywgcGVlciwgdGFyZ2V0X3ZhbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGVzX25ldykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgc3F1YXJlIGhhcyBubyBjYW5kaWRhdGVzLCB3ZSBoYXZlIGEgY29udHJhZGljdGlvbi5cbiAgICAgICAgICAgIC8vIFJldHVybiBmYWxzZS5cbiAgICAgICAgfVxuICAgICAgICBpZiAobnJfY2FuZGlkYXRlcyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgdW5pdCBpcyByZWR1Y2VkIHRvIG9ubHkgb25lIHBsYWNlIGZvciBhIHZhbHVlLCB0aGVuIGFzc2lnbiBpdFxuICAgICAgICBmb3IgKGxldCB1bml0IG9mIHRoaXMuU1FVQVJFX1VOSVRTX01BUFtzcXVhcmVdKSB7XG4gICAgICAgICAgICBsZXQgdmFsX3BsYWNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgdW5pdF9zcXVhcmUgb2YgdW5pdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbih2YWwsIGNhbmRpZGF0ZXNbdW5pdF9zcXVhcmVdKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxfcGxhY2VzLnB1c2godW5pdF9zcXVhcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGxhY2UgZm9yIHRoaXMgdmFsdWUsIHdlIGhhdmUgYSBjb250cmFkaXRpb24hXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGlmICh2YWxfcGxhY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgdGhlIHZhbHVlIGNhbiBvbmx5IGJlIGluIG9uZSBwbGFjZS4gQXNzaWduIGl0IHRoZXJlLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsX3BsYWNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXcgPSB0aGlzLl9hc3NpZ24oY2FuZGlkYXRlcywgdmFsX3BsYWNlc1swXSwgdmFsKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmRpZGF0ZXNfbmV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgfTtcbiAgICAvLyBTcXVhcmUgcmVsYXRpb25zaGlwc1xuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICAvLyBTcXVhcmVzLCBhbmQgdGhlaXIgcmVsYXRpb25zaGlwcyB3aXRoIHZhbHVlcywgdW5pdHMsIGFuZCBwZWVycy5cbiAgICBfZ2V0X3NxdWFyZV92YWxzX21hcCA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYSBtYXAgb2Ygc3F1YXJlcyAtPiB2YWx1ZXNcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNxdWFyZXNfdmFsc19tYXAgPSB7fTtcbiAgICAgICAgLy8gTWFrZSBzdXJlIGBib2FyZGAgaXMgYSBzdHJpbmcgb2YgbGVuZ3RoIDgxXG4gICAgICAgIGlmIChib2FyZC5sZW5ndGggIT0gdGhpcy5TUVVBUkVTLmxlbmd0aCkge1xuICAgICAgICAgICAgdGhyb3cgXCJCb2FyZC9zcXVhcmVzIGxlbmd0aCBtaXNtYXRjaC5cIjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5TUVVBUkVTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgc3F1YXJlc192YWxzX21hcFt0aGlzLlNRVUFSRVNbaV1dID0gYm9hcmRbaV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZXNfdmFsc19tYXA7XG4gICAgfTtcbiAgICBfZ2V0X3NxdWFyZV91bml0c19tYXAgPSAoc3F1YXJlcywgdW5pdHMpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgbWFwIG9mIGBzcXVhcmVzYCBhbmQgdGhlaXIgYXNzb2NpYXRlZCB1bml0cyAocm93LCBjb2wsIGJveClcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNxdWFyZV91bml0X21hcCA9IHt9O1xuICAgICAgICAvLyBGb3IgZXZlcnkgc3F1YXJlLi4uXG4gICAgICAgIGZvciAobGV0IHNpIGluIHNxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlID0gc3F1YXJlc1tzaV07XG4gICAgICAgICAgICAvLyBNYWludGFpbiBhIGxpc3Qgb2YgdGhlIGN1cnJlbnQgc3F1YXJlJ3MgdW5pdHNcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlX3VuaXRzID0gW107XG4gICAgICAgICAgICAvLyBMb29rIHRocm91Z2ggdGhlIHVuaXRzLCBhbmQgc2VlIGlmIHRoZSBjdXJyZW50IHNxdWFyZSBpcyBpbiBpdCxcbiAgICAgICAgICAgIC8vIGFuZCBpZiBzbywgYWRkIGl0IHRvIHRoZSBsaXN0IG9mIG9mIHRoZSBzcXVhcmUncyB1bml0cy5cbiAgICAgICAgICAgIGZvciAobGV0IHVpIGluIHVuaXRzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGN1cl91bml0ID0gdW5pdHNbdWldO1xuICAgICAgICAgICAgICAgIGlmIChjdXJfdW5pdC5pbmRleE9mKGN1cl9zcXVhcmUpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBjdXJfc3F1YXJlX3VuaXRzLnB1c2goY3VyX3VuaXQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNhdmUgdGhlIGN1cnJlbnQgc3F1YXJlIGFuZCBpdHMgdW5pdHMgdG8gdGhlIG1hcFxuICAgICAgICAgICAgc3F1YXJlX3VuaXRfbWFwW2N1cl9zcXVhcmVdID0gY3VyX3NxdWFyZV91bml0cztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlX3VuaXRfbWFwO1xuICAgIH07XG4gICAgX2dldF9zcXVhcmVfcGVlcnNfbWFwID0gKHNxdWFyZXMsIHVuaXRzX21hcCkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYSBtYXAgb2YgYHNxdWFyZXNgIGFuZCB0aGVpciBhc3NvY2lhdGVkIHBlZXJzLCBpLmUuLCBhIHNldCBvZlxuICAgICAgICBvdGhlciBzcXVhcmVzIGluIHRoZSBzcXVhcmUncyB1bml0LlxuICAgICAgICAqL1xuICAgICAgICBsZXQgc3F1YXJlX3BlZXJzX21hcCA9IHt9O1xuICAgICAgICAvLyBGb3IgZXZlcnkgc3F1YXJlLi4uXG4gICAgICAgIGZvciAobGV0IHNpIGluIHNxdWFyZXMpIHtcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlID0gc3F1YXJlc1tzaV07XG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZV91bml0cyA9IHVuaXRzX21hcFtjdXJfc3F1YXJlXTtcbiAgICAgICAgICAgIC8vIE1haW50YWluIGxpc3Qgb2YgdGhlIGN1cnJlbnQgc3F1YXJlJ3MgcGVlcnNcbiAgICAgICAgICAgIGxldCBjdXJfc3F1YXJlX3BlZXJzID0gW107XG4gICAgICAgICAgICAvLyBMb29rIHRocm91Z2ggdGhlIGN1cnJlbnQgc3F1YXJlJ3MgdW5pdHMgbWFwLi4uXG4gICAgICAgICAgICBmb3IgKGxldCBzdWkgb2YgY3VyX3NxdWFyZV91bml0cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJfdW5pdCA9IHN1aTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCB1aSBvZiBjdXJfdW5pdCkge1xuICAgICAgICAgICAgICAgICAgICBsZXQgY3VyX3VuaXRfc3F1YXJlID0gdWk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjdXJfc3F1YXJlX3BlZXJzLmluZGV4T2YoY3VyX3VuaXRfc3F1YXJlKSA9PT0gLTEgJiZcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cl91bml0X3NxdWFyZSAhPT0gY3VyX3NxdWFyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY3VyX3NxdWFyZV9wZWVycy5wdXNoKGN1cl91bml0X3NxdWFyZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHNxdWFyZSBhbiBpdHMgYXNzb2NpYXRlZCBwZWVycyB0byB0aGUgbWFwXG4gICAgICAgICAgICBzcXVhcmVfcGVlcnNfbWFwW2N1cl9zcXVhcmVdID0gY3VyX3NxdWFyZV9wZWVycztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3F1YXJlX3BlZXJzX21hcDtcbiAgICB9O1xuICAgIF9nZXRfYWxsX3VuaXRzID0gKHJvd3MsIGNvbHMpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgbGlzdCBvZiBhbGwgdW5pdHMgKHJvd3MsIGNvbHMsIGJveGVzKVxuICAgICAgICAqL1xuICAgICAgICBsZXQgdW5pdHMgPSBbXTtcbiAgICAgICAgLy8gUm93c1xuICAgICAgICBmb3IgKGxldCByaSBvZiByb3dzKSB7XG4gICAgICAgICAgICB1bml0cy5wdXNoKHRoaXMuX2Nyb3NzKHJpLCBjb2xzKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ29sdW1uc1xuICAgICAgICBmb3IgKGxldCBjaSBvZiBjb2xzKSB7XG4gICAgICAgICAgICB1bml0cy5wdXNoKHRoaXMuX2Nyb3NzKHJvd3MsIGNpKSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQm94ZXNcbiAgICAgICAgbGV0IHJvd19zcXVhcmVzID0gW1wiQUJDXCIsIFwiREVGXCIsIFwiR0hJXCJdO1xuICAgICAgICBsZXQgY29sX3NxdWFyZXMgPSBbXCIxMjNcIiwgXCI0NTZcIiwgXCI3ODlcIl07XG4gICAgICAgIGZvciAobGV0IHJzaSBpbiByb3dfc3F1YXJlcykge1xuICAgICAgICAgICAgZm9yIChsZXQgY3NpIGluIGNvbF9zcXVhcmVzKSB7XG4gICAgICAgICAgICAgICAgdW5pdHMucHVzaCh0aGlzLl9jcm9zcyhyb3dfc3F1YXJlc1tyc2ldLCBjb2xfc3F1YXJlc1tjc2ldKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuaXRzO1xuICAgIH07XG4gICAgLy8gQ29udmVyc2lvbnNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgYm9hcmRfc3RyaW5nX3RvX2dyaWQgPSAoYm9hcmRfc3RyaW5nKSA9PiB7XG4gICAgICAgIC8qIENvbnZlcnQgYSBib2FyZCBzdHJpbmcgdG8gYSB0d28tZGltZW5zaW9uYWwgYXJyYXlcbiAgICAgICAgKi9cbiAgICAgICAgY29uc3Qgcm93cyA9IFtdO1xuICAgICAgICBsZXQgY3VyX3JvdyA9IFtdO1xuICAgICAgICBmb3IgKGNvbnN0IGkgb2YgYm9hcmRfc3RyaW5nKSB7XG4gICAgICAgICAgICBjdXJfcm93LnB1c2goaSk7XG4gICAgICAgICAgICBpZiAoTnVtYmVyKGkpICUgOSA9PSA4KSB7XG4gICAgICAgICAgICAgICAgcm93cy5wdXNoKGN1cl9yb3cpO1xuICAgICAgICAgICAgICAgIGN1cl9yb3cgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcm93cztcbiAgICB9O1xuICAgIGJvYXJkX2dyaWRfdG9fc3RyaW5nID0gKGJvYXJkX2dyaWQpID0+IHtcbiAgICAgICAgLyogQ29udmVydCBhIGJvYXJkIGdyaWQgdG8gYSBzdHJpbmdcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IGJvYXJkX3N0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IHIgPSAwOyByIDwgOTsgKytyKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBjID0gMDsgYyA8IDk7ICsrYykge1xuICAgICAgICAgICAgICAgIGJvYXJkX3N0cmluZyArPSBib2FyZF9ncmlkW3JdW2NdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBib2FyZF9zdHJpbmc7XG4gICAgfTtcbiAgICAvLyBVdGlsaXR5XG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHByaW50X2JvYXJkID0gKGJvYXJkKSA9PiB7XG4gICAgICAgIC8qIFByaW50IGEgc3Vkb2t1IGBib2FyZGAgdG8gdGhlIGNvbnNvbGUuXG4gICAgICAgICovXG4gICAgICAgIC8vIEFzc3VyZSBhIHZhbGlkIGJvYXJkXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLnZhbGlkYXRlX2JvYXJkKGJvYXJkKTtcbiAgICAgICAgaWYgKHJlcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgcmVwb3J0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBWX1BBRERJTkcgPSBcIiBcIjsgLy8gSW5zZXJ0IGFmdGVyIGVhY2ggc3F1YXJlXG4gICAgICAgIGxldCBIX1BBRERJTkcgPSAnXFxuJzsgLy8gSW5zZXJ0IGFmdGVyIGVhY2ggcm93XG4gICAgICAgIGxldCBWX0JPWF9QQURESU5HID0gXCIgIFwiOyAvLyBCb3ggdmVydGljYWwgcGFkZGluZ1xuICAgICAgICBsZXQgSF9CT1hfUEFERElORyA9ICdcXG4nOyAvLyBCb3ggaG9yaXpvbnRhbCBwYWRkaW5nXG4gICAgICAgIGxldCBkaXNwbGF5X3N0cmluZyA9IFwiXCI7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgYm9hcmQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzcXVhcmUgPSBib2FyZFtpXTtcbiAgICAgICAgICAgIC8vIEFkZCB0aGUgc3F1YXJlIGFuZCBzb21lIHBhZGRpbmdcbiAgICAgICAgICAgIGRpc3BsYXlfc3RyaW5nICs9IHNxdWFyZSArIFZfUEFERElORztcbiAgICAgICAgICAgIC8vIFZlcnRpY2FsIGVkZ2Ugb2YgYSBib3gsIGluc2VydCB2LiBib3ggcGFkZGluZ1xuICAgICAgICAgICAgaWYgKGkgJSAzID09PSAyKSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheV9zdHJpbmcgKz0gVl9CT1hfUEFERElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEVuZCBvZiBhIGxpbmUsIGluc2VydCBob3Jpei4gcGFkZGluZ1xuICAgICAgICAgICAgaWYgKGkgJSA5ID09PSA4KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheV9zdHJpbmcgKz0gSF9QQURESU5HO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gSG9yaXpvbnRhbCBlZGdlIG9mIGEgYm94LCBpbnNlcnQgaC4gYm94IHBhZGRpbmdcbiAgICAgICAgICAgIGlmIChpICUgMjcgPT09IDI2KSB7XG4gICAgICAgICAgICAgICAgZGlzcGxheV9zdHJpbmcgKz0gSF9CT1hfUEFERElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyhkaXNwbGF5X3N0cmluZyk7XG4gICAgfTtcbiAgICB2YWxpZGF0ZV9ib2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gaWYgdGhlIGdpdmVuIGBib2FyZGAgaXMgdmFsaWQgb3Igbm90LiBJZiBpdCdzIHZhbGlkLCByZXR1cm5cbiAgICAgICAgdHJ1ZS4gSWYgaXQncyBub3QsIHJldHVybiBhIHN0cmluZyBvZiB0aGUgcmVhc29uIHdoeSBpdCdzIG5vdC5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGVtcHR5IGJvYXJkXG4gICAgICAgIGlmICghYm9hcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBcIkVtcHR5IGJvYXJkXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW52YWxpZCBib2FyZCBsZW5ndGhcbiAgICAgICAgaWYgKGJvYXJkLmxlbmd0aCAhPT0gdGhpcy5OUl9TUVVBUkVTKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGJvYXJkIHNpemUuIEJvYXJkIG11c3QgYmUgZXhhY3RseSBcIiArIHRoaXMuTlJfU1FVQVJFUyArXG4gICAgICAgICAgICAgICAgXCIgc3F1YXJlcy5cIjtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBmb3IgaW52YWxpZCBjaGFyYWN0ZXJzXG4gICAgICAgIGZvciAobGV0IGkgb2YgYm9hcmQpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5faW4oaSwgdGhpcy5ESUdJVFMpICYmIGkgIT09IHRoaXMuQkxBTktfQ0hBUikge1xuICAgICAgICAgICAgICAgIHJldHVybiBcIkludmFsaWQgYm9hcmQgY2hhcmFjdGVyIGVuY291bnRlcmVkIGF0IGluZGV4IFwiICsgaSArXG4gICAgICAgICAgICAgICAgICAgIFwiOiBcIiArIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gT3RoZXJ3aXNlLCB3ZSdyZSBnb29kLiBSZXR1cm4gdHJ1ZS5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcbiAgICBfY3Jvc3MgPSAoYSwgYikgPT4ge1xuICAgICAgICAvKiBDcm9zcyBwcm9kdWN0IG9mIGFsbCBlbGVtZW50cyBpbiBgYWAgYW5kIGBiYCwgZS5nLixcbiAgICAgICAgc3Vkb2t1Ll9jcm9zcyhcImFiY1wiLCBcIjEyM1wiKSAtPlxuICAgICAgICBbXCJhMVwiLCBcImEyXCIsIFwiYTNcIiwgXCJiMVwiLCBcImIyXCIsIFwiYjNcIiwgXCJjMVwiLCBcImMyXCIsIFwiYzNcIl1cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHJlc3VsdCA9IFtdO1xuICAgICAgICBmb3IgKGxldCBhaSBvZiBhKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBiaSBvZiBiKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2goYWkgKyBiaSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuICAgIF9pbiA9ICh2LCBzZXEpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGlmIGEgdmFsdWUgYHZgIGlzIGluIHNlcXVlbmNlIGBzZXFgLlxuICAgICAgICAqL1xuICAgICAgICByZXR1cm4gc2VxLmluZGV4T2YodikgIT09IC0xO1xuICAgIH07XG4gICAgX2ZpcnN0X3RydWUgPSAoc2VxKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiB0aGUgZmlyc3QgZWxlbWVudCBpbiBgc2VxYCB0aGF0IGlzIHRydWUuIElmIG5vIGVsZW1lbnQgaXNcbiAgICAgICAgdHJ1ZSwgcmV0dXJuIGZhbHNlLlxuICAgICAgICAqL1xuICAgICAgICBmb3IgKGxldCBpIG9mIHNlcSkge1xuICAgICAgICAgICAgaWYgKGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBfc2h1ZmZsZSA9IChzZXEpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgc2h1ZmZsZWQgdmVyc2lvbiBvZiBgc2VxYFxuICAgICAgICAqL1xuICAgICAgICAvLyBDcmVhdGUgYW4gYXJyYXkgb2YgdGhlIHNhbWUgc2l6ZSBhcyBgc2VxYCBmaWxsZWQgd2l0aCBmYWxzZVxuICAgICAgICBsZXQgc2h1ZmZsZWQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZXEubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICAgIHNodWZmbGVkLnB1c2goZmFsc2UpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgb2Ygc2VxKSB7XG4gICAgICAgICAgICBsZXQgdGkgPSB0aGlzLl9yYW5kX3JhbmdlKHNlcS5sZW5ndGgpO1xuICAgICAgICAgICAgd2hpbGUgKHNodWZmbGVkW3RpXSkge1xuICAgICAgICAgICAgICAgIHRpID0gKHRpICsgMSkgPiAoc2VxLmxlbmd0aCAtIDEpID8gMCA6ICh0aSArIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2h1ZmZsZWRbdGldID0gaTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2h1ZmZsZWQ7XG4gICAgfTtcbiAgICBfcmFuZF9yYW5nZSA9IChtYXgsIG1pbikgPT4ge1xuICAgICAgICAvKiBHZXQgYSByYW5kb20gaW50ZWdlciBpbiB0aGUgcmFuZ2Ugb2YgYG1pbmAgdG8gYG1heGAgKG5vbiBpbmNsdXNpdmUpLlxuICAgICAgICBJZiBgbWluYCBub3QgZGVmaW5lZCwgZGVmYXVsdCB0byAwLiBJZiBgbWF4YCBub3QgZGVmaW5lZCwgdGhyb3cgYW5cbiAgICAgICAgZXJyb3IuXG4gICAgICAgICovXG4gICAgICAgIG1pbiA9IG1pbiA/PyAwO1xuICAgICAgICBpZiAobWF4KSB7XG4gICAgICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbikpICsgbWluO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgXCJSYW5nZSB1bmRlZmluZWRcIjtcbiAgICAgICAgfVxuICAgIH07XG4gICAgX3N0cmlwX2R1cHMgPSAoc2VxKSA9PiB7XG4gICAgICAgIC8qIFN0cmlwIGR1cGxpY2F0ZSB2YWx1ZXMgZnJvbSBgc2VxYFxuICAgICAgICAqL1xuICAgICAgICBsZXQgc2VxX3NldCA9IFtdO1xuICAgICAgICBsZXQgZHVwX21hcCA9IHt9O1xuICAgICAgICBmb3IgKGxldCBlIG9mIHNlcSkge1xuICAgICAgICAgICAgaWYgKCFkdXBfbWFwW2VdKSB7XG4gICAgICAgICAgICAgICAgc2VxX3NldC5wdXNoKGUpO1xuICAgICAgICAgICAgICAgIGR1cF9tYXBbZV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXFfc2V0O1xuICAgIH07XG4gICAgX2ZvcmNlX3JhbmdlID0gKG5yLCBtYXgsIG1pbikgPT4ge1xuICAgICAgICAvKiBGb3JjZSBgbnJgIHRvIGJlIHdpdGhpbiB0aGUgcmFuZ2UgZnJvbSBgbWluYCB0bywgYnV0IG5vdCBpbmNsdWRpbmcsXG4gICAgICAgIGBtYXhgLiBgbWluYCBpcyBvcHRpb25hbCwgYW5kIHdpbGwgZGVmYXVsdCB0byAwLiBJZiBgbnJgIGlzIHVuZGVmaW5lZCxcbiAgICAgICAgdHJlYXQgaXQgYXMgemVyby5cbiAgICAgICAgKi9cbiAgICAgICAgbWluID0gbWluIHx8IDA7XG4gICAgICAgIG5yID0gbnIgfHwgMDtcbiAgICAgICAgaWYgKG5yIDwgbWluKSB7XG4gICAgICAgICAgICByZXR1cm4gbWluO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuciA+IG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIG1heDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gbnI7XG4gICAgfTtcbn07XG5TdWRva3VUUyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuXSwgU3Vkb2t1VFMpO1xuZXhwb3J0cy5TdWRva3VUUyA9IFN1ZG9rdVRTO1xuU3Vkb2t1VFNbXCJAQGdvZHNtYWNrL2RpOnN0YXRpYy1kZXBzLXByb3BcIl0gPSBbXTtcbmNvbnN0IHN1ZG9rdSA9IG5ldyBTdWRva3VUUygpO1xuY29uc3QgZ2FtZSA9IHN1ZG9rdS5nZW5lcmF0ZSgnZWFzeScpO1xuZ2FtZTtcbmNvbnN0IHJlc3VsdCA9IHN1ZG9rdS5zb2x2ZShnYW1lKTtcbnJlc3VsdDtcbmNvbnN0IGNhbmRpZGF0ZXMgPSBzdWRva3VcbiAgICAuZ2V0Q2FuZGlkYXRlcyhnYW1lKVxuICAgIC5mbGF0KCk7XG5jb25zdCByZW1haW5pbmcgPSBbLi4ubmV3IFNldChjYW5kaWRhdGVzLm1hcCgoY2FuZGlkYXRlLCBpKSA9PiB7XG4gICAgICAgIGlmIChnYW1lW2ldID09PSAnLicpXG4gICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlO1xuICAgIH0pLmpvaW4oJycpLnNwbGl0KCcnKSldLnNvcnQoKTtcbmNvbnNvbGUubG9nKGNhbmRpZGF0ZXMpO1xuY29uc29sZS5sb2cocmVtYWluaW5nKTtcbnN1ZG9rdS5wcmludF9ib2FyZChnYW1lKTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYSwgX2IsIF9jLCBfZCwgX2U7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlZhbmlsbGFKc1ZpZXcgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgR2FtZURpZmZpY3VsdHlfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lRGlmZmljdWx0eVwiKTtcbmNvbnN0IElHYW1lUHViU3ViXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lUHViU3ViXCIpO1xuY29uc3QgSUdhbWVMb2dpY18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZUxvZ2ljXCIpO1xuY29uc3QgSUdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTWFuYWdlclwiKTtcbmNvbnN0IElHYW1lUnVubmVyXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lUnVubmVyXCIpO1xuY29uc3QgR2FtZVNldHRpbmdzXzEgPSByZXF1aXJlKFwiLi9HYW1lU2V0dGluZ3NcIik7XG5jb25zdCB2ZWMyXzEgPSByZXF1aXJlKFwiLi4vdXRpbHMvdmVjMlwiKTtcbmxldCBWYW5pbGxhSnNWaWV3ID0gY2xhc3MgVmFuaWxsYUpzVmlldyB7XG4gICAgZ2FtZU1hbmFnZXI7XG4gICAgbG9naWM7XG4gICAgcnVubmVyO1xuICAgIGV2ZW50cztcbiAgICBjb25maWc7XG4gICAgcm9vdDtcbiAgICBib2FyZDtcbiAgICBjdHJsO1xuICAgIGZvcm07XG4gICAgZGlmZjtcbiAgICBjb25zdHJ1Y3RvcihnYW1lTWFuYWdlciwgbG9naWMsIHJ1bm5lciwgZXZlbnRzLCBjb25maWcpIHtcbiAgICAgICAgdGhpcy5nYW1lTWFuYWdlciA9IGdhbWVNYW5hZ2VyO1xuICAgICAgICB0aGlzLmxvZ2ljID0gbG9naWM7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vkb2t1X2JvYXJkJyk7XG4gICAgICAgIHRoaXMuY3RybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250cm9scycpO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIHRoaXMuZGlmZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgfVxuICAgIGdldENlbGxEaXNwbGF5VmFsdWUobW9kZWwsIGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGNlbGwudmFsdWUgPT09ICcuJyA/ICcnIDogY2VsbC52YWx1ZTtcbiAgICB9XG4gICAgcmVuZGVyQ2VsbChtb2RlbCwgY2VsbCkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIC8vIGVsLnN0eWxlLmhlaWdodCA9ICcyNXB4J1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAnNjJweCc7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMubG9naWMuZ2V0VGlsZVZlY3RvckZvckluZGV4KGNlbGwuaW5kZXgpO1xuICAgICAgICBjb25zdCBpc1NlbGVjdGVkID0gbW9kZWwuc2VsZWN0ZWQgPT09IGNlbGwuaW5kZXg7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2ZpeCcsIGNlbGwuaXNIaW50KTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBpc1NlbGVjdGVkKTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnY3VycmVudCcsIGlzU2VsZWN0ZWQpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdncm91cCcsIGlzU2VsZWN0ZWQpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdib3JkZXJfdicsIFszLCA2XS5pbmNsdWRlcyh4ICsgMSkpO1xuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdib3JkZXJfaCcsIFszLCA2XS5pbmNsdWRlcyh5ICsgMSkpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3gnLCBTdHJpbmcoeCArIDEpKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd5JywgU3RyaW5nKHkgKyAxKSk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnaWR4JywgU3RyaW5nKGNlbGwuaW5kZXgpKTtcbiAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgLy8gc3Bhbi5zdHlsZS5saW5lSGVpZ2h0ID0gJzI1cHgnXG4gICAgICAgIHNwYW4uc3R5bGUubGluZUhlaWdodCA9ICc2MnB4JztcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENlbGxEaXNwbGF5VmFsdWUobW9kZWwsIGNlbGwpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIGVsLm91dGVySFRNTDtcbiAgICB9XG4gICAgcmVuZGVyQ2VsbExpc3QobW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIG1vZGVsLmNlbGxzXG4gICAgICAgICAgICAubWFwKGNlbGwgPT4gdGhpcy5yZW5kZXJDZWxsKG1vZGVsLCBjZWxsKSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgcmVuZGVyQm9hcmQobW9kZWwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbmRlckJvYXJkJywgbW9kZWwpO1xuICAgICAgICB0aGlzLmJvYXJkLnN0eWxlLndpZHRoID0gXCI1NTNweFwiO1xuICAgICAgICAvLyB0aGlzLmJvYXJkLnN0eWxlLndpZHRoID0gXCIyMjBweFwiO1xuICAgICAgICB0aGlzLmJvYXJkLmlubmVySFRNTCA9IHRoaXMucmVuZGVyQ2VsbExpc3QobW9kZWwpO1xuICAgIH1cbiAgICBzZXRDZWxsU2l6ZSh7IGNlbGxTaXplOiBbeCwgeV0gfSkge1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY2VsbC13aWR0aCcsIHggKyAncHgnKTtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLWNlbGwtaGVpZ2h0JywgeSArICdweCcpO1xuICAgIH1cbiAgICBzZXRDZWxsQ2hhcmFjdGVycyh7IGZsYWdDaGFyYWN0ZXIsIG1pbmVDaGFyYWN0ZXIgfSkge1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tZmxhZy1jaGFyYWN0ZXInLCBmbGFnQ2hhcmFjdGVyKTtcbiAgICAgICAgdGhpcy5yb290LnN0eWxlLnNldFByb3BlcnR5KCctLW1pbmUtY2hhcmFjdGVyJywgbWluZUNoYXJhY3Rlcik7XG4gICAgfVxuICAgIHN0YXJ0R2FtZSA9IGFzeW5jIChkaWZmaWN1bHR5ID0gR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eS5lYXN5KSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKCdzdGFydEdhbWUnLCBkaWZmaWN1bHR5KTtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkID0gdGhpcy5nYW1lTWFuYWdlci5jcmVhdGUoZGlmZmljdWx0eSk7XG4gICAgICAgIC8vIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgIC8vICAgaWYgKGdhbWVib2FyZC5zdGF0ZSA8IEdhbWVTdGF0ZS5XT04pXG4gICAgICAgIC8vICAgICBnYW1lYm9hcmQuc3RhdGUgPSBHYW1lU3RhdGUuR0FNRU9WRVI7XG4gICAgICAgIC8vIH0sIHsgb25jZTogdHJ1ZSB9KTtcbiAgICAgICAgYXdhaXQgdGhpcy5ydW5uZXIucGxheUdhbWUoZ2FtZWJvYXJkKTtcbiAgICB9O1xuICAgIHN1Ym1pdEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgZm9ybSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCBkaWZmaWN1bHR5ID0gZm9ybS5nZXQoJ2RpZmZpY3VsdHknKTtcbiAgICAgICAgdGhpcy5zdGFydEdhbWUoZGlmZmljdWx0eSk7XG4gICAgfTtcbiAgICBldmVudEhhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2V2ZW50SGFuZGxlcicsIGV2ZW50KTtcbiAgICAgICAgc3dpdGNoIChldmVudC50eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdjb25maWctY2hhbmdlZCc6XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDZWxsU2l6ZSh0aGlzLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZXRDZWxsQ2hhcmFjdGVycyh0aGlzLmNvbmZpZyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICd1cGRhdGUnOlxuICAgICAgICAgICAgY2FzZSAnYmVnaW4nOlxuICAgICAgICAgICAgY2FzZSAnZW5kJzpcbiAgICAgICAgICAgICAgICB0aGlzLnJlbmRlckJvYXJkKGV2ZW50LnBheWxvYWQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfTtcbiAgICByZWdpc3Rlckxpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ldmVudHNcbiAgICAgICAgICAgIC5zdWJzY3JpYmUodGhpcy5ldmVudEhhbmRsZXIpO1xuICAgICAgICAvLyB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgLy8gICAnc3VibWl0JyxcbiAgICAgICAgLy8gICB0aGlzLnN1Ym1pdEhhbmRsZXJcbiAgICAgICAgLy8gKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHVucmVnaXN0ZXJMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzXG4gICAgICAgICAgICAudW5zdWJzY3JpYmUodGhpcy5ldmVudEhhbmRsZXIpO1xuICAgICAgICAvLyB0aGlzLmZvcm0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgLy8gICAnc3VibWl0JyxcbiAgICAgICAgLy8gICB0aGlzLnN1Ym1pdEhhbmRsZXJcbiAgICAgICAgLy8gKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb250cm9scygpIHtcbiAgICAgICAgdGhpcy5kaWZmLnJlcGxhY2VDaGlsZHJlbiguLi4oT2JqZWN0LmtleXMoR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eSkpLm1hcCh2YWx1ZSA9PiB7XG4gICAgICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ29wdGlvbicpO1xuICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCd2YWx1ZScsIFN0cmluZyh2YWx1ZSkpO1xuICAgICAgICAgICAgZWwudGV4dENvbnRlbnQgPSB2YWx1ZTtcbiAgICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdGhpcy5jb25maWcuZGVmYXVsdERpZmZpY3VsdHkpXG4gICAgICAgICAgICAgICAgZWwuc2VsZWN0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgcmV0dXJuIGVsO1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IGNlbGxTaXplSW5wdXRFbCA9IHRoaXMuY3RybFxuICAgICAgICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPWNlbGwtc2l6ZV0nKTtcbiAgICAgICAgY2VsbFNpemVJbnB1dEVsLnZhbHVlID0gU3RyaW5nKHRoaXMuY29uZmlnLmNlbGxTaXplWzBdKTtcbiAgICAgICAgY2VsbFNpemVJbnB1dEVsXG4gICAgICAgICAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXYgPT4ge1xuICAgICAgICAgICAgaWYgKGV2LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpXG4gICAgICAgICAgICAgICAgdGhpcy5jb25maWcuc2V0KCdjZWxsU2l6ZScsICgwLCB2ZWMyXzEudmVjMikoTnVtYmVyKGV2LnRhcmdldC52YWx1ZSkpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbiAgICBydW4oKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbnRyb2xzKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJMaXN0ZW5lcnMoKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufTtcblZhbmlsbGFKc1ZpZXcgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVNYW5hZ2VyXzEuSUdhbWVNYW5hZ2VyKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3QsIHR5cGVvZiAoX2IgPSB0eXBlb2YgSUdhbWVMb2dpY18xLklHYW1lTG9naWMgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVMb2dpY18xLklHYW1lTG9naWMpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdCwgdHlwZW9mIChfYyA9IHR5cGVvZiBJR2FtZVJ1bm5lcl8xLklHYW1lUnVubmVyICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUnVubmVyXzEuSUdhbWVSdW5uZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfYyA6IE9iamVjdCwgdHlwZW9mIChfZCA9IHR5cGVvZiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIpID09PSBcImZ1bmN0aW9uXCIgPyBfZCA6IE9iamVjdCwgdHlwZW9mIChfZSA9IHR5cGVvZiBHYW1lU2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MgIT09IFwidW5kZWZpbmVkXCIgJiYgR2FtZVNldHRpbmdzXzEuR2FtZVNldHRpbmdzKSA9PT0gXCJmdW5jdGlvblwiID8gX2UgOiBPYmplY3RdKVxuXSwgVmFuaWxsYUpzVmlldyk7XG5leHBvcnRzLlZhbmlsbGFKc1ZpZXcgPSBWYW5pbGxhSnNWaWV3O1xuVmFuaWxsYUpzVmlld1tcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lTWFuYWdlclwiLCBcIklHYW1lTG9naWNcIiwgXCJJR2FtZVJ1bm5lclwiLCBcIklHYW1lUHViU3ViXCIsIFwiR2FtZVNldHRpbmdzXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVOUkVBQ0hBQkxFID0gZXhwb3J0cy5BU1NFUlQgPSB2b2lkIDA7XG5jb25zdCBBU1NFUlQgPSAobykgPT4ge1xuICAgIGlmIChvID09PSB1bmRlZmluZWQgfHwgbyA9PT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3NlcnRpb24gZXJyb3I6ICR7b31gKTtcbiAgICByZXR1cm4gbztcbn07XG5leHBvcnRzLkFTU0VSVCA9IEFTU0VSVDtcbmNvbnN0IFVOUkVBQ0hBQkxFID0gKG8pID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVhY2hhYmxlICR7b31gKTtcbn07XG5leHBvcnRzLlVOUkVBQ0hBQkxFID0gVU5SRUFDSEFCTEU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVjMiA9IHZvaWQgMDtcbmNvbnN0IHZlYzIgPSAoeCwgeSA9IHgpID0+IFt4LCB5XTtcbmV4cG9ydHMudmVjMiA9IHZlYzI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RhdGljRGVwc1Byb3AgPSBleHBvcnRzLnJlZmxlY3RUYXJnZXRUeXBlID0gZXhwb3J0cy5wcm94eUNvbXBhcmVLZXkgPSB2b2lkIDA7XG5leHBvcnRzLnByb3h5Q29tcGFyZUtleSA9ICdAQGdvZHNtYWNrL2RpOnByb3h5LWNvbXBhcmlzb24ta2V5JztcbmV4cG9ydHMucmVmbGVjdFRhcmdldFR5cGUgPSAnQEBnb2RzbWFjay9kaTp0YXJnZXQtc2luZ2xldG9uJztcbmV4cG9ydHMuc3RhdGljRGVwc1Byb3AgPSAnQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmplY3RhYmxlID0gdm9pZCAwO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuY29uc3QgSW5qZWN0YWJsZSA9ICgpID0+ICgwLCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5KSgpO1xuZXhwb3J0cy5JbmplY3RhYmxlID0gSW5qZWN0YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gKHsgc2luZ2xldG9uID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gICAgcmV0dXJuICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VHlwZSA9IHNpbmdsZXRvbiA/ICdzaW5nbGV0b24nIDogJ3RyYW5zaWVudCc7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoY29uc3RhbnRzXzEucmVmbGVjdFRhcmdldFR5cGUsIHRhcmdldFR5cGUsIHRhcmdldCk7XG4gICAgfTtcbn07XG5leHBvcnRzLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gSW5qZWN0YWJsZURlY29yYXRvckZhY3Rvcnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VydmljZSA9IHZvaWQgMDtcbmNvbnN0IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeVwiKTtcbmNvbnN0IFNlcnZpY2UgPSAoKSA9PiAoMCwgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMS5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSkoKTtcbmV4cG9ydHMuU2VydmljZSA9IFNlcnZpY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2luZ2xldG9uID0gdm9pZCAwO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuY29uc3QgU2luZ2xldG9uID0gKCkgPT4gKDAsIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkpKHsgc2luZ2xldG9uOiB0cnVlIH0pO1xuZXhwb3J0cy5TaW5nbGV0b24gPSBTaW5nbGV0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2luZ2xldG9uID0gZXhwb3J0cy5TZXJ2aWNlID0gZXhwb3J0cy5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSA9IGV4cG9ydHMuSW5qZWN0YWJsZSA9IHZvaWQgMDtcbnZhciBJbmplY3RhYmxlXzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSW5qZWN0YWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gSW5qZWN0YWJsZV8xLkluamVjdGFibGU7IH0gfSk7XG52YXIgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3Rvcnk7IH0gfSk7XG52YXIgU2VydmljZV8xID0gcmVxdWlyZShcIi4vU2VydmljZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNlcnZpY2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlcnZpY2VfMS5TZXJ2aWNlOyB9IH0pO1xudmFyIFNpbmdsZXRvbl8xID0gcmVxdWlyZShcIi4vU2luZ2xldG9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2luZ2xldG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTaW5nbGV0b25fMS5TaW5nbGV0b247IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9kZWNvcmF0b3JzXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ludGVyZmFjZS9JQ29udGFpbmVyXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ludGVyZmFjZS9JSW5qZWN0b3JcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGlicmFyeS9Db250YWluZXJcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGlicmFyeS9JbmplY3RvclwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbnRhaW5lciA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBJbmplY3Rvcl8xID0gcmVxdWlyZShcIi4vSW5qZWN0b3JcIik7XG5jb25zdCBwcm94aWZ5XzEgPSByZXF1aXJlKFwiLi4vcHJveGlmeVwiKTtcbmNsYXNzIENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7IGhvdFN3YXBwaW5nOiBmYWxzZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5nZXRJbmplY3RvciA9ICgpID0+IHsgcmV0dXJuIHRoaXMuaW5qZWN0b3I7IH07XG4gICAgICAgIHRoaXMuaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3JfMS5JbmplY3RvcihzZXR0aW5ncyk7XG4gICAgfVxuICAgIHJlc29sdmUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbnRhaW5lckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMuc2V0dGluZ3MuaG90U3dhcHBpbmdcbiAgICAgICAgICAgID8gKDAsIHByb3hpZnlfMS5wcm94aWZ5KSh0aGlzLmluamVjdG9yLCB0YXJnZXQpXG4gICAgICAgICAgICA6IHRoaXMuaW5qZWN0b3IucmVzb2x2ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIHJlcGxhY2UodHlwZSwgaW1wbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRTZXJ2aWNlKHR5cGUsIGltcGwsIHRydWUpO1xuICAgIH1cbiAgICBjcmVhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmNyZWF0ZSh0YXJnZXQpO1xuICAgIH1cbiAgICBhZGRTZXJ2aWNlKHR5cGUsIGltcGwgPSB0eXBlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIGltcGwsIGZvcmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFNlcnZpY2VJbnN0YW5jZSh0eXBlLCBpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVySW5zdGFuY2UodHlwZSwgaW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkU2luZ2xldG9uKHR5cGUsIGltcGwgPSB0eXBlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIGltcGwsIGZvcmNlKTtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclNpbmdsZXRvbih0eXBlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFNpbmdsZXRvbkluc3RhbmNlKHR5cGUsIGluc3RhbmNlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIHR5cGUsIGZvcmNlKTtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3Rlckluc3RhbmNlKHR5cGUsIGluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9uRXhpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5pbmplY3Rvci5kZXN0cm95QWxsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyO1xuY2xhc3MgQ29udGFpbmVyRGVwZW5kZW5jeVJlc29sdXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoYEludmFsaWQgdGFyZ2V0OiAke3RhcmdldH1gKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW5qZWN0b3IgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgcHJveGlmeV8xID0gcmVxdWlyZShcIi4uL3Byb3hpZnlcIik7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7IGhvdFN3YXBwaW5nOiBmYWxzZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5yZWdpc3RlclNpbmdsZXRvbiA9ICh0eXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9fc2luZ2xldG9ucy5hZGQodGhpcy5nZXRUeXBlTmFtZSh0eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclR5cGUgPSAodHlwZSwgaW1wbCwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3kodHlwZSwgKGltcGwgfHwgdHlwZSksIGZvcmNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW5zdGFuY2UgPSAodGFyZ2V0LCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5zZXQodHlwZU5hbWUsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cHNlcnREZXBlbmRlbmN5ID0gKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jeSA9IHRoaXMuZ2V0RGVwZW5kZW5jeSh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoZGVwZW5kZW5jeSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbmplY3RvckRlcGVuZGVuY3lOb3RGb3VuZEVycm9yKHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnREZXBlbmRlbmN5KHR5cGVOYW1lLCB0YXJnZXQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbG9hZERlcGVuZGVuY3kgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5pbmZvKGBIb3QtU3dhcHBpbmcgXCIke3RhcmdldC5uYW1lfVwiIGRlcGVuZGVuY3kuYClcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgbmVlZHMgbW9yZSB0ZXN0aW5nXG4gICAgICAgICAgICBjb25zdCBkZXAgPSB0aGlzLmdldERlcGVuZGVuY3kodGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuX19vdmVycmlkZURlcGVuZGVuY3kodGFyZ2V0LCBkZXApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19yZXBsYWNlSW5zdGFuY2VJbkNhY2hlKHRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0VHlwZU5hbWUgPSAodCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnYgPSAodHlwZW9mIHQgPT09ICdzdHJpbmcnKSA/IHQgOiAodCA9PT0gbnVsbCB8fCB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0Lm5hbWUpIHx8ICh0ID09PSBudWxsIHx8IHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHQuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICBpZiAoIXJ2KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbmplY3RvckdldFR5cGVOYW1lRXJyb3IodCk7XG4gICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgIH07XG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgICAgICAvLyNyZWdpb24gaW50ZXJuYWxzXG4gICAgICAgIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9fc2luZ2xldG9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fX2xvZ2dlciA9IG5ldyBQcm94eShjb25zb2xlLCB7XG4gICAgICAgICAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8jcmVnaW9uIGFwaVxuICAgIHJlc29sdmUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5fX2luc3RhbmNlQ2FjaGUuaGFzKHR5cGVOYW1lKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9faW5zdGFuY2VDYWNoZS5nZXQodHlwZU5hbWUpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgaGFzRGVwZW5kZW5jeSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdHlwZW5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmhhcyh0eXBlbmFtZSk7XG4gICAgfVxuICAgIGdldERlcGVuZGVuY3kodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmdldCh0aGlzLmdldFR5cGVOYW1lKHRhcmdldCkpO1xuICAgIH1cbiAgICBpbnNlcnREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQsIG92ZXJyaWRlKSB7XG4gICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQsIG92ZXJyaWRlKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykgPyB0YXJnZXQgOiByZXNvbHZlZDtcbiAgICB9XG4gICAgY3JlYXRlKHRhcmdldCkge1xuICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVzb2x2aW5nIGRlcGVuZGVuY3kgPT4nLCB0eXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy51cHNlcnREZXBlbmRlbmN5KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHsgaW5qZWN0aW9ucyB9ID0gdGhpcy5fX3Jlc29sdmVUb2tlbnMocmVzb2x2ZWQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX19jcmVhdGVPYmplY3QocmVzb2x2ZWQsIGluamVjdGlvbnMpO1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1NpbmdsZXRvbkluc3RhbmNlKHR5cGVOYW1lLCByZXNvbHZlZCkpXG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5zZXQodHlwZU5hbWUsIGluc3RhbmNlKTtcbiAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ2NyZWF0ZWQnLCBpbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgZGVzdHJveUFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZGVwcyA9IFsuLi50aGlzLl9faW5zdGFuY2VDYWNoZS52YWx1ZXMoKV07XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbFNldHRsZWQoZGVwcy5tYXAoZWFjaCA9PiB0aGlzLl9fZGlzcG9zZU9iamVjdChlYWNoKSkpO1xuICAgICAgICAgICAgdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxpc3REZXBlbmRlbmNpZXMoeyBzb3J0ID0gZmFsc2UsIGxvZyA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWy4uLnRoaXMuX19kZXBlbmRlbmN5Q2FjaGUua2V5cygpXTtcbiAgICAgICAgaWYgKHNvcnQpXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc29ydCgpO1xuICAgICAgICBpZiAobG9nKVxuICAgICAgICAgICAgdGhpcy5fX2xvZ2dlci5pbmZvKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGRlcGVuZGVuY2llc0FzSlNPTigpIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXlzID0gWy4uLnRoaXMuX19kZXBlbmRlbmN5Q2FjaGUua2V5cygpXTtcbiAgICAgICAgcmV0dXJuIGNhY2hlS2V5cy5zb3J0KCkucmVkdWNlKChhY2MsIG4pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5nZXQobik7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY2MpLCB7IFtuXTogKF9hID0gaW5zdGFuY2UgPT09IG51bGwgfHwgaW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluc3RhbmNlLmNvbnN0cnVjdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSB9KTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBfX3Jlc29sdmVUb2tlbnMocmVzb2x2ZWQpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGNvbnN0IHJlZmxlY3RlZCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgcmVzb2x2ZWQpO1xuICAgICAgICAvLyB0b2tlbnMgYXJlIHJlcXVpcmVkIGRlcGVuZGVuY2llcywgd2hpbGUgaW5qZWN0aW9ucyBhcmUgcmVzb2x2ZWQgdG9rZW5zIGZyb20gdGhlIEluamVjdG9yXG4gICAgICAgIGNvbnN0IHRva2VucyA9IChfYiA9IChfYSA9IHJlZmxlY3RlZCA9PT0gbnVsbCB8fCByZWZsZWN0ZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZmxlY3RlZC5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChvLm5hbWUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2EgPSByZXNvbHZlZFtjb25zdGFudHNfMS5zdGF0aWNEZXBzUHJvcF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbHRlcigobykgPT4gbyAhPSBudWxsKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgICAgIGlmICh0b2tlbnMuZmluZChvID0+IG8ubmFtZSA9PT0gJ09iamVjdCcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW5qZWN0b3JEZXBlbmRlbmN5UmVzb2x1dGlvbkVycm9yKHJlc29sdmVkLCB0b2tlbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltcGwgPSB0aGlzLmdldERlcGVuZGVuY3koY2xzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1wbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3koY2xzLCBpbXBsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KGNscywgY2xzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluamVjdGlvbnMgPSAoKF9jID0gdGhpcy5zZXR0aW5ncykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmhvdFN3YXBwaW5nKVxuICAgICAgICAgICAgPyB0b2tlbnMubWFwKHRva2VuID0+ICgwLCBwcm94aWZ5XzEucHJveGlmeSkodGhpcywgdG9rZW4pKVxuICAgICAgICAgICAgOiB0b2tlbnMubWFwKHRva2VuID0+IHRoaXMucmVzb2x2ZSh0b2tlbikpO1xuICAgICAgICByZXR1cm4geyByZXNvbHZlZCwgaW5qZWN0aW9ucyB9O1xuICAgIH1cbiAgICBfX2FkZERlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZE1heWJlLCBvdmVycmlkZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5oYXModHlwZU5hbWUpKSB7XG4gICAgICAgICAgICBpZiAoIW92ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHJlc29sdmVkVHlwZSlcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKGBPdmVycmlkaW5nID0+ICR7dGFyZ2V0TmFtZX0gdG8gPT4gJHt0eXBlTmFtZX1gKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHJlc29sdmVkVHlwZSlcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKGBTZXR0aW5nID0+ICR7dGFyZ2V0TmFtZX0gdG8gPT4gJHt0eXBlTmFtZX1gKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc29sdmVkVHlwZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gcmVzb2x2ZWRNYXliZVxuICAgICAgICAgICAgOiByZXNvbHZlZE1heWJlID09IG51bGwgPyB0YXJnZXRcbiAgICAgICAgICAgICAgICA6IC8qIG90aGVyd2lzZSAqLyByZXNvbHZlZE1heWJlO1xuICAgICAgICB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLnNldCh0eXBlTmFtZSwgcmVzb2x2ZWRUeXBlKTtcbiAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUuZGVsZXRlKHR5cGVOYW1lKTtcbiAgICB9XG4gICAgX19vdmVycmlkZURlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZCkge1xuICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykgPyB0YXJnZXQgOiByZXNvbHZlZDtcbiAgICB9XG4gICAgX19wdXJnZUluc3RhbmNlRnJvbUNhY2hlKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbnN0YW5jZUNhY2hlLmRlbGV0ZSh0eXBlTmFtZSk7XG4gICAgfVxuICAgIF9fcmVwbGFjZUluc3RhbmNlSW5DYWNoZSh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fX3B1cmdlSW5zdGFuY2VGcm9tQ2FjaGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZSh0YXJnZXQpO1xuICAgIH1cbiAgICBfX2lzU2luZ2xldG9uSW5zdGFuY2UodHlwZU5hbWUsIHJlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc2luZ2xldG9ucy5oYXModHlwZU5hbWUpIHx8XG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdFRhcmdldFR5cGUocmVzb2x2ZWQpID09PSAnc2luZ2xldG9uJztcbiAgICB9XG4gICAgX19yZWZsZWN0VGFyZ2V0VHlwZShyZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShjb25zdGFudHNfMS5yZWZsZWN0VGFyZ2V0VHlwZSwgcmVzb2x2ZWQpO1xuICAgIH1cbiAgICBfX2NyZWF0ZU9iamVjdCh0YXJnZXQsIGluamVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fX2xvZ2dlci5sb2coJ2NyZWF0aW5nIG9iamVjdCwgdHlwZU5hbWU6JywgdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpKTtcbiAgICAgICAgcmV0dXJuIG5ldyB0YXJnZXQoLi4uaW5qZWN0aW9ucyk7XG4gICAgfVxuICAgIF9fZGlzcG9zZU9iamVjdCh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgY29uc3QgZm4gPSB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQuZGlzcG9zZTtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCAoZm4gPT09IG51bGwgfHwgZm4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZuKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkluamVjdG9yID0gSW5qZWN0b3I7XG47XG5jbGFzcyBJbmplY3RvckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCB0b2tlbnMpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBgVW5hYmxlIHRvIHJlc29sdmUgZGVwZW5kZW5jaWVzIGZvciA9PiAke3RhcmdldC5uYW1lfSwgZGVwcyA9PiAke3Rva2Vucy5tYXAobyA9PiBvLm5hbWUpfWA7XG4gICAgICAgIGNvbnN0IGhlbHAgPSBgUG9zc2libGUgbWlzdXNlIG9mIEBJbmplY3RhYmxlKCkgZGVjb3JhdG9yIG9uIGNsYXNzICR7dGFyZ2V0Lm5hbWV9YDtcbiAgICAgICAgc3VwZXIoYCR7ZXJyb3J9XFxuJHtoZWxwfWApO1xuICAgIH1cbn1cbmNsYXNzIEluamVjdG9yRGVwZW5kZW5jeU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKGBUYXJnZXQgbm90IGZvdW5kOiAke3RhcmdldH1gKTtcbiAgICB9XG59XG5jbGFzcyBJbmplY3RvckdldFR5cGVOYW1lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKGBzb21ldGhpbmcgZnVja3kgZ290IHBhc3NlZCB0byBnZXRUeXBlTmFtZSA9PiAke3RhcmdldH1gKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29tcGFyZSA9IGV4cG9ydHMucHJveGlmeSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY2xhc3MgUHJveGlmeU51bGxUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZnVuY3Rpb24gcHJveGlmeShpbmplY3RvciwgdG9rZW4pIHtcbiAgICBpZiAodG9rZW4gPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgUHJveGlmeU51bGxUb2tlbkVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJveHkoLyogaW5qZWN0b3IucmVzb2x2ZSh0b2tlbikgKi8ge30sIHtcbiAgICAgICAgZ2V0KF8sIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBpbmplY3Rvci5yZXNvbHZlKHRva2VuKTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBjb25zdGFudHNfMS5wcm94eUNvbXBhcmVLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuZXhwb3J0cy5wcm94aWZ5ID0gcHJveGlmeTtcbmNvbnN0IGNvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBhID0gKF9iID0gKChfYSA9IGEpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9KVtjb25zdGFudHNfMS5wcm94eUNvbXBhcmVLZXldKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBhO1xuICAgIGIgPSAoX2QgPSAoKF9jID0gYikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDoge30pW2NvbnN0YW50c18xLnByb3h5Q29tcGFyZUtleV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGI7XG4gICAgcmV0dXJuIE9iamVjdC5pcyhhLCBiKTtcbn07XG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N1ZG9rdVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdWRva3VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VS05ZGFiZDNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZS52YW5pbGxhLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
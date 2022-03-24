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
___CSS_LOADER_EXPORT___.push([module.id, "H1 {\n  background:black;\n  color:white;\n  margin:0px 0px 2px 0px;\n  font-size:20px;\n  padding:2px 1px 5px 1px;\n  text-align:center;\n}\n\nbody {\n  font-family:verdana,helvetica,arial,sans-serif;\n  border:0px; margin:0px; padding:0px;\n\n  background:url(\n      " + ___CSS_LOADER_URL_REPLACEMENT_0___ + "\n  ) repeat;\n}\n\n/* board */\n.sudoku_board {\n  margin:6px auto;\n\n  overflow: hidden;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.sudoku_board .cell {\n  width:11.11%;\n  /* display: inline-block; */\n  float: left;\n  cursor:pointer;\n  text-align: center;\n  overflow: hidden;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n\n  background:white;\n}\n\n.sudoku_board .cell.border_h {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset 0px -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_h.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 black, inset 0px -2px 0 black;\n}\n\n.sudoku_board .cell span {\n  color:#2c3e50;\n  font-size:14px;\n  text-align:middle;\n}\n\n.sudoku_board .cell.selected, .sudoku_board .cell.selected.fix {\n  background:#FFE;\n}\n\n.sudoku_board .cell.selected.current {\n  position:relative;\n  background: #3498db;\n  font-weight:bold;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.sudoku_board .cell.selected.current span {\n  color:white;\n}\n\n.sudoku_board .cell.selected.group {\n  color:blue;\n}\n\n.sudoku_board .cell span.samevalue, .sudoku_board .cell.fix span.samevalue {\n  font-weight:bold;\n  color:#3498db;\n}\n\n.sudoku_board .cell.notvalid, .sudoku_board .cell.selected.notvalid{\n  font-weight:bold;\n  color:white;;\n  background:#e74c3c;\n}\n\n.sudoku_board .cell.fix {\n  background:#ecf0f1;\n  cursor:not-allowed;\n}\n\n.sudoku_board .cell.fix span {\ncolor:#7f8c8d;\n}\n\n.sudoku_board .cell .solution {\nfont-size:10px;\ncolor:#d35400;\n}\n\n.sudoku_board .cell .note {\n  color:#bdc3c7;\n  width:50%;\n  height:50%;\n  display: inline-block;\n  float:left;\n  text-align:center;\n  font-size:14px;\n\n  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.gameover_container .gameover {\n  color:white;\n  font-weight:bold;\n    text-align:center;\n\n  display:block;\n  position:absolute;\n  width:90%;\n  padding:10px;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n\n.restart {\nbackground:#7F8C8D;\ncolor:#ecf0f1;\n}\n\n/* console */\n.board_console_container, .gameover_container {\n  background-color: rgba(127, 140, 141, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n   user-select: none;\n}\n\n.board_console {\n  display:block;\n  position:absolute;\n  width:50%;\n  color:white;\n  background-color: rgba(127, 140, 141, 0.7);\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.board_console .num {\n  width:33.33%;\n  color:#2c3e50;\n  padding: 1px;\n  display: inline-block;\n  font-weight:bold;\n  font-size:24px;\n  text-align: center;\n  cursor:pointer;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n}\n\n\n.board_console .num:hover {\n  color:white;\n  background:#f1c40f;\n}\n\n.board_console .num.remove {\n  width:66.66%;\n}\n\n.board_console .num.note {\n  background:#95a5a6;\n  color:#ecf0f1;\n}\n\n.board_console .num.note:hover {\n  background:#95a5a6;\n  color:#f1c40f;\n}\n\n.board_console .num.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected:hover {\ncolor:white;\n}\n\n.board_console .num.no:hover {\n  color:white;\n  cursor:not-allowed;\n}\n\n.board_console .num.remove:hover {\n  color:white;\n  background:#c0392b;\n}\n\n.statistics {\n  text-align:center;\n}\n\n#sudoku_menu {\n  background-color: black;\n  position: absolute;\n  z-index:2;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n#sudoku_menu ul {\n margin: 0;\n padding: 100px 0px 0px 0px;\n list-style: none;\n}\n\n#sudoku_menu ul li{\nmargin: 0px 50px;\n}\n\n#sudoku_menu ul li a {\ntext-align:center;\npadding: 15px 20px;\nfont-size: 28px;\nfont-weight: bold;\ncolor: white;\ntext-decoration: none;\ndisplay: block;\nborder-bottom: 1px solid #2c3e50;\n}\n\n#sudoku_menu.open-sidebar {\nleft:0px;\n}\n\n#sidebar-toggle {\n  z-index:3;\n  background: #bdc3c7;\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  padding: 22px 18px;\n  float: left;\n}\n\n#sidebar-toggle .bar{\n  display: block;\n  width: 28px;\n  margin-bottom: 4px;\n  height: 4px;\n  background-color: #f0f0f0;\n  border-radius: 1px;\n}\n\n#sidebar-toggle .bar:last-child{\n   margin-bottom: 0;\n}\n\n/*Responsive Stuff*/\n\n@media all and (orientation:portrait) and (min-width: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:60px; }\n  .board_console .num { font-size:60px; }\n}\n\n@media all and (orientation:landscape) and (min-height: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:50px; }\n  .board_console .num { font-size:50px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 1000px){\n  .sudoku_board .cell span { font-size:30px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 640px){\n.sudoku_board .cell span { font-size:24px; }\n.sudoku_board .cell .note { font-size:10px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 470px){\n.sudoku_board .cell span { font-size:16px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 320px){\n.sudoku_board .cell span { font-size:12px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and  (max-width: 240px){\n.sudoku_board .cell span { font-size:10px; }\n}\n", "",{"version":3,"sources":["webpack://./src/sudoku.nice.css"],"names":[],"mappings":"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","sourcesContent":["H1 {\n  background:black;\n  color:white;\n  margin:0px 0px 2px 0px;\n  font-size:20px;\n  padding:2px 1px 5px 1px;\n  text-align:center;\n}\n\nbody {\n  font-family:verdana,helvetica,arial,sans-serif;\n  border:0px; margin:0px; padding:0px;\n\n  background:url(\n      data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAIUlEQVQYV2N89urtfwYiACNIoZSYMCMhtaMK8YYQ0cEDAG5yJ8eLRhTfAAAAAElFTkSuQmCC\n  ) repeat;\n}\n\n/* board */\n.sudoku_board {\n  margin:6px auto;\n\n  overflow: hidden;\n\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.sudoku_board .cell {\n  width:11.11%;\n  /* display: inline-block; */\n  float: left;\n  cursor:pointer;\n  text-align: center;\n  overflow: hidden;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n\n  background:white;\n}\n\n.sudoku_board .cell.border_h {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset 0px -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 #34495e;\n}\n\n.sudoku_board .cell.border_h.border_v {\n  box-shadow: 0px 0px 0px 1px #bdc3c7, inset -2px 0 0 black, inset 0px -2px 0 black;\n}\n\n.sudoku_board .cell span {\n  color:#2c3e50;\n  font-size:14px;\n  text-align:middle;\n}\n\n.sudoku_board .cell.selected, .sudoku_board .cell.selected.fix {\n  background:#FFE;\n}\n\n.sudoku_board .cell.selected.current {\n  position:relative;\n  background: #3498db;\n  font-weight:bold;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.sudoku_board .cell.selected.current span {\n  color:white;\n}\n\n.sudoku_board .cell.selected.group {\n  color:blue;\n}\n\n.sudoku_board .cell span.samevalue, .sudoku_board .cell.fix span.samevalue {\n  font-weight:bold;\n  color:#3498db;\n}\n\n.sudoku_board .cell.notvalid, .sudoku_board .cell.selected.notvalid{\n  font-weight:bold;\n  color:white;;\n  background:#e74c3c;\n}\n\n.sudoku_board .cell.fix {\n  background:#ecf0f1;\n  cursor:not-allowed;\n}\n\n.sudoku_board .cell.fix span {\ncolor:#7f8c8d;\n}\n\n.sudoku_board .cell .solution {\nfont-size:10px;\ncolor:#d35400;\n}\n\n.sudoku_board .cell .note {\n  color:#bdc3c7;\n  width:50%;\n  height:50%;\n  display: inline-block;\n  float:left;\n  text-align:center;\n  font-size:14px;\n\n  -webkit-box-sizing: border-box;\n    -moz-box-sizing: border-box;\n    box-sizing: border-box;\n}\n\n.gameover_container .gameover {\n  color:white;\n  font-weight:bold;\n    text-align:center;\n\n  display:block;\n  position:absolute;\n  width:90%;\n  padding:10px;\n\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n\n.restart {\nbackground:#7F8C8D;\ncolor:#ecf0f1;\n}\n\n/* console */\n.board_console_container, .gameover_container {\n  background-color: rgba(127, 140, 141, 0.7);\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n\n   -webkit-user-select: none;\n   -moz-user-select: none;\n   -ms-user-select: none;\n   user-select: none;\n}\n\n.board_console {\n  display:block;\n  position:absolute;\n  width:50%;\n  color:white;\n  background-color: rgba(127, 140, 141, 0.7);\n  box-shadow: 0px 0px 5px 5px #bdc3c7;\n}\n\n.board_console .num {\n  width:33.33%;\n  color:#2c3e50;\n  padding: 1px;\n  display: inline-block;\n  font-weight:bold;\n  font-size:24px;\n  text-align: center;\n  cursor:pointer;\n\n  -webkit-box-sizing: border-box; /* Safari/Chrome, other WebKit */\n    -moz-box-sizing: border-box;    /* Firefox, other Gecko */\n    box-sizing: border-box;\n\n  box-shadow: 0px 0px 0px 1px #bdc3c7;\n}\n\n\n.board_console .num:hover {\n  color:white;\n  background:#f1c40f;\n}\n\n.board_console .num.remove {\n  width:66.66%;\n}\n\n.board_console .num.note {\n  background:#95a5a6;\n  color:#ecf0f1;\n}\n\n.board_console .num.note:hover {\n  background:#95a5a6;\n  color:#f1c40f;\n}\n\n.board_console .num.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected {\n  background:#f1c40f;\n  box-shadow: 0px 0px 3px 3px #bdc3c7;\n}\n\n.board_console .num.note.selected:hover {\ncolor:white;\n}\n\n.board_console .num.no:hover {\n  color:white;\n  cursor:not-allowed;\n}\n\n.board_console .num.remove:hover {\n  color:white;\n  background:#c0392b;\n}\n\n.statistics {\n  text-align:center;\n}\n\n#sudoku_menu {\n  background-color: black;\n  position: absolute;\n  z-index:2;\n  width: 100%;\n  height: 100%;\n  left: -100%;\n  box-sizing: border-box;\n  -moz-box-sizing: border-box;\n}\n\n#sudoku_menu ul {\n margin: 0;\n padding: 100px 0px 0px 0px;\n list-style: none;\n}\n\n#sudoku_menu ul li{\nmargin: 0px 50px;\n}\n\n#sudoku_menu ul li a {\ntext-align:center;\npadding: 15px 20px;\nfont-size: 28px;\nfont-weight: bold;\ncolor: white;\ntext-decoration: none;\ndisplay: block;\nborder-bottom: 1px solid #2c3e50;\n}\n\n#sudoku_menu.open-sidebar {\nleft:0px;\n}\n\n#sidebar-toggle {\n  z-index:3;\n  background: #bdc3c7;\n  border-radius: 3px;\n  display: block;\n  position: relative;\n  padding: 22px 18px;\n  float: left;\n}\n\n#sidebar-toggle .bar{\n  display: block;\n  width: 28px;\n  margin-bottom: 4px;\n  height: 4px;\n  background-color: #f0f0f0;\n  border-radius: 1px;\n}\n\n#sidebar-toggle .bar:last-child{\n   margin-bottom: 0;\n}\n\n/*Responsive Stuff*/\n\n@media all and (orientation:portrait) and (min-width: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:60px; }\n  .board_console .num { font-size:60px; }\n}\n\n@media all and (orientation:landscape) and (min-height: 640px){\n  h1 { font-size:50px; }\n  .statistics { font-size:30px; }\n  .sudoku_board .cell span { font-size:50px; }\n  .board_console .num { font-size:50px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 1000px){\n  .sudoku_board .cell span { font-size:30px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 640px){\n.sudoku_board .cell span { font-size:24px; }\n.sudoku_board .cell .note { font-size:10px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 470px){\n.sudoku_board .cell span { font-size:16px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and (max-width: 320px){\n.sudoku_board .cell span { font-size:12px; }\n.sudoku_board .cell .note { font-size:8px; }\n}\n\n@media all and (orientation:portrait) and  (max-width: 240px){\n.sudoku_board .cell span { font-size:10px; }\n}\n"],"sourceRoot":""}]);
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VanillaJsView = void 0;
const inject_1 = __webpack_require__(/*! @godsmack/inject */ "../../packages/inject/dist/index.js");
const GameDifficulty_1 = __webpack_require__(/*! ../enums/GameDifficulty */ "./src/enums/GameDifficulty.ts");
const IGamePubSub_1 = __webpack_require__(/*! ../interface/IGamePubSub */ "./src/interface/IGamePubSub.ts");
const IGameLogic_1 = __webpack_require__(/*! ../interface/IGameLogic */ "./src/interface/IGameLogic.ts");
const IGameManager_1 = __webpack_require__(/*! ../interface/IGameManager */ "./src/interface/IGameManager.ts");
const IGameRunner_1 = __webpack_require__(/*! ../interface/IGameRunner */ "./src/interface/IGameRunner.ts");
const ISudokuTS_1 = __webpack_require__(/*! ../interface/ISudokuTS */ "./src/interface/ISudokuTS.ts");
const GameSettings_1 = __webpack_require__(/*! ./GameSettings */ "./src/library/GameSettings.ts");
const vec2_1 = __webpack_require__(/*! ../utils/vec2 */ "./src/utils/vec2.ts");
let VanillaJsView = class VanillaJsView {
    gameManager;
    logic;
    sudoku;
    runner;
    events;
    config;
    root;
    board;
    ctrl;
    form;
    diff;
    constructor(gameManager, logic, sudoku, runner, events, config) {
        this.gameManager = gameManager;
        this.logic = logic;
        this.sudoku = sudoku;
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
        el.classList.toggle('border_v', [3, 6].includes(x + 1));
        el.classList.toggle('border_h', [3, 6].includes(y + 1));
        el.setAttribute('x', String(x + 1));
        el.setAttribute('y', String(y + 1));
        el.setAttribute('idx', String(cell.index));
        const span = document.createElement('span');
        span.style.lineHeight = this.config.cellSize + 'px';
        // span.style.lineHeight = '62px'
        // span.style.lineHeight = '25px'
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
        this.board.style.width = this.config.boardWidth + 'px';
        // this.board.style.width = "553px";
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
    __metadata("design:paramtypes", [typeof (_a = typeof IGameManager_1.IGameManager !== "undefined" && IGameManager_1.IGameManager) === "function" ? _a : Object, typeof (_b = typeof IGameLogic_1.IGameLogic !== "undefined" && IGameLogic_1.IGameLogic) === "function" ? _b : Object, typeof (_c = typeof ISudokuTS_1.ISudokuTS !== "undefined" && ISudokuTS_1.ISudokuTS) === "function" ? _c : Object, typeof (_d = typeof IGameRunner_1.IGameRunner !== "undefined" && IGameRunner_1.IGameRunner) === "function" ? _d : Object, typeof (_e = typeof IGamePubSub_1.IGamePubSub !== "undefined" && IGamePubSub_1.IGamePubSub) === "function" ? _e : Object, typeof (_f = typeof GameSettings_1.GameSettings !== "undefined" && GameSettings_1.GameSettings) === "function" ? _f : Object])
], VanillaJsView);
exports.VanillaJsView = VanillaJsView;
VanillaJsView["@@godsmack/di:static-deps-prop"] = ["IGameManager", "IGameLogic", "ISudokuTS", "IGameRunner", "IGamePubSub", "GameSettings"];


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0MsNkJBQTZCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUyx1QkFBdUI7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsU0FBUztBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixPQUFPO0FBQy9CLDRCQUE0QixPQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qiw4QkFBOEI7QUFDOUIsa0NBQWtDO0FBQ2xDLGtDQUFrQztBQUNsQztBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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Y2s6Ly9zdWRva3UvLi9zcmMvc3Vkb2t1Lm5pY2UuY3NzPzI3OWUiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2NvbnRhaW5lci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvZW51bXMvR2FtZURpZmZpY3VsdHkudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2VudW1zL0dhbWVTdGF0ZS50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvZ2FtZS52YW5pbGxhLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSUdhbWVMb2dpYy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lHYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lHYW1lUHViU3ViLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9pbnRlcmZhY2UvSUdhbWVSdW5uZXIudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL2ludGVyZmFjZS9JSW5wdXRQcm92aWRlci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvaW50ZXJmYWNlL0lTdWRva3VUUy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9HYW1lRXZlbnRzLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0dhbWVMb2dpYy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9HYW1lTWFuYWdlci50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9HYW1lUnVubmVyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L0dhbWVTZXR0aW5ncy50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvbGlicmFyeS9JbnB1dFByb3ZpZGVyLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L1N1ZG9rdVRTLnRzIiwid2VicGFjazovL3N1ZG9rdS8uL3NyYy9saWJyYXJ5L1ZhbmlsbGFKc1ZpZXcudHMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4vc3JjL3V0aWxzL2Fzc2VydC50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi9zcmMvdXRpbHMvdmVjMi50cyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvY29uc3RhbnRzLmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9kZWNvcmF0b3JzL0luamVjdGFibGUuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvU2VydmljZS5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvZGVjb3JhdG9ycy9TaW5nbGV0b24uanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2RlY29yYXRvcnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2luZGV4LmpzIiwid2VicGFjazovL3N1ZG9rdS8uLi8uLi9wYWNrYWdlcy9pbmplY3QvZGlzdC9pbnRlcmZhY2UvSUNvbnRhaW5lci5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvaW50ZXJmYWNlL0lJbmplY3Rvci5qcyIsIndlYnBhY2s6Ly9zdWRva3UvLi4vLi4vcGFja2FnZXMvaW5qZWN0L2Rpc3QvbGlicmFyeS9Db250YWluZXIuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L2xpYnJhcnkvSW5qZWN0b3IuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L3Byb3hpZnkuanMiLCJ3ZWJwYWNrOi8vc3Vkb2t1Ly4uLy4uL3BhY2thZ2VzL2luamVjdC9kaXN0L3R5cGVzLmpzIiwid2VicGFjazovL3N1ZG9rdS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2NodW5rIGxvYWRlZCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vc3Vkb2t1L3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9zdWRva3Uvd2VicGFjay9hZnRlci1zdGFydHVwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBSVVsRVFWUVlWMk44OXVydGZ3WWlBQ05Jb1pTWU1DTWh0YU1LOFlZUTBjRURBRzV5SjhlTFJoVGZBQUFBQUVsRlRrU3VRbUNDXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiSDEge1xcbiAgYmFja2dyb3VuZDpibGFjaztcXG4gIGNvbG9yOndoaXRlO1xcbiAgbWFyZ2luOjBweCAwcHggMnB4IDBweDtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbiAgcGFkZGluZzoycHggMXB4IDVweCAxcHg7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTp2ZXJkYW5hLGhlbHZldGljYSxhcmlhbCxzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOjBweDsgbWFyZ2luOjBweDsgcGFkZGluZzowcHg7XFxuXFxuICBiYWNrZ3JvdW5kOnVybChcXG4gICAgICBcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIlxcbiAgKSByZXBlYXQ7XFxufVxcblxcbi8qIGJvYXJkICovXFxuLnN1ZG9rdV9ib2FyZCB7XFxuICBtYXJnaW46NnB4IGF1dG87XFxuXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAtbXMtdXNlci1zZWxlY3Q6IG5vbmU7XFxuICB1c2VyLXNlbGVjdDogbm9uZTtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHtcXG4gIHdpZHRoOjExLjExJTtcXG4gIC8qIGRpc3BsYXk6IGlubGluZS1ibG9jazsgKi9cXG4gIGZsb2F0OiBsZWZ0O1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiBTYWZhcmkvQ2hyb21lLCBvdGhlciBXZWJLaXQgKi9cXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94OyAgICAvKiBGaXJlZm94LCBvdGhlciBHZWNrbyAqL1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzc7XFxuXFxuICBiYWNrZ3JvdW5kOndoaXRlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl9oIHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAwcHggLTJweCAwIDAgIzM0NDk1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfdiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgLTJweCAwIDAgIzM0NDk1ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ib3JkZXJfaC5ib3JkZXJfdiB7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNywgaW5zZXQgLTJweCAwIDAgYmxhY2ssIGluc2V0IDBweCAtMnB4IDAgYmxhY2s7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7XFxuICBjb2xvcjojMmMzZTUwO1xcbiAgZm9udC1zaXplOjE0cHg7XFxuICB0ZXh0LWFsaWduOm1pZGRsZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZCwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5maXgge1xcbiAgYmFja2dyb3VuZDojRkZFO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmN1cnJlbnQge1xcbiAgcG9zaXRpb246cmVsYXRpdmU7XFxuICBiYWNrZ3JvdW5kOiAjMzQ5OGRiO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmN1cnJlbnQgc3BhbiB7XFxuICBjb2xvcjp3aGl0ZTtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5ncm91cCB7XFxuICBjb2xvcjpibHVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4uc2FtZXZhbHVlLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCBzcGFuLnNhbWV2YWx1ZSB7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgY29sb3I6IzM0OThkYjtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5ub3R2YWxpZCwgLnN1ZG9rdV9ib2FyZCAuY2VsbC5zZWxlY3RlZC5ub3R2YWxpZHtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBjb2xvcjp3aGl0ZTs7XFxuICBiYWNrZ3JvdW5kOiNlNzRjM2M7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHtcXG4gIGJhY2tncm91bmQ6I2VjZjBmMTtcXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXggc3BhbiB7XFxuY29sb3I6IzdmOGM4ZDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAuc29sdXRpb24ge1xcbmZvbnQtc2l6ZToxMHB4O1xcbmNvbG9yOiNkMzU0MDA7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUge1xcbiAgY29sb3I6I2JkYzNjNztcXG4gIHdpZHRoOjUwJTtcXG4gIGhlaWdodDo1MCU7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmbG9hdDpsZWZ0O1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuICBmb250LXNpemU6MTRweDtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gICAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4uZ2FtZW92ZXJfY29udGFpbmVyIC5nYW1lb3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xcblxcbiAgZGlzcGxheTpibG9jaztcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6OTAlO1xcbiAgcGFkZGluZzoxMHB4O1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcblxcbi5yZXN0YXJ0IHtcXG5iYWNrZ3JvdW5kOiM3RjhDOEQ7XFxuY29sb3I6I2VjZjBmMTtcXG59XFxuXFxuLyogY29uc29sZSAqL1xcbi5ib2FyZF9jb25zb2xlX2NvbnRhaW5lciwgLmdhbWVvdmVyX2NvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMTQwLCAxNDEsIDAuNyk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDA7XFxuICBsZWZ0OiAwO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuXFxuICAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcXG4gICAtbW96LXVzZXItc2VsZWN0OiBub25lO1xcbiAgIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gICB1c2VyLXNlbGVjdDogbm9uZTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUge1xcbiAgZGlzcGxheTpibG9jaztcXG4gIHBvc2l0aW9uOmFic29sdXRlO1xcbiAgd2lkdGg6NTAlO1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDEyNywgMTQwLCAxNDEsIDAuNyk7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bSB7XFxuICB3aWR0aDozMy4zMyU7XFxuICBjb2xvcjojMmMzZTUwO1xcbiAgcGFkZGluZzogMXB4O1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGZvbnQtc2l6ZToyNHB4O1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgY3Vyc29yOnBvaW50ZXI7XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNztcXG59XFxuXFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bTpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5yZW1vdmUge1xcbiAgd2lkdGg6NjYuNjYlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUge1xcbiAgYmFja2dyb3VuZDojOTVhNWE2O1xcbiAgY29sb3I6I2VjZjBmMTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6Izk1YTVhNjtcXG4gIGNvbG9yOiNmMWM0MGY7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0uc2VsZWN0ZWQge1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlLnNlbGVjdGVkOmhvdmVyIHtcXG5jb2xvcjp3aGl0ZTtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ubzpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGN1cnNvcjpub3QtYWxsb3dlZDtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5yZW1vdmU6aG92ZXIge1xcbiAgY29sb3I6d2hpdGU7XFxuICBiYWNrZ3JvdW5kOiNjMDM5MmI7XFxufVxcblxcbi5zdGF0aXN0aWNzIHtcXG4gIHRleHQtYWxpZ246Y2VudGVyO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OjI7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGxlZnQ6IC0xMDAlO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIHtcXG4gbWFyZ2luOiAwO1xcbiBwYWRkaW5nOiAxMDBweCAwcHggMHB4IDBweDtcXG4gbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIGxpe1xcbm1hcmdpbjogMHB4IDUwcHg7XFxufVxcblxcbiNzdWRva3VfbWVudSB1bCBsaSBhIHtcXG50ZXh0LWFsaWduOmNlbnRlcjtcXG5wYWRkaW5nOiAxNXB4IDIwcHg7XFxuZm9udC1zaXplOiAyOHB4O1xcbmZvbnQtd2VpZ2h0OiBib2xkO1xcbmNvbG9yOiB3aGl0ZTtcXG50ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuZGlzcGxheTogYmxvY2s7XFxuYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMyYzNlNTA7XFxufVxcblxcbiNzdWRva3VfbWVudS5vcGVuLXNpZGViYXIge1xcbmxlZnQ6MHB4O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUge1xcbiAgei1pbmRleDozO1xcbiAgYmFja2dyb3VuZDogI2JkYzNjNztcXG4gIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgcGFkZGluZzogMjJweCAxOHB4O1xcbiAgZmxvYXQ6IGxlZnQ7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSAuYmFye1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICB3aWR0aDogMjhweDtcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXG4gIGhlaWdodDogNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YwZjBmMDtcXG4gIGJvcmRlci1yYWRpdXM6IDFweDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIC5iYXI6bGFzdC1jaGlsZHtcXG4gICBtYXJnaW4tYm90dG9tOiAwO1xcbn1cXG5cXG4vKlJlc3BvbnNpdmUgU3R1ZmYqL1xcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtaW4td2lkdGg6IDY0MHB4KXtcXG4gIGgxIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5zdGF0aXN0aWNzIHsgZm9udC1zaXplOjMwcHg7IH1cXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTo2MHB4OyB9XFxuICAuYm9hcmRfY29uc29sZSAubnVtIHsgZm9udC1zaXplOjYwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOmxhbmRzY2FwZSkgYW5kIChtaW4taGVpZ2h0OiA2NDBweCl7XFxuICBoMSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuc3RhdGlzdGljcyB7IGZvbnQtc2l6ZTozMHB4OyB9XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6NTBweDsgfVxcbiAgLmJvYXJkX2NvbnNvbGUgLm51bSB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDEwMDBweCl7XFxuICAuc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MzBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA2NDBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjI0cHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjEwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogNDcwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxNnB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZTo4cHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogMzIwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxMnB4OyB9XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7IGZvbnQtc2l6ZTo4cHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgIChtYXgtd2lkdGg6IDI0MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MTBweDsgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3Vkb2t1Lm5pY2UuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxzQkFBc0I7RUFDdEIsY0FBYztFQUNkLHVCQUF1QjtFQUN2QixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSw4Q0FBOEM7RUFDOUMsVUFBVSxFQUFFLFVBQVUsRUFBRSxXQUFXOztFQUVuQzs7VUFFUTtBQUNWOztBQUVBLFVBQVU7QUFDVjtFQUNFLGVBQWU7O0VBRWYsZ0JBQWdCOztFQUVoQix5QkFBeUI7RUFDekIsc0JBQXNCO0VBQ3RCLHFCQUFxQjtFQUNyQixpQkFBaUI7O0VBRWpCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFLFlBQVk7RUFDWiwyQkFBMkI7RUFDM0IsV0FBVztFQUNYLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsZ0JBQWdCOztFQUVoQiw4QkFBOEIsRUFBRSxnQ0FBZ0M7SUFDOUQsMkJBQTJCLEtBQUsseUJBQXlCO0lBQ3pELHNCQUFzQjs7RUFFeEIsbUNBQW1DOztFQUVuQyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSwyREFBMkQ7QUFDN0Q7O0FBRUE7RUFDRSxpRkFBaUY7QUFDbkY7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIs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RTtFQUMzQyxzQkFBc0IsY0FBYyxFQUFFO0FBQ3hDOztBQUVBO0VBQ0UsMkJBQTJCLGNBQWMsRUFBRTtBQUM3Qzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0MsNEJBQTRCLGNBQWMsRUFBRTtBQUM1Qzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0MsNEJBQTRCLGFBQWEsRUFBRTtBQUMzQzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0MsNEJBQTRCLGFBQWEsRUFBRTtBQUMzQzs7QUFFQTtBQUNBLDJCQUEyQixjQUFjLEVBQUU7QUFDM0NcIixcInNvdXJjZXNDb250ZW50XCI6W1wiSDEge1xcbiAgYmFja2dyb3VuZDpibGFjaztcXG4gIGNvbG9yOndoaXRlO1xcbiAgbWFyZ2luOjBweCAwcHggMnB4IDBweDtcXG4gIGZvbnQtc2l6ZToyMHB4O1xcbiAgcGFkZGluZzoycHggMXB4IDVweCAxcHg7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTp2ZXJkYW5hLGhlbHZldGljYSxhcmlhbCxzYW5zLXNlcmlmO1xcbiAgYm9yZGVyOjBweDsgbWFyZ2luOjBweDsgcGFkZGluZzowcHg7XFxuXFxuICBiYWNrZ3JvdW5kOnVybChcXG4gICAgICBkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUFvQUFBQUtDQVlBQUFDTk1zKzlBQUFBSVVsRVFWUVlWMk44OXVydGZ3WWlBQ05Jb1pTWU1DTWh0YU1LOFlZUTBjRURBRzV5SjhlTFJoVGZBQUFBQUVsRlRrU3VRbUNDXFxuICApIHJlcGVhdDtcXG59XFxuXFxuLyogYm9hcmQgKi9cXG4uc3Vkb2t1X2JvYXJkIHtcXG4gIG1hcmdpbjo2cHggYXV0bztcXG5cXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcblxcbiAgYm94LXNoYWRvdzogMHB4IDBweCA1cHggNXB4ICNiZGMzYzc7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwge1xcbiAgd2lkdGg6MTEuMTElO1xcbiAgLyogZGlzcGxheTogaW5saW5lLWJsb2NrOyAqL1xcbiAgZmxvYXQ6IGxlZnQ7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuXFxuICAtd2Via2l0LWJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIFNhZmFyaS9DaHJvbWUsIG90aGVyIFdlYktpdCAqL1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7ICAgIC8qIEZpcmVmb3gsIG90aGVyIEdlY2tvICovXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDBweCAxcHggI2JkYzNjNztcXG5cXG4gIGJhY2tncm91bmQ6d2hpdGU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuYm9yZGVyX2gge1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAwcHggMXB4ICNiZGMzYzcsIGluc2V0IDBweCAtMnB4IDAgMCAjMzQ0OTVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl92IHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAtMnB4IDAgMCAjMzQ0OTVlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmJvcmRlcl9oLmJvcmRlcl92IHtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3LCBpbnNldCAtMnB4IDAgMCBibGFjaywgaW5zZXQgMHB4IC0ycHggMCBibGFjaztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHtcXG4gIGNvbG9yOiMyYzNlNTA7XFxuICBmb250LXNpemU6MTRweDtcXG4gIHRleHQtYWxpZ246bWlkZGxlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmZpeCB7XFxuICBiYWNrZ3JvdW5kOiNGRkU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuY3VycmVudCB7XFxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcXG4gIGJhY2tncm91bmQ6ICMzNDk4ZGI7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgYm94LXNoYWRvdzogMHB4IDBweCAzcHggM3B4ICNiZGMzYzc7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwuc2VsZWN0ZWQuY3VycmVudCBzcGFuIHtcXG4gIGNvbG9yOndoaXRlO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLmdyb3VwIHtcXG4gIGNvbG9yOmJsdWU7XFxufVxcblxcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3Bhbi5zYW1ldmFsdWUsIC5zdWRva3VfYm9hcmQgLmNlbGwuZml4IHNwYW4uc2FtZXZhbHVlIHtcXG4gIGZvbnQtd2VpZ2h0OmJvbGQ7XFxuICBjb2xvcjojMzQ5OGRiO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLm5vdHZhbGlkLCAuc3Vkb2t1X2JvYXJkIC5jZWxsLnNlbGVjdGVkLm5vdHZhbGlke1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gIGNvbG9yOndoaXRlOztcXG4gIGJhY2tncm91bmQ6I2U3NGMzYztcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbC5maXgge1xcbiAgYmFja2dyb3VuZDojZWNmMGYxO1xcbiAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsLmZpeCBzcGFuIHtcXG5jb2xvcjojN2Y4YzhkO1xcbn1cXG5cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5zb2x1dGlvbiB7XFxuZm9udC1zaXplOjEwcHg7XFxuY29sb3I6I2QzNTQwMDtcXG59XFxuXFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCAubm90ZSB7XFxuICBjb2xvcjojYmRjM2M3O1xcbiAgd2lkdGg6NTAlO1xcbiAgaGVpZ2h0OjUwJTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIGZsb2F0OmxlZnQ7XFxuICB0ZXh0LWFsaWduOmNlbnRlcjtcXG4gIGZvbnQtc2l6ZToxNHB4O1xcblxcbiAgLXdlYmtpdC1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgICAtbW96LWJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcblxcbi5nYW1lb3Zlcl9jb250YWluZXIgLmdhbWVvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgZm9udC13ZWlnaHQ6Ym9sZDtcXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XFxuXFxuICBkaXNwbGF5OmJsb2NrO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB3aWR0aDo5MCU7XFxuICBwYWRkaW5nOjEwcHg7XFxuXFxuICBib3gtc2hhZG93OiAwcHggMHB4IDVweCA1cHggI2JkYzNjNztcXG59XFxuXFxuXFxuLnJlc3RhcnQge1xcbmJhY2tncm91bmQ6IzdGOEM4RDtcXG5jb2xvcjojZWNmMGYxO1xcbn1cXG5cXG4vKiBjb25zb2xlICovXFxuLmJvYXJkX2NvbnNvbGVfY29udGFpbmVyLCAuZ2FtZW92ZXJfY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAxNDAsIDE0MSwgMC43KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG5cXG4gICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgIC1tb3otdXNlci1zZWxlY3Q6IG5vbmU7XFxuICAgLW1zLXVzZXItc2VsZWN0OiBub25lO1xcbiAgIHVzZXItc2VsZWN0OiBub25lO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSB7XFxuICBkaXNwbGF5OmJsb2NrO1xcbiAgcG9zaXRpb246YWJzb2x1dGU7XFxuICB3aWR0aDo1MCU7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMTI3LCAxNDAsIDE0MSwgMC43KTtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggNXB4IDVweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtIHtcXG4gIHdpZHRoOjMzLjMzJTtcXG4gIGNvbG9yOiMyYzNlNTA7XFxuICBwYWRkaW5nOiAxcHg7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBmb250LXdlaWdodDpib2xkO1xcbiAgZm9udC1zaXplOjI0cHg7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6cG9pbnRlcjtcXG5cXG4gIC13ZWJraXQtYm94LXNpemluZzogYm9yZGVyLWJveDsgLyogU2FmYXJpL0Nocm9tZSwgb3RoZXIgV2ViS2l0ICovXFxuICAgIC1tb3otYm94LXNpemluZzogYm9yZGVyLWJveDsgICAgLyogRmlyZWZveCwgb3RoZXIgR2Vja28gKi9cXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG5cXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMHB4IDFweCAjYmRjM2M3O1xcbn1cXG5cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgYmFja2dyb3VuZDojZjFjNDBmO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnJlbW92ZSB7XFxuICB3aWR0aDo2Ni42NiU7XFxufVxcblxcbi5ib2FyZF9jb25zb2xlIC5udW0ubm90ZSB7XFxuICBiYWNrZ3JvdW5kOiM5NWE1YTY7XFxuICBjb2xvcjojZWNmMGYxO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGU6aG92ZXIge1xcbiAgYmFja2dyb3VuZDojOTVhNWE2O1xcbiAgY29sb3I6I2YxYzQwZjtcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5zZWxlY3RlZCB7XFxuICBiYWNrZ3JvdW5kOiNmMWM0MGY7XFxuICBib3gtc2hhZG93OiAwcHggMHB4IDNweCAzcHggI2JkYzNjNztcXG59XFxuXFxuLmJvYXJkX2NvbnNvbGUgLm51bS5ub3RlLnNlbGVjdGVkIHtcXG4gIGJhY2tncm91bmQ6I2YxYzQwZjtcXG4gIGJveC1zaGFkb3c6IDBweCAwcHggM3B4IDNweCAjYmRjM2M3O1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vdGUuc2VsZWN0ZWQ6aG92ZXIge1xcbmNvbG9yOndoaXRlO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLm5vOmhvdmVyIHtcXG4gIGNvbG9yOndoaXRlO1xcbiAgY3Vyc29yOm5vdC1hbGxvd2VkO1xcbn1cXG5cXG4uYm9hcmRfY29uc29sZSAubnVtLnJlbW92ZTpob3ZlciB7XFxuICBjb2xvcjp3aGl0ZTtcXG4gIGJhY2tncm91bmQ6I2MwMzkyYjtcXG59XFxuXFxuLnN0YXRpc3RpY3Mge1xcbiAgdGV4dC1hbGlnbjpjZW50ZXI7XFxufVxcblxcbiNzdWRva3VfbWVudSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHotaW5kZXg6MjtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgbGVmdDogLTEwMCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgLW1vei1ib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwge1xcbiBtYXJnaW46IDA7XFxuIHBhZGRpbmc6IDEwMHB4IDBweCAwcHggMHB4O1xcbiBsaXN0LXN0eWxlOiBub25lO1xcbn1cXG5cXG4jc3Vkb2t1X21lbnUgdWwgbGl7XFxubWFyZ2luOiAwcHggNTBweDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51IHVsIGxpIGEge1xcbnRleHQtYWxpZ246Y2VudGVyO1xcbnBhZGRpbmc6IDE1cHggMjBweDtcXG5mb250LXNpemU6IDI4cHg7XFxuZm9udC13ZWlnaHQ6IGJvbGQ7XFxuY29sb3I6IHdoaXRlO1xcbnRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG5kaXNwbGF5OiBibG9jaztcXG5ib3JkZXItYm90dG9tOiAxcHggc29saWQgIzJjM2U1MDtcXG59XFxuXFxuI3N1ZG9rdV9tZW51Lm9wZW4tc2lkZWJhciB7XFxubGVmdDowcHg7XFxufVxcblxcbiNzaWRlYmFyLXRvZ2dsZSB7XFxuICB6LWluZGV4OjM7XFxuICBiYWNrZ3JvdW5kOiAjYmRjM2M3O1xcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgZGlzcGxheTogYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBwYWRkaW5nOiAyMnB4IDE4cHg7XFxuICBmbG9hdDogbGVmdDtcXG59XFxuXFxuI3NpZGViYXItdG9nZ2xlIC5iYXJ7XFxuICBkaXNwbGF5OiBibG9jaztcXG4gIHdpZHRoOiAyOHB4O1xcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcbiAgaGVpZ2h0OiA0cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjBmMGYwO1xcbiAgYm9yZGVyLXJhZGl1czogMXB4O1xcbn1cXG5cXG4jc2lkZWJhci10b2dnbGUgLmJhcjpsYXN0LWNoaWxke1xcbiAgIG1hcmdpbi1ib3R0b206IDA7XFxufVxcblxcbi8qUmVzcG9uc2l2ZSBTdHVmZiovXFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1pbi13aWR0aDogNjQwcHgpe1xcbiAgaDEgeyBmb250LXNpemU6NTBweDsgfVxcbiAgLnN0YXRpc3RpY3MgeyBmb250LXNpemU6MzBweDsgfVxcbiAgLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjYwcHg7IH1cXG4gIC5ib2FyZF9jb25zb2xlIC5udW0geyBmb250LXNpemU6NjBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246bGFuZHNjYXBlKSBhbmQgKG1pbi1oZWlnaHQ6IDY0MHB4KXtcXG4gIGgxIHsgZm9udC1zaXplOjUwcHg7IH1cXG4gIC5zdGF0aXN0aWNzIHsgZm9udC1zaXplOjMwcHg7IH1cXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTo1MHB4OyB9XFxuICAuYm9hcmRfY29uc29sZSAubnVtIHsgZm9udC1zaXplOjUwcHg7IH1cXG59XFxuXFxuQG1lZGlhIGFsbCBhbmQgKG9yaWVudGF0aW9uOnBvcnRyYWl0KSBhbmQgKG1heC13aWR0aDogMTAwMHB4KXtcXG4gIC5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZTozMHB4OyB9XFxufVxcblxcbkBtZWRpYSBhbGwgYW5kIChvcmllbnRhdGlvbjpwb3J0cmFpdCkgYW5kIChtYXgtd2lkdGg6IDY0MHB4KXtcXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIHNwYW4geyBmb250LXNpemU6MjRweDsgfVxcbi5zdWRva3VfYm9hcmQgLmNlbGwgLm5vdGUgeyBmb250LXNpemU6MTBweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiA0NzBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjE2cHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjhweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAobWF4LXdpZHRoOiAzMjBweCl7XFxuLnN1ZG9rdV9ib2FyZCAuY2VsbCBzcGFuIHsgZm9udC1zaXplOjEycHg7IH1cXG4uc3Vkb2t1X2JvYXJkIC5jZWxsIC5ub3RlIHsgZm9udC1zaXplOjhweDsgfVxcbn1cXG5cXG5AbWVkaWEgYWxsIGFuZCAob3JpZW50YXRpb246cG9ydHJhaXQpIGFuZCAgKG1heC13aWR0aDogMjQwcHgpe1xcbi5zdWRva3VfYm9hcmQgLmNlbGwgc3BhbiB7IGZvbnQtc2l6ZToxMHB4OyB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3Vkb2t1Lm5pY2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdWRva3UubmljZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29udGFpbmVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IElucHV0UHJvdmlkZXJfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvSW5wdXRQcm92aWRlclwiKTtcbmNvbnN0IEdhbWVFdmVudHNfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvR2FtZUV2ZW50c1wiKTtcbmNvbnN0IEdhbWVNYW5hZ2VyXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVNYW5hZ2VyXCIpO1xuY29uc3QgR2FtZVJ1bm5lcl8xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lUnVubmVyXCIpO1xuY29uc3QgR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi9saWJyYXJ5L0dhbWVMb2dpY1wiKTtcbmNvbnN0IEdhbWVTZXR0aW5nc18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9HYW1lU2V0dGluZ3NcIik7XG5jb25zdCBTdWRva3VUU18xID0gcmVxdWlyZShcIi4vbGlicmFyeS9TdWRva3VUU1wiKTtcbmNvbnN0IFZhbmlsbGFKc1ZpZXdfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvVmFuaWxsYUpzVmlld1wiKTtcbmV4cG9ydHMuY29udGFpbmVyID0gbmV3IGluamVjdF8xLkNvbnRhaW5lcigpXG4gICAgLmFkZFNpbmdsZXRvbihWYW5pbGxhSnNWaWV3XzEuVmFuaWxsYUpzVmlldylcbiAgICAuYWRkU2luZ2xldG9uKEdhbWVTZXR0aW5nc18xLkdhbWVTZXR0aW5ncylcbiAgICAuYWRkU2luZ2xldG9uKFwiSVN1ZG9rdVRTXCIsIFN1ZG9rdVRTXzEuU3Vkb2t1VFMpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lTWFuYWdlclwiLCBHYW1lTWFuYWdlcl8xLkdhbWVNYW5hZ2VyKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJR2FtZVJ1bm5lclwiLCBHYW1lUnVubmVyXzEuR2FtZVJ1bm5lcilcbiAgICAuYWRkU2luZ2xldG9uKFwiSUdhbWVQdWJTdWJcIiwgR2FtZUV2ZW50c18xLkdhbWVFdmVudHMpXG4gICAgLmFkZFNpbmdsZXRvbihcIklHYW1lTG9naWNcIiwgR2FtZUxvZ2ljXzEuR2FtZUxvZ2ljKVxuICAgIC5hZGRTaW5nbGV0b24oXCJJSW5wdXRQcm92aWRlclwiLCBJbnB1dFByb3ZpZGVyXzEuRE9NSW5wdXRQcm92aWRlcik7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZURpZmZpY3VsdHkgPSB2b2lkIDA7XG52YXIgR2FtZURpZmZpY3VsdHk7XG4oZnVuY3Rpb24gKEdhbWVEaWZmaWN1bHR5KSB7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJlYXN5XCJdID0gXCJlYXN5XCI7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJtZWRpdW1cIl0gPSBcIm1lZGl1bVwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1wiaGFyZFwiXSA9IFwiaGFyZFwiO1xuICAgIEdhbWVEaWZmaWN1bHR5W1widmVyeS1oYXJkXCJdID0gXCJ2ZXJ5LWhhcmRcIjtcbiAgICBHYW1lRGlmZmljdWx0eVtcImluc2FuZVwiXSA9IFwiaW5zYW5lXCI7XG4gICAgR2FtZURpZmZpY3VsdHlbXCJpbmh1bWFuXCJdID0gXCJpbmh1bWFuXCI7XG59KShHYW1lRGlmZmljdWx0eSA9IGV4cG9ydHMuR2FtZURpZmZpY3VsdHkgfHwgKGV4cG9ydHMuR2FtZURpZmZpY3VsdHkgPSB7fSkpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVTdGF0ZSA9IHZvaWQgMDtcbnZhciBHYW1lU3RhdGU7XG4oZnVuY3Rpb24gKEdhbWVTdGF0ZSkge1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJQUkVHQU1FXCJdID0gMF0gPSBcIlBSRUdBTUVcIjtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiUExBWUlOR1wiXSA9IDFdID0gXCJQTEFZSU5HXCI7XG4gICAgR2FtZVN0YXRlW0dhbWVTdGF0ZVtcIlBBVVNFRFwiXSA9IDJdID0gXCJQQVVTRURcIjtcbiAgICBHYW1lU3RhdGVbR2FtZVN0YXRlW1wiV09OXCJdID0gM10gPSBcIldPTlwiO1xuICAgIEdhbWVTdGF0ZVtHYW1lU3RhdGVbXCJHQU1FT1ZFUlwiXSA9IDRdID0gXCJHQU1FT1ZFUlwiO1xufSkoR2FtZVN0YXRlID0gZXhwb3J0cy5HYW1lU3RhdGUgfHwgKGV4cG9ydHMuR2FtZVN0YXRlID0ge30pKTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xucmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7XG5jb25zdCBjb250YWluZXJfMSA9IHJlcXVpcmUoXCIuL2NvbnRhaW5lclwiKTtcbmNvbnN0IFZhbmlsbGFKc1ZpZXdfMSA9IHJlcXVpcmUoXCIuL2xpYnJhcnkvVmFuaWxsYUpzVmlld1wiKTtcbnJlcXVpcmUoXCIuL3N1ZG9rdS5uaWNlLmNzc1wiKTtcbmNvbnRhaW5lcl8xLmNvbnRhaW5lci5yZXNvbHZlKFZhbmlsbGFKc1ZpZXdfMS5WYW5pbGxhSnNWaWV3KVxuICAgIC5yZWdpc3Rlckxpc3RlbmVycygpXG4gICAgLnN0YXJ0R2FtZSgpO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVFdmVudHMgPSB2b2lkIDA7XG5jb25zdCBpbmplY3RfMSA9IHJlcXVpcmUoXCJAZ29kc21hY2svaW5qZWN0XCIpO1xuY29uc3QgZXZlbnRzXzEgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xubGV0IEdhbWVFdmVudHMgPSBjbGFzcyBHYW1lRXZlbnRzIHtcbiAgICBwdWJsaXNoKGV2ZW50KSB7XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KHRoaXMuR0FNRV9FVkVOVCwgZXZlbnQpO1xuICAgIH1cbiAgICBzdWJzY3JpYmUoY2IpIHtcbiAgICAgICAgdGhpcy5lbWl0dGVyLmFkZExpc3RlbmVyKHRoaXMuR0FNRV9FVkVOVCwgY2IpO1xuICAgIH1cbiAgICB1bnN1YnNjcmliZShjYikge1xuICAgICAgICB0aGlzLmVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIodGhpcy5HQU1FX0VWRU5ULCBjYik7XG4gICAgfVxuICAgIGVtaXR0ZXIgPSBuZXcgZXZlbnRzXzEuRXZlbnRFbWl0dGVyKCk7XG4gICAgR0FNRV9FVkVOVCA9ICdnYW1lLWV2ZW50Jztcbn07XG5HYW1lRXZlbnRzID0gX19kZWNvcmF0ZShbXG4gICAgKDAsIGluamVjdF8xLlNpbmdsZXRvbikoKVxuXSwgR2FtZUV2ZW50cyk7XG5leHBvcnRzLkdhbWVFdmVudHMgPSBHYW1lRXZlbnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkdhbWVMb2dpYyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5jb25zdCBhc3NlcnRfMSA9IHJlcXVpcmUoXCIuLi91dGlscy9hc3NlcnRcIik7XG5sZXQgR2FtZUxvZ2ljID0gY2xhc3MgR2FtZUxvZ2ljIHtcbiAgICBhcHBseUdhbWVJbnB1dChpbnB1dCwgbW9kZWwpIHtcbiAgICAgICAgaWYgKG1vZGVsLnN0YXRlIDwgR2FtZVN0YXRlXzEuR2FtZVN0YXRlLldPTikge1xuICAgICAgICAgICAgc3dpdGNoIChpbnB1dC5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICBjYXNlICdzZWxlY3QnOiB7XG4gICAgICAgICAgICAgICAgICAgIG1vZGVsLnNlbGVjdGVkID0gaW5wdXQuY2VsbEluZGV4O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAna2V5cHJlc3MnOiB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghbW9kZWwuc2VsZWN0ZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNlbGwgPSBtb2RlbC5jZWxsc1ttb2RlbC5zZWxlY3RlZF07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjZWxsLmlzSGludCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGNlbGwudmFsdWUgPT09IGlucHV0LmtleSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2VsbC52YWx1ZSA9ICcuJztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNlbGwudmFsdWUgPSBpbnB1dC5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKDAsIGFzc2VydF8xLlVOUkVBQ0hBQkxFKShpbnB1dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBtb2RlbC5zdGF0ZSA9IHRoaXMuZ2V0TmV4dEdhbWVTdGF0ZShtb2RlbCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsO1xuICAgIH1cbiAgICBpbml0aWFsaXplR2FtZUNlbGxzKHNlZWQpIHtcbiAgICAgICAgY29uc3QgY2VsbHMgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA5ICogOTsgaSsrKSB7XG4gICAgICAgICAgICBjZWxscy5wdXNoKHRoaXMuY3JlYXRlR2FtZUNlbGwoaSwgc2VlZCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjZWxscztcbiAgICB9XG4gICAgZ2V0VGlsZVZlY3RvckZvckluZGV4KGluZGV4KSB7XG4gICAgICAgIHJldHVybiBbTWF0aC5mbG9vcihpbmRleCAlIDkpLCBNYXRoLmZsb29yKGluZGV4IC8gOSldO1xuICAgIH1cbiAgICBnZXRJbmRleEZvclRpbGVWZWN0b3IoW3gsIHldKSB7XG4gICAgICAgIHJldHVybiB5ICogOSArIHg7XG4gICAgfVxuICAgIGNyZWF0ZUdhbWVDZWxsKGluZGV4LCBzZWVkKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgIGlzSGludDogc2VlZFtpbmRleF0gIT09ICcuJyxcbiAgICAgICAgICAgIHZhbHVlOiBzZWVkW2luZGV4XSxcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0TmV4dEdhbWVTdGF0ZShtb2RlbCkge1xuICAgICAgICBjb25zdCBib2FyZCA9IG1vZGVsLmNlbGxzXG4gICAgICAgICAgICAubWFwKGNlbGwgPT4gY2VsbC52YWx1ZSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICAgICAgaWYgKG1vZGVsLnNvbHV0aW9uID09PSBib2FyZCkge1xuICAgICAgICAgICAgcmV0dXJuIEdhbWVTdGF0ZV8xLkdhbWVTdGF0ZS5XT047XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG1vZGVsLnN0YXRlO1xuICAgIH1cbn07XG5HYW1lTG9naWMgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpXG5dLCBHYW1lTG9naWMpO1xuZXhwb3J0cy5HYW1lTG9naWMgPSBHYW1lTG9naWM7XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2EsIF9iO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5HYW1lTWFuYWdlciA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5jb25zdCBJR2FtZUxvZ2ljXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lHYW1lTG9naWNcIik7XG5jb25zdCBJU3Vkb2t1VFNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSVN1ZG9rdVRTXCIpO1xubGV0IEdhbWVNYW5hZ2VyID0gY2xhc3MgR2FtZU1hbmFnZXIge1xuICAgIGxvZ2ljO1xuICAgIHN1ZG9rdTtcbiAgICBjb25zdHJ1Y3Rvcihsb2dpYywgc3Vkb2t1KSB7XG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgdGhpcy5zdWRva3UgPSBzdWRva3U7XG4gICAgfVxuICAgIGNyZWF0ZShkaWZmaWN1bHR5KSB7XG4gICAgICAgIGNvbnN0IHNlZWQgPSB0aGlzLnN1ZG9rdS5nZW5lcmF0ZShkaWZmaWN1bHR5KTtcbiAgICAgICAgY29uc3Qgc29sdXRpb24gPSB0aGlzLnN1ZG9rdS5zb2x2ZShzZWVkKTtcbiAgICAgICAgY29uc3QgY2VsbHMgPSB0aGlzLmxvZ2ljXG4gICAgICAgICAgICAuaW5pdGlhbGl6ZUdhbWVDZWxscyhzZWVkKTtcbiAgICAgICAgY29uc3Qgc3RhdGUgPSBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuUEFVU0VEO1xuICAgICAgICByZXR1cm4geyBjZWxscywgc2VlZCwgc3RhdGUsIGRpZmZpY3VsdHksIHNvbHV0aW9uIH07XG4gICAgfVxuICAgIHVwZGF0ZShtb2RlbCwgaW5wdXQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubG9naWMuYXBwbHlHYW1lSW5wdXQoaW5wdXQsIG1vZGVsKTtcbiAgICB9XG59O1xuR2FtZU1hbmFnZXIgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYykgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0LCB0eXBlb2YgKF9iID0gdHlwZW9mIElTdWRva3VUU18xLklTdWRva3VUUyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJU3Vkb2t1VFNfMS5JU3Vkb2t1VFMpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdF0pXG5dLCBHYW1lTWFuYWdlcik7XG5leHBvcnRzLkdhbWVNYW5hZ2VyID0gR2FtZU1hbmFnZXI7XG5HYW1lTWFuYWdlcltcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lTG9naWNcIiwgXCJJU3Vkb2t1VFNcIl07XG4iLCJcInVzZSBzdHJpY3RcIjtcbnZhciBfX2RlY29yYXRlID0gKHRoaXMgJiYgdGhpcy5fX2RlY29yYXRlKSB8fCBmdW5jdGlvbiAoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xufTtcbnZhciBfX21ldGFkYXRhID0gKHRoaXMgJiYgdGhpcy5fX21ldGFkYXRhKSB8fCBmdW5jdGlvbiAoaywgdikge1xuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShrLCB2KTtcbn07XG52YXIgX2EsIF9iLCBfYztcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZVJ1bm5lciA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5jb25zdCBHYW1lU3RhdGVfMSA9IHJlcXVpcmUoXCIuLi9lbnVtcy9HYW1lU3RhdGVcIik7XG5jb25zdCBJR2FtZU1hbmFnZXJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVNYW5hZ2VyXCIpO1xuY29uc3QgSUdhbWVQdWJTdWJfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVQdWJTdWJcIik7XG5jb25zdCBJSW5wdXRQcm92aWRlcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JSW5wdXRQcm92aWRlclwiKTtcbmxldCBHYW1lUnVubmVyID0gY2xhc3MgR2FtZVJ1bm5lciB7XG4gICAgbWFuYWdlcjtcbiAgICBldmVudHM7XG4gICAgaW5wdXQ7XG4gICAgY29uc3RydWN0b3IobWFuYWdlciwgZXZlbnRzLCBpbnB1dCkge1xuICAgICAgICB0aGlzLm1hbmFnZXIgPSBtYW5hZ2VyO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5pbnB1dCA9IGlucHV0O1xuICAgIH1cbiAgICBhc3luYyBwbGF5R2FtZShnYW1lYm9hcmQpIHtcbiAgICAgICAgdGhpcy5lbWl0KFwiYmVnaW5cIiwgZ2FtZWJvYXJkKTtcbiAgICAgICAgZG8ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBhd2FpdCB0aGlzLmlucHV0LmdldE5leHRJbnB1dCgpO1xuICAgICAgICAgICAgdGhpcy5tYW5hZ2VyLnVwZGF0ZShnYW1lYm9hcmQsIGlucHV0KTtcbiAgICAgICAgICAgIHRoaXMuZW1pdChcInVwZGF0ZVwiLCBnYW1lYm9hcmQpO1xuICAgICAgICB9IHdoaWxlIChnYW1lYm9hcmQuc3RhdGUgPCBHYW1lU3RhdGVfMS5HYW1lU3RhdGUuV09OKTtcbiAgICAgICAgdGhpcy5lbWl0KFwiZW5kXCIsIGdhbWVib2FyZCk7XG4gICAgICAgIHJldHVybiBnYW1lYm9hcmQ7XG4gICAgfVxuICAgIGVtaXQodHlwZSwgcGF5bG9hZCkge1xuICAgICAgICB0aGlzLmV2ZW50cy5wdWJsaXNoKHsgdHlwZSwgcGF5bG9hZCB9KTtcbiAgICB9XG59O1xuR2FtZVJ1bm5lciA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lTWFuYWdlcl8xLklHYW1lTWFuYWdlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdCwgdHlwZW9mIChfYiA9IHR5cGVvZiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIpID09PSBcImZ1bmN0aW9uXCIgPyBfYiA6IE9iamVjdCwgdHlwZW9mIChfYyA9IHR5cGVvZiBJSW5wdXRQcm92aWRlcl8xLklJbnB1dFByb3ZpZGVyICE9PSBcInVuZGVmaW5lZFwiICYmIElJbnB1dFByb3ZpZGVyXzEuSUlucHV0UHJvdmlkZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfYyA6IE9iamVjdF0pXG5dLCBHYW1lUnVubmVyKTtcbmV4cG9ydHMuR2FtZVJ1bm5lciA9IEdhbWVSdW5uZXI7XG5HYW1lUnVubmVyW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW1wiSUdhbWVNYW5hZ2VyXCIsIFwiSUdhbWVQdWJTdWJcIiwgXCJJSW5wdXRQcm92aWRlclwiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuR2FtZVNldHRpbmdzID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVEaWZmaWN1bHR5XzEgPSByZXF1aXJlKFwiLi4vZW51bXMvR2FtZURpZmZpY3VsdHlcIik7XG5jb25zdCBJR2FtZVB1YlN1Yl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZVB1YlN1YlwiKTtcbmNvbnN0IHZlYzJfMSA9IHJlcXVpcmUoXCIuLi91dGlscy92ZWMyXCIpO1xubGV0IEdhbWVTZXR0aW5ncyA9IGNsYXNzIEdhbWVTZXR0aW5ncyB7XG4gICAgZXZlbnRzO1xuICAgIGNvbnN0cnVjdG9yKGV2ZW50cykge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICB9XG4gICAgZmxhZ0NoYXJhY3RlciA9ICfwn5qpJztcbiAgICBtaW5lQ2hhcmFjdGVyID0gJ/CfkqMnO1xuICAgIGRlZmF1bHREaWZmaWN1bHR5ID0gR2FtZURpZmZpY3VsdHlfMS5HYW1lRGlmZmljdWx0eS5lYXN5O1xuICAgIHRpbWVySW50ZXJ2YWwgPSAxMDA7XG4gICAgYm9hcmRXaWR0aCA9IDU0MDtcbiAgICBjZWxsU2l6ZSA9ICgwLCB2ZWMyXzEudmVjMikoTWF0aC5mbG9vcih0aGlzLmJvYXJkV2lkdGggLyA5KSk7XG4gICAgc2V0KGtleSwgdmFsdWUpIHtcbiAgICAgICAgY29uc3Qgc2VsZiA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG9sZCA9IHNlbGZba2V5XTtcbiAgICAgICAgc2VsZltrZXldID0gdmFsdWU7XG4gICAgICAgIHRoaXMuZXZlbnRzLnB1Ymxpc2goe1xuICAgICAgICAgICAgdHlwZTogJ2NvbmZpZy1jaGFuZ2VkJyxcbiAgICAgICAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgICAgdmFsdWU6IHtcbiAgICAgICAgICAgICAgICAgICAgb2xkLFxuICAgICAgICAgICAgICAgICAgICBuZXc6IHZhbHVlLFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufTtcbkdhbWVTZXR0aW5ncyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIgIT09IFwidW5kZWZpbmVkXCIgJiYgSUdhbWVQdWJTdWJfMS5JR2FtZVB1YlN1YikgPT09IFwiZnVuY3Rpb25cIiA/IF9hIDogT2JqZWN0XSlcbl0sIEdhbWVTZXR0aW5ncyk7XG5leHBvcnRzLkdhbWVTZXR0aW5ncyA9IEdhbWVTZXR0aW5ncztcbkdhbWVTZXR0aW5nc1tcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lUHViU3ViXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xudmFyIF9faW1wb3J0RGVmYXVsdCA9ICh0aGlzICYmIHRoaXMuX19pbXBvcnREZWZhdWx0KSB8fCBmdW5jdGlvbiAobW9kKSB7XG4gICAgcmV0dXJuIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpID8gbW9kIDogeyBcImRlZmF1bHRcIjogbW9kIH07XG59O1xudmFyIF9hO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5ET01JbnB1dFByb3ZpZGVyID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IGV2ZW50c18xID0gX19pbXBvcnREZWZhdWx0KHJlcXVpcmUoXCJldmVudHNcIikpO1xuY29uc3QgSVN1ZG9rdVRTXzEgPSByZXF1aXJlKFwiLi4vaW50ZXJmYWNlL0lTdWRva3VUU1wiKTtcbmxldCBET01JbnB1dFByb3ZpZGVyID0gY2xhc3MgRE9NSW5wdXRQcm92aWRlciB7XG4gICAgc3Vkb2t1O1xuICAgIGNvbnN0cnVjdG9yKHN1ZG9rdSkge1xuICAgICAgICB0aGlzLnN1ZG9rdSA9IHN1ZG9rdTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLm9uQ2xpY2tDZWxsKTtcbiAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCB0aGlzLm9uS2V5UHJlc3MpO1xuICAgIH1cbiAgICBhc3luYyBnZXROZXh0SW5wdXQoKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbWl0dGVyLm9uY2UoJ2RhdGEnLCBkYXRhID0+IHJlc29sdmUoZGF0YSkpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DbGlja0NlbGwgPSAoZSkgPT4ge1xuICAgICAgICBpZiAoZS50YXJnZXQgaW5zdGFuY2VvZiBIVE1MRWxlbWVudCkge1xuICAgICAgICAgICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2VsbCcpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gTnVtYmVyKGUudGFyZ2V0LmdldEF0dHJpYnV0ZSgnaWR4JykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdERhdGEoeyBhY3Rpb246ICdzZWxlY3QnLCBjZWxsSW5kZXg6IGlkeCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlLnRhcmdldC5wYXJlbnRFbGVtZW50Py5jbGFzc0xpc3QuY29udGFpbnMoJ2NlbGwnKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IE51bWJlcihlLnRhcmdldC5wYXJlbnRFbGVtZW50LmdldEF0dHJpYnV0ZSgnaWR4JykpO1xuICAgICAgICAgICAgICAgIHRoaXMuZW1pdERhdGEoeyBhY3Rpb246ICdzZWxlY3QnLCBjZWxsSW5kZXg6IGlkeCB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgb25LZXlQcmVzcyA9IChlKSA9PiB7XG4gICAgICAgIGlmICh0aGlzLnN1ZG9rdS5ESUdJVFMuaW5jbHVkZXMoZS5rZXkpKVxuICAgICAgICAgICAgdGhpcy5lbWl0RGF0YSh7IGFjdGlvbjogJ2tleXByZXNzJywga2V5OiBlLmtleSB9KTtcbiAgICB9O1xuICAgIGVtaXREYXRhKGRhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ0lucHV0JywgZGF0YSk7XG4gICAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdkYXRhJywgZGF0YSk7XG4gICAgfVxuICAgIGVtaXR0ZXIgPSBuZXcgZXZlbnRzXzEuZGVmYXVsdCgpO1xufTtcbkRPTUlucHV0UHJvdmlkZXIgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbdHlwZW9mIChfYSA9IHR5cGVvZiBJU3Vkb2t1VFNfMS5JU3Vkb2t1VFMgIT09IFwidW5kZWZpbmVkXCIgJiYgSVN1ZG9rdVRTXzEuSVN1ZG9rdVRTKSA9PT0gXCJmdW5jdGlvblwiID8gX2EgOiBPYmplY3RdKVxuXSwgRE9NSW5wdXRQcm92aWRlcik7XG5leHBvcnRzLkRPTUlucHV0UHJvdmlkZXIgPSBET01JbnB1dFByb3ZpZGVyO1xuRE9NSW5wdXRQcm92aWRlcltcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklTdWRva3VUU1wiXTtcbiIsIlwidXNlIHN0cmljdFwiO1xuLypcbiAgICBTdWRva3UudHNcbiAgICAtLS0tLS0tLS1cblxuICAgIEEgU3Vkb2t1IHB1enpsZSBnZW5lcmF0b3IgYW5kIHNvbHZlciBKYXZhU2NyaXB0IGxpYnJhcnkuXG5cbiAgICBQbGVhc2Ugc2VlIHRoZSBSRUFETUUgZm9yIG1vcmUgZGV0YWlscy5cblxuICAgID4gTW9kaWZpZWQgYnkgQER1cm9rdGFyIGluIDIwMjIgZnJvbSB0aGUgb3JpZ2luYWwgZ2lzdFswXVxuXG4gICAgWzBdOiBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vcm9iYXRyb24vc3Vkb2t1LmpzL21hc3Rlci9zdWRva3UuanNcbiovXG52YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcbn07XG52YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEoaywgdik7XG59O1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5TdWRva3VUUyA9IHZvaWQgMDtcbmNvbnN0IGluamVjdF8xID0gcmVxdWlyZShcIkBnb2RzbWFjay9pbmplY3RcIik7XG5sZXQgU3Vkb2t1VFMgPSBjbGFzcyBTdWRva3VUUyB7XG4gICAgLyoqXG4gICAgICogIEFsbG93ZWQgc3Vkb2t1IGRpZ2l0cyAoMC05KVxuICAgICAqXG4gICAgICogQHR5cGUge3N0cmluZ31cbiAgICAgKiBAbWVtYmVyb2YgU3Vkb2t1VFNcbiAgICAgKi9cbiAgICBESUdJVFM7XG4gICAgRElGRklDVUxUWTtcbiAgICBST1dTOyAvLyBSb3cgbGFibGVzXG4gICAgQ09MUzsgLy8gQ29sdW1uIGxhYmxlc1xuICAgIFNRVUFSRVM7IC8vIFNxdWFyZSBJRHNcbiAgICBVTklUUzsgLy8gQWxsIHVuaXRzIChyb3csIGNvbHVtbiwgb3IgYm94KVxuICAgIFNRVUFSRV9VTklUU19NQVA7IC8vIFNxdWFyZXMgLT4gdW5pdHMgbWFwXG4gICAgU1FVQVJFX1BFRVJTX01BUDsgLy8gU3F1YXJlcyAtPiBwZWVycyBtYXBcbiAgICBNSU5fR0lWRU5TOyAvLyBNaW5pbXVtIG51bWJlciBvZiBnaXZlbnNcbiAgICBOUl9TUVVBUkVTOyAvLyBOdW1iZXIgb2Ygc3F1YXJlc1xuICAgIEJMQU5LX0NIQVI7XG4gICAgQkxBTktfQk9BUkQ7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuRElHSVRTID0gXCIxMjM0NTY3ODlcIjtcbiAgICAgICAgdGhpcy5ST1dTID0gXCJBQkNERUZHSElcIjtcbiAgICAgICAgdGhpcy5DT0xTID0gdGhpcy5ESUdJVFM7XG4gICAgICAgIHRoaXMuTUlOX0dJVkVOUyA9IDE3O1xuICAgICAgICB0aGlzLk5SX1NRVUFSRVMgPSA4MTtcbiAgICAgICAgLy8gRGVmaW5lIGRpZmZpY3VsdGllcyBieSBob3cgbWFueSBzcXVhcmVzIGFyZSBnaXZlbiB0byB0aGUgcGxheWVyIGluIGEgbmV3XG4gICAgICAgIC8vIHB1enpsZS5cbiAgICAgICAgdGhpcy5ESUZGSUNVTFRZID0ge1xuICAgICAgICAgICAgXCJlYXN5XCI6IDYyLFxuICAgICAgICAgICAgXCJtZWRpdW1cIjogNTMsXG4gICAgICAgICAgICBcImhhcmRcIjogNDQsXG4gICAgICAgICAgICBcInZlcnktaGFyZFwiOiAzNSxcbiAgICAgICAgICAgIFwiaW5zYW5lXCI6IDI2LFxuICAgICAgICAgICAgXCJpbmh1bWFuXCI6IDE3LFxuICAgICAgICB9O1xuICAgICAgICAvLyBCbGFuayBjaGFyYWN0ZXIgYW5kIGJvYXJkIHJlcHJlc2VudGF0aW9uXG4gICAgICAgIHRoaXMuQkxBTktfQ0hBUiA9ICcuJztcbiAgICAgICAgdGhpcy5CTEFOS19CT0FSRCA9IFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlwiICtcbiAgICAgICAgICAgIFwiLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi5cIjtcbiAgICAgICAgLy8gSW5pdFxuICAgICAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgICAgIHRoaXMuU1FVQVJFUyA9IHRoaXMuX2Nyb3NzKHRoaXMuUk9XUywgdGhpcy5DT0xTKTtcbiAgICAgICAgdGhpcy5VTklUUyA9IHRoaXMuX2dldF9hbGxfdW5pdHModGhpcy5ST1dTLCB0aGlzLkNPTFMpO1xuICAgICAgICB0aGlzLlNRVUFSRV9VTklUU19NQVAgPSB0aGlzLl9nZXRfc3F1YXJlX3VuaXRzX21hcCh0aGlzLlNRVUFSRVMsIHRoaXMuVU5JVFMpO1xuICAgICAgICB0aGlzLlNRVUFSRV9QRUVSU19NQVAgPSB0aGlzLl9nZXRfc3F1YXJlX3BlZXJzX21hcCh0aGlzLlNRVUFSRVMsIHRoaXMuU1FVQVJFX1VOSVRTX01BUCk7XG4gICAgfVxuICAgIC8vIEdlbmVyYXRlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGdlbmVyYXRlID0gKGRpZmZpY3VsdHksIHVuaXF1ZSkgPT4ge1xuICAgICAgICAvKiBHZW5lcmF0ZSBhIG5ldyBTdWRva3UgcHV6emxlIG9mIGEgcGFydGljdWxhciBgZGlmZmljdWx0eWAsIGUuZy4sXG4gIFxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYW4gXCJlYXN5XCIgc3Vkb2t1IHB1enpsZVxuICAgICAgICAgICAgc3Vkb2t1LmdlbmVyYXRlKFwiZWFzeVwiKTtcbiAgXG4gIFxuICAgICAgICBEaWZmaWN1bHRpZXMgYXJlIGFzIGZvbGxvd3MsIGFuZCByZXByZXNlbnQgdGhlIG51bWJlciBvZiBnaXZlbiBzcXVhcmVzOlxuICBcbiAgICAgICAgICAgICAgICBcImVhc3lcIjogICAgICAgICA2MVxuICAgICAgICAgICAgICAgIFwibWVkaXVtXCI6ICAgICAgIDUyXG4gICAgICAgICAgICAgICAgXCJoYXJkXCI6ICAgICAgICAgNDNcbiAgICAgICAgICAgICAgICBcInZlcnktaGFyZFwiOiAgICAzNFxuICAgICAgICAgICAgICAgIFwiaW5zYW5lXCI6ICAgICAgIDI1XG4gICAgICAgICAgICAgICAgXCJpbmh1bWFuXCI6ICAgICAgMTdcbiAgXG4gIFxuICAgICAgICBZb3UgbWF5IGFsc28gZW50ZXIgYSBjdXN0b20gbnVtYmVyIG9mIHNxdWFyZXMgdG8gYmUgZ2l2ZW4sIGUuZy4sXG4gIFxuICAgICAgICAgICAgLy8gR2VuZXJhdGUgYSBuZXcgU3Vkb2t1IHB1enpsZSB3aXRoIDYwIGdpdmVuIHNxdWFyZXNcbiAgICAgICAgICAgIHN1ZG9rdS5nZW5lcmF0ZSg2MClcbiAgXG4gIFxuICAgICAgICBgZGlmZmljdWx0eWAgbXVzdCBiZSBhIG51bWJlciBiZXR3ZWVuIDE3IGFuZCA4MSBpbmNsdXNpdmUuIElmIGl0J3NcbiAgICAgICAgb3V0c2lkZSBvZiB0aGF0IHJhbmdlLCBgZGlmZmljdWx0eWAgd2lsbCBiZSBzZXQgdG8gdGhlIGNsb3Nlc3QgYm91bmQsXG4gICAgICAgIGUuZy4sIDAgLT4gMTcsIGFuZCAxMDAgLT4gODEuXG4gIFxuICBcbiAgICAgICAgQnkgZGVmYXVsdCwgdGhlIHB1enpsZXMgYXJlIHVuaXF1ZSwgdWxlc3MgeW91IHNldCBgdW5pcXVlYCB0byBmYWxzZS5cbiAgICAgICAgKE5vdGU6IFB1enpsZSB1bmlxdWVuZXNzIGlzIG5vdCB5ZXQgaW1wbGVtZW50ZWQsIHNvIHB1enpsZXMgYXJlICpub3QqXG4gICAgICAgIGd1YXJhbnRlZWQgdG8gaGF2ZSB1bmlxdWUgc29sdXRpb25zKVxuICAgICAgICAqL1xuICAgICAgICAvLyBJZiBgZGlmZmljdWx0eWAgaXMgYSBzdHJpbmcgb3IgdW5kZWZpbmVkLCBjb252ZXJ0IGl0IHRvIGEgbnVtYmVyIG9yXG4gICAgICAgIC8vIGRlZmF1bHQgaXQgdG8gXCJlYXN5XCIgaWYgdW5kZWZpbmVkLlxuICAgICAgICBsZXQgX2RpZmZpY3VsdHk7XG4gICAgICAgIGlmICh0eXBlb2YgZGlmZmljdWx0eSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlb2YgZGlmZmljdWx0eSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgICAgX2RpZmZpY3VsdHkgPSB0aGlzLkRJRkZJQ1VMVFlbZGlmZmljdWx0eV0gfHwgdGhpcy5ESUZGSUNVTFRZLmVhc3k7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yY2UgZGlmZmljdWx0eSBiZXR3ZWVuIDE3IGFuZCA4MSBpbmNsdXNpdmVcbiAgICAgICAgX2RpZmZpY3VsdHkgPSB0aGlzLl9mb3JjZV9yYW5nZShfZGlmZmljdWx0eSwgdGhpcy5OUl9TUVVBUkVTICsgMSwgdGhpcy5NSU5fR0lWRU5TKTtcbiAgICAgICAgLy8gRGVmYXVsdCB1bmlxdWUgdG8gdHJ1ZVxuICAgICAgICB1bmlxdWUgPSB1bmlxdWUgPz8gdHJ1ZTtcbiAgICAgICAgLy8gR2V0IGEgc2V0IG9mIHNxdWFyZXMgYW5kIGFsbCBwb3NzaWJsZSBjYW5kaWRhdGVzIGZvciBlYWNoIHNxdWFyZVxuICAgICAgICBsZXQgYmxhbmtfYm9hcmQgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuTlJfU1FVQVJFUzsgKytpKSB7XG4gICAgICAgICAgICBibGFua19ib2FyZCArPSAnLic7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IHRoaXMuX2dldF9jYW5kaWRhdGVzX21hcChibGFua19ib2FyZCk7XG4gICAgICAgIGlmIChjYW5kaWRhdGVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWxzZSBjYW5kaWRhdGVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGVhY2ggaXRlbSBpbiBhIHNodWZmbGVkIGxpc3Qgb2Ygc3F1YXJlc1xuICAgICAgICBsZXQgc2h1ZmZsZWRfc3F1YXJlcyA9IHRoaXMuX3NodWZmbGUodGhpcy5TUVVBUkVTKTtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIG9mIHNodWZmbGVkX3NxdWFyZXMpIHtcbiAgICAgICAgICAgIC8vIElmIGFuIGFzc2lnbm1lbnQgb2YgYSByYW5kb20gY2hpb2NlIGNhdXNlcyBhIGNvbnRyYWRpY3RvaW4sIGdpdmVcbiAgICAgICAgICAgIC8vIHVwIGFuZCB0cnkgYWdhaW5cbiAgICAgICAgICAgIGxldCByYW5kX2NhbmRpZGF0ZV9pZHggPSB0aGlzLl9yYW5kX3JhbmdlKGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGgpO1xuICAgICAgICAgICAgbGV0IHJhbmRfY2FuZGlkYXRlID0gY2FuZGlkYXRlc1tzcXVhcmVdW3JhbmRfY2FuZGlkYXRlX2lkeF07XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2Fzc2lnbihjYW5kaWRhdGVzLCBzcXVhcmUsIHJhbmRfY2FuZGlkYXRlKSkge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gTWFrZSBhIGxpc3Qgb2YgYWxsIHNpbmdsZSBjYW5kaWRhdGVzXG4gICAgICAgICAgICBsZXQgc2luZ2xlX2NhbmRpZGF0ZXMgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgICAgICBpZiAoY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIHNpbmdsZV9jYW5kaWRhdGVzLnB1c2goY2FuZGlkYXRlc1tzcXVhcmVdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiB3ZSBoYXZlIGF0IGxlYXN0IGRpZmZpY3VsdHksIGFuZCB0aGUgdW5pcXVlIGNhbmRpZGF0ZSBjb3VudCBpc1xuICAgICAgICAgICAgLy8gYXQgbGVhc3QgOCwgcmV0dXJuIHRoZSBwdXp6bGUhXG4gICAgICAgICAgICBpZiAoc2luZ2xlX2NhbmRpZGF0ZXMubGVuZ3RoID49IF9kaWZmaWN1bHR5ICYmXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaXBfZHVwcyhzaW5nbGVfY2FuZGlkYXRlcykubGVuZ3RoID49IDgpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9hcmQgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGxldCBnaXZlbnNfaWR4cyA9IFtdO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5TUVVBUkVTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzcXVhcmUgPSB0aGlzLlNRVUFSRVNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzW3NxdWFyZV0ubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkICs9IGNhbmRpZGF0ZXNbc3F1YXJlXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpdmVuc19pZHhzLnB1c2goaSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2FyZCArPSB0aGlzLkJMQU5LX0NIQVI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gSWYgd2UgaGF2ZSBtb3JlIHRoYW4gYGRpZmZpY3VsdHlgIGdpdmVucywgcmVtb3ZlIHNvbWUgcmFuZG9tXG4gICAgICAgICAgICAgICAgLy8gZ2l2ZW5zIHVudGlsIHdlJ3JlIGRvd24gdG8gZXhhY3RseSBgZGlmZmljdWx0eWBcbiAgICAgICAgICAgICAgICBsZXQgbnJfZ2l2ZW5zID0gZ2l2ZW5zX2lkeHMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIGlmIChucl9naXZlbnMgPiBfZGlmZmljdWx0eSkge1xuICAgICAgICAgICAgICAgICAgICBnaXZlbnNfaWR4cyA9IHRoaXMuX3NodWZmbGUoZ2l2ZW5zX2lkeHMpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG5yX2dpdmVucyAtIF9kaWZmaWN1bHR5OyArK2kpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB0YXJnZXQgPSBwYXJzZUludChTdHJpbmcoZ2l2ZW5zX2lkeHNbaV0pKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkID0gYm9hcmQuc3Vic3RyKDAsIHRhcmdldCkgKyB0aGlzLkJMQU5LX0NIQVIgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvYXJkLnN1YnN0cih0YXJnZXQgKyAxKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBEb3VibGUgY2hlY2sgYm9hcmQgaXMgc29sdmFibGVcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBNYWtlIGEgc3RhbmRhbG9uZSBib2FyZCBjaGVja2VyLiBTb2x2ZSBpcyBleHBlbnNpdmUuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc29sdmUoYm9hcmQpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBib2FyZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2l2ZSB1cCBhbmQgdHJ5IGEgbmV3IHB1enpsZVxuICAgICAgICByZXR1cm4gdGhpcy5nZW5lcmF0ZShkaWZmaWN1bHR5KTtcbiAgICB9O1xuICAgIC8vIFNvbHZlXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIHNvbHZlID0gKGJvYXJkLCByZXZlcnNlKSA9PiB7XG4gICAgICAgIC8qIFNvbHZlIGEgc3Vkb2t1IHB1enpsZSBnaXZlbiBhIHN1ZG9rdSBgYm9hcmRgLCBpLmUuLCBhbiA4MS1jaGFyYWN0ZXJcbiAgICAgICAgc3RyaW5nIG9mIHN1ZG9rdS5ESUdJVFMsIDEtOSwgYW5kIHNwYWNlcyBpZGVudGlmaWVkIGJ5ICcuJywgcmVwcmVzZW50aW5nIHRoZVxuICAgICAgICBzcXVhcmVzLiBUaGVyZSBtdXN0IGJlIGEgbWluaW11bSBvZiAxNyBnaXZlbnMuIElmIHRoZSBnaXZlbiBib2FyZCBoYXMgbm9cbiAgICAgICAgc29sdXRpb25zLCByZXR1cm4gZmFsc2UuXG4gIFxuICAgICAgICBPcHRpb25hbGx5IHNldCBgcmV2ZXJzZWAgdG8gc29sdmUgXCJiYWNrd2FyZHNcIiwgaS5lLiwgcm90YXRlIHRocm91Z2ggdGhlXG4gICAgICAgIHBvc3NpYmlsaXRpZXMgaW4gcmV2ZXJzZS4gVXNlZnVsIGZvciBjaGVja2luZyBpZiB0aGVyZSBpcyBtb3JlIHRoYW4gb25lXG4gICAgICAgIHNvbHV0aW9uLlxuICAgICAgICAqL1xuICAgICAgICAvLyBBc3N1cmUgYSB2YWxpZCBib2FyZFxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy52YWxpZGF0ZV9ib2FyZChib2FyZCk7XG4gICAgICAgIGlmIChyZXBvcnQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBDaGVjayBudW1iZXIgb2YgZ2l2ZW5zIGlzIGF0IGxlYXN0IE1JTl9HSVZFTlNcbiAgICAgICAgbGV0IG5yX2dpdmVucyA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgb2YgYm9hcmQpIHtcbiAgICAgICAgICAgIGlmIChpICE9PSB0aGlzLkJMQU5LX0NIQVIgJiYgdGhpcy5faW4oaSwgdGhpcy5ESUdJVFMpKSB7XG4gICAgICAgICAgICAgICAgKytucl9naXZlbnM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5yX2dpdmVucyA8IHRoaXMuTUlOX0dJVkVOUykge1xuICAgICAgICAgICAgdGhyb3cgXCJUb28gZmV3IGdpdmVucy4gTWluaW11bSBnaXZlbnMgaXMgXCIgKyB0aGlzLk1JTl9HSVZFTlM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRGVmYXVsdCByZXZlcnNlIHRvIGZhbHNlXG4gICAgICAgIHJldmVyc2UgPSByZXZlcnNlIHx8IGZhbHNlO1xuICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IHRoaXMuX2dldF9jYW5kaWRhdGVzX21hcChib2FyZCk7XG4gICAgICAgIGxldCByZXN1bHQgPSB0aGlzLl9zZWFyY2goY2FuZGlkYXRlcywgcmV2ZXJzZSk7XG4gICAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgICAgIGxldCBzb2x1dGlvbiA9IFwiXCI7XG4gICAgICAgICAgICBmb3IgKGxldCBzcXVhcmUgaW4gcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgc29sdXRpb24gKz0gcmVzdWx0W3NxdWFyZV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc29sdXRpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH07XG4gICAgZ2V0Q2FuZGlkYXRlcyA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gYWxsIHBvc3NpYmxlIGNhbmRpZGF0ZWVzIGZvciBlYWNoIHNxdWFyZSBhcyBhIGdyaWQgb2ZcbiAgICAgICAgY2FuZGlkYXRlcywgcmV0dXJubmluZyBgZmFsc2VgIGlmIGEgY29udHJhZGljdGlvbiBpcyBlbmNvdW50ZXJlZC5cbiAgICBcbiAgICAgICAgUmVhbGx5IGp1c3QgYSB3cmFwcGVyIGZvciBzdWRva3UuX2dldF9jYW5kaWRhdGVzX21hcCBmb3IgcHJvZ3JhbW1lclxuICAgICAgICBjb25zdW1wdGlvbi5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gQXNzdXJlIGEgdmFsaWQgYm9hcmRcbiAgICAgICAgbGV0IHJlcG9ydCA9IHRoaXMudmFsaWRhdGVfYm9hcmQoYm9hcmQpO1xuICAgICAgICBpZiAocmVwb3J0ICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB0aHJvdyByZXBvcnQ7XG4gICAgICAgIH1cbiAgICAgICAgLy8gR2V0IGEgY2FuZGlkYXRlcyBtYXBcbiAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbWFwID0gdGhpcy5fZ2V0X2NhbmRpZGF0ZXNfbWFwKGJvYXJkKTtcbiAgICAgICAgLy8gSWYgdGhlcmUncyBhbiBlcnJvciwgcmV0dXJuIGZhbHNlXG4gICAgICAgIGlmICghY2FuZGlkYXRlc19tYXApIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBUcmFuc2Zvcm0gY2FuZGlkYXRlcyBtYXAgaW50byBncmlkXG4gICAgICAgIGxldCByb3dzID0gW107XG4gICAgICAgIGxldCBjdXJfcm93ID0gW107XG4gICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgZm9yIChsZXQgc3F1YXJlIGluIGNhbmRpZGF0ZXNfbWFwKSB7XG4gICAgICAgICAgICBsZXQgY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXNfbWFwW3NxdWFyZV07XG4gICAgICAgICAgICBjdXJfcm93LnB1c2goY2FuZGlkYXRlcyk7XG4gICAgICAgICAgICBpZiAoaSAlIDkgPT0gOCkge1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChjdXJfcm93KTtcbiAgICAgICAgICAgICAgICBjdXJfcm93ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICArK2k7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfTtcbiAgICBnZXRSZW1haW5pbmdEaWdpdHMgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgY29uc3QgY2FuZGlkYXRlcyA9IHRoaXMuZ2V0Q2FuZGlkYXRlcyhib2FyZCk7XG4gICAgICAgIGNvbnN0IGNoYXJhY3RlcnMgPSAoY2FuZGlkYXRlcyB8fCBbXSlcbiAgICAgICAgICAgIC5tYXAoKGl0ZW0sIGkpID0+IGJvYXJkW2ldID09PSAnLicgPyBpdGVtIDogJycpXG4gICAgICAgICAgICAuam9pbignJyk7XG4gICAgICAgIHJldHVybiB0aGlzLl9zdHJpcF9kdXBzKGNoYXJhY3RlcnMpLnNvcnQoKTtcbiAgICB9O1xuICAgIF9nZXRfY2FuZGlkYXRlc19tYXAgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogR2V0IGFsbCBwb3NzaWJsZSBjYW5kaWRhdGVzIGZvciBlYWNoIHNxdWFyZSBhcyBhIG1hcCBpbiB0aGUgZm9ybVxuICAgICAgICB7c3F1YXJlOiBzdWRva3UuRElHSVRTfSB1c2luZyByZWN1cnNpdmUgY29uc3RyYWludCBwcm9wYWdhdGlvbi4gUmV0dXJuIGBmYWxzZWBcbiAgICAgICAgaWYgYSBjb250cmFkaWN0aW9uIGlzIGVuY291bnRlcmVkXG4gICAgICAgICovXG4gICAgICAgIC8vIEFzc3VyZSBhIHZhbGlkIGJvYXJkXG4gICAgICAgIGxldCByZXBvcnQgPSB0aGlzLnZhbGlkYXRlX2JvYXJkKGJvYXJkKTtcbiAgICAgICAgaWYgKHJlcG9ydCAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhyb3cgcmVwb3J0O1xuICAgICAgICB9XG4gICAgICAgIGxldCBjYW5kaWRhdGVfbWFwID0ge307XG4gICAgICAgIGxldCBzcXVhcmVzX3ZhbHVlc19tYXAgPSB0aGlzLl9nZXRfc3F1YXJlX3ZhbHNfbWFwKGJvYXJkKTtcbiAgICAgICAgLy8gU3RhcnQgYnkgYXNzaWduaW5nIGV2ZXJ5IGRpZ2l0IGFzIGEgY2FuZGlkYXRlIHRvIGV2ZXJ5IHNxdWFyZVxuICAgICAgICBmb3IgKGxldCBzaSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGNhbmRpZGF0ZV9tYXBbc2ldID0gdGhpcy5ESUdJVFM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gRm9yIGVhY2ggbm9uLWJsYW5rIHNxdWFyZSwgYXNzaWduIGl0cyB2YWx1ZSBpbiB0aGUgY2FuZGlkYXRlIG1hcCBhbmRcbiAgICAgICAgLy8gcHJvcGlnYXRlLlxuICAgICAgICBmb3IgKGxldCBzcXVhcmUgaW4gc3F1YXJlc192YWx1ZXNfbWFwKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gc3F1YXJlc192YWx1ZXNfbWFwW3NxdWFyZV07XG4gICAgICAgICAgICBpZiAodGhpcy5faW4odmFsLCB0aGlzLkRJR0lUUykpIHtcbiAgICAgICAgICAgICAgICBsZXQgbmV3X2NhbmRpZGF0ZXMgPSB0aGlzLl9hc3NpZ24oY2FuZGlkYXRlX21hcCwgc3F1YXJlLCB2YWwpO1xuICAgICAgICAgICAgICAgIC8vIEZhaWwgaWYgd2UgY2FuJ3QgYXNzaWduIHZhbCB0byBzcXVhcmVcbiAgICAgICAgICAgICAgICBpZiAoIW5ld19jYW5kaWRhdGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZV9tYXA7XG4gICAgfTtcbiAgICBfc2VhcmNoID0gKGNhbmRpZGF0ZXMsIHJldmVyc2UpID0+IHtcbiAgICAgICAgLyogR2l2ZW4gYSBtYXAgb2Ygc3F1YXJlcyAtPiBjYW5kaWF0ZXMsIHVzaW5nIGRlcHRoLWZpcnN0IHNlYXJjaCxcbiAgICAgICAgcmVjdXJzaXZlbHkgdHJ5IGFsbCBwb3NzaWJsZSB2YWx1ZXMgdW50aWwgYSBzb2x1dGlvbiBpcyBmb3VuZCwgb3IgZmFsc2VcbiAgICAgICAgaWYgbm8gc29sdXRpb24gZXhpc3RzLlxuICAgICAgICAqL1xuICAgICAgICAvLyBSZXR1cm4gaWYgZXJyb3IgaW4gcHJldmlvdXMgaXRlcmF0aW9uXG4gICAgICAgIGlmICghY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIERlZmF1bHQgcmV2ZXJzZSB0byBmYWxzZVxuICAgICAgICByZXZlcnNlID0gcmV2ZXJzZSB8fCBmYWxzZTtcbiAgICAgICAgLy8gSWYgb25seSBvbmUgY2FuZGlkYXRlIGZvciBldmVyeSBzcXVhcmUsIHdlJ3ZlIGEgc29sdmVkIHB1enpsZSFcbiAgICAgICAgLy8gUmV0dXJuIHRoZSBjYW5kaWRhdGVzIG1hcC5cbiAgICAgICAgbGV0IG1heF9ucl9jYW5kaWRhdGVzID0gMDtcbiAgICAgICAgbGV0IG1heF9jYW5kaWRhdGVzX3NxdWFyZSA9IG51bGw7XG4gICAgICAgIGNhbmRpZGF0ZXM7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGxldCBucl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChucl9jYW5kaWRhdGVzID4gbWF4X25yX2NhbmRpZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBtYXhfbnJfY2FuZGlkYXRlcyA9IG5yX2NhbmRpZGF0ZXM7XG4gICAgICAgICAgICAgICAgbWF4X2NhbmRpZGF0ZXNfc3F1YXJlID0gc3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhfbnJfY2FuZGlkYXRlcyA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hvb3NlIHRoZSBibGFuayBzcXVhcmUgd2l0aCB0aGUgZmV3ZXN0IHBvc3NpYmlsaXRpZXMgPiAxXG4gICAgICAgIGxldCBtaW5fbnJfY2FuZGlkYXRlcyA9IDEwO1xuICAgICAgICBsZXQgbWluX2NhbmRpZGF0ZXNfc3F1YXJlID0gJyc7XG4gICAgICAgIGZvciAobGV0IHNxdWFyZSBvZiB0aGlzLlNRVUFSRVMpIHtcbiAgICAgICAgICAgIGxldCBucl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1tzcXVhcmVdLmxlbmd0aDtcbiAgICAgICAgICAgIGlmIChucl9jYW5kaWRhdGVzIDwgbWluX25yX2NhbmRpZGF0ZXMgJiYgbnJfY2FuZGlkYXRlcyA+IDEpIHtcbiAgICAgICAgICAgICAgICBtaW5fbnJfY2FuZGlkYXRlcyA9IG5yX2NhbmRpZGF0ZXM7XG4gICAgICAgICAgICAgICAgbWluX2NhbmRpZGF0ZXNfc3F1YXJlID0gc3F1YXJlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIFJlY3Vyc2l2ZWx5IHNlYXJjaCB0aHJvdWdoIGVhY2ggb2YgdGhlIGNhbmRpZGF0ZXMgb2YgdGhlIHNxdWFyZVxuICAgICAgICAvLyBzdGFydGluZyB3aXRoIHRoZSBvbmUgd2l0aCBmZXdlc3QgY2FuZGlkYXRlcy5cbiAgICAgICAgLy8gUm90YXRlIHRocm91Z2ggdGhlIGNhbmRpZGF0ZXMgZm9yd2FyZHNcbiAgICAgICAgbGV0IG1pbl9jYW5kaWRhdGVzID0gY2FuZGlkYXRlc1ttaW5fY2FuZGlkYXRlc19zcXVhcmVdO1xuICAgICAgICBpZiAoIXJldmVyc2UpIHtcbiAgICAgICAgICAgIGZvciAobGV0IHZhbCBvZiBtaW5fY2FuZGlkYXRlcykge1xuICAgICAgICAgICAgICAgIC8vIFRPRE86IEltcGxlbWVudCBhIG5vbi1yZWRpY3Vsb3VzIGRlZXAgY29weSBmdW5jdGlvblxuICAgICAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX2NvcHkgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGNhbmRpZGF0ZXMpKTtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXh0ID0gdGhpcy5fc2VhcmNoKHRoaXMuX2Fzc2lnbihjYW5kaWRhdGVzX2NvcHksIG1pbl9jYW5kaWRhdGVzX3NxdWFyZSwgdmFsKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNhbmRpZGF0ZXNfbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2FuZGlkYXRlc19uZXh0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFJvdGF0ZSB0aHJvdWdoIHRoZSBjYW5kaWRhdGVzIGJhY2t3YXJkc1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgZm9yIChsZXQgdmkgPSBtaW5fY2FuZGlkYXRlcy5sZW5ndGggLSAxOyB2aSA+PSAwOyAtLXZpKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbCA9IG1pbl9jYW5kaWRhdGVzW3ZpXTtcbiAgICAgICAgICAgICAgICAvLyBUT0RPOiBJbXBsZW1lbnQgYSBub24tcmVkaWN1bG91cyBkZWVwIGNvcHkgZnVuY3Rpb25cbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19jb3B5ID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShjYW5kaWRhdGVzKSk7XG4gICAgICAgICAgICAgICAgbGV0IGNhbmRpZGF0ZXNfbmV4dCA9IHRoaXMuX3NlYXJjaCh0aGlzLl9hc3NpZ24oY2FuZGlkYXRlc19jb3B5LCBtaW5fY2FuZGlkYXRlc19zcXVhcmUsIHZhbCksIHJldmVyc2UpO1xuICAgICAgICAgICAgICAgIGlmIChjYW5kaWRhdGVzX25leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXNfbmV4dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gSWYgd2UgZ2V0IHRocm91Z2ggYWxsIGNvbWJpbmF0aW9ucyBvZiB0aGUgc3F1YXJlIHdpdGggdGhlIGZld2VzdFxuICAgICAgICAvLyBjYW5kaWRhdGVzIHdpdGhvdXQgZmluZGluZyBhbiBhbnN3ZXIsIHRoZXJlIGlzbid0IG9uZS4gUmV0dXJuIGZhbHNlLlxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfTtcbiAgICBfYXNzaWduID0gKGNhbmRpZGF0ZXMsIHNxdWFyZSwgdmFsKSA9PiB7XG4gICAgICAgIC8qIEVsaW1pbmF0ZSBhbGwgdmFsdWVzLCAqZXhjZXB0KiBmb3IgYHZhbGAsIGZyb20gYGNhbmRpZGF0ZXNgIGF0XG4gICAgICAgIGBzcXVhcmVgIChjYW5kaWRhdGVzW3NxdWFyZV0pLCBhbmQgcHJvcGFnYXRlLiBSZXR1cm4gdGhlIGNhbmRpZGF0ZXMgbWFwXG4gICAgICAgIHdoZW4gZmluaXNoZWQuIElmIGEgY29udHJhZGljaXRvbiBpcyBmb3VuZCwgcmV0dXJuIGZhbHNlLlxuICBcbiAgICAgICAgV0FSTklORzogVGhpcyB3aWxsIG1vZGlmeSB0aGUgY29udGVudHMgb2YgYGNhbmRpZGF0ZXNgIGRpcmVjdGx5LlxuICAgICAgICAqL1xuICAgICAgICAvLyBHcmFiIGEgbGlzdCBvZiBjYW5pZGF0ZXMgd2l0aG91dCAndmFsJ1xuICAgICAgICBsZXQgb3RoZXJfdmFscyA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5yZXBsYWNlKHZhbCwgXCJcIik7XG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBhbGwgb3RoZXIgdmFsdWVzIGFuZCBlbGltaW5hdGUgdGhlbSBmcm9tIHRoZSBjYW5kaWRhdGVzXG4gICAgICAgIC8vIGF0IHRoZSBjdXJyZW50IHNxdWFyZSwgYW5kIHByb3BpZ2F0ZS4gSWYgYXQgYW55IHBvaW50IHdlIGdldCBhXG4gICAgICAgIC8vIGNvbnRyYWRpY3Rpb24sIHJldHVybiBmYWxzZS5cbiAgICAgICAgZm9yIChsZXQgb3RoZXJfdmFsIG9mIG90aGVyX3ZhbHMpIHtcbiAgICAgICAgICAgIGxldCBjYW5kaWRhdGVzX25leHQgPSB0aGlzLl9lbGltaW5hdGUoY2FuZGlkYXRlcywgc3F1YXJlLCBvdGhlcl92YWwpO1xuICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGVzX25leHQpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiQ29udHJhZGljdGlvbiBmb3VuZCBieSBfZWxpbWluYXRlLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgfTtcbiAgICBfZWxpbWluYXRlID0gKGNhbmRpZGF0ZXMsIHNxdWFyZSwgdmFsKSA9PiB7XG4gICAgICAgIC8qIEVsaW1pbmF0ZSBgdmFsYCBmcm9tIGBjYW5kaWRhdGVzYCBhdCBgc3F1YXJlYCwgKGNhbmRpZGF0ZXNbc3F1YXJlXSksXG4gICAgICAgIGFuZCBwcm9wYWdhdGUgd2hlbiB2YWx1ZXMgb3IgcGxhY2VzIDw9IDIuIFJldHVybiB1cGRhdGVkIGNhbmRpZGF0ZXMsXG4gICAgICAgIHVubGVzcyBhIGNvbnRyYWRpY3Rpb24gaXMgZGV0ZWN0ZWQsIGluIHdoaWNoIGNhc2UsIHJldHVybiBmYWxzZS5cbiAgXG4gICAgICAgIFdBUk5JTkc6IFRoaXMgd2lsbCBtb2RpZnkgdGhlIGNvbnRlbnRzIG9mIGBjYW5kaWRhdGVzYCBkaXJlY3RseS5cbiAgICAgICAgKi9cbiAgICAgICAgLy8gSWYgYHZhbGAgaGFzIGFscmVhZHkgYmVlbiBlbGltaW5hdGVkIGZyb20gY2FuZGlkYXRlc1tzcXVhcmVdLCByZXR1cm5cbiAgICAgICAgLy8gd2l0aCBjYW5kaWRhdGVzLlxuICAgICAgICBpZiAoIXRoaXMuX2luKHZhbCwgY2FuZGlkYXRlc1tzcXVhcmVdKSkge1xuICAgICAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgICAgIH1cbiAgICAgICAgLy8gUmVtb3ZlIGB2YWxgIGZyb20gY2FuZGlkYXRlc1tzcXVhcmVdXG4gICAgICAgIGNhbmRpZGF0ZXNbc3F1YXJlXSA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5yZXBsYWNlKHZhbCwgJycpO1xuICAgICAgICAvLyBJZiB0aGUgc3F1YXJlIGhhcyBvbmx5IGNhbmRpZGF0ZSBsZWZ0LCBlbGltaW5hdGUgdGhhdCB2YWx1ZSBmcm9tIGl0c1xuICAgICAgICAvLyBwZWVyc1xuICAgICAgICBsZXQgbnJfY2FuZGlkYXRlcyA9IGNhbmRpZGF0ZXNbc3F1YXJlXS5sZW5ndGg7XG4gICAgICAgIGlmIChucl9jYW5kaWRhdGVzID09PSAxKSB7XG4gICAgICAgICAgICBsZXQgdGFyZ2V0X3ZhbCA9IGNhbmRpZGF0ZXNbc3F1YXJlXTtcbiAgICAgICAgICAgIGZvciAobGV0IHBlZXIgb2YgdGhpcy5TUVVBUkVfUEVFUlNfTUFQW3NxdWFyZV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXcgPSB0aGlzLl9lbGltaW5hdGUoY2FuZGlkYXRlcywgcGVlciwgdGFyZ2V0X3ZhbCk7XG4gICAgICAgICAgICAgICAgaWYgKCFjYW5kaWRhdGVzX25ldykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlLCBpZiB0aGUgc3F1YXJlIGhhcyBubyBjYW5kaWRhdGVzLCB3ZSBoYXZlIGEgY29udHJhZGljdGlvbi5cbiAgICAgICAgICAgIC8vIFJldHVybiBmYWxzZS5cbiAgICAgICAgfVxuICAgICAgICBpZiAobnJfY2FuZGlkYXRlcyA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIElmIGEgdW5pdCBpcyByZWR1Y2VkIHRvIG9ubHkgb25lIHBsYWNlIGZvciBhIHZhbHVlLCB0aGVuIGFzc2lnbiBpdFxuICAgICAgICBmb3IgKGxldCB1bml0IG9mIHRoaXMuU1FVQVJFX1VOSVRTX01BUFtzcXVhcmVdKSB7XG4gICAgICAgICAgICBsZXQgdmFsX3BsYWNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgdW5pdF9zcXVhcmUgb2YgdW5pdCkge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9pbih2YWwsIGNhbmRpZGF0ZXNbdW5pdF9zcXVhcmVdKSkge1xuICAgICAgICAgICAgICAgICAgICB2YWxfcGxhY2VzLnB1c2godW5pdF9zcXVhcmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIHRoZXJlJ3Mgbm8gcGxhY2UgZm9yIHRoaXMgdmFsdWUsIHdlIGhhdmUgYSBjb250cmFkaXRpb24hXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2VcbiAgICAgICAgICAgIGlmICh2YWxfcGxhY2VzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAvLyBPdGhlcndpc2UgdGhlIHZhbHVlIGNhbiBvbmx5IGJlIGluIG9uZSBwbGFjZS4gQXNzaWduIGl0IHRoZXJlLlxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAodmFsX3BsYWNlcy5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgY2FuZGlkYXRlc19uZXcgPSB0aGlzLl9hc3NpZ24oY2FuZGlkYXRlcywgdmFsX3BsYWNlc1swXSwgdmFsKTtcbiAgICAgICAgICAgICAgICBpZiAoIWNhbmRpZGF0ZXNfbmV3KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNhbmRpZGF0ZXM7XG4gICAgfTtcbiAgICAvLyBHcm91cHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgZ2V0R3JvdXBOdW1iZXIgPSAoY29sLCByb3cpID0+IHtcbiAgICAgICAgY29uc3QgZ2V0U2VjdGlvbk51bWJlciA9IChuKSA9PiBuIDwgMyA/ICcxJyA6XG4gICAgICAgICAgICBuIDwgNiA/ICcyJyA6XG4gICAgICAgICAgICAgICAgJzMnO1xuICAgICAgICByZXR1cm4gZ2V0U2VjdGlvbk51bWJlcihjb2wpICsgZ2V0U2VjdGlvbk51bWJlcihyb3cpO1xuICAgIH07XG4gICAgLy8gU3F1YXJlIHJlbGF0aW9uc2hpcHNcbiAgICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gICAgLy8gU3F1YXJlcywgYW5kIHRoZWlyIHJlbGF0aW9uc2hpcHMgd2l0aCB2YWx1ZXMsIHVuaXRzLCBhbmQgcGVlcnMuXG4gICAgX2dldF9zcXVhcmVfdmFsc19tYXAgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgbWFwIG9mIHNxdWFyZXMgLT4gdmFsdWVzXG4gICAgICAgICovXG4gICAgICAgIGxldCBzcXVhcmVzX3ZhbHNfbWFwID0ge307XG4gICAgICAgIC8vIE1ha2Ugc3VyZSBgYm9hcmRgIGlzIGEgc3RyaW5nIG9mIGxlbmd0aCA4MVxuICAgICAgICBpZiAoYm9hcmQubGVuZ3RoICE9IHRoaXMuU1FVQVJFUy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRocm93IFwiQm9hcmQvc3F1YXJlcyBsZW5ndGggbWlzbWF0Y2guXCI7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuU1FVQVJFUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHNxdWFyZXNfdmFsc19tYXBbdGhpcy5TUVVBUkVTW2ldXSA9IGJvYXJkW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzcXVhcmVzX3ZhbHNfbWFwO1xuICAgIH07XG4gICAgX2dldF9zcXVhcmVfdW5pdHNfbWFwID0gKHNxdWFyZXMsIHVuaXRzKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhIG1hcCBvZiBgc3F1YXJlc2AgYW5kIHRoZWlyIGFzc29jaWF0ZWQgdW5pdHMgKHJvdywgY29sLCBib3gpXG4gICAgICAgICovXG4gICAgICAgIGxldCBzcXVhcmVfdW5pdF9tYXAgPSB7fTtcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHNxdWFyZS4uLlxuICAgICAgICBmb3IgKGxldCBzaSBpbiBzcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZSA9IHNxdWFyZXNbc2ldO1xuICAgICAgICAgICAgLy8gTWFpbnRhaW4gYSBsaXN0IG9mIHRoZSBjdXJyZW50IHNxdWFyZSdzIHVuaXRzXG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZV91bml0cyA9IFtdO1xuICAgICAgICAgICAgLy8gTG9vayB0aHJvdWdoIHRoZSB1bml0cywgYW5kIHNlZSBpZiB0aGUgY3VycmVudCBzcXVhcmUgaXMgaW4gaXQsXG4gICAgICAgICAgICAvLyBhbmQgaWYgc28sIGFkZCBpdCB0byB0aGUgbGlzdCBvZiBvZiB0aGUgc3F1YXJlJ3MgdW5pdHMuXG4gICAgICAgICAgICBmb3IgKGxldCB1aSBpbiB1bml0cykge1xuICAgICAgICAgICAgICAgIGxldCBjdXJfdW5pdCA9IHVuaXRzW3VpXTtcbiAgICAgICAgICAgICAgICBpZiAoY3VyX3VuaXQuaW5kZXhPZihjdXJfc3F1YXJlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY3VyX3NxdWFyZV91bml0cy5wdXNoKGN1cl91bml0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBTYXZlIHRoZSBjdXJyZW50IHNxdWFyZSBhbmQgaXRzIHVuaXRzIHRvIHRoZSBtYXBcbiAgICAgICAgICAgIHNxdWFyZV91bml0X21hcFtjdXJfc3F1YXJlXSA9IGN1cl9zcXVhcmVfdW5pdHM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZV91bml0X21hcDtcbiAgICB9O1xuICAgIF9nZXRfc3F1YXJlX3BlZXJzX21hcCA9IChzcXVhcmVzLCB1bml0c19tYXApID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGEgbWFwIG9mIGBzcXVhcmVzYCBhbmQgdGhlaXIgYXNzb2NpYXRlZCBwZWVycywgaS5lLiwgYSBzZXQgb2ZcbiAgICAgICAgb3RoZXIgc3F1YXJlcyBpbiB0aGUgc3F1YXJlJ3MgdW5pdC5cbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNxdWFyZV9wZWVyc19tYXAgPSB7fTtcbiAgICAgICAgLy8gRm9yIGV2ZXJ5IHNxdWFyZS4uLlxuICAgICAgICBmb3IgKGxldCBzaSBpbiBzcXVhcmVzKSB7XG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZSA9IHNxdWFyZXNbc2ldO1xuICAgICAgICAgICAgbGV0IGN1cl9zcXVhcmVfdW5pdHMgPSB1bml0c19tYXBbY3VyX3NxdWFyZV07XG4gICAgICAgICAgICAvLyBNYWludGFpbiBsaXN0IG9mIHRoZSBjdXJyZW50IHNxdWFyZSdzIHBlZXJzXG4gICAgICAgICAgICBsZXQgY3VyX3NxdWFyZV9wZWVycyA9IFtdO1xuICAgICAgICAgICAgLy8gTG9vayB0aHJvdWdoIHRoZSBjdXJyZW50IHNxdWFyZSdzIHVuaXRzIG1hcC4uLlxuICAgICAgICAgICAgZm9yIChsZXQgc3VpIG9mIGN1cl9zcXVhcmVfdW5pdHMpIHtcbiAgICAgICAgICAgICAgICBsZXQgY3VyX3VuaXQgPSBzdWk7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgdWkgb2YgY3VyX3VuaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGN1cl91bml0X3NxdWFyZSA9IHVpO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY3VyX3NxdWFyZV9wZWVycy5pbmRleE9mKGN1cl91bml0X3NxdWFyZSkgPT09IC0xICYmXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJfdW5pdF9zcXVhcmUgIT09IGN1cl9zcXVhcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cl9zcXVhcmVfcGVlcnMucHVzaChjdXJfdW5pdF9zcXVhcmUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2F2ZSB0aGUgY3VycmVudCBzcXVhcmUgYW4gaXRzIGFzc29jaWF0ZWQgcGVlcnMgdG8gdGhlIG1hcFxuICAgICAgICAgICAgc3F1YXJlX3BlZXJzX21hcFtjdXJfc3F1YXJlXSA9IGN1cl9zcXVhcmVfcGVlcnM7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNxdWFyZV9wZWVyc19tYXA7XG4gICAgfTtcbiAgICBfZ2V0X2FsbF91bml0cyA9IChyb3dzLCBjb2xzKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhIGxpc3Qgb2YgYWxsIHVuaXRzIChyb3dzLCBjb2xzLCBib3hlcylcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHVuaXRzID0gW107XG4gICAgICAgIC8vIFJvd3NcbiAgICAgICAgZm9yIChsZXQgcmkgb2Ygcm93cykge1xuICAgICAgICAgICAgdW5pdHMucHVzaCh0aGlzLl9jcm9zcyhyaSwgY29scykpO1xuICAgICAgICB9XG4gICAgICAgIC8vIENvbHVtbnNcbiAgICAgICAgZm9yIChsZXQgY2kgb2YgY29scykge1xuICAgICAgICAgICAgdW5pdHMucHVzaCh0aGlzLl9jcm9zcyhyb3dzLCBjaSkpO1xuICAgICAgICB9XG4gICAgICAgIC8vIEJveGVzXG4gICAgICAgIGxldCByb3dfc3F1YXJlcyA9IFtcIkFCQ1wiLCBcIkRFRlwiLCBcIkdISVwiXTtcbiAgICAgICAgbGV0IGNvbF9zcXVhcmVzID0gW1wiMTIzXCIsIFwiNDU2XCIsIFwiNzg5XCJdO1xuICAgICAgICBmb3IgKGxldCByc2kgaW4gcm93X3NxdWFyZXMpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGNzaSBpbiBjb2xfc3F1YXJlcykge1xuICAgICAgICAgICAgICAgIHVuaXRzLnB1c2godGhpcy5fY3Jvc3Mocm93X3NxdWFyZXNbcnNpXSwgY29sX3NxdWFyZXNbY3NpXSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bml0cztcbiAgICB9O1xuICAgIC8vIENvbnZlcnNpb25zXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAgIGJvYXJkX3N0cmluZ190b19ncmlkID0gKGJvYXJkX3N0cmluZykgPT4ge1xuICAgICAgICAvKiBDb252ZXJ0IGEgYm9hcmQgc3RyaW5nIHRvIGEgdHdvLWRpbWVuc2lvbmFsIGFycmF5XG4gICAgICAgICovXG4gICAgICAgIGNvbnN0IHJvd3MgPSBbXTtcbiAgICAgICAgbGV0IGN1cl9yb3cgPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBpIG9mIGJvYXJkX3N0cmluZykge1xuICAgICAgICAgICAgY3VyX3Jvdy5wdXNoKGkpO1xuICAgICAgICAgICAgaWYgKE51bWJlcihpKSAlIDkgPT0gOCkge1xuICAgICAgICAgICAgICAgIHJvd3MucHVzaChjdXJfcm93KTtcbiAgICAgICAgICAgICAgICBjdXJfcm93ID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJvd3M7XG4gICAgfTtcbiAgICBib2FyZF9ncmlkX3RvX3N0cmluZyA9IChib2FyZF9ncmlkKSA9PiB7XG4gICAgICAgIC8qIENvbnZlcnQgYSBib2FyZCBncmlkIHRvIGEgc3RyaW5nXG4gICAgICAgICovXG4gICAgICAgIGxldCBib2FyZF9zdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCByID0gMDsgciA8IDk7ICsrcikge1xuICAgICAgICAgICAgZm9yIChsZXQgYyA9IDA7IGMgPCA5OyArK2MpIHtcbiAgICAgICAgICAgICAgICBib2FyZF9zdHJpbmcgKz0gYm9hcmRfZ3JpZFtyXVtjXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYm9hcmRfc3RyaW5nO1xuICAgIH07XG4gICAgLy8gVXRpbGl0eVxuICAgIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgICBwcmludF9ib2FyZCA9IChib2FyZCkgPT4ge1xuICAgICAgICAvKiBQcmludCBhIHN1ZG9rdSBgYm9hcmRgIHRvIHRoZSBjb25zb2xlLlxuICAgICAgICAqL1xuICAgICAgICAvLyBBc3N1cmUgYSB2YWxpZCBib2FyZFxuICAgICAgICBsZXQgcmVwb3J0ID0gdGhpcy52YWxpZGF0ZV9ib2FyZChib2FyZCk7XG4gICAgICAgIGlmIChyZXBvcnQgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHRocm93IHJlcG9ydDtcbiAgICAgICAgfVxuICAgICAgICBsZXQgVl9QQURESU5HID0gXCIgXCI7IC8vIEluc2VydCBhZnRlciBlYWNoIHNxdWFyZVxuICAgICAgICBsZXQgSF9QQURESU5HID0gJ1xcbic7IC8vIEluc2VydCBhZnRlciBlYWNoIHJvd1xuICAgICAgICBsZXQgVl9CT1hfUEFERElORyA9IFwiICBcIjsgLy8gQm94IHZlcnRpY2FsIHBhZGRpbmdcbiAgICAgICAgbGV0IEhfQk9YX1BBRERJTkcgPSAnXFxuJzsgLy8gQm94IGhvcml6b250YWwgcGFkZGluZ1xuICAgICAgICBsZXQgZGlzcGxheV9zdHJpbmcgPSBcIlwiO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGJvYXJkLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgc3F1YXJlID0gYm9hcmRbaV07XG4gICAgICAgICAgICAvLyBBZGQgdGhlIHNxdWFyZSBhbmQgc29tZSBwYWRkaW5nXG4gICAgICAgICAgICBkaXNwbGF5X3N0cmluZyArPSBzcXVhcmUgKyBWX1BBRERJTkc7XG4gICAgICAgICAgICAvLyBWZXJ0aWNhbCBlZGdlIG9mIGEgYm94LCBpbnNlcnQgdi4gYm94IHBhZGRpbmdcbiAgICAgICAgICAgIGlmIChpICUgMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfc3RyaW5nICs9IFZfQk9YX1BBRERJTkc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBFbmQgb2YgYSBsaW5lLCBpbnNlcnQgaG9yaXouIHBhZGRpbmdcbiAgICAgICAgICAgIGlmIChpICUgOSA9PT0gOCkge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfc3RyaW5nICs9IEhfUEFERElORztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEhvcml6b250YWwgZWRnZSBvZiBhIGJveCwgaW5zZXJ0IGguIGJveCBwYWRkaW5nXG4gICAgICAgICAgICBpZiAoaSAlIDI3ID09PSAyNikge1xuICAgICAgICAgICAgICAgIGRpc3BsYXlfc3RyaW5nICs9IEhfQk9YX1BBRERJTkc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coZGlzcGxheV9zdHJpbmcpO1xuICAgIH07XG4gICAgdmFsaWRhdGVfYm9hcmQgPSAoYm9hcmQpID0+IHtcbiAgICAgICAgLyogUmV0dXJuIGlmIHRoZSBnaXZlbiBgYm9hcmRgIGlzIHZhbGlkIG9yIG5vdC4gSWYgaXQncyB2YWxpZCwgcmV0dXJuXG4gICAgICAgIHRydWUuIElmIGl0J3Mgbm90LCByZXR1cm4gYSBzdHJpbmcgb2YgdGhlIHJlYXNvbiB3aHkgaXQncyBub3QuXG4gICAgICAgICovXG4gICAgICAgIC8vIENoZWNrIGZvciBlbXB0eSBib2FyZFxuICAgICAgICBpZiAoIWJvYXJkKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJFbXB0eSBib2FyZFwiO1xuICAgICAgICB9XG4gICAgICAgIC8vIEludmFsaWQgYm9hcmQgbGVuZ3RoXG4gICAgICAgIGlmIChib2FyZC5sZW5ndGggIT09IHRoaXMuTlJfU1FVQVJFUykge1xuICAgICAgICAgICAgcmV0dXJuIFwiSW52YWxpZCBib2FyZCBzaXplLiBCb2FyZCBtdXN0IGJlIGV4YWN0bHkgXCIgKyB0aGlzLk5SX1NRVUFSRVMgK1xuICAgICAgICAgICAgICAgIFwiIHNxdWFyZXMuXCI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQ2hlY2sgZm9yIGludmFsaWQgY2hhcmFjdGVyc1xuICAgICAgICBmb3IgKGxldCBpIG9mIGJvYXJkKSB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2luKGksIHRoaXMuRElHSVRTKSAmJiBpICE9PSB0aGlzLkJMQU5LX0NIQVIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGJvYXJkIGNoYXJhY3RlciBlbmNvdW50ZXJlZCBhdCBpbmRleCBcIiArIGkgK1xuICAgICAgICAgICAgICAgICAgICBcIjogXCIgKyBpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIE90aGVyd2lzZSwgd2UncmUgZ29vZC4gUmV0dXJuIHRydWUuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH07XG4gICAgX2Nyb3NzID0gKGEsIGIpID0+IHtcbiAgICAgICAgLyogQ3Jvc3MgcHJvZHVjdCBvZiBhbGwgZWxlbWVudHMgaW4gYGFgIGFuZCBgYmAsIGUuZy4sXG4gICAgICAgIHN1ZG9rdS5fY3Jvc3MoXCJhYmNcIiwgXCIxMjNcIikgLT5cbiAgICAgICAgW1wiYTFcIiwgXCJhMlwiLCBcImEzXCIsIFwiYjFcIiwgXCJiMlwiLCBcImIzXCIsIFwiYzFcIiwgXCJjMlwiLCBcImMzXCJdXG4gICAgICAgICovXG4gICAgICAgIGxldCByZXN1bHQgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgYWkgb2YgYSkge1xuICAgICAgICAgICAgZm9yIChsZXQgYmkgb2YgYikge1xuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGFpICsgYmkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICBfaW4gPSAodiwgc2VxKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBpZiBhIHZhbHVlIGB2YCBpcyBpbiBzZXF1ZW5jZSBgc2VxYC5cbiAgICAgICAgKi9cbiAgICAgICAgcmV0dXJuIHNlcS5pbmRleE9mKHYpICE9PSAtMTtcbiAgICB9O1xuICAgIF9maXJzdF90cnVlID0gKHNlcSkgPT4ge1xuICAgICAgICAvKiBSZXR1cm4gdGhlIGZpcnN0IGVsZW1lbnQgaW4gYHNlcWAgdGhhdCBpcyB0cnVlLiBJZiBubyBlbGVtZW50IGlzXG4gICAgICAgIHRydWUsIHJldHVybiBmYWxzZS5cbiAgICAgICAgKi9cbiAgICAgICAgZm9yIChsZXQgaSBvZiBzZXEpIHtcbiAgICAgICAgICAgIGlmIChpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH07XG4gICAgX3NodWZmbGUgPSAoc2VxKSA9PiB7XG4gICAgICAgIC8qIFJldHVybiBhIHNodWZmbGVkIHZlcnNpb24gb2YgYHNlcWBcbiAgICAgICAgKi9cbiAgICAgICAgLy8gQ3JlYXRlIGFuIGFycmF5IG9mIHRoZSBzYW1lIHNpemUgYXMgYHNlcWAgZmlsbGVkIHdpdGggZmFsc2VcbiAgICAgICAgbGV0IHNodWZmbGVkID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2VxLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAgICBzaHVmZmxlZC5wdXNoKGZhbHNlKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpIG9mIHNlcSkge1xuICAgICAgICAgICAgbGV0IHRpID0gdGhpcy5fcmFuZF9yYW5nZShzZXEubGVuZ3RoKTtcbiAgICAgICAgICAgIHdoaWxlIChzaHVmZmxlZFt0aV0pIHtcbiAgICAgICAgICAgICAgICB0aSA9ICh0aSArIDEpID4gKHNlcS5sZW5ndGggLSAxKSA/IDAgOiAodGkgKyAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNodWZmbGVkW3RpXSA9IGk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHNodWZmbGVkO1xuICAgIH07XG4gICAgX3JhbmRfcmFuZ2UgPSAobWF4LCBtaW4pID0+IHtcbiAgICAgICAgLyogR2V0IGEgcmFuZG9tIGludGVnZXIgaW4gdGhlIHJhbmdlIG9mIGBtaW5gIHRvIGBtYXhgIChub24gaW5jbHVzaXZlKS5cbiAgICAgICAgSWYgYG1pbmAgbm90IGRlZmluZWQsIGRlZmF1bHQgdG8gMC4gSWYgYG1heGAgbm90IGRlZmluZWQsIHRocm93IGFuXG4gICAgICAgIGVycm9yLlxuICAgICAgICAqL1xuICAgICAgICBtaW4gPSBtaW4gPz8gMDtcbiAgICAgICAgaWYgKG1heCkge1xuICAgICAgICAgICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4pKSArIG1pbjtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRocm93IFwiUmFuZ2UgdW5kZWZpbmVkXCI7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIF9zdHJpcF9kdXBzID0gKHNlcSkgPT4ge1xuICAgICAgICAvKiBTdHJpcCBkdXBsaWNhdGUgdmFsdWVzIGZyb20gYHNlcWBcbiAgICAgICAgKi9cbiAgICAgICAgbGV0IHNlcV9zZXQgPSBbXTtcbiAgICAgICAgbGV0IGR1cF9tYXAgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgZSBvZiBzZXEpIHtcbiAgICAgICAgICAgIGlmICghZHVwX21hcFtlXSkge1xuICAgICAgICAgICAgICAgIHNlcV9zZXQucHVzaChlKTtcbiAgICAgICAgICAgICAgICBkdXBfbWFwW2VdID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc2VxX3NldDtcbiAgICB9O1xuICAgIF9mb3JjZV9yYW5nZSA9IChuciwgbWF4LCBtaW4pID0+IHtcbiAgICAgICAgLyogRm9yY2UgYG5yYCB0byBiZSB3aXRoaW4gdGhlIHJhbmdlIGZyb20gYG1pbmAgdG8sIGJ1dCBub3QgaW5jbHVkaW5nLFxuICAgICAgICBgbWF4YC4gYG1pbmAgaXMgb3B0aW9uYWwsIGFuZCB3aWxsIGRlZmF1bHQgdG8gMC4gSWYgYG5yYCBpcyB1bmRlZmluZWQsXG4gICAgICAgIHRyZWF0IGl0IGFzIHplcm8uXG4gICAgICAgICovXG4gICAgICAgIG1pbiA9IG1pbiB8fCAwO1xuICAgICAgICBuciA9IG5yIHx8IDA7XG4gICAgICAgIGlmIChuciA8IG1pbikge1xuICAgICAgICAgICAgcmV0dXJuIG1pbjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobnIgPiBtYXgpIHtcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIG5yO1xuICAgIH07XG59O1xuU3Vkb2t1VFMgPSBfX2RlY29yYXRlKFtcbiAgICAoMCwgaW5qZWN0XzEuU2luZ2xldG9uKSgpLFxuICAgIF9fbWV0YWRhdGEoXCJkZXNpZ246cGFyYW10eXBlc1wiLCBbXSlcbl0sIFN1ZG9rdVRTKTtcbmV4cG9ydHMuU3Vkb2t1VFMgPSBTdWRva3VUUztcblN1ZG9rdVRTW1wiQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wXCJdID0gW107XG4vLyBjb25zdCBzdWRva3UgPSBuZXcgU3Vkb2t1VFMoKVxuLy8gY29uc3QgZ2FtZSA9IHN1ZG9rdS5nZW5lcmF0ZSgnZWFzeScpXG4vLyBnYW1lXG4vLyBjb25zdCByZXN1bHQgPSBzdWRva3Uuc29sdmUoZ2FtZSlcbi8vIHJlc3VsdFxuLy8gY29uc3QgY2FuZGlkYXRlcyA9ICg8c3RyaW5nW11bXT5zdWRva3Vcbi8vICAgLmdldENhbmRpZGF0ZXMoZ2FtZSkpXG4vLyAgIC5mbGF0KClcbi8vIGNvbnN0IHJlbWFpbmluZyA9IFsuLi5uZXcgU2V0KGNhbmRpZGF0ZXMubWFwKChjYW5kaWRhdGUsIGkpID0+IHtcbi8vICAgaWYgKGdhbWVbaV0gPT09ICcuJylcbi8vICAgICByZXR1cm4gY2FuZGlkYXRlXG4vLyB9KS5qb2luKCcnKS5zcGxpdCgnJykpXS5zb3J0KClcbi8vIGNvbnNvbGUubG9nKGNhbmRpZGF0ZXMpXG4vLyBjb25zb2xlLmxvZyhyZW1haW5pbmcpXG4vLyBzdWRva3UucHJpbnRfYm9hcmQoZ2FtZSlcbiIsIlwidXNlIHN0cmljdFwiO1xudmFyIF9fZGVjb3JhdGUgPSAodGhpcyAmJiB0aGlzLl9fZGVjb3JhdGUpIHx8IGZ1bmN0aW9uIChkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG59O1xudmFyIF9fbWV0YWRhdGEgPSAodGhpcyAmJiB0aGlzLl9fbWV0YWRhdGEpIHx8IGZ1bmN0aW9uIChrLCB2KSB7XG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xufTtcbnZhciBfYSwgX2IsIF9jLCBfZCwgX2UsIF9mO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5WYW5pbGxhSnNWaWV3ID0gdm9pZCAwO1xuY29uc3QgaW5qZWN0XzEgPSByZXF1aXJlKFwiQGdvZHNtYWNrL2luamVjdFwiKTtcbmNvbnN0IEdhbWVEaWZmaWN1bHR5XzEgPSByZXF1aXJlKFwiLi4vZW51bXMvR2FtZURpZmZpY3VsdHlcIik7XG5jb25zdCBJR2FtZVB1YlN1Yl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZVB1YlN1YlwiKTtcbmNvbnN0IElHYW1lTG9naWNfMSA9IHJlcXVpcmUoXCIuLi9pbnRlcmZhY2UvSUdhbWVMb2dpY1wiKTtcbmNvbnN0IElHYW1lTWFuYWdlcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZU1hbmFnZXJcIik7XG5jb25zdCBJR2FtZVJ1bm5lcl8xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JR2FtZVJ1bm5lclwiKTtcbmNvbnN0IElTdWRva3VUU18xID0gcmVxdWlyZShcIi4uL2ludGVyZmFjZS9JU3Vkb2t1VFNcIik7XG5jb25zdCBHYW1lU2V0dGluZ3NfMSA9IHJlcXVpcmUoXCIuL0dhbWVTZXR0aW5nc1wiKTtcbmNvbnN0IHZlYzJfMSA9IHJlcXVpcmUoXCIuLi91dGlscy92ZWMyXCIpO1xubGV0IFZhbmlsbGFKc1ZpZXcgPSBjbGFzcyBWYW5pbGxhSnNWaWV3IHtcbiAgICBnYW1lTWFuYWdlcjtcbiAgICBsb2dpYztcbiAgICBzdWRva3U7XG4gICAgcnVubmVyO1xuICAgIGV2ZW50cztcbiAgICBjb25maWc7XG4gICAgcm9vdDtcbiAgICBib2FyZDtcbiAgICBjdHJsO1xuICAgIGZvcm07XG4gICAgZGlmZjtcbiAgICBjb25zdHJ1Y3RvcihnYW1lTWFuYWdlciwgbG9naWMsIHN1ZG9rdSwgcnVubmVyLCBldmVudHMsIGNvbmZpZykge1xuICAgICAgICB0aGlzLmdhbWVNYW5hZ2VyID0gZ2FtZU1hbmFnZXI7XG4gICAgICAgIHRoaXMubG9naWMgPSBsb2dpYztcbiAgICAgICAgdGhpcy5zdWRva3UgPSBzdWRva3U7XG4gICAgICAgIHRoaXMucnVubmVyID0gcnVubmVyO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5jb25maWcgPSBjb25maWc7XG4gICAgICAgIHRoaXMuYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3Vkb2t1X2JvYXJkJyk7XG4gICAgICAgIHRoaXMuY3RybCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250cm9scycpO1xuICAgICAgICB0aGlzLmZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtJyk7XG4gICAgICAgIHRoaXMuZGlmZiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0gc2VsZWN0Jyk7XG4gICAgICAgIHRoaXMucm9vdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJzpyb290Jyk7XG4gICAgfVxuICAgIGdldENlbGxEaXNwbGF5VmFsdWUobW9kZWwsIGNlbGwpIHtcbiAgICAgICAgcmV0dXJuIGNlbGwudmFsdWUgPT09ICcuJyA/ICcnIDogY2VsbC52YWx1ZTtcbiAgICB9XG4gICAgcmVuZGVyQ2VsbChtb2RlbCwgY2VsbCkge1xuICAgICAgICBjb25zdCBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBlbC5jbGFzc0xpc3QuYWRkKCdjZWxsJyk7XG4gICAgICAgIC8vIGVsLnN0eWxlLmhlaWdodCA9ICcyNXB4J1xuICAgICAgICBlbC5zdHlsZS5oZWlnaHQgPSAnNjJweCc7XG4gICAgICAgIGNvbnN0IFt4LCB5XSA9IHRoaXMubG9naWMuZ2V0VGlsZVZlY3RvckZvckluZGV4KGNlbGwuaW5kZXgpO1xuICAgICAgICBjb25zdCBzbFBvcyA9ICEhbW9kZWwuc2VsZWN0ZWQgJiYgdGhpcy5sb2dpYy5nZXRUaWxlVmVjdG9yRm9ySW5kZXgobW9kZWwuc2VsZWN0ZWQpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZEdyb3VwID0gc2xQb3MgJiYgdGhpcy5zdWRva3UuZ2V0R3JvdXBOdW1iZXIoc2xQb3NbMF0sIHNsUG9zWzFdKTtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0aGlzLnN1ZG9rdS5nZXRHcm91cE51bWJlcih4LCB5KTtcbiAgICAgICAgY29uc3QgaXNTZWxlY3RlZCA9IG1vZGVsLnNlbGVjdGVkID09PSBjZWxsLmluZGV4O1xuICAgICAgICBjb25zdCBpc0dyb3VwID0gZ3JvdXAgPT09IHNlbGVjdGVkR3JvdXA7XG4gICAgICAgIGNvbnN0IGlzSW5saW5lID0gaXNHcm91cCB8fCAoc2xQb3MgJiYgKHNsUG9zWzBdID09PSB4IHx8IHNsUG9zWzFdID09PSB5KSk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2ZpeCcsIGNlbGwuaXNIaW50KTtcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnY3VycmVudCcsIGlzU2VsZWN0ZWQpOyAvLyBjdXJyZW50bHkgc2VsZWN0ZWQgY2VsbFxuICAgICAgICBlbC5jbGFzc0xpc3QudG9nZ2xlKCdncm91cCcsIGlzR3JvdXApOyAvLyBzYW1lIHNlY3Rpb24gYXMgc2VsZWN0ZWRcbiAgICAgICAgZWwuY2xhc3NMaXN0LnRvZ2dsZSgnc2VsZWN0ZWQnLCBpc0lubGluZSk7IC8vIGlubGluZSB3aXRoIHNlbGVjdGVkXG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2JvcmRlcl92JywgWzMsIDZdLmluY2x1ZGVzKHggKyAxKSk7XG4gICAgICAgIGVsLmNsYXNzTGlzdC50b2dnbGUoJ2JvcmRlcl9oJywgWzMsIDZdLmluY2x1ZGVzKHkgKyAxKSk7XG4gICAgICAgIGVsLnNldEF0dHJpYnV0ZSgneCcsIFN0cmluZyh4ICsgMSkpO1xuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3knLCBTdHJpbmcoeSArIDEpKTtcbiAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdpZHgnLCBTdHJpbmcoY2VsbC5pbmRleCkpO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICBzcGFuLnN0eWxlLmxpbmVIZWlnaHQgPSB0aGlzLmNvbmZpZy5jZWxsU2l6ZSArICdweCc7XG4gICAgICAgIC8vIHNwYW4uc3R5bGUubGluZUhlaWdodCA9ICc2MnB4J1xuICAgICAgICAvLyBzcGFuLnN0eWxlLmxpbmVIZWlnaHQgPSAnMjVweCdcbiAgICAgICAgc3Bhbi5pbm5lckhUTUwgPSB0aGlzLmdldENlbGxEaXNwbGF5VmFsdWUobW9kZWwsIGNlbGwpO1xuICAgICAgICBlbC5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgcmV0dXJuIGVsLm91dGVySFRNTDtcbiAgICB9XG4gICAgcmVuZGVyQ2VsbExpc3QobW9kZWwpIHtcbiAgICAgICAgcmV0dXJuIG1vZGVsLmNlbGxzXG4gICAgICAgICAgICAubWFwKGNlbGwgPT4gdGhpcy5yZW5kZXJDZWxsKG1vZGVsLCBjZWxsKSlcbiAgICAgICAgICAgIC5qb2luKCcnKTtcbiAgICB9XG4gICAgcmVuZGVyQm9hcmQobW9kZWwpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3JlbmRlckJvYXJkJywgbW9kZWwpO1xuICAgICAgICB0aGlzLmJvYXJkLnN0eWxlLndpZHRoID0gdGhpcy5jb25maWcuYm9hcmRXaWR0aCArICdweCc7XG4gICAgICAgIC8vIHRoaXMuYm9hcmQuc3R5bGUud2lkdGggPSBcIjU1M3B4XCI7XG4gICAgICAgIC8vIHRoaXMuYm9hcmQuc3R5bGUud2lkdGggPSBcIjIyMHB4XCI7XG4gICAgICAgIHRoaXMuYm9hcmQuaW5uZXJIVE1MID0gdGhpcy5yZW5kZXJDZWxsTGlzdChtb2RlbCk7XG4gICAgfVxuICAgIHNldENlbGxTaXplKHsgY2VsbFNpemU6IFt4LCB5XSB9KSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jZWxsLXdpZHRoJywgeCArICdweCcpO1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tY2VsbC1oZWlnaHQnLCB5ICsgJ3B4Jyk7XG4gICAgfVxuICAgIHNldENlbGxDaGFyYWN0ZXJzKHsgZmxhZ0NoYXJhY3RlciwgbWluZUNoYXJhY3RlciB9KSB7XG4gICAgICAgIHRoaXMucm9vdC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1mbGFnLWNoYXJhY3RlcicsIGZsYWdDaGFyYWN0ZXIpO1xuICAgICAgICB0aGlzLnJvb3Quc3R5bGUuc2V0UHJvcGVydHkoJy0tbWluZS1jaGFyYWN0ZXInLCBtaW5lQ2hhcmFjdGVyKTtcbiAgICB9XG4gICAgc3RhcnRHYW1lID0gYXN5bmMgKGRpZmZpY3VsdHkgPSBHYW1lRGlmZmljdWx0eV8xLkdhbWVEaWZmaWN1bHR5LmVhc3kpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ3N0YXJ0R2FtZScsIGRpZmZpY3VsdHkpO1xuICAgICAgICBjb25zdCBnYW1lYm9hcmQgPSB0aGlzLmdhbWVNYW5hZ2VyLmNyZWF0ZShkaWZmaWN1bHR5KTtcbiAgICAgICAgLy8gdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsICgpID0+IHtcbiAgICAgICAgLy8gICBpZiAoZ2FtZWJvYXJkLnN0YXRlIDwgR2FtZVN0YXRlLldPTilcbiAgICAgICAgLy8gICAgIGdhbWVib2FyZC5zdGF0ZSA9IEdhbWVTdGF0ZS5HQU1FT1ZFUjtcbiAgICAgICAgLy8gfSwgeyBvbmNlOiB0cnVlIH0pO1xuICAgICAgICBhd2FpdCB0aGlzLnJ1bm5lci5wbGF5R2FtZShnYW1lYm9hcmQpO1xuICAgIH07XG4gICAgc3VibWl0SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBmb3JtID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IGRpZmZpY3VsdHkgPSBmb3JtLmdldCgnZGlmZmljdWx0eScpO1xuICAgICAgICB0aGlzLnN0YXJ0R2FtZShkaWZmaWN1bHR5KTtcbiAgICB9O1xuICAgIGV2ZW50SGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAvLyBjb25zb2xlLmxvZygnZXZlbnRIYW5kbGVyJywgZXZlbnQpO1xuICAgICAgICBzd2l0Y2ggKGV2ZW50LnR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ2NvbmZpZy1jaGFuZ2VkJzpcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxTaXplKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldENlbGxDaGFyYWN0ZXJzKHRoaXMuY29uZmlnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3VwZGF0ZSc6XG4gICAgICAgICAgICBjYXNlICdiZWdpbic6XG4gICAgICAgICAgICBjYXNlICdlbmQnOlxuICAgICAgICAgICAgICAgIHRoaXMucmVuZGVyQm9hcmQoZXZlbnQucGF5bG9hZCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJlZ2lzdGVyTGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmV2ZW50c1xuICAgICAgICAgICAgLnN1YnNjcmliZSh0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgICAgIC8vIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAvLyAgICdzdWJtaXQnLFxuICAgICAgICAvLyAgIHRoaXMuc3VibWl0SGFuZGxlclxuICAgICAgICAvLyApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgdW5yZWdpc3Rlckxpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5ldmVudHNcbiAgICAgICAgICAgIC51bnN1YnNjcmliZSh0aGlzLmV2ZW50SGFuZGxlcik7XG4gICAgICAgIC8vIHRoaXMuZm9ybS5yZW1vdmVFdmVudExpc3RlbmVyKFxuICAgICAgICAvLyAgICdzdWJtaXQnLFxuICAgICAgICAvLyAgIHRoaXMuc3VibWl0SGFuZGxlclxuICAgICAgICAvLyApO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbnRyb2xzKCkge1xuICAgICAgICB0aGlzLmRpZmYucmVwbGFjZUNoaWxkcmVuKC4uLihPYmplY3Qua2V5cyhHYW1lRGlmZmljdWx0eV8xLkdhbWVEaWZmaWN1bHR5KSkubWFwKHZhbHVlID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnb3B0aW9uJyk7XG4gICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgU3RyaW5nKHZhbHVlKSk7XG4gICAgICAgICAgICBlbC50ZXh0Q29udGVudCA9IHZhbHVlO1xuICAgICAgICAgICAgaWYgKHZhbHVlID09PSB0aGlzLmNvbmZpZy5kZWZhdWx0RGlmZmljdWx0eSlcbiAgICAgICAgICAgICAgICBlbC5zZWxlY3RlZCA9IHRydWU7XG4gICAgICAgICAgICByZXR1cm4gZWw7XG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgY2VsbFNpemVJbnB1dEVsID0gdGhpcy5jdHJsXG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignW25hbWU9Y2VsbC1zaXplXScpO1xuICAgICAgICBjZWxsU2l6ZUlucHV0RWwudmFsdWUgPSBTdHJpbmcodGhpcy5jb25maWcuY2VsbFNpemVbMF0pO1xuICAgICAgICBjZWxsU2l6ZUlucHV0RWxcbiAgICAgICAgICAgIC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldiA9PiB7XG4gICAgICAgICAgICBpZiAoZXYudGFyZ2V0IGluc3RhbmNlb2YgSFRNTElucHV0RWxlbWVudClcbiAgICAgICAgICAgICAgICB0aGlzLmNvbmZpZy5zZXQoJ2NlbGxTaXplJywgKDAsIHZlYzJfMS52ZWMyKShOdW1iZXIoZXYudGFyZ2V0LnZhbHVlKSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIHJ1bigpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29udHJvbHMoKTtcbiAgICAgICAgdGhpcy5yZWdpc3Rlckxpc3RlbmVycygpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59O1xuVmFuaWxsYUpzVmlldyA9IF9fZGVjb3JhdGUoW1xuICAgICgwLCBpbmplY3RfMS5TaW5nbGV0b24pKCksXG4gICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFt0eXBlb2YgKF9hID0gdHlwZW9mIElHYW1lTWFuYWdlcl8xLklHYW1lTWFuYWdlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZU1hbmFnZXJfMS5JR2FtZU1hbmFnZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfYSA6IE9iamVjdCwgdHlwZW9mIChfYiA9IHR5cGVvZiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJR2FtZUxvZ2ljXzEuSUdhbWVMb2dpYykgPT09IFwiZnVuY3Rpb25cIiA/IF9iIDogT2JqZWN0LCB0eXBlb2YgKF9jID0gdHlwZW9mIElTdWRva3VUU18xLklTdWRva3VUUyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBJU3Vkb2t1VFNfMS5JU3Vkb2t1VFMpID09PSBcImZ1bmN0aW9uXCIgPyBfYyA6IE9iamVjdCwgdHlwZW9mIChfZCA9IHR5cGVvZiBJR2FtZVJ1bm5lcl8xLklHYW1lUnVubmVyICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUnVubmVyXzEuSUdhbWVSdW5uZXIpID09PSBcImZ1bmN0aW9uXCIgPyBfZCA6IE9iamVjdCwgdHlwZW9mIChfZSA9IHR5cGVvZiBJR2FtZVB1YlN1Yl8xLklHYW1lUHViU3ViICE9PSBcInVuZGVmaW5lZFwiICYmIElHYW1lUHViU3ViXzEuSUdhbWVQdWJTdWIpID09PSBcImZ1bmN0aW9uXCIgPyBfZSA6IE9iamVjdCwgdHlwZW9mIChfZiA9IHR5cGVvZiBHYW1lU2V0dGluZ3NfMS5HYW1lU2V0dGluZ3MgIT09IFwidW5kZWZpbmVkXCIgJiYgR2FtZVNldHRpbmdzXzEuR2FtZVNldHRpbmdzKSA9PT0gXCJmdW5jdGlvblwiID8gX2YgOiBPYmplY3RdKVxuXSwgVmFuaWxsYUpzVmlldyk7XG5leHBvcnRzLlZhbmlsbGFKc1ZpZXcgPSBWYW5pbGxhSnNWaWV3O1xuVmFuaWxsYUpzVmlld1tcIkBAZ29kc21hY2svZGk6c3RhdGljLWRlcHMtcHJvcFwiXSA9IFtcIklHYW1lTWFuYWdlclwiLCBcIklHYW1lTG9naWNcIiwgXCJJU3Vkb2t1VFNcIiwgXCJJR2FtZVJ1bm5lclwiLCBcIklHYW1lUHViU3ViXCIsIFwiR2FtZVNldHRpbmdzXCJdO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLlVOUkVBQ0hBQkxFID0gZXhwb3J0cy5BU1NFUlQgPSB2b2lkIDA7XG5jb25zdCBBU1NFUlQgPSAobykgPT4ge1xuICAgIGlmIChvID09PSB1bmRlZmluZWQgfHwgbyA9PT0gbnVsbClcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBBc3NlcnRpb24gZXJyb3I6ICR7b31gKTtcbiAgICByZXR1cm4gbztcbn07XG5leHBvcnRzLkFTU0VSVCA9IEFTU0VSVDtcbmNvbnN0IFVOUkVBQ0hBQkxFID0gKG8pID0+IHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVucmVhY2hhYmxlICR7b31gKTtcbn07XG5leHBvcnRzLlVOUkVBQ0hBQkxFID0gVU5SRUFDSEFCTEU7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMudmVjMiA9IHZvaWQgMDtcbmNvbnN0IHZlYzIgPSAoeCwgeSA9IHgpID0+IFt4LCB5XTtcbmV4cG9ydHMudmVjMiA9IHZlYzI7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuc3RhdGljRGVwc1Byb3AgPSBleHBvcnRzLnJlZmxlY3RUYXJnZXRUeXBlID0gZXhwb3J0cy5wcm94eUNvbXBhcmVLZXkgPSB2b2lkIDA7XG5leHBvcnRzLnByb3h5Q29tcGFyZUtleSA9ICdAQGdvZHNtYWNrL2RpOnByb3h5LWNvbXBhcmlzb24ta2V5JztcbmV4cG9ydHMucmVmbGVjdFRhcmdldFR5cGUgPSAnQEBnb2RzbWFjay9kaTp0YXJnZXQtc2luZ2xldG9uJztcbmV4cG9ydHMuc3RhdGljRGVwc1Byb3AgPSAnQEBnb2RzbWFjay9kaTpzdGF0aWMtZGVwcy1wcm9wJztcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmplY3RhYmxlID0gdm9pZCAwO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuY29uc3QgSW5qZWN0YWJsZSA9ICgpID0+ICgwLCBJbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeV8xLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5KSgpO1xuZXhwb3J0cy5JbmplY3RhYmxlID0gSW5qZWN0YWJsZTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuZXhwb3J0cy5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4uL2NvbnN0YW50c1wiKTtcbmNvbnN0IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gKHsgc2luZ2xldG9uID0gZmFsc2UgfSA9IHt9KSA9PiB7XG4gICAgcmV0dXJuICh0YXJnZXQpID0+IHtcbiAgICAgICAgY29uc3QgdGFyZ2V0VHlwZSA9IHNpbmdsZXRvbiA/ICdzaW5nbGV0b24nIDogJ3RyYW5zaWVudCc7XG4gICAgICAgIFJlZmxlY3QuZGVmaW5lTWV0YWRhdGEoY29uc3RhbnRzXzEucmVmbGVjdFRhcmdldFR5cGUsIHRhcmdldFR5cGUsIHRhcmdldCk7XG4gICAgfTtcbn07XG5leHBvcnRzLkluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5ID0gSW5qZWN0YWJsZURlY29yYXRvckZhY3Rvcnk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2VydmljZSA9IHZvaWQgMDtcbmNvbnN0IEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeVwiKTtcbmNvbnN0IFNlcnZpY2UgPSAoKSA9PiAoMCwgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMS5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSkoKTtcbmV4cG9ydHMuU2VydmljZSA9IFNlcnZpY2U7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2luZ2xldG9uID0gdm9pZCAwO1xuY29uc3QgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuY29uc3QgU2luZ2xldG9uID0gKCkgPT4gKDAsIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnkpKHsgc2luZ2xldG9uOiB0cnVlIH0pO1xuZXhwb3J0cy5TaW5nbGV0b24gPSBTaW5nbGV0b247XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuU2luZ2xldG9uID0gZXhwb3J0cy5TZXJ2aWNlID0gZXhwb3J0cy5JbmplY3RhYmxlRGVjb3JhdG9yRmFjdG9yeSA9IGV4cG9ydHMuSW5qZWN0YWJsZSA9IHZvaWQgMDtcbnZhciBJbmplY3RhYmxlXzEgPSByZXF1aXJlKFwiLi9JbmplY3RhYmxlXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSW5qZWN0YWJsZVwiLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gSW5qZWN0YWJsZV8xLkluamVjdGFibGU7IH0gfSk7XG52YXIgSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlfMSA9IHJlcXVpcmUoXCIuL0luamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiSW5qZWN0YWJsZURlY29yYXRvckZhY3RvcnlcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIEluamVjdGFibGVEZWNvcmF0b3JGYWN0b3J5XzEuSW5qZWN0YWJsZURlY29yYXRvckZhY3Rvcnk7IH0gfSk7XG52YXIgU2VydmljZV8xID0gcmVxdWlyZShcIi4vU2VydmljZVwiKTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIlNlcnZpY2VcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIFNlcnZpY2VfMS5TZXJ2aWNlOyB9IH0pO1xudmFyIFNpbmdsZXRvbl8xID0gcmVxdWlyZShcIi4vU2luZ2xldG9uXCIpO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiU2luZ2xldG9uXCIsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBTaW5nbGV0b25fMS5TaW5nbGV0b247IH0gfSk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi9kZWNvcmF0b3JzXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ludGVyZmFjZS9JQ29udGFpbmVyXCIpLCBleHBvcnRzKTtcbnRzbGliXzEuX19leHBvcnRTdGFyKHJlcXVpcmUoXCIuL2ludGVyZmFjZS9JSW5qZWN0b3JcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGlicmFyeS9Db250YWluZXJcIiksIGV4cG9ydHMpO1xudHNsaWJfMS5fX2V4cG9ydFN0YXIocmVxdWlyZShcIi4vbGlicmFyeS9JbmplY3RvclwiKSwgZXhwb3J0cyk7XG50c2xpYl8xLl9fZXhwb3J0U3RhcihyZXF1aXJlKFwiLi90eXBlc1wiKSwgZXhwb3J0cyk7XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG5leHBvcnRzLkNvbnRhaW5lciA9IHZvaWQgMDtcbmNvbnN0IHRzbGliXzEgPSByZXF1aXJlKFwidHNsaWJcIik7XG5jb25zdCBJbmplY3Rvcl8xID0gcmVxdWlyZShcIi4vSW5qZWN0b3JcIik7XG5jb25zdCBwcm94aWZ5XzEgPSByZXF1aXJlKFwiLi4vcHJveGlmeVwiKTtcbmNsYXNzIENvbnRhaW5lciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7IGhvdFN3YXBwaW5nOiBmYWxzZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5nZXRJbmplY3RvciA9ICgpID0+IHsgcmV0dXJuIHRoaXMuaW5qZWN0b3I7IH07XG4gICAgICAgIHRoaXMuaW5qZWN0b3IgPSBuZXcgSW5qZWN0b3JfMS5JbmplY3RvcihzZXR0aW5ncyk7XG4gICAgfVxuICAgIHJlc29sdmUodGFyZ2V0KSB7XG4gICAgICAgIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IENvbnRhaW5lckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IodGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZXNvbHZlZCA9IHRoaXMuc2V0dGluZ3MuaG90U3dhcHBpbmdcbiAgICAgICAgICAgID8gKDAsIHByb3hpZnlfMS5wcm94aWZ5KSh0aGlzLmluamVjdG9yLCB0YXJnZXQpXG4gICAgICAgICAgICA6IHRoaXMuaW5qZWN0b3IucmVzb2x2ZSh0YXJnZXQpO1xuICAgICAgICByZXR1cm4gcmVzb2x2ZWQ7XG4gICAgfVxuICAgIHJlcGxhY2UodHlwZSwgaW1wbCkge1xuICAgICAgICByZXR1cm4gdGhpcy5hZGRTZXJ2aWNlKHR5cGUsIGltcGwsIHRydWUpO1xuICAgIH1cbiAgICBjcmVhdGUodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmluamVjdG9yLmNyZWF0ZSh0YXJnZXQpO1xuICAgIH1cbiAgICBhZGRTZXJ2aWNlKHR5cGUsIGltcGwgPSB0eXBlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIGltcGwsIGZvcmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFNlcnZpY2VJbnN0YW5jZSh0eXBlLCBpbnN0YW5jZSkge1xuICAgICAgICB0aGlzLmluamVjdG9yLnJlZ2lzdGVySW5zdGFuY2UodHlwZSwgaW5zdGFuY2UpO1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG4gICAgYWRkU2luZ2xldG9uKHR5cGUsIGltcGwgPSB0eXBlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIGltcGwsIGZvcmNlKTtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3RlclNpbmdsZXRvbih0eXBlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIGFkZFNpbmdsZXRvbkluc3RhbmNlKHR5cGUsIGluc3RhbmNlLCBmb3JjZSA9IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuaW5qZWN0b3IucmVnaXN0ZXJUeXBlKHR5cGUsIHR5cGUsIGZvcmNlKTtcbiAgICAgICAgdGhpcy5pbmplY3Rvci5yZWdpc3Rlckluc3RhbmNlKHR5cGUsIGluc3RhbmNlKTtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuICAgIG9uRXhpdCgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgeWllbGQgdGhpcy5pbmplY3Rvci5kZXN0cm95QWxsKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydHMuQ29udGFpbmVyID0gQ29udGFpbmVyO1xuY2xhc3MgQ29udGFpbmVyRGVwZW5kZW5jeVJlc29sdXRpb25FcnJvciBleHRlbmRzIEVycm9yIHtcbiAgICBjb25zdHJ1Y3Rvcih0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoYEludmFsaWQgdGFyZ2V0OiAke3RhcmdldH1gKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuSW5qZWN0b3IgPSB2b2lkIDA7XG5jb25zdCB0c2xpYl8xID0gcmVxdWlyZShcInRzbGliXCIpO1xuY29uc3QgcHJveGlmeV8xID0gcmVxdWlyZShcIi4uL3Byb3hpZnlcIik7XG5jb25zdCBjb25zdGFudHNfMSA9IHJlcXVpcmUoXCIuLi9jb25zdGFudHNcIik7XG5jbGFzcyBJbmplY3RvciB7XG4gICAgY29uc3RydWN0b3Ioc2V0dGluZ3MgPSB7IGhvdFN3YXBwaW5nOiBmYWxzZSB9KSB7XG4gICAgICAgIHRoaXMuc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICAgICAgdGhpcy5yZWdpc3RlclNpbmdsZXRvbiA9ICh0eXBlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLl9fc2luZ2xldG9ucy5hZGQodGhpcy5nZXRUeXBlTmFtZSh0eXBlKSk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5yZWdpc3RlclR5cGUgPSAodHlwZSwgaW1wbCwgZm9yY2UgPSBmYWxzZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3kodHlwZSwgKGltcGwgfHwgdHlwZSksIGZvcmNlKTtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlZ2lzdGVySW5zdGFuY2UgPSAodGFyZ2V0LCBpbnN0YW5jZSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5zZXQodHlwZU5hbWUsIGluc3RhbmNlKTtcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy51cHNlcnREZXBlbmRlbmN5ID0gKHRhcmdldCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZGVwZW5kZW5jeSA9IHRoaXMuZ2V0RGVwZW5kZW5jeSh0YXJnZXQpO1xuICAgICAgICAgICAgY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgICAgICBpZiAoZGVwZW5kZW5jeSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHJldHVybiBkZXBlbmRlbmN5O1xuICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbmplY3RvckRlcGVuZGVuY3lOb3RGb3VuZEVycm9yKHRhcmdldCk7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnNlcnREZXBlbmRlbmN5KHR5cGVOYW1lLCB0YXJnZXQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnJlbG9hZERlcGVuZGVuY3kgPSAodGFyZ2V0KSA9PiB7XG4gICAgICAgICAgICAvLyB0aGlzLmxvZ2dlci5pbmZvKGBIb3QtU3dhcHBpbmcgXCIke3RhcmdldC5uYW1lfVwiIGRlcGVuZGVuY3kuYClcbiAgICAgICAgICAgIC8vIFRPRE86IHRoaXMgbmVlZHMgbW9yZSB0ZXN0aW5nXG4gICAgICAgICAgICBjb25zdCBkZXAgPSB0aGlzLmdldERlcGVuZGVuY3kodGFyZ2V0KTtcbiAgICAgICAgICAgIHRoaXMuX19vdmVycmlkZURlcGVuZGVuY3kodGFyZ2V0LCBkZXApO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX19yZXBsYWNlSW5zdGFuY2VJbkNhY2hlKHRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZ2V0VHlwZU5hbWUgPSAodCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgcnYgPSAodHlwZW9mIHQgPT09ICdzdHJpbmcnKSA/IHQgOiAodCA9PT0gbnVsbCB8fCB0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0Lm5hbWUpIHx8ICh0ID09PSBudWxsIHx8IHQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHQuY29uc3RydWN0b3IubmFtZSk7XG4gICAgICAgICAgICBpZiAoIXJ2KVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBJbmplY3RvckdldFR5cGVOYW1lRXJyb3IodCk7XG4gICAgICAgICAgICByZXR1cm4gcnY7XG4gICAgICAgIH07XG4gICAgICAgIC8vI2VuZHJlZ2lvblxuICAgICAgICAvLyNyZWdpb24gaW50ZXJuYWxzXG4gICAgICAgIHRoaXMuX19kZXBlbmRlbmN5Q2FjaGUgPSBuZXcgTWFwKCk7XG4gICAgICAgIHRoaXMuX19pbnN0YW5jZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLl9fc2luZ2xldG9ucyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy5fX2xvZ2dlciA9IG5ldyBQcm94eShjb25zb2xlLCB7XG4gICAgICAgICAgICBnZXQodGFyZ2V0LCBwcm9wLCByZWNlaXZlcikge1xuICAgICAgICAgICAgICAgIHJldHVybiAoLi4uYXJncykgPT4gdm9pZCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy8jcmVnaW9uIGFwaVxuICAgIHJlc29sdmUodGFyZ2V0KSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5fX2luc3RhbmNlQ2FjaGUuaGFzKHR5cGVOYW1lKSlcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9faW5zdGFuY2VDYWNoZS5nZXQodHlwZU5hbWUpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuY3JlYXRlKHRhcmdldCk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgaGFzRGVwZW5kZW5jeSh0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgdHlwZW5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHRhcmdldCk7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmhhcyh0eXBlbmFtZSk7XG4gICAgfVxuICAgIGdldERlcGVuZGVuY3kodGFyZ2V0KSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLmdldCh0aGlzLmdldFR5cGVOYW1lKHRhcmdldCkpO1xuICAgIH1cbiAgICBpbnNlcnREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQsIG92ZXJyaWRlKSB7XG4gICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KHRhcmdldCwgcmVzb2x2ZWQsIG92ZXJyaWRlKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykgPyB0YXJnZXQgOiByZXNvbHZlZDtcbiAgICB9XG4gICAgY3JlYXRlKHRhcmdldCkge1xuICAgICAgICAvLyB0aGlzLmxvZ2dlci5kZWJ1ZygnUmVzb2x2aW5nIGRlcGVuZGVuY3kgPT4nLCB0eXBlTmFtZSk7XG4gICAgICAgIGNvbnN0IHJlc29sdmVkID0gdGhpcy51cHNlcnREZXBlbmRlbmN5KHRhcmdldCk7XG4gICAgICAgIGNvbnN0IHsgaW5qZWN0aW9ucyB9ID0gdGhpcy5fX3Jlc29sdmVUb2tlbnMocmVzb2x2ZWQpO1xuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHRoaXMuX19jcmVhdGVPYmplY3QocmVzb2x2ZWQsIGluamVjdGlvbnMpO1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgaWYgKHRoaXMuX19pc1NpbmdsZXRvbkluc3RhbmNlKHR5cGVOYW1lLCByZXNvbHZlZCkpXG4gICAgICAgICAgICB0aGlzLl9faW5zdGFuY2VDYWNoZS5zZXQodHlwZU5hbWUsIGluc3RhbmNlKTtcbiAgICAgICAgLy8gdGhpcy5sb2dnZXIuZGVidWcoJ2NyZWF0ZWQnLCBpbnN0YW5jZSk7XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG4gICAgZGVzdHJveUFsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgY29uc3QgZGVwcyA9IFsuLi50aGlzLl9faW5zdGFuY2VDYWNoZS52YWx1ZXMoKV07XG4gICAgICAgICAgICB5aWVsZCBQcm9taXNlLmFsbFNldHRsZWQoZGVwcy5tYXAoZWFjaCA9PiB0aGlzLl9fZGlzcG9zZU9iamVjdChlYWNoKSkpO1xuICAgICAgICAgICAgdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5jbGVhcigpO1xuICAgICAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUuY2xlYXIoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxpc3REZXBlbmRlbmNpZXMoeyBzb3J0ID0gZmFsc2UsIGxvZyA9IGZhbHNlIH0gPSB7fSkge1xuICAgICAgICBsZXQgcmVzdWx0ID0gWy4uLnRoaXMuX19kZXBlbmRlbmN5Q2FjaGUua2V5cygpXTtcbiAgICAgICAgaWYgKHNvcnQpXG4gICAgICAgICAgICByZXN1bHQgPSByZXN1bHQuc29ydCgpO1xuICAgICAgICBpZiAobG9nKVxuICAgICAgICAgICAgdGhpcy5fX2xvZ2dlci5pbmZvKHJlc3VsdCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIGRlcGVuZGVuY2llc0FzSlNPTigpIHtcbiAgICAgICAgY29uc3QgY2FjaGVLZXlzID0gWy4uLnRoaXMuX19kZXBlbmRlbmN5Q2FjaGUua2V5cygpXTtcbiAgICAgICAgcmV0dXJuIGNhY2hlS2V5cy5zb3J0KCkucmVkdWNlKChhY2MsIG4pID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gdGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5nZXQobik7XG4gICAgICAgICAgICByZXR1cm4gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBhY2MpLCB7IFtuXTogKF9hID0gaW5zdGFuY2UgPT09IG51bGwgfHwgaW5zdGFuY2UgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGluc3RhbmNlLmNvbnN0cnVjdG9yKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EubmFtZSB9KTtcbiAgICAgICAgfSwge30pO1xuICAgIH1cbiAgICBfX3Jlc29sdmVUb2tlbnMocmVzb2x2ZWQpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIGNvbnN0IHJlZmxlY3RlZCA9IFJlZmxlY3QuZ2V0TWV0YWRhdGEoJ2Rlc2lnbjpwYXJhbXR5cGVzJywgcmVzb2x2ZWQpO1xuICAgICAgICAvLyB0b2tlbnMgYXJlIHJlcXVpcmVkIGRlcGVuZGVuY2llcywgd2hpbGUgaW5qZWN0aW9ucyBhcmUgcmVzb2x2ZWQgdG9rZW5zIGZyb20gdGhlIEluamVjdG9yXG4gICAgICAgIGNvbnN0IHRva2VucyA9IChfYiA9IChfYSA9IHJlZmxlY3RlZCA9PT0gbnVsbCB8fCByZWZsZWN0ZWQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHJlZmxlY3RlZC5tYXAoKG8sIGkpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChvLm5hbWUgPT09ICdPYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgICAgIHJldHVybiAoX2EgPSByZXNvbHZlZFtjb25zdGFudHNfMS5zdGF0aWNEZXBzUHJvcF0pID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYVtpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICB9KSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmZpbHRlcigobykgPT4gbyAhPSBudWxsKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogW107XG4gICAgICAgIGlmICh0b2tlbnMuZmluZChvID0+IG8ubmFtZSA9PT0gJ09iamVjdCcpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgSW5qZWN0b3JEZXBlbmRlbmN5UmVzb2x1dGlvbkVycm9yKHJlc29sdmVkLCB0b2tlbnMpO1xuICAgICAgICB9XG4gICAgICAgIHRva2Vucy5mb3JFYWNoKChjbHMpID0+IHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgY2xzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGltcGwgPSB0aGlzLmdldERlcGVuZGVuY3koY2xzKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1wbClcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fX2FkZERlcGVuZGVuY3koY2xzLCBpbXBsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuX19hZGREZXBlbmRlbmN5KGNscywgY2xzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGluamVjdGlvbnMgPSAoKF9jID0gdGhpcy5zZXR0aW5ncykgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLmhvdFN3YXBwaW5nKVxuICAgICAgICAgICAgPyB0b2tlbnMubWFwKHRva2VuID0+ICgwLCBwcm94aWZ5XzEucHJveGlmeSkodGhpcywgdG9rZW4pKVxuICAgICAgICAgICAgOiB0b2tlbnMubWFwKHRva2VuID0+IHRoaXMucmVzb2x2ZSh0b2tlbikpO1xuICAgICAgICByZXR1cm4geyByZXNvbHZlZCwgaW5qZWN0aW9ucyB9O1xuICAgIH1cbiAgICBfX2FkZERlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZE1heWJlLCBvdmVycmlkZSA9IGZhbHNlKSB7XG4gICAgICAgIGNvbnN0IHR5cGVOYW1lID0gdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpO1xuICAgICAgICBpZiAodGhpcy5fX2RlcGVuZGVuY3lDYWNoZS5oYXModHlwZU5hbWUpKSB7XG4gICAgICAgICAgICBpZiAoIW92ZXJyaWRlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHJlc29sdmVkVHlwZSlcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKGBPdmVycmlkaW5nID0+ICR7dGFyZ2V0TmFtZX0gdG8gPT4gJHt0eXBlTmFtZX1gKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgLy8gY29uc3QgdHlwZU5hbWUgPSB0aGlzLmdldFR5cGVOYW1lKHJlc29sdmVkVHlwZSlcbiAgICAgICAgICAgIC8vIHRoaXMubG9nZ2VyLmRlYnVnKGBTZXR0aW5nID0+ICR7dGFyZ2V0TmFtZX0gdG8gPT4gJHt0eXBlTmFtZX1gKVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlc29sdmVkVHlwZSA9IHR5cGVvZiB0YXJnZXQgPT09ICdzdHJpbmcnID8gcmVzb2x2ZWRNYXliZVxuICAgICAgICAgICAgOiByZXNvbHZlZE1heWJlID09IG51bGwgPyB0YXJnZXRcbiAgICAgICAgICAgICAgICA6IC8qIG90aGVyd2lzZSAqLyByZXNvbHZlZE1heWJlO1xuICAgICAgICB0aGlzLl9fZGVwZW5kZW5jeUNhY2hlLnNldCh0eXBlTmFtZSwgcmVzb2x2ZWRUeXBlKTtcbiAgICAgICAgdGhpcy5fX2luc3RhbmNlQ2FjaGUuZGVsZXRlKHR5cGVOYW1lKTtcbiAgICB9XG4gICAgX19vdmVycmlkZURlcGVuZGVuY3kodGFyZ2V0LCByZXNvbHZlZCkge1xuICAgICAgICB0aGlzLl9fYWRkRGVwZW5kZW5jeSh0YXJnZXQsIHJlc29sdmVkLCB0cnVlKTtcbiAgICAgICAgcmV0dXJuICh0eXBlb2YgdGFyZ2V0ICE9PSAnc3RyaW5nJykgPyB0YXJnZXQgOiByZXNvbHZlZDtcbiAgICB9XG4gICAgX19wdXJnZUluc3RhbmNlRnJvbUNhY2hlKHRhcmdldCkge1xuICAgICAgICBjb25zdCB0eXBlTmFtZSA9IHRoaXMuZ2V0VHlwZU5hbWUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX19pbnN0YW5jZUNhY2hlLmRlbGV0ZSh0eXBlTmFtZSk7XG4gICAgfVxuICAgIF9fcmVwbGFjZUluc3RhbmNlSW5DYWNoZSh0YXJnZXQpIHtcbiAgICAgICAgdGhpcy5fX3B1cmdlSW5zdGFuY2VGcm9tQ2FjaGUodGFyZ2V0KTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVzb2x2ZSh0YXJnZXQpO1xuICAgIH1cbiAgICBfX2lzU2luZ2xldG9uSW5zdGFuY2UodHlwZU5hbWUsIHJlc29sdmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9fc2luZ2xldG9ucy5oYXModHlwZU5hbWUpIHx8XG4gICAgICAgICAgICB0aGlzLl9fcmVmbGVjdFRhcmdldFR5cGUocmVzb2x2ZWQpID09PSAnc2luZ2xldG9uJztcbiAgICB9XG4gICAgX19yZWZsZWN0VGFyZ2V0VHlwZShyZXNvbHZlZCkge1xuICAgICAgICByZXR1cm4gUmVmbGVjdC5nZXRNZXRhZGF0YShjb25zdGFudHNfMS5yZWZsZWN0VGFyZ2V0VHlwZSwgcmVzb2x2ZWQpO1xuICAgIH1cbiAgICBfX2NyZWF0ZU9iamVjdCh0YXJnZXQsIGluamVjdGlvbnMpIHtcbiAgICAgICAgdGhpcy5fX2xvZ2dlci5sb2coJ2NyZWF0aW5nIG9iamVjdCwgdHlwZU5hbWU6JywgdGhpcy5nZXRUeXBlTmFtZSh0YXJnZXQpKTtcbiAgICAgICAgcmV0dXJuIG5ldyB0YXJnZXQoLi4uaW5qZWN0aW9ucyk7XG4gICAgfVxuICAgIF9fZGlzcG9zZU9iamVjdCh0YXJnZXQpIHtcbiAgICAgICAgcmV0dXJuIHRzbGliXzEuX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiogKCkge1xuICAgICAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvclxuICAgICAgICAgICAgY29uc3QgZm4gPSB0YXJnZXQgPT09IG51bGwgfHwgdGFyZ2V0ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB0YXJnZXQuZGlzcG9zZTtcbiAgICAgICAgICAgIHJldHVybiB5aWVsZCAoZm4gPT09IG51bGwgfHwgZm4gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZuKCkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnRzLkluamVjdG9yID0gSW5qZWN0b3I7XG47XG5jbGFzcyBJbmplY3RvckRlcGVuZGVuY3lSZXNvbHV0aW9uRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0LCB0b2tlbnMpIHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBgVW5hYmxlIHRvIHJlc29sdmUgZGVwZW5kZW5jaWVzIGZvciA9PiAke3RhcmdldC5uYW1lfSwgZGVwcyA9PiAke3Rva2Vucy5tYXAobyA9PiBvLm5hbWUpfWA7XG4gICAgICAgIGNvbnN0IGhlbHAgPSBgUG9zc2libGUgbWlzdXNlIG9mIEBJbmplY3RhYmxlKCkgZGVjb3JhdG9yIG9uIGNsYXNzICR7dGFyZ2V0Lm5hbWV9YDtcbiAgICAgICAgc3VwZXIoYCR7ZXJyb3J9XFxuJHtoZWxwfWApO1xuICAgIH1cbn1cbmNsYXNzIEluamVjdG9yRGVwZW5kZW5jeU5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKGBUYXJnZXQgbm90IGZvdW5kOiAke3RhcmdldH1gKTtcbiAgICB9XG59XG5jbGFzcyBJbmplY3RvckdldFR5cGVOYW1lRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IodGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKGBzb21ldGhpbmcgZnVja3kgZ290IHBhc3NlZCB0byBnZXRUeXBlTmFtZSA9PiAke3RhcmdldH1gKTtcbiAgICB9XG59XG4iLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbmV4cG9ydHMuY29tcGFyZSA9IGV4cG9ydHMucHJveGlmeSA9IHZvaWQgMDtcbmNvbnN0IGNvbnN0YW50c18xID0gcmVxdWlyZShcIi4vY29uc3RhbnRzXCIpO1xuY2xhc3MgUHJveGlmeU51bGxUb2tlbkVycm9yIGV4dGVuZHMgRXJyb3Ige1xufVxuZnVuY3Rpb24gcHJveGlmeShpbmplY3RvciwgdG9rZW4pIHtcbiAgICBpZiAodG9rZW4gPT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgUHJveGlmeU51bGxUb2tlbkVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiBuZXcgUHJveHkoLyogaW5qZWN0b3IucmVzb2x2ZSh0b2tlbikgKi8ge30sIHtcbiAgICAgICAgZ2V0KF8sIHByb3AsIHJlY2VpdmVyKSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBpbmplY3Rvci5yZXNvbHZlKHRva2VuKTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSBjb25zdGFudHNfMS5wcm94eUNvbXBhcmVLZXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIFJlZmxlY3QuZ2V0KHRhcmdldCwgcHJvcCwgcmVjZWl2ZXIpO1xuICAgICAgICB9LFxuICAgIH0pO1xufVxuZXhwb3J0cy5wcm94aWZ5ID0gcHJveGlmeTtcbmNvbnN0IGNvbXBhcmUgPSAoYSwgYikgPT4ge1xuICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICBhID0gKF9iID0gKChfYSA9IGEpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IHt9KVtjb25zdGFudHNfMS5wcm94eUNvbXBhcmVLZXldKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiBhO1xuICAgIGIgPSAoX2QgPSAoKF9jID0gYikgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDoge30pW2NvbnN0YW50c18xLnByb3h5Q29tcGFyZUtleV0pICE9PSBudWxsICYmIF9kICE9PSB2b2lkIDAgPyBfZCA6IGI7XG4gICAgcmV0dXJuIE9iamVjdC5pcyhhLCBiKTtcbn07XG5leHBvcnRzLmNvbXBhcmUgPSBjb21wYXJlO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsInZhciBkZWZlcnJlZCA9IFtdO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5PID0gKHJlc3VsdCwgY2h1bmtJZHMsIGZuLCBwcmlvcml0eSkgPT4ge1xuXHRpZihjaHVua0lkcykge1xuXHRcdHByaW9yaXR5ID0gcHJpb3JpdHkgfHwgMDtcblx0XHRmb3IodmFyIGkgPSBkZWZlcnJlZC5sZW5ndGg7IGkgPiAwICYmIGRlZmVycmVkW2kgLSAxXVsyXSA+IHByaW9yaXR5OyBpLS0pIGRlZmVycmVkW2ldID0gZGVmZXJyZWRbaSAtIDFdO1xuXHRcdGRlZmVycmVkW2ldID0gW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldO1xuXHRcdHJldHVybjtcblx0fVxuXHR2YXIgbm90RnVsZmlsbGVkID0gSW5maW5pdHk7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWQubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgW2NodW5rSWRzLCBmbiwgcHJpb3JpdHldID0gZGVmZXJyZWRbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBjaHVua0lkcy5sZW5ndGg7IGorKykge1xuXHRcdFx0aWYgKChwcmlvcml0eSAmIDEgPT09IDAgfHwgbm90RnVsZmlsbGVkID49IHByaW9yaXR5KSAmJiBPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLk8pLmV2ZXJ5KChrZXkpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLk9ba2V5XShjaHVua0lkc1tqXSkpKSkge1xuXHRcdFx0XHRjaHVua0lkcy5zcGxpY2Uoai0tLCAxKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdFx0XHRpZihwcmlvcml0eSA8IG5vdEZ1bGZpbGxlZCkgbm90RnVsZmlsbGVkID0gcHJpb3JpdHk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWQuc3BsaWNlKGktLSwgMSlcblx0XHRcdHZhciByID0gZm4oKTtcblx0XHRcdGlmIChyICE9PSB1bmRlZmluZWQpIHJlc3VsdCA9IHI7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59OyIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJtYWluXCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbl9fd2VicGFja19yZXF1aXJlX18uTy5qID0gKGNodW5rSWQpID0+IChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPT09IDApO1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiwgZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZV0gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDA7XG5cdGlmKGNodW5rSWRzLnNvbWUoKGlkKSA9PiAoaW5zdGFsbGVkQ2h1bmtzW2lkXSAhPT0gMCkpKSB7XG5cdFx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZihydW50aW1lKSB2YXIgcmVzdWx0ID0gcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0fVxuXHRpZihwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbikgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKCk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uTyhyZXN1bHQpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3N1ZG9rdVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzdWRva3VcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIiIsIi8vIHN0YXJ0dXBcbi8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuLy8gVGhpcyBlbnRyeSBtb2R1bGUgZGVwZW5kcyBvbiBvdGhlciBsb2FkZWQgY2h1bmtzIGFuZCBleGVjdXRpb24gbmVlZCB0byBiZSBkZWxheWVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18uTyh1bmRlZmluZWQsIFtcInZlbmRvcnMtbm9kZV9tb2R1bGVzX2Nzcy1sb2FkZXJfZGlzdF9ydW50aW1lX2FwaV9qcy1ub2RlX21vZHVsZXNfY3NzLWxvYWRlcl9kaXN0X3J1bnRpbWVfZ2V0VS05ZGFiZDNcIl0sICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvZ2FtZS52YW5pbGxhLnRzXCIpKSlcbl9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fLk8oX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4iLCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=
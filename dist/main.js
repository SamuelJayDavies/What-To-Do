/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ \r\n   v2.0 | 20110126\r\n   License: none (public domain)\r\n*/\r\n\r\nhtml, body, div, span, applet, object, iframe,\r\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\r\na, abbr, acronym, address, big, cite, code,\r\ndel, dfn, em, img, ins, kbd, q, s, samp,\r\nsmall, strike, strong, sub, sup, tt, var,\r\nb, u, i, center,\r\ndl, dt, dd, ol, ul, li,\r\nfieldset, form, label, legend,\r\ntable, caption, tbody, tfoot, thead, tr, th, td,\r\narticle, aside, canvas, details, embed, \r\nfigure, figcaption, footer, header, hgroup, \r\nmenu, nav, output, ruby, section, summary,\r\ntime, mark, audio, video {\r\n\tmargin: 0;\r\n\tpadding: 0;\r\n\tborder: 0;\r\n\tfont-size: 100%;\r\n\tfont: inherit;\r\n\tvertical-align: baseline;\r\n}\r\n/* HTML5 display-role reset for older browsers */\r\narticle, aside, details, figcaption, figure, \r\nfooter, header, hgroup, menu, nav, section {\r\n\tdisplay: block;\r\n}\r\nbody {\r\n\tline-height: 1;\r\n}\r\nol, ul {\r\n\tlist-style: none;\r\n}\r\nblockquote, q {\r\n\tquotes: none;\r\n}\r\nblockquote:before, blockquote:after,\r\nq:before, q:after {\r\n\tcontent: '';\r\n\tcontent: none;\r\n}\r\ntable {\r\n\tborder-collapse: collapse;\r\n\tborder-spacing: 0;\r\n}\r\n\r\nbody {\r\n    font-family: \"Raleway\";\r\n    \r\n    background-color: rgba(0, 0, 0, 0.856);\r\n}\r\n\r\nheader {\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    gap: 1em;\r\n\r\n    background-color: whitesmoke;\r\n\r\n    margin: 1em;\r\n    padding: 0.5em;\r\n}\r\n\r\nheader img {\r\n    height: 5em;\r\n}\r\n\r\nheader h1 {\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    \r\n    color: white;\r\n    -webkit-text-stroke: black 1.5px;\r\n    text-shadow: 5px 5px 15px black;\r\n}\r\n\r\n#main-content {\r\n    display: grid;\r\n    grid-template-columns: 1fr 2fr;\r\n}\r\n\r\n.sideBar {\r\n    display: flex;\r\n    flex-direction: column;\r\n    background-color: whitesmoke;\r\n\r\n    margin: 1em;\r\n    padding: 1em;\r\n}\r\n\r\n.sideBar h1 {\r\n    color: white;\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    -webkit-text-stroke: black 1.5px;\r\n\r\n    transition-property: color, -webkit-text-stroke, background-color;\r\n    transition-duration: 1s;\r\n    margin-bottom: 3%;\r\n}\r\n\r\n.sideBar h1:hover {\r\n    color: black;\r\n    font-size: 2.5em;\r\n    font-weight: bold;\r\n    -webkit-text-stroke: white 1.5px;\r\n    background-color: black;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.sideBar li {\r\n    font-size: 1.5em;\r\n    transition-property: color, font-size, background-color;\r\n    transition-duration: 1s;\r\n\r\n    padding: 0.1em;\r\n    margin-bottom: 0.5em;\r\n}\r\n\r\n.sideBar li:hover {\r\n    color: whitesmoke;\r\n    font-size: 2em;\r\n    font-weight: bold;\r\n    background-color: black;\r\n\r\n    cursor: pointer;\r\n}\r\n\r\n.todo {\r\n    background-color: whitesmoke;\r\n    margin: 1em;\r\n    padding: 1em;\r\n    gap: 0.25em;\r\n\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    cursor: pointer;\r\n\r\n    transition-property: color, background-color;\r\n    transition-duration: 1s;\r\n\r\n    grid-column: 2/3;\r\n\r\n    box-shadow: 10px 10px 10px black;\r\n}\r\n\r\n.todo:hover {\r\n    background-color: rgb(0, 0, 0);\r\n    color: whitesmoke;\r\n}\r\n\r\n.todo-title {\r\n    font-weight: bold;\r\n    \r\n    border-right: 2px solid black;\r\n}\r\n\r\n.todo-title:hover {\r\n    border-right: 2px solid white;\r\n}\r\n\r\n.todo-desc {\r\n    grid-row: 2/4;\r\n}\r\n\r\n.todo-checkbox {\r\n    grid-column: 1/2;\r\n}\r\n\r\n.dialog-box {\r\n    color: black;\r\n    background-color: rgb(240, 249, 255,0.5);\r\n    opacity: 1;\r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n    right: 0; \r\n    bottom: 0;\r\n    transition: all 1s ease-in-out;\r\n    z-index: 555;\r\n\r\n    display: flex;\r\n    flex-direction: column;\r\n\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    gap: 1em;\r\n}\r\n\r\n.inner-dialog-box {\r\n    background-color: whitesmoke;\r\n    margin: 1em;\r\n    padding: 1em;\r\n    gap: 0.25em;\r\n\r\n    display: grid;\r\n    grid-template-columns: 5fr 1fr 1fr;\r\n    grid-template-rows: 1fr 1fr 1fr;\r\n\r\n    align-items: center;\r\n    justify-content: center;\r\n\r\n    cursor: pointer;\r\n\r\n    transition-property: color, background-color;\r\n    transition-duration: 1s;\r\n}\r\n\r\n#title-box,\r\n#desc-box,\r\n#date-box,\r\n#priority-box,\r\n.exit-btn,\r\n.save-btn {\r\n    border: none;\r\n    border-bottom: 1px solid black;\r\n\r\n    transition-property: color, -webkit-text-stroke, background-color;\r\n    transition-duration: 1s;\r\n}\r\n\r\n.exit-btn:hover,\r\n.save-btn:hover {\r\n    background-color: rgb(0, 0, 0);\r\n    color: whitesmoke;\r\n    cursor: pointer;\r\n}\r\n\r\n.project {\r\n    \r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://what-to-do/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://what-to-do/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://what-to-do/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://what-to-do/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://what-to-do/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://what-to-do/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://what-to-do/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://what-to-do/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://what-to-do/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://what-to-do/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/home-view.js":
/*!**************************!*\
  !*** ./src/home-view.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _images_header_to_do_list_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/header/to-do-list.png */ \"./src/images/header/to-do-list.png\");\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n/* harmony import */ var _todo_creater_view_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./todo-creater-view.js */ \"./src/todo-creater-view.js\");\n/* harmony import */ var _project_creator_view_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-creator-view.js */ \"./src/project-creator-view.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nvar currentProject;\r\nvar allProjects = [new _project_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](\"Getting Started\", [new _todo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](\"Welcome to What-To-Do\", \r\n    \"A very simple todo list that only has what matters\", \"12/04/2024\", \"Low\", false)])];\r\n\r\nfunction createHomeView() {\r\n    const main = document.getElementById(\"main\");\r\n    main.textContent = \"\";\r\n    main.appendChild(createHeader());\r\n    currentProject = allProjects.at(0);\r\n    main.appendChild(createMainContent());\r\n    loadAllProjects();\r\n    loadTodosFromProject(currentProject);\r\n}\r\n\r\nfunction createHeader() {\r\n    const header = document.createElement(\"header\");\r\n    const headerImage = document.createElement(\"img\");\r\n    headerImage.src = _images_header_to_do_list_png__WEBPACK_IMPORTED_MODULE_1__;\r\n    const headerTitle = document.createElement(\"h1\");\r\n    headerTitle.textContent = \"What-To-Do\";\r\n    header.appendChild(headerImage);\r\n    header.appendChild(headerTitle);\r\n    return header;\r\n}\r\n\r\nfunction createMainContent() {\r\n    const mainContent = document.createElement(\"div\");\r\n    mainContent.id = \"main-content\";\r\n\r\n    const todoContent = document.createElement(\"div\");\r\n    todoContent.id = \"todo-content\";\r\n    mainContent.appendChild(createSideBar());\r\n    mainContent.appendChild(todoContent);\r\n    return mainContent;\r\n}\r\n\r\nfunction createSideBar() {\r\n    const sideBar = document.createElement(\"div\");\r\n    sideBar.classList.add(\"sideBar\");\r\n\r\n    const projects = document.createElement(\"div\");\r\n    projects.classList.add(\"projects\");\r\n\r\n    const projectsTitle = document.createElement(\"h1\");\r\n    projectsTitle.textContent = \"My Projects\";\r\n\r\n    const projectsList = document.createElement(\"ul\");\r\n    projectsList.id = \"project-list\";\r\n\r\n    const addNewTodo = document.createElement(\"button\");\r\n    addNewTodo.textContent = \"+ Todo\";\r\n    addNewTodo.classList.add(\"add-button\");\r\n\r\n    addNewTodo.addEventListener(\"click\", function() {\r\n        displayTodoCreator();\r\n    }, false);\r\n\r\n    const addNewProject = document.createElement(\"button\");\r\n    addNewProject.textContent = \"+ Project\";\r\n    addNewProject.classList.add(\"project-button\");\r\n\r\n    addNewProject.addEventListener(\"click\", function() {\r\n        displayProjectCreator();\r\n    }, false);\r\n\r\n    const sideBarButtons = document.createElement(\"div\");\r\n    sideBarButtons.classList.add(\"side-bar-buttons\");\r\n\r\n    sideBarButtons.appendChild(addNewTodo);\r\n    sideBarButtons.appendChild(addNewProject);\r\n\r\n    sideBar.appendChild(projectsTitle);\r\n    sideBar.appendChild(projects);\r\n    sideBar.append(sideBarButtons);\r\n    projects.appendChild(projectsList);\r\n    return sideBar;\r\n}\r\n\r\nfunction loadAllProjects() {\r\n    const projectList = document.getElementById(\"project-list\");\r\n    console.log(projectList);\r\n    allProjects.forEach((project) => {\r\n        const projectDisplay = createProjectDisplay(project);\r\n        projectList.appendChild(projectDisplay);\r\n    });\r\n}\r\n\r\nfunction createTodoDisplay(newTodo) {\r\n    const todo = document.createElement(\"div\");\r\n    todo.classList.add(\"todo\");\r\n\r\n    const todoHeading = document.createElement(\"h1\");\r\n    todoHeading.textContent = newTodo.title;\r\n    todoHeading.classList.add(\"todo-title\");\r\n\r\n    const todoDesc = document.createElement(\"p\");\r\n    todoDesc.textContent = newTodo.description;\r\n    todoDesc.classList.add(\"todo-desc\");\r\n\r\n    const todoDate = document.createElement(\"p\");\r\n    todoDate.textContent = newTodo.dueDate;\r\n    todoDate.classList.add(\"todo-date\");\r\n\r\n    const priority = document.createElement(\"p\");\r\n    priority.textContent = newTodo.priority;\r\n    priority.classList.add(\"priority\");\r\n\r\n    const editBtn = document.createElement(\"button\");\r\n    editBtn.textContent = \"edit\";\r\n\r\n    const deleteBtn = document.createElement(\"button\");\r\n    deleteBtn.textContent = \"delete\";\r\n\r\n    deleteBtn.addEventListener(\"click\", function() {\r\n        removeTodo(todo);\r\n    }, false);\r\n\r\n    todo.appendChild(todoHeading);\r\n    todo.appendChild(todoDesc);\r\n    todo.appendChild(todoDate);\r\n    todo.appendChild(priority);\r\n\r\n    todo.addEventListener(\"mouseleave\", function() {\r\n        todo.removeChild(editBtn);\r\n        todo.removeChild(deleteBtn);\r\n\r\n        console.log(\"Out\");\r\n    }, false);\r\n\r\n    todo.addEventListener(\"mouseover\", function() {\r\n        todo.appendChild(editBtn);\r\n        todo.appendChild(deleteBtn);\r\n\r\n        console.log(\"In\");\r\n    }, false);\r\n\r\n    return todo;\r\n}\r\n\r\nfunction displayTodoCreator() {\r\n    const todoDialog = (0,_todo_creater_view_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\r\n    main.appendChild(todoDialog);\r\n    const titleInput = document.getElementById(\"title-box\");\r\n    const descInput = document.getElementById(\"desc-box\");\r\n    const dateInput = document.getElementById(\"date-box\");\r\n    const priorityInput = document.getElementById(\"priority-box\");\r\n\r\n\r\n    const saveBtn = document.getElementById(\"save-btn\");\r\n    saveBtn.addEventListener(\"click\", function() {\r\n        const todoContent = document.getElementById(\"todo-content\");\r\n        const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](titleInput.value, descInput.value, dateInput.value, priorityInput.value);\r\n        currentProject.todos.push(newTodo);\r\n        const todoDisplay = createTodoDisplay(newTodo);\r\n        todoContent.appendChild(todoDisplay);\r\n        main.removeChild(todoDialog);\r\n    }, false);\r\n\r\n    const exitBtn = document.getElementById(\"exit-btn\");\r\n    exitBtn.addEventListener(\"click\", function() {\r\n        main.removeChild(todoDialog);\r\n    }, false);\r\n}\r\n\r\nfunction createTodo(title, description, date, priority) {\r\n    const newTodo = new _todo_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"](title, description, date, priority, false);\r\n    return newTodo;\r\n}\r\n\r\nfunction addTodoToDisplay(todo) {\r\n    const todoContent = document.getElementById(\"todo-content\");\r\n    const todoDisplay = createTodoDisplay(todo);\r\n    todoContent.appendChild(todoDisplay);\r\n}\r\n\r\nfunction removeTodo(todoDisplay) {\r\n    const todoContent = document.getElementById(\"todo-content\");\r\n    todoContent.removeChild(todoDisplay);\r\n}\r\n\r\nfunction createProjectDisplay(project) {\r\n    const newProject = document.createElement(\"li\");\r\n    newProject.textContent = project.title;\r\n    newProject.classList.add(\"project\");\r\n\r\n    newProject.addEventListener(\"click\", function() {\r\n        loadTodosFromProject(project);\r\n        currentProject = project;\r\n    }, false);\r\n\r\n    return newProject;\r\n}\r\n\r\nfunction displayProjectCreator() {\r\n    const projectDialog = (0,_project_creator_view_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])();\r\n    main.appendChild(projectDialog);\r\n    const projectTitle = document.getElementById(\"project-title-box\");\r\n\r\n    const saveBtn = document.getElementById(\"project-save-btn\");\r\n    saveBtn.addEventListener(\"click\", function() {\r\n        const mainContent = document.getElementById(\"main-content\");\r\n        const project = new _project_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](projectTitle.value, []);\r\n        const projectDisplay = createProjectDisplay(project);\r\n        const projectList = document.getElementById(\"project-list\");\r\n\r\n        projectDisplay.addEventListener(\"click\", function() {\r\n            loadTodosFromProject(project);\r\n        }, false);\r\n        projectList.appendChild(projectDisplay);\r\n        allProjects.push(project);\r\n        main.removeChild(projectDialog);\r\n    }, false);\r\n\r\n    const exitBtn = document.getElementById(\"project-exit-btn\");\r\n    exitBtn.addEventListener(\"click\", function() {\r\n        main.removeChild(projectDialog);\r\n    }, false);\r\n}\r\n\r\nfunction loadTodosFromProject(project) {\r\n    const todoContent = document.getElementById(\"todo-content\");\r\n    todoContent.textContent = \"\";\r\n    project.todos.forEach((todo) => {\r\n        addTodoToDisplay(todo);\r\n    });\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createHomeView);\n\n//# sourceURL=webpack://what-to-do/./src/home-view.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_view__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-view */ \"./src/home-view.js\");\n\r\n\r\n(0,_home_view__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n//# sourceURL=webpack://what-to-do/./src/index.js?");

/***/ }),

/***/ "./src/project-creator-view.js":
/*!*************************************!*\
  !*** ./src/project-creator-view.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./project.js */ \"./src/project.js\");\n\r\n\r\nfunction createProjectDialog() {\r\n    const dialogBox = document.createElement(\"div\");\r\n    dialogBox.classList.add(\"dialog-box\");\r\n    dialogBox.classList.add(\"project\");\r\n\r\n    const innerDialogBox = document.createElement(\"div\");\r\n    innerDialogBox.classList.add(\"inner-dialog-box\");\r\n\r\n    const titleHeading = document.createElement(\"h1\");\r\n    titleHeading.textContent = \"Project Title:\";\r\n\r\n    const titleBox = document.createElement(\"input\");\r\n    titleBox.setAttribute(\"type\", \"text\");\r\n    titleBox.setAttribute(\"placeholder\", \"title\");\r\n    titleBox.id = \"project-title-box\";\r\n\r\n    const exitButton = document.createElement(\"button\");\r\n    exitButton.classList.add(\"exit-btn\");\r\n    exitButton.id = \"project-exit-btn\";\r\n    exitButton.textContent = \"exit\";\r\n    exitButton.classList.add(\"project-button\");\r\n\r\n    const saveButton = document.createElement(\"button\");\r\n    saveButton.classList.add(\"save-btn\");\r\n    saveButton.id = \"project-save-btn\";\r\n    saveButton.textContent = \"save\";\r\n    saveButton.classList.add(\"project-button\");\r\n\r\n    innerDialogBox.appendChild(titleHeading);\r\n    innerDialogBox.appendChild(exitButton);\r\n    innerDialogBox.appendChild(saveButton);\r\n    innerDialogBox.appendChild(titleBox);\r\n\r\n    dialogBox.appendChild(innerDialogBox);\r\n    return dialogBox;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createProjectDialog);\n\n//# sourceURL=webpack://what-to-do/./src/project-creator-view.js?");

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Project {\r\n\r\n    todos = [];\r\n\r\n    constructor(title, todos) {\r\n        this._title = title;\r\n        this.todos = todos;\r\n    }\r\n\r\n    addTodo(todo) {\r\n        this.todos.push(todo);\r\n    }\r\n\r\n    get todos() {\r\n        return this._todos;\r\n    }\r\n\r\n    get title() {\r\n        return this._title;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Project);\n\n//# sourceURL=webpack://what-to-do/./src/project.js?");

/***/ }),

/***/ "./src/todo-creater-view.js":
/*!**********************************!*\
  !*** ./src/todo-creater-view.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _todo_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.js */ \"./src/todo.js\");\n\r\n\r\nfunction createTodoDialog() {\r\n    const dialogBox = document.createElement(\"div\");\r\n    dialogBox.classList.add(\"dialog-box\");\r\n\r\n    const innerDialogBox = document.createElement(\"div\");\r\n    innerDialogBox.classList.add(\"inner-dialog-box\");\r\n\r\n    const titleBox = document.createElement(\"input\");\r\n    titleBox.setAttribute(\"type\", \"text\");\r\n    titleBox.setAttribute(\"placeholder\", \"title\");\r\n    titleBox.id = \"title-box\";\r\n\r\n    const descBox = document.createElement(\"input\");\r\n    descBox.setAttribute(\"type\", \"text\");\r\n    descBox.setAttribute(\"name\", \"description\");\r\n    descBox.id = \"desc-box\";\r\n\r\n    const dateBox = document.createElement(\"input\");\r\n    dateBox.setAttribute(\"type\", \"date\");\r\n    dateBox.id = \"date-box\";\r\n\r\n    const priorityBox = document.createElement(\"select\");\r\n    priorityBox.setAttribute(\"name\", \"priority\");\r\n    priorityBox.id = \"priority-box\";\r\n\r\n    priorityBox.appendChild(optionCreator(\"low\"));\r\n    priorityBox.appendChild(optionCreator(\"medium\"));\r\n    priorityBox.appendChild(optionCreator(\"high\"));\r\n\r\n    const exitButton = document.createElement(\"button\");\r\n    exitButton.classList.add(\"exit-btn\");\r\n    exitButton.id = \"exit-btn\";\r\n    exitButton.textContent = \"exit\";\r\n\r\n    const saveButton = document.createElement(\"button\");\r\n    saveButton.classList.add(\"save-btn\");\r\n    saveButton.id = \"save-btn\";\r\n    saveButton.textContent = \"save\";\r\n\r\n    innerDialogBox.appendChild(titleBox);\r\n    innerDialogBox.appendChild(dateBox);\r\n    innerDialogBox.appendChild(priorityBox);\r\n    innerDialogBox.appendChild(descBox);\r\n    innerDialogBox.appendChild(exitButton);\r\n    innerDialogBox.appendChild(saveButton);\r\n\r\n    dialogBox.appendChild(innerDialogBox);\r\n\r\n    return dialogBox;\r\n}\r\n\r\nfunction optionCreator(setValue) {\r\n    const priority = document.createElement(\"option\");\r\n    priority.value = setValue;\r\n    priority.textContent = setValue;\r\n    return priority;\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createTodoDialog);\n\n//# sourceURL=webpack://what-to-do/./src/todo-creater-view.js?");

/***/ }),

/***/ "./src/todo.js":
/*!*********************!*\
  !*** ./src/todo.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nclass Todo {\r\n    \r\n    constructor(title, description, dueDate, priority, isCompleted) {\r\n        this._title = title;\r\n        this._description = description;\r\n        this._dueDate = dueDate;\r\n        this._priority = priority;\r\n        this._isCompleted = isCompleted;\r\n    }\r\n\r\n    get title() {\r\n        return this._title;\r\n    }\r\n\r\n    get description() {\r\n        return this._description;\r\n    }\r\n\r\n    get dueDate() {\r\n        return this._dueDate;\r\n    }\r\n\r\n    get priority() {\r\n        return this._priority;\r\n    }\r\n\r\n    get isCompleted() {\r\n        return this._isCompleted;\r\n    }\r\n\r\n    get title() {\r\n        return this._title;\r\n    }\r\n\r\n    set title(newTitle) {\r\n        this._title = newTitle;\r\n    }\r\n}\r\n\r\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Todo);\n\n//# sourceURL=webpack://what-to-do/./src/todo.js?");

/***/ }),

/***/ "./src/images/header/to-do-list.png":
/*!******************************************!*\
  !*** ./src/images/header/to-do-list.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"79c97a1fda996d27d5ed.png\";\n\n//# sourceURL=webpack://what-to-do/./src/images/header/to-do-list.png?");

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
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
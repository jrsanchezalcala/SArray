/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sarray"] = factory();
	else
		root["sarray"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ZArray\": () => (/* binding */ ZArray)\n/* harmony export */ });\nclass ZArray extends Array {\n    constructor(index, options) {\n        super();\n        this.index = index;\n        this.options = options;\n        this.object = {};\n        this.initOptions();\n    }\n\n    initOptions() {\n        if (!this.options)\n            return;\n        if (this.options.autosort) {\n            this.setAutoSort(this.options.autosort);\n        }\n    }\n\n    getKey(element) {\n        if (this.index) {\n            if (typeof this.index === \"function\")\n                return this.index(element);\n            else\n                return element[this.index];\n        }\n        return null\n    }\n\n    push(element) {\n        super.push(element);\n        if (this.index)\n            this.object[this.getKey(element)] = element;\n        this.auto();\n    }\n\n    unshift(element) {\n        super.unshift(element);\n        if (this.index)\n            this.object[this.getKey(element)] = element;\n        this.auto();\n    }\n\n    shift() {\n        let element = super.shift();\n        if (this.index)\n            delete this.object[this.getKey(element)]\n    }\n\n    pop() {\n        let element = super.pop()\n        if (this.index)\n            delete this.object[this.getKey(element)]\n    }\n\n    get(id) {\n        if (this.index)\n            return this.object[id];\n        else\n            return this[id];\n    }\n\n    set(element) {\n        let id = this.getKey(element);\n        let elem = this.object[id];\n        if (elem)\n            this.object[id] = element;\n        else\n            this.push(element);\n\n        this.auto();\n\n    }\n\n    remove(id) {\n\n        this.splice(this.indexOf(this.object[id]), 1);\n        delete this.object[id];\n    }\n\n    load(arr) {\n        if (arr && Array.isArray(arr)) {\n            this._disableAuto = true;\n            arr.forEach(item => this.push(item));\n            this._disableAuto = false;\n            this.auto();\n        }\n\n    }\n\n    sort(args) {\n        if (this.autoSortCallback) {\n            super.sort(this.autoSortCallback);\n        }\n        else\n            super.sort(args);\n    }\n\n    concat(arr) {\n        this._disableAuto = true;\n        arr.forEach(item => this.push(item));\n        this._disableAuto = false;\n        this.auto();\n    }\n\n    auto() {\n        if (this._disableAuto)\n            return;\n\n        if (this.autoSortCallback) {\n            this.sort()\n        }\n    }\n\n    setAutoSort(callback) {\n        if (typeof callback === \"function\") {\n            this.autoSortCallback = callback;\n        }\n    }\n\n    toArray() {\n        return Array.from(this)\n    }\n\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2FycmF5Ly4vaW5kZXguanM/NDFmNSJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgWkFycmF5IGV4dGVuZHMgQXJyYXkge1xuICAgIGNvbnN0cnVjdG9yKGluZGV4LCBvcHRpb25zKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaW5kZXggPSBpbmRleDtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgdGhpcy5vYmplY3QgPSB7fTtcbiAgICAgICAgdGhpcy5pbml0T3B0aW9ucygpO1xuICAgIH1cblxuICAgIGluaXRPcHRpb25zKCkge1xuICAgICAgICBpZiAoIXRoaXMub3B0aW9ucylcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgaWYgKHRoaXMub3B0aW9ucy5hdXRvc29ydCkge1xuICAgICAgICAgICAgdGhpcy5zZXRBdXRvU29ydCh0aGlzLm9wdGlvbnMuYXV0b3NvcnQpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0S2V5KGVsZW1lbnQpIHtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXgpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpcy5pbmRleCA9PT0gXCJmdW5jdGlvblwiKVxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluZGV4KGVsZW1lbnQpO1xuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHJldHVybiBlbGVtZW50W3RoaXMuaW5kZXhdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcHVzaChlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyLnB1c2goZWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLmluZGV4KVxuICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5nZXRLZXkoZWxlbWVudCldID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5hdXRvKCk7XG4gICAgfVxuXG4gICAgdW5zaGlmdChlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyLnVuc2hpZnQoZWxlbWVudCk7XG4gICAgICAgIGlmICh0aGlzLmluZGV4KVxuICAgICAgICAgICAgdGhpcy5vYmplY3RbdGhpcy5nZXRLZXkoZWxlbWVudCldID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5hdXRvKCk7XG4gICAgfVxuXG4gICAgc2hpZnQoKSB7XG4gICAgICAgIGxldCBlbGVtZW50ID0gc3VwZXIuc2hpZnQoKTtcbiAgICAgICAgaWYgKHRoaXMuaW5kZXgpXG4gICAgICAgICAgICBkZWxldGUgdGhpcy5vYmplY3RbdGhpcy5nZXRLZXkoZWxlbWVudCldXG4gICAgfVxuXG4gICAgcG9wKCkge1xuICAgICAgICBsZXQgZWxlbWVudCA9IHN1cGVyLnBvcCgpXG4gICAgICAgIGlmICh0aGlzLmluZGV4KVxuICAgICAgICAgICAgZGVsZXRlIHRoaXMub2JqZWN0W3RoaXMuZ2V0S2V5KGVsZW1lbnQpXVxuICAgIH1cblxuICAgIGdldChpZCkge1xuICAgICAgICBpZiAodGhpcy5pbmRleClcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm9iamVjdFtpZF07XG4gICAgICAgIGVsc2VcbiAgICAgICAgICAgIHJldHVybiB0aGlzW2lkXTtcbiAgICB9XG5cbiAgICBzZXQoZWxlbWVudCkge1xuICAgICAgICBsZXQgaWQgPSB0aGlzLmdldEtleShlbGVtZW50KTtcbiAgICAgICAgbGV0IGVsZW0gPSB0aGlzLm9iamVjdFtpZF07XG4gICAgICAgIGlmIChlbGVtKVxuICAgICAgICAgICAgdGhpcy5vYmplY3RbaWRdID0gZWxlbWVudDtcbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgdGhpcy5wdXNoKGVsZW1lbnQpO1xuXG4gICAgICAgIHRoaXMuYXV0bygpO1xuXG4gICAgfVxuXG4gICAgcmVtb3ZlKGlkKSB7XG5cbiAgICAgICAgdGhpcy5zcGxpY2UodGhpcy5pbmRleE9mKHRoaXMub2JqZWN0W2lkXSksIDEpO1xuICAgICAgICBkZWxldGUgdGhpcy5vYmplY3RbaWRdO1xuICAgIH1cblxuICAgIGxvYWQoYXJyKSB7XG4gICAgICAgIGlmIChhcnIgJiYgQXJyYXkuaXNBcnJheShhcnIpKSB7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlQXV0byA9IHRydWU7XG4gICAgICAgICAgICBhcnIuZm9yRWFjaChpdGVtID0+IHRoaXMucHVzaChpdGVtKSk7XG4gICAgICAgICAgICB0aGlzLl9kaXNhYmxlQXV0byA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5hdXRvKCk7XG4gICAgICAgIH1cblxuICAgIH1cblxuICAgIHNvcnQoYXJncykge1xuICAgICAgICBpZiAodGhpcy5hdXRvU29ydENhbGxiYWNrKSB7XG4gICAgICAgICAgICBzdXBlci5zb3J0KHRoaXMuYXV0b1NvcnRDYWxsYmFjayk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZVxuICAgICAgICAgICAgc3VwZXIuc29ydChhcmdzKTtcbiAgICB9XG5cbiAgICBjb25jYXQoYXJyKSB7XG4gICAgICAgIHRoaXMuX2Rpc2FibGVBdXRvID0gdHJ1ZTtcbiAgICAgICAgYXJyLmZvckVhY2goaXRlbSA9PiB0aGlzLnB1c2goaXRlbSkpO1xuICAgICAgICB0aGlzLl9kaXNhYmxlQXV0byA9IGZhbHNlO1xuICAgICAgICB0aGlzLmF1dG8oKTtcbiAgICB9XG5cbiAgICBhdXRvKCkge1xuICAgICAgICBpZiAodGhpcy5fZGlzYWJsZUF1dG8pXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgaWYgKHRoaXMuYXV0b1NvcnRDYWxsYmFjaykge1xuICAgICAgICAgICAgdGhpcy5zb3J0KClcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHNldEF1dG9Tb3J0KGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICh0eXBlb2YgY2FsbGJhY2sgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgdGhpcy5hdXRvU29ydENhbGxiYWNrID0gY2FsbGJhY2s7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICB0b0FycmF5KCkge1xuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzKVxuICAgIH1cblxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
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
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./index.js"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
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

/***/ "./src/scripts/factories/photographer.js":
/*!***********************************************!*\
  !*** ./src/scripts/factories/photographer.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ photographerFactory)\n/* harmony export */ });\nfunction photographerFactory(data) {\n  var name = data.name,\n      city = data.city,\n      tagline = data.tagline,\n      price = data.price,\n      portrait = data.portrait;\n  var picture = \"assets/photographers/\".concat(portrait);\n\n  function getUserCardDOM() {\n    var article = document.createElement('article');\n    var img = document.createElement('img');\n    img.setAttribute('src', picture);\n    var h2 = document.createElement('h2');\n    h2.textContent = name;\n    var location = document.createElement('p');\n    location.textContent = city;\n    var motto = document.createElement('p');\n    motto.textContent = tagline;\n    var pricing = document.createElement('p');\n    pricing.textContent = price;\n    article.appendChild(img);\n    article.appendChild(h2);\n    article.appendChild(location);\n    article.appendChild(motto);\n    article.appendChild(pricing);\n    return article;\n  } // Why return getUserCardDOM ?\n\n\n  return {\n    name: name,\n    picture: picture,\n    city: city,\n    tagline: tagline,\n    price: price,\n    getUserCardDOM: getUserCardDOM\n  };\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/factories/photographer.js?");

/***/ }),

/***/ "./src/scripts/pages/index.js":
/*!************************************!*\
  !*** ./src/scripts/pages/index.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _factories_photographer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographer.js */ \"./src/scripts/factories/photographer.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nfunction getPhotographers() {\n  return _getPhotographers.apply(this, arguments);\n}\n\nfunction _getPhotographers() {\n  _getPhotographers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, photographerData, photographers;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch('./src/data/photographers.json');\n\n          case 2:\n            response = _context.sent;\n            _context.prev = 3;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            photographerData = _context.sent;\n            // Save photographer list (type array)\n            photographers = photographerData.photographers;\n            console.log(photographers); // Photographer list (type object)\n\n            console.log({\n              photographers: photographers\n            });\n            return _context.abrupt(\"return\", {\n              photographers: photographers\n            });\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](3);\n            document.getElementsByClassName(\"photographer_section\")[0].insertAdjacentHTML(\"beforeend\", \"ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.\");\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 13]]);\n  }));\n  return _getPhotographers.apply(this, arguments);\n}\n\nfunction displayData(_x) {\n  return _displayData.apply(this, arguments);\n}\n\nfunction _displayData() {\n  _displayData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(photographers) {\n    var photographersSection;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            photographersSection = document.querySelector('.photographer_section');\n            photographers.forEach(function (photographer) {\n              var photographerModel = (0,_factories_photographer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographer);\n              var userCardDOM = photographerModel.getUserCardDOM();\n              photographersSection.appendChild(userCardDOM);\n            });\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _displayData.apply(this, arguments);\n}\n\nfunction init() {\n  return _init.apply(this, arguments);\n}\n\nfunction _init() {\n  _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var _yield$getPhotographe, photographers;\n\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getPhotographers();\n\n          case 2:\n            _yield$getPhotographe = _context3.sent;\n            photographers = _yield$getPhotographe.photographers;\n            displayData(photographers);\n\n          case 5:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _init.apply(this, arguments);\n}\n\ninit();\n\n//# sourceURL=webpack://fisheye/./src/scripts/pages/index.js?");

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
/******/ 			// no module.id needed
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
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/pages/index.js");
/******/ 	
/******/ })()
;
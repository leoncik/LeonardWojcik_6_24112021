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

/***/ "./src/scripts/api/api.js":
/*!********************************!*\
  !*** ./src/scripts/api/api.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getPhotographers\": () => (/* binding */ getPhotographers),\n/* harmony export */   \"getProfile\": () => (/* binding */ getProfile),\n/* harmony export */   \"getMedia\": () => (/* binding */ getMedia)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// Fetch photographers data\nfunction getPhotographers() {\n  return _getPhotographers.apply(this, arguments);\n}\n\nfunction _getPhotographers() {\n  _getPhotographers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response, photographerData, photographers;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch('./src/data/photographers.json');\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            photographerData = _context.sent;\n            // Save photographer list (type array)\n            photographers = photographerData.photographers;\n            console.log(photographers); // Photographer list (type object)\n\n            console.log({\n              photographers: photographers\n            });\n            return _context.abrupt(\"return\", {\n              photographers: photographers\n            });\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](0);\n            document.getElementsByClassName('api-error')[0].insertAdjacentHTML('beforeend', 'ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.');\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 13]]);\n  }));\n  return _getPhotographers.apply(this, arguments);\n}\n\nvar params = new URL(document.location).searchParams;\nvar urlId = parseInt(params.get('id')); // Fetch photographers profile data\n\nfunction getProfile() {\n  return _getProfile.apply(this, arguments);\n} // Fetch photographers media data\n\nfunction _getProfile() {\n  _getProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var response, photographerData, photographers, photographerProfile;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.prev = 0;\n            _context2.next = 3;\n            return fetch('../..//src/data/photographers.json');\n\n          case 3:\n            response = _context2.sent;\n            _context2.next = 6;\n            return response.json();\n\n          case 6:\n            photographerData = _context2.sent;\n            photographers = photographerData.photographers; // Search photographer with It's \"ID\"\n            // TODO display error if photographerProfile is undefined (can't find photographer \"ID\")\n\n            photographerProfile = photographers.find(function (photographer) {\n              return parseInt(photographer.id) === urlId;\n            });\n            console.log(photographerProfile);\n            console.log(photographerProfile.name.split(' ').slice(0, -1).join(' '));\n            return _context2.abrupt(\"return\", photographerProfile);\n\n          case 14:\n            _context2.prev = 14;\n            _context2.t0 = _context2[\"catch\"](0);\n            console.log('erreur');\n\n          case 17:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2, null, [[0, 14]]);\n  }));\n  return _getProfile.apply(this, arguments);\n}\n\nfunction getMedia() {\n  return _getMedia.apply(this, arguments);\n}\n\nfunction _getMedia() {\n  _getMedia = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var response, photographerData, photographersMedias, photographerMedias;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.prev = 0;\n            _context3.next = 3;\n            return fetch('../..//src/data/photographers.json');\n\n          case 3:\n            response = _context3.sent;\n            _context3.next = 6;\n            return response.json();\n\n          case 6:\n            photographerData = _context3.sent;\n            photographersMedias = photographerData.media; // Filter current photographer medias from data\n\n            photographerMedias = photographersMedias.filter(function (element) {\n              return element.photographerId === urlId;\n            });\n            console.log(photographerMedias);\n            return _context3.abrupt(\"return\", photographerMedias);\n\n          case 13:\n            _context3.prev = 13;\n            _context3.t0 = _context3[\"catch\"](0);\n            console.log('erreur');\n\n          case 16:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3, null, [[0, 13]]);\n  }));\n  return _getMedia.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/api/api.js?");

/***/ }),

/***/ "./src/scripts/factories/mediaFactory.js":
/*!***********************************************!*\
  !*** ./src/scripts/factories/mediaFactory.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ mediaFactory)\n/* harmony export */ });\nvar params = new URL(document.location).searchParams;\nvar urlId = params.get('id');\nfunction mediaFactory(data, profile) {\n  var id = data.id,\n      price = data.price,\n      title = data.title,\n      date = data.date,\n      image = data.image,\n      video = data.video,\n      likes = data.likes;\n  var imageSource = \"/assets/images/\".concat(urlId, \"/\").concat(image);\n  var videoSource = \"/assets/images/\".concat(urlId, \"/\").concat(video);\n\n  function getPhotographerData() {\n    var article = document.createElement('article'); // Image / video\n\n    if (data.image) {\n      // Profile picture\n      var mediaPicture = document.createElement('img');\n      mediaPicture.setAttribute('src', imageSource);\n      article.appendChild(mediaPicture);\n    } else if (data.video) {\n      var mediaVideo = document.createElement('video');\n      mediaVideo.setAttribute('src', videoSource);\n      mediaVideo.setAttribute('controls', '');\n      article.appendChild(mediaVideo);\n    } else {\n      console.log('format non reconnu');\n    } // Title (only if the media type is a picture)\n\n\n    if (data.title) {\n      var mediaTitle = document.createElement('h3');\n      mediaTitle.textContent = title;\n      article.appendChild(mediaTitle);\n    } // Likes\n\n\n    var mediaLikes = document.createElement('p');\n    mediaLikes.textContent = likes;\n    article.appendChild(mediaLikes);\n    return article;\n  }\n\n  return {\n    id: id,\n    price: price,\n    title: title,\n    date: date,\n    image: image,\n    video: video,\n    likes: likes,\n    getPhotographerData: getPhotographerData\n  };\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/factories/mediaFactory.js?");

/***/ }),

/***/ "./src/scripts/factories/photographerFactory.js":
/*!******************************************************!*\
  !*** ./src/scripts/factories/photographerFactory.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ photographerFactory)\n/* harmony export */ });\nfunction photographerFactory(data) {\n  var name = data.name,\n      city = data.city,\n      tagline = data.tagline,\n      price = data.price,\n      id = data.id,\n      portrait = data.portrait;\n  var picture = \"/assets/photographers/\".concat(portrait);\n\n  function getUserCardDOM() {\n    var article = document.createElement('article'); // Redirection link\n\n    var photographerLink = document.createElement('a');\n    photographerLink.setAttribute('href', \"./pages/photographer-pages/photographer.html?id=\".concat(id));\n    article.appendChild(photographerLink); // Profile picture\n\n    var img = document.createElement('img');\n    img.setAttribute('src', picture);\n    photographerLink.appendChild(img); // Photographer name\n\n    var h2 = document.createElement('h2');\n    h2.textContent = name;\n    photographerLink.appendChild(h2); // Location\n\n    var location = document.createElement('p');\n    location.textContent = city;\n    article.appendChild(location); // Motto\n\n    var motto = document.createElement('p');\n    motto.textContent = tagline;\n    article.appendChild(motto); // Pricing\n\n    var pricing = document.createElement('p');\n    pricing.textContent = price;\n    article.appendChild(pricing);\n    return article;\n  }\n\n  function getProfile() {\n    var infos = document.createElement('div'); // Photographer name\n\n    var h1 = document.createElement('h1');\n    h1.textContent = name;\n    infos.appendChild(h1); // Location\n\n    var location = document.createElement('p');\n    location.textContent = city;\n    infos.appendChild(location); // Motto\n\n    var motto = document.createElement('p');\n    motto.textContent = tagline;\n    infos.appendChild(motto); // Pricing\n\n    var pricing = document.createElement('p');\n    pricing.textContent = price;\n    infos.appendChild(pricing); // Profile picture\n\n    var profilePicture = document.createElement('img');\n    profilePicture.setAttribute('src', picture);\n    document.getElementsByClassName(\"photographer-info\")[0].appendChild(profilePicture);\n    return infos;\n  }\n\n  return {\n    name: name,\n    picture: picture,\n    city: city,\n    tagline: tagline,\n    id: id,\n    price: price,\n    getUserCardDOM: getUserCardDOM,\n    getProfile: getProfile\n  };\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/factories/photographerFactory.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/scripts/pages/home.js\");\n/* harmony import */ var _pages_photographer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/photographer.js */ \"./src/scripts/pages/photographer.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// IMPORT FUNCTIONS\n// Home page\n // Photographer page\n\n // CALL FUNCTIONS\n\nvar main = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            console.log(window.location.pathname);\n            _context.t0 = window.location.pathname;\n            _context.next = _context.t0 === '/' ? 4 : _context.t0 === '/index.html' ? 4 : _context.t0 === '/pages/photographer-pages/photographer.html' ? 8 : 12;\n            break;\n\n          case 4:\n            console.log(\"Page d'accueil\");\n            _context.next = 7;\n            return (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n          case 7:\n            return _context.abrupt(\"break\", 14);\n\n          case 8:\n            console.log('Page de photographe');\n            _context.next = 11;\n            return (0,_pages_photographer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n          case 11:\n            return _context.abrupt(\"break\", 14);\n\n          case 12:\n            console.log(window.location.pathname);\n            console.log('ERREUR');\n\n          case 14:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function main() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmain();\n\n//# sourceURL=webpack://fisheye/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/pages/home.js":
/*!***********************************!*\
  !*** ./src/scripts/pages/home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayData\": () => (/* binding */ displayData),\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographerFactory.js */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.js */ \"./src/scripts/api/api.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n // Display photographers data on page\n\nfunction displayData(_x) {\n  return _displayData.apply(this, arguments);\n} // Initialize page (fetch data, then display It on the page)\n\nfunction _displayData() {\n  _displayData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(photographers) {\n    var photographersSection;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            photographersSection = document.querySelector('.photographer_section');\n            photographers.forEach(function (photographer) {\n              var photographerModel = (0,_factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographer);\n              var userCardDOM = photographerModel.getUserCardDOM();\n              photographersSection.appendChild(userCardDOM);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _displayData.apply(this, arguments);\n}\n\nfunction init() {\n  return _init.apply(this, arguments);\n}\n\nfunction _init() {\n  _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var _yield$getPhotographe, photographers;\n\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return (0,_api_api_js__WEBPACK_IMPORTED_MODULE_1__.getPhotographers)();\n\n          case 2:\n            _yield$getPhotographe = _context2.sent;\n            photographers = _yield$getPhotographe.photographers;\n            displayData(photographers);\n\n          case 5:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _init.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/pages/home.js?");

/***/ }),

/***/ "./src/scripts/pages/photographer.js":
/*!*******************************************!*\
  !*** ./src/scripts/pages/photographer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMedia\": () => (/* binding */ displayMedia),\n/* harmony export */   \"default\": () => (/* binding */ initPhotographer)\n/* harmony export */ });\n/* harmony import */ var _factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographerFactory.js */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _factories_mediaFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/mediaFactory.js */ \"./src/scripts/factories/mediaFactory.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.js */ \"./src/scripts/api/api.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n/*\n? Ces constantes doivent être déclarées dans \"api.js\" et non dans ce fichier, sinon les médias ne s'affichent pas.\n? Essayer de comprendre pourquoi.\nconst params = new URL(document.location).searchParams;\nconst urlId = parseInt(params.get('id')); */\n// Display photographer profile data on page\n\nfunction displayData(_x) {\n  return _displayData.apply(this, arguments);\n} // Display photographer medias on page\n\n\nfunction _displayData() {\n  _displayData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(photographerProfile) {\n    var photographHeader, photographerModel, userCardDOM;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            photographHeader = document.querySelector('.photographer-info');\n            photographerModel = (0,_factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographerProfile);\n            userCardDOM = photographerModel.getProfile();\n            photographHeader.appendChild(userCardDOM);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _displayData.apply(this, arguments);\n}\n\nfunction displayMedia(_x2) {\n  return _displayMedia.apply(this, arguments);\n} // Initialize page (fetch data, then display It on the page)\n\nfunction _displayMedia() {\n  _displayMedia = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(media) {\n    var photographHeader;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            photographHeader = document.querySelector('.photographer-medias');\n            media.forEach(function (element) {\n              var photographerMedias = (0,_factories_mediaFactory_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n              var userMedia = photographerMedias.getPhotographerData();\n              photographHeader.appendChild(userMedia);\n            });\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _displayMedia.apply(this, arguments);\n}\n\nfunction initPhotographer() {\n  return _initPhotographer.apply(this, arguments);\n}\n\nfunction _initPhotographer() {\n  _initPhotographer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var profiles, medias;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return (0,_api_api_js__WEBPACK_IMPORTED_MODULE_2__.getProfile)();\n\n          case 2:\n            profiles = _context3.sent;\n            _context3.next = 5;\n            return (0,_api_api_js__WEBPACK_IMPORTED_MODULE_2__.getMedia)();\n\n          case 5:\n            medias = _context3.sent;\n            displayData(profiles);\n            displayMedia(medias);\n\n          case 8:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _initPhotographer.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/pages/photographer.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/scripts/index.js");
/******/ 	
/******/ })()
;
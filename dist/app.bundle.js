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
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"fetchPhotographersData\": () => (/* binding */ fetchPhotographersData),\n/* harmony export */   \"photographersData\": () => (/* binding */ photographersData)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar params = new URL(document.location).searchParams;\nvar urlId = parseInt(params.get('id')); // ? TEST 3\n// Fetch photographers data\n\nfunction fetchPhotographersData() {\n  return _fetchPhotographersData.apply(this, arguments);\n} // Erreur eslint : « Parsing error: Cannot use keyword 'await' outside an async function ».\n// TODO : remplacer par une fonction ?\n// eslint-disable-next-line no-use-before-define\n\nfunction _fetchPhotographersData() {\n  _fetchPhotographersData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var response;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.prev = 0;\n            _context.next = 3;\n            return fetch('../..//src/data/photographers.json');\n\n          case 3:\n            response = _context.sent;\n            _context.next = 6;\n            return response.json();\n\n          case 6:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 9:\n            _context.prev = 9;\n            _context.t0 = _context[\"catch\"](0);\n            document.getElementsByClassName('api-error')[0].insertAdjacentHTML('beforeend', 'ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.');\n\n          case 12:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[0, 9]]);\n  }));\n  return _fetchPhotographersData.apply(this, arguments);\n}\n\nvar photographersData = await fetchPhotographersData('../..//src/data/photographers.json');\n__webpack_handle_async_dependencies__();\n}, 1);\n\n//# sourceURL=webpack://fisheye/./src/scripts/api/api.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ photographerFactory)\n/* harmony export */ });\nfunction photographerFactory(data) {\n  var name = data.name,\n      city = data.city,\n      tagline = data.tagline,\n      price = data.price,\n      id = data.id,\n      portrait = data.portrait;\n  var picture = \"/assets/photographers/\".concat(portrait);\n\n  function getUserCardDOM() {\n    var article = document.createElement('article'); // Redirection link\n\n    var photographerLink = document.createElement('a');\n    photographerLink.setAttribute('href', \"./pages/photographer-pages/photographer.html?id=\".concat(id));\n    article.appendChild(photographerLink); // Profile picture\n\n    var img = document.createElement('img');\n    img.setAttribute('src', picture);\n    photographerLink.appendChild(img); // Photographer name\n\n    var h2 = document.createElement('h2');\n    h2.textContent = name;\n    photographerLink.appendChild(h2); // Location\n\n    var location = document.createElement('p');\n    location.textContent = city;\n    article.appendChild(location); // Motto\n\n    var motto = document.createElement('p');\n    motto.textContent = tagline;\n    article.appendChild(motto); // Pricing\n\n    var pricing = document.createElement('p');\n    pricing.textContent = price;\n    article.appendChild(pricing);\n    return article;\n  }\n\n  function getProfile() {\n    var infos = document.createElement('div'); // Photographer name\n\n    var h1 = document.createElement('h1');\n    h1.textContent = name;\n    infos.appendChild(h1); // Location\n\n    var location = document.createElement('p');\n    location.textContent = city;\n    infos.appendChild(location); // Motto\n\n    var motto = document.createElement('p');\n    motto.textContent = tagline;\n    infos.appendChild(motto); // Profile picture\n\n    var profilePicture = document.createElement('img');\n    profilePicture.setAttribute('src', picture);\n    document.getElementsByClassName('photographer-info')[0].appendChild(profilePicture);\n    return infos;\n  }\n\n  return {\n    name: name,\n    picture: picture,\n    city: city,\n    tagline: tagline,\n    id: id,\n    price: price,\n    getUserCardDOM: getUserCardDOM,\n    getProfile: getProfile\n  };\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/factories/photographerFactory.js?");

/***/ }),

/***/ "./src/scripts/index.js":
/*!******************************!*\
  !*** ./src/scripts/index.js ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/scripts/pages/home.js\");\n/* harmony import */ var _pages_photographer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/photographer.js */ \"./src/scripts/pages/photographer.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_pages_photographer_js__WEBPACK_IMPORTED_MODULE_1__, _pages_home_js__WEBPACK_IMPORTED_MODULE_0__]);\n([_pages_photographer_js__WEBPACK_IMPORTED_MODULE_1__, _pages_home_js__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// IMPORT FUNCTIONS\n// Home page\n // Photographer page\n\n // CALL FUNCTIONS\n\nvar main = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = window.location.pathname;\n            _context.next = _context.t0 === '/' ? 3 : _context.t0 === '/index.html' ? 3 : _context.t0 === '/pages/photographer-pages/photographer.html' ? 6 : 9;\n            break;\n\n          case 3:\n            _context.next = 5;\n            return (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.init)();\n\n          case 5:\n            return _context.abrupt(\"break\", 11);\n\n          case 6:\n            _context.next = 8;\n            return (0,_pages_photographer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n          case 8:\n            return _context.abrupt(\"break\", 11);\n\n          case 9:\n            console.log(window.location.pathname);\n            console.log('ERREUR');\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function main() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmain();\n});\n\n//# sourceURL=webpack://fisheye/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/pages/home.js":
/*!***********************************!*\
  !*** ./src/scripts/pages/home.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayData\": () => (/* binding */ displayData),\n/* harmony export */   \"init\": () => (/* binding */ init)\n/* harmony export */ });\n/* harmony import */ var _factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographerFactory.js */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.js */ \"./src/scripts/api/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_api_js__WEBPACK_IMPORTED_MODULE_1__]);\n_api_api_js__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n // Display photographers data on page\n\nfunction displayData(_x) {\n  return _displayData.apply(this, arguments);\n} // Initialize page (fetch data, then display It on the page)\n\nfunction _displayData() {\n  _displayData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(photographers) {\n    var photographersSection;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            photographersSection = document.querySelector('.photographer_section');\n            photographers.forEach(function (photographer) {\n              var photographerModel = (0,_factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographer);\n              var userCardDOM = photographerModel.getUserCardDOM();\n              photographersSection.appendChild(userCardDOM);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _displayData.apply(this, arguments);\n}\n\nfunction init() {\n  return _init.apply(this, arguments);\n}\n\nfunction _init() {\n  _init = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var photographers;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            photographers = _api_api_js__WEBPACK_IMPORTED_MODULE_1__.photographersData.photographers;\n            displayData(photographers);\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _init.apply(this, arguments);\n}\n});\n\n//# sourceURL=webpack://fisheye/./src/scripts/pages/home.js?");

/***/ }),

/***/ "./src/scripts/pages/photographer.js":
/*!*******************************************!*\
  !*** ./src/scripts/pages/photographer.js ***!
  \*******************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMedia\": () => (/* binding */ displayMedia),\n/* harmony export */   \"default\": () => (/* binding */ initPhotographer)\n/* harmony export */ });\n/* harmony import */ var _factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographerFactory.js */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _factories_mediaFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/mediaFactory.js */ \"./src/scripts/factories/mediaFactory.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.js */ \"./src/scripts/api/api.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_api_api_js__WEBPACK_IMPORTED_MODULE_2__]);\n_api_api_js__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n // Retrieve profile\n\n\nvar params = new URL(document.location).searchParams;\nvar urlId = parseInt(params.get('id'));\n\nfunction getProfile() {\n  var photographers = _api_api_js__WEBPACK_IMPORTED_MODULE_2__.photographersData.photographers; // Search photographer with It's \"ID\"\n  // TODO display error if photographerProfile is undefined (can't find photographer \"ID\")\n\n  var photographerProfile = photographers.find(function (photographer) {\n    return parseInt(photographer.id) === urlId;\n  });\n  console.log(photographerProfile);\n  console.log(photographerProfile.name.split(' ').slice(0, -1).join(' '));\n  return photographerProfile;\n} // Retrieve media\n\n\nfunction getMedia() {\n  var photographersMedias = _api_api_js__WEBPACK_IMPORTED_MODULE_2__.photographersData.media; // Filter current photographer medias from data\n\n  var photographerMedias = photographersMedias.filter(function (element) {\n    return element.photographerId === urlId;\n  });\n  console.log(photographerMedias);\n  return photographerMedias;\n} // Display photographer profile data on page\n\n\nfunction displayData(_x) {\n  return _displayData.apply(this, arguments);\n} // Display photographer medias on page\n\n\nfunction _displayData() {\n  _displayData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(photographerProfile) {\n    var photographHeader, photographerModel, userCardDOM;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            photographHeader = document.querySelector('.photographer-info');\n            photographerModel = (0,_factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographerProfile);\n            userCardDOM = photographerModel.getProfile();\n            photographHeader.appendChild(userCardDOM);\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _displayData.apply(this, arguments);\n}\n\nfunction displayMedia(_x2) {\n  return _displayMedia.apply(this, arguments);\n} // Initialize page (fetch data, then display It on the page)\n\nfunction _displayMedia() {\n  _displayMedia = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(media) {\n    var photographHeader;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            photographHeader = document.querySelector('.photographer-medias');\n            media.forEach(function (element) {\n              var photographerMedias = (0,_factories_mediaFactory_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n              var userMedia = photographerMedias.getPhotographerData();\n              photographHeader.appendChild(userMedia);\n            });\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _displayMedia.apply(this, arguments);\n}\n\nfunction initPhotographer() {\n  return _initPhotographer.apply(this, arguments);\n}\n\nfunction _initPhotographer() {\n  _initPhotographer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var profiles, medias;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            profiles = getProfile();\n            _context3.next = 3;\n            return getMedia();\n\n          case 3:\n            medias = _context3.sent;\n            displayData(profiles);\n            displayMedia(medias);\n\n          case 6:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _initPhotographer.apply(this, arguments);\n}\n\nconsole.log(\"Un log volant\");\n});\n\n//# sourceURL=webpack://fisheye/./src/scripts/pages/photographer.js?");

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
/******/ 	/* webpack/runtime/async module */
/******/ 	(() => {
/******/ 		var webpackThen = typeof Symbol === "function" ? Symbol("webpack then") : "__webpack_then__";
/******/ 		var webpackExports = typeof Symbol === "function" ? Symbol("webpack exports") : "__webpack_exports__";
/******/ 		var completeQueue = (queue) => {
/******/ 			if(queue) {
/******/ 				queue.forEach((fn) => (fn.r--));
/******/ 				queue.forEach((fn) => (fn.r-- ? fn.r++ : fn()));
/******/ 			}
/******/ 		}
/******/ 		var completeFunction = (fn) => (!--fn.r && fn());
/******/ 		var queueFunction = (queue, fn) => (queue ? queue.push(fn) : completeFunction(fn));
/******/ 		var wrapDeps = (deps) => (deps.map((dep) => {
/******/ 			if(dep !== null && typeof dep === "object") {
/******/ 				if(dep[webpackThen]) return dep;
/******/ 				if(dep.then) {
/******/ 					var queue = [];
/******/ 					dep.then((r) => {
/******/ 						obj[webpackExports] = r;
/******/ 						completeQueue(queue);
/******/ 						queue = 0;
/******/ 					});
/******/ 					var obj = {};
/******/ 												obj[webpackThen] = (fn, reject) => (queueFunction(queue, fn), dep['catch'](reject));
/******/ 					return obj;
/******/ 				}
/******/ 			}
/******/ 			var ret = {};
/******/ 								ret[webpackThen] = (fn) => (completeFunction(fn));
/******/ 								ret[webpackExports] = dep;
/******/ 								return ret;
/******/ 		}));
/******/ 		__webpack_require__.a = (module, body, hasAwait) => {
/******/ 			var queue = hasAwait && [];
/******/ 			var exports = module.exports;
/******/ 			var currentDeps;
/******/ 			var outerResolve;
/******/ 			var reject;
/******/ 			var isEvaluating = true;
/******/ 			var nested = false;
/******/ 			var whenAll = (deps, onResolve, onReject) => {
/******/ 				if (nested) return;
/******/ 				nested = true;
/******/ 				onResolve.r += deps.length;
/******/ 				deps.map((dep, i) => (dep[webpackThen](onResolve, onReject)));
/******/ 				nested = false;
/******/ 			};
/******/ 			var promise = new Promise((resolve, rej) => {
/******/ 				reject = rej;
/******/ 				outerResolve = () => (resolve(exports), completeQueue(queue), queue = 0);
/******/ 			});
/******/ 			promise[webpackExports] = exports;
/******/ 			promise[webpackThen] = (fn, rejectFn) => {
/******/ 				if (isEvaluating) { return completeFunction(fn); }
/******/ 				if (currentDeps) whenAll(currentDeps, fn, rejectFn);
/******/ 				queueFunction(queue, fn);
/******/ 				promise['catch'](rejectFn);
/******/ 			};
/******/ 			module.exports = promise;
/******/ 			body((deps) => {
/******/ 				if(!deps) return outerResolve();
/******/ 				currentDeps = wrapDeps(deps);
/******/ 				var fn, result;
/******/ 				var promise = new Promise((resolve, reject) => {
/******/ 					fn = () => (resolve(result = currentDeps.map((d) => (d[webpackExports]))));
/******/ 					fn.r = 0;
/******/ 					whenAll(currentDeps, fn, reject);
/******/ 				});
/******/ 				return fn.r ? promise : result;
/******/ 			}).then(outerResolve, reject);
/******/ 			isEvaluating = false;
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
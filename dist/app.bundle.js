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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"genericFetch\": () => (/* binding */ genericFetch),\n/* harmony export */   \"fetchPhotographers\": () => (/* binding */ fetchPhotographers)\n/* harmony export */ });\n/* harmony import */ var _utils_helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers */ \"./src/scripts/utils/helpers.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar urlId = parseInt((0,_utils_helpers__WEBPACK_IMPORTED_MODULE_0__.getParam)('id')); // Fetch photographers data\n\nfunction genericFetch(_x) {\n  return _genericFetch.apply(this, arguments);\n}\n\nfunction _genericFetch() {\n  _genericFetch = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {\n    var err,\n        method,\n        headers,\n        response,\n        _args = arguments;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            err = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'ERREUR : impossible de récupérer les données des photographes. Veuillez réessayer plus tard.';\n            method = _args.length > 2 && _args[2] !== undefined ? _args[2] : 'GET';\n            headers = _args.length > 3 && _args[3] !== undefined ? _args[3] : {};\n            _context.prev = 3;\n            _context.next = 6;\n            return fetch(url, {\n              method: method,\n              headers: headers\n            });\n\n          case 6:\n            response = _context.sent;\n            _context.next = 9;\n            return response.json();\n\n          case 9:\n            return _context.abrupt(\"return\", _context.sent);\n\n          case 12:\n            _context.prev = 12;\n            _context.t0 = _context[\"catch\"](3);\n            document.getElementsByClassName('api-error')[0].insertAdjacentHTML('beforeend', err);\n\n          case 15:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 12]]);\n  }));\n  return _genericFetch.apply(this, arguments);\n}\n\nfunction fetchPhotographers() {\n  return _fetchPhotographers.apply(this, arguments);\n}\n\nfunction _fetchPhotographers() {\n  _fetchPhotographers = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var photographersData;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return genericFetch('../..//src/data/photographers.json');\n\n          case 2:\n            photographersData = _context2.sent;\n            return _context2.abrupt(\"return\", photographersData);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _fetchPhotographers.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/api/api.js?");

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
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/home.js */ \"./src/scripts/pages/home.js\");\n/* harmony import */ var _pages_photographer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/photographer.js */ \"./src/scripts/pages/photographer.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// IMPORT FUNCTIONS\n// Home page\n // Photographer page\n\n // CALL FUNCTIONS\n\nvar main = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.t0 = window.location.pathname;\n            _context.next = _context.t0 === '/' ? 3 : _context.t0 === '/index.html' ? 3 : _context.t0 === '/pages/photographer-pages/photographer.html' ? 6 : 9;\n            break;\n\n          case 3:\n            _context.next = 5;\n            return (0,_pages_home_js__WEBPACK_IMPORTED_MODULE_0__.initHome)();\n\n          case 5:\n            return _context.abrupt(\"break\", 9);\n\n          case 6:\n            _context.next = 8;\n            return (0,_pages_photographer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n          case 8:\n            return _context.abrupt(\"break\", 9);\n\n          case 9:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function main() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nmain();\n\n//# sourceURL=webpack://fisheye/./src/scripts/index.js?");

/***/ }),

/***/ "./src/scripts/pages/home.js":
/*!***********************************!*\
  !*** ./src/scripts/pages/home.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayData\": () => (/* binding */ displayData),\n/* harmony export */   \"initHome\": () => (/* binding */ initHome)\n/* harmony export */ });\n/* harmony import */ var _factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographerFactory.js */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../api/api.js */ \"./src/scripts/api/api.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n // Display photographers data on page\n\nfunction displayData(_x) {\n  return _displayData.apply(this, arguments);\n} // Initialize page (fetch data, then display It on the page)\n\nfunction _displayData() {\n  _displayData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(photographers) {\n    var photographersSection;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            photographersSection = document.querySelector('.photographer_section');\n            photographers.forEach(function (photographer) {\n              var photographerModel = (0,_factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographer);\n              var userCardDOM = photographerModel.getUserCardDOM();\n              photographersSection.appendChild(userCardDOM);\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _displayData.apply(this, arguments);\n}\n\nfunction initHome() {\n  return _initHome.apply(this, arguments);\n}\n\nfunction _initHome() {\n  _initHome = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var photographersData, photographers;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return (0,_api_api_js__WEBPACK_IMPORTED_MODULE_1__.fetchPhotographers)();\n\n          case 2:\n            photographersData = _context2.sent;\n            _context2.next = 5;\n            return photographersData.photographers;\n\n          case 5:\n            photographers = _context2.sent;\n            displayData(photographers);\n\n          case 7:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _initHome.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/pages/home.js?");

/***/ }),

/***/ "./src/scripts/pages/photographer.js":
/*!*******************************************!*\
  !*** ./src/scripts/pages/photographer.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayMedia\": () => (/* binding */ displayMedia),\n/* harmony export */   \"default\": () => (/* binding */ initPhotographer)\n/* harmony export */ });\n/* harmony import */ var _factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../factories/photographerFactory.js */ \"./src/scripts/factories/photographerFactory.js\");\n/* harmony import */ var _factories_mediaFactory_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../factories/mediaFactory.js */ \"./src/scripts/factories/mediaFactory.js\");\n/* harmony import */ var _api_api_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api/api.js */ \"./src/scripts/api/api.js\");\n/* harmony import */ var _utils_contactFormDisplay__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/contactFormDisplay */ \"./src/scripts/utils/contactFormDisplay.js\");\n/* harmony import */ var _utils_contactFormValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/contactFormValidation */ \"./src/scripts/utils/contactFormValidation.js\");\n/* harmony import */ var _utils_lightboxDisplay__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/lightboxDisplay */ \"./src/scripts/utils/lightboxDisplay.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n// Photographer profile scripts\n\n\n // Contact form scripts\n\n\n // Lightbox scripts\n\n\nvar params = new URL(document.location).searchParams;\nvar urlId = parseInt(params.get('id'));\n\nfunction getProfile(_x) {\n  return _getProfile.apply(this, arguments);\n} // Display photographer profile data on page\n\n\nfunction _getProfile() {\n  _getProfile = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(elt) {\n    var photographerProfile;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            // Search photographer with It's \"ID\"\n            // TODO display error if photographerProfile is undefined (can't find photographer \"ID\")\n            photographerProfile = elt.find(function (photographer) {\n              return parseInt(photographer.id) === urlId;\n            });\n            return _context.abrupt(\"return\", photographerProfile);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n  return _getProfile.apply(this, arguments);\n}\n\nfunction displayData(_x2) {\n  return _displayData.apply(this, arguments);\n} // Retrieve media\n\n\nfunction _displayData() {\n  _displayData = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(photographerProfile) {\n    var photographHeader, photographerModel, userCardDOM;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            photographHeader = document.querySelector('.photographer-info');\n            photographerModel = (0,_factories_photographerFactory_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(photographerProfile);\n            userCardDOM = photographerModel.getProfile();\n            photographHeader.appendChild(userCardDOM);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n  return _displayData.apply(this, arguments);\n}\n\nfunction getMedia(_x3) {\n  return _getMedia.apply(this, arguments);\n} // Display photographer medias on page\n\n\nfunction _getMedia() {\n  _getMedia = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(elt) {\n    var photographerMedias;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            // Filter current photographer medias from data\n            photographerMedias = elt.filter(function (element) {\n              return element.photographerId === urlId;\n            });\n            return _context3.abrupt(\"return\", photographerMedias);\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n  return _getMedia.apply(this, arguments);\n}\n\nfunction displayMedia(_x4) {\n  return _displayMedia.apply(this, arguments);\n} // Initialize page (fetch data, then display It on the page and add behaviour to contact modal)\n\nfunction _displayMedia() {\n  _displayMedia = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(media) {\n    var photographHeader;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            photographHeader = document.querySelector('.photographer-medias');\n            media.forEach(function (element) {\n              var photographerMedias = (0,_factories_mediaFactory_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(element);\n              var userMedia = photographerMedias.getPhotographerData();\n              photographHeader.appendChild(userMedia);\n            });\n\n          case 2:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n  return _displayMedia.apply(this, arguments);\n}\n\nfunction initPhotographer() {\n  return _initPhotographer.apply(this, arguments);\n}\n\nfunction _initPhotographer() {\n  _initPhotographer = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {\n    var _yield$fetchPhotograp, photographers, media, profiles, medias;\n\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return (0,_api_api_js__WEBPACK_IMPORTED_MODULE_2__.fetchPhotographers)();\n\n          case 2:\n            _yield$fetchPhotograp = _context5.sent;\n            photographers = _yield$fetchPhotograp.photographers;\n            media = _yield$fetchPhotograp.media;\n            _context5.next = 7;\n            return getProfile(photographers);\n\n          case 7:\n            profiles = _context5.sent;\n            _context5.next = 10;\n            return getMedia(media);\n\n          case 10:\n            medias = _context5.sent;\n            displayData(profiles);\n            displayMedia(medias);\n            (0,_utils_contactFormDisplay__WEBPACK_IMPORTED_MODULE_3__.modalDisplay)();\n            (0,_utils_contactFormValidation__WEBPACK_IMPORTED_MODULE_4__.formSubmitValidation)();\n            (0,_utils_lightboxDisplay__WEBPACK_IMPORTED_MODULE_5__.lightboxDisplay)();\n\n          case 16:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n  return _initPhotographer.apply(this, arguments);\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/pages/photographer.js?");

/***/ }),

/***/ "./src/scripts/utils/contactFormDisplay.js":
/*!*************************************************!*\
  !*** ./src/scripts/utils/contactFormDisplay.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"modalDisplay\": () => (/* binding */ modalDisplay)\n/* harmony export */ });\n/* harmony import */ var _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers.js */ \"./src/scripts/utils/helpers.js\");\n/*\n TODO : both lightbox and form fall in the \"modal\" category. Refactor to make a single \"modalDisplay\" to control\n TODO : the lightbox and the modal.\n */\n\nfunction modalDisplay() {\n  function displayModal() {\n    _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = 'block';\n    _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.contactForm.style.display = 'block'; // Remove validation message.\n\n    _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.validationMessage.textContent = ' '; // TODO : use a condition to remove validation message ?\n    // if (validationMessage.textContent !== ' ') {\n    //    validationMessage.textContent = ' ';\n    // }\n  }\n\n  function closeModal() {\n    _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.modal.style.display = 'none';\n  }\n\n  var closeButton = document.getElementsByClassName('close-button');\n  closeButton[0].addEventListener('click', closeModal);\n  var contactButton = document.getElementsByClassName('contact_button');\n  contactButton[0].addEventListener('click', displayModal);\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/utils/contactFormDisplay.js?");

/***/ }),

/***/ "./src/scripts/utils/contactFormValidation.js":
/*!****************************************************!*\
  !*** ./src/scripts/utils/contactFormValidation.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"formSubmitValidation\": () => (/* binding */ formSubmitValidation)\n/* harmony export */ });\n/* harmony import */ var _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers.js */ \"./src/scripts/utils/helpers.js\");\n // *** Form fields validation *** //\n// TODO : add style to valid and invalid fields\n// Check if the name, surname and message fields are valid.\n\nvar checkInputText = function checkInputText(elt, key, className) {\n  if (elt.value === '') {\n    document.querySelector(\".\".concat(className, \" .error-message\")).innerHTML = \"Veuillez saisir un \".concat(key);\n    return false;\n  } else if (elt.value.length < 2) {\n    document.querySelector(\".\".concat(className, \" .error-message\")).innerHTML = \"Votre \".concat(key, \" doit contenir au moins deux caract\\xE8res.\");\n    return false;\n  } else {\n    document.querySelector(\".\".concat(className, \" .error-message\")).innerHTML = \" \";\n  }\n\n  return true;\n}; // Check if the e-mail address is valid\n\n\nvar checkEmail = function checkEmail() {\n  if (_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.email.value === '') {\n    // ? Why is nextElementSiblings null ? And why is the console.log displayed twice ?\n    console.log(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.email.nextElementSibling);\n    document.querySelector('.email .error-message').innerHTML = 'Veuillez saisir votre courriel.';\n    return false;\n  } else if (!_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.email.value.match(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.mailformat)) {\n    document.querySelector('.email .error-message').innerHTML = 'Veuillez saisir un courriel valide.';\n    return false;\n  } else {\n    document.querySelector('.email .error-message').innerHTML = ' ';\n  }\n\n  return true;\n}; // Check all fields\n\n\nfunction fieldValidation() {\n  checkInputText(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.firstName, 'prénom', 'first-name');\n  checkInputText(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.lastName, 'nom', 'last-name');\n  checkEmail();\n  checkInputText(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.message, 'message', 'message');\n} // Check validity of all fields\n\n\nfunction fieldValidationIsValid() {\n  if (checkInputText(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.firstName, 'prénom', 'first-name') && checkInputText(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.lastName, 'nom', 'last-name') && checkEmail() && checkInputText(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.message, 'message', 'message')) {\n    return true;\n  }\n\n  return false;\n} // *** Form submit validation *** //\n// Submit if the form is valid, else displays error message.\n\n\nvar formSubmitValidation = function formSubmitValidation() {\n  _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.contactForm.addEventListener('submit', function (e) {\n    e.preventDefault();\n    fieldValidation();\n\n    if (fieldValidationIsValid()) {\n      console.log(_utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.message.value);\n      submitedForm();\n      resetForm();\n    }\n  }, false);\n};\n\nfunction submitedForm() {\n  // Hide all elements inside \"form-data-container\" and set a custom message.\n  _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.contactForm.style.display = 'none';\n  _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.validationMessage.insertAdjacentHTML('afterbegin', \"<span class='submission-message'>Votre message a bien été envoyé, merci ! Vous pouvez à présent fermer le formulaire de contact.</span>\");\n} // Reset form after closing the modal\n\n\nfunction resetForm() {\n  _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.contactForm.reset();\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/utils/contactFormValidation.js?");

/***/ }),

/***/ "./src/scripts/utils/helpers.js":
/*!**************************************!*\
  !*** ./src/scripts/utils/helpers.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getParam\": () => (/* binding */ getParam),\n/* harmony export */   \"mailformat\": () => (/* binding */ mailformat),\n/* harmony export */   \"modal\": () => (/* binding */ modal),\n/* harmony export */   \"firstName\": () => (/* binding */ firstName),\n/* harmony export */   \"lastName\": () => (/* binding */ lastName),\n/* harmony export */   \"email\": () => (/* binding */ email),\n/* harmony export */   \"message\": () => (/* binding */ message),\n/* harmony export */   \"submitButton\": () => (/* binding */ submitButton),\n/* harmony export */   \"contactForm\": () => (/* binding */ contactForm),\n/* harmony export */   \"validationMessage\": () => (/* binding */ validationMessage),\n/* harmony export */   \"errorFields\": () => (/* binding */ errorFields),\n/* harmony export */   \"lightbox\": () => (/* binding */ lightbox)\n/* harmony export */ });\n// Retrieve photographer id from URL\nvar getParam = function getParam(param) {\n  return new URL(document.location).searchParams.get(param);\n}; // Mail regex\n// eslint-disable-next-line\n\n\nvar mailformat = /^\\w+([\\.-]?\\w+)*@\\w+([\\.-]?\\w+)*(\\.\\w{2,3})+$/; // *** DOM elements of the contact form *** //\n// Contact form\n\nvar modal = document.getElementById('contact_modal');\nvar contactForm = document.getElementById('contact-form'); // Inputs\n\nvar firstName = document.getElementById('first-name');\nvar lastName = document.getElementById('last-name');\nvar email = document.getElementById('email');\nvar message = document.getElementById('message'); // Submit button\n\nvar submitButton = document.querySelector('.contact_button'); // Validation message\n\nvar validationMessage = document.querySelector('.validation-message'); // Error field (inputform-assist)\n\nvar errorFields = document.getElementsByClassName('inputform-assist'); // *** DOM elements of the lightbox *** //\n\nvar lightbox = document.getElementById('lightbox-modal');\n\n\n//# sourceURL=webpack://fisheye/./src/scripts/utils/helpers.js?");

/***/ }),

/***/ "./src/scripts/utils/lightboxDisplay.js":
/*!**********************************************!*\
  !*** ./src/scripts/utils/lightboxDisplay.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"lightboxDisplay\": () => (/* binding */ lightboxDisplay)\n/* harmony export */ });\n/* harmony import */ var _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/helpers.js */ \"./src/scripts/utils/helpers.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== \"undefined\" && o[Symbol.iterator] || o[\"@@iterator\"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nfunction lightboxDisplay() {\n  function displayLightbox() {\n    _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.lightbox.style.display = 'block';\n  }\n\n  function closeLightbox() {\n    _utils_helpers_js__WEBPACK_IMPORTED_MODULE_0__.lightbox.style.display = 'none';\n  }\n\n  var closeButton = document.querySelector('.close');\n  closeButton.addEventListener('click', closeLightbox);\n  var galleryItems = document.querySelectorAll('.photographer-medias article');\n\n  var _iterator = _createForOfIteratorHelper(galleryItems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var iterator = _step.value;\n      iterator.addEventListener('click', displayLightbox);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n}\n\n//# sourceURL=webpack://fisheye/./src/scripts/utils/lightboxDisplay.js?");

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
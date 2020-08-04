/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./modules/Player */ \"./src/modules/Player.js\"), __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\"), __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_Player, _Gameboard, _UI) {\n  \"use strict\";\n\n  _Player = _interopRequireDefault(_Player);\n  _Gameboard = _interopRequireDefault(_Gameboard);\n  _UI = _interopRequireDefault(_UI);\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n  var App = function (UI) {\n    var loadEventListeners = function loadEventListeners() {\n      var UISelectors = UI.getSelectors();\n    };\n\n    var renderBoards = function renderBoards() {\n      UI.renderGrid('user');\n      UI.renderGrid('computer');\n    };\n\n    var clearBoard = function clearBoard() {};\n\n    var newGame = function newGame() {\n      var user = (0, _Player[\"default\"])();\n      var computer = (0, _Player[\"default\"])();\n      clearBoard();\n      renderBoards();\n      loadEventListeners();\n    };\n\n    return {\n      init: function init() {\n        newGame();\n      }\n    };\n  }(_UI[\"default\"]);\n\n  App.init();\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _Ship) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = void 0;\n  _Ship = _interopRequireDefault(_Ship);\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n  var Gameboard = function Gameboard() {\n    var props = {\n      shipsLeft: 5,\n      ships: [],\n      missedShots: []\n    };\n\n    var createShip = function createShip(name, length, location) {\n      var ship = (0, _Ship[\"default\"])(name, length, location);\n      return props.ships.push(ship);\n    };\n\n    var receiveAttack = function receiveAttack(coordinate) {\n      var missed = false;\n      props.ships.forEach(function (obj) {\n        if (obj.props.location.includes(coordinate)) {\n          obj.props.hit.push(coordinate);\n          missed = true;\n        }\n      });\n\n      if (!missed) {\n        props.missedShots.push(coordinate);\n      }\n    };\n\n    var checkSunk = function checkSunk() {\n      props.ships.forEach(function (obj) {\n        obj.isSunk();\n\n        if (obj.props.sunk) {\n          props.shipsLeft--;\n        }\n      });\n    };\n\n    return {\n      props: props,\n      createShip: createShip,\n      receiveAttack: receiveAttack,\n      checkSunk: checkSunk\n    };\n  };\n\n  var _default = Gameboard;\n  _exports[\"default\"] = _default;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = void 0;\n\n  var Player = function Player() {\n    var moves = [];\n\n    var randomMove = function randomMove() {\n      var coordinate = Math.floor(Math.random() * 100);\n\n      if (!moves.includes(coordinate)) {\n        moves.push(coordinate);\n        return coordinate;\n      }\n\n      return randomMove();\n    };\n\n    var userMove = function userMove(coordinate) {\n      if (!moves.includes(coordinate)) {\n        moves.push(coordinate);\n        return coordinate;\n      }\n    };\n\n    return {\n      moves: moves,\n      randomMove: randomMove,\n      userMove: userMove\n    };\n  };\n\n  var _default = Player;\n  _exports[\"default\"] = _default;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = void 0;\n\n  var Ship = function Ship(name, length, location) {\n    var props = {\n      name: name,\n      length: length,\n      location: location,\n      hit: [],\n      sunk: false\n    };\n\n    var hit = function hit(coordinate) {\n      return props.hit.push(coordinate);\n    };\n\n    var isSunk = function isSunk() {\n      // Sorts location and hit array numerically so it can be parsed into a string and compared.\n      var hitValues = props.hit.sort(function (a, b) {\n        return a - b;\n      });\n      var locationValues = props.location.sort(function (a, b) {\n        return a - b;\n      });\n      return JSON.stringify(hitValues) === JSON.stringify(locationValues) ? props.sunk = true : props.sunk = false;\n    };\n\n    return {\n      props: props,\n      hit: hit,\n      isSunk: isSunk\n    };\n  };\n\n  var _default = Ship;\n  _exports[\"default\"] = _default;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/modules/Ship.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = void 0;\n\n  var UI = function () {\n    var UISelectors = {\n      startBtn: '#start-button',\n      container: '#container',\n      userBoard: '#user-board',\n      computerBoard: '#computer-board'\n    };\n\n    var $ = function $(element) {\n      return document.querySelector(element);\n    };\n\n    var rows = 10;\n    var cols = 10;\n    return {\n      renderGrid: function renderGrid(player) {\n        var grid = document.createElement('div');\n        grid.id = player;\n        grid.classList.add('board');\n\n        for (var i = 0; i < rows * cols; i++) {\n          var cell = document.createElement('div');\n          cell.id = i + 1;\n          cell.classList.add('grid-item');\n          cell.textContent = i + 1;\n          grid.appendChild(cell);\n        }\n\n        $(UISelectors.container).appendChild(grid);\n      },\n      getSelectors: function getSelectors() {\n        return UISelectors;\n      }\n    };\n  }();\n\n  var _default = UI;\n  _exports[\"default\"] = _default;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/modules/UI.js?");

/***/ })

/******/ });
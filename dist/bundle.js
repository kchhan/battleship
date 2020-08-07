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

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! ./modules/Player */ \"./src/modules/Player.js\"), __webpack_require__(/*! ./modules/Gameboard */ \"./src/modules/Gameboard.js\"), __webpack_require__(/*! ./modules/UI */ \"./src/modules/UI.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_Player, _Gameboard, _UI) {\n  \"use strict\";\n\n  _Player = _interopRequireDefault(_Player);\n  _Gameboard = _interopRequireDefault(_Gameboard);\n  _UI = _interopRequireDefault(_UI);\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n  var App = function (UI, Player, Gameboard) {\n    var user = Player();\n    var computer = Player();\n    var userBoard = Gameboard();\n    var computerBoard = Gameboard();\n\n    var loadEventListeners = function loadEventListeners() {\n      var UISelectors = UI.getSelectors(); // computerGrid is the only playable area\n\n      document.querySelector(UISelectors.computerGrid).addEventListener('click', playGame);\n      document.querySelector(UISelectors.resetBtn).addEventListener('click', resetGame);\n    }; // user goes first and computer moves after\n\n\n    var playGame = function playGame(e, coordinate) {\n      if (e.target.classList.contains('grid-item')) {\n        coordinate = Number(e.target.id);\n      }\n\n      if (!userBoard.props.gameover && !computerBoard.props.gameover) {\n        if (!e.target.classList.contains('hit') && !e.target.classList.contains('miss') && !e.target.classList.contains('sunk')) {\n          userMove(coordinate);\n          setTimeout(computerMove, 100);\n        }\n      }\n\n      if (userBoard.props.gameover) {\n        gameover('computer');\n      }\n\n      if (computerBoard.props.gameover) {\n        gameover('user');\n      }\n    }; // first checks if valid move then updates UI;\n\n\n    var userMove = function userMove(coordinate) {\n      if (!user.moves.includes(coordinate)) {\n        user.userMove(coordinate);\n        var response = computerBoard.receiveAttack(coordinate);\n        computerBoard.checkSunk();\n        UI.updateGrid('computer', coordinate, response);\n        UI.updateSunk('computer', computerBoard.props.ships);\n      }\n    };\n\n    var computerMove = function computerMove() {\n      var coordinate = computer.randomMove();\n      var response = userBoard.receiveAttack(coordinate);\n      userBoard.checkSunk();\n      UI.updateGrid('user', coordinate, response);\n      UI.updateSunk('user', userBoard.props.ships);\n    };\n\n    var newGame = function newGame() {\n      clearBoard();\n      renderBoards();\n      generateShips();\n      renderShips();\n      loadEventListeners();\n    };\n\n    var renderBoards = function renderBoards() {\n      UI.renderGrid('user-grid');\n      UI.renderGrid('computer-grid');\n    }; // predetermined ship coordinates\n\n\n    var generateShips = function generateShips() {\n      userBoard.createShip('carrier', 5, [37, 47, 57, 67, 77]);\n      userBoard.createShip('battleship', 4, [14, 15, 16, 17]);\n      userBoard.createShip('cruiser', 3, [53, 63, 73]);\n      userBoard.createShip('submarine', 3, [88, 89, 90]);\n      userBoard.createShip('destroyer', 2, [21, 31]);\n      computerBoard.createShip('carrier', 5, [12, 13, 14, 15, 16]);\n      computerBoard.createShip('battleship', 4, [95, 96, 97, 98]);\n      computerBoard.createShip('cruiser', 3, [35, 45, 55]);\n      computerBoard.createShip('submarine', 3, [61, 71, 81]);\n      computerBoard.createShip('destroyer', 2, [49, 50]);\n    };\n\n    var renderShips = function renderShips() {\n      UI.renderUserShips(userBoard.props.ships);\n    };\n\n    var clearBoard = function clearBoard() {\n      UI.clearBoard();\n    }; // winner is determined in playGame\n\n\n    var gameover = function gameover(winner) {\n      UI.announceWinner(winner);\n    }; // resets both Players and Gameboards\n\n\n    var resetGame = function resetGame() {\n      user.clearMoves();\n      userBoard.clearGameboard();\n      computer.clearMoves();\n      computerBoard.clearGameboard();\n      UI.clearAnnouncement();\n      newGame();\n    };\n\n    return {\n      init: function init() {\n        newGame();\n      }\n    };\n  }(_UI[\"default\"], _Player[\"default\"], _Gameboard[\"default\"]);\n\n  App.init();\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/Gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/Gameboard.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports, __webpack_require__(/*! ./Ship */ \"./src/modules/Ship.js\")], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports, _Ship) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = void 0;\n  _Ship = _interopRequireDefault(_Ship);\n\n  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { \"default\": obj }; }\n\n  var Gameboard = function Gameboard() {\n    var props = {\n      shipsLeft: 5,\n      ships: [],\n      missedShots: [],\n      gameover: false\n    };\n\n    var createShip = function createShip(name, length, location) {\n      var ship = (0, _Ship[\"default\"])(name, length, location);\n      return props.ships.push(ship);\n    };\n\n    var receiveAttack = function receiveAttack(coordinate) {\n      var hit = false;\n      props.ships.forEach(function (obj) {\n        if (obj.props.location.includes(coordinate)) {\n          obj.props.hit.push(coordinate);\n          hit = true;\n        }\n      });\n\n      if (!hit) {\n        props.missedShots.push(coordinate);\n      } // returns a response for updateGrid\n\n\n      return !hit ? 'miss' : 'hit';\n    };\n\n    var checkSunk = function checkSunk() {\n      // should filter out already sunk ships so not counted twice\n      var filteredShips = props.ships.filter(function (ship) {\n        if (!ship.props.sunk) {\n          return ship;\n        }\n      });\n      filteredShips.forEach(function (obj) {\n        // then checks for sunk ships from current move\n        obj.isSunk();\n\n        if (obj.props.sunk) {\n          props.shipsLeft--;\n        }\n      }); // if no ships are left then it is gameover and there is a winner\n\n      if (props.shipsLeft === 0) {\n        return props.gameover = true;\n      }\n    };\n\n    var clearGameboard = function clearGameboard() {\n      props.shipsLeft = 5;\n      props.ships = [];\n      props.missedShots = [];\n      props.gameover = false;\n    };\n\n    return {\n      props: props,\n      createShip: createShip,\n      receiveAttack: receiveAttack,\n      checkSunk: checkSunk,\n      clearGameboard: clearGameboard\n    };\n  };\n\n  var _default = Gameboard;\n  _exports[\"default\"] = _default;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/modules/Gameboard.js?");

/***/ }),

/***/ "./src/modules/Player.js":
/*!*******************************!*\
  !*** ./src/modules/Player.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = void 0;\n\n  var Player = function Player() {\n    // to keep track of played moves\n    var moves = []; // computer randomly chooses a number between 1 and 100 to play\n\n    var randomMove = function randomMove() {\n      var coordinate = Math.floor(Math.random() * 100 + 1);\n\n      if (!moves.includes(coordinate)) {\n        moves.push(coordinate);\n        return coordinate;\n      }\n\n      return randomMove();\n    }; // the user specifies a move\n\n\n    var userMove = function userMove(coordinate) {\n      if (!moves.includes(coordinate)) {\n        moves.push(coordinate);\n        return coordinate;\n      }\n    };\n\n    var clearMoves = function clearMoves() {\n      return moves = [];\n    };\n\n    return {\n      moves: moves,\n      randomMove: randomMove,\n      userMove: userMove,\n      clearMoves: clearMoves\n    };\n  };\n\n  var _default = Player;\n  _exports[\"default\"] = _default;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/modules/Player.js?");

/***/ }),

/***/ "./src/modules/Ship.js":
/*!*****************************!*\
  !*** ./src/modules/Ship.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = void 0;\n\n  var Ship = function Ship(name, length, location) {\n    var props = {\n      name: name,\n      length: length,\n      location: location,\n      hit: [],\n      sunk: false\n    };\n\n    var hit = function hit(coordinate) {\n      return props.hit.push(coordinate);\n    };\n\n    var isSunk = function isSunk() {\n      // Sorts location and hit array numerically so it can be parsed into JSON and compared.\n      var hitValues = props.hit.sort(function (a, b) {\n        return a - b;\n      });\n      var locationValues = props.location.sort(function (a, b) {\n        return a - b;\n      });\n      return JSON.stringify(hitValues) === JSON.stringify(locationValues) ? props.sunk = true : props.sunk = false;\n    };\n\n    return {\n      props: props,\n      hit: hit,\n      isSunk: isSunk\n    };\n  };\n\n  var _default = Ship;\n  _exports[\"default\"] = _default;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/modules/Ship.js?");

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (_exports) {\n  \"use strict\";\n\n  Object.defineProperty(_exports, \"__esModule\", {\n    value: true\n  });\n  _exports[\"default\"] = void 0;\n\n  var UI = function () {\n    var UISelectors = {\n      container: '#container',\n      userGrid: '#user-grid',\n      computerGrid: '#computer-grid',\n      resetBtn: '#reset-button',\n      announcement: '#announcement'\n    }; // for brevity\n\n    var $ = function $(element) {\n      return document.querySelector(element);\n    }; // game traditionally 10x10\n\n\n    var rows = 10;\n    var cols = 10;\n    return {\n      renderGrid: function renderGrid(player) {\n        var grid = document.createElement('div');\n        grid.id = player;\n        grid.classList.add('board');\n\n        for (var i = 0; i < rows * cols; i++) {\n          var cell = document.createElement('div');\n          cell.id = i + 1;\n          cell.classList.add('grid-item');\n          cell.textContent = i + 1;\n          grid.appendChild(cell);\n        }\n\n        $(UISelectors.container).appendChild(grid);\n      },\n      // rendering only the user's ships as per normal game rules\n      renderUserShips: function renderUserShips(shipList) {\n        var grid = $(UISelectors.userGrid);\n        shipList.forEach(function (ship) {\n          ship.props.location.forEach(function (cell) {\n            grid.children[cell - 1].classList.add('ship');\n          });\n        });\n      },\n      // adds a miss or hit class to the grid-item to change its color\n      updateGrid: function updateGrid(player, coordinate, response) {\n        switch (player) {\n          case 'user':\n            $(UISelectors.userGrid).children[coordinate - 1].classList.add(response);\n            break;\n\n          case 'computer':\n            $(UISelectors.computerGrid).children[coordinate - 1].classList.add(response);\n            break;\n        }\n      },\n      // if ship is sunk it will turn red\n      updateSunk: function updateSunk(player, shipList) {\n        switch (player) {\n          case 'user':\n            shipList.forEach(function (ship) {\n              if (ship.props.sunk) {\n                ship.props.location.forEach(function (location) {\n                  $(UISelectors.userGrid).children[location - 1].classList.remove('hit');\n                  $(UISelectors.userGrid).children[location - 1].classList.add('sunk');\n                });\n              }\n            });\n            break;\n\n          case 'computer':\n            shipList.forEach(function (ship) {\n              if (ship.props.sunk) {\n                ship.props.location.forEach(function (location) {\n                  $(UISelectors.computerGrid).children[location - 1].classList.remove('hit');\n                  $(UISelectors.computerGrid).children[location - 1].classList.add('sunk');\n                });\n              }\n            });\n            break;\n        }\n      },\n      announceWinner: function announceWinner(winner) {\n        var text = '';\n\n        switch (winner) {\n          case 'user':\n            text += 'YOU WIN';\n            break;\n\n          case 'computer':\n            text += 'COMPUTER WINS';\n            break;\n        }\n\n        $(UISelectors.announcement).textContent = text;\n      },\n      clearAnnouncement: function clearAnnouncement() {\n        $(UISelectors.announcement).innerHTML = '';\n      },\n      clearBoard: function clearBoard() {\n        $(UISelectors.container).innerHTML = '';\n      },\n      getSelectors: function getSelectors() {\n        return UISelectors;\n      }\n    };\n  }();\n\n  var _default = UI;\n  _exports[\"default\"] = _default;\n}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\n//# sourceURL=webpack:///./src/modules/UI.js?");

/***/ })

/******/ });
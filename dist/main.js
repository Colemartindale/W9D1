/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/astroid.js":
/*!************************!*\
  !*** ./src/astroid.js ***!
  \************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("let Util = __webpack_require__(/*! ./util.js */ \"./src/util.js\")\nlet MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\")\n\nfunction Astroid(pos){\n  let object = {};\n  // console.log(this)\n  object.color = \"yellow\";\n  object.radius = 25;\n  object.pos = pos;\n  object.vel = Util.randomVec(4)\n  MovingObject.call(this, object)\n};\n\nUtil.inherits(Astroid, MovingObject);\n\nmodule.exports = Astroid;\n\n//# sourceURL=webpack:///./src/astroid.js?");

/***/ }),

/***/ "./src/game.js":
/*!*********************!*\
  !*** ./src/game.js ***!
  \*********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("const Astroid = __webpack_require__(/*! ./astroid.js */ \"./src/astroid.js\")\nconst GAMECONSTANTS = {\n  DIM_X: 1013,\n  DIM_Y: 970,\n  NUM_ASTROIDS: 22\n}\n\nfunction Game (ctx){\n  this.astroids = [];\n  this.addAstroids();\n  this.draw(ctx)\n  console.log(this.astroids)\n}\n\nGame.prototype.addAstroids = function (){\n  for (let i = 0; i < GAMECONSTANTS.NUM_ASTROIDS; i++) {\n    this.astroids.push(new Astroid(this.randomPosition()));\n  }\n}\n\nGame.prototype.randomPosition = function() {\n  return [(Math.random() * GAMECONSTANTS.DIM_X), (Math.random() * GAMECONSTANTS.DIM_Y)];\n}\n\nGame.prototype.draw = function (ctx) {\n  ctx.clearRect(0, 0, GAMECONSTANTS.DIM_Y, GAMECONSTANTS.DIM_Y);\n  this.astroids.forEach( (astroid) => {\n    console.log(astroid);\n    astroid.draw(ctx);\n  })\n}\n\nGame.prototype.moveObjects = function () {\n\n}\n\nmodule.exports = Game;\n\n//# sourceURL=webpack:///./src/game.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

eval("const MovingObject = __webpack_require__(/*! ./moving_object.js */ \"./src/moving_object.js\");\nconst Asteroid = __webpack_require__(/*! ./astroid.js */ \"./src/astroid.js\")\nconst Game = __webpack_require__(/*! ./game.js */ \"./src/game.js\")\nwindow.MovingObject = MovingObject;\nconsole.log(\"webpack is here, bro!\")\n\nwindow.addEventListener('DOMContentLoaded', (event) => {\n  const canvas = document.getElementById('game-canvas');\n  canvas.width = window.innerWidth\n  canvas.height = window.innerHeight\n  let ctx = canvas.getContext(\"2d\");\n  ctx.fillStyle = \"black\"\n  ctx.fillRect(0, 0, canvas.height, canvas.width)\n  // const mo = new Asteroid([50,500]);\n  //   console.log(mo)\n  //   mo.draw(ctx)\n  //   window.ctx = ctx\n  //   console.log(ctx)\n  const ga = new Game(ctx)\n  // ga.draw(ctx)\n});\n\n\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/moving_object.js":
/*!******************************!*\
  !*** ./src/moving_object.js ***!
  \******************************/
/***/ ((module) => {

eval("function MovingObject(object) {\n  this.pos = object.pos;\n  this.vel = object.vel;\n  this.radius = object.radius;\n  this.color = object.color;\n}\n\n// MovingObject.prototype.render = function (ctx) {\n//   console.log(ctx)\n//   ctx.fillStyle = this.color;\n//   ctx.beginPath();\n\n//   ctx.arc(\n//     this.centerX,\n//     this.centerY,\n//     this.radius,\n//     0,\n//     2 * Math.PI,\n//     false\n//   );\n\n//   ctx.fill();\n// };\n\nMovingObject.prototype.draw = function(ctx) {\n  ctx.beginPath();\n  ctx.arc(this.pos[0], this.pos[1], this.radius, 0, 2 * Math.PI, false);\n  ctx.fillStyle = this.color;\n  ctx.fill();\n}\n\n\n\nmodule.exports = MovingObject;\n\n\n\n//# sourceURL=webpack:///./src/moving_object.js?");

/***/ }),

/***/ "./src/util.js":
/*!*********************!*\
  !*** ./src/util.js ***!
  \*********************/
/***/ ((module) => {

eval(" // Return a randomly oriented vector with the given length.\nconst Util = {\n  randomVec(length) {\n    const deg = 2 * Math.PI * Math.random();\n    return Util.scale([Math.sin(deg), Math.cos(deg)], length);\n  },\n  // Scale the length of a vector by the given amount.\n  scale(vec, m) {\n    return [vec[0] * m, vec[1] * m];\n  },\n\n inherits(childClass, parentClass) {\n    function Surrogate () {}\n    Surrogate.prototype = parentClass.prototype;\n    childClass.prototype = new Surrogate();\n    childClass.prototype.constructor = childClass;\n   }\n};\n\nmodule.exports = Util;\n\n//# sourceURL=webpack:///./src/util.js?");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
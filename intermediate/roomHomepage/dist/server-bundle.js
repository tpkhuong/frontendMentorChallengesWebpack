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

/***/ "./backend/server/devServer.js":
/*!*************************************!*\
  !*** ./backend/server/devServer.js ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar webpackDevMiddleware = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n\nvar webpackHotMiddleware = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n\nvar config = __webpack_require__(/*! ../../webpack.config.client.dev */ \"./webpack.config.client.dev.js\");\n\nfunction compile(app) {\n  if (true) {\n    var compiler = webpack(config);\n    var middleware = webpackDevMiddleware(compiler, {\n      publicPath: config.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpackHotMiddleware(compiler));\n  }\n}\n\nmodule.exports = {\n  compile: compile\n};\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(compile, \"compile\", \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/intermediate/roomHomepage/backend/server/devServer.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://roomhomepage/./backend/server/devServer.js?");

/***/ }),

/***/ "./backend/server/server.js":
/*!**********************************!*\
  !*** ./backend/server/server.js ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("/* module decorator */ module = __webpack_require__.nmd(module);\n(function () {\n  var enterModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.enterModule : undefined;\n  enterModule && enterModule(module);\n})();\n\nvar __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar devServer = __webpack_require__(/*! ./devServer */ \"./backend/server/devServer.js\"); // const webpack = require(\"webpack\");\n// const webpackDevMiddleware = require(\"webpack-dev-middleware\");\n// const webpackHotMiddleware = require(\"webpack-hot-middleware\");\n// const config = require(\"../../webpack.config.client.dev\");\n\n\n(__webpack_require__(/*! dotenv */ \"dotenv\").config)();\n\nvar app = express();\nvar DIST_DIR = path.join(__dirname, \"../../dist\");\nvar HTML_FILE = path.join(DIST_DIR, \"index.html\"); // function compile(app) {\n//     if (process.env.NODE_ENV == \"development\") {\n//         const compiler = webpack(config);\n//         const middleware = webpackDevMiddleware(compiler, {\n//             publicPath: config.output.publicPath\n//         })\n//         app.use(middleware);\n//         app.use(webpackHotMiddleware(compiler));\n//     }\n// }\n\ndevServer.compile(app); // dev middleware\n// hot middleware\n// use static file\n// app.get(\"/\", function initial(req, res) {\n//   res.status(200).send(\"Hello World\");\n// });\n\napp.use(\"/\", express[\"static\"](DIST_DIR));\napp.get(\"/\", function entryPoint(req, res) {\n  res.status(200).sendFile(HTML_FILE);\n});\napp.listen(process.env.PORT, function startServer(req, res) {\n  console.log(\"Listening on port \".concat(process.env.PORT));\n});\n;\n\n(function () {\n  var reactHotLoader = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.default : undefined;\n\n  if (!reactHotLoader) {\n    return;\n  }\n\n  reactHotLoader.register(app, \"app\", \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/intermediate/roomHomepage/backend/server/server.js\");\n  reactHotLoader.register(DIST_DIR, \"DIST_DIR\", \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/intermediate/roomHomepage/backend/server/server.js\");\n  reactHotLoader.register(HTML_FILE, \"HTML_FILE\", \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/intermediate/roomHomepage/backend/server/server.js\");\n})();\n\n;\n\n(function () {\n  var leaveModule = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal.leaveModule : undefined;\n  leaveModule && leaveModule(module);\n})();\n\n//# sourceURL=webpack://roomhomepage/./backend/server/server.js?");

/***/ }),

/***/ "./webpack.config.client.dev.js":
/*!**************************************!*\
  !*** ./webpack.config.client.dev.js ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("var __signature__ = typeof reactHotLoaderGlobal !== 'undefined' ? reactHotLoaderGlobal[\"default\"].signature : function (a) {\n  return a;\n};\n\nvar path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar HtmlWebpackPlugin = __webpack_require__(/*! html-webpack-plugin */ \"html-webpack-plugin\");\n\nvar dotenv = __webpack_require__(/*! dotenv */ \"dotenv\");\n\nmodule.exports = {\n  entry: [\"react-hot-loader/patch\", \"webpack-hot-middleware/client?reload=true\", path.join(__dirname, \"frontned/main.js\")],\n  module: {\n    rules: [{\n      test: /\\.css$/,\n      use: [{\n        loader: \"style-loader\"\n      }, {\n        loader: \"css-loader\"\n      }]\n    }, {\n      test: /\\.(js|jsx)/,\n      excludes: /node_modules/,\n      use: {\n        loader: \"babel-loader\"\n      }\n    }]\n  },\n  output: {\n    path: path.join(__dirname, \"dist\"),\n    filename: \"[name]-bundle.js\",\n    publicPath: \"./dist\"\n  },\n  plugins: [new HtmlWebpackPlugin({\n    template: \"frontend/src/index.html\"\n  }), new webpack.NoEmitOnErrorsPlugin(), new webpack.HotModuleReplacementPlugin()],\n  mode: \"development\",\n  devtool: \"eval-source-map\"\n};\n/**\n * use nodemon demo.pde to run nodemon.json file\n * **/\n\n//# sourceURL=webpack://roomhomepage/./webpack.config.client.dev.js?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("dotenv");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("express");

/***/ }),

/***/ "html-webpack-plugin":
/*!**************************************!*\
  !*** external "html-webpack-plugin" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("html-webpack-plugin");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-dev-middleware");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("webpack-hot-middleware");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("path");

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
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./backend/server/server.js");
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;
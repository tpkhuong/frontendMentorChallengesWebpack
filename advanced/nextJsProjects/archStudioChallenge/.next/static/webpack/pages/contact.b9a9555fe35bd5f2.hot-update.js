"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/contact",{

/***/ "./Components/ContactPage/Main/MapSection.js":
/*!***************************************************!*\
  !*** ./Components/ContactPage/Main/MapSection.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Contact_MapSection_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../styles/Contact/MapSection.module.css */ \"./styles/Contact/MapSection.module.css\");\n/* harmony import */ var _styles_Contact_MapSection_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_MapSection_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! mapbox-gl */ \"./node_modules/mapbox-gl/dist/mapbox-gl.js\");\n/* harmony import */ var mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mapbox-gl/dist/mapbox-gl.css */ \"./node_modules/mapbox-gl/dist/mapbox-gl.css\");\n/* harmony import */ var mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mapbox_gl_dist_mapbox_gl_css__WEBPACK_IMPORTED_MODULE_3__);\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\n\n\n\n\n\nvar _s = $RefreshSig$();\n// mapboxgl.accessToken = `${process.env.MAPBOX_API}`;\n// const Map = ReactMapboxGl({\n//   accessToken: process.env.MAPBOX_API,\n// });\nfunction MapSection(_param) {\n    var children = _param.children, props = _objectWithoutProperties(_param, [\n        \"children\"\n    ]);\n    _s();\n    console.log(\"pk.eyJ1IjoidHBraHVvbmciLCJhIjoiY2wzZDYxdTNvMDVmNzNjbnliamU4aTJkZSJ9.HX4mnFavw_D4zCcuj8tu9g\");\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), pageIsMounted = ref[0], setPageIsMounted = ref[1];\n    react__WEBPACK_IMPORTED_MODULE_1___default().useEffect(function() {\n        setPageIsMounted(true);\n        var map = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Map)({\n            container: \"our-map\",\n            style: \"mapbox://styles/mapbox/streets-v11\",\n            accessToken: \"\".concat(\"pk.eyJ1IjoidHBraHVvbmciLCJhIjoiY2wzZDYxdTNvMDVmNzNjbnliamU4aTJkZSJ9.HX4mnFavw_D4zCcuj8tu9g\"),\n            // lng,lat\n            center: [\n                -91.831833,\n                35.20105\n            ],\n            zoom: 5,\n            projection: \"globe\"\n        });\n        var marker1 = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Marker)().setLngLat([\n            -86.686206,\n            36.2062843\n        ]).addTo(map);\n        var marker2 = new (mapbox_gl__WEBPACK_IMPORTED_MODULE_2___default().Marker)().setLngLat([\n            -74.6,\n            40.5\n        ]).addTo(map);\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Contact_MapSection_module_css__WEBPACK_IMPORTED_MODULE_4___default().map),\n        id: \"our-map\"\n    }, void 0, false, {\n        fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/MapSection.js\",\n        lineNumber: 31,\n        columnNumber: 10\n    }, this);\n}\n_s(MapSection, \"ZxYVMPinGoeBJwpDQu68kIN3X+I=\");\n_c = MapSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MapSection);\nvar _c;\n$RefreshReg$(_c, \"MapSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NvbnRhY3RQYWdlL01haW4vTWFwU2VjdGlvbi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUM0QztBQUNyQztBQUNLOztBQUV0QyxzREFBc0Q7QUFFdEQsOEJBQThCO0FBQzlCLHlDQUF5QztBQUN6QyxNQUFNO0FBRU4sU0FBU0csVUFBVSxDQUFDLE1BQXNCLEVBQUU7UUFBdEJDLFFBQVEsR0FBVixNQUFzQixDQUFwQkEsUUFBUSxFQUFLQyxLQUFLLDRCQUFwQixNQUFzQjtRQUFwQkQsVUFBUTs7O0lBQzVCRSxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsNEZBQWtDLENBQUMsQ0FBQztJQUNoRCxJQUEwQ1IsR0FBcUIsa0JBQXJCQSxxREFBYyxDQUFDLEtBQUssQ0FBQyxNQUF4RFksYUFBYSxHQUFzQlosR0FBcUIsR0FBM0MsRUFBRWEsZ0JBQWdCLEdBQUliLEdBQXFCLEdBQXpCO0lBQ3RDQSxzREFBZSxDQUFDLFdBQU07UUFDcEJhLGdCQUFnQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3ZCLElBQU1FLEdBQUcsR0FBRyxJQUFJYixzREFBWSxDQUFDO1lBQzNCZSxTQUFTLEVBQUUsU0FBUztZQUNwQkMsS0FBSyxFQUFFLG9DQUFvQztZQUMzQ0MsV0FBVyxFQUFFLEVBQUMsQ0FBcUMsT0FBbkNYLDRGQUFrQyxDQUFFO1lBQ3BELFVBQVU7WUFDVlksTUFBTSxFQUFFO2dCQUFDLENBQUMsU0FBUztBQUFFLHdCQUFRO2FBQUM7WUFDOUJDLElBQUksRUFBRSxDQUFDO1lBQ1BDLFVBQVUsRUFBRSxPQUFPO1NBQ3BCLENBQUM7UUFDRixJQUFNQyxPQUFPLEdBQUcsSUFBSXJCLHlEQUFlLEVBQUUsQ0FDbEN1QixTQUFTLENBQUM7WUFBQyxDQUFDLFNBQVM7QUFBRSxzQkFBVTtTQUFDLENBQUMsQ0FDbkNDLEtBQUssQ0FBQ1gsR0FBRyxDQUFDO1FBQ2IsSUFBTVksT0FBTyxHQUFHLElBQUl6Qix5REFBZSxFQUFFLENBQUN1QixTQUFTLENBQUM7WUFBQyxDQUFDLElBQUk7QUFBRSxnQkFBSTtTQUFDLENBQUMsQ0FBQ0MsS0FBSyxDQUFDWCxHQUFHLENBQUM7S0FDMUUsQ0FBQyxDQUFDO0lBQ0gscUJBQU8sOERBQUNhLEtBQUc7UUFBQ0MsU0FBUyxFQUFFNUIsa0ZBQWdCO1FBQUU2QixFQUFFLEVBQUMsU0FBUzs7Ozs7WUFBTyxDQUFDO0NBQzlEO0dBcEJRM0IsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBc0JuQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQ29udGFjdFBhZ2UvTWFpbi9NYXBTZWN0aW9uLmpzPzRlNWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IE1hcFN0eWxlcyBmcm9tIFwiLi4vLi4vLi4vc3R5bGVzL0NvbnRhY3QvTWFwU2VjdGlvbi5tb2R1bGUuY3NzXCI7XG5pbXBvcnQgbWFwYm94Z2wgZnJvbSBcIm1hcGJveC1nbFwiO1xuaW1wb3J0IFwibWFwYm94LWdsL2Rpc3QvbWFwYm94LWdsLmNzc1wiO1xuXG4vLyBtYXBib3hnbC5hY2Nlc3NUb2tlbiA9IGAke3Byb2Nlc3MuZW52Lk1BUEJPWF9BUEl9YDtcblxuLy8gY29uc3QgTWFwID0gUmVhY3RNYXBib3hHbCh7XG4vLyAgIGFjY2Vzc1Rva2VuOiBwcm9jZXNzLmVudi5NQVBCT1hfQVBJLFxuLy8gfSk7XG5cbmZ1bmN0aW9uIE1hcFNlY3Rpb24oeyBjaGlsZHJlbiwgLi4ucHJvcHMgfSkge1xuICBjb25zb2xlLmxvZyhwcm9jZXNzLmVudi5ORVhUX1BVQkxJQ19NQVBCT1hfQVBJKTtcbiAgY29uc3QgW3BhZ2VJc01vdW50ZWQsIHNldFBhZ2VJc01vdW50ZWRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuICBSZWFjdC51c2VFZmZlY3QoKCkgPT4ge1xuICAgIHNldFBhZ2VJc01vdW50ZWQodHJ1ZSk7XG4gICAgY29uc3QgbWFwID0gbmV3IG1hcGJveGdsLk1hcCh7XG4gICAgICBjb250YWluZXI6IFwib3VyLW1hcFwiLFxuICAgICAgc3R5bGU6IFwibWFwYm94Oi8vc3R5bGVzL21hcGJveC9zdHJlZXRzLXYxMVwiLFxuICAgICAgYWNjZXNzVG9rZW46IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX01BUEJPWF9BUEl9YCxcbiAgICAgIC8vIGxuZyxsYXRcbiAgICAgIGNlbnRlcjogWy05MS44MzE4MzMsIDM1LjIwMTA1XSxcbiAgICAgIHpvb206IDUsXG4gICAgICBwcm9qZWN0aW9uOiBcImdsb2JlXCIsXG4gICAgfSk7XG4gICAgY29uc3QgbWFya2VyMSA9IG5ldyBtYXBib3hnbC5NYXJrZXIoKVxuICAgICAgLnNldExuZ0xhdChbLTg2LjY4NjIwNiwgMzYuMjA2Mjg0M10pXG4gICAgICAuYWRkVG8obWFwKTtcbiAgICBjb25zdCBtYXJrZXIyID0gbmV3IG1hcGJveGdsLk1hcmtlcigpLnNldExuZ0xhdChbLTc0LjYsIDQwLjVdKS5hZGRUbyhtYXApO1xuICB9KTtcbiAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXtNYXBTdHlsZXNbYG1hcGBdfSBpZD1cIm91ci1tYXBcIj48L2Rpdj47XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1hcFNlY3Rpb247XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJNYXBTdHlsZXMiLCJtYXBib3hnbCIsIk1hcFNlY3Rpb24iLCJjaGlsZHJlbiIsInByb3BzIiwiY29uc29sZSIsImxvZyIsInByb2Nlc3MiLCJlbnYiLCJORVhUX1BVQkxJQ19NQVBCT1hfQVBJIiwidXNlU3RhdGUiLCJwYWdlSXNNb3VudGVkIiwic2V0UGFnZUlzTW91bnRlZCIsInVzZUVmZmVjdCIsIm1hcCIsIk1hcCIsImNvbnRhaW5lciIsInN0eWxlIiwiYWNjZXNzVG9rZW4iLCJjZW50ZXIiLCJ6b29tIiwicHJvamVjdGlvbiIsIm1hcmtlcjEiLCJNYXJrZXIiLCJzZXRMbmdMYXQiLCJhZGRUbyIsIm1hcmtlcjIiLCJkaXYiLCJjbGFzc05hbWUiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./Components/ContactPage/Main/MapSection.js\n");

/***/ })

});
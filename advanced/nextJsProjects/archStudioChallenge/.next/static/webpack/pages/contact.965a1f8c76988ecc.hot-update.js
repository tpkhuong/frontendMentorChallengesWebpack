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

/***/ "./Components/ContactPage/Main/ContactDetailsSection.js":
/*!**************************************************************!*\
  !*** ./Components/ContactPage/Main/ContactDetailsSection.js ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_Contact_ContactDetailsSection_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../styles/Contact/ContactDetailsSection.module.css */ \"./styles/Contact/ContactDetailsSection.module.css\");\n/* harmony import */ var _styles_Contact_ContactDetailsSection_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Contact_ContactDetailsSection_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _pages_api_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../pages/api/storage */ \"./pages/api/storage.js\");\n/* harmony import */ var _InfoDetails__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./InfoDetails */ \"./Components/ContactPage/Main/InfoDetails.js\");\n/* harmony import */ var _Address__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Address */ \"./Components/ContactPage/Main/Address.js\");\n/* harmony import */ var _LinkButton__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../LinkButton */ \"./Components/LinkButton.js\");\nfunction _objectWithoutProperties(source, excluded) {\n    if (source == null) return {};\n    var target = _objectWithoutPropertiesLoose(source, excluded);\n    var key, i;\n    if (Object.getOwnPropertySymbols) {\n        var sourceSymbolKeys = Object.getOwnPropertySymbols(source);\n        for(i = 0; i < sourceSymbolKeys.length; i++){\n            key = sourceSymbolKeys[i];\n            if (excluded.indexOf(key) >= 0) continue;\n            if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;\n            target[key] = source[key];\n        }\n    }\n    return target;\n}\nfunction _objectWithoutPropertiesLoose(source, excluded) {\n    if (source == null) return {};\n    var target = {};\n    var sourceKeys = Object.keys(source);\n    var key, i;\n    for(i = 0; i < sourceKeys.length; i++){\n        key = sourceKeys[i];\n        if (excluded.indexOf(key) >= 0) continue;\n        target[key] = source[key];\n    }\n    return target;\n}\n\n\n\n\n\n\n\nfunction DetailsSection(_param) {\n    var childre = _param.childre, props = _objectWithoutProperties(_param, [\n        \"childre\"\n    ]);\n    var firstOffice = _pages_api_storage__WEBPACK_IMPORTED_MODULE_2__.detailsAddressContent.firstOffice, secondOffice = _pages_api_storage__WEBPACK_IMPORTED_MODULE_2__.detailsAddressContent.secondOffice;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n        className: (_styles_Contact_ContactDetailsSection_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"contact-details\"]),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                className: (_styles_Contact_ContactDetailsSection_module_css__WEBPACK_IMPORTED_MODULE_6___default().title),\n                children: \"Contact Details\"\n            }, void 0, false, {\n                fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n                lineNumber: 13,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Contact_ContactDetailsSection_module_css__WEBPACK_IMPORTED_MODULE_6___default()[\"address-content-container\"]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Address__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: [\n                            \"Main Office\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InfoDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                children: [\n                                    firstOffice.email,\n                                    firstOffice.address,\n                                    firstOffice.telephone\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n                                lineNumber: 21,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                linkRef: \"/contact\",\n                                btnStyle: \"contect-btn\",\n                                children: \"View on Map\"\n                            }, void 0, false, {\n                                fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n                                lineNumber: 30,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n                        lineNumber: 19,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Address__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        children: [\n                            \"Office II\",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InfoDetails__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                children: [\n                                    secondOffice.email,\n                                    secondOffice.address,\n                                    secondOffice.telephone\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n                                lineNumber: 37,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkButton__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                linkRef: \"/contact\",\n                                btnStyle: \"contect-btn\"\n                            }, void 0, false, {\n                                fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n                                lineNumber: 46,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n                lineNumber: 15,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/tkhuong/ourCode/learning/frntEndMentorChallengesWebpack/advanced/nextJsProjects/archStudioChallenge/Components/ContactPage/Main/ContactDetailsSection.js\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_c = DetailsSection;\n/* harmony default export */ __webpack_exports__[\"default\"] = (DetailsSection);\nvar _c;\n$RefreshReg$(_c, \"DetailsSection\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9Db21wb25lbnRzL0NvbnRhY3RQYWdlL01haW4vQ29udGFjdERldGFpbHNTZWN0aW9uLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBMEI7QUFDMEQ7QUFDakI7QUFDM0I7QUFDUjtBQUNVO0FBRTFDLFNBQVNNLGNBQWMsQ0FBQyxNQUFxQixFQUFFO1FBQXJCQyxPQUFPLEdBQVQsTUFBcUIsQ0FBbkJBLE9BQU8sRUFBS0MsS0FBSyw0QkFBbkIsTUFBcUI7UUFBbkJELFNBQU87O0lBQy9CLElBQVFFLFdBQVcsR0FBbUJQLGlGQUFuQixFQUFFUSxZQUFZLEdBQUtSLGtGQUFMO0lBQ2pDLHFCQUNFLDhEQUFDUyxTQUFPO1FBQUNDLFNBQVMsRUFBRVgsNEdBQStCOzswQkFFakQsOERBQUNZLElBQUU7Z0JBQUNELFNBQVMsRUFBRVgsK0ZBQXFCOzBCQUFFLGlCQUFlOzs7OztvQkFBSzswQkFFMUQsOERBQUNhLEtBQUc7Z0JBQUNGLFNBQVMsRUFBRVgsc0hBQXlDOztrQ0FJdkQsOERBQUNHLGdEQUFPOzs0QkFDTCxhQUFhOzBDQUNkLDhEQUFDRCxvREFBVzs7b0NBRVRNLFdBQVcsQ0FBQ00sS0FBSztvQ0FFakJOLFdBQVcsQ0FBQ08sT0FBTztvQ0FFbkJQLFdBQVcsQ0FBQ1EsU0FBUzs7Ozs7O29DQUNWOzBDQUVkLDhEQUFDWixtREFBVTtnQ0FBQ2EsT0FBTyxFQUFDLFVBQVU7Z0NBQUNDLFFBQVEsRUFBQyxhQUFhOzBDQUFDLGFBRXREOzs7OztvQ0FBYTs7Ozs7OzRCQUNMO2tDQUVWLDhEQUFDZixnREFBTzs7NEJBQ0wsV0FBVzswQ0FDWiw4REFBQ0Qsb0RBQVc7O29DQUVUTyxZQUFZLENBQUNLLEtBQUs7b0NBRWxCTCxZQUFZLENBQUNNLE9BQU87b0NBRXBCTixZQUFZLENBQUNPLFNBQVM7Ozs7OztvQ0FDWDswQ0FFZCw4REFBQ1osbURBQVU7Z0NBQUNhLE9BQU8sRUFBQyxVQUFVO2dDQUFDQyxRQUFRLEVBQUMsYUFBYTs7Ozs7b0NBQUc7Ozs7Ozs0QkFDaEQ7Ozs7OztvQkFDTjs7Ozs7O1lBQ0UsQ0FDVjtDQUNIO0FBM0NRYixLQUFBQSxjQUFjO0FBNkN2QiwrREFBZUEsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL0NvbXBvbmVudHMvQ29udGFjdFBhZ2UvTWFpbi9Db250YWN0RGV0YWlsc1NlY3Rpb24uanM/ZThlNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgRGV0YWlsU3R5bGVzIGZyb20gXCIuLi8uLi8uLi9zdHlsZXMvQ29udGFjdC9Db250YWN0RGV0YWlsc1NlY3Rpb24ubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgZGV0YWlsc0FkZHJlc3NDb250ZW50IH0gZnJvbSBcIi4uLy4uLy4uL3BhZ2VzL2FwaS9zdG9yYWdlXCI7XG5pbXBvcnQgSW5mb0RldGFpbHMgZnJvbSBcIi4vSW5mb0RldGFpbHNcIjtcbmltcG9ydCBBZGRyZXNzIGZyb20gXCIuL0FkZHJlc3NcIjtcbmltcG9ydCBMaW5rQnV0dG9uIGZyb20gXCIuLi8uLi9MaW5rQnV0dG9uXCI7XG5cbmZ1bmN0aW9uIERldGFpbHNTZWN0aW9uKHsgY2hpbGRyZSwgLi4ucHJvcHMgfSkge1xuICBjb25zdCB7IGZpcnN0T2ZmaWNlLCBzZWNvbmRPZmZpY2UgfSA9IGRldGFpbHNBZGRyZXNzQ29udGVudDtcbiAgcmV0dXJuIChcbiAgICA8YXJ0aWNsZSBjbGFzc05hbWU9e0RldGFpbFN0eWxlc1tgY29udGFjdC1kZXRhaWxzYF19PlxuICAgICAgey8qIHNlY3Rpb24gdGl0bGUgKi99XG4gICAgICA8aDIgY2xhc3NOYW1lPXtEZXRhaWxTdHlsZXNbYHRpdGxlYF19PkNvbnRhY3QgRGV0YWlsczwvaDI+XG4gICAgICB7LyogYWRkcmVzcyBjb250ZW50IGNvbnRhaW5lciAqL31cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtEZXRhaWxTdHlsZXNbYGFkZHJlc3MtY29udGVudC1jb250YWluZXJgXX0+XG4gICAgICAgIHsvKiBtYWluIG9mZmljZSAqL31cbiAgICAgICAgey8qIHBhc3MgSW5mb0RldGFpbHMgYW5kIExpbmtCdXR0b24gY29tcG9uZW50cyB0byBBZGRyZXNzICovfVxuICAgICAgICB7LyogcGFzcyB2YWx1ZSBmcm9tIG9ianMgaW4gZGV0YWlsc0FkZHJlc3NDb250ZW50IGludG8gSW5mb0RldGFpbHMgKi99XG4gICAgICAgIDxBZGRyZXNzPlxuICAgICAgICAgIHtcIk1haW4gT2ZmaWNlXCJ9XG4gICAgICAgICAgPEluZm9EZXRhaWxzPlxuICAgICAgICAgICAgey8qIGVtYWlsICovfVxuICAgICAgICAgICAge2ZpcnN0T2ZmaWNlLmVtYWlsfVxuICAgICAgICAgICAgey8qIGhvbWUgYWRkcmVzcyAqL31cbiAgICAgICAgICAgIHtmaXJzdE9mZmljZS5hZGRyZXNzfVxuICAgICAgICAgICAgey8qIHRlbGVwaG9uZSAqL31cbiAgICAgICAgICAgIHtmaXJzdE9mZmljZS50ZWxlcGhvbmV9XG4gICAgICAgICAgPC9JbmZvRGV0YWlscz5cbiAgICAgICAgICB7LyogY29udGVjdCBidG4gKi99XG4gICAgICAgICAgPExpbmtCdXR0b24gbGlua1JlZj1cIi9jb250YWN0XCIgYnRuU3R5bGU9XCJjb250ZWN0LWJ0blwiPlxuICAgICAgICAgICAgVmlldyBvbiBNYXBcbiAgICAgICAgICA8L0xpbmtCdXR0b24+XG4gICAgICAgIDwvQWRkcmVzcz5cbiAgICAgICAgey8qIHNlY29uZCBvZmZpY2UgKi99XG4gICAgICAgIDxBZGRyZXNzPlxuICAgICAgICAgIHtcIk9mZmljZSBJSVwifVxuICAgICAgICAgIDxJbmZvRGV0YWlscz5cbiAgICAgICAgICAgIHsvKiBlbWFpbCAqL31cbiAgICAgICAgICAgIHtzZWNvbmRPZmZpY2UuZW1haWx9XG4gICAgICAgICAgICB7LyogaG9tZSBhZGRyZXNzICovfVxuICAgICAgICAgICAge3NlY29uZE9mZmljZS5hZGRyZXNzfVxuICAgICAgICAgICAgey8qIHRlbGVwaG9uZSAqL31cbiAgICAgICAgICAgIHtzZWNvbmRPZmZpY2UudGVsZXBob25lfVxuICAgICAgICAgIDwvSW5mb0RldGFpbHM+XG4gICAgICAgICAgey8qIGNvbnRlY3QgYnRuICovfVxuICAgICAgICAgIDxMaW5rQnV0dG9uIGxpbmtSZWY9XCIvY29udGFjdFwiIGJ0blN0eWxlPVwiY29udGVjdC1idG5cIiAvPlxuICAgICAgICA8L0FkZHJlc3M+XG4gICAgICA8L2Rpdj5cbiAgICA8L2FydGljbGU+XG4gICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IERldGFpbHNTZWN0aW9uO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwiRGV0YWlsU3R5bGVzIiwiZGV0YWlsc0FkZHJlc3NDb250ZW50IiwiSW5mb0RldGFpbHMiLCJBZGRyZXNzIiwiTGlua0J1dHRvbiIsIkRldGFpbHNTZWN0aW9uIiwiY2hpbGRyZSIsInByb3BzIiwiZmlyc3RPZmZpY2UiLCJzZWNvbmRPZmZpY2UiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiaDIiLCJkaXYiLCJlbWFpbCIsImFkZHJlc3MiLCJ0ZWxlcGhvbmUiLCJsaW5rUmVmIiwiYnRuU3R5bGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./Components/ContactPage/Main/ContactDetailsSection.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/api/storage.js":
/*!******************************!*\
  !*** ./pages/api/storage.js ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"arrOfLinkText\": function() { return /* binding */ arrOfLinkText; },\n/* harmony export */   \"featuredSectionContents\": function() { return /* binding */ featuredSectionContents; },\n/* harmony export */   \"portfolioImgContents\": function() { return /* binding */ portfolioImgContents; },\n/* harmony export */   \"storeData\": function() { return /* binding */ storeData; }\n/* harmony export */ });\nvar storeData = {};\nvar arrOfLinkText = [\n    \"Portfolio\",\n    \"About Us\",\n    \"Contact\"\n];\nvar portfolioImgContents = [\n    // Seraph Station\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-seraph.jpg\",\n            tablet: \"/portfolio/tablet/image-seraph.jpg\",\n            desktop: \"/portfolio/desktop/image-seraph.jpg\"\n        },\n        title: \"Seraph Station\",\n        date: \"September 2019\"\n    },\n    // Eebox Building\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-eebox.jpg\",\n            tablet: \"/portfolio/tablet/image-eebox.jpg\",\n            desktop: \"/portfolio/desktop/image-eebox.jpg\"\n        },\n        title: \"Eebox Building\",\n        date: \"August 2017\"\n    },\n    // Federal II Tower\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-federal.jpg\",\n            tablet: \"/portfolio/tablet/image-federal.jpg\",\n            desktop: \"/portfolio/desktop/image-federal.jpg\"\n        },\n        title: \"Federal II Tower\",\n        date: \"March 2017\"\n    },\n    // Project Del Sol\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-del-sol.jpg\",\n            tablet: \"/portfolio/tablet/image-del-sol.jpg\",\n            desktop: \"/portfolio/desktop/image-del-sol.jpg\"\n        },\n        title: \"Project Del Sol\",\n        date: \"January 2016\"\n    },\n    // Le Prototype\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-prototype.jpg\",\n            tablet: \"/portfolio/tablet/image-prototype.jpg\",\n            desktop: \"/portfolio/desktop/image-prototype.jpg\"\n        },\n        title: \"Le Prototype\",\n        date: \"October 2015\"\n    },\n    // 228B Tower\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-228b.jpg\",\n            tablet: \"/portfolio/tablet/image-228b.jpg\",\n            desktop: \"/portfolio/desktop/image-228b.jpg\"\n        },\n        title: \"228B Tower\",\n        date: \"April 2015\"\n    },\n    // Grand Edelweiss Hotel\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-edelweiss.jpg\",\n            tablet: \"/portfolio/tablet/image-edelweiss.jpg\",\n            desktop: \"/portfolio/desktop/image-edelweiss.jpg\"\n        },\n        title: \"Grand Edelweiss Hotel\",\n        date: \"December 2013\"\n    },\n    // Netcry Tower\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-netcry.jpg\",\n            tablet: \"/portfolio/tablet/image-netcry.jpg\",\n            desktop: \"/portfolio/desktop/image-netcry.jpg\"\n        },\n        title: \"Netcry Tower\",\n        date: \"August 2012\"\n    },\n    // Hypers\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-hypers.jpg\",\n            tablet: \"/portfolio/tablet/image-hypers.jpg\",\n            desktop: \"/portfolio/desktop/image-hypers.jpg\"\n        },\n        title: \"Hypers\",\n        date: \"January 2012\"\n    },\n    // SXIV Tower\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-sxiv.jpg\",\n            tablet: \"/portfolio/tablet/image-sxiv.jpg\",\n            desktop: \"/portfolio/desktop/image-sxiv.jpg\"\n        },\n        title: \"SXIV Tower\",\n        date: \"March 2011\"\n    },\n    // Trinity Bank Tower\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-trinity.jpg\",\n            tablet: \"/portfolio/tablet/image-trinity.jpg\",\n            desktop: \"/portfolio/desktop/image-trinity.jpg\"\n        },\n        title: \"Trinity Bank Tower\",\n        date: \"September 2010\"\n    },\n    // Project Paramour\n    {\n        imgSrc: {\n            mobile: \"/portfolio/mobile/image-paramour.jpg\",\n            tablet: \"/portfolio/tablet/image-paramour.jpg\",\n            desktop: \"/portfolio/desktop/image-paramour.jpg\"\n        },\n        title: \"Project Paramour\",\n        date: \"February 2008\"\n    }, \n];\nvar featuredSectionContents = [];\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNFTCxNQUFNLEVBQUU7WUFDTkMsTUFBTSxFQUFFLHFDQUFxQztZQUM3Q0MsTUFBTSxFQUFFLHFDQUFxQztZQUM3Q0MsT0FBTyxFQUFFLHNDQUFzQztTQUNoRDtRQUNEQyxLQUFLLEVBQUUsb0JBQW9CO1FBQzNCQyxJQUFJLEVBQUUsZ0JBQWdCO0tBQ3ZCO0lBQ0QsbUJBQW1CO0lBQ25CO1FBQ0VMLE1BQU0sRUFBRTtZQUNOQyxNQUFNLEVBQUUsc0NBQXNDO1lBQzlDQyxNQUFNLEVBQUUsc0NBQXNDO1lBQzlDQyxPQUFPLEVBQUUsdUNBQXVDO1NBQ2pEO1FBQ0RDLEtBQUssRUFBRSxrQkFBa0I7UUFDekJDLElBQUksRUFBRSxlQUFlO0tBQ3RCO0NBQ0YsQ0FBQztBQUVLLElBQU1DLHVCQUF1QixHQUFHLEVBSXRDLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvYXBpL3N0b3JhZ2UuanM/NWVjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3RvcmVEYXRhID0ge307XG5cbmV4cG9ydCBjb25zdCBhcnJPZkxpbmtUZXh0ID0gW1wiUG9ydGZvbGlvXCIsIFwiQWJvdXQgVXNcIiwgXCJDb250YWN0XCJdO1xuXG5leHBvcnQgY29uc3QgcG9ydGZvbGlvSW1nQ29udGVudHMgPSBbXG4gIC8vIFNlcmFwaCBTdGF0aW9uXG4gIHtcbiAgICBpbWdTcmM6IHtcbiAgICAgIG1vYmlsZTogXCIvcG9ydGZvbGlvL21vYmlsZS9pbWFnZS1zZXJhcGguanBnXCIsXG4gICAgICB0YWJsZXQ6IFwiL3BvcnRmb2xpby90YWJsZXQvaW1hZ2Utc2VyYXBoLmpwZ1wiLFxuICAgICAgZGVza3RvcDogXCIvcG9ydGZvbGlvL2Rlc2t0b3AvaW1hZ2Utc2VyYXBoLmpwZ1wiLFxuICAgIH0sXG4gICAgdGl0bGU6IFwiU2VyYXBoIFN0YXRpb25cIixcbiAgICBkYXRlOiBcIlNlcHRlbWJlciAyMDE5XCIsXG4gIH0sXG4gIC8vIEVlYm94IEJ1aWxkaW5nXG4gIHtcbiAgICBpbWdTcmM6IHtcbiAgICAgIG1vYmlsZTogXCIvcG9ydGZvbGlvL21vYmlsZS9pbWFnZS1lZWJveC5qcGdcIixcbiAgICAgIHRhYmxldDogXCIvcG9ydGZvbGlvL3RhYmxldC9pbWFnZS1lZWJveC5qcGdcIixcbiAgICAgIGRlc2t0b3A6IFwiL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLWVlYm94LmpwZ1wiLFxuICAgIH0sXG4gICAgdGl0bGU6IFwiRWVib3ggQnVpbGRpbmdcIixcbiAgICBkYXRlOiBcIkF1Z3VzdCAyMDE3XCIsXG4gIH0sXG4gIC8vIEZlZGVyYWwgSUkgVG93ZXJcbiAge1xuICAgIGltZ1NyYzoge1xuICAgICAgbW9iaWxlOiBcIi9wb3J0Zm9saW8vbW9iaWxlL2ltYWdlLWZlZGVyYWwuanBnXCIsXG4gICAgICB0YWJsZXQ6IFwiL3BvcnRmb2xpby90YWJsZXQvaW1hZ2UtZmVkZXJhbC5qcGdcIixcbiAgICAgIGRlc2t0b3A6IFwiL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLWZlZGVyYWwuanBnXCIsXG4gICAgfSxcbiAgICB0aXRsZTogXCJGZWRlcmFsIElJIFRvd2VyXCIsXG4gICAgZGF0ZTogXCJNYXJjaCAyMDE3XCIsXG4gIH0sXG4gIC8vIFByb2plY3QgRGVsIFNvbFxuICB7XG4gICAgaW1nU3JjOiB7XG4gICAgICBtb2JpbGU6IFwiL3BvcnRmb2xpby9tb2JpbGUvaW1hZ2UtZGVsLXNvbC5qcGdcIixcbiAgICAgIHRhYmxldDogXCIvcG9ydGZvbGlvL3RhYmxldC9pbWFnZS1kZWwtc29sLmpwZ1wiLFxuICAgICAgZGVza3RvcDogXCIvcG9ydGZvbGlvL2Rlc2t0b3AvaW1hZ2UtZGVsLXNvbC5qcGdcIixcbiAgICB9LFxuICAgIHRpdGxlOiBcIlByb2plY3QgRGVsIFNvbFwiLFxuICAgIGRhdGU6IFwiSmFudWFyeSAyMDE2XCIsXG4gIH0sXG4gIC8vIExlIFByb3RvdHlwZVxuICB7XG4gICAgaW1nU3JjOiB7XG4gICAgICBtb2JpbGU6IFwiL3BvcnRmb2xpby9tb2JpbGUvaW1hZ2UtcHJvdG90eXBlLmpwZ1wiLFxuICAgICAgdGFibGV0OiBcIi9wb3J0Zm9saW8vdGFibGV0L2ltYWdlLXByb3RvdHlwZS5qcGdcIixcbiAgICAgIGRlc2t0b3A6IFwiL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLXByb3RvdHlwZS5qcGdcIixcbiAgICB9LFxuICAgIHRpdGxlOiBcIkxlIFByb3RvdHlwZVwiLFxuICAgIGRhdGU6IFwiT2N0b2JlciAyMDE1XCIsXG4gIH0sXG4gIC8vIDIyOEIgVG93ZXJcbiAge1xuICAgIGltZ1NyYzoge1xuICAgICAgbW9iaWxlOiBcIi9wb3J0Zm9saW8vbW9iaWxlL2ltYWdlLTIyOGIuanBnXCIsXG4gICAgICB0YWJsZXQ6IFwiL3BvcnRmb2xpby90YWJsZXQvaW1hZ2UtMjI4Yi5qcGdcIixcbiAgICAgIGRlc2t0b3A6IFwiL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLTIyOGIuanBnXCIsXG4gICAgfSxcbiAgICB0aXRsZTogXCIyMjhCIFRvd2VyXCIsXG4gICAgZGF0ZTogXCJBcHJpbCAyMDE1XCIsXG4gIH0sXG4gIC8vIEdyYW5kIEVkZWx3ZWlzcyBIb3RlbFxuICB7XG4gICAgaW1nU3JjOiB7XG4gICAgICBtb2JpbGU6IFwiL3BvcnRmb2xpby9tb2JpbGUvaW1hZ2UtZWRlbHdlaXNzLmpwZ1wiLFxuICAgICAgdGFibGV0OiBcIi9wb3J0Zm9saW8vdGFibGV0L2ltYWdlLWVkZWx3ZWlzcy5qcGdcIixcbiAgICAgIGRlc2t0b3A6IFwiL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLWVkZWx3ZWlzcy5qcGdcIixcbiAgICB9LFxuICAgIHRpdGxlOiBcIkdyYW5kIEVkZWx3ZWlzcyBIb3RlbFwiLFxuICAgIGRhdGU6IFwiRGVjZW1iZXIgMjAxM1wiLFxuICB9LFxuICAvLyBOZXRjcnkgVG93ZXJcbiAge1xuICAgIGltZ1NyYzoge1xuICAgICAgbW9iaWxlOiBcIi9wb3J0Zm9saW8vbW9iaWxlL2ltYWdlLW5ldGNyeS5qcGdcIixcbiAgICAgIHRhYmxldDogXCIvcG9ydGZvbGlvL3RhYmxldC9pbWFnZS1uZXRjcnkuanBnXCIsXG4gICAgICBkZXNrdG9wOiBcIi9wb3J0Zm9saW8vZGVza3RvcC9pbWFnZS1uZXRjcnkuanBnXCIsXG4gICAgfSxcbiAgICB0aXRsZTogXCJOZXRjcnkgVG93ZXJcIixcbiAgICBkYXRlOiBcIkF1Z3VzdCAyMDEyXCIsXG4gIH0sXG4gIC8vIEh5cGVyc1xuICB7XG4gICAgaW1nU3JjOiB7XG4gICAgICBtb2JpbGU6IFwiL3BvcnRmb2xpby9tb2JpbGUvaW1hZ2UtaHlwZXJzLmpwZ1wiLFxuICAgICAgdGFibGV0OiBcIi9wb3J0Zm9saW8vdGFibGV0L2ltYWdlLWh5cGVycy5qcGdcIixcbiAgICAgIGRlc2t0b3A6IFwiL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLWh5cGVycy5qcGdcIixcbiAgICB9LFxuICAgIHRpdGxlOiBcIkh5cGVyc1wiLFxuICAgIGRhdGU6IFwiSmFudWFyeSAyMDEyXCIsXG4gIH0sXG4gIC8vIFNYSVYgVG93ZXJcbiAge1xuICAgIGltZ1NyYzoge1xuICAgICAgbW9iaWxlOiBcIi9wb3J0Zm9saW8vbW9iaWxlL2ltYWdlLXN4aXYuanBnXCIsXG4gICAgICB0YWJsZXQ6IFwiL3BvcnRmb2xpby90YWJsZXQvaW1hZ2Utc3hpdi5qcGdcIixcbiAgICAgIGRlc2t0b3A6IFwiL3BvcnRmb2xpby9kZXNrdG9wL2ltYWdlLXN4aXYuanBnXCIsXG4gICAgfSxcbiAgICB0aXRsZTogXCJTWElWIFRvd2VyXCIsXG4gICAgZGF0ZTogXCJNYXJjaCAyMDExXCIsXG4gIH0sXG4gIC8vIFRyaW5pdHkgQmFuayBUb3dlclxuICB7XG4gICAgaW1nU3JjOiB7XG4gICAgICBtb2JpbGU6IFwiL3BvcnRmb2xpby9tb2JpbGUvaW1hZ2UtdHJpbml0eS5qcGdcIixcbiAgICAgIHRhYmxldDogXCIvcG9ydGZvbGlvL3RhYmxldC9pbWFnZS10cmluaXR5LmpwZ1wiLFxuICAgICAgZGVza3RvcDogXCIvcG9ydGZvbGlvL2Rlc2t0b3AvaW1hZ2UtdHJpbml0eS5qcGdcIixcbiAgICB9LFxuICAgIHRpdGxlOiBcIlRyaW5pdHkgQmFuayBUb3dlclwiLFxuICAgIGRhdGU6IFwiU2VwdGVtYmVyIDIwMTBcIixcbiAgfSxcbiAgLy8gUHJvamVjdCBQYXJhbW91clxuICB7XG4gICAgaW1nU3JjOiB7XG4gICAgICBtb2JpbGU6IFwiL3BvcnRmb2xpby9tb2JpbGUvaW1hZ2UtcGFyYW1vdXIuanBnXCIsXG4gICAgICB0YWJsZXQ6IFwiL3BvcnRmb2xpby90YWJsZXQvaW1hZ2UtcGFyYW1vdXIuanBnXCIsXG4gICAgICBkZXNrdG9wOiBcIi9wb3J0Zm9saW8vZGVza3RvcC9pbWFnZS1wYXJhbW91ci5qcGdcIixcbiAgICB9LFxuICAgIHRpdGxlOiBcIlByb2plY3QgUGFyYW1vdXJcIixcbiAgICBkYXRlOiBcIkZlYnJ1YXJ5IDIwMDhcIixcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBmZWF0dXJlZFNlY3Rpb25Db250ZW50cyA9IFtcbiAgLy8gcHJvamVjdCBkZWwgc29sXG4gIC8vIDIyOEIgVG93ZXJcbiAgLy8gTGUgUHJvdG90eXBlXG5dO1xuIl0sIm5hbWVzIjpbInN0b3JlRGF0YSIsImFyck9mTGlua1RleHQiLCJwb3J0Zm9saW9JbWdDb250ZW50cyIsImltZ1NyYyIsIm1vYmlsZSIsInRhYmxldCIsImRlc2t0b3AiLCJ0aXRsZSIsImRhdGUiLCJmZWF0dXJlZFNlY3Rpb25Db250ZW50cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/api/storage.js\n");

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./src/app/index.css":
/*!***************************!*\
  !*** ./src/app/index.css ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"9355fd948abb\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvaW5kZXguY3NzIiwibWFwcGluZ3MiOiI7QUFBQSwrREFBZSxjQUFjO0FBQzdCLElBQUksSUFBVSxJQUFJLGlCQUFpQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2luZGV4LmNzcz9kMmRlIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IFwiOTM1NWZkOTQ4YWJiXCJcbmlmIChtb2R1bGUuaG90KSB7IG1vZHVsZS5ob3QuYWNjZXB0KCkgfVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/index.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./src/components/navigation/Navigation.jsx":
/*!**************************************************!*\
  !*** ./src/components/navigation/Navigation.jsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar */ \"(app-pages-browser)/./src/components/navigation/navbar.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst Navigation = ()=>{\n    _s();\n    const [mounted, setMounted] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const isAuthenticated = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)((state)=>state.auth.isAuthenticated);\n    const [hydrated, setHydrated] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const authState = sessionStorage.getItem(\"authState\");\n        const initialAuth = authState ? JSON.parse(authState).isAuthenticated : false;\n        if (initialAuth) {\n            // If we have auth state in localStorage, use it immediately\n            setHydrated(true);\n        } else {\n            // Otherwise wait for hydration\n            const timeoutId = setTimeout(()=>{\n                setHydrated(true);\n            }, 100);\n            return ()=>clearTimeout(timeoutId);\n        }\n    }, []);\n    if (!hydrated) {\n        const authState = sessionStorage.getItem(\"authState\");\n        const initialAuth = authState ? JSON.parse(authState).isAuthenticated : false;\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            isAuthenticated: initialAuth\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\2024Fall\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\navigation\\\\Navigation.jsx\",\n            lineNumber: 29,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n            isAuthenticated: auth.isAuthenticated\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\2024Fall\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\navigation\\\\Navigation.jsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false);\n};\n_s(Navigation, \"Mq3ldZEt3oGAWbLQEJsrtlg4yCI=\", false, function() {\n    return [\n        react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector\n    ];\n});\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL25hdmlnYXRpb24vTmF2aWdhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEI7QUFDYztBQUNGO0FBQzFDLE1BQU1JLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNSyxrQkFBa0JKLHdEQUFXQSxDQUFDLENBQUNLLFFBQVVBLE1BQU1DLElBQUksQ0FBQ0YsZUFBZTtJQUN6RSxNQUFNLENBQUNHLFVBQVVDLFlBQVksR0FBR1QsK0NBQVFBLENBQUM7SUFDekNELGdEQUFTQSxDQUFDO1FBQ1IsTUFBTVcsWUFBWUMsZUFBZUMsT0FBTyxDQUFDO1FBQ3pDLE1BQU1DLGNBQWNILFlBQ2hCSSxLQUFLQyxLQUFLLENBQUNMLFdBQVdMLGVBQWUsR0FDckM7UUFDSixJQUFJUSxhQUFhO1lBQ2YsNERBQTREO1lBQzVESixZQUFZO1FBQ2QsT0FBTztZQUNMLCtCQUErQjtZQUMvQixNQUFNTyxZQUFZQyxXQUFXO2dCQUMzQlIsWUFBWTtZQUNkLEdBQUc7WUFDSCxPQUFPLElBQU1TLGFBQWFGO1FBQzVCO0lBQ0YsR0FBRyxFQUFFO0lBQ0wsSUFBSSxDQUFDUixVQUFVO1FBQ2IsTUFBTUUsWUFBWUMsZUFBZUMsT0FBTyxDQUFDO1FBQ3pDLE1BQU1DLGNBQWNILFlBQ2hCSSxLQUFLQyxLQUFLLENBQUNMLFdBQVdMLGVBQWUsR0FDckM7UUFDSixxQkFBTyw4REFBQ1AsK0NBQU1BO1lBQUNPLGlCQUFpQlE7Ozs7OztJQUNsQztJQUVBLHFCQUNFO2tCQUNFLDRFQUFDZiwrQ0FBTUE7WUFBQ08saUJBQWlCRSxLQUFLRixlQUFlOzs7Ozs7O0FBR25EO0dBakNNSDs7UUFFb0JELG9EQUFXQTs7O0tBRi9CQztBQW1DTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9uYXZpZ2F0aW9uL05hdmlnYXRpb24uanN4PzRhMmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdmJhciBmcm9tIFwiLi9uYXZiYXJcIjtcclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5jb25zdCBOYXZpZ2F0aW9uID0gKCkgPT4ge1xyXG4gIGNvbnN0IFttb3VudGVkLCBzZXRNb3VudGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBpc0F1dGhlbnRpY2F0ZWQgPSB1c2VTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkKTtcclxuICBjb25zdCBbaHlkcmF0ZWQsIHNldEh5ZHJhdGVkXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgYXV0aFN0YXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhTdGF0ZVwiKTtcclxuICAgIGNvbnN0IGluaXRpYWxBdXRoID0gYXV0aFN0YXRlXHJcbiAgICAgID8gSlNPTi5wYXJzZShhdXRoU3RhdGUpLmlzQXV0aGVudGljYXRlZFxyXG4gICAgICA6IGZhbHNlO1xyXG4gICAgaWYgKGluaXRpYWxBdXRoKSB7XHJcbiAgICAgIC8vIElmIHdlIGhhdmUgYXV0aCBzdGF0ZSBpbiBsb2NhbFN0b3JhZ2UsIHVzZSBpdCBpbW1lZGlhdGVseVxyXG4gICAgICBzZXRIeWRyYXRlZCh0cnVlKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIC8vIE90aGVyd2lzZSB3YWl0IGZvciBoeWRyYXRpb25cclxuICAgICAgY29uc3QgdGltZW91dElkID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SHlkcmF0ZWQodHJ1ZSk7XHJcbiAgICAgIH0sIDEwMCk7XHJcbiAgICAgIHJldHVybiAoKSA9PiBjbGVhclRpbWVvdXQodGltZW91dElkKTtcclxuICAgIH1cclxuICB9LCBbXSk7XHJcbiAgaWYgKCFoeWRyYXRlZCkge1xyXG4gICAgY29uc3QgYXV0aFN0YXRlID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhTdGF0ZVwiKTtcclxuICAgIGNvbnN0IGluaXRpYWxBdXRoID0gYXV0aFN0YXRlXHJcbiAgICAgID8gSlNPTi5wYXJzZShhdXRoU3RhdGUpLmlzQXV0aGVudGljYXRlZFxyXG4gICAgICA6IGZhbHNlO1xyXG4gICAgcmV0dXJuIDxOYXZiYXIgaXNBdXRoZW50aWNhdGVkPXtpbml0aWFsQXV0aH0gLz47XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPD5cclxuICAgICAgPE5hdmJhciBpc0F1dGhlbnRpY2F0ZWQ9e2F1dGguaXNBdXRoZW50aWNhdGVkfSAvPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247XHJcbiJdLCJuYW1lcyI6WyJOYXZiYXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlbGVjdG9yIiwiTmF2aWdhdGlvbiIsIm1vdW50ZWQiLCJzZXRNb3VudGVkIiwiaXNBdXRoZW50aWNhdGVkIiwic3RhdGUiLCJhdXRoIiwiaHlkcmF0ZWQiLCJzZXRIeWRyYXRlZCIsImF1dGhTdGF0ZSIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImluaXRpYWxBdXRoIiwiSlNPTiIsInBhcnNlIiwidGltZW91dElkIiwic2V0VGltZW91dCIsImNsZWFyVGltZW91dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/navigation/Navigation.jsx\n"));

/***/ })

});
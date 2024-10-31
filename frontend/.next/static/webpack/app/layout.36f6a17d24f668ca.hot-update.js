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

/***/ "(app-pages-browser)/./src/lib/features/auth/authSlice.js":
/*!********************************************!*\
  !*** ./src/lib/features/auth/authSlice.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authReducer: function() { return /* binding */ authReducer; },\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   logout: function() { return /* binding */ logout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\nconst initialState = {\n    user: null,\n    isAuthenticated: false,\n    error: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.isAuthenticated = true;\n            state.error = null;\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = null;\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (loginForm)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.login(loginForm);\n            if (response.state === \"success\") {\n                dispatch(loginSuccess(response));\n                return true;\n            } else {\n                throw new Error(\"Login failed\");\n            }\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDZjtBQUVoQyxNQUFNRSxlQUFlO0lBQ25CQyxNQUFNO0lBQ05DLGlCQUFpQjtJQUNqQkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsWUFBWU4sNkRBQVdBLENBQUM7SUFDNUJPLE1BQU07SUFDTkw7SUFDQU0sVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNUCxJQUFJLEdBQUdRLE9BQU9DLE9BQU8sQ0FBQ1QsSUFBSTtZQUNoQ08sTUFBTU4sZUFBZSxHQUFHO1lBQ3hCTSxNQUFNTCxLQUFLLEdBQUc7UUFDaEI7UUFDQVEsY0FBYyxDQUFDSCxPQUFPQztZQUNwQkQsTUFBTVAsSUFBSSxHQUFHO1lBQ2JPLE1BQU1OLGVBQWUsR0FBRztZQUN4Qk0sTUFBTUwsS0FBSyxHQUFHTSxPQUFPQyxPQUFPO1FBQzlCO1FBQ0FFLFFBQVEsQ0FBQ0o7WUFDUEEsTUFBTVAsSUFBSSxHQUFHO1lBQ2JPLE1BQU1OLGVBQWUsR0FBRztZQUN4Qk0sTUFBTUwsS0FBSyxHQUFHO1FBQ2hCO0lBQ0Y7QUFDRjtBQUVBLE1BQU0sRUFBRUksWUFBWSxFQUFFSSxZQUFZLEVBQUVDLE1BQU0sRUFBRSxHQUFHUixVQUFVUyxPQUFPO0FBRWhFLE1BQU1DLGNBQWNWLFVBQVVXLE9BQU87QUFFckMsTUFBTUMsYUFBYSxDQUFDQyxZQUFjLE9BQU9DO1FBQ3ZDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1wQix5Q0FBT0EsQ0FBQ3FCLEtBQUssQ0FBQ0g7WUFDckMsSUFBSUUsU0FBU1gsS0FBSyxLQUFLLFdBQVc7Z0JBQ2hDVSxTQUFTWCxhQUFhWTtnQkFDdEIsT0FBTztZQUNULE9BQU87Z0JBQ0wsTUFBTSxJQUFJRSxNQUFNO1lBQ2xCO1FBQ0YsRUFBRSxPQUFPbEIsT0FBTztZQUNkZSxTQUFTUCxhQUFhUixNQUFNbUIsT0FBTztZQUNuQyxNQUFNbkI7UUFDUjtJQUNGO0FBRTJDO0FBQzNDLCtEQUFlVyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanM/NmM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGF1dGhBcGkgfSBmcm9tIFwiQC9hcGlcIjtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJhdXRoXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBsb2dpblN1Y2Nlc3M6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyO1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgbG9naW5GYWlsdXJlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgeyBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbHVyZSwgbG9nb3V0IH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuXHJcbmNvbnN0IGF1dGhSZWR1Y2VyID0gYXV0aFNsaWNlLnJlZHVjZXI7XHJcblxyXG5jb25zdCBmZXRjaExvZ2luID0gKGxvZ2luRm9ybSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aEFwaS5sb2dpbihsb2dpbkZvcm0pO1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXRlID09PSBcInN1Y2Nlc3NcIikge1xyXG4gICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2dpbiBmYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBmZXRjaExvZ2luLCBhdXRoUmVkdWNlciwgbG9nb3V0IH07XHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhdXRoQXBpIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsImlzQXV0aGVudGljYXRlZCIsImVycm9yIiwiYXV0aFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9naW5TdWNjZXNzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9naW5GYWlsdXJlIiwibG9nb3V0IiwiYWN0aW9ucyIsImF1dGhSZWR1Y2VyIiwicmVkdWNlciIsImZldGNoTG9naW4iLCJsb2dpbkZvcm0iLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwibG9naW4iLCJFcnJvciIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
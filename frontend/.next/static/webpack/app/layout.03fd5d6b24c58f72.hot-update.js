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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authReducer: function() { return /* binding */ authReducer; },\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   logout: function() { return /* binding */ logout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./src/utils/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\n\nconst initialState = {\n    user: null,\n    token: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getToken)() || null,\n    isAuthenticated: false,\n    error: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.token = action.payload.token;\n            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setToken)(action.payload.token);\n            state.isAuthenticated = true;\n            state.error = null;\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.token = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.token = null;\n            state.isAuthenticated = false;\n            state.error = null;\n            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeToken)();\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (loginForm)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_1__.authApi.login(loginForm);\n            if (response.user) {\n                dispatch(loginSuccess(response));\n                return true;\n            } else {\n                throw new Error(\"Login failed\");\n            }\n        } catch (e) {\n            dispatch(loginFailure(error));\n            throw error;\n        }\n    };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ3dCO0FBQ3ZDO0FBRWhDLE1BQU1NLGVBQWU7SUFDbkJDLE1BQU07SUFDTkMsT0FBT0wsZ0RBQVFBLE1BQU07SUFDckJNLGlCQUFpQjtJQUNqQkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsWUFBWVgsNkRBQVdBLENBQUM7SUFDNUJZLE1BQU07SUFDTk47SUFDQU8sVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNUixJQUFJLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsSUFBSTtZQUNoQ1EsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDbENOLGdEQUFTQSxDQUFDYyxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDOUJPLE1BQU1OLGVBQWUsR0FBRztZQUN4Qk0sTUFBTUwsS0FBSyxHQUFHO1FBQ2hCO1FBQ0FRLGNBQWMsQ0FBQ0gsT0FBT0M7WUFDcEJELE1BQU1SLElBQUksR0FBRztZQUNiUSxNQUFNUCxLQUFLLEdBQUc7WUFDZE8sTUFBTU4sZUFBZSxHQUFHO1lBQ3hCTSxNQUFNTCxLQUFLLEdBQUdNLE9BQU9DLE9BQU87UUFDOUI7UUFDQUUsUUFBUSxDQUFDSjtZQUNQQSxNQUFNUixJQUFJLEdBQUc7WUFDYlEsTUFBTVAsS0FBSyxHQUFHO1lBQ2RPLE1BQU1OLGVBQWUsR0FBRztZQUN4Qk0sTUFBTUwsS0FBSyxHQUFHO1lBQ2ROLG1EQUFXQTtRQUNiO0lBQ0Y7QUFDRjtBQUVBLE1BQU0sRUFBRVUsWUFBWSxFQUFFSSxZQUFZLEVBQUVDLE1BQU0sRUFBRSxHQUFHUixVQUFVUyxPQUFPO0FBRWhFLE1BQU1DLGNBQWNWLFVBQVVXLE9BQU87QUFFckMsTUFBTUMsYUFBYSxDQUFDQyxZQUFjLE9BQU9DO1FBQ3ZDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1yQix5Q0FBT0EsQ0FBQ3NCLEtBQUssQ0FBQ0g7WUFDckMsSUFBR0UsU0FBU25CLElBQUksRUFBQztnQkFDZmtCLFNBQVNYLGFBQWFZO2dCQUN0QixPQUFPO1lBQ1QsT0FBTztnQkFDTCxNQUFNLElBQUlFLE1BQU07WUFDbEI7UUFDRixFQUFFLFVBQU07WUFDTkgsU0FBU1AsYUFBYVI7WUFDdEIsTUFBTUE7UUFDUjtJQUNGO0FBRTJDO0FBQzNDLCtEQUFlVyxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanM/NmM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNldFRva2VuIGFzIF9zZXRUb2tlbiwgZ2V0VG9rZW4sIHJlbW92ZVRva2VuIH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHsgYXV0aEFwaSB9IGZyb20gXCJAL2FwaVwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IG51bGwsXHJcbiAgdG9rZW46IGdldFRva2VuKCkgfHwgbnVsbCxcclxuICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gIGVycm9yOiBudWxsLFxyXG59O1xyXG5cclxuY29uc3QgYXV0aFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYXV0aFwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgbG9naW5TdWNjZXNzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQudXNlcjtcclxuICAgICAgc3RhdGUudG9rZW4gPSBhY3Rpb24ucGF5bG9hZC50b2tlbjtcclxuICAgICAgX3NldFRva2VuKGFjdGlvbi5wYXlsb2FkLnRva2VuKTtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgfSxcclxuICAgIGxvZ2luRmFpbHVyZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLnRva2VuID0gbnVsbDtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLnRva2VuID0gbnVsbDtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgICAgcmVtb3ZlVG9rZW4oKTtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCB7IGxvZ2luU3VjY2VzcywgbG9naW5GYWlsdXJlLCBsb2dvdXQgfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xyXG5cclxuY29uc3QgYXV0aFJlZHVjZXIgPSBhdXRoU2xpY2UucmVkdWNlcjtcclxuXHJcbmNvbnN0IGZldGNoTG9naW4gPSAobG9naW5Gb3JtKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLmxvZ2luKGxvZ2luRm9ybSk7XHJcbiAgICBpZihyZXNwb25zZS51c2VyKXtcclxuICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHJlc3BvbnNlKSk7XHJcbiAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTG9naW4gZmFpbGVkXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2gge1xyXG4gICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yKSk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgeyBmZXRjaExvZ2luLCBhdXRoUmVkdWNlciwgbG9nb3V0IH07XHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJzZXRUb2tlbiIsIl9zZXRUb2tlbiIsImdldFRva2VuIiwicmVtb3ZlVG9rZW4iLCJhdXRoQXBpIiwiaW5pdGlhbFN0YXRlIiwidXNlciIsInRva2VuIiwiaXNBdXRoZW50aWNhdGVkIiwiZXJyb3IiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dpblN1Y2Nlc3MiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJsb2dpbkZhaWx1cmUiLCJsb2dvdXQiLCJhY3Rpb25zIiwiYXV0aFJlZHVjZXIiLCJyZWR1Y2VyIiwiZmV0Y2hMb2dpbiIsImxvZ2luRm9ybSIsImRpc3BhdGNoIiwicmVzcG9uc2UiLCJsb2dpbiIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
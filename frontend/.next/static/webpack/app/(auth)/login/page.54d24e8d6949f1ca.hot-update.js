"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./src/lib/features/auth/authSlice.js":
/*!********************************************!*\
  !*** ./src/lib/features/auth/authSlice.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authReducer: function() { return /* binding */ authReducer; },\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   logout: function() { return /* binding */ logout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./src/utils/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\n\nconst initialState = {\n    user: null,\n    token: _utils__WEBPACK_IMPORTED_MODULE_0__.getToken || null,\n    isAuthenticated: false,\n    error: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.token = action.payload.token;\n            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setToken)(action.payload.token);\n            state.isAuthenticated = true;\n            state.error = null;\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.token = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.token = null;\n            state.isAuthenticated = false;\n            state.error = null;\n            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeToken)();\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (credentials)=>{\n    try {\n        const response = _api__WEBPACK_IMPORTED_MODULE_1__.authApi.login(credentials);\n    } catch (e) {}\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ3dCO0FBQ3ZDO0FBRWhDLE1BQU1NLGVBQWU7SUFDbkJDLE1BQU07SUFDTkMsT0FBT0wsNENBQVFBLElBQUk7SUFDbkJNLGlCQUFpQjtJQUNqQkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsWUFBWVgsNkRBQVdBLENBQUM7SUFDNUJZLE1BQU07SUFDTk47SUFDQU8sVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNUixJQUFJLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsSUFBSTtZQUNoQ1EsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDbENOLGdEQUFTQSxDQUFDYyxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDOUJPLE1BQU1OLGVBQWUsR0FBRztZQUN4Qk0sTUFBTUwsS0FBSyxHQUFHO1FBQ2hCO1FBQ0FRLGNBQWMsQ0FBQ0gsT0FBT0M7WUFDcEJELE1BQU1SLElBQUksR0FBRztZQUNiUSxNQUFNUCxLQUFLLEdBQUc7WUFDZE8sTUFBTU4sZUFBZSxHQUFHO1lBQ3hCTSxNQUFNTCxLQUFLLEdBQUdNLE9BQU9DLE9BQU87UUFDOUI7UUFDQUUsUUFBUSxDQUFDSjtZQUNQQSxNQUFNUixJQUFJLEdBQUc7WUFDYlEsTUFBTVAsS0FBSyxHQUFHO1lBQ2RPLE1BQU1OLGVBQWUsR0FBRztZQUN4Qk0sTUFBTUwsS0FBSyxHQUFHO1lBQ2ROLG1EQUFXQTtRQUNiO0lBQ0Y7QUFDRjtBQUVBLE1BQU0sRUFBRVUsWUFBWSxFQUFFSSxZQUFZLEVBQUVDLE1BQU0sRUFBRSxHQUFHUixVQUFVUyxPQUFPO0FBRWhFLE1BQU1DLGNBQWNWLFVBQVVXLE9BQU87QUFFckMsTUFBTUMsYUFBYSxDQUFDQztJQUNsQixJQUFJO1FBQ0YsTUFBTUMsV0FBV3BCLHlDQUFPQSxDQUFDcUIsS0FBSyxDQUFDRjtJQUNqQyxFQUFFLFVBQU0sQ0FBQztBQUNYO0FBRTJDO0FBQzNDLCtEQUFlSCxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanM/NmM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IHNldFRva2VuIGFzIF9zZXRUb2tlbiwgZ2V0VG9rZW4sIHJlbW92ZVRva2VuIH0gZnJvbSBcIkAvdXRpbHNcIjtcclxuaW1wb3J0IHsgYXV0aEFwaSB9IGZyb20gXCJAL2FwaVwiO1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IG51bGwsXHJcbiAgdG9rZW46IGdldFRva2VuIHx8IG51bGwsXHJcbiAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvZ2luU3VjY2VzczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkLnVzZXI7XHJcbiAgICAgIHN0YXRlLnRva2VuID0gYWN0aW9uLnBheWxvYWQudG9rZW47XHJcbiAgICAgIF9zZXRUb2tlbihhY3Rpb24ucGF5bG9hZC50b2tlbik7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBsb2dpbkZhaWx1cmU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xyXG4gICAgICBzdGF0ZS50b2tlbiA9IG51bGw7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgfSxcclxuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xyXG4gICAgICBzdGF0ZS50b2tlbiA9IG51bGw7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgIHJlbW92ZVRva2VuKCk7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgeyBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbHVyZSwgbG9nb3V0IH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuXHJcbmNvbnN0IGF1dGhSZWR1Y2VyID0gYXV0aFNsaWNlLnJlZHVjZXI7XHJcblxyXG5jb25zdCBmZXRjaExvZ2luID0gKGNyZWRlbnRpYWxzKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXV0aEFwaS5sb2dpbihjcmVkZW50aWFscyk7XHJcbiAgfSBjYXRjaCB7fVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZmV0Y2hMb2dpbiwgYXV0aFJlZHVjZXIsIGxvZ291dCB9O1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwic2V0VG9rZW4iLCJfc2V0VG9rZW4iLCJnZXRUb2tlbiIsInJlbW92ZVRva2VuIiwiYXV0aEFwaSIsImluaXRpYWxTdGF0ZSIsInVzZXIiLCJ0b2tlbiIsImlzQXV0aGVudGljYXRlZCIsImVycm9yIiwiYXV0aFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9naW5TdWNjZXNzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9naW5GYWlsdXJlIiwibG9nb3V0IiwiYWN0aW9ucyIsImF1dGhSZWR1Y2VyIiwicmVkdWNlciIsImZldGNoTG9naW4iLCJjcmVkZW50aWFscyIsInJlc3BvbnNlIiwibG9naW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
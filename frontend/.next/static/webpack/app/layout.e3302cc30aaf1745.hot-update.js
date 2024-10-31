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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authReducer: function() { return /* binding */ authReducer; },\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   logout: function() { return /* binding */ logout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/utils */ \"(app-pages-browser)/./src/utils/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\n\nconst initialState = {\n    user: null,\n    token: (0,_utils__WEBPACK_IMPORTED_MODULE_0__.getToken)() || null,\n    isAuthenticated: false,\n    error: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_2__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.token = action.payload.token;\n            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.setToken)(action.payload.token);\n            state.isAuthenticated = true;\n            state.error = null;\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.token = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.token = null;\n            state.isAuthenticated = false;\n            state.error = null;\n            (0,_utils__WEBPACK_IMPORTED_MODULE_0__.removeToken)();\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (loginForm)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_1__.authApi.login(loginForm);\n            console.log(response);\n            if (response.user) {\n                dispatch(loginSuccess(response));\n                return true;\n            } else {\n                throw new Error(\"Login failed\");\n            }\n        } catch (e) {\n            dispatch(loginFailure(error));\n            throw error;\n        }\n    };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQStDO0FBQ3dCO0FBQ3ZDO0FBRWhDLE1BQU1NLGVBQWU7SUFDbkJDLE1BQU07SUFDTkMsT0FBT0wsZ0RBQVFBLE1BQU07SUFDckJNLGlCQUFpQjtJQUNqQkMsT0FBTztBQUNUO0FBRUEsTUFBTUMsWUFBWVgsNkRBQVdBLENBQUM7SUFDNUJZLE1BQU07SUFDTk47SUFDQU8sVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNUixJQUFJLEdBQUdTLE9BQU9DLE9BQU8sQ0FBQ1YsSUFBSTtZQUNoQ1EsTUFBTVAsS0FBSyxHQUFHUSxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDbENOLGdEQUFTQSxDQUFDYyxPQUFPQyxPQUFPLENBQUNULEtBQUs7WUFDOUJPLE1BQU1OLGVBQWUsR0FBRztZQUN4Qk0sTUFBTUwsS0FBSyxHQUFHO1FBQ2hCO1FBQ0FRLGNBQWMsQ0FBQ0gsT0FBT0M7WUFDcEJELE1BQU1SLElBQUksR0FBRztZQUNiUSxNQUFNUCxLQUFLLEdBQUc7WUFDZE8sTUFBTU4sZUFBZSxHQUFHO1lBQ3hCTSxNQUFNTCxLQUFLLEdBQUdNLE9BQU9DLE9BQU87UUFDOUI7UUFDQUUsUUFBUSxDQUFDSjtZQUNQQSxNQUFNUixJQUFJLEdBQUc7WUFDYlEsTUFBTVAsS0FBSyxHQUFHO1lBQ2RPLE1BQU1OLGVBQWUsR0FBRztZQUN4Qk0sTUFBTUwsS0FBSyxHQUFHO1lBQ2ROLG1EQUFXQTtRQUNiO0lBQ0Y7QUFDRjtBQUVBLE1BQU0sRUFBRVUsWUFBWSxFQUFFSSxZQUFZLEVBQUVDLE1BQU0sRUFBRSxHQUFHUixVQUFVUyxPQUFPO0FBRWhFLE1BQU1DLGNBQWNWLFVBQVVXLE9BQU87QUFFckMsTUFBTUMsYUFBYSxDQUFDQyxZQUFjLE9BQU9DO1FBQ3ZDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU1yQix5Q0FBT0EsQ0FBQ3NCLEtBQUssQ0FBQ0g7WUFDckNJLFFBQVFDLEdBQUcsQ0FBQ0g7WUFDWixJQUFHQSxTQUFTbkIsSUFBSSxFQUFDO2dCQUNma0IsU0FBU1gsYUFBYVk7Z0JBQ3RCLE9BQU87WUFDVCxPQUFPO2dCQUNMLE1BQU0sSUFBSUksTUFBTTtZQUNsQjtRQUNGLEVBQUUsVUFBTTtZQUNOTCxTQUFTUCxhQUFhUjtZQUN0QixNQUFNQTtRQUNSO0lBQ0Y7QUFFMkM7QUFDM0MsK0RBQWVXLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZS5qcz82YzY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgc2V0VG9rZW4gYXMgX3NldFRva2VuLCBnZXRUb2tlbiwgcmVtb3ZlVG9rZW4gfSBmcm9tIFwiQC91dGlsc1wiO1xyXG5pbXBvcnQgeyBhdXRoQXBpIH0gZnJvbSBcIkAvYXBpXCI7XHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgdXNlcjogbnVsbCxcclxuICB0b2tlbjogZ2V0VG9rZW4oKSB8fCBudWxsLFxyXG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJhdXRoXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBsb2dpblN1Y2Nlc3M6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyO1xyXG4gICAgICBzdGF0ZS50b2tlbiA9IGFjdGlvbi5wYXlsb2FkLnRva2VuO1xyXG4gICAgICBfc2V0VG9rZW4oYWN0aW9uLnBheWxvYWQudG9rZW4pO1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgbG9naW5GYWlsdXJlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcclxuICAgICAgc3RhdGUudG9rZW4gPSBudWxsO1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBsb2dvdXQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcclxuICAgICAgc3RhdGUudG9rZW4gPSBudWxsO1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgICByZW1vdmVUb2tlbigpO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHsgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWx1cmUsIGxvZ291dCB9ID0gYXV0aFNsaWNlLmFjdGlvbnM7XHJcblxyXG5jb25zdCBhdXRoUmVkdWNlciA9IGF1dGhTbGljZS5yZWR1Y2VyO1xyXG5cclxuY29uc3QgZmV0Y2hMb2dpbiA9IChsb2dpbkZvcm0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBcGkubG9naW4obG9naW5Gb3JtKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgIGlmKHJlc3BvbnNlLnVzZXIpe1xyXG4gICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3MocmVzcG9uc2UpKTtcclxuICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJMb2dpbiBmYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfSBjYXRjaCB7XHJcbiAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3IpKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGZldGNoTG9naW4sIGF1dGhSZWR1Y2VyLCBsb2dvdXQgfTtcclxuZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsInNldFRva2VuIiwiX3NldFRva2VuIiwiZ2V0VG9rZW4iLCJyZW1vdmVUb2tlbiIsImF1dGhBcGkiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwidG9rZW4iLCJpc0F1dGhlbnRpY2F0ZWQiLCJlcnJvciIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ2luU3VjY2VzcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ2luRmFpbHVyZSIsImxvZ291dCIsImFjdGlvbnMiLCJhdXRoUmVkdWNlciIsInJlZHVjZXIiLCJmZXRjaExvZ2luIiwibG9naW5Gb3JtIiwiZGlzcGF0Y2giLCJyZXNwb25zZSIsImxvZ2luIiwiY29uc29sZSIsImxvZyIsIkVycm9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
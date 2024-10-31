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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   fetchLogout: function() { return /* binding */ fetchLogout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\nconst loadAuthState = ()=>{\n    try {\n        const serialize = localStorage.getItem(\"authState\");\n        return {\n            isAuthenticated: !!token,\n            user: null,\n            error: null\n        };\n    } catch (error) {\n        return {\n            isAuthenticated: false,\n            user: null,\n            error: null\n        };\n    }\n};\nconst initialState = {\n    user: null,\n    isAuthenticated: false,\n    error: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.isAuthenticated = true;\n            state.error = null;\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = null;\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (loginForm)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.login(loginForm);\n            dispatch(loginSuccess(response.data));\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\nconst fetchLogout = ()=>async (dispatch)=>{\n        try {\n            await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.logout();\n            dispatch(logout());\n        } catch (error) {\n            console.error(\"Error logging out:\", error);\n            dispatch(logout());\n        }\n    };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNmO0FBRWhDLE1BQU1FLGdCQUFjO0lBQ2xCLElBQUk7UUFDRixNQUFNQyxZQUFVQyxhQUFhQyxPQUFPLENBQUM7UUFDckMsT0FBTztZQUNMQyxpQkFBZ0IsQ0FBQyxDQUFDQztZQUNsQkMsTUFBSztZQUNMQyxPQUFNO1FBQ1I7SUFDRixFQUFFLE9BQU9BLE9BQU87UUFDZCxPQUFPO1lBQ0xILGlCQUFnQjtZQUNoQkUsTUFBSztZQUNMQyxPQUFNO1FBQ1I7SUFFRjtBQUNGO0FBSUEsTUFBTUMsZUFBZTtJQUNuQkYsTUFBTTtJQUNORixpQkFBaUI7SUFDakJHLE9BQU87QUFDVDtBQUVBLE1BQU1FLFlBQVlYLDZEQUFXQSxDQUFDO0lBQzVCWSxNQUFNO0lBQ05GO0lBQ0FHLFVBQVU7UUFDUkMsY0FBYyxDQUFDQyxPQUFPQztZQUNwQkQsTUFBTVAsSUFBSSxHQUFHUSxPQUFPQyxPQUFPLENBQUNULElBQUk7WUFDaENPLE1BQU1ULGVBQWUsR0FBRztZQUN4QlMsTUFBTU4sS0FBSyxHQUFHO1FBQ2hCO1FBQ0FTLGNBQWMsQ0FBQ0gsT0FBT0M7WUFDcEJELE1BQU1QLElBQUksR0FBRztZQUNiTyxNQUFNVCxlQUFlLEdBQUc7WUFDeEJTLE1BQU1OLEtBQUssR0FBR08sT0FBT0MsT0FBTztRQUM5QjtRQUNBRSxRQUFRLENBQUNKO1lBQ1BBLE1BQU1QLElBQUksR0FBRztZQUNiTyxNQUFNVCxlQUFlLEdBQUc7WUFDeEJTLE1BQU1OLEtBQUssR0FBRztRQUNoQjtJQUNGO0FBQ0Y7QUFFQSxNQUFNLEVBQUVLLFlBQVksRUFBRUksWUFBWSxFQUFFQyxNQUFNLEVBQUUsR0FBR1IsVUFBVVMsT0FBTztBQUVoRSxNQUFNQyxjQUFjVixVQUFVVyxPQUFPO0FBRXJDLE1BQU1DLGFBQWEsQ0FBQ0MsWUFBYyxPQUFPQztRQUN2QyxJQUFJO1lBQ0YsTUFBTUMsV0FBVyxNQUFNekIseUNBQU9BLENBQUMwQixLQUFLLENBQUNIO1lBQ3JDQyxTQUFTWCxhQUFhWSxTQUFTRSxJQUFJO1FBQ3JDLEVBQUUsT0FBT25CLE9BQU87WUFDZGdCLFNBQVNQLGFBQWFULE1BQU1vQixPQUFPO1lBQ25DLE1BQU1wQjtRQUNSO0lBQ0Y7QUFFQSxNQUFNcUIsY0FBYyxJQUFNLE9BQU9MO1FBQy9CLElBQUk7WUFDRixNQUFNeEIseUNBQU9BLENBQUNrQixNQUFNO1lBQ3BCTSxTQUFTTjtRQUNYLEVBQUUsT0FBT1YsT0FBTztZQUNkc0IsUUFBUXRCLEtBQUssQ0FBQyxzQkFBc0JBO1lBQ3BDZ0IsU0FBU047UUFDWDtJQUNGO0FBRW1DO0FBQ25DLCtEQUFlRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanM/NmM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGF1dGhBcGkgfSBmcm9tIFwiQC9hcGlcIjtcclxuXHJcbmNvbnN0IGxvYWRBdXRoU3RhdGU9KCk9PntcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplPWxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFN0YXRlXCIpO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOiEhdG9rZW4sXHJcbiAgICAgIHVzZXI6bnVsbCxcclxuICAgICAgZXJyb3I6bnVsbCxcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOmZhbHNlLFxyXG4gICAgICB1c2VyOm51bGwsXHJcbiAgICAgIGVycm9yOm51bGwsXHJcbiAgICB9XHJcbiAgICBcclxuICB9XHJcbn1cclxuXHJcblxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHVzZXI6IG51bGwsXHJcbiAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICBlcnJvcjogbnVsbCxcclxufTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvZ2luU3VjY2VzczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkLnVzZXI7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgIH0sXHJcbiAgICBsb2dpbkZhaWx1cmU6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBhY3Rpb24ucGF5bG9hZDtcclxuICAgIH0sXHJcbiAgICBsb2dvdXQ6IChzdGF0ZSkgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCB7IGxvZ2luU3VjY2VzcywgbG9naW5GYWlsdXJlLCBsb2dvdXQgfSA9IGF1dGhTbGljZS5hY3Rpb25zO1xyXG5cclxuY29uc3QgYXV0aFJlZHVjZXIgPSBhdXRoU2xpY2UucmVkdWNlcjtcclxuXHJcbmNvbnN0IGZldGNoTG9naW4gPSAobG9naW5Gb3JtKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLmxvZ2luKGxvZ2luRm9ybSk7XHJcbiAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hMb2dvdXQgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgYXV0aEFwaS5sb2dvdXQoKTtcclxuICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvZ2dpbmcgb3V0OlwiLCBlcnJvcik7XHJcbiAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IHsgZmV0Y2hMb2dpbiwgZmV0Y2hMb2dvdXQgfTtcclxuZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImF1dGhBcGkiLCJsb2FkQXV0aFN0YXRlIiwic2VyaWFsaXplIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlzQXV0aGVudGljYXRlZCIsInRva2VuIiwidXNlciIsImVycm9yIiwiaW5pdGlhbFN0YXRlIiwiYXV0aFNsaWNlIiwibmFtZSIsInJlZHVjZXJzIiwibG9naW5TdWNjZXNzIiwic3RhdGUiLCJhY3Rpb24iLCJwYXlsb2FkIiwibG9naW5GYWlsdXJlIiwibG9nb3V0IiwiYWN0aW9ucyIsImF1dGhSZWR1Y2VyIiwicmVkdWNlciIsImZldGNoTG9naW4iLCJsb2dpbkZvcm0iLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwibG9naW4iLCJkYXRhIiwibWVzc2FnZSIsImZldGNoTG9nb3V0IiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
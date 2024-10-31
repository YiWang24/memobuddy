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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   fetchLogout: function() { return /* binding */ fetchLogout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\nconst loadAuthState = ()=>{\n    try {\n        const serializedAuth = localStorage.getItem(\"authState\");\n        if (serializedAuth === null) {\n            return {\n                isAuthenticated: false,\n                user: null,\n                error: null\n            };\n        }\n        return JSON.parse(serializedAuth);\n    } catch (error) {\n        return {\n            isAuthenticated: false,\n            user: null,\n            error: null\n        };\n    }\n};\nconst initialState = {\n    user: null,\n    isAuthenticated: false,\n    error: null\n};\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.isAuthenticated = true;\n            state.error = null;\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = null;\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (loginForm)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.login(loginForm);\n            dispatch(loginSuccess(response.data));\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\nconst fetchLogout = ()=>async (dispatch)=>{\n        try {\n            await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.logout();\n            dispatch(logout());\n        } catch (error) {\n            console.error(\"Error logging out:\", error);\n            dispatch(logout());\n        }\n    };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNmO0FBRWhDLE1BQU1FLGdCQUFnQjtJQUNwQixJQUFJO1FBQ0YsTUFBTUMsaUJBQWlCQyxhQUFhQyxPQUFPLENBQUM7UUFDNUMsSUFBSUYsbUJBQW1CLE1BQU07WUFDM0IsT0FBTztnQkFDTEcsaUJBQWlCO2dCQUNqQkMsTUFBTTtnQkFDTkMsT0FBTztZQUNUO1FBQ0Y7UUFDQSxPQUFPQyxLQUFLQyxLQUFLLENBQUNQO0lBQ3BCLEVBQUUsT0FBT0ssT0FBTztRQUNkLE9BQU87WUFDTEYsaUJBQWlCO1lBQ2pCQyxNQUFNO1lBQ05DLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFQSxNQUFNRyxlQUFlO0lBQ25CSixNQUFNO0lBQ05ELGlCQUFpQjtJQUNqQkUsT0FBTztBQUNUO0FBRUEsTUFBTUksWUFBWVosNkRBQVdBLENBQUM7SUFDNUJhLE1BQU07SUFDTkY7SUFDQUcsVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNVCxJQUFJLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ1gsSUFBSTtZQUNoQ1MsTUFBTVYsZUFBZSxHQUFHO1lBQ3hCVSxNQUFNUixLQUFLLEdBQUc7UUFDaEI7UUFDQVcsY0FBYyxDQUFDSCxPQUFPQztZQUNwQkQsTUFBTVQsSUFBSSxHQUFHO1lBQ2JTLE1BQU1WLGVBQWUsR0FBRztZQUN4QlUsTUFBTVIsS0FBSyxHQUFHUyxPQUFPQyxPQUFPO1FBQzlCO1FBQ0FFLFFBQVEsQ0FBQ0o7WUFDUEEsTUFBTVQsSUFBSSxHQUFHO1lBQ2JTLE1BQU1WLGVBQWUsR0FBRztZQUN4QlUsTUFBTVIsS0FBSyxHQUFHO1FBQ2hCO0lBQ0Y7QUFDRjtBQUVBLE1BQU0sRUFBRU8sWUFBWSxFQUFFSSxZQUFZLEVBQUVDLE1BQU0sRUFBRSxHQUFHUixVQUFVUyxPQUFPO0FBRWhFLE1BQU1DLGNBQWNWLFVBQVVXLE9BQU87QUFFckMsTUFBTUMsYUFBYSxDQUFDQyxZQUFjLE9BQU9DO1FBQ3ZDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU0xQix5Q0FBT0EsQ0FBQzJCLEtBQUssQ0FBQ0g7WUFDckNDLFNBQVNYLGFBQWFZLFNBQVNFLElBQUk7UUFDckMsRUFBRSxPQUFPckIsT0FBTztZQUNka0IsU0FBU1AsYUFBYVgsTUFBTXNCLE9BQU87WUFDbkMsTUFBTXRCO1FBQ1I7SUFDRjtBQUVBLE1BQU11QixjQUFjLElBQU0sT0FBT0w7UUFDL0IsSUFBSTtZQUNGLE1BQU16Qix5Q0FBT0EsQ0FBQ21CLE1BQU07WUFDcEJNLFNBQVNOO1FBQ1gsRUFBRSxPQUFPWixPQUFPO1lBQ2R3QixRQUFReEIsS0FBSyxDQUFDLHNCQUFzQkE7WUFDcENrQixTQUFTTjtRQUNYO0lBQ0Y7QUFFbUM7QUFDbkMsK0RBQWVFLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZS5qcz82YzY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgYXV0aEFwaSB9IGZyb20gXCJAL2FwaVwiO1xyXG5cclxuY29uc3QgbG9hZEF1dGhTdGF0ZSA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZEF1dGggPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImF1dGhTdGF0ZVwiKTtcclxuICAgIGlmIChzZXJpYWxpemVkQXV0aCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRBdXRoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICB1c2VyOiBudWxsLFxyXG4gIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgZXJyb3I6IG51bGwsXHJcbn07XHJcblxyXG5jb25zdCBhdXRoU2xpY2UgPSBjcmVhdGVTbGljZSh7XHJcbiAgbmFtZTogXCJhdXRoXCIsXHJcbiAgaW5pdGlhbFN0YXRlLFxyXG4gIHJlZHVjZXJzOiB7XHJcbiAgICBsb2dpblN1Y2Nlc3M6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBhY3Rpb24ucGF5bG9hZC51c2VyO1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSB0cnVlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICB9LFxyXG4gICAgbG9naW5GYWlsdXJlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgeyBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbHVyZSwgbG9nb3V0IH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuXHJcbmNvbnN0IGF1dGhSZWR1Y2VyID0gYXV0aFNsaWNlLnJlZHVjZXI7XHJcblxyXG5jb25zdCBmZXRjaExvZ2luID0gKGxvZ2luRm9ybSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aEFwaS5sb2dpbihsb2dpbkZvcm0pO1xyXG4gICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGZldGNoTG9nb3V0ID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF1dGhBcGkubG9nb3V0KCk7XHJcbiAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIG91dDpcIiwgZXJyb3IpO1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCB7IGZldGNoTG9naW4sIGZldGNoTG9nb3V0IH07XHJcbmV4cG9ydCBkZWZhdWx0IGF1dGhSZWR1Y2VyO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJhdXRoQXBpIiwibG9hZEF1dGhTdGF0ZSIsInNlcmlhbGl6ZWRBdXRoIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJlcnJvciIsIkpTT04iLCJwYXJzZSIsImluaXRpYWxTdGF0ZSIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ2luU3VjY2VzcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsImxvZ2luRmFpbHVyZSIsImxvZ291dCIsImFjdGlvbnMiLCJhdXRoUmVkdWNlciIsInJlZHVjZXIiLCJmZXRjaExvZ2luIiwibG9naW5Gb3JtIiwiZGlzcGF0Y2giLCJyZXNwb25zZSIsImxvZ2luIiwiZGF0YSIsIm1lc3NhZ2UiLCJmZXRjaExvZ291dCIsImNvbnNvbGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
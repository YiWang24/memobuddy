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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   fetchLogout: function() { return /* binding */ fetchLogout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\nconst loadAuthState = ()=>{\n    try {\n        const serializedAuth = sessionStorage.getItem(\"authState\");\n        if (serializedAuth === null) {\n            return {\n                isAuthenticated: false,\n                user: null,\n                error: null\n            };\n        }\n        return JSON.parse(serializedAuth);\n    } catch (error) {\n        return {\n            isAuthenticated: false,\n            user: null,\n            error: null\n        };\n    }\n};\nconst initialState = loadAuthState();\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.isAuthenticated = true;\n            state.error = null;\n            sessionStorage.setItem(\"authState\", JSON.stringify({\n                isAuthenticated: true,\n                user: action.payload.user,\n                error: null\n            }));\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n            sessionStorage.removeItem(\"authState\");\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = null;\n            sessionStorage.removeItem(\"authState\");\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (loginForm)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.login(loginForm);\n            dispatch(loginSuccess(response.data));\n            return response.data;\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\nconst fentchGoogleLogin = (token)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.googleLogin(token);\n            dispatch(loginSuccess(response.data));\n            return response.data;\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\nconst fetchLogout = ()=>async (dispatch)=>{\n        try {\n            await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.logout();\n            dispatch(logout());\n        } catch (error) {\n            console.error(\"Error logging out:\", error);\n            dispatch(logout());\n        }\n    };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUNmO0FBRWhDLE1BQU1FLGdCQUFnQjtJQUNwQixJQUFJO1FBQ0YsTUFBTUMsaUJBQWlCQyxlQUFlQyxPQUFPLENBQUM7UUFDOUMsSUFBSUYsbUJBQW1CLE1BQU07WUFDM0IsT0FBTztnQkFDTEcsaUJBQWlCO2dCQUNqQkMsTUFBTTtnQkFDTkMsT0FBTztZQUNUO1FBQ0Y7UUFDQSxPQUFPQyxLQUFLQyxLQUFLLENBQUNQO0lBQ3BCLEVBQUUsT0FBT0ssT0FBTztRQUNkLE9BQU87WUFDTEYsaUJBQWlCO1lBQ2pCQyxNQUFNO1lBQ05DLE9BQU87UUFDVDtJQUNGO0FBQ0Y7QUFFQSxNQUFNRyxlQUFlVDtBQUVyQixNQUFNVSxZQUFZWiw2REFBV0EsQ0FBQztJQUM1QmEsTUFBTTtJQUNORjtJQUNBRyxVQUFVO1FBQ1JDLGNBQWMsQ0FBQ0MsT0FBT0M7WUFDcEJELE1BQU1ULElBQUksR0FBR1UsT0FBT0MsT0FBTyxDQUFDWCxJQUFJO1lBQ2hDUyxNQUFNVixlQUFlLEdBQUc7WUFDeEJVLE1BQU1SLEtBQUssR0FBRztZQUNkSixlQUFlZSxPQUFPLENBQ3BCLGFBQ0FWLEtBQUtXLFNBQVMsQ0FBQztnQkFDYmQsaUJBQWlCO2dCQUNqQkMsTUFBTVUsT0FBT0MsT0FBTyxDQUFDWCxJQUFJO2dCQUN6QkMsT0FBTztZQUNUO1FBRUo7UUFDQWEsY0FBYyxDQUFDTCxPQUFPQztZQUNwQkQsTUFBTVQsSUFBSSxHQUFHO1lBQ2JTLE1BQU1WLGVBQWUsR0FBRztZQUN4QlUsTUFBTVIsS0FBSyxHQUFHUyxPQUFPQyxPQUFPO1lBQzVCZCxlQUFla0IsVUFBVSxDQUFDO1FBQzVCO1FBQ0FDLFFBQVEsQ0FBQ1A7WUFDUEEsTUFBTVQsSUFBSSxHQUFHO1lBQ2JTLE1BQU1WLGVBQWUsR0FBRztZQUN4QlUsTUFBTVIsS0FBSyxHQUFHO1lBQ2RKLGVBQWVrQixVQUFVLENBQUM7UUFDNUI7SUFFRjtBQUNGO0FBRUEsTUFBTSxFQUNKUCxZQUFZLEVBQ1pNLFlBQVksRUFDWkUsTUFBTSxFQUNQLEdBQUdYLFVBQVVZLE9BQU87QUFFckIsTUFBTUMsY0FBY2IsVUFBVWMsT0FBTztBQUVyQyxNQUFNQyxhQUFhLENBQUNDLFlBQWMsT0FBT0M7UUFDdkMsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTTdCLHlDQUFPQSxDQUFDOEIsS0FBSyxDQUFDSDtZQUNyQ0MsU0FBU2QsYUFBYWUsU0FBU0UsSUFBSTtZQUNuQyxPQUFPRixTQUFTRSxJQUFJO1FBQ3RCLEVBQUUsT0FBT3hCLE9BQU87WUFDZHFCLFNBQVNSLGFBQWFiLE1BQU15QixPQUFPO1lBQ25DLE1BQU16QjtRQUNSO0lBQ0Y7QUFFQSxNQUFNMEIsb0JBQW9CLENBQUNDLFFBQVUsT0FBT047UUFDMUMsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTTdCLHlDQUFPQSxDQUFDbUMsV0FBVyxDQUFDRDtZQUMzQ04sU0FBU2QsYUFBYWUsU0FBU0UsSUFBSTtZQUNuQyxPQUFPRixTQUFTRSxJQUFJO1FBQ3RCLEVBQUUsT0FBT3hCLE9BQU87WUFDZHFCLFNBQVNSLGFBQWFiLE1BQU15QixPQUFPO1lBQ25DLE1BQU16QjtRQUNSO0lBQ0Y7QUFFQSxNQUFNNkIsY0FBYyxJQUFNLE9BQU9SO1FBQy9CLElBQUk7WUFDRixNQUFNNUIseUNBQU9BLENBQUNzQixNQUFNO1lBQ3BCTSxTQUFTTjtRQUNYLEVBQUUsT0FBT2YsT0FBTztZQUNkOEIsUUFBUTlCLEtBQUssQ0FBQyxzQkFBc0JBO1lBQ3BDcUIsU0FBU047UUFDWDtJQUNGO0FBS21DO0FBQ25DLCtEQUFlRSxXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanM/NmM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGF1dGhBcGkgfSBmcm9tIFwiQC9hcGlcIjtcclxuXHJcbmNvbnN0IGxvYWRBdXRoU3RhdGUgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRBdXRoID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhTdGF0ZVwiKTtcclxuICAgIGlmIChzZXJpYWxpemVkQXV0aCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRBdXRoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGxvYWRBdXRoU3RhdGUoKTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvZ2luU3VjY2VzczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkLnVzZXI7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICBcImF1dGhTdGF0ZVwiLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIGxvZ2luRmFpbHVyZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFN0YXRlXCIpO1xyXG4gICAgfSxcclxuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFN0YXRlXCIpO1xyXG4gICAgfSxcclxuICAgIFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3Qge1xyXG4gIGxvZ2luU3VjY2VzcyxcclxuICBsb2dpbkZhaWx1cmUsXHJcbiAgbG9nb3V0LFxyXG59ID0gYXV0aFNsaWNlLmFjdGlvbnM7XHJcblxyXG5jb25zdCBhdXRoUmVkdWNlciA9IGF1dGhTbGljZS5yZWR1Y2VyO1xyXG5cclxuY29uc3QgZmV0Y2hMb2dpbiA9IChsb2dpbkZvcm0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBcGkubG9naW4obG9naW5Gb3JtKTtcclxuICAgIGRpc3BhdGNoKGxvZ2luU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmVudGNoR29vZ2xlTG9naW4gPSAodG9rZW4pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBcGkuZ29vZ2xlTG9naW4odG9rZW4pO1xyXG4gICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhXHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBmZXRjaExvZ291dCA9ICgpID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBhd2FpdCBhdXRoQXBpLmxvZ291dCgpO1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgbG9nZ2luZyBvdXQ6XCIsIGVycm9yKTtcclxuICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBmZXRjaExvZ2luLCBmZXRjaExvZ291dCB9O1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYXV0aEFwaSIsImxvYWRBdXRoU3RhdGUiLCJzZXJpYWxpemVkQXV0aCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJlcnJvciIsIkpTT04iLCJwYXJzZSIsImluaXRpYWxTdGF0ZSIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ2luU3VjY2VzcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJsb2dpbkZhaWx1cmUiLCJyZW1vdmVJdGVtIiwibG9nb3V0IiwiYWN0aW9ucyIsImF1dGhSZWR1Y2VyIiwicmVkdWNlciIsImZldGNoTG9naW4iLCJsb2dpbkZvcm0iLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwibG9naW4iLCJkYXRhIiwibWVzc2FnZSIsImZlbnRjaEdvb2dsZUxvZ2luIiwidG9rZW4iLCJnb29nbGVMb2dpbiIsImZldGNoTG9nb3V0IiwiY29uc29sZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCheckUser: function() { return /* binding */ fetchCheckUser; },\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   fetchLogout: function() { return /* binding */ fetchLogout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\nconst loadAuthState = ()=>{\n    try {\n        const serializedAuth = sessionStorage.getItem(\"authState\");\n        if (serializedAuth === null) {\n            return {\n                isAuthenticated: false,\n                user: null,\n                error: null\n            };\n        }\n        return JSON.parse(serializedAuth);\n    } catch (error) {\n        return {\n            isAuthenticated: false,\n            user: null,\n            error: null\n        };\n    }\n};\nconst initialState = loadAuthState();\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.isAuthenticated = true;\n            state.error = null;\n            sessionStorage.setItem(\"authState\", JSON.stringify({\n                isAuthenticated: true,\n                user: action.payload.user,\n                error: null\n            }));\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n            sessionStorage.removeItem(\"authState\");\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = null;\n            sessionStorage.removeItem(\"authState\");\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (loginForm)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.login(loginForm);\n            dispatch(loginSuccess(response.data));\n            return response.data;\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\nconst fetchLogout = ()=>async (dispatch)=>{\n        try {\n            await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.logout();\n            dispatch(logout());\n        } catch (error) {\n            console.error(\"Error logging out:\", error);\n            dispatch(logout());\n        }\n    };\nconst fetchCheckUser = (params)=>async (dispatch)=>{\n        try {\n            console.log(\"fetchCheckUser params: \", params);\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.checkCurrentUser(params);\n            console.log(response);\n            dispatch(loginSuccess(response.data));\n            return response.data;\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDZjtBQUVoQyxNQUFNRSxnQkFBZ0I7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLGlCQUFpQkMsZUFBZUMsT0FBTyxDQUFDO1FBQzlDLElBQUlGLG1CQUFtQixNQUFNO1lBQzNCLE9BQU87Z0JBQ0xHLGlCQUFpQjtnQkFDakJDLE1BQU07Z0JBQ05DLE9BQU87WUFDVDtRQUNGO1FBQ0EsT0FBT0MsS0FBS0MsS0FBSyxDQUFDUDtJQUNwQixFQUFFLE9BQU9LLE9BQU87UUFDZCxPQUFPO1lBQ0xGLGlCQUFpQjtZQUNqQkMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsTUFBTUcsZUFBZVQ7QUFFckIsTUFBTVUsWUFBWVosNkRBQVdBLENBQUM7SUFDNUJhLE1BQU07SUFDTkY7SUFDQUcsVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNVCxJQUFJLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ1gsSUFBSTtZQUNoQ1MsTUFBTVYsZUFBZSxHQUFHO1lBQ3hCVSxNQUFNUixLQUFLLEdBQUc7WUFDZEosZUFBZWUsT0FBTyxDQUNwQixhQUNBVixLQUFLVyxTQUFTLENBQUM7Z0JBQ2JkLGlCQUFpQjtnQkFDakJDLE1BQU1VLE9BQU9DLE9BQU8sQ0FBQ1gsSUFBSTtnQkFDekJDLE9BQU87WUFDVDtRQUVKO1FBQ0FhLGNBQWMsQ0FBQ0wsT0FBT0M7WUFDcEJELE1BQU1ULElBQUksR0FBRztZQUNiUyxNQUFNVixlQUFlLEdBQUc7WUFDeEJVLE1BQU1SLEtBQUssR0FBR1MsT0FBT0MsT0FBTztZQUM1QmQsZUFBZWtCLFVBQVUsQ0FBQztRQUM1QjtRQUNBQyxRQUFRLENBQUNQO1lBQ1BBLE1BQU1ULElBQUksR0FBRztZQUNiUyxNQUFNVixlQUFlLEdBQUc7WUFDeEJVLE1BQU1SLEtBQUssR0FBRztZQUNkSixlQUFla0IsVUFBVSxDQUFDO1FBQzVCO0lBQ0Y7QUFDRjtBQUVBLE1BQU0sRUFBRVAsWUFBWSxFQUFFTSxZQUFZLEVBQUVFLE1BQU0sRUFBRSxHQUFHWCxVQUFVWSxPQUFPO0FBRWhFLE1BQU1DLGNBQWNiLFVBQVVjLE9BQU87QUFFckMsTUFBTUMsYUFBYSxDQUFDQyxZQUFjLE9BQU9DO1FBQ3ZDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU03Qix5Q0FBT0EsQ0FBQzhCLEtBQUssQ0FBQ0g7WUFDckNDLFNBQVNkLGFBQWFlLFNBQVNFLElBQUk7WUFDbkMsT0FBT0YsU0FBU0UsSUFBSTtRQUN0QixFQUFFLE9BQU94QixPQUFPO1lBQ2RxQixTQUFTUixhQUFhYixNQUFNeUIsT0FBTztZQUNuQyxNQUFNekI7UUFDUjtJQUNGO0FBRUEsTUFBTTBCLGNBQWMsSUFBTSxPQUFPTDtRQUMvQixJQUFJO1lBQ0YsTUFBTTVCLHlDQUFPQSxDQUFDc0IsTUFBTTtZQUNwQk0sU0FBU047UUFDWCxFQUFFLE9BQU9mLE9BQU87WUFDZDJCLFFBQVEzQixLQUFLLENBQUMsc0JBQXNCQTtZQUNwQ3FCLFNBQVNOO1FBQ1g7SUFDRjtBQUVBLE1BQU1hLGlCQUFpQixDQUFDQyxTQUFXLE9BQU9SO1FBQ3hDLElBQUk7WUFDRk0sUUFBUUcsR0FBRyxDQUFDLDJCQUEyQkQ7WUFDdkMsTUFBTVAsV0FBVyxNQUFNN0IseUNBQU9BLENBQUNzQyxnQkFBZ0IsQ0FBQ0Y7WUFDaERGLFFBQVFHLEdBQUcsQ0FBQ1I7WUFDWkQsU0FBU2QsYUFBYWUsU0FBU0UsSUFBSTtZQUNuQyxPQUFPRixTQUFTRSxJQUFJO1FBQ3RCLEVBQUUsT0FBT3hCLE9BQU87WUFDZHFCLFNBQVNSLGFBQWFiLE1BQU15QixPQUFPO1lBQ25DLE1BQU16QjtRQUNSO0lBQ0Y7QUFLa0Q7QUFDbEQsK0RBQWVpQixXQUFXQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanM/NmM2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVTbGljZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCI7XHJcbmltcG9ydCB7IGF1dGhBcGkgfSBmcm9tIFwiQC9hcGlcIjtcclxuXHJcbmNvbnN0IGxvYWRBdXRoU3RhdGUgPSAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHNlcmlhbGl6ZWRBdXRoID0gc2Vzc2lvblN0b3JhZ2UuZ2V0SXRlbShcImF1dGhTdGF0ZVwiKTtcclxuICAgIGlmIChzZXJpYWxpemVkQXV0aCA9PT0gbnVsbCkge1xyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGlzQXV0aGVudGljYXRlZDogZmFsc2UsXHJcbiAgICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgfTtcclxuICAgIH1cclxuICAgIHJldHVybiBKU09OLnBhcnNlKHNlcmlhbGl6ZWRBdXRoKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgdXNlcjogbnVsbCxcclxuICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICB9O1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IGxvYWRBdXRoU3RhdGUoKTtcclxuXHJcbmNvbnN0IGF1dGhTbGljZSA9IGNyZWF0ZVNsaWNlKHtcclxuICBuYW1lOiBcImF1dGhcIixcclxuICBpbml0aWFsU3RhdGUsXHJcbiAgcmVkdWNlcnM6IHtcclxuICAgIGxvZ2luU3VjY2VzczogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IGFjdGlvbi5wYXlsb2FkLnVzZXI7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IHRydWU7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gbnVsbDtcclxuICAgICAgc2Vzc2lvblN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICBcImF1dGhTdGF0ZVwiLFxyXG4gICAgICAgIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgIGlzQXV0aGVudGljYXRlZDogdHJ1ZSxcclxuICAgICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXIsXHJcbiAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICB9KVxyXG4gICAgICApO1xyXG4gICAgfSxcclxuICAgIGxvZ2luRmFpbHVyZTogKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IGFjdGlvbi5wYXlsb2FkO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFN0YXRlXCIpO1xyXG4gICAgfSxcclxuICAgIGxvZ291dDogKHN0YXRlKSA9PiB7XHJcbiAgICAgIHN0YXRlLnVzZXIgPSBudWxsO1xyXG4gICAgICBzdGF0ZS5pc0F1dGhlbnRpY2F0ZWQgPSBmYWxzZTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5yZW1vdmVJdGVtKFwiYXV0aFN0YXRlXCIpO1xyXG4gICAgfSxcclxuICB9LFxyXG59KTtcclxuXHJcbmNvbnN0IHsgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWx1cmUsIGxvZ291dCB9ID0gYXV0aFNsaWNlLmFjdGlvbnM7XHJcblxyXG5jb25zdCBhdXRoUmVkdWNlciA9IGF1dGhTbGljZS5yZWR1Y2VyO1xyXG5cclxuY29uc3QgZmV0Y2hMb2dpbiA9IChsb2dpbkZvcm0pID0+IGFzeW5jIChkaXNwYXRjaCkgPT4ge1xyXG4gIHRyeSB7XHJcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBcGkubG9naW4obG9naW5Gb3JtKTtcclxuICAgIGRpc3BhdGNoKGxvZ2luU3VjY2VzcyhyZXNwb25zZS5kYXRhKSk7XHJcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIHRocm93IGVycm9yO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGZldGNoTG9nb3V0ID0gKCkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGF1dGhBcGkubG9nb3V0KCk7XHJcbiAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBsb2dnaW5nIG91dDpcIiwgZXJyb3IpO1xyXG4gICAgZGlzcGF0Y2gobG9nb3V0KCkpO1xyXG4gIH1cclxufTtcclxuXHJcbmNvbnN0IGZldGNoQ2hlY2tVc2VyID0gKHBhcmFtcykgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnNvbGUubG9nKFwiZmV0Y2hDaGVja1VzZXIgcGFyYW1zOiBcIiwgcGFyYW1zKTtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aEFwaS5jaGVja0N1cnJlbnRVc2VyKHBhcmFtcyk7XHJcbiAgICBjb25zb2xlLmxvZyhyZXNwb25zZSk7XHJcbiAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3MocmVzcG9uc2UuZGF0YSkpO1xyXG4gICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5cclxuXHJcblxyXG5leHBvcnQgeyBmZXRjaExvZ2luLCBmZXRjaExvZ291dCAsZmV0Y2hDaGVja1VzZXJ9O1xyXG5leHBvcnQgZGVmYXVsdCBhdXRoUmVkdWNlcjtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZVNsaWNlIiwiYXV0aEFwaSIsImxvYWRBdXRoU3RhdGUiLCJzZXJpYWxpemVkQXV0aCIsInNlc3Npb25TdG9yYWdlIiwiZ2V0SXRlbSIsImlzQXV0aGVudGljYXRlZCIsInVzZXIiLCJlcnJvciIsIkpTT04iLCJwYXJzZSIsImluaXRpYWxTdGF0ZSIsImF1dGhTbGljZSIsIm5hbWUiLCJyZWR1Y2VycyIsImxvZ2luU3VjY2VzcyIsInN0YXRlIiwiYWN0aW9uIiwicGF5bG9hZCIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJsb2dpbkZhaWx1cmUiLCJyZW1vdmVJdGVtIiwibG9nb3V0IiwiYWN0aW9ucyIsImF1dGhSZWR1Y2VyIiwicmVkdWNlciIsImZldGNoTG9naW4iLCJsb2dpbkZvcm0iLCJkaXNwYXRjaCIsInJlc3BvbnNlIiwibG9naW4iLCJkYXRhIiwibWVzc2FnZSIsImZldGNoTG9nb3V0IiwiY29uc29sZSIsImZldGNoQ2hlY2tVc2VyIiwicGFyYW1zIiwibG9nIiwiY2hlY2tDdXJyZW50VXNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
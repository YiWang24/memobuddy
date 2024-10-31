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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   fetchCheckUser: function() { return /* binding */ fetchCheckUser; },\n/* harmony export */   fetchLogin: function() { return /* binding */ fetchLogin; },\n/* harmony export */   fetchLogout: function() { return /* binding */ fetchLogout; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n\n\nconst loadAuthState = ()=>{\n    try {\n        const serializedAuth = sessionStorage.getItem(\"authState\");\n        if (serializedAuth === null) {\n            return {\n                isAuthenticated: false,\n                user: null,\n                error: null\n            };\n        }\n        return JSON.parse(serializedAuth);\n    } catch (error) {\n        return {\n            isAuthenticated: false,\n            user: null,\n            error: null\n        };\n    }\n};\nconst initialState = loadAuthState();\nconst authSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_1__.createSlice)({\n    name: \"auth\",\n    initialState,\n    reducers: {\n        loginSuccess: (state, action)=>{\n            state.user = action.payload.user;\n            state.isAuthenticated = true;\n            state.error = null;\n            sessionStorage.setItem(\"authState\", JSON.stringify({\n                isAuthenticated: true,\n                user: action.payload.user,\n                error: null\n            }));\n        },\n        loginFailure: (state, action)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = action.payload;\n            sessionStorage.removeItem(\"authState\");\n        },\n        logout: (state)=>{\n            state.user = null;\n            state.isAuthenticated = false;\n            state.error = null;\n            sessionStorage.removeItem(\"authState\");\n        }\n    }\n});\nconst { loginSuccess, loginFailure, logout } = authSlice.actions;\nconst authReducer = authSlice.reducer;\nconst fetchLogin = (loginForm)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.login(loginForm);\n            dispatch(loginSuccess(response.data));\n            return response.data;\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\nconst fetchLogout = ()=>async (dispatch)=>{\n        try {\n            await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.logout();\n            dispatch(logout());\n        } catch (error) {\n            console.error(\"Error logging out:\", error);\n            dispatch(logout());\n        }\n    };\nconst fetchCheckUser = (params)=>async (dispatch)=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_0__.authApi.checkCurrentUser(params);\n            console.log(response.data);\n            dispatch(loginSuccess(response.data));\n            return response.data;\n        } catch (error) {\n            dispatch(loginFailure(error.message));\n            throw error;\n        }\n    };\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (authReducer);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBK0M7QUFDZjtBQUVoQyxNQUFNRSxnQkFBZ0I7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLGlCQUFpQkMsZUFBZUMsT0FBTyxDQUFDO1FBQzlDLElBQUlGLG1CQUFtQixNQUFNO1lBQzNCLE9BQU87Z0JBQ0xHLGlCQUFpQjtnQkFDakJDLE1BQU07Z0JBQ05DLE9BQU87WUFDVDtRQUNGO1FBQ0EsT0FBT0MsS0FBS0MsS0FBSyxDQUFDUDtJQUNwQixFQUFFLE9BQU9LLE9BQU87UUFDZCxPQUFPO1lBQ0xGLGlCQUFpQjtZQUNqQkMsTUFBTTtZQUNOQyxPQUFPO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsTUFBTUcsZUFBZVQ7QUFFckIsTUFBTVUsWUFBWVosNkRBQVdBLENBQUM7SUFDNUJhLE1BQU07SUFDTkY7SUFDQUcsVUFBVTtRQUNSQyxjQUFjLENBQUNDLE9BQU9DO1lBQ3BCRCxNQUFNVCxJQUFJLEdBQUdVLE9BQU9DLE9BQU8sQ0FBQ1gsSUFBSTtZQUNoQ1MsTUFBTVYsZUFBZSxHQUFHO1lBQ3hCVSxNQUFNUixLQUFLLEdBQUc7WUFDZEosZUFBZWUsT0FBTyxDQUNwQixhQUNBVixLQUFLVyxTQUFTLENBQUM7Z0JBQ2JkLGlCQUFpQjtnQkFDakJDLE1BQU1VLE9BQU9DLE9BQU8sQ0FBQ1gsSUFBSTtnQkFDekJDLE9BQU87WUFDVDtRQUVKO1FBQ0FhLGNBQWMsQ0FBQ0wsT0FBT0M7WUFDcEJELE1BQU1ULElBQUksR0FBRztZQUNiUyxNQUFNVixlQUFlLEdBQUc7WUFDeEJVLE1BQU1SLEtBQUssR0FBR1MsT0FBT0MsT0FBTztZQUM1QmQsZUFBZWtCLFVBQVUsQ0FBQztRQUM1QjtRQUNBQyxRQUFRLENBQUNQO1lBQ1BBLE1BQU1ULElBQUksR0FBRztZQUNiUyxNQUFNVixlQUFlLEdBQUc7WUFDeEJVLE1BQU1SLEtBQUssR0FBRztZQUNkSixlQUFla0IsVUFBVSxDQUFDO1FBQzVCO0lBQ0Y7QUFDRjtBQUVBLE1BQU0sRUFBRVAsWUFBWSxFQUFFTSxZQUFZLEVBQUVFLE1BQU0sRUFBRSxHQUFHWCxVQUFVWSxPQUFPO0FBRWhFLE1BQU1DLGNBQWNiLFVBQVVjLE9BQU87QUFFckMsTUFBTUMsYUFBYSxDQUFDQyxZQUFjLE9BQU9DO1FBQ3ZDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU03Qix5Q0FBT0EsQ0FBQzhCLEtBQUssQ0FBQ0g7WUFDckNDLFNBQVNkLGFBQWFlLFNBQVNFLElBQUk7WUFDbkMsT0FBT0YsU0FBU0UsSUFBSTtRQUN0QixFQUFFLE9BQU94QixPQUFPO1lBQ2RxQixTQUFTUixhQUFhYixNQUFNeUIsT0FBTztZQUNuQyxNQUFNekI7UUFDUjtJQUNGO0FBRUEsTUFBTTBCLGNBQWMsSUFBTSxPQUFPTDtRQUMvQixJQUFJO1lBQ0YsTUFBTTVCLHlDQUFPQSxDQUFDc0IsTUFBTTtZQUNwQk0sU0FBU047UUFDWCxFQUFFLE9BQU9mLE9BQU87WUFDZDJCLFFBQVEzQixLQUFLLENBQUMsc0JBQXNCQTtZQUNwQ3FCLFNBQVNOO1FBQ1g7SUFDRjtBQUVBLE1BQU1hLGlCQUFpQixDQUFDQyxTQUFXLE9BQU9SO1FBQ3hDLElBQUk7WUFDRixNQUFNQyxXQUFXLE1BQU03Qix5Q0FBT0EsQ0FBQ3FDLGdCQUFnQixDQUFDRDtZQUNoREYsUUFBUUksR0FBRyxDQUFDVCxTQUFTRSxJQUFJO1lBQ3pCSCxTQUFTZCxhQUFhZSxTQUFTRSxJQUFJO1lBQ25DLE9BQU9GLFNBQVNFLElBQUk7UUFDdEIsRUFBRSxPQUFPeEIsT0FBTztZQUNkcUIsU0FBU1IsYUFBYWIsTUFBTXlCLE9BQU87WUFDbkMsTUFBTXpCO1FBQ1I7SUFDRjtBQUtrRDtBQUNsRCwrREFBZWlCLFdBQVdBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZS5qcz82YzY1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcclxuaW1wb3J0IHsgYXV0aEFwaSB9IGZyb20gXCJAL2FwaVwiO1xyXG5cclxuY29uc3QgbG9hZEF1dGhTdGF0ZSA9ICgpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3Qgc2VyaWFsaXplZEF1dGggPSBzZXNzaW9uU3RvcmFnZS5nZXRJdGVtKFwiYXV0aFN0YXRlXCIpO1xyXG4gICAgaWYgKHNlcmlhbGl6ZWRBdXRoID09PSBudWxsKSB7XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXNBdXRoZW50aWNhdGVkOiBmYWxzZSxcclxuICAgICAgICB1c2VyOiBudWxsLFxyXG4gICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIEpTT04ucGFyc2Uoc2VyaWFsaXplZEF1dGgpO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpc0F1dGhlbnRpY2F0ZWQ6IGZhbHNlLFxyXG4gICAgICB1c2VyOiBudWxsLFxyXG4gICAgICBlcnJvcjogbnVsbCxcclxuICAgIH07XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0gbG9hZEF1dGhTdGF0ZSgpO1xyXG5cclxuY29uc3QgYXV0aFNsaWNlID0gY3JlYXRlU2xpY2Uoe1xyXG4gIG5hbWU6IFwiYXV0aFwiLFxyXG4gIGluaXRpYWxTdGF0ZSxcclxuICByZWR1Y2Vyczoge1xyXG4gICAgbG9naW5TdWNjZXNzOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gYWN0aW9uLnBheWxvYWQudXNlcjtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gdHJ1ZTtcclxuICAgICAgc3RhdGUuZXJyb3IgPSBudWxsO1xyXG4gICAgICBzZXNzaW9uU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgIFwiYXV0aFN0YXRlXCIsXHJcbiAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgaXNBdXRoZW50aWNhdGVkOiB0cnVlLFxyXG4gICAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlcixcclxuICAgICAgICAgIGVycm9yOiBudWxsLFxyXG4gICAgICAgIH0pXHJcbiAgICAgICk7XHJcbiAgICB9LFxyXG4gICAgbG9naW5GYWlsdXJlOiAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gICAgICBzdGF0ZS51c2VyID0gbnVsbDtcclxuICAgICAgc3RhdGUuaXNBdXRoZW50aWNhdGVkID0gZmFsc2U7XHJcbiAgICAgIHN0YXRlLmVycm9yID0gYWN0aW9uLnBheWxvYWQ7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoU3RhdGVcIik7XHJcbiAgICB9LFxyXG4gICAgbG9nb3V0OiAoc3RhdGUpID0+IHtcclxuICAgICAgc3RhdGUudXNlciA9IG51bGw7XHJcbiAgICAgIHN0YXRlLmlzQXV0aGVudGljYXRlZCA9IGZhbHNlO1xyXG4gICAgICBzdGF0ZS5lcnJvciA9IG51bGw7XHJcbiAgICAgIHNlc3Npb25TdG9yYWdlLnJlbW92ZUl0ZW0oXCJhdXRoU3RhdGVcIik7XHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pO1xyXG5cclxuY29uc3QgeyBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbHVyZSwgbG9nb3V0IH0gPSBhdXRoU2xpY2UuYWN0aW9ucztcclxuXHJcbmNvbnN0IGF1dGhSZWR1Y2VyID0gYXV0aFNsaWNlLnJlZHVjZXI7XHJcblxyXG5jb25zdCBmZXRjaExvZ2luID0gKGxvZ2luRm9ybSkgPT4gYXN5bmMgKGRpc3BhdGNoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aEFwaS5sb2dpbihsb2dpbkZvcm0pO1xyXG4gICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hMb2dvdXQgPSAoKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgYXdhaXQgYXV0aEFwaS5sb2dvdXQoKTtcclxuICAgIGRpc3BhdGNoKGxvZ291dCgpKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkVycm9yIGxvZ2dpbmcgb3V0OlwiLCBlcnJvcik7XHJcbiAgICBkaXNwYXRjaChsb2dvdXQoKSk7XHJcbiAgfVxyXG59O1xyXG5cclxuY29uc3QgZmV0Y2hDaGVja1VzZXIgPSAocGFyYW1zKSA9PiBhc3luYyAoZGlzcGF0Y2gpID0+IHtcclxuICB0cnkge1xyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLmNoZWNrQ3VycmVudFVzZXIocGFyYW1zKTtcclxuICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlLmRhdGEpO1xyXG4gICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHJlc3BvbnNlLmRhdGEpKTtcclxuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgdGhyb3cgZXJyb3I7XHJcbiAgfVxyXG59O1xyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IHsgZmV0Y2hMb2dpbiwgZmV0Y2hMb2dvdXQgLGZldGNoQ2hlY2tVc2VyfTtcclxuZXhwb3J0IGRlZmF1bHQgYXV0aFJlZHVjZXI7XHJcbiJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImF1dGhBcGkiLCJsb2FkQXV0aFN0YXRlIiwic2VyaWFsaXplZEF1dGgiLCJzZXNzaW9uU3RvcmFnZSIsImdldEl0ZW0iLCJpc0F1dGhlbnRpY2F0ZWQiLCJ1c2VyIiwiZXJyb3IiLCJKU09OIiwicGFyc2UiLCJpbml0aWFsU3RhdGUiLCJhdXRoU2xpY2UiLCJuYW1lIiwicmVkdWNlcnMiLCJsb2dpblN1Y2Nlc3MiLCJzdGF0ZSIsImFjdGlvbiIsInBheWxvYWQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwibG9naW5GYWlsdXJlIiwicmVtb3ZlSXRlbSIsImxvZ291dCIsImFjdGlvbnMiLCJhdXRoUmVkdWNlciIsInJlZHVjZXIiLCJmZXRjaExvZ2luIiwibG9naW5Gb3JtIiwiZGlzcGF0Y2giLCJyZXNwb25zZSIsImxvZ2luIiwiZGF0YSIsIm1lc3NhZ2UiLCJmZXRjaExvZ291dCIsImNvbnNvbGUiLCJmZXRjaENoZWNrVXNlciIsInBhcmFtcyIsImNoZWNrQ3VycmVudFVzZXIiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/features/auth/authSlice.js\n"));

/***/ })

});
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

/***/ "(app-pages-browser)/./src/api/auth.js":
/*!*************************!*\
  !*** ./src/api/auth.js ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authApi: function() { return /* binding */ authApi; }\n/* harmony export */ });\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ \"(app-pages-browser)/./src/constants/index.js\");\n\n\nconst authApi = {\n    login: async (credentials)=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.LOGIN, credentials);\n            return response;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    register: async (email, password)=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.REGISTER, {\n                email,\n                password\n            });\n            return response;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    googleLogin: ()=>{\n        window.location.href = \"http://localhost:8888/api/auth/google\";\n    },\n    checkCurrentUser: async (queryString)=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get();\n            return response;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    logout: async ()=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.LOGOUT);\n            return response;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFDYTtBQUV6QyxNQUFNRSxVQUFVO0lBQ3JCQyxPQUFPLE9BQU9DO1FBQ1osSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUwsa0RBQU9BLENBQUNNLElBQUksQ0FBQ0wsd0RBQVVBLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxFQUFFSjtZQUMzRCxPQUFPQztRQUNULEVBQUUsT0FBT0ksT0FBTztZQUNkLE9BQU87Z0JBQUVBLE9BQU9BLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSTtZQUFDO1FBQ3RDO0lBQ0Y7SUFDQUMsVUFBVSxPQUFPQyxPQUFPQztRQUN0QixJQUFJO1lBQ0YsTUFBTVIsV0FBVyxNQUFNTCxrREFBT0EsQ0FBQ00sSUFBSSxDQUFDTCx3REFBVUEsQ0FBQ00sSUFBSSxDQUFDTyxRQUFRLEVBQUU7Z0JBQzVERjtnQkFDQUM7WUFDRjtZQUNBLE9BQU9SO1FBQ1QsRUFBRSxPQUFPSSxPQUFPO1lBQ2QsT0FBTztnQkFBRUEsT0FBT0EsTUFBTUosUUFBUSxDQUFDSyxJQUFJO1lBQUM7UUFDdEM7SUFDRjtJQUNBSyxhQUFhO1FBQ1hDLE9BQU9DLFFBQVEsQ0FBQ0MsSUFBSSxHQUFHO0lBQ3pCO0lBQ0FDLGtCQUFrQixPQUFPQztRQUN2QixJQUFJO1lBQ0YsTUFBTWYsV0FBVyxNQUFNTCxrREFBT0EsQ0FBQ3FCLEdBQUc7WUFDbEMsT0FBT2hCO1FBQ1QsRUFBRSxPQUFPSSxPQUFPO1lBQ2QsT0FBTztnQkFBRUEsT0FBT0EsTUFBTUosUUFBUSxDQUFDSyxJQUFJO1lBQUM7UUFDdEM7SUFDRjtJQUNBWSxRQUFRO1FBQ04sSUFBSTtZQUNGLE1BQU1qQixXQUFXLE1BQU1MLGtEQUFPQSxDQUFDTSxJQUFJLENBQUNMLHdEQUFVQSxDQUFDTSxJQUFJLENBQUNnQixNQUFNO1lBQzFELE9BQU9sQjtRQUNULEVBQUUsT0FBT0ksT0FBTztZQUNkLE9BQU87Z0JBQUVBLE9BQU9BLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSTtZQUFDO1FBQ3RDO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvYXV0aC5qcz81ZmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi9saWIvYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJX1JPVVRFUyB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoQXBpID0ge1xyXG4gIGxvZ2luOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KEFQSV9ST1VURVMuQVVUSC5MT0dJTiwgY3JlZGVudGlhbHMpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVnaXN0ZXI6IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KEFQSV9ST1VURVMuQVVUSC5SRUdJU1RFUiwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIGdvb2dsZUxvZ2luOiAoKSA9PiB7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IFwiaHR0cDovL2xvY2FsaG9zdDo4ODg4L2FwaS9hdXRoL2dvb2dsZVwiO1xyXG4gIH0sXHJcbiAgY2hlY2tDdXJyZW50VXNlcjogYXN5bmMgKHF1ZXJ5U3RyaW5nKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuZ2V0KCk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBsb2dvdXQ6IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KEFQSV9ST1VURVMuQVVUSC5MT0dPVVQpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6WyJyZXF1ZXN0IiwiQVBJX1JPVVRFUyIsImF1dGhBcGkiLCJsb2dpbiIsImNyZWRlbnRpYWxzIiwicmVzcG9uc2UiLCJwb3N0IiwiQVVUSCIsIkxPR0lOIiwiZXJyb3IiLCJkYXRhIiwicmVnaXN0ZXIiLCJlbWFpbCIsInBhc3N3b3JkIiwiUkVHSVNURVIiLCJnb29nbGVMb2dpbiIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNoZWNrQ3VycmVudFVzZXIiLCJxdWVyeVN0cmluZyIsImdldCIsImxvZ291dCIsIkxPR09VVCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/auth.js\n"));

/***/ })

});
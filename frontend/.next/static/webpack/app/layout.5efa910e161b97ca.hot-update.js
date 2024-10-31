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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authApi: function() { return /* binding */ authApi; }\n/* harmony export */ });\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ \"(app-pages-browser)/./src/constants/index.js\");\n\n\nconst authApi = {\n    login: async (credentials)=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.LOGIN, {\n                email,\n                password\n            });\n            return response.data;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    googleLogin: async (code)=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.GOOGLE.LOGIN);\n            return response.data;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    googleCallback: async ()=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.GOOGLE.CALLBACK);\n            return response.data;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    register: async (email1, password1)=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.REGISTER, {\n                email: email1,\n                password: password1\n            });\n            return response.data;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    logout: async ()=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.LOGOUT);\n            return response.data;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFDYTtBQUV6QyxNQUFNRSxVQUFVO0lBQ3JCQyxPQUFPLE9BQU9DO1FBQ1osSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUwsa0RBQU9BLENBQUNNLElBQUksQ0FBQ0wsd0RBQVVBLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxFQUFFO2dCQUN6REM7Z0JBQ0FDO1lBQ0Y7WUFDQSxPQUFPTCxTQUFTTSxJQUFJO1FBQ3RCLEVBQUUsT0FBT0MsT0FBTztZQUNkLE9BQU87Z0JBQUVBLE9BQU9BLE1BQU1QLFFBQVEsQ0FBQ00sSUFBSTtZQUFDO1FBQ3RDO0lBQ0Y7SUFDQUUsYUFBYSxPQUFPQztRQUNsQixJQUFJO1lBQ0YsTUFBTVQsV0FBVyxNQUFNTCxrREFBT0EsQ0FBQ2UsR0FBRyxDQUFDZCx3REFBVUEsQ0FBQ00sSUFBSSxDQUFDUyxNQUFNLENBQUNSLEtBQUs7WUFDL0QsT0FBT0gsU0FBU00sSUFBSTtRQUN0QixFQUFFLE9BQU9DLE9BQU87WUFDZCxPQUFPO2dCQUFFQSxPQUFPQSxNQUFNUCxRQUFRLENBQUNNLElBQUk7WUFBQztRQUN0QztJQUNGO0lBQ0FNLGdCQUFnQjtRQUNkLElBQUk7WUFDRixNQUFNWixXQUFXLE1BQU1MLGtEQUFPQSxDQUFDZSxHQUFHLENBQUNkLHdEQUFVQSxDQUFDTSxJQUFJLENBQUNTLE1BQU0sQ0FBQ0UsUUFBUTtZQUNsRSxPQUFPYixTQUFTTSxJQUFJO1FBQ3RCLEVBQUUsT0FBT0MsT0FBTztZQUNkLE9BQU87Z0JBQUVBLE9BQU9BLE1BQU1QLFFBQVEsQ0FBQ00sSUFBSTtZQUFDO1FBQ3RDO0lBQ0Y7SUFDQVEsVUFBVSxPQUFPVixRQUFPQztRQUN0QixJQUFJO1lBQ0YsTUFBTUwsV0FBVyxNQUFNTCxrREFBT0EsQ0FBQ00sSUFBSSxDQUFDTCx3REFBVUEsQ0FBQ00sSUFBSSxDQUFDYSxRQUFRLEVBQUU7Z0JBQzVEWCxPQUFBQTtnQkFDQUMsVUFBQUE7WUFDRjtZQUNBLE9BQU9MLFNBQVNNLElBQUk7UUFDdEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2QsT0FBTztnQkFBRUEsT0FBT0EsTUFBTVAsUUFBUSxDQUFDTSxJQUFJO1lBQUM7UUFDdEM7SUFDRjtJQUNFVSxRQUFRO1FBQ0osSUFBSTtZQUNKLE1BQU1oQixXQUFXLE1BQU1MLGtEQUFPQSxDQUFDTSxJQUFJLENBQUNMLHdEQUFVQSxDQUFDTSxJQUFJLENBQUNlLE1BQU07WUFDMUQsT0FBT2pCLFNBQVNNLElBQUk7UUFDcEIsRUFBRSxPQUFPQyxPQUFPO1lBQ2hCLE9BQU87Z0JBQUVBLE9BQU9BLE1BQU1QLFFBQVEsQ0FBQ00sSUFBSTtZQUFDO1FBQ3BDO0lBQ0o7QUFFSixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvYXV0aC5qcz81ZmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi9saWIvYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJX1JPVVRFUyB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoQXBpID0ge1xyXG4gIGxvZ2luOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KEFQSV9ST1VURVMuQVVUSC5MT0dJTiwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ29vZ2xlTG9naW46IGFzeW5jIChjb2RlKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QuZ2V0KEFQSV9ST1VURVMuQVVUSC5HT09HTEUuTE9HSU4pO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBnb29nbGVDYWxsYmFjazogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LmdldChBUElfUk9VVEVTLkFVVEguR09PR0xFLkNBTExCQUNLKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgcmVnaXN0ZXI6IGFzeW5jIChlbWFpbCwgcGFzc3dvcmQpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KEFQSV9ST1VURVMuQVVUSC5SRUdJU1RFUiwge1xyXG4gICAgICAgIGVtYWlsLFxyXG4gICAgICAgIHBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgICBsb2dvdXQ6IGFzeW5jICgpID0+IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KEFQSV9ST1VURVMuQVVUSC5MT0dPVVQpO1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEgfTtcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG5cclxufTsgIl0sIm5hbWVzIjpbInJlcXVlc3QiLCJBUElfUk9VVEVTIiwiYXV0aEFwaSIsImxvZ2luIiwiY3JlZGVudGlhbHMiLCJyZXNwb25zZSIsInBvc3QiLCJBVVRIIiwiTE9HSU4iLCJlbWFpbCIsInBhc3N3b3JkIiwiZGF0YSIsImVycm9yIiwiZ29vZ2xlTG9naW4iLCJjb2RlIiwiZ2V0IiwiR09PR0xFIiwiZ29vZ2xlQ2FsbGJhY2siLCJDQUxMQkFDSyIsInJlZ2lzdGVyIiwiUkVHSVNURVIiLCJsb2dvdXQiLCJMT0dPVVQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/auth.js\n"));

/***/ })

});
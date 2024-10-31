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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   authApi: function() { return /* binding */ authApi; }\n/* harmony export */ });\n/* harmony import */ var _lib_axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../lib/axios */ \"(app-pages-browser)/./src/lib/axios.js\");\n/* harmony import */ var _constants_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../constants/index */ \"(app-pages-browser)/./src/constants/index.js\");\n\n\nconst authApi = {\n    login: async (credentials)=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.LOGIN, credentials);\n            return response;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    googleLogin: async ()=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.GOOGLE.LOGIN);\n            return response;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    googleCallback: async ()=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.GOOGLE.CALLBACK);\n            return response;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    register: async (email, password)=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.REGISTER, {\n                email,\n                password\n            });\n            return response.data;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    },\n    logout: async ()=>{\n        try {\n            const response = await _lib_axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(_constants_index__WEBPACK_IMPORTED_MODULE_1__.API_ROUTES.AUTH.LOGOUT);\n            return response.data;\n        } catch (error) {\n            return {\n                error: error.response.data\n            };\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcGkvYXV0aC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBbUM7QUFDYTtBQUV6QyxNQUFNRSxVQUFVO0lBQ3JCQyxPQUFPLE9BQU9DO1FBQ1osSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUwsa0RBQU9BLENBQUNNLElBQUksQ0FBQ0wsd0RBQVVBLENBQUNNLElBQUksQ0FBQ0MsS0FBSyxFQUFFSjtZQUMzRCxPQUFPQztRQUNULEVBQUUsT0FBT0ksT0FBTztZQUNkLE9BQU87Z0JBQUVBLE9BQU9BLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSTtZQUFDO1FBQ3RDO0lBQ0Y7SUFDQUMsYUFBYTtRQUNYLElBQUk7WUFDRixNQUFNTixXQUFXLE1BQU1MLGtEQUFPQSxDQUFDWSxHQUFHLENBQUNYLHdEQUFVQSxDQUFDTSxJQUFJLENBQUNNLE1BQU0sQ0FBQ0wsS0FBSztZQUMvRCxPQUFPSDtRQUNULEVBQUUsT0FBT0ksT0FBTztZQUNkLE9BQU87Z0JBQUVBLE9BQU9BLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSTtZQUFDO1FBQ3RDO0lBQ0Y7SUFDQUksZ0JBQWdCO1FBQ2QsSUFBSTtZQUNGLE1BQU1ULFdBQVcsTUFBTUwsa0RBQU9BLENBQUNZLEdBQUcsQ0FBQ1gsd0RBQVVBLENBQUNNLElBQUksQ0FBQ00sTUFBTSxDQUFDRSxRQUFRO1lBQ2xFLE9BQU9WO1FBQ1QsRUFBRSxPQUFPSSxPQUFPO1lBQ2QsT0FBTztnQkFBRUEsT0FBT0EsTUFBTUosUUFBUSxDQUFDSyxJQUFJO1lBQUM7UUFDdEM7SUFDRjtJQUNBTSxVQUFVLE9BQU9DLE9BQU9DO1FBQ3RCLElBQUk7WUFDRixNQUFNYixXQUFXLE1BQU1MLGtEQUFPQSxDQUFDTSxJQUFJLENBQUNMLHdEQUFVQSxDQUFDTSxJQUFJLENBQUNZLFFBQVEsRUFBRTtnQkFDNURGO2dCQUNBQztZQUNGO1lBQ0EsT0FBT2IsU0FBU0ssSUFBSTtRQUN0QixFQUFFLE9BQU9ELE9BQU87WUFDZCxPQUFPO2dCQUFFQSxPQUFPQSxNQUFNSixRQUFRLENBQUNLLElBQUk7WUFBQztRQUN0QztJQUNGO0lBQ0FVLFFBQVE7UUFDTixJQUFJO1lBQ0YsTUFBTWYsV0FBVyxNQUFNTCxrREFBT0EsQ0FBQ00sSUFBSSxDQUFDTCx3REFBVUEsQ0FBQ00sSUFBSSxDQUFDYyxNQUFNO1lBQzFELE9BQU9oQixTQUFTSyxJQUFJO1FBQ3RCLEVBQUUsT0FBT0QsT0FBTztZQUNkLE9BQU87Z0JBQUVBLE9BQU9BLE1BQU1KLFFBQVEsQ0FBQ0ssSUFBSTtZQUFDO1FBQ3RDO0lBQ0Y7QUFDRixFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcGkvYXV0aC5qcz81ZmQ1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCByZXF1ZXN0IGZyb20gXCIuLi9saWIvYXhpb3NcIjtcclxuaW1wb3J0IHsgQVBJX1JPVVRFUyB9IGZyb20gXCIuLi9jb25zdGFudHMvaW5kZXhcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBhdXRoQXBpID0ge1xyXG4gIGxvZ2luOiBhc3luYyAoY3JlZGVudGlhbHMpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5wb3N0KEFQSV9ST1VURVMuQVVUSC5MT0dJTiwgY3JlZGVudGlhbHMpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICByZXR1cm4geyBlcnJvcjogZXJyb3IucmVzcG9uc2UuZGF0YSB9O1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgZ29vZ2xlTG9naW46IGFzeW5jICgpID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgcmVxdWVzdC5nZXQoQVBJX1JPVVRFUy5BVVRILkdPT0dMRS5MT0dJTik7XHJcbiAgICAgIHJldHVybiByZXNwb25zZTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiB7IGVycm9yOiBlcnJvci5yZXNwb25zZS5kYXRhIH07XHJcbiAgICB9XHJcbiAgfSxcclxuICBnb29nbGVDYWxsYmFjazogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LmdldChBUElfUk9VVEVTLkFVVEguR09PR0xFLkNBTExCQUNLKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIHJlZ2lzdGVyOiBhc3luYyAoZW1haWwsIHBhc3N3b3JkKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHJlcXVlc3QucG9zdChBUElfUk9VVEVTLkFVVEguUkVHSVNURVIsIHtcclxuICAgICAgICBlbWFpbCxcclxuICAgICAgICBwYXNzd29yZCxcclxuICAgICAgfSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEgfTtcclxuICAgIH1cclxuICB9LFxyXG4gIGxvZ291dDogYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCByZXF1ZXN0LnBvc3QoQVBJX1JPVVRFUy5BVVRILkxPR09VVCk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgcmV0dXJuIHsgZXJyb3I6IGVycm9yLnJlc3BvbnNlLmRhdGEgfTtcclxuICAgIH1cclxuICB9LFxyXG59O1xyXG4iXSwibmFtZXMiOlsicmVxdWVzdCIsIkFQSV9ST1VURVMiLCJhdXRoQXBpIiwibG9naW4iLCJjcmVkZW50aWFscyIsInJlc3BvbnNlIiwicG9zdCIsIkFVVEgiLCJMT0dJTiIsImVycm9yIiwiZGF0YSIsImdvb2dsZUxvZ2luIiwiZ2V0IiwiR09PR0xFIiwiZ29vZ2xlQ2FsbGJhY2siLCJDQUxMQkFDSyIsInJlZ2lzdGVyIiwiZW1haWwiLCJwYXNzd29yZCIsIlJFR0lTVEVSIiwibG9nb3V0IiwiTE9HT1VUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/api/auth.js\n"));

/***/ })

});
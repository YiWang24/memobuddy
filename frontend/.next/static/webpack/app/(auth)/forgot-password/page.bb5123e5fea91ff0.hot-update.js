"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/forgot-password/page",{

/***/ "(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx":
/*!*************************************************!*\
  !*** ./src/app/(auth)/forgot-password/page.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"FormData updated:\", formData);\n    }, [\n        formData\n    ]);\n    const handleSubmit = async ()=>{\n        switch(stage){\n            case \"email\":\n                if (!formData.email) {\n                    _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct email address\");\n                } else {\n                    setStage(\"code\");\n                    const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.requestPasswordReset(formData.email);\n                    console.log(response);\n                }\n                break;\n            case \"code\":\n                if (!formData.code) {\n                    _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct code\");\n                } else {\n                    const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.verifyPasswordReset({\n                        resetCode: formData.code,\n                        email: formData.email\n                    });\n                    if (response.status === 200) {\n                        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Code verified successfully\");\n                        setStage(\"password\");\n                    } else {\n                        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Code verification failed\");\n                    }\n                }\n                break;\n            case \"password\":\n                if (!formData.password || !formData.confirmPassword) {\n                    _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct password\");\n                } else if (formData.password !== formData.confirmPassword) {\n                    _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Passwords do not match\");\n                } else {\n                    const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.resetPassword({\n                        email: formData.email,\n                        resetCode: formData.code,\n                        password: formData.password\n                    });\n                    if (response.status === 200) {\n                        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Password reset successful\");\n                        setStage(\"success\");\n                    } else {\n                        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Password reset failed\");\n                    }\n                }\n                break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthResetPasswordCard, {\n            stage: stage,\n            email: formData.email,\n            onInputChange: handleValidInput,\n            onSubmit: handleSubmit\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n            lineNumber: 83,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n        lineNumber: 82,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"Mon7FPmY1NksXywB7AE1ectC3bg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTztBQUMxQjtBQUNEO0FBRWhCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDVSxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0MsSUFBSUM7UUFDNUJQLFlBQVksQ0FBQ1E7WUFDWCxJQUFJRCxVQUFVLE1BQU07Z0JBQ2xCLE9BQU87b0JBQUUsR0FBR0MsSUFBSTtvQkFBRSxDQUFDRixHQUFHLEVBQUU7Z0JBQUc7WUFDN0IsT0FBTztnQkFDTCxPQUFPO29CQUFFLEdBQUdFLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFQztnQkFBTTtZQUNoQztRQUNGO0lBQ0Y7SUFDQWYsZ0RBQVNBLENBQUM7UUFDUmlCLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJYO0lBQ25DLEdBQUc7UUFBQ0E7S0FBUztJQUViLE1BQU1ZLGVBQWU7UUFDbkIsT0FBUWQ7WUFDTixLQUFLO2dCQUNILElBQUksQ0FBQ0UsU0FBU0UsS0FBSyxFQUFFO29CQUNuQk4sMkVBQU9BLENBQUNpQixLQUFLLENBQUM7Z0JBQ2hCLE9BQU87b0JBQ0xkLFNBQVM7b0JBQ1QsTUFBTWUsV0FBVyxNQUFNbkIseUNBQU9BLENBQUNvQixvQkFBb0IsQ0FBQ2YsU0FBU0UsS0FBSztvQkFDbEVRLFFBQVFDLEdBQUcsQ0FBQ0c7Z0JBQ2Q7Z0JBQ0E7WUFFRixLQUFLO2dCQUNILElBQUksQ0FBQ2QsU0FBU0csSUFBSSxFQUFFO29CQUNsQlAsMkVBQU9BLENBQUNpQixLQUFLLENBQUM7Z0JBQ2hCLE9BQU87b0JBQ0wsTUFBTUMsV0FBVyxNQUFNbkIseUNBQU9BLENBQUNxQixtQkFBbUIsQ0FBQzt3QkFDakRDLFdBQVdqQixTQUFTRyxJQUFJO3dCQUN4QkQsT0FBT0YsU0FBU0UsS0FBSztvQkFDdkI7b0JBRUEsSUFBSVksU0FBU0ksTUFBTSxLQUFLLEtBQUs7d0JBQzNCdEIsMkVBQU9BLENBQUN1QixPQUFPLENBQUM7d0JBQ2hCcEIsU0FBUztvQkFDWCxPQUFPO3dCQUNMSCwyRUFBT0EsQ0FBQ2lCLEtBQUssQ0FBQztvQkFDaEI7Z0JBQ0Y7Z0JBQ0E7WUFDRixLQUFLO2dCQUNILElBQUksQ0FBQ2IsU0FBU0ksUUFBUSxJQUFJLENBQUNKLFNBQVNLLGVBQWUsRUFBRTtvQkFDbkRULDJFQUFPQSxDQUFDaUIsS0FBSyxDQUFDO2dCQUNoQixPQUFPLElBQUliLFNBQVNJLFFBQVEsS0FBS0osU0FBU0ssZUFBZSxFQUFFO29CQUN6RFQsMkVBQU9BLENBQUNpQixLQUFLLENBQUM7Z0JBQ2hCLE9BQU87b0JBQ0wsTUFBTUMsV0FBVyxNQUFNbkIseUNBQU9BLENBQUN5QixhQUFhLENBQUM7d0JBQzNDbEIsT0FBT0YsU0FBU0UsS0FBSzt3QkFDckJlLFdBQVdqQixTQUFTRyxJQUFJO3dCQUN4QkMsVUFBVUosU0FBU0ksUUFBUTtvQkFDN0I7b0JBQ0EsSUFBSVUsU0FBU0ksTUFBTSxLQUFLLEtBQUs7d0JBQzNCdEIsMkVBQU9BLENBQUN1QixPQUFPLENBQUM7d0JBQ2hCcEIsU0FBUztvQkFDWCxPQUFPO3dCQUNMSCwyRUFBT0EsQ0FBQ2lCLEtBQUssQ0FBQztvQkFDaEI7Z0JBQ0Y7Z0JBQ0E7WUFDRjtnQkFDRTtRQUNKO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ1E7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzVCLG1FQUFxQkE7WUFDcEJJLE9BQU9BO1lBQ1BJLE9BQU9GLFNBQVNFLEtBQUs7WUFDckJxQixlQUFlakI7WUFDZmtCLFVBQVVaOzs7Ozs7Ozs7OztBQUlsQjtHQXBGd0JmIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeD9iOWQxIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBBdXRoUmVzZXRQYXNzd29yZENhcmQgfSBmcm9tIFwiQC9jb21wb25lbnRzL2F1dGhcIjtcclxuaW1wb3J0IHsgYXV0aEFwaSB9IGZyb20gXCJAL2FwaVwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgY29uc3QgW3N0YWdlLCBzZXRTdGFnZV0gPSB1c2VTdGF0ZShcImVtYWlsXCIpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBjb2RlOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZhbGlkSW5wdXQgPSAoaWQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldikgPT4ge1xyXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbaWRdOiBcIlwiIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2lkXTogdmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJGb3JtRGF0YSB1cGRhdGVkOlwiLCBmb3JtRGF0YSk7XHJcbiAgfSwgW2Zvcm1EYXRhXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5lbWFpbCkge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGNvcnJlY3QgZW1haWwgYWRkcmVzc1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0U3RhZ2UoXCJjb2RlXCIpO1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLnJlcXVlc3RQYXNzd29yZFJlc2V0KGZvcm1EYXRhLmVtYWlsKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICBjYXNlIFwiY29kZVwiOlxyXG4gICAgICAgIGlmICghZm9ybURhdGEuY29kZSkge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGNvcnJlY3QgY29kZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLnZlcmlmeVBhc3N3b3JkUmVzZXQoe1xyXG4gICAgICAgICAgICByZXNldENvZGU6IGZvcm1EYXRhLmNvZGUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJDb2RlIHZlcmlmaWVkIHN1Y2Nlc3NmdWxseVwiKTtcclxuICAgICAgICAgICAgc2V0U3RhZ2UoXCJwYXNzd29yZFwiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJDb2RlIHZlcmlmaWNhdGlvbiBmYWlsZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwicGFzc3dvcmRcIjpcclxuICAgICAgICBpZiAoIWZvcm1EYXRhLnBhc3N3b3JkIHx8ICFmb3JtRGF0YS5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBjb3JyZWN0IHBhc3N3b3JkXCIpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZm9ybURhdGEucGFzc3dvcmQgIT09IGZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBhc3N3b3JkcyBkbyBub3QgbWF0Y2hcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXV0aEFwaS5yZXNldFBhc3N3b3JkKHtcclxuICAgICAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgICAgICByZXNldENvZGU6IGZvcm1EYXRhLmNvZGUsXHJcbiAgICAgICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5wYXNzd29yZCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIlBhc3N3b3JkIHJlc2V0IHN1Y2Nlc3NmdWxcIik7XHJcbiAgICAgICAgICAgIHNldFN0YWdlKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQYXNzd29yZCByZXNldCBmYWlsZWRcIik7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBkZWZhdWx0OlxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIDxBdXRoUmVzZXRQYXNzd29yZENhcmRcclxuICAgICAgICBzdGFnZT17c3RhZ2V9XHJcbiAgICAgICAgZW1haWw9e2Zvcm1EYXRhLmVtYWlsfVxyXG4gICAgICAgIG9uSW5wdXRDaGFuZ2U9e2hhbmRsZVZhbGlkSW5wdXR9XHJcbiAgICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJBdXRoUmVzZXRQYXNzd29yZENhcmQiLCJhdXRoQXBpIiwibWVzc2FnZSIsInBhZ2UiLCJzdGFnZSIsInNldFN0YWdlIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImVtYWlsIiwiY29kZSIsInBhc3N3b3JkIiwiY29uZmlybVBhc3N3b3JkIiwiaGFuZGxlVmFsaWRJbnB1dCIsImlkIiwidmFsdWUiLCJwcmV2IiwiY29uc29sZSIsImxvZyIsImhhbmRsZVN1Ym1pdCIsImVycm9yIiwicmVzcG9uc2UiLCJyZXF1ZXN0UGFzc3dvcmRSZXNldCIsInZlcmlmeVBhc3N3b3JkUmVzZXQiLCJyZXNldENvZGUiLCJzdGF0dXMiLCJzdWNjZXNzIiwicmVzZXRQYXNzd29yZCIsImRpdiIsImNsYXNzTmFtZSIsIm9uSW5wdXRDaGFuZ2UiLCJvblN1Ym1pdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx\n"));

/***/ })

});
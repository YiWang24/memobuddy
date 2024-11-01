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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n    };\n    const handleSubmit = async ()=>{\n        switch(stage){\n            case \"email\":\n                if (!formData.email) {\n                    _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct email address\");\n                } else {\n                    setStage(\"code\");\n                    await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.requestPasswordReset(formData.email);\n                }\n                break;\n            case \"code\":\n                if (!formData.code) {\n                    _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct code\");\n                } else {\n                    const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.verifyPasswordReset({\n                        resetCode: formData.code,\n                        email: formData.email\n                    });\n                    if (response.status === 200) {\n                        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Code verified successfully\");\n                        setStage(\"password\");\n                    } else {\n                        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Code verification failed\");\n                    }\n                }\n                break;\n            case \"password\":\n                if (!formData.password || !formData.confirmPassword) {\n                    _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill correct password\");\n                } else if (formData.password !== formData.confirmPassword) {\n                    _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Passwords do not match\");\n                } else {\n                    const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.resetPassword({\n                        email: formData.email,\n                        resetCode: formData.code,\n                        password: formData.password\n                    });\n                    if (response.status === 200) {\n                        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Password reset successful\");\n                        setStage(\"success\");\n                    } else {\n                        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Password reset failed\");\n                    }\n                }\n                break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthResetPasswordCard, {\n            stage: stage,\n            email: formData.email,\n            onInputChange: handleValidInput,\n            onSubmit: handleSubmit\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n            lineNumber: 80,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n        lineNumber: 79,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"Fb2tuFFjmh879+N0Wti1sC+CWpo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTztBQUMxQjtBQUNEO0FBRWhCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDVSxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0MsSUFBSUM7UUFDNUJQLFlBQVksQ0FBQ1E7WUFDWCxJQUFJRCxVQUFVLE1BQU07Z0JBQ2xCLE9BQU87b0JBQUUsR0FBR0MsSUFBSTtvQkFBRSxDQUFDRixHQUFHLEVBQUU7Z0JBQUc7WUFDN0IsT0FBTztnQkFDTCxPQUFPO29CQUFFLEdBQUdFLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFQztnQkFBTTtZQUNoQztRQUNGO0lBQ0Y7SUFHQSxNQUFNRSxlQUFlO1FBQ25CLE9BQVFaO1lBQ04sS0FBSztnQkFDSCxJQUFJLENBQUNFLFNBQVNFLEtBQUssRUFBRTtvQkFDbkJOLDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7Z0JBQ2hCLE9BQU87b0JBQ0xaLFNBQVM7b0JBQ1QsTUFBTUoseUNBQU9BLENBQUNpQixvQkFBb0IsQ0FBQ1osU0FBU0UsS0FBSztnQkFDbkQ7Z0JBQ0E7WUFFRixLQUFLO2dCQUNILElBQUksQ0FBQ0YsU0FBU0csSUFBSSxFQUFFO29CQUNsQlAsMkVBQU9BLENBQUNlLEtBQUssQ0FBQztnQkFDaEIsT0FBTztvQkFDTCxNQUFNRSxXQUFXLE1BQU1sQix5Q0FBT0EsQ0FBQ21CLG1CQUFtQixDQUFDO3dCQUNqREMsV0FBV2YsU0FBU0csSUFBSTt3QkFDeEJELE9BQU9GLFNBQVNFLEtBQUs7b0JBQ3ZCO29CQUVBLElBQUlXLFNBQVNHLE1BQU0sS0FBSyxLQUFLO3dCQUMzQnBCLDJFQUFPQSxDQUFDcUIsT0FBTyxDQUFDO3dCQUNoQmxCLFNBQVM7b0JBQ1gsT0FBTzt3QkFDTEgsMkVBQU9BLENBQUNlLEtBQUssQ0FBQztvQkFDaEI7Z0JBQ0Y7Z0JBQ0E7WUFDRixLQUFLO2dCQUNILElBQUksQ0FBQ1gsU0FBU0ksUUFBUSxJQUFJLENBQUNKLFNBQVNLLGVBQWUsRUFBRTtvQkFDbkRULDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7Z0JBQ2hCLE9BQU8sSUFBSVgsU0FBU0ksUUFBUSxLQUFLSixTQUFTSyxlQUFlLEVBQUU7b0JBQ3pEVCwyRUFBT0EsQ0FBQ2UsS0FBSyxDQUFDO2dCQUNoQixPQUFPO29CQUNMLE1BQU1FLFdBQVcsTUFBTWxCLHlDQUFPQSxDQUFDdUIsYUFBYSxDQUFDO3dCQUMzQ2hCLE9BQU9GLFNBQVNFLEtBQUs7d0JBQ3JCYSxXQUFXZixTQUFTRyxJQUFJO3dCQUN4QkMsVUFBVUosU0FBU0ksUUFBUTtvQkFDN0I7b0JBQ0EsSUFBSVMsU0FBU0csTUFBTSxLQUFLLEtBQUs7d0JBQzNCcEIsMkVBQU9BLENBQUNxQixPQUFPLENBQUM7d0JBQ2hCbEIsU0FBUztvQkFDWCxPQUFPO3dCQUNMSCwyRUFBT0EsQ0FBQ2UsS0FBSyxDQUFDO29CQUNoQjtnQkFDRjtnQkFDQTtZQUNGO2dCQUNFO1FBQ0o7SUFDRjtJQUNBLHFCQUNFLDhEQUFDUTtRQUFJQyxXQUFVO2tCQUNiLDRFQUFDMUIsbUVBQXFCQTtZQUNwQkksT0FBT0E7WUFDUEksT0FBT0YsU0FBU0UsS0FBSztZQUNyQm1CLGVBQWVmO1lBQ2ZnQixVQUFVWjs7Ozs7Ozs7Ozs7QUFJbEI7R0FqRndCYiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhdXRoKS9mb3Jnb3QtcGFzc3dvcmQvcGFnZS5qc3g/YjlkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aFJlc2V0UGFzc3dvcmRDYXJkIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhBcGkgfSBmcm9tIFwiQC9hcGlcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xyXG4gIGNvbnN0IFtzdGFnZSwgc2V0U3RhZ2VdID0gdXNlU3RhdGUoXCJlbWFpbFwiKTtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgY29kZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVWYWxpZElucHV0ID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXYpID0+IHtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2lkXTogXCJcIiB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtpZF06IHZhbHVlIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHN0YWdlKSB7XHJcbiAgICAgIGNhc2UgXCJlbWFpbFwiOlxyXG4gICAgICAgIGlmICghZm9ybURhdGEuZW1haWwpIHtcclxuICAgICAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBjb3JyZWN0IGVtYWlsIGFkZHJlc3NcIik7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIHNldFN0YWdlKFwiY29kZVwiKTtcclxuICAgICAgICAgIGF3YWl0IGF1dGhBcGkucmVxdWVzdFBhc3N3b3JkUmVzZXQoZm9ybURhdGEuZW1haWwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBicmVhaztcclxuXHJcbiAgICAgIGNhc2UgXCJjb2RlXCI6XHJcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5jb2RlKSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiUGxlYXNlIGZpbGwgY29ycmVjdCBjb2RlXCIpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBcGkudmVyaWZ5UGFzc3dvcmRSZXNldCh7XHJcbiAgICAgICAgICAgIHJlc2V0Q29kZTogZm9ybURhdGEuY29kZSxcclxuICAgICAgICAgICAgZW1haWw6IGZvcm1EYXRhLmVtYWlsLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNvZGUgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICBzZXRTdGFnZShcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIkNvZGUgdmVyaWZpY2F0aW9uIGZhaWxlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQgfHwgIWZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGNvcnJlY3QgcGFzc3dvcmRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZCAhPT0gZm9ybURhdGEuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLnJlc2V0UGFzc3dvcmQoe1xyXG4gICAgICAgICAgICBlbWFpbDogZm9ybURhdGEuZW1haWwsXHJcbiAgICAgICAgICAgIHJlc2V0Q29kZTogZm9ybURhdGEuY29kZSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgICAgc2V0U3RhZ2UoXCJzdWNjZXNzXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBhc3N3b3JkIHJlc2V0IGZhaWxlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPEF1dGhSZXNldFBhc3N3b3JkQ2FyZFxyXG4gICAgICAgIHN0YWdlPXtzdGFnZX1cclxuICAgICAgICBlbWFpbD17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgb25JbnB1dENoYW5nZT17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF1dGhSZXNldFBhc3N3b3JkQ2FyZCIsImF1dGhBcGkiLCJtZXNzYWdlIiwicGFnZSIsInN0YWdlIiwic2V0U3RhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJjb2RlIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJoYW5kbGVWYWxpZElucHV0IiwiaWQiLCJ2YWx1ZSIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJlcnJvciIsInJlcXVlc3RQYXNzd29yZFJlc2V0IiwicmVzcG9uc2UiLCJ2ZXJpZnlQYXNzd29yZFJlc2V0IiwicmVzZXRDb2RlIiwic3RhdHVzIiwic3VjY2VzcyIsInJlc2V0UGFzc3dvcmQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbklucHV0Q2hhbmdlIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx\n"));

/***/ })

});
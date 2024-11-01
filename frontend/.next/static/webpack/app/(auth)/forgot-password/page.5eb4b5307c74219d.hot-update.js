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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction page() {\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        console.log(\"FormData updated:\", formData);\n    }, [\n        formData\n    ]);\n    const handleSubmit = async ()=>{\n        switch(stage){\n            case \"email\":\n                if (!formData.email) {\n                    message.error(\"Please fill correct email address\");\n                } else {\n                    setStage(\"code\");\n                    await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.requestPasswordReset(formData.email);\n                }\n                break;\n            case \"code\":\n                if (!formData.code) {\n                    message.error(\"Please fill correct code\");\n                } else {\n                    const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.verifyPasswordReset({\n                        resetCode: formData.code,\n                        email: formData.email\n                    });\n                    console.log(response);\n                    if (response.status === 200) {\n                        message.success(\"Code verified successfully\");\n                        setStage(\"password\");\n                    } else {\n                        message.error(\"Code verification failed\");\n                    }\n                }\n                break;\n            case \"password\":\n                if (!formData.password || !formData.confirmPassword) {\n                    message.error(\"Please fill correct password\");\n                } else if (formData.password !== formData.confirmPassword) {\n                    message.error(\"Passwords do not match\");\n                } else {\n                    message.success(\"Password reset successful\");\n                    setStage(\"success\");\n                }\n                break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthResetPasswordCard, {\n            stage: stage,\n            email: formData.email,\n            onInputChange: handleValidInput,\n            onSubmit: handleSubmit\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n            lineNumber: 71,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n        lineNumber: 70,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"Mon7FPmY1NksXywB7AE1ectC3bg=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNtRDtBQUNPO0FBQzFCO0FBRWpCLFNBQVNLOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR04sK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDTyxVQUFVQyxZQUFZLEdBQUdSLCtDQUFRQSxDQUFDO1FBQ3ZDUyxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0MsSUFBSUM7UUFDNUJQLFlBQVksQ0FBQ1E7WUFDWCxJQUFJRCxVQUFVLE1BQU07Z0JBQ2xCLE9BQU87b0JBQUUsR0FBR0MsSUFBSTtvQkFBRSxDQUFDRixHQUFHLEVBQUU7Z0JBQUc7WUFDN0IsT0FBTztnQkFDTCxPQUFPO29CQUFFLEdBQUdFLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFQztnQkFBTTtZQUNoQztRQUNGO0lBQ0Y7SUFDQWQsZ0RBQVNBLENBQUM7UUFDUmdCLFFBQVFDLEdBQUcsQ0FBQyxxQkFBcUJYO0lBQ25DLEdBQUc7UUFBQ0E7S0FBUztJQUViLE1BQU1ZLGVBQWU7UUFDbkIsT0FBUWQ7WUFDTixLQUFLO2dCQUNILElBQUksQ0FBQ0UsU0FBU0UsS0FBSyxFQUFFO29CQUNuQlcsUUFBUUMsS0FBSyxDQUFDO2dCQUNoQixPQUFPO29CQUNMZixTQUFTO29CQUNULE1BQU1ILHlDQUFPQSxDQUFDbUIsb0JBQW9CLENBQUNmLFNBQVNFLEtBQUs7Z0JBQ25EO2dCQUNBO1lBQ0YsS0FBSztnQkFDSCxJQUFJLENBQUNGLFNBQVNHLElBQUksRUFBRTtvQkFDbEJVLFFBQVFDLEtBQUssQ0FBQztnQkFDaEIsT0FBTztvQkFDTCxNQUFNRSxXQUFXLE1BQU1wQix5Q0FBT0EsQ0FBQ3FCLG1CQUFtQixDQUFDO3dCQUNqREMsV0FBV2xCLFNBQVNHLElBQUk7d0JBQ3hCRCxPQUFPRixTQUFTRSxLQUFLO29CQUN2QjtvQkFDQVEsUUFBUUMsR0FBRyxDQUFDSztvQkFDWixJQUFJQSxTQUFTRyxNQUFNLEtBQUssS0FBSzt3QkFDM0JOLFFBQVFPLE9BQU8sQ0FBQzt3QkFDaEJyQixTQUFTO29CQUNYLE9BQU87d0JBQ0xjLFFBQVFDLEtBQUssQ0FBQztvQkFDaEI7Z0JBQ0Y7Z0JBQ0E7WUFDRixLQUFLO2dCQUNILElBQUksQ0FBQ2QsU0FBU0ksUUFBUSxJQUFJLENBQUNKLFNBQVNLLGVBQWUsRUFBRTtvQkFDbkRRLFFBQVFDLEtBQUssQ0FBQztnQkFDaEIsT0FBTyxJQUFJZCxTQUFTSSxRQUFRLEtBQUtKLFNBQVNLLGVBQWUsRUFBRTtvQkFDekRRLFFBQVFDLEtBQUssQ0FBQztnQkFDaEIsT0FBTztvQkFDTEQsUUFBUU8sT0FBTyxDQUFDO29CQUNoQnJCLFNBQVM7Z0JBQ1g7Z0JBQ0E7WUFDRjtnQkFDRTtRQUNKO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ3NCO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUMzQixtRUFBcUJBO1lBQ3BCRyxPQUFPQTtZQUNQSSxPQUFPRixTQUFTRSxLQUFLO1lBQ3JCcUIsZUFBZWpCO1lBQ2ZrQixVQUFVWjs7Ozs7Ozs7Ozs7QUFJbEI7R0F6RXdCZiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhdXRoKS9mb3Jnb3QtcGFzc3dvcmQvcGFnZS5qc3g/YjlkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aFJlc2V0UGFzc3dvcmRDYXJkIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhBcGkgfSBmcm9tIFwiQC9hcGlcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgY29uc3QgW3N0YWdlLCBzZXRTdGFnZV0gPSB1c2VTdGF0ZShcImVtYWlsXCIpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBjb2RlOiBcIlwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICBjb25maXJtUGFzc3dvcmQ6IFwiXCIsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVZhbGlkSW5wdXQgPSAoaWQsIHZhbHVlKSA9PiB7XHJcbiAgICBzZXRGb3JtRGF0YSgocHJldikgPT4ge1xyXG4gICAgICBpZiAodmFsdWUgPT09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4geyAuLi5wcmV2LCBbaWRdOiBcIlwiIH07XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2lkXTogdmFsdWUgfTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coXCJGb3JtRGF0YSB1cGRhdGVkOlwiLCBmb3JtRGF0YSk7XHJcbiAgfSwgW2Zvcm1EYXRhXSk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgaWYgKCFmb3JtRGF0YS5lbWFpbCkge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGNvcnJlY3QgZW1haWwgYWRkcmVzc1wiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgc2V0U3RhZ2UoXCJjb2RlXCIpO1xyXG4gICAgICAgICAgYXdhaXQgYXV0aEFwaS5yZXF1ZXN0UGFzc3dvcmRSZXNldChmb3JtRGF0YS5lbWFpbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIFwiY29kZVwiOlxyXG4gICAgICAgIGlmICghZm9ybURhdGEuY29kZSkge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGNvcnJlY3QgY29kZVwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLnZlcmlmeVBhc3N3b3JkUmVzZXQoe1xyXG4gICAgICAgICAgICByZXNldENvZGU6IGZvcm1EYXRhLmNvZGUsXHJcbiAgICAgICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xyXG4gICAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNvZGUgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgICAgICBzZXRTdGFnZShcInBhc3N3b3JkXCIpO1xyXG4gICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbWVzc2FnZS5lcnJvcihcIkNvZGUgdmVyaWZpY2F0aW9uIGZhaWxlZFwiKTtcclxuICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQgfHwgIWZvcm1EYXRhLmNvbmZpcm1QYXNzd29yZCkge1xyXG4gICAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBsZWFzZSBmaWxsIGNvcnJlY3QgcGFzc3dvcmRcIik7XHJcbiAgICAgICAgfSBlbHNlIGlmIChmb3JtRGF0YS5wYXNzd29yZCAhPT0gZm9ybURhdGEuY29uZmlybVBhc3N3b3JkKSB7XHJcbiAgICAgICAgICBtZXNzYWdlLmVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICAgIHNldFN0YWdlKFwic3VjY2Vzc1wiKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPEF1dGhSZXNldFBhc3N3b3JkQ2FyZFxyXG4gICAgICAgIHN0YWdlPXtzdGFnZX1cclxuICAgICAgICBlbWFpbD17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgb25JbnB1dENoYW5nZT17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF1dGhSZXNldFBhc3N3b3JkQ2FyZCIsImF1dGhBcGkiLCJwYWdlIiwic3RhZ2UiLCJzZXRTdGFnZSIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsImNvZGUiLCJwYXNzd29yZCIsImNvbmZpcm1QYXNzd29yZCIsImhhbmRsZVZhbGlkSW5wdXQiLCJpZCIsInZhbHVlIiwicHJldiIsImNvbnNvbGUiLCJsb2ciLCJoYW5kbGVTdWJtaXQiLCJtZXNzYWdlIiwiZXJyb3IiLCJyZXF1ZXN0UGFzc3dvcmRSZXNldCIsInJlc3BvbnNlIiwidmVyaWZ5UGFzc3dvcmRSZXNldCIsInJlc2V0Q29kZSIsInN0YXR1cyIsInN1Y2Nlc3MiLCJkaXYiLCJjbGFzc05hbWUiLCJvbklucHV0Q2hhbmdlIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx\n"));

/***/ })

});
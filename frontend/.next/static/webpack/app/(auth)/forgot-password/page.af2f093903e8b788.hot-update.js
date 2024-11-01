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

/***/ "(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx":
/*!*******************************************************!*\
  !*** ./src/components/auth/AuthResetPasswordCard.jsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-pin-input */ \"(app-pages-browser)/./node_modules/react-pin-input/dist/bundle.js\");\n/* harmony import */ var react_pin_input__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_pin_input__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/constants */ \"(app-pages-browser)/./src/constants/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \n\n\n\n\nconst AuthResetPasswordCard = (param)=>{\n    let { stage, email, onInputChange, onSubmit } = param;\n    const { cardTitle, buttonTitle, cardBody, cardFooter, link } = _constants__WEBPACK_IMPORTED_MODULE_4__.STAGE_CONTENT[stage];\n    const renderFormFields = (stage)=>{\n        switch(stage){\n            case \"email\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                    id: \"email\",\n                    type: \"email\",\n                    placeholder: \"Email\",\n                    name: \"email\",\n                    label: \"Email Address\",\n                    onValidInput: onInputChange,\n                    required: true\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 15,\n                    columnNumber: 11\n                }, undefined);\n            case \"code\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react_pin_input__WEBPACK_IMPORTED_MODULE_3___default()), {\n                    length: 6,\n                    initialValue: \"\",\n                    type: \"numeric\",\n                    inputMode: \"number\",\n                    style: {\n                        padding: \"10px\"\n                    },\n                    inputStyle: {\n                        borderColor: \"red\"\n                    },\n                    inputFocusStyle: {\n                        borderColor: \"blue\"\n                    },\n                    onComplete: (value)=>onInputChange(\"code\", value),\n                    autoSelect: true,\n                    regexCriteria: /^[ A-Za-z0-9_@./#&+-]*$/\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 27,\n                    columnNumber: 11\n                }, undefined);\n            case \"password\":\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"password\",\n                            type: \"password\",\n                            placeholder: \"Password\",\n                            name: \"password\",\n                            label: \"Password\",\n                            onValidInput: onInputChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 43,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                            id: \"confirmPassword\",\n                            type: \"password\",\n                            placeholder: \"Confirm Password\",\n                            name: \"confirmPassword\",\n                            label: \"Confirm Password\",\n                            onValidInput: onInputChange,\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                            lineNumber: 52,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-[60%] h-[60%] flex flex-col items-center gap-4 border-red-500 border-2\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"header\", {\n                className: \"relative flex flex-col items-center justify-center gap-4 text-center text-[40px] text-black \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 69,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative font-medium\",\n                        children: \"Welcome back\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 70,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center justify-center gap-6 text-center text-[20px] text-base mt-10 \",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"text-[24px] font-bold\",\n                        children: cardTitle\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[80%] text-[16px] font-sans leading-[24px] text-gray-500\",\n                        children: typeof cardBody === \"function\" ? cardBody(email) : cardBody\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 74,\n                        columnNumber: 9\n                    }, undefined),\n                    renderFormFields(stage),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                        onClick: onSubmit,\n                        text: buttonTitle,\n                        backgroundColor: \"bg-zinc-300\",\n                        textColor: \"text-white\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"text-[16px] [text-decoration:underline] font-medium  text-gray text-right mt-10 cursor-pointer  transition duration-300 ease-in-out hover:text-blue-500\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: link,\n                    children: cardFooter\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                    lineNumber: 86,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n                lineNumber: 85,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthResetPasswordCard.jsx\",\n        lineNumber: 67,\n        columnNumber: 5\n    }, undefined);\n};\n_c = AuthResetPasswordCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthResetPasswordCard);\nvar _c;\n$RefreshReg$(_c, \"AuthResetPasswordCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aFJlc2V0UGFzc3dvcmRDYXJkLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDd0M7QUFDc0I7QUFDdkI7QUFDSztBQUU1QyxNQUFNTSx3QkFBd0I7UUFBQyxFQUFFQyxLQUFLLEVBQUNDLEtBQUssRUFBRUMsYUFBYSxFQUFFQyxRQUFRLEVBQUU7SUFDckUsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsUUFBUSxFQUFFQyxVQUFVLEVBQUVDLElBQUksRUFBRSxHQUMxRFYscURBQWEsQ0FBQ0UsTUFBTTtJQUV0QixNQUFNUyxtQkFBbUIsQ0FBQ1Q7UUFDeEIsT0FBUUE7WUFDTixLQUFLO2dCQUNILHFCQUNFLDhEQUFDTCwyREFBYUE7b0JBQ1plLElBQUc7b0JBQ0hDLE1BQUs7b0JBQ0xDLGFBQVk7b0JBQ1pDLE1BQUs7b0JBQ0xDLE9BQU07b0JBQ05DLGNBQWNiO29CQUNkYyxRQUFROzs7Ozs7WUFHZCxLQUFLO2dCQUNILHFCQUNFLDhEQUFDbkIsd0RBQVFBO29CQUNQb0IsUUFBUTtvQkFDUkMsY0FBYTtvQkFDYlAsTUFBSztvQkFDTFEsV0FBVTtvQkFDVkMsT0FBTzt3QkFBRUMsU0FBUztvQkFBTztvQkFDekJDLFlBQVk7d0JBQUVDLGFBQWE7b0JBQU07b0JBQ2pDQyxpQkFBaUI7d0JBQUVELGFBQWE7b0JBQU87b0JBQ3ZDRSxZQUFZLENBQUNDLFFBQVV4QixjQUFjLFFBQVF3QjtvQkFDN0NDLFlBQVk7b0JBQ1pDLGVBQWU7Ozs7OztZQUdyQixLQUFLO2dCQUNILHFCQUNFOztzQ0FDRSw4REFBQ2pDLDJEQUFhQTs0QkFDWmUsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEMsT0FBTTs0QkFDTkMsY0FBY2I7NEJBQ2RjLFFBQVE7Ozs7OztzQ0FFViw4REFBQ3JCLDJEQUFhQTs0QkFDWmUsSUFBRzs0QkFDSEMsTUFBSzs0QkFDTEMsYUFBWTs0QkFDWkMsTUFBSzs0QkFDTEMsT0FBTTs0QkFDTkMsY0FBY2I7NEJBQ2RjLFFBQVE7Ozs7Ozs7O1FBSWxCO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ2E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFPRCxXQUFVOztrQ0FDaEIsOERBQUNEO3dCQUFJQyxXQUFVOzs7Ozs7a0NBQ2YsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUF1Qjs7Ozs7Ozs7Ozs7OzBCQUV4Qyw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBeUIxQjs7Ozs7O2tDQUN4Qyw4REFBQ3lCO3dCQUFJQyxXQUFVO2tDQUNaLE9BQU94QixhQUFhLGFBQWFBLFNBQVNMLFNBQVNLOzs7Ozs7b0JBRXJERyxpQkFBaUJUO2tDQUNsQiw4REFBQ0osd0RBQVVBO3dCQUNUb0MsU0FBUzdCO3dCQUNUOEIsTUFBTTVCO3dCQUNONkIsaUJBQWlCO3dCQUNqQkMsV0FBVzs7Ozs7Ozs7Ozs7OzBCQUdmLDhEQUFDQztnQkFBT04sV0FBVTswQkFDaEIsNEVBQUNPO29CQUFFQyxNQUFNOUI7OEJBQU9EOzs7Ozs7Ozs7Ozs7Ozs7OztBQUl4QjtLQW5GTVI7QUFxRk4sK0RBQWVBLHFCQUFxQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoL0F1dGhSZXNldFBhc3N3b3JkQ2FyZC5qc3g/OWUzMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IEF1dGhGb3JtRmllbGQsIEF1dGhCdXR0b24gfSBmcm9tIFwiQC9jb21wb25lbnRzL2F1dGhcIjtcclxuaW1wb3J0IFBpbklucHV0IGZyb20gXCJyZWFjdC1waW4taW5wdXRcIjtcclxuaW1wb3J0IHsgU1RBR0VfQ09OVEVOVCB9IGZyb20gXCJAL2NvbnN0YW50c1wiO1xyXG5cclxuY29uc3QgQXV0aFJlc2V0UGFzc3dvcmRDYXJkID0gKHsgc3RhZ2UsZW1haWwsIG9uSW5wdXRDaGFuZ2UsIG9uU3VibWl0IH0pID0+IHtcclxuICBjb25zdCB7IGNhcmRUaXRsZSwgYnV0dG9uVGl0bGUsIGNhcmRCb2R5LCBjYXJkRm9vdGVyLCBsaW5rIH0gPVxyXG4gICAgU1RBR0VfQ09OVEVOVFtzdGFnZV07XHJcblxyXG4gIGNvbnN0IHJlbmRlckZvcm1GaWVsZHMgPSAoc3RhZ2UpID0+IHtcclxuICAgIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkVtYWlsXCJcclxuICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICAgICAgb25WYWxpZElucHV0PXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgLz5cclxuICAgICAgICApO1xyXG4gICAgICBjYXNlIFwiY29kZVwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8UGluSW5wdXRcclxuICAgICAgICAgICAgbGVuZ3RoPXs2fVxyXG4gICAgICAgICAgICBpbml0aWFsVmFsdWU9XCJcIlxyXG4gICAgICAgICAgICB0eXBlPVwibnVtZXJpY1wiXHJcbiAgICAgICAgICAgIGlucHV0TW9kZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19XHJcbiAgICAgICAgICAgIGlucHV0U3R5bGU9e3sgYm9yZGVyQ29sb3I6IFwicmVkXCIgfX0gLy8gQ2hhbmdlIHRoZSBib3JkZXIgY29sb3JcclxuICAgICAgICAgICAgaW5wdXRGb2N1c1N0eWxlPXt7IGJvcmRlckNvbG9yOiBcImJsdWVcIiB9fSAvLyBDaGFuZ2UgdGhlIGJvcmRlciBjb2xvciB3aGVuIGZvY3VzZWRcclxuICAgICAgICAgICAgb25Db21wbGV0ZT17KHZhbHVlKSA9PiBvbklucHV0Q2hhbmdlKFwiY29kZVwiLCB2YWx1ZSl9XHJcbiAgICAgICAgICAgIGF1dG9TZWxlY3Q9e3RydWV9XHJcbiAgICAgICAgICAgIHJlZ2V4Q3JpdGVyaWE9ey9eWyBBLVphLXowLTlfQC4vIyYrLV0qJC99XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICk7XHJcbiAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICA8PlxyXG4gICAgICAgICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBsYWJlbD1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBvblZhbGlkSW5wdXQ9e29uSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEF1dGhGb3JtRmllbGRcclxuICAgICAgICAgICAgICBpZD1cImNvbmZpcm1QYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkNvbmZpcm0gUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIG5hbWU9XCJjb25maXJtUGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgIGxhYmVsPVwiQ29uZmlybSBQYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgb25WYWxpZElucHV0PXtvbklucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8Lz5cclxuICAgICAgICApO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzYwJV0gaC1bNjAlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBnYXAtNCBib3JkZXItcmVkLTUwMCBib3JkZXItMlwiPlxyXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT1cInJlbGF0aXZlIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC00IHRleHQtY2VudGVyIHRleHQtWzQwcHhdIHRleHQtYmxhY2sgXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LTEyIGgtMTIgcm91bmRlZC1mdWxsIGJnLXppbmMtNDAwIFwiPjwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgZm9udC1tZWRpdW1cIj5XZWxjb21lIGJhY2s8L2Rpdj5cclxuICAgICAgPC9oZWFkZXI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTYgdGV4dC1jZW50ZXIgdGV4dC1bMjBweF0gdGV4dC1iYXNlIG10LTEwIFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bMjRweF0gZm9udC1ib2xkXCI+e2NhcmRUaXRsZX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gdGV4dC1bMTZweF0gZm9udC1zYW5zIGxlYWRpbmctWzI0cHhdIHRleHQtZ3JheS01MDBcIj5cclxuICAgICAgICAgIHt0eXBlb2YgY2FyZEJvZHkgPT09IFwiZnVuY3Rpb25cIiA/IGNhcmRCb2R5KGVtYWlsKSA6IGNhcmRCb2R5fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHtyZW5kZXJGb3JtRmllbGRzKHN0YWdlKX1cclxuICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25TdWJtaXR9XHJcbiAgICAgICAgICB0ZXh0PXtidXR0b25UaXRsZX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJiZy16aW5jLTMwMFwifVxyXG4gICAgICAgICAgdGV4dENvbG9yPXtcInRleHQtd2hpdGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9XCJ0ZXh0LVsxNnB4XSBbdGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZV0gZm9udC1tZWRpdW0gIHRleHQtZ3JheSB0ZXh0LXJpZ2h0IG10LTEwIGN1cnNvci1wb2ludGVyICB0cmFuc2l0aW9uIGR1cmF0aW9uLTMwMCBlYXNlLWluLW91dCBob3Zlcjp0ZXh0LWJsdWUtNTAwXCI+XHJcbiAgICAgICAgPGEgaHJlZj17bGlua30+e2NhcmRGb290ZXJ9PC9hPlxyXG4gICAgICA8L2Zvb3Rlcj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoUmVzZXRQYXNzd29yZENhcmQ7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXV0aEZvcm1GaWVsZCIsIkF1dGhCdXR0b24iLCJQaW5JbnB1dCIsIlNUQUdFX0NPTlRFTlQiLCJBdXRoUmVzZXRQYXNzd29yZENhcmQiLCJzdGFnZSIsImVtYWlsIiwib25JbnB1dENoYW5nZSIsIm9uU3VibWl0IiwiY2FyZFRpdGxlIiwiYnV0dG9uVGl0bGUiLCJjYXJkQm9keSIsImNhcmRGb290ZXIiLCJsaW5rIiwicmVuZGVyRm9ybUZpZWxkcyIsImlkIiwidHlwZSIsInBsYWNlaG9sZGVyIiwibmFtZSIsImxhYmVsIiwib25WYWxpZElucHV0IiwicmVxdWlyZWQiLCJsZW5ndGgiLCJpbml0aWFsVmFsdWUiLCJpbnB1dE1vZGUiLCJzdHlsZSIsInBhZGRpbmciLCJpbnB1dFN0eWxlIiwiYm9yZGVyQ29sb3IiLCJpbnB1dEZvY3VzU3R5bGUiLCJvbkNvbXBsZXRlIiwidmFsdWUiLCJhdXRvU2VsZWN0IiwicmVnZXhDcml0ZXJpYSIsImRpdiIsImNsYXNzTmFtZSIsImhlYWRlciIsIm9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIiwiZm9vdGVyIiwiYSIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthResetPasswordCard.jsx\n"));

/***/ })

});
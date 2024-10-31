"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/register/page",{

/***/ "(app-pages-browser)/./src/components/auth/AuthForm.jsx":
/*!******************************************!*\
  !*** ./src/components/auth/AuthForm.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton */ \"(app-pages-browser)/./src/components/auth/AuthButton.jsx\");\n/* harmony import */ var _barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=BiHide,BiShow!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onClick, onFinish } = param;\n    _s();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [formErrors, setFormErrors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [isPasswordVisible, setIsPasswordVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const togglePasswordVisibility = ()=>{\n        setIsPasswordVisible(!isPasswordVisible);\n    };\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-start gap-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        className: \"w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 32,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"email\",\n                        placeholder: \"email@example.com\",\n                        type: \"email\",\n                        className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        className: \"w-full justify-between items-center inline-flex  font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center gap-2 cursor-pointer hover:text-blue-500\",\n                                onClick: togglePasswordVisibility,\n                                children: [\n                                    isPasswordVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiShow, {}, void 0, false, {\n                                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 34\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_3__.BiHide, {}, void 0, false, {\n                                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 47\n                                    }, undefined),\n                                    \" \",\n                                    isPasswordVisible ? \"Show\" : \"Hide\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                lineNumber: 51,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"password\",\n                        placeholder: \"********\",\n                        type: isPasswordVisible ? \"text\" : \"password\",\n                        className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 59,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onClick: onClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 69,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 27,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"35kwXXXbawdKITpVyna6QCjjVnE=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQTBCO0FBQ1k7QUFDVTtBQUNoRCxNQUFNSSxXQUFXO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUNDLFFBQVEsRUFBRTs7SUFDL0MsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULHFEQUFjLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1oscURBQWMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sQ0FBQ2EsbUJBQW1CQyxxQkFBcUIsR0FBR2QscURBQWMsQ0FBQztJQUNqRSxNQUFNZSwyQkFBMkI7UUFDL0JELHFCQUFxQixDQUFDRDtJQUN4QjtJQUdBLE1BQU1HLGVBQWE7UUFDakIsTUFBTUMsZ0JBQWMsQ0FBQztRQUNyQixJQUFHLENBQUNULFNBQVNVLEtBQUssRUFBQztZQUNqQkQsY0FBY0MsS0FBSyxHQUFDO1FBQ3RCLE9BQU0sSUFBRyxDQUFDLGVBQWVDLElBQUksQ0FBQ1gsU0FBU1UsS0FBSyxHQUFFO1lBQzVDRCxjQUFjQyxLQUFLLEdBQUM7UUFDdEI7SUFFRjtJQUNBLE1BQU1FLGVBQWUsT0FBT0M7UUFDMUJBLEVBQUVDLGNBQWM7SUFDbEI7SUFFQSxxQkFDRSw4REFBQ0M7UUFBS0MsV0FBVTtRQUFpRUMsVUFBVUw7OzBCQUN6Riw4REFBQ007Z0JBQUlGLFdBQVU7MEJBQ1puQjs7Ozs7OzBCQUVILDhEQUFDcUI7Z0JBQUlGLFdBQVU7O2tDQUNiLDhEQUFDRzt3QkFDQ0MsU0FBUTt3QkFDUkosV0FBVTtrQ0FDWDs7Ozs7O2tDQUdELDhEQUFDSzt3QkFDQ0MsSUFBRzt3QkFDSEMsYUFBWTt3QkFDWkMsTUFBSzt3QkFDTFIsV0FBVTt3QkFDVlMsUUFBUTs7Ozs7O2tDQUdWLDhEQUFDTjt3QkFDQ0MsU0FBUTt3QkFDUkosV0FBVTs7MENBRVYsOERBQUNVOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNBO2dDQUNDVixXQUFVO2dDQUNWbEIsU0FBU1M7O29DQUVSRixrQ0FBb0IsOERBQUNWLHVGQUFNQTs7OztrRUFBTSw4REFBQ0QsdUZBQU1BOzs7OztvQ0FBSztvQ0FDN0NXLG9CQUFvQixTQUFTOzs7Ozs7Ozs7Ozs7O2tDQUdsQyw4REFBQ2dCO3dCQUNDQyxJQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxNQUFNbkIsb0JBQW9CLFNBQVM7d0JBQ25DVyxXQUFVO3dCQUNWUyxRQUFROzs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNQO2dCQUFJRixXQUFVOzBCQUNiLDRFQUFDdkIsbURBQVVBO29CQUNUSyxTQUFTQTtvQkFDVDZCLE1BQU05QjtvQkFDTitCLGlCQUFpQjtvQkFDakJDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBMUVNakM7S0FBQUE7QUE0RU4sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9BdXRoRm9ybS5qc3g/OGU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdXRoQnV0dG9uIGZyb20gXCIuL0F1dGhCdXR0b25cIjtcclxuaW1wb3J0IHsgQmlIaWRlLCBCaVNob3cgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuY29uc3QgQXV0aEZvcm0gPSAoeyBmb3JtVGl0bGUsIG9uQ2xpY2ssb25GaW5pc2ggfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtmb3JtRXJyb3JzLCBzZXRGb3JtRXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaXNQYXNzd29yZFZpc2libGUsIHNldElzUGFzc3dvcmRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Bhc3N3b3JkVmlzaWJsZSghaXNQYXNzd29yZFZpc2libGUpO1xyXG4gIH07XHJcblxyXG5cclxuICBjb25zdCB2YWxpZGF0ZUZvcm09KCk9PntcclxuICAgIGNvbnN0IG5ld0Zvcm1FcnJvcnM9e307XHJcbiAgICBpZighZm9ybURhdGEuZW1haWwpe1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLmVtYWlsPVwiRW1haWwgaXMgcmVxdWlyZWRcIjtcclxuICAgIH1lbHNlIGlmKCEvXFxTK0BcXFMrXFwuXFxTKy8udGVzdChmb3JtRGF0YS5lbWFpbCkpe1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLmVtYWlsPVwiRW1haWwgaXMgaW52YWxpZFwiO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVs4MCVdIGgtZnVsbFwiIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtMnhsICB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSB3aGl0ZXNwYWNlLW5vd3JhcCBtYi00XCI+XHJcbiAgICAgICAge2Zvcm1UaXRsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBnYXAtMiB3LWZ1bGxcIj5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgICBmb250LW5vcm1hbCB0ZXh0LVsjNjY2NjY2XSB0ZXh0LWJhc2UgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gcC0wIHBsLTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVtYWlsIEFkZHJlc3NcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBpbmxpbmUtZmxleCAgZm9udC1ub3JtYWwgdGV4dC1bIzY2NjY2Nl0gdGV4dC1iYXNlIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHAtMCBwbC0wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj5QYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc1Bhc3N3b3JkVmlzaWJsZSA/IDxCaVNob3cgLz4gOiA8QmlIaWRlIC8+fXtcIiBcIn1cclxuICAgICAgICAgICAge2lzUGFzc3dvcmRWaXNpYmxlID8gXCJTaG93XCIgOiBcIkhpZGVcIn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqXCJcclxuICAgICAgICAgIHR5cGU9e2lzUGFzc3dvcmRWaXNpYmxlID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgPEF1dGhCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2t9XHJcbiAgICAgICAgICB0ZXh0PXtmb3JtVGl0bGV9XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I9e1wiYmctemluYy0zMDBcIn1cclxuICAgICAgICAgIHRleHRDb2xvcj17XCJ0ZXh0LXdoaXRlXCJ9XHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Zvcm0+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhGb3JtO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJBdXRoQnV0dG9uIiwiQmlIaWRlIiwiQmlTaG93IiwiQXV0aEZvcm0iLCJmb3JtVGl0bGUiLCJvbkNsaWNrIiwib25GaW5pc2giLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJmb3JtRXJyb3JzIiwic2V0Rm9ybUVycm9ycyIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJ2YWxpZGF0ZUZvcm0iLCJuZXdGb3JtRXJyb3JzIiwiZW1haWwiLCJ0ZXN0IiwiaGFuZGxlU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiZm9ybSIsImNsYXNzTmFtZSIsIm9uU3VibWl0IiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsInJlcXVpcmVkIiwic3BhbiIsInRleHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJ0ZXh0Q29sb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});
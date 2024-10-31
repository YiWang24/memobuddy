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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton */ \"(app-pages-browser)/./src/components/auth/AuthButton.jsx\");\n/* harmony import */ var _barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BiHide,BiShow!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [isPasswordVisible, setIsPasswordVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const togglePasswordVisibility = ()=>{\n        setIsPasswordVisible(!isPasswordVisible);\n    };\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n        if (!formData.password) {\n            newFormErrors.password = \"password is required\";\n        } else if (formData.password.length < 6) {\n            newFormErrors.password = \"password must be at least 6 characters\";\n        }\n        setFormErrors(newFormErrors);\n        if (Object.keys(newFormErrors).length > 0) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill in the required fields\");\n        }\n        return Object.keys(newFormErrors).length === 0;\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        console.log(e.target);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n        if (formErrors[name]) {\n            setFormData((prev)=>({\n                    ...prev,\n                    [name]: null\n                }));\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            onFinish(onSubmit);\n        }\n    };\n    c;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-start gap-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        className: \"w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"email\",\n                        placeholder: \"email@example.com\",\n                        type: \"email\",\n                        value: formData.email || \"\",\n                        onChange: handleInputChange,\n                        className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        className: \"w-full justify-between items-center inline-flex  font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center gap-2 cursor-pointer hover:text-blue-500\",\n                                onClick: togglePasswordVisibility,\n                                children: [\n                                    isPasswordVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiShow, {}, void 0, false, {\n                                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 34\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiHide, {}, void 0, false, {\n                                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 47\n                                    }, undefined),\n                                    \" \",\n                                    isPasswordVisible ? \"Show\" : \"Hide\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"password\",\n                        placeholder: \"********\",\n                        type: isPasswordVisible ? \"text\" : \"password\",\n                        value: formData.password || \"\",\n                        onChange: handleInputChange,\n                        className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"WnNx75PGVxWZ0RIxOo++ob8YcPY=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNMO0FBQ1k7QUFDVTtBQUNoRCxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUixxREFBYyxDQUFDO1FBQUVVLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ3pFLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYixxREFBYyxDQUFDLENBQUM7SUFDcEQsTUFBTSxDQUFDYyxtQkFBbUJDLHFCQUFxQixHQUFHZixxREFBYyxDQUFDO0lBQ2pFLE1BQU1nQiwyQkFBMkI7UUFDL0JELHFCQUFxQixDQUFDRDtJQUN4QjtJQUVBLE1BQU1HLGVBQWU7UUFDbkIsTUFBTUMsZ0JBQWdCLENBQUM7UUFDdkIsSUFBSSxDQUFDWCxTQUFTRyxLQUFLLEVBQUU7WUFDbkJRLGNBQWNSLEtBQUssR0FBRztRQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlUyxJQUFJLENBQUNaLFNBQVNHLEtBQUssR0FBRztZQUMvQ1EsY0FBY1IsS0FBSyxHQUFHO1FBQ3hCO1FBQ0EsSUFBSSxDQUFDSCxTQUFTSSxRQUFRLEVBQUU7WUFDdEJPLGNBQWNQLFFBQVEsR0FBRztRQUMzQixPQUFPLElBQUlKLFNBQVNJLFFBQVEsQ0FBQ1MsTUFBTSxHQUFHLEdBQUc7WUFDdkNGLGNBQWNQLFFBQVEsR0FBRztRQUMzQjtRQUNBRSxjQUFjSztRQUNkLElBQUlHLE9BQU9DLElBQUksQ0FBQ0osZUFBZUUsTUFBTSxHQUFHLEdBQUc7WUFDekNyQiwyRUFBT0EsQ0FBQ3dCLEtBQUssQ0FBQztRQUNoQjtRQUNBLE9BQU9GLE9BQU9DLElBQUksQ0FBQ0osZUFBZUUsTUFBTSxLQUFLO0lBQy9DO0lBQ0EsTUFBTUksb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU0sRUFBRUMsSUFBSSxFQUFFQyxLQUFLLEVBQUUsR0FBR0YsRUFBRUcsTUFBTTtRQUNoQ0MsUUFBUUMsR0FBRyxDQUFDTCxFQUFFRyxNQUFNO1FBQ3BCcEIsWUFBWSxDQUFDdUIsT0FBVTtnQkFBRSxHQUFHQSxJQUFJO2dCQUFFLENBQUNMLEtBQUssRUFBRUM7WUFBTTtRQUNoRCxJQUFJZixVQUFVLENBQUNjLEtBQUssRUFBRTtZQUNwQmxCLFlBQVksQ0FBQ3VCLE9BQVU7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRSxDQUFDTCxLQUFLLEVBQUU7Z0JBQUs7UUFDakQ7SUFDRjtJQUVBLE1BQU1NLGVBQWUsT0FBT1A7UUFDMUJBLEVBQUVRLGNBQWM7UUFDaEIsSUFBSWhCLGdCQUFnQjtZQUNsQmlCLFNBQVM1QjtRQUNYO0lBQ0Y7SUFDQTZCO0lBRUEscUJBQ0UsOERBQUNDO1FBQ0NDLFdBQVU7UUFDVi9CLFVBQVUwQjs7MEJBRVYsOERBQUNNO2dCQUFJRCxXQUFVOzBCQUNaaEM7Ozs7OzswQkFFSCw4REFBQ2lDO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NDLFNBQVE7d0JBQ1JILFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ0k7d0JBQ0NDLElBQUc7d0JBQ0hDLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xqQixPQUFPcEIsU0FBU0csS0FBSyxJQUFJO3dCQUN6Qm1DLFVBQVVyQjt3QkFDVmEsV0FBVTt3QkFDVlMsUUFBUTs7Ozs7O2tDQUdWLDhEQUFDUDt3QkFDQ0MsU0FBUTt3QkFDUkgsV0FBVTs7MENBRVYsOERBQUNVOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNBO2dDQUNDVixXQUFVO2dDQUNWVyxTQUFTaEM7O29DQUVSRixrQ0FBb0IsOERBQUNYLHVGQUFNQTs7OztrRUFBTSw4REFBQ0QsdUZBQU1BOzs7OztvQ0FBSztvQ0FDN0NZLG9CQUFvQixTQUFTOzs7Ozs7Ozs7Ozs7O2tDQUdsQyw4REFBQzJCO3dCQUNDQyxJQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxNQUFNOUIsb0JBQW9CLFNBQVM7d0JBQ25DYSxPQUFPcEIsU0FBU0ksUUFBUSxJQUFJO3dCQUM1QmtDLFVBQVVyQjt3QkFDVmEsV0FBVTt3QkFDVlMsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUlaLDhEQUFDUjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ3BDLG1EQUFVQTtvQkFDVCtDLFNBQVNDO29CQUNUQyxNQUFNN0M7b0JBQ044QyxpQkFBaUI7b0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQXRHTWhEO0tBQUFBO0FBd0dOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4PzhlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEF1dGhCdXR0b24gZnJvbSBcIi4vQXV0aEJ1dHRvblwiO1xyXG5pbXBvcnQgeyBCaUhpZGUsIEJpU2hvdyB9IGZyb20gXCJyZWFjdC1pY29ucy9iaVwiO1xyXG5jb25zdCBBdXRoRm9ybSA9ICh7IGZvcm1UaXRsZSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURhdGFdID0gUmVhY3QudXNlU3RhdGUoeyBlbWFpbDogXCJcIiwgcGFzc3dvcmQ6IFwiXCIgfSk7XHJcbiAgY29uc3QgW2Zvcm1FcnJvcnMsIHNldEZvcm1FcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc1Bhc3N3b3JkVmlzaWJsZSwgc2V0SXNQYXNzd29yZFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIHNldElzUGFzc3dvcmRWaXNpYmxlKCFpc1Bhc3N3b3JkVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9ybUVycm9ycyA9IHt9O1xyXG4gICAgaWYgKCFmb3JtRGF0YS5lbWFpbCkge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZFwiO1xyXG4gICAgfSBlbHNlIGlmICghL1xcUytAXFxTK1xcLlxcUysvLnRlc3QoZm9ybURhdGEuZW1haWwpKSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWRcIjtcclxuICAgIH1cclxuICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5wYXNzd29yZCA9IFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcclxuICAgIH0gZWxzZSBpZiAoZm9ybURhdGEucGFzc3dvcmQubGVuZ3RoIDwgNikge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLnBhc3N3b3JkID0gXCJwYXNzd29yZCBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiO1xyXG4gICAgfVxyXG4gICAgc2V0Rm9ybUVycm9ycyhuZXdGb3JtRXJyb3JzKTtcclxuICAgIGlmIChPYmplY3Qua2V5cyhuZXdGb3JtRXJyb3JzKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiB0aGUgcmVxdWlyZWQgZmllbGRzXCIpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld0Zvcm1FcnJvcnMpLmxlbmd0aCA9PT0gMDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gICAgaWYgKGZvcm1FcnJvcnNbbmFtZV0pIHtcclxuICAgICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogbnVsbCB9KSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICBvbkZpbmlzaChvblN1Ym1pdCk7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybVxyXG4gICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC00IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB3LVs4MCVdIGgtZnVsbFwiXHJcbiAgICAgIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9XHJcbiAgICA+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9udC1ib2xkIHRleHQtYmxhY2sgdGV4dC0yeGwgIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHdoaXRlc3BhY2Utbm93cmFwIG1iLTRcIj5cclxuICAgICAgICB7Zm9ybVRpdGxlfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGp1c3RpZnktY2VudGVyIGl0ZW1zLXN0YXJ0IGdhcC0yIHctZnVsbFwiPlxyXG4gICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgaHRtbEZvcj1cImVtYWlsXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCAgIGZvbnQtbm9ybWFsIHRleHQtWyM2NjY2NjZdIHRleHQtYmFzZSB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSBwLTAgcGwtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgRW1haWwgQWRkcmVzc1xyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cImVtYWlsXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAZXhhbXBsZS5jb21cIlxyXG4gICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5lbWFpbCB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuXHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBodG1sRm9yPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGp1c3RpZnktYmV0d2VlbiBpdGVtcy1jZW50ZXIgaW5saW5lLWZsZXggIGZvbnQtbm9ybWFsIHRleHQtWyM2NjY2NjZdIHRleHQtYmFzZSB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSBwLTAgcGwtMFwiXHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgPHNwYW4+UGFzc3dvcmQ8L3NwYW4+XHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGl0ZW1zLWNlbnRlciBnYXAtMiBjdXJzb3ItcG9pbnRlciBob3Zlcjp0ZXh0LWJsdWUtNTAwXCJcclxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlUGFzc3dvcmRWaXNpYmlsaXR5fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7aXNQYXNzd29yZFZpc2libGUgPyA8QmlTaG93IC8+IDogPEJpSGlkZSAvPn17XCIgXCJ9XHJcbiAgICAgICAgICAgIHtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwiU2hvd1wiIDogXCJIaWRlXCJ9XHJcbiAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKlwiXHJcbiAgICAgICAgICB0eXBlPXtpc1Bhc3N3b3JkVmlzaWJsZSA/IFwidGV4dFwiIDogXCJwYXNzd29yZFwifVxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLnBhc3N3b3JkIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsXCI+XHJcbiAgICAgICAgPEF1dGhCdXR0b25cclxuICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJ1dHRvbkNsaWNrfVxyXG4gICAgICAgICAgdGV4dD17Zm9ybVRpdGxlfVxyXG4gICAgICAgICAgYmFja2dyb3VuZENvbG9yPXtcImJnLXppbmMtMzAwXCJ9XHJcbiAgICAgICAgICB0ZXh0Q29sb3I9e1widGV4dC13aGl0ZVwifVxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9mb3JtPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdXRoRm9ybTtcclxuIl0sIm5hbWVzIjpbIm1lc3NhZ2UiLCJSZWFjdCIsIkF1dGhCdXR0b24iLCJCaUhpZGUiLCJCaVNob3ciLCJBdXRoRm9ybSIsImZvcm1UaXRsZSIsIm9uU3VibWl0IiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsInVzZVN0YXRlIiwiZW1haWwiLCJwYXNzd29yZCIsImZvcm1FcnJvcnMiLCJzZXRGb3JtRXJyb3JzIiwiaXNQYXNzd29yZFZpc2libGUiLCJzZXRJc1Bhc3N3b3JkVmlzaWJsZSIsInRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSIsInZhbGlkYXRlRm9ybSIsIm5ld0Zvcm1FcnJvcnMiLCJ0ZXN0IiwibGVuZ3RoIiwiT2JqZWN0Iiwia2V5cyIsImVycm9yIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJlIiwibmFtZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInByZXYiLCJoYW5kbGVTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9uRmluaXNoIiwiYyIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInNwYW4iLCJvbkNsaWNrIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJ0ZXh0IiwiYmFja2dyb3VuZENvbG9yIiwidGV4dENvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});
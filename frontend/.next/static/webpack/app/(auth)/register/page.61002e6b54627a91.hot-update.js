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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton */ \"(app-pages-browser)/./src/components/auth/AuthButton.jsx\");\n/* harmony import */ var _barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BiHide,BiShow!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({\n        email: \"\",\n        password: \"\"\n    });\n    const [formErrors, setFormErrors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [isPasswordVisible, setIsPasswordVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const togglePasswordVisibility = ()=>{\n        setIsPasswordVisible(!isPasswordVisible);\n    };\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n        if (!formData.password) {\n            newFormErrors.password = \"password is required\";\n        } else if (formData.password.length < 6) {\n            newFormErrors.password = \"password must be at least 6 characters\";\n        }\n        setFormErrors(newFormErrors);\n        if (Object.keys(newFormErrors).length > 0) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill in the required fields\");\n        }\n        return Object.keys(newFormErrors).length === 0;\n    };\n    const handleInputChange = (e)=>{\n        const { value } = e.target.value;\n        console.log(e.target.value);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n        if (formErrors[name]) {\n            setFormData((prev)=>({\n                    ...prev,\n                    [name]: null\n                }));\n        }\n    };\n    const handleButtonClick = (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            onSubmit(formData);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 53,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-start gap-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        className: \"w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"email\",\n                        placeholder: \"email@example.com\",\n                        type: \"email\",\n                        value: formData.email || \"\",\n                        onChange: handleInputChange,\n                        className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        className: \"w-full justify-between items-center inline-flex  font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                lineNumber: 77,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center gap-2 cursor-pointer hover:text-blue-500\",\n                                onClick: togglePasswordVisibility,\n                                children: [\n                                    isPasswordVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiShow, {}, void 0, false, {\n                                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 34\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiHide, {}, void 0, false, {\n                                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                        lineNumber: 82,\n                                        columnNumber: 47\n                                    }, undefined),\n                                    \" \",\n                                    isPasswordVisible ? \"Show\" : \"Hide\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 73,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"password\",\n                        placeholder: \"********\",\n                        type: isPasswordVisible ? \"text\" : \"password\",\n                        value: formData.password || \"\",\n                        onChange: handleInputChange,\n                        className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 86,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 98,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 97,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"WnNx75PGVxWZ0RIxOo++ob8YcPY=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUMrQjtBQUNMO0FBQ1k7QUFDVTtBQUNoRCxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxRQUFRLEVBQUU7O0lBQ3ZDLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHUixxREFBYyxDQUFDO1FBQUVVLE9BQU87UUFBSUMsVUFBVTtJQUFHO0lBQ3pFLE1BQU0sQ0FBQ0MsWUFBWUMsY0FBYyxHQUFHYixxREFBYyxDQUFDLENBQUM7SUFDcEQsTUFBTSxDQUFDYyxtQkFBbUJDLHFCQUFxQixHQUFHZixxREFBYyxDQUFDO0lBQ2pFLE1BQU1nQiwyQkFBMkI7UUFDL0JELHFCQUFxQixDQUFDRDtJQUN4QjtJQUVBLE1BQU1HLGVBQWU7UUFDbkIsTUFBTUMsZ0JBQWdCLENBQUM7UUFDdkIsSUFBSSxDQUFDWCxTQUFTRyxLQUFLLEVBQUU7WUFDbkJRLGNBQWNSLEtBQUssR0FBRztRQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlUyxJQUFJLENBQUNaLFNBQVNHLEtBQUssR0FBRztZQUMvQ1EsY0FBY1IsS0FBSyxHQUFHO1FBQ3hCO1FBQ0EsSUFBSSxDQUFDSCxTQUFTSSxRQUFRLEVBQUU7WUFDdEJPLGNBQWNQLFFBQVEsR0FBRztRQUMzQixPQUFPLElBQUlKLFNBQVNJLFFBQVEsQ0FBQ1MsTUFBTSxHQUFHLEdBQUc7WUFDdkNGLGNBQWNQLFFBQVEsR0FBRztRQUMzQjtRQUNBRSxjQUFjSztRQUNkLElBQUlHLE9BQU9DLElBQUksQ0FBQ0osZUFBZUUsTUFBTSxHQUFHLEdBQUc7WUFDekNyQiwyRUFBT0EsQ0FBQ3dCLEtBQUssQ0FBQztRQUNoQjtRQUNBLE9BQU9GLE9BQU9DLElBQUksQ0FBQ0osZUFBZUUsTUFBTSxLQUFLO0lBQy9DO0lBQ0EsTUFBTUksb0JBQW9CLENBQUNDO1FBQ3pCLE1BQU0sRUFBRUMsS0FBSyxFQUFFLEdBQUdELEVBQUVFLE1BQU0sQ0FBQ0QsS0FBSztRQUNoQ0UsUUFBUUMsR0FBRyxDQUFDSixFQUFFRSxNQUFNLENBQUNELEtBQUs7UUFDMUJsQixZQUFZLENBQUNzQixPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0MsS0FBSyxFQUFFTDtZQUFNO1FBQ2hELElBQUlkLFVBQVUsQ0FBQ21CLEtBQUssRUFBRTtZQUNwQnZCLFlBQVksQ0FBQ3NCLE9BQVU7b0JBQUUsR0FBR0EsSUFBSTtvQkFBRSxDQUFDQyxLQUFLLEVBQUU7Z0JBQUs7UUFDakQ7SUFDRjtJQUVBLE1BQU1DLG9CQUFvQixDQUFDUDtRQUN6QkEsRUFBRVEsY0FBYztRQUNoQixJQUFJaEIsZ0JBQWdCO1lBQ2xCWCxTQUFTQztRQUNYO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQzJCO1FBQ0NDLFdBQVU7UUFDVjdCLFVBQVVBOzswQkFFViw4REFBQzhCO2dCQUFJRCxXQUFVOzBCQUNaOUI7Ozs7OzswQkFFSCw4REFBQytCO2dCQUFJRCxXQUFVOztrQ0FDYiw4REFBQ0U7d0JBQ0NDLFNBQVE7d0JBQ1JILFdBQVU7a0NBQ1g7Ozs7OztrQ0FHRCw4REFBQ0k7d0JBQ0NDLElBQUc7d0JBQ0hDLGFBQVk7d0JBQ1pDLE1BQUs7d0JBQ0xoQixPQUFPbkIsU0FBU0csS0FBSyxJQUFJO3dCQUN6QmlDLFVBQVVuQjt3QkFDVlcsV0FBVTt3QkFDVlMsUUFBUTs7Ozs7O2tDQUdWLDhEQUFDUDt3QkFDQ0MsU0FBUTt3QkFDUkgsV0FBVTs7MENBRVYsOERBQUNVOzBDQUFLOzs7Ozs7MENBQ04sOERBQUNBO2dDQUNDVixXQUFVO2dDQUNWVyxTQUFTOUI7O29DQUVSRixrQ0FBb0IsOERBQUNYLHVGQUFNQTs7OztrRUFBTSw4REFBQ0QsdUZBQU1BOzs7OztvQ0FBSztvQ0FDN0NZLG9CQUFvQixTQUFTOzs7Ozs7Ozs7Ozs7O2tDQUdsQyw4REFBQ3lCO3dCQUNDQyxJQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxNQUFNNUIsb0JBQW9CLFNBQVM7d0JBQ25DWSxPQUFPbkIsU0FBU0ksUUFBUSxJQUFJO3dCQUM1QmdDLFVBQVVuQjt3QkFDVlcsV0FBVTt3QkFDVlMsUUFBUTs7Ozs7Ozs7Ozs7OzBCQUlaLDhEQUFDUjtnQkFBSUQsV0FBVTswQkFDYiw0RUFBQ2xDLG1EQUFVQTtvQkFDVDZDLFNBQVNkO29CQUNUZSxNQUFNMUM7b0JBQ04yQyxpQkFBaUI7b0JBQ2pCQyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7OztBQUtyQjtHQXJHTTdDO0tBQUFBO0FBdUdOLCtEQUFlQSxRQUFRQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4PzhlOTAiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBBdXRoQnV0dG9uIGZyb20gXCIuL0F1dGhCdXR0b25cIjtcclxuaW1wb3J0IHsgQmlIaWRlLCBCaVNob3cgfSBmcm9tIFwicmVhY3QtaWNvbnMvYmlcIjtcclxuY29uc3QgQXV0aEZvcm0gPSAoeyBmb3JtVGl0bGUsIG9uU3VibWl0IH0pID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IFJlYWN0LnVzZVN0YXRlKHsgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xyXG4gIGNvbnN0IFtmb3JtRXJyb3JzLCBzZXRGb3JtRXJyb3JzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuICBjb25zdCBbaXNQYXNzd29yZFZpc2libGUsIHNldElzUGFzc3dvcmRWaXNpYmxlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCB0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkgPSAoKSA9PiB7XHJcbiAgICBzZXRJc1Bhc3N3b3JkVmlzaWJsZSghaXNQYXNzd29yZFZpc2libGUpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlRm9ybSA9ICgpID0+IHtcclxuICAgIGNvbnN0IG5ld0Zvcm1FcnJvcnMgPSB7fTtcclxuICAgIGlmICghZm9ybURhdGEuZW1haWwpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5lbWFpbCA9IFwiRW1haWwgaXMgcmVxdWlyZWRcIjtcclxuICAgIH0gZWxzZSBpZiAoIS9cXFMrQFxcUytcXC5cXFMrLy50ZXN0KGZvcm1EYXRhLmVtYWlsKSkge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyBpbnZhbGlkXCI7XHJcbiAgICB9XHJcbiAgICBpZiAoIWZvcm1EYXRhLnBhc3N3b3JkKSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMucGFzc3dvcmQgPSBcInBhc3N3b3JkIGlzIHJlcXVpcmVkXCI7XHJcbiAgICB9IGVsc2UgaWYgKGZvcm1EYXRhLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5wYXNzd29yZCA9IFwicGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcclxuICAgIH1cclxuICAgIHNldEZvcm1FcnJvcnMobmV3Rm9ybUVycm9ycyk7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMobmV3Rm9ybUVycm9ycykubGVuZ3RoID4gMCkge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiUGxlYXNlIGZpbGwgaW4gdGhlIHJlcXVpcmVkIGZpZWxkc1wiKTtcclxuICAgIH1cclxuICAgIHJldHVybiBPYmplY3Qua2V5cyhuZXdGb3JtRXJyb3JzKS5sZW5ndGggPT09IDA7XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVJbnB1dENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zdCB7IHZhbHVlIH0gPSBlLnRhcmdldC52YWx1ZTtcclxuICAgIGNvbnNvbGUubG9nKGUudGFyZ2V0LnZhbHVlKTtcclxuICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IHZhbHVlIH0pKTtcclxuICAgIGlmIChmb3JtRXJyb3JzW25hbWVdKSB7XHJcbiAgICAgIHNldEZvcm1EYXRhKChwcmV2KSA9PiAoeyAuLi5wcmV2LCBbbmFtZV06IG51bGwgfSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh2YWxpZGF0ZUZvcm0oKSkge1xyXG4gICAgICBvblN1Ym1pdChmb3JtRGF0YSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctWzgwJV0gaC1mdWxsXCJcclxuICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtMnhsICB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSB3aGl0ZXNwYWNlLW5vd3JhcCBtYi00XCI+XHJcbiAgICAgICAge2Zvcm1UaXRsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LWNvbCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1zdGFydCBnYXAtMiB3LWZ1bGxcIj5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9XCJlbWFpbFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgICBmb250LW5vcm1hbCB0ZXh0LVsjNjY2NjY2XSB0ZXh0LWJhc2UgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gcC0wIHBsLTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIEVtYWlsIEFkZHJlc3NcclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsQGV4YW1wbGUuY29tXCJcclxuICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEuZW1haWwgfHwgXCJcIn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcblxyXG4gICAgICAgIDxsYWJlbFxyXG4gICAgICAgICAgaHRtbEZvcj1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtY2VudGVyIGlubGluZS1mbGV4ICBmb250LW5vcm1hbCB0ZXh0LVsjNjY2NjY2XSB0ZXh0LWJhc2UgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gcC0wIHBsLTBcIlxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxzcGFuPlBhc3N3b3JkPC9zcGFuPlxyXG4gICAgICAgICAgPHNwYW5cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgZ2FwLTIgY3Vyc29yLXBvaW50ZXIgaG92ZXI6dGV4dC1ibHVlLTUwMFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAge2lzUGFzc3dvcmRWaXNpYmxlID8gPEJpU2hvdyAvPiA6IDxCaUhpZGUgLz59e1wiIFwifVxyXG4gICAgICAgICAgICB7aXNQYXNzd29yZFZpc2libGUgPyBcIlNob3dcIiA6IFwiSGlkZVwifVxyXG4gICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBpZD1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiKioqKioqKipcIlxyXG4gICAgICAgICAgdHlwZT17aXNQYXNzd29yZFZpc2libGUgPyBcInRleHRcIiA6IFwicGFzc3dvcmRcIn1cclxuICAgICAgICAgIHZhbHVlPXtmb3JtRGF0YS5wYXNzd29yZCB8fCBcIlwifVxyXG4gICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUlucHV0Q2hhbmdlfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIGJvcmRlciBib3JkZXItZ3JheS0zMDAgcm91bmRlZC1sZyBwLTMgZm9jdXM6b3V0bGluZS1ub25lIGZvY3VzOnJpbmctMiBmb2N1czpyaW5nLWJsdWUtNTAwXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgIDxBdXRoQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja31cclxuICAgICAgICAgIHRleHQ9e2Zvcm1UaXRsZX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJiZy16aW5jLTMwMFwifVxyXG4gICAgICAgICAgdGV4dENvbG9yPXtcInRleHQtd2hpdGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJuYW1lcyI6WyJtZXNzYWdlIiwiUmVhY3QiLCJBdXRoQnV0dG9uIiwiQmlIaWRlIiwiQmlTaG93IiwiQXV0aEZvcm0iLCJmb3JtVGl0bGUiLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJ1c2VTdGF0ZSIsImVtYWlsIiwicGFzc3dvcmQiLCJmb3JtRXJyb3JzIiwic2V0Rm9ybUVycm9ycyIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJ2YWxpZGF0ZUZvcm0iLCJuZXdGb3JtRXJyb3JzIiwidGVzdCIsImxlbmd0aCIsIk9iamVjdCIsImtleXMiLCJlcnJvciIsImhhbmRsZUlucHV0Q2hhbmdlIiwiZSIsInZhbHVlIiwidGFyZ2V0IiwiY29uc29sZSIsImxvZyIsInByZXYiLCJuYW1lIiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJwcmV2ZW50RGVmYXVsdCIsImZvcm0iLCJjbGFzc05hbWUiLCJkaXYiLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwib25DaGFuZ2UiLCJyZXF1aXJlZCIsInNwYW4iLCJvbkNsaWNrIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _AuthButton__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AuthButton */ \"(app-pages-browser)/./src/components/auth/AuthButton.jsx\");\n/* harmony import */ var _barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=BiHide,BiShow!=!react-icons/bi */ \"(app-pages-browser)/./node_modules/react-icons/bi/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onClick, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [formErrors, setFormErrors] = react__WEBPACK_IMPORTED_MODULE_1___default().useState({});\n    const [isPasswordVisible, setIsPasswordVisible] = react__WEBPACK_IMPORTED_MODULE_1___default().useState(false);\n    const togglePasswordVisibility = ()=>{\n        setIsPasswordVisible(!isPasswordVisible);\n    };\n    const validateForm = ()=>{\n        const newFormErrors = {};\n        if (!formData.email) {\n            newFormErrors.email = \"Email is required\";\n        } else if (!/\\S+@\\S+\\.\\S+/.test(formData.email)) {\n            newFormErrors.email = \"Email is invalid\";\n        }\n        if (!formData.password) {\n            newFormErrors.password = \"password is required\";\n        } else if (formData.password.length < 6) {\n            newFormErrors.password = \"password must be at least 6 characters\";\n        }\n        setFormErrors(newFormErrors);\n        _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(Object.values(newFormErrors)[0]);\n        return Object.keys(newFormErrors).length === 0;\n    };\n    const handleInputChange = (e)=>{\n        const { name, value } = e.target;\n        console.log(e.target);\n        setFormData((prev)=>({\n                ...prev,\n                [name]: value\n            }));\n        if (formErrors[name]) {\n            setFormErrors((prev)=>({\n                    ...prev,\n                    [name]: null\n                }));\n        }\n    };\n    const handleSubmit = async (e)=>{\n        e.preventDefault();\n        if (validateForm()) {\n            onFinish(onSubmit);\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: handleSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col justify-center items-start gap-2 w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"email\",\n                        className: \"w-full   font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                        children: \"Email Address\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 55,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"email\",\n                        placeholder: \"email@example.com\",\n                        type: \"email\",\n                        value: formData.email || \"\",\n                        onChange: handleInputChange,\n                        className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"password\",\n                        className: \"w-full justify-between items-center inline-flex  font-normal text-[#666666] text-base tracking-[0] leading-[normal] p-0 pl-0\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: \"Password\"\n                            }, void 0, false, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                lineNumber: 75,\n                                columnNumber: 11\n                            }, undefined),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"flex items-center gap-2 cursor-pointer hover:text-blue-500\",\n                                onClick: togglePasswordVisibility,\n                                children: [\n                                    isPasswordVisible ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiShow, {}, void 0, false, {\n                                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 34\n                                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_BiHide_BiShow_react_icons_bi__WEBPACK_IMPORTED_MODULE_4__.BiHide, {}, void 0, false, {\n                                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                        lineNumber: 80,\n                                        columnNumber: 47\n                                    }, undefined),\n                                    \" \",\n                                    isPasswordVisible ? \"Show\" : \"Hide\"\n                                ]\n                            }, void 0, true, {\n                                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                                lineNumber: 76,\n                                columnNumber: 11\n                            }, undefined)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 71,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"password\",\n                        placeholder: \"********\",\n                        type: isPasswordVisible ? \"text\" : \"password\",\n                        value: formData.password || \"\",\n                        onChange: handleInputChange,\n                        className: \"w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                        lineNumber: 84,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 54,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_AuthButton__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onClick: onClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 96,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 95,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"35kwXXXbawdKITpVyna6QCjjVnE=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUErQjtBQUNMO0FBQ1k7QUFDVTtBQUNoRCxNQUFNSyxXQUFXO1FBQUMsRUFBRUMsU0FBUyxFQUFFQyxPQUFPLEVBQUVDLFFBQVEsRUFBRTs7SUFDaEQsTUFBTSxDQUFDQyxVQUFVQyxZQUFZLEdBQUdULHFEQUFjLENBQUMsQ0FBQztJQUNoRCxNQUFNLENBQUNXLFlBQVlDLGNBQWMsR0FBR1oscURBQWMsQ0FBQyxDQUFDO0lBQ3BELE1BQU0sQ0FBQ2EsbUJBQW1CQyxxQkFBcUIsR0FBR2QscURBQWMsQ0FBQztJQUNqRSxNQUFNZSwyQkFBMkI7UUFDL0JELHFCQUFxQixDQUFDRDtJQUN4QjtJQUVBLE1BQU1HLGVBQWU7UUFDbkIsTUFBTUMsZ0JBQWdCLENBQUM7UUFDdkIsSUFBSSxDQUFDVCxTQUFTVSxLQUFLLEVBQUU7WUFDbkJELGNBQWNDLEtBQUssR0FBRztRQUN4QixPQUFPLElBQUksQ0FBQyxlQUFlQyxJQUFJLENBQUNYLFNBQVNVLEtBQUssR0FBRztZQUMvQ0QsY0FBY0MsS0FBSyxHQUFHO1FBQ3hCO1FBQ0EsSUFBSSxDQUFDVixTQUFTWSxRQUFRLEVBQUU7WUFDdEJILGNBQWNHLFFBQVEsR0FBRztRQUUzQixPQUFPLElBQUlaLFNBQVNZLFFBQVEsQ0FBQ0MsTUFBTSxHQUFHLEdBQUc7WUFDdkNKLGNBQWNHLFFBQVEsR0FBRztRQUMzQjtRQUNBUixjQUFjSztRQUNkbEIsMkVBQU9BLENBQUN1QixLQUFLLENBQUNDLE9BQU9DLE1BQU0sQ0FBQ1AsY0FBYyxDQUFDLEVBQUU7UUFDN0MsT0FBT00sT0FBT0UsSUFBSSxDQUFDUixlQUFlSSxNQUFNLEtBQUs7SUFDL0M7SUFDQSxNQUFNSyxvQkFBb0IsQ0FBQ0M7UUFDekIsTUFBTSxFQUFFQyxJQUFJLEVBQUVDLEtBQUssRUFBRSxHQUFHRixFQUFFRyxNQUFNO1FBQ2hDQyxRQUFRQyxHQUFHLENBQUNMLEVBQUVHLE1BQU07UUFDcEJyQixZQUFZLENBQUN3QixPQUFVO2dCQUFFLEdBQUdBLElBQUk7Z0JBQUUsQ0FBQ0wsS0FBSyxFQUFFQztZQUFNO1FBQ2hELElBQUlsQixVQUFVLENBQUNpQixLQUFLLEVBQUU7WUFDcEJoQixjQUFjLENBQUNxQixPQUFVO29CQUFFLEdBQUdBLElBQUk7b0JBQUUsQ0FBQ0wsS0FBSyxFQUFFO2dCQUFLO1FBQ25EO0lBQ0Y7SUFFQSxNQUFNTSxlQUFlLE9BQU9QO1FBQzFCQSxFQUFFUSxjQUFjO1FBQ2hCLElBQUluQixnQkFBZ0I7WUFDbEJvQixTQUFTN0I7UUFDWDtJQUNGO0lBRUEscUJBQ0UsOERBQUM4QjtRQUNDQyxXQUFVO1FBQ1YvQixVQUFVMkI7OzBCQUVWLDhEQUFDSztnQkFBSUQsV0FBVTswQkFDWmpDOzs7Ozs7MEJBRUgsOERBQUNrQztnQkFBSUQsV0FBVTs7a0NBQ2IsOERBQUNFO3dCQUNDQyxTQUFRO3dCQUNSSCxXQUFVO2tDQUNYOzs7Ozs7a0NBR0QsOERBQUNJO3dCQUNDQyxJQUFHO3dCQUNIQyxhQUFZO3dCQUNaQyxNQUFLO3dCQUNMaEIsT0FBT3JCLFNBQVNVLEtBQUssSUFBSTt3QkFDekI0QixVQUFVcEI7d0JBQ1ZZLFdBQVU7d0JBQ1ZTLFFBQVE7Ozs7OztrQ0FHViw4REFBQ1A7d0JBQ0NDLFNBQVE7d0JBQ1JILFdBQVU7OzBDQUVWLDhEQUFDVTswQ0FBSzs7Ozs7OzBDQUNOLDhEQUFDQTtnQ0FDQ1YsV0FBVTtnQ0FDVmhDLFNBQVNTOztvQ0FFUkYsa0NBQW9CLDhEQUFDVix1RkFBTUE7Ozs7a0VBQU0sOERBQUNELHVGQUFNQTs7Ozs7b0NBQUs7b0NBQzdDVyxvQkFBb0IsU0FBUzs7Ozs7Ozs7Ozs7OztrQ0FHbEMsOERBQUM2Qjt3QkFDQ0MsSUFBRzt3QkFDSEMsYUFBWTt3QkFDWkMsTUFBTWhDLG9CQUFvQixTQUFTO3dCQUNuQ2dCLE9BQU9yQixTQUFTWSxRQUFRLElBQUk7d0JBQzVCMEIsVUFBVXBCO3dCQUNWWSxXQUFVO3dCQUNWUyxRQUFROzs7Ozs7Ozs7Ozs7MEJBSVosOERBQUNSO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDckMsbURBQVVBO29CQUNUSyxTQUFTQTtvQkFDVDJDLE1BQU01QztvQkFDTjZDLGlCQUFpQjtvQkFDakJDLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBS3JCO0dBcEdNL0M7S0FBQUE7QUFzR04sK0RBQWVBLFFBQVFBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXV0aC9BdXRoRm9ybS5qc3g/OGU5MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aEJ1dHRvbiBmcm9tIFwiLi9BdXRoQnV0dG9uXCI7XHJcbmltcG9ydCB7IEJpSGlkZSwgQmlTaG93IH0gZnJvbSBcInJlYWN0LWljb25zL2JpXCI7XHJcbmNvbnN0IEF1dGhGb3JtID0gKHsgZm9ybVRpdGxlLCBvbkNsaWNrLCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW2Zvcm1EYXRhLCBzZXRGb3JtRGF0YV0gPSBSZWFjdC51c2VTdGF0ZSh7fSk7XHJcbiAgY29uc3QgW2Zvcm1FcnJvcnMsIHNldEZvcm1FcnJvcnNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG4gIGNvbnN0IFtpc1Bhc3N3b3JkVmlzaWJsZSwgc2V0SXNQYXNzd29yZFZpc2libGVdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IHRvZ2dsZVBhc3N3b3JkVmlzaWJpbGl0eSA9ICgpID0+IHtcclxuICAgIHNldElzUGFzc3dvcmRWaXNpYmxlKCFpc1Bhc3N3b3JkVmlzaWJsZSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtID0gKCkgPT4ge1xyXG4gICAgY29uc3QgbmV3Rm9ybUVycm9ycyA9IHt9O1xyXG4gICAgaWYgKCFmb3JtRGF0YS5lbWFpbCkge1xyXG4gICAgICBuZXdGb3JtRXJyb3JzLmVtYWlsID0gXCJFbWFpbCBpcyByZXF1aXJlZFwiO1xyXG4gICAgfSBlbHNlIGlmICghL1xcUytAXFxTK1xcLlxcUysvLnRlc3QoZm9ybURhdGEuZW1haWwpKSB7XHJcbiAgICAgIG5ld0Zvcm1FcnJvcnMuZW1haWwgPSBcIkVtYWlsIGlzIGludmFsaWRcIjtcclxuICAgIH1cclxuICAgIGlmICghZm9ybURhdGEucGFzc3dvcmQpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5wYXNzd29yZCA9IFwicGFzc3dvcmQgaXMgcmVxdWlyZWRcIjtcclxuICAgICAgXHJcbiAgICB9IGVsc2UgaWYgKGZvcm1EYXRhLnBhc3N3b3JkLmxlbmd0aCA8IDYpIHtcclxuICAgICAgbmV3Rm9ybUVycm9ycy5wYXNzd29yZCA9IFwicGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcclxuICAgIH1cclxuICAgIHNldEZvcm1FcnJvcnMobmV3Rm9ybUVycm9ycyk7XHJcbiAgICBtZXNzYWdlLmVycm9yKE9iamVjdC52YWx1ZXMobmV3Rm9ybUVycm9ycylbMF0pO1xyXG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKG5ld0Zvcm1FcnJvcnMpLmxlbmd0aCA9PT0gMDtcclxuICB9O1xyXG4gIGNvbnN0IGhhbmRsZUlucHV0Q2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNvbnN0IHsgbmFtZSwgdmFsdWUgfSA9IGUudGFyZ2V0O1xyXG4gICAgY29uc29sZS5sb2coZS50YXJnZXQpO1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXYpID0+ICh7IC4uLnByZXYsIFtuYW1lXTogdmFsdWUgfSkpO1xyXG4gICAgaWYgKGZvcm1FcnJvcnNbbmFtZV0pIHtcclxuICAgICAgc2V0Rm9ybUVycm9ycygocHJldikgPT4gKHsgLi4ucHJldiwgW25hbWVdOiBudWxsIH0pKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHZhbGlkYXRlRm9ybSgpKSB7XHJcbiAgICAgIG9uRmluaXNoKG9uU3VibWl0KTtcclxuICAgIH0gXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctWzgwJV0gaC1mdWxsXCJcclxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJmb250LWJvbGQgdGV4dC1ibGFjayB0ZXh0LTJ4bCAgdHJhY2tpbmctWzBdIGxlYWRpbmctW25vcm1hbF0gd2hpdGVzcGFjZS1ub3dyYXAgbWItNFwiPlxyXG4gICAgICAgIHtmb3JtVGl0bGV9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtc3RhcnQgZ2FwLTIgdy1mdWxsXCI+XHJcbiAgICAgICAgPGxhYmVsXHJcbiAgICAgICAgICBodG1sRm9yPVwiZW1haWxcIlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsICAgZm9udC1ub3JtYWwgdGV4dC1bIzY2NjY2Nl0gdGV4dC1iYXNlIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHAtMCBwbC0wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICBFbWFpbCBBZGRyZXNzXHJcbiAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGlkPVwiZW1haWxcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJlbWFpbEBleGFtcGxlLmNvbVwiXHJcbiAgICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgICAgdmFsdWU9e2Zvcm1EYXRhLmVtYWlsIHx8IFwiXCJ9XHJcbiAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlSW5wdXRDaGFuZ2V9XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgYm9yZGVyIGJvcmRlci1ncmF5LTMwMCByb3VuZGVkLWxnIHAtMyBmb2N1czpvdXRsaW5lLW5vbmUgZm9jdXM6cmluZy0yIGZvY3VzOnJpbmctYmx1ZS01MDBcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG5cclxuICAgICAgICA8bGFiZWxcclxuICAgICAgICAgIGh0bWxGb3I9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwganVzdGlmeS1iZXR3ZWVuIGl0ZW1zLWNlbnRlciBpbmxpbmUtZmxleCAgZm9udC1ub3JtYWwgdGV4dC1bIzY2NjY2Nl0gdGV4dC1iYXNlIHRyYWNraW5nLVswXSBsZWFkaW5nLVtub3JtYWxdIHAtMCBwbC0wXCJcclxuICAgICAgICA+XHJcbiAgICAgICAgICA8c3Bhbj5QYXNzd29yZDwvc3Bhbj5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIGdhcC0yIGN1cnNvci1wb2ludGVyIGhvdmVyOnRleHQtYmx1ZS01MDBcIlxyXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVQYXNzd29yZFZpc2liaWxpdHl9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIHtpc1Bhc3N3b3JkVmlzaWJsZSA/IDxCaVNob3cgLz4gOiA8QmlIaWRlIC8+fXtcIiBcIn1cclxuICAgICAgICAgICAge2lzUGFzc3dvcmRWaXNpYmxlID8gXCJTaG93XCIgOiBcIkhpZGVcIn1cclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgaWQ9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIioqKioqKioqXCJcclxuICAgICAgICAgIHR5cGU9e2lzUGFzc3dvcmRWaXNpYmxlID8gXCJ0ZXh0XCIgOiBcInBhc3N3b3JkXCJ9XHJcbiAgICAgICAgICB2YWx1ZT17Zm9ybURhdGEucGFzc3dvcmQgfHwgXCJcIn1cclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBib3JkZXIgYm9yZGVyLWdyYXktMzAwIHJvdW5kZWQtbGcgcC0zIGZvY3VzOm91dGxpbmUtbm9uZSBmb2N1czpyaW5nLTIgZm9jdXM6cmluZy1ibHVlLTUwMFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGxcIj5cclxuICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17b25DbGlja31cclxuICAgICAgICAgIHRleHQ9e2Zvcm1UaXRsZX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJiZy16aW5jLTMwMFwifVxyXG4gICAgICAgICAgdGV4dENvbG9yPXtcInRleHQtd2hpdGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJuYW1lcyI6WyJtZXNzYWdlIiwiUmVhY3QiLCJBdXRoQnV0dG9uIiwiQmlIaWRlIiwiQmlTaG93IiwiQXV0aEZvcm0iLCJmb3JtVGl0bGUiLCJvbkNsaWNrIiwib25TdWJtaXQiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwidXNlU3RhdGUiLCJmb3JtRXJyb3JzIiwic2V0Rm9ybUVycm9ycyIsImlzUGFzc3dvcmRWaXNpYmxlIiwic2V0SXNQYXNzd29yZFZpc2libGUiLCJ0b2dnbGVQYXNzd29yZFZpc2liaWxpdHkiLCJ2YWxpZGF0ZUZvcm0iLCJuZXdGb3JtRXJyb3JzIiwiZW1haWwiLCJ0ZXN0IiwicGFzc3dvcmQiLCJsZW5ndGgiLCJlcnJvciIsIk9iamVjdCIsInZhbHVlcyIsImtleXMiLCJoYW5kbGVJbnB1dENoYW5nZSIsImUiLCJuYW1lIiwidmFsdWUiLCJ0YXJnZXQiLCJjb25zb2xlIiwibG9nIiwicHJldiIsImhhbmRsZVN1Ym1pdCIsInByZXZlbnREZWZhdWx0Iiwib25GaW5pc2giLCJmb3JtIiwiY2xhc3NOYW1lIiwiZGl2IiwibGFiZWwiLCJodG1sRm9yIiwiaW5wdXQiLCJpZCIsInBsYWNlaG9sZGVyIiwidHlwZSIsIm9uQ2hhbmdlIiwicmVxdWlyZWQiLCJzcGFuIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});
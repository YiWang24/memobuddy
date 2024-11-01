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

/***/ "(app-pages-browser)/./src/components/auth/AuthForm.jsx":
/*!******************************************!*\
  !*** ./src/components/auth/AuthForm.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst AuthForm = (param)=>{\n    let { formTitle, onSubmit } = param;\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        password: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n    };\n    const handleButtonClick = (e)=>{\n        e.preventDefault();\n        const isFormValid = Object.values(formData).every((value)=>value.trim() !== \"\");\n        if (isFormValid) {\n            onSubmit(formData);\n        } else {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_3__[\"default\"].error(\"Please fill in all required fields correctly.\");\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        className: \"flex flex-col gap-4 items-center justify-center w-[80%] h-full\",\n        onSubmit: onSubmit,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"font-bold text-black text-2xl  tracking-[0] leading-[normal] whitespace-nowrap mb-4\",\n                children: formTitle\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"email\",\n                label: \"Email Address\",\n                type: \"email\",\n                placeholder: \"email@example.com\",\n                onValidInput: handleValidInput,\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthFormField, {\n                id: \"password\",\n                label: \"Password\",\n                type: \"password\",\n                placeholder: \"********\",\n                onValidInput: handleValidInput,\n                required: true\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_index__WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                    onClick: handleButtonClick,\n                    text: formTitle,\n                    backgroundColor: \"bg-zinc-300\",\n                    textColor: \"text-white\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                    lineNumber: 57,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n                lineNumber: 56,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\components\\\\auth\\\\AuthForm.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthForm, \"S/PMgPc7smM3/aThXBDA0mkgvj4=\");\n_c = AuthForm;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthForm);\nvar _c;\n$RefreshReg$(_c, \"AuthForm\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL2F1dGgvQXV0aEZvcm0uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQ3dDO0FBQ1k7QUFDckI7QUFFL0IsTUFBTUssV0FBVztRQUFDLEVBQUVDLFNBQVMsRUFBRUMsUUFBUSxFQUFFOztJQUN2QyxNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR1IsK0NBQVFBLENBQUM7UUFBRVMsT0FBTztRQUFJQyxVQUFVO0lBQUc7SUFFbkUsTUFBTUMsbUJBQW1CLENBQUNDLElBQUlDO1FBQzVCTCxZQUFZLENBQUNNO1lBQ1gsSUFBSUQsVUFBVSxNQUFNO2dCQUNsQixPQUFPO29CQUFFLEdBQUdDLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFO2dCQUFHO1lBQzdCLE9BQU87Z0JBQ0wsT0FBTztvQkFBRSxHQUFHRSxJQUFJO29CQUFFLENBQUNGLEdBQUcsRUFBRUM7Z0JBQU07WUFDaEM7UUFDRjtJQUNGO0lBRUEsTUFBTUUsb0JBQW9CLENBQUNDO1FBQ3pCQSxFQUFFQyxjQUFjO1FBQ2hCLE1BQU1DLGNBQWNDLE9BQU9DLE1BQU0sQ0FBQ2IsVUFBVWMsS0FBSyxDQUMvQyxDQUFDUixRQUFVQSxNQUFNUyxJQUFJLE9BQU87UUFFOUIsSUFBSUosYUFBYTtZQUNmWixTQUFTQztRQUNYLE9BQU87WUFDTEosMkVBQU9BLENBQUNvQixLQUFLLENBQUM7UUFDaEI7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFVO1FBQ1ZuQixVQUFVQTs7MEJBRVYsOERBQUNvQjtnQkFBSUQsV0FBVTswQkFDWnBCOzs7Ozs7MEJBRUgsOERBQUNILGlEQUFhQTtnQkFDWlUsSUFBRztnQkFDSGUsT0FBTTtnQkFDTkMsTUFBSztnQkFDTEMsYUFBWTtnQkFDWkMsY0FBY25CO2dCQUNkb0IsUUFBUTs7Ozs7OzBCQUVWLDhEQUFDN0IsaURBQWFBO2dCQUNaVSxJQUFHO2dCQUNIZSxPQUFNO2dCQUNOQyxNQUFLO2dCQUNMQyxhQUFZO2dCQUNaQyxjQUFjbkI7Z0JBQ2RvQixRQUFROzs7Ozs7MEJBR1YsOERBQUNMO2dCQUFJRCxXQUFVOzBCQUNiLDRFQUFDeEIsOENBQVVBO29CQUNUK0IsU0FBU2pCO29CQUNUa0IsTUFBTTVCO29CQUNONkIsaUJBQWlCO29CQUNqQkMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFLckI7R0E1RE0vQjtLQUFBQTtBQThETiwrREFBZUEsUUFBUUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9hdXRoL0F1dGhGb3JtLmpzeD84ZTkwIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aEJ1dHRvbiwgQXV0aEZvcm1GaWVsZCB9IGZyb20gXCIuL2luZGV4XCI7XHJcbmltcG9ydCB7IG1lc3NhZ2UgfSBmcm9tIFwiYW50ZFwiO1xyXG5cclxuY29uc3QgQXV0aEZvcm0gPSAoeyBmb3JtVGl0bGUsIG9uU3VibWl0IH0pID0+IHtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHsgZW1haWw6IFwiXCIsIHBhc3N3b3JkOiBcIlwiIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVWYWxpZElucHV0ID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXYpID0+IHtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2lkXTogXCJcIiB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtpZF06IHZhbHVlIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJ1dHRvbkNsaWNrID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlzRm9ybVZhbGlkID0gT2JqZWN0LnZhbHVlcyhmb3JtRGF0YSkuZXZlcnkoXHJcbiAgICAgICh2YWx1ZSkgPT4gdmFsdWUudHJpbSgpICE9PSBcIlwiXHJcbiAgICApO1xyXG4gICAgaWYgKGlzRm9ybVZhbGlkKSB7XHJcbiAgICAgIG9uU3VibWl0KGZvcm1EYXRhKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiBhbGwgcmVxdWlyZWQgZmllbGRzIGNvcnJlY3RseS5cIik7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxmb3JtXHJcbiAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTQgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIHctWzgwJV0gaC1mdWxsXCJcclxuICAgICAgb25TdWJtaXQ9e29uU3VibWl0fVxyXG4gICAgPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZvbnQtYm9sZCB0ZXh0LWJsYWNrIHRleHQtMnhsICB0cmFja2luZy1bMF0gbGVhZGluZy1bbm9ybWFsXSB3aGl0ZXNwYWNlLW5vd3JhcCBtYi00XCI+XHJcbiAgICAgICAge2Zvcm1UaXRsZX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxBdXRoRm9ybUZpZWxkXHJcbiAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgbGFiZWw9XCJFbWFpbCBBZGRyZXNzXCJcclxuICAgICAgICB0eXBlPVwiZW1haWxcIlxyXG4gICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxAZXhhbXBsZS5jb21cIlxyXG4gICAgICAgIG9uVmFsaWRJbnB1dD17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICByZXF1aXJlZFxyXG4gICAgICAvPlxyXG4gICAgICA8QXV0aEZvcm1GaWVsZFxyXG4gICAgICAgIGlkPVwicGFzc3dvcmRcIlxyXG4gICAgICAgIGxhYmVsPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgcGxhY2Vob2xkZXI9XCIqKioqKioqKlwiXHJcbiAgICAgICAgb25WYWxpZElucHV0PXtoYW5kbGVWYWxpZElucHV0fVxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgIC8+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbFwiPlxyXG4gICAgICAgIDxBdXRoQnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCdXR0b25DbGlja31cclxuICAgICAgICAgIHRleHQ9e2Zvcm1UaXRsZX1cclxuICAgICAgICAgIGJhY2tncm91bmRDb2xvcj17XCJiZy16aW5jLTMwMFwifVxyXG4gICAgICAgICAgdGV4dENvbG9yPXtcInRleHQtd2hpdGVcIn1cclxuICAgICAgICAvPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXV0aEZvcm07XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiQXV0aEJ1dHRvbiIsIkF1dGhGb3JtRmllbGQiLCJtZXNzYWdlIiwiQXV0aEZvcm0iLCJmb3JtVGl0bGUiLCJvblN1Ym1pdCIsImZvcm1EYXRhIiwic2V0Rm9ybURhdGEiLCJlbWFpbCIsInBhc3N3b3JkIiwiaGFuZGxlVmFsaWRJbnB1dCIsImlkIiwidmFsdWUiLCJwcmV2IiwiaGFuZGxlQnV0dG9uQ2xpY2siLCJlIiwicHJldmVudERlZmF1bHQiLCJpc0Zvcm1WYWxpZCIsIk9iamVjdCIsInZhbHVlcyIsImV2ZXJ5IiwidHJpbSIsImVycm9yIiwiZm9ybSIsImNsYXNzTmFtZSIsImRpdiIsImxhYmVsIiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25WYWxpZElucHV0IiwicmVxdWlyZWQiLCJvbkNsaWNrIiwidGV4dCIsImJhY2tncm91bmRDb2xvciIsInRleHRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/auth/AuthForm.jsx\n"));

/***/ })

});
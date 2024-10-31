"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/login/page",{

/***/ "(app-pages-browser)/./src/app/(auth)/login/page.jsx":
/*!***************************************!*\
  !*** ./src/app/(auth)/login/page.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_auth___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/auth/ */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants */ \"(app-pages-browser)/./src/constants/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _lib_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/features/auth/authSlice */ \"(app-pages-browser)/./src/lib/features/auth/authSlice.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch)();\n    const handleGoogleLoginClick = async ()=>{\n        const data = await _api__WEBPACK_IMPORTED_MODULE_4__.weatherApi.getWeather(37.7749, -122.4194);\n        console.log(data);\n    };\n    const handleSubmit = async (values)=>{\n        const result = await dispatch((0,_lib_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__.fetchLogin)(values));\n        if (result) {\n            router.push(\"/diary\");\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].success(\"Login successful\");\n            const user = (0,react_redux__WEBPACK_IMPORTED_MODULE_6__.useSelector)((state)=>state.auth.user);\n            console.log(user);\n        } else {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_7__[\"default\"].error(\"Login failed\");\n        }\n    };\n    const handleSignUpClick = ()=>{\n        router.push(\"/register\");\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-full  h-screen flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[20%] flex flex-col items-center justify-end gap-4 relative mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 35,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-fit font-bold text-[40px] text-center tracking-[0] leading-normal whitespace-nowrap \",\n                        children: \"Log in\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[60%] w-[60%] flex  flex-row  gap-8 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[50%]  flex justify-center items-center  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth___WEBPACK_IMPORTED_MODULE_1__.AuthForm, {\n                            formTitle: \"Log in\",\n                            onSubmit: handleSubmit\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                            lineNumber: 45,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth___WEBPACK_IMPORTED_MODULE_1__.Divider, {}, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[50%]  flex items-center justify-center \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[80%] flex flex-col items-center justify-center gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth___WEBPACK_IMPORTED_MODULE_1__.AuthButton, {\n                                    imgURL: _constants__WEBPACK_IMPORTED_MODULE_2__.SOCIAL_MEDIA[0].src,\n                                    alt: _constants__WEBPACK_IMPORTED_MODULE_2__.SOCIAL_MEDIA[0].alt,\n                                    onClick: handleGoogleLoginClick,\n                                    text: \"Continue with Google\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                                    lineNumber: 52,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth___WEBPACK_IMPORTED_MODULE_1__.AuthButton, {\n                                    imgURL: _constants__WEBPACK_IMPORTED_MODULE_2__.SOCIAL_MEDIA[1].src,\n                                    alt: _constants__WEBPACK_IMPORTED_MODULE_2__.SOCIAL_MEDIA[1].alt,\n                                    onClick: handleSignUpClick,\n                                    text: \"Sign Up with email\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                                    lineNumber: 58,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                            lineNumber: 51,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[20%]  text-center justify-start gap-6  w-fit  font-medium text-[#111111] text-base tracking-[0]  whitespace-nowrap underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/forgot-password\",\n                    children: \"Forgot password?\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                    lineNumber: 68,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                lineNumber: 67,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"zXnflAqd4rnyBpogtdAc6I4Vk2A=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_6__.useDispatch\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2xvZ2luL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQzBFO0FBQ3hCO0FBQ047QUFDVDtBQUNvQjtBQUN4QjtBQUM0QjtBQUM1QyxTQUFTVTs7SUFDdEIsTUFBTUMsU0FBU1AsMERBQVNBO0lBQ3hCLE1BQU1RLFdBQVdOLHdEQUFXQTtJQUM1QixNQUFNTyx5QkFBeUI7UUFDN0IsTUFBTUMsT0FBTyxNQUFNVCw0Q0FBVUEsQ0FBQ1UsVUFBVSxDQUFDLFNBQVMsQ0FBQztRQUNuREMsUUFBUUMsR0FBRyxDQUFDSDtJQUNkO0lBRUEsTUFBTUksZUFBZSxPQUFPQztRQUMxQixNQUFNQyxTQUFTLE1BQU1SLFNBQVNILHdFQUFVQSxDQUFDVTtRQUN6QyxJQUFJQyxRQUFRO1lBQ1ZULE9BQU9VLElBQUksQ0FBQztZQUNaYiwyRUFBT0EsQ0FBQ2MsT0FBTyxDQUFDO1lBQ2hCLE1BQU1DLE9BQU9oQix3REFBV0EsQ0FBQyxDQUFDaUIsUUFBVUEsTUFBTUMsSUFBSSxDQUFDRixJQUFJO1lBQ25EUCxRQUFRQyxHQUFHLENBQUNNO1FBQ2QsT0FBTztZQUNMZiwyRUFBT0EsQ0FBQ2tCLEtBQUssQ0FBQztRQUNoQjtJQUNGO0lBQ0EsTUFBTUMsb0JBQW9CO1FBQ3hCaEIsT0FBT1UsSUFBSSxDQUFDO0lBQ2Q7SUFDQSxxQkFDRSw4REFBQ087UUFBSUMsV0FBVTs7MEJBRWIsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FDYiw4REFBQ0Q7d0JBQUlDLFdBQVU7Ozs7OztrQ0FDZiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQWtHOzs7Ozs7Ozs7Ozs7MEJBTW5ILDhEQUFDRDtnQkFBSUMsV0FBVTs7a0NBRWIsOERBQUNEO3dCQUFJQyxXQUFVO2tDQUNiLDRFQUFDM0IsdURBQVFBOzRCQUFDNEIsV0FBVTs0QkFBU0MsVUFBVWI7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ2xCLHNEQUFPQTs7Ozs7a0NBRVIsOERBQUM0Qjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDNUIseURBQVVBO29DQUNUK0IsUUFBUTdCLG9EQUFZLENBQUMsRUFBRSxDQUFDOEIsR0FBRztvQ0FDM0JDLEtBQUsvQixvREFBWSxDQUFDLEVBQUUsQ0FBQytCLEdBQUc7b0NBQ3hCQyxTQUFTdEI7b0NBQ1R1QixNQUFLOzs7Ozs7OENBRVAsOERBQUNuQyx5REFBVUE7b0NBQ1QrQixRQUFRN0Isb0RBQVksQ0FBQyxFQUFFLENBQUM4QixHQUFHO29DQUMzQkMsS0FBSy9CLG9EQUFZLENBQUMsRUFBRSxDQUFDK0IsR0FBRztvQ0FDeEJDLFNBQVNSO29DQUNUUyxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLYiw4REFBQ1I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNRO29CQUFFQyxNQUFLOzhCQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJbkM7R0EvRHdCNUI7O1FBQ1BOLHNEQUFTQTtRQUNQRSxvREFBV0E7OztLQUZOSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhdXRoKS9sb2dpbi9wYWdlLmpzeD82NGE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyBEaXZpZGVyLCBBdXRoQnV0dG9uLCBBdXRoRm9ybSB9IGZyb20gXCIuLi8uLi8uLi9jb21wb25lbnRzL2F1dGgvXCI7XHJcbmltcG9ydCB7IFNPQ0lBTF9NRURJQSB9IGZyb20gXCIuLi8uLi8uLi9jb25zdGFudHNcIjtcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvbmF2aWdhdGlvblwiO1xyXG5pbXBvcnQgeyB3ZWF0aGVyQXBpIH0gZnJvbSBcIkAvYXBpXCI7XHJcbmltcG9ydCB7IHVzZURpc3BhdGNoLCB1c2VTZWxlY3RvciB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xyXG5pbXBvcnQgeyBtZXNzYWdlIH0gZnJvbSBcImFudGRcIjtcclxuaW1wb3J0IHsgZmV0Y2hMb2dpbiB9IGZyb20gXCJAL2xpYi9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZVwiO1xyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKCk7XHJcbiAgY29uc3QgaGFuZGxlR29vZ2xlTG9naW5DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyQXBpLmdldFdlYXRoZXIoMzcuNzc0OSwgLTEyMi40MTk0KTtcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVN1Ym1pdCA9IGFzeW5jICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGRpc3BhdGNoKGZldGNoTG9naW4odmFsdWVzKSk7XHJcbiAgICBpZiAocmVzdWx0KSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKFwiL2RpYXJ5XCIpO1xyXG4gICAgICBtZXNzYWdlLnN1Y2Nlc3MoXCJMb2dpbiBzdWNjZXNzZnVsXCIpO1xyXG4gICAgICBjb25zdCB1c2VyID0gdXNlU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoLnVzZXIpO1xyXG4gICAgICBjb25zb2xlLmxvZyh1c2VyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJMb2dpbiBmYWlsZWRcIik7XHJcbiAgICB9XHJcbiAgfTtcclxuICBjb25zdCBoYW5kbGVTaWduVXBDbGljayA9ICgpID0+IHtcclxuICAgIHJvdXRlci5wdXNoKFwiL3JlZ2lzdGVyXCIpO1xyXG4gIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiIHctZnVsbCAgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgey8qIHRpdGxlICovfVxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzIwJV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1lbmQgZ2FwLTQgcmVsYXRpdmUgbXQtNFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicmVsYXRpdmUgdy0xMiBoLTEyIHJvdW5kZWQtZnVsbCBiZy16aW5jLTQwMCBcIj48L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctZml0IGZvbnQtYm9sZCB0ZXh0LVs0MHB4XSB0ZXh0LWNlbnRlciB0cmFja2luZy1bMF0gbGVhZGluZy1ub3JtYWwgd2hpdGVzcGFjZS1ub3dyYXAgXCI+XHJcbiAgICAgICAgICBMb2cgaW5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICB7LyogTG9naW4gbWFpbiB0YWJsZSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVs2MCVdIHctWzYwJV0gZmxleCAgZmxleC1yb3cgIGdhcC04IG10LTRcIj5cclxuICAgICAgICB7LyogbG9naW4gZm9ybSAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzUwJV0gIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyICBcIj5cclxuICAgICAgICAgIDxBdXRoRm9ybSBmb3JtVGl0bGU9XCJMb2cgaW5cIiBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiBPUiAqL31cclxuICAgICAgICA8RGl2aWRlciAvPlxyXG4gICAgICAgIHsvKiBsb2dpbiBidXR0b24gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs1MCVdICBmbGV4IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bODAlXSBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtNFwiPlxyXG4gICAgICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgICAgIGltZ1VSTD17U09DSUFMX01FRElBWzBdLnNyY31cclxuICAgICAgICAgICAgICBhbHQ9e1NPQ0lBTF9NRURJQVswXS5hbHR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlR29vZ2xlTG9naW5DbGlja31cclxuICAgICAgICAgICAgICB0ZXh0PVwiQ29udGludWUgd2l0aCBHb29nbGVcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8QXV0aEJ1dHRvblxyXG4gICAgICAgICAgICAgIGltZ1VSTD17U09DSUFMX01FRElBWzFdLnNyY31cclxuICAgICAgICAgICAgICBhbHQ9e1NPQ0lBTF9NRURJQVsxXS5hbHR9XHJcbiAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlU2lnblVwQ2xpY2t9XHJcbiAgICAgICAgICAgICAgdGV4dD1cIlNpZ24gVXAgd2l0aCBlbWFpbFwiXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bMjAlXSAgdGV4dC1jZW50ZXIganVzdGlmeS1zdGFydCBnYXAtNiAgdy1maXQgIGZvbnQtbWVkaXVtIHRleHQtWyMxMTExMTFdIHRleHQtYmFzZSB0cmFja2luZy1bMF0gIHdoaXRlc3BhY2Utbm93cmFwIHVuZGVybGluZVwiPlxyXG4gICAgICAgIDxhIGhyZWY9XCIvZm9yZ290LXBhc3N3b3JkXCI+Rm9yZ290IHBhc3N3b3JkPzwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJEaXZpZGVyIiwiQXV0aEJ1dHRvbiIsIkF1dGhGb3JtIiwiU09DSUFMX01FRElBIiwidXNlUm91dGVyIiwid2VhdGhlckFwaSIsInVzZURpc3BhdGNoIiwidXNlU2VsZWN0b3IiLCJtZXNzYWdlIiwiZmV0Y2hMb2dpbiIsIkxvZ2luIiwicm91dGVyIiwiZGlzcGF0Y2giLCJoYW5kbGVHb29nbGVMb2dpbkNsaWNrIiwiZGF0YSIsImdldFdlYXRoZXIiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlU3VibWl0IiwidmFsdWVzIiwicmVzdWx0IiwicHVzaCIsInN1Y2Nlc3MiLCJ1c2VyIiwic3RhdGUiLCJhdXRoIiwiZXJyb3IiLCJoYW5kbGVTaWduVXBDbGljayIsImRpdiIsImNsYXNzTmFtZSIsImZvcm1UaXRsZSIsIm9uU3VibWl0IiwiaW1nVVJMIiwic3JjIiwiYWx0Iiwib25DbGljayIsInRleHQiLCJhIiwiaHJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/login/page.jsx\n"));

/***/ })

});
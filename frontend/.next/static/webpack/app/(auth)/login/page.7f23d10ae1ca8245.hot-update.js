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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../components/auth/ */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ \"(app-pages-browser)/./src/constants/index.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/dist/api/navigation.js\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ \"(app-pages-browser)/./node_modules/react-redux/dist/react-redux.mjs\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* harmony import */ var _lib_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/lib/features/auth/authSlice */ \"(app-pages-browser)/./src/lib/features/auth/authSlice.js\");\n/* harmony import */ var _assets_icons__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/assets/icons */ \"(app-pages-browser)/./src/assets/icons/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nfunction Login() {\n    _s();\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();\n    const location = window.location.search;\n    const handleGoogleLoginClick = async ()=>{\n        window.location.href = \"http://localhost:8888/api/auth/google\";\n    };\n    const handleSubmit = async (values)=>{\n        try {\n            await dispatch((0,_lib_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_5__.fetchLogin)(values));\n            router.push(\"/diary\");\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"].success(\"Login successful\");\n        } catch (error) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_8__[\"default\"].error(\"Login failed\");\n        }\n    };\n    const fetchCurrentUser = async (params)=>{\n        try {\n            const response = await fetch(\"http://localhost:8888/api/auth/currentuser?\".concat(params));\n        } catch (error) {}\n    };\n    const handleSignUpClick = ()=>{\n        router.push(\"/register\");\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const params = new URLSearchParams(location);\n        console.log(params.state);\n    }, [\n        location\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" w-full  h-screen flex flex-col items-center justify-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[20%] flex flex-col items-center justify-end gap-4 relative mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-12 h-12 rounded-full bg-zinc-400 \"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative w-fit font-bold text-[40px] text-center tracking-[0] leading-normal whitespace-nowrap \",\n                        children: \"Log in\"\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[60%] w-[60%] flex  flex-row  gap-8 mt-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[50%]  flex justify-center items-center  \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth___WEBPACK_IMPORTED_MODULE_2__.AuthForm, {\n                            formTitle: \"Log in\",\n                            onSubmit: handleSubmit\n                        }, void 0, false, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth___WEBPACK_IMPORTED_MODULE_2__.Divider, {}, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-[50%]  flex items-center justify-center \",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"w-[80%] flex flex-col items-center justify-center gap-4\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth___WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                                    imgURL: _constants__WEBPACK_IMPORTED_MODULE_3__.SOCIAL_MEDIA[0].src,\n                                    alt: _constants__WEBPACK_IMPORTED_MODULE_3__.SOCIAL_MEDIA[0].alt,\n                                    onClick: handleGoogleLoginClick,\n                                    text: \"Continue with Google\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                                    lineNumber: 65,\n                                    columnNumber: 13\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth___WEBPACK_IMPORTED_MODULE_2__.AuthButton, {\n                                    imgURL: _constants__WEBPACK_IMPORTED_MODULE_3__.SOCIAL_MEDIA[1].src,\n                                    alt: _constants__WEBPACK_IMPORTED_MODULE_3__.SOCIAL_MEDIA[1].alt,\n                                    onClick: handleSignUpClick,\n                                    text: \"Sign Up with email\"\n                                }, void 0, false, {\n                                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                                    lineNumber: 71,\n                                    columnNumber: 13\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                            lineNumber: 64,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                        lineNumber: 63,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"h-[20%]  text-center justify-start gap-6  w-fit  font-medium text-[#111111] text-base tracking-[0]  whitespace-nowrap underline\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                    href: \"/forgot-password\",\n                    children: \"Forgot password?\"\n                }, void 0, false, {\n                    fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                    lineNumber: 81,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\login\\\\page.jsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"bjZflwr9yuHJ0eAg20MSTkw3ecc=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2xvZ2luL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDa0M7QUFDd0M7QUFDeEI7QUFDTjtBQUNGO0FBQ1g7QUFDNEI7QUFDbkI7QUFDekIsU0FBU1U7O0lBQ3RCLE1BQU1DLFNBQVNOLDBEQUFTQTtJQUN4QixNQUFNTyxXQUFXTix3REFBV0E7SUFDNUIsTUFBTU8sV0FBV0MsT0FBT0QsUUFBUSxDQUFDRSxNQUFNO0lBQ3ZDLE1BQU1DLHlCQUF5QjtRQUM3QkYsT0FBT0QsUUFBUSxDQUFDSSxJQUFJLEdBQUc7SUFDekI7SUFFQSxNQUFNQyxlQUFlLE9BQU9DO1FBQzFCLElBQUk7WUFDRixNQUFNUCxTQUFTSix3RUFBVUEsQ0FBQ1c7WUFDMUJSLE9BQU9TLElBQUksQ0FBQztZQUNaYiwyRUFBT0EsQ0FBQ2MsT0FBTyxDQUFDO1FBQ2xCLEVBQUUsT0FBT0MsT0FBTztZQUNkZiwyRUFBT0EsQ0FBQ2UsS0FBSyxDQUFDO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNQyxtQkFBbUIsT0FBT0M7UUFDOUIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTUMsTUFDckIsOENBQXFELE9BQVBGO1FBRWxELEVBQUUsT0FBT0YsT0FBTyxDQUFDO0lBQ25CO0lBRUEsTUFBTUssb0JBQW9CO1FBQ3hCaEIsT0FBT1MsSUFBSSxDQUFDO0lBQ2Q7SUFFQXBCLGdEQUFTQSxDQUFDO1FBQ1IsTUFBTXdCLFNBQVMsSUFBSUksZ0JBQWdCZjtRQUNuQ2dCLFFBQVFDLEdBQUcsQ0FBQ04sT0FBT08sS0FBSztJQUMxQixHQUFHO1FBQUNsQjtLQUFTO0lBQ2IscUJBQ0UsOERBQUNtQjtRQUFJQyxXQUFVOzswQkFFYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7O2tDQUNiLDhEQUFDRDt3QkFBSUMsV0FBVTs7Ozs7O2tDQUNmLDhEQUFDRDt3QkFBSUMsV0FBVTtrQ0FBa0c7Ozs7Ozs7Ozs7OzswQkFNbkgsOERBQUNEO2dCQUFJQyxXQUFVOztrQ0FFYiw4REFBQ0Q7d0JBQUlDLFdBQVU7a0NBQ2IsNEVBQUM5Qix1REFBUUE7NEJBQUMrQixXQUFVOzRCQUFTQyxVQUFVakI7Ozs7Ozs7Ozs7O2tDQUd6Qyw4REFBQ2pCLHNEQUFPQTs7Ozs7a0NBRVIsOERBQUMrQjt3QkFBSUMsV0FBVTtrQ0FDYiw0RUFBQ0Q7NEJBQUlDLFdBQVU7OzhDQUNiLDhEQUFDL0IseURBQVVBO29DQUNUa0MsUUFBUWhDLG9EQUFZLENBQUMsRUFBRSxDQUFDaUMsR0FBRztvQ0FDM0JDLEtBQUtsQyxvREFBWSxDQUFDLEVBQUUsQ0FBQ2tDLEdBQUc7b0NBQ3hCQyxTQUFTdkI7b0NBQ1R3QixNQUFLOzs7Ozs7OENBRVAsOERBQUN0Qyx5REFBVUE7b0NBQ1RrQyxRQUFRaEMsb0RBQVksQ0FBQyxFQUFFLENBQUNpQyxHQUFHO29DQUMzQkMsS0FBS2xDLG9EQUFZLENBQUMsRUFBRSxDQUFDa0MsR0FBRztvQ0FDeEJDLFNBQVNaO29DQUNUYSxNQUFLOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzswQkFLYiw4REFBQ1I7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNRO29CQUFFeEIsTUFBSzs4QkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSW5DO0dBM0V3QlA7O1FBQ1BMLHNEQUFTQTtRQUNQQyxvREFBV0E7OztLQUZOSSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhdXRoKS9sb2dpbi9wYWdlLmpzeD82NGE3Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgRGl2aWRlciwgQXV0aEJ1dHRvbiwgQXV0aEZvcm0gfSBmcm9tIFwiLi4vLi4vLi4vY29tcG9uZW50cy9hdXRoL1wiO1xyXG5pbXBvcnQgeyBTT0NJQUxfTUVESUEgfSBmcm9tIFwiLi4vLi4vLi4vY29uc3RhbnRzXCI7XHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcclxuaW1wb3J0IHsgdXNlRGlzcGF0Y2ggfSBmcm9tIFwicmVhY3QtcmVkdXhcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcbmltcG9ydCB7IGZldGNoTG9naW4gfSBmcm9tIFwiQC9saWIvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHsgZ29vZ2xlIH0gZnJvbSBcIkAvYXNzZXRzL2ljb25zXCI7XHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xyXG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcclxuICBjb25zdCBsb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5zZWFyY2g7XHJcbiAgY29uc3QgaGFuZGxlR29vZ2xlTG9naW5DbGljayA9IGFzeW5jICgpID0+IHtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gXCJodHRwOi8vbG9jYWxob3N0Ojg4ODgvYXBpL2F1dGgvZ29vZ2xlXCI7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU3VibWl0ID0gYXN5bmMgKHZhbHVlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgZGlzcGF0Y2goZmV0Y2hMb2dpbih2YWx1ZXMpKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvZGlhcnlcIik7XHJcbiAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkxvZ2luIHN1Y2Nlc3NmdWxcIik7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiTG9naW4gZmFpbGVkXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoQ3VycmVudFVzZXIgPSBhc3luYyAocGFyYW1zKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vbG9jYWxob3N0Ojg4ODgvYXBpL2F1dGgvY3VycmVudHVzZXI/JHtwYXJhbXN9YFxyXG4gICAgICApO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHt9XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlU2lnblVwQ2xpY2sgPSAoKSA9PiB7XHJcbiAgICByb3V0ZXIucHVzaChcIi9yZWdpc3RlclwiKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyhsb2NhdGlvbik7XHJcbiAgICBjb25zb2xlLmxvZyhwYXJhbXMuc3RhdGUpO1xyXG4gIH0sIFtsb2NhdGlvbl0pO1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIiB3LWZ1bGwgIGgtc2NyZWVuIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyXCI+XHJcbiAgICAgIHsvKiB0aXRsZSAqL31cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJoLVsyMCVdIGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGp1c3RpZnktZW5kIGdhcC00IHJlbGF0aXZlIG10LTRcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIHctMTIgaC0xMiByb3VuZGVkLWZ1bGwgYmctemluYy00MDAgXCI+PC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZpdCBmb250LWJvbGQgdGV4dC1bNDBweF0gdGV4dC1jZW50ZXIgdHJhY2tpbmctWzBdIGxlYWRpbmctbm9ybWFsIHdoaXRlc3BhY2Utbm93cmFwIFwiPlxyXG4gICAgICAgICAgTG9nIGluXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgey8qIExvZ2luIG1haW4gdGFibGUgKi99XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaC1bNjAlXSB3LVs2MCVdIGZsZXggIGZsZXgtcm93ICBnYXAtOCBtdC00XCI+XHJcbiAgICAgICAgey8qIGxvZ2luIGZvcm0gKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LVs1MCVdICBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlciAgXCI+XHJcbiAgICAgICAgICA8QXV0aEZvcm0gZm9ybVRpdGxlPVwiTG9nIGluXCIgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7LyogT1IgKi99XHJcbiAgICAgICAgPERpdmlkZXIgLz5cclxuICAgICAgICB7LyogbG9naW4gYnV0dG9uICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1bNTAlXSAgZmxleCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInctWzgwJV0gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTRcIj5cclxuICAgICAgICAgICAgPEF1dGhCdXR0b25cclxuICAgICAgICAgICAgICBpbWdVUkw9e1NPQ0lBTF9NRURJQVswXS5zcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtTT0NJQUxfTUVESUFbMF0uYWx0fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUdvb2dsZUxvZ2luQ2xpY2t9XHJcbiAgICAgICAgICAgICAgdGV4dD1cIkNvbnRpbnVlIHdpdGggR29vZ2xlXCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEF1dGhCdXR0b25cclxuICAgICAgICAgICAgICBpbWdVUkw9e1NPQ0lBTF9NRURJQVsxXS5zcmN9XHJcbiAgICAgICAgICAgICAgYWx0PXtTT0NJQUxfTUVESUFbMV0uYWx0fVxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVNpZ25VcENsaWNrfVxyXG4gICAgICAgICAgICAgIHRleHQ9XCJTaWduIFVwIHdpdGggZW1haWxcIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImgtWzIwJV0gIHRleHQtY2VudGVyIGp1c3RpZnktc3RhcnQgZ2FwLTYgIHctZml0ICBmb250LW1lZGl1bSB0ZXh0LVsjMTExMTExXSB0ZXh0LWJhc2UgdHJhY2tpbmctWzBdICB3aGl0ZXNwYWNlLW5vd3JhcCB1bmRlcmxpbmVcIj5cclxuICAgICAgICA8YSBocmVmPVwiL2ZvcmdvdC1wYXNzd29yZFwiPkZvcmdvdCBwYXNzd29yZD88L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwiRGl2aWRlciIsIkF1dGhCdXR0b24iLCJBdXRoRm9ybSIsIlNPQ0lBTF9NRURJQSIsInVzZVJvdXRlciIsInVzZURpc3BhdGNoIiwibWVzc2FnZSIsImZldGNoTG9naW4iLCJnb29nbGUiLCJMb2dpbiIsInJvdXRlciIsImRpc3BhdGNoIiwibG9jYXRpb24iLCJ3aW5kb3ciLCJzZWFyY2giLCJoYW5kbGVHb29nbGVMb2dpbkNsaWNrIiwiaHJlZiIsImhhbmRsZVN1Ym1pdCIsInZhbHVlcyIsInB1c2giLCJzdWNjZXNzIiwiZXJyb3IiLCJmZXRjaEN1cnJlbnRVc2VyIiwicGFyYW1zIiwicmVzcG9uc2UiLCJmZXRjaCIsImhhbmRsZVNpZ25VcENsaWNrIiwiVVJMU2VhcmNoUGFyYW1zIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybVRpdGxlIiwib25TdWJtaXQiLCJpbWdVUkwiLCJzcmMiLCJhbHQiLCJvbkNsaWNrIiwidGV4dCIsImEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/login/page.jsx\n"));

/***/ })

});
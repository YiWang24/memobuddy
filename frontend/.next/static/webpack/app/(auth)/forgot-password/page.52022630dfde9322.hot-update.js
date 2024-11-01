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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ page; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/auth */ \"(app-pages-browser)/./src/components/auth/index.js\");\n/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/api */ \"(app-pages-browser)/./src/api/index.js\");\n/* harmony import */ var _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! __barrel_optimize__?names=message!=!antd */ \"(app-pages-browser)/./node_modules/antd/es/message/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const [stage, setStage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"email\");\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        code: \"\",\n        password: \"\",\n        confirmPassword: \"\"\n    });\n    const handleValidInput = (id, value)=>{\n        setFormData((prev)=>{\n            if (value === null) {\n                return {\n                    ...prev,\n                    [id]: \"\"\n                };\n            } else {\n                return {\n                    ...prev,\n                    [id]: value\n                };\n            }\n        });\n    };\n    const validateFormData = ()=>{\n        if (stage === \"email\" && !formData.email) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in a valid email address\");\n            return false;\n        }\n        if (stage === \"code\" && !formData.code) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in the correct code\");\n            return false;\n        }\n        if (stage === \"password\") {\n            if (!formData.password || !formData.confirmPassword) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Please fill in the password fields\");\n                return false;\n            }\n            if (formData.password !== formData.confirmPassword) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Passwords do not match\");\n                return false;\n            }\n        }\n        return true;\n    };\n    const handleEmailSubmit = async ()=>{\n        try {\n            await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.requestPasswordReset(formData.email);\n            setStage(\"code\");\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Password reset email sent\");\n        } catch (error) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Error sending reset email\");\n        }\n    };\n    const handleCodeSubmit = async ()=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.verifyPasswordReset({\n                resetCode: formData.code,\n                email: formData.email\n            });\n            if (response.status === 200) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Code verified successfully\");\n                setStage(\"password\");\n            } else {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Code verification failed\");\n            }\n        } catch (error) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Code verification error\");\n        }\n    };\n    const handlePasswordSubmit = async ()=>{\n        try {\n            const response = await _api__WEBPACK_IMPORTED_MODULE_3__.authApi.resetPassword({\n                email: formData.email,\n                resetCode: formData.code,\n                password: formData.password\n            });\n            if (response.status === 200) {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].success(\"Password reset successful\");\n                setStage(\"success\");\n            } else {\n                _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Password reset failed\");\n            }\n        } catch (error) {\n            _barrel_optimize_names_message_antd__WEBPACK_IMPORTED_MODULE_4__[\"default\"].error(\"Error resetting password\");\n        }\n    };\n    const handleSubmit = async ()=>{\n        if (!validateFormData()) return;\n        switch(stage){\n            case \"email\":\n                await handleEmailSubmit();\n                break;\n            case \"code\":\n                await handleCodeSubmit();\n                break;\n            case \"password\":\n                await handlePasswordSubmit();\n                break;\n            default:\n                break;\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full h-screen flex flex-col items-center justify-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_auth__WEBPACK_IMPORTED_MODULE_2__.AuthResetPasswordCard, {\n            stage: stage,\n            email: formData.email,\n            onInputChange: handleValidInput,\n            onSubmit: handleSubmit\n        }, void 0, false, {\n            fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n            lineNumber: 111,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"E:\\\\W1work\\\\YorkUniversity\\\\EECS1012\\\\1.Project\\\\MemoBuddy\\\\frontend\\\\src\\\\app\\\\(auth)\\\\forgot-password\\\\page.jsx\",\n        lineNumber: 110,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"Fb2tuFFjmh879+N0Wti1sC+CWpo=\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpL2ZvcmdvdC1wYXNzd29yZC9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFDbUQ7QUFDTztBQUMxQjtBQUNEO0FBRWhCLFNBQVNNOztJQUN0QixNQUFNLENBQUNDLE9BQU9DLFNBQVMsR0FBR1AsK0NBQVFBLENBQUM7SUFDbkMsTUFBTSxDQUFDUSxVQUFVQyxZQUFZLEdBQUdULCtDQUFRQSxDQUFDO1FBQ3ZDVSxPQUFPO1FBQ1BDLE1BQU07UUFDTkMsVUFBVTtRQUNWQyxpQkFBaUI7SUFDbkI7SUFFQSxNQUFNQyxtQkFBbUIsQ0FBQ0MsSUFBSUM7UUFDNUJQLFlBQVksQ0FBQ1E7WUFDWCxJQUFJRCxVQUFVLE1BQU07Z0JBQ2xCLE9BQU87b0JBQUUsR0FBR0MsSUFBSTtvQkFBRSxDQUFDRixHQUFHLEVBQUU7Z0JBQUc7WUFDN0IsT0FBTztnQkFDTCxPQUFPO29CQUFFLEdBQUdFLElBQUk7b0JBQUUsQ0FBQ0YsR0FBRyxFQUFFQztnQkFBTTtZQUNoQztRQUNGO0lBQ0Y7SUFDQSxNQUFNRSxtQkFBbUI7UUFDdkIsSUFBSVosVUFBVSxXQUFXLENBQUNFLFNBQVNFLEtBQUssRUFBRTtZQUN4Q04sMkVBQU9BLENBQUNlLEtBQUssQ0FBQztZQUNkLE9BQU87UUFDVDtRQUNBLElBQUliLFVBQVUsVUFBVSxDQUFDRSxTQUFTRyxJQUFJLEVBQUU7WUFDdENQLDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7WUFDZCxPQUFPO1FBQ1Q7UUFDQSxJQUFJYixVQUFVLFlBQVk7WUFDeEIsSUFBSSxDQUFDRSxTQUFTSSxRQUFRLElBQUksQ0FBQ0osU0FBU0ssZUFBZSxFQUFFO2dCQUNuRFQsMkVBQU9BLENBQUNlLEtBQUssQ0FBQztnQkFDZCxPQUFPO1lBQ1Q7WUFDQSxJQUFJWCxTQUFTSSxRQUFRLEtBQUtKLFNBQVNLLGVBQWUsRUFBRTtnQkFDbERULDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7Z0JBQ2QsT0FBTztZQUNUO1FBQ0Y7UUFDQSxPQUFPO0lBQ1Q7SUFFQSxNQUFNQyxvQkFBb0I7UUFDeEIsSUFBSTtZQUNGLE1BQU1qQix5Q0FBT0EsQ0FBQ2tCLG9CQUFvQixDQUFDYixTQUFTRSxLQUFLO1lBQ2pESCxTQUFTO1lBQ1RILDJFQUFPQSxDQUFDa0IsT0FBTyxDQUFDO1FBQ2xCLEVBQUUsT0FBT0gsT0FBTztZQUNkZiwyRUFBT0EsQ0FBQ2UsS0FBSyxDQUFDO1FBQ2hCO0lBQ0Y7SUFFQSxNQUFNSSxtQkFBbUI7UUFDdkIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsTUFBTXJCLHlDQUFPQSxDQUFDc0IsbUJBQW1CLENBQUM7Z0JBQ2pEQyxXQUFXbEIsU0FBU0csSUFBSTtnQkFDeEJELE9BQU9GLFNBQVNFLEtBQUs7WUFDdkI7WUFDQSxJQUFJYyxTQUFTRyxNQUFNLEtBQUssS0FBSztnQkFDM0J2QiwyRUFBT0EsQ0FBQ2tCLE9BQU8sQ0FBQztnQkFDaEJmLFNBQVM7WUFDWCxPQUFPO2dCQUNMSCwyRUFBT0EsQ0FBQ2UsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RmLDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7UUFDaEI7SUFDRjtJQUVBLE1BQU1TLHVCQUF1QjtRQUMzQixJQUFJO1lBQ0YsTUFBTUosV0FBVyxNQUFNckIseUNBQU9BLENBQUMwQixhQUFhLENBQUM7Z0JBQzNDbkIsT0FBT0YsU0FBU0UsS0FBSztnQkFDckJnQixXQUFXbEIsU0FBU0csSUFBSTtnQkFDeEJDLFVBQVVKLFNBQVNJLFFBQVE7WUFDN0I7WUFDQSxJQUFJWSxTQUFTRyxNQUFNLEtBQUssS0FBSztnQkFDM0J2QiwyRUFBT0EsQ0FBQ2tCLE9BQU8sQ0FBQztnQkFDaEJmLFNBQVM7WUFDWCxPQUFPO2dCQUNMSCwyRUFBT0EsQ0FBQ2UsS0FBSyxDQUFDO1lBQ2hCO1FBQ0YsRUFBRSxPQUFPQSxPQUFPO1lBQ2RmLDJFQUFPQSxDQUFDZSxLQUFLLENBQUM7UUFDaEI7SUFDRjtJQUVBLE1BQU1XLGVBQWU7UUFDbkIsSUFBSSxDQUFDWixvQkFBb0I7UUFFekIsT0FBUVo7WUFDTixLQUFLO2dCQUNILE1BQU1jO2dCQUNOO1lBQ0YsS0FBSztnQkFDSCxNQUFNRztnQkFDTjtZQUNGLEtBQUs7Z0JBQ0gsTUFBTUs7Z0JBQ047WUFDRjtnQkFDRTtRQUNKO0lBQ0Y7SUFDQSxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQzlCLG1FQUFxQkE7WUFDcEJJLE9BQU9BO1lBQ1BJLE9BQU9GLFNBQVNFLEtBQUs7WUFDckJ1QixlQUFlbkI7WUFDZm9CLFVBQVVKOzs7Ozs7Ozs7OztBQUlsQjtHQWhId0J6QiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhdXRoKS9mb3Jnb3QtcGFzc3dvcmQvcGFnZS5qc3g/YjlkMSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQXV0aFJlc2V0UGFzc3dvcmRDYXJkIH0gZnJvbSBcIkAvY29tcG9uZW50cy9hdXRoXCI7XHJcbmltcG9ydCB7IGF1dGhBcGkgfSBmcm9tIFwiQC9hcGlcIjtcclxuaW1wb3J0IHsgbWVzc2FnZSB9IGZyb20gXCJhbnRkXCI7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwYWdlKCkge1xyXG4gIGNvbnN0IFtzdGFnZSwgc2V0U3RhZ2VdID0gdXNlU3RhdGUoXCJlbWFpbFwiKTtcclxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlKHtcclxuICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgY29kZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gICAgY29uZmlybVBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVWYWxpZElucHV0ID0gKGlkLCB2YWx1ZSkgPT4ge1xyXG4gICAgc2V0Rm9ybURhdGEoKHByZXYpID0+IHtcclxuICAgICAgaWYgKHZhbHVlID09PSBudWxsKSB7XHJcbiAgICAgICAgcmV0dXJuIHsgLi4ucHJldiwgW2lkXTogXCJcIiB9O1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiB7IC4uLnByZXYsIFtpZF06IHZhbHVlIH07XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH07XHJcbiAgY29uc3QgdmFsaWRhdGVGb3JtRGF0YSA9ICgpID0+IHtcclxuICAgIGlmIChzdGFnZSA9PT0gXCJlbWFpbFwiICYmICFmb3JtRGF0YS5lbWFpbCkge1xyXG4gICAgICBtZXNzYWdlLmVycm9yKFwiUGxlYXNlIGZpbGwgaW4gYSB2YWxpZCBlbWFpbCBhZGRyZXNzXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhZ2UgPT09IFwiY29kZVwiICYmICFmb3JtRGF0YS5jb2RlKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJQbGVhc2UgZmlsbCBpbiB0aGUgY29ycmVjdCBjb2RlXCIpO1xyXG4gICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbiAgICBpZiAoc3RhZ2UgPT09IFwicGFzc3dvcmRcIikge1xyXG4gICAgICBpZiAoIWZvcm1EYXRhLnBhc3N3b3JkIHx8ICFmb3JtRGF0YS5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKFwiUGxlYXNlIGZpbGwgaW4gdGhlIHBhc3N3b3JkIGZpZWxkc1wiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgICAgaWYgKGZvcm1EYXRhLnBhc3N3b3JkICE9PSBmb3JtRGF0YS5jb25maXJtUGFzc3dvcmQpIHtcclxuICAgICAgICBtZXNzYWdlLmVycm9yKFwiUGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUVtYWlsU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgYXV0aEFwaS5yZXF1ZXN0UGFzc3dvcmRSZXNldChmb3JtRGF0YS5lbWFpbCk7XHJcbiAgICAgIHNldFN0YWdlKFwiY29kZVwiKTtcclxuICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUGFzc3dvcmQgcmVzZXQgZW1haWwgc2VudFwiKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIG1lc3NhZ2UuZXJyb3IoXCJFcnJvciBzZW5kaW5nIHJlc2V0IGVtYWlsXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUNvZGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF1dGhBcGkudmVyaWZ5UGFzc3dvcmRSZXNldCh7XHJcbiAgICAgICAgcmVzZXRDb2RlOiBmb3JtRGF0YS5jb2RlLFxyXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgfSk7XHJcbiAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgIG1lc3NhZ2Uuc3VjY2VzcyhcIkNvZGUgdmVyaWZpZWQgc3VjY2Vzc2Z1bGx5XCIpO1xyXG4gICAgICAgIHNldFN0YWdlKFwicGFzc3dvcmRcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihcIkNvZGUgdmVyaWZpY2F0aW9uIGZhaWxlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIkNvZGUgdmVyaWZpY2F0aW9uIGVycm9yXCIpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVBhc3N3b3JkU3VibWl0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBhdXRoQXBpLnJlc2V0UGFzc3dvcmQoe1xyXG4gICAgICAgIGVtYWlsOiBmb3JtRGF0YS5lbWFpbCxcclxuICAgICAgICByZXNldENvZGU6IGZvcm1EYXRhLmNvZGUsXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLnBhc3N3b3JkLFxyXG4gICAgICB9KTtcclxuICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgbWVzc2FnZS5zdWNjZXNzKFwiUGFzc3dvcmQgcmVzZXQgc3VjY2Vzc2Z1bFwiKTtcclxuICAgICAgICBzZXRTdGFnZShcInN1Y2Nlc3NcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbWVzc2FnZS5lcnJvcihcIlBhc3N3b3JkIHJlc2V0IGZhaWxlZFwiKTtcclxuICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgbWVzc2FnZS5lcnJvcihcIkVycm9yIHJlc2V0dGluZyBwYXNzd29yZFwiKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVTdWJtaXQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICBpZiAoIXZhbGlkYXRlRm9ybURhdGEoKSkgcmV0dXJuO1xyXG5cclxuICAgIHN3aXRjaCAoc3RhZ2UpIHtcclxuICAgICAgY2FzZSBcImVtYWlsXCI6XHJcbiAgICAgICAgYXdhaXQgaGFuZGxlRW1haWxTdWJtaXQoKTtcclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSBcImNvZGVcIjpcclxuICAgICAgICBhd2FpdCBoYW5kbGVDb2RlU3VibWl0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGNhc2UgXCJwYXNzd29yZFwiOlxyXG4gICAgICAgIGF3YWl0IGhhbmRsZVBhc3N3b3JkU3VibWl0KCk7XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgYnJlYWs7XHJcbiAgICB9XHJcbiAgfTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1zY3JlZW4gZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXJcIj5cclxuICAgICAgPEF1dGhSZXNldFBhc3N3b3JkQ2FyZFxyXG4gICAgICAgIHN0YWdlPXtzdGFnZX1cclxuICAgICAgICBlbWFpbD17Zm9ybURhdGEuZW1haWx9XHJcbiAgICAgICAgb25JbnB1dENoYW5nZT17aGFuZGxlVmFsaWRJbnB1dH1cclxuICAgICAgICBvblN1Ym1pdD17aGFuZGxlU3VibWl0fVxyXG4gICAgICAvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkF1dGhSZXNldFBhc3N3b3JkQ2FyZCIsImF1dGhBcGkiLCJtZXNzYWdlIiwicGFnZSIsInN0YWdlIiwic2V0U3RhZ2UiLCJmb3JtRGF0YSIsInNldEZvcm1EYXRhIiwiZW1haWwiLCJjb2RlIiwicGFzc3dvcmQiLCJjb25maXJtUGFzc3dvcmQiLCJoYW5kbGVWYWxpZElucHV0IiwiaWQiLCJ2YWx1ZSIsInByZXYiLCJ2YWxpZGF0ZUZvcm1EYXRhIiwiZXJyb3IiLCJoYW5kbGVFbWFpbFN1Ym1pdCIsInJlcXVlc3RQYXNzd29yZFJlc2V0Iiwic3VjY2VzcyIsImhhbmRsZUNvZGVTdWJtaXQiLCJyZXNwb25zZSIsInZlcmlmeVBhc3N3b3JkUmVzZXQiLCJyZXNldENvZGUiLCJzdGF0dXMiLCJoYW5kbGVQYXNzd29yZFN1Ym1pdCIsInJlc2V0UGFzc3dvcmQiLCJoYW5kbGVTdWJtaXQiLCJkaXYiLCJjbGFzc05hbWUiLCJvbklucHV0Q2hhbmdlIiwib25TdWJtaXQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/forgot-password/page.jsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/userprofile/page",{

/***/ "(app-client)/./app/userprofile/page.tsx":
/*!**********************************!*\
  !*** ./app/userprofile/page.tsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/api/authApi */ \"(app-client)/./pages/api/authApi.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction page() {\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const token = session === null || session === void 0 ? void 0 : session.user.accessToken;\n    const { data  } = (0,_pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__.useProfileByIdQuery)({\n        access: token,\n        id: 1\n    });\n    // const {data} =  useGetAllUserIdQuery(1)\n    // const {data} = useGetAllUserQuery()\n    console.log(\"userdata\", data);\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        name: \"\"\n    });\n    console.log(\"profile data\", data);\n    console.log(\"email\", userData.email);\n    // Store User Data in Local State\n    // useEffect(() => {\n    //   if (data ) {\n    //     setUserData({\n    //       Compatiblity: data.Compatiblity,\n    //       FriendName: data.FriendName,\n    //       ProfileName:data.ProfileName\n    //     })\n    //   }\n    // }, [data, isSuccess])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"todos\",\n                children: data === null || data === void 0 ? void 0 : data.map((user)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((react__WEBPACK_IMPORTED_MODULE_1___default().Fragment), {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: [\n                                    \"Friendanem\",\n                                    user.FriendName,\n                                    \"=\",\n                                    user.Compatiblity\n                                ]\n                            }, void 0, true, {\n                                fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\userprofile\\\\page.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this)\n                        }, void 0, false, {\n                            fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\userprofile\\\\page.tsx\",\n                            lineNumber: 42,\n                            columnNumber: 9\n                        }, this)\n                    }, user.id, false, {\n                        fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\userprofile\\\\page.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 7\n                    }, this))\n            }, void 0, false, {\n                fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\userprofile\\\\page.tsx\",\n                lineNumber: 39,\n                columnNumber: 5\n            }, this),\n            \"           \"\n        ]\n    }, void 0, true);\n}\n_s(page, \"yw2SIW+2YOCdfo+RA3wDQVzRoiU=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__.useProfileByIdQuery\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3VzZXJwcm9maWxlL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QjtBQUNzRztBQUNqRTtBQUc3QjtBQUNqQyxTQUFTSSxPQUFPOztJQUNkLE1BQU0sRUFBQ0MsTUFBS0MsUUFBTyxFQUFDLEdBQUdKLDJEQUFVQTtJQUNqQyxNQUFNSyxRQUFZRCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNFLElBQUksQ0FBQ0MsV0FBVztJQUUzQyxNQUFNLEVBQUNKLEtBQUksRUFBQyxHQUFJSix1RUFBbUJBLENBQUM7UUFBQ1MsUUFBT0g7UUFBTUksSUFBRztJQUFDO0lBQ3RELDBDQUEwQztJQUMxQyxzQ0FBc0M7SUFDdENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFXUjtJQUV2QixNQUFNLENBQUNTLFVBQVVDLFlBQVksR0FBR1osK0NBQVFBLENBQUM7UUFDdkNhLE9BQU87UUFDUEMsTUFBTTtJQUNSO0lBQ0FMLFFBQVFDLEdBQUcsQ0FBQyxnQkFBZVI7SUFDN0JPLFFBQVFDLEdBQUcsQ0FBQyxTQUFTQyxTQUFTRSxLQUFLO0lBR2pDLGlDQUFpQztJQUNqQyxvQkFBb0I7SUFDcEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQix5Q0FBeUM7SUFDekMscUNBQXFDO0lBQ3JDLHFDQUFxQztJQUNyQyxTQUFTO0lBQ1QsTUFBTTtJQUNOLHdCQUF3QjtJQUd4QixxQkFDRTs7MEJBQ0EsOERBQUNFO2dCQUFJQyxXQUFVOzBCQUNkZCxpQkFBQUEsa0JBQUFBLEtBQUFBLElBQUFBLEtBQU1lLEdBQUcsQ0FBQyxDQUFDWixxQkFDViw4REFBQ1IsdURBQWM7a0NBQ2IsNEVBQUNrQjtzQ0FFQyw0RUFBQ0k7O29DQUFLO29DQUFXZCxLQUFLZSxVQUFVO29DQUFDO29DQUFFZixLQUFLZ0IsWUFBWTs7Ozs7Ozs7Ozs7O3VCQUhuQ2hCLEtBQUtHLEVBQUU7Ozs7Ozs7Ozs7WUFTdEI7OztBQUVaO0dBNUNTUDs7UUFDZ0JGLHVEQUFVQTtRQUdqQkQsbUVBQW1CQTs7O0FBMENyQywrREFBZUcsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvdXNlcnByb2ZpbGUvcGFnZS50c3g/YjQxYyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZUFsbFVzZXJQcmVkaWN0UXVlcnksdXNlUHJvZmlsZUJ5SWRRdWVyeSAsdXNlR2V0QWxsVXNlcklkUXVlcnkgLHVzZUdldEFsbFVzZXJRdWVyeSB9IGZyb20gXCIuLi8uLi9wYWdlcy9hcGkvYXV0aEFwaVwiO1xyXG5pbXBvcnQgeyBzaWduSW4sIHNpZ25PdXQsIHVzZVNlc3Npb24gfSBmcm9tIFwibmV4dC1hdXRoL3JlYWN0XCI7XHJcbmltcG9ydCB7IGFjY2VzcyB9IGZyb20gJ2ZzJztcclxuaW1wb3J0IHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuZnVuY3Rpb24gcGFnZSgpIHtcclxuICBjb25zdCB7ZGF0YTpzZXNzaW9ufSA9IHVzZVNlc3Npb24oKTtcclxuICBjb25zdCB0b2tlbjphbnkgPSBzZXNzaW9uPy51c2VyLmFjY2Vzc1Rva2VuO1xyXG4gIFxyXG4gIGNvbnN0IHtkYXRhfSA9ICB1c2VQcm9maWxlQnlJZFF1ZXJ5KHthY2Nlc3M6dG9rZW4saWQ6MX0pXHJcbiAgLy8gY29uc3Qge2RhdGF9ID0gIHVzZUdldEFsbFVzZXJJZFF1ZXJ5KDEpXHJcbiAgLy8gY29uc3Qge2RhdGF9ID0gdXNlR2V0QWxsVXNlclF1ZXJ5KClcclxuICBjb25zb2xlLmxvZyhcInVzZXJkYXRhXCIsZGF0YSk7XHJcblxyXG4gIGNvbnN0IFt1c2VyRGF0YSwgc2V0VXNlckRhdGFdID0gdXNlU3RhdGUoe1xyXG4gICAgZW1haWw6IFwiXCIsXHJcbiAgICBuYW1lOiBcIlwiXHJcbiAgfSlcclxuICBjb25zb2xlLmxvZyhcInByb2ZpbGUgZGF0YVwiLGRhdGEpO1xyXG5jb25zb2xlLmxvZyhcImVtYWlsXCIsIHVzZXJEYXRhLmVtYWlsKTtcclxuXHJcblxyXG4gIC8vIFN0b3JlIFVzZXIgRGF0YSBpbiBMb2NhbCBTdGF0ZVxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoZGF0YSApIHtcclxuICAvLyAgICAgc2V0VXNlckRhdGEoe1xyXG4gIC8vICAgICAgIENvbXBhdGlibGl0eTogZGF0YS5Db21wYXRpYmxpdHksXHJcbiAgLy8gICAgICAgRnJpZW5kTmFtZTogZGF0YS5GcmllbmROYW1lLFxyXG4gIC8vICAgICAgIFByb2ZpbGVOYW1lOmRhdGEuUHJvZmlsZU5hbWVcclxuICAvLyAgICAgfSlcclxuICAvLyAgIH1cclxuICAvLyB9LCBbZGF0YSwgaXNTdWNjZXNzXSlcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZG9zXCI+XHJcbiAgICB7ZGF0YT8ubWFwKCh1c2VyOmFueSkgPT4gKFxyXG4gICAgICA8UmVhY3QuRnJhZ21lbnQga2V5PXt1c2VyLmlkfT5cclxuICAgICAgICA8ZGl2PlxyXG4gICAgXHJcbiAgICAgICAgICA8c3Bhbj5GcmllbmRhbmVte3VzZXIuRnJpZW5kTmFtZX09e3VzZXIuQ29tcGF0aWJsaXR5fTwvc3Bhbj5cclxuICAgICAgICAgIHsvKiA8c3Bhbj57dXNlci5Db21wYXRpYmxpdHl9PC9zcGFuPiAqL31cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+ICAgICAgICAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VQcm9maWxlQnlJZFF1ZXJ5IiwidXNlU2Vzc2lvbiIsInVzZVN0YXRlIiwicGFnZSIsImRhdGEiLCJzZXNzaW9uIiwidG9rZW4iLCJ1c2VyIiwiYWNjZXNzVG9rZW4iLCJhY2Nlc3MiLCJpZCIsImNvbnNvbGUiLCJsb2ciLCJ1c2VyRGF0YSIsInNldFVzZXJEYXRhIiwiZW1haWwiLCJuYW1lIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiRnJhZ21lbnQiLCJzcGFuIiwiRnJpZW5kTmFtZSIsIkNvbXBhdGlibGl0eSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-client)/./app/userprofile/page.tsx\n"));

/***/ })

});
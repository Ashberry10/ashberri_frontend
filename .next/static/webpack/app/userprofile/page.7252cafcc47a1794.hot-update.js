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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/api/authApi */ \"(app-client)/./pages/api/authApi.ts\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction page() {\n    _s();\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession)();\n    const token = session === null || session === void 0 ? void 0 : session.user.accessToken;\n    const { data  } = (0,_pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__.useProfileByIdQuery)({\n        access: token,\n        id: 1\n    });\n    // const {data} =  useGetAllUserIdQuery(1)\n    // const {data} = useGetAllUserQuery()\n    console.log(\"userdata\", data);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"userprofile\"\n    }, void 0, false, {\n        fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\userprofile\\\\page.tsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this);\n}\n_s(page, \"n5SydgQc8zLlQomaJeyeXGnIwHI=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_3__.useSession,\n        _pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__.useProfileByIdQuery\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL3VzZXJwcm9maWxlL3BhZ2UudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUN5QjtBQUNzRztBQUNqRTtBQUU5RCxTQUFTRyxPQUFPOztJQUNkLE1BQU0sRUFBQ0MsTUFBS0MsUUFBTyxFQUFDLEdBQUdILDJEQUFVQTtJQUNqQyxNQUFNSSxRQUFZRCxvQkFBQUEscUJBQUFBLEtBQUFBLElBQUFBLFFBQVNFLElBQUksQ0FBQ0MsV0FBVztJQUUzQyxNQUFNLEVBQUNKLEtBQUksRUFBQyxHQUFJSCx1RUFBbUJBLENBQUM7UUFBQ1EsUUFBT0g7UUFBTUksSUFBRztJQUFDO0lBQ3RELDBDQUEwQztJQUMxQyxzQ0FBc0M7SUFDdENDLFFBQVFDLEdBQUcsQ0FBQyxZQUFXUjtJQUt2QixxQkFDRSw4REFBQ1M7a0JBQUk7Ozs7OztBQUVUO0dBZlNWOztRQUNnQkQsdURBQVVBO1FBR2pCRCxtRUFBbUJBOzs7QUFhckMsK0RBQWVFLElBQUlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3VzZXJwcm9maWxlL3BhZ2UudHN4P2I0MWMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VBbGxVc2VyUHJlZGljdFF1ZXJ5LHVzZVByb2ZpbGVCeUlkUXVlcnkgLHVzZUdldEFsbFVzZXJJZFF1ZXJ5ICx1c2VHZXRBbGxVc2VyUXVlcnkgfSBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL2F1dGhBcGlcIjtcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG5pbXBvcnQgeyBhY2Nlc3MgfSBmcm9tICdmcyc7XHJcbmZ1bmN0aW9uIHBhZ2UoKSB7XHJcbiAgY29uc3Qge2RhdGE6c2Vzc2lvbn0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc3QgdG9rZW46YW55ID0gc2Vzc2lvbj8udXNlci5hY2Nlc3NUb2tlbjtcclxuICBcclxuICBjb25zdCB7ZGF0YX0gPSAgdXNlUHJvZmlsZUJ5SWRRdWVyeSh7YWNjZXNzOnRva2VuLGlkOjF9KVxyXG4gIC8vIGNvbnN0IHtkYXRhfSA9ICB1c2VHZXRBbGxVc2VySWRRdWVyeSgxKVxyXG4gIC8vIGNvbnN0IHtkYXRhfSA9IHVzZUdldEFsbFVzZXJRdWVyeSgpXHJcbiAgY29uc29sZS5sb2coXCJ1c2VyZGF0YVwiLGRhdGEpO1xyXG5cclxuICBcclxuXHJcbiAgXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+dXNlcnByb2ZpbGU8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBhZ2UiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VQcm9maWxlQnlJZFF1ZXJ5IiwidXNlU2Vzc2lvbiIsInBhZ2UiLCJkYXRhIiwic2Vzc2lvbiIsInRva2VuIiwidXNlciIsImFjY2Vzc1Rva2VuIiwiYWNjZXNzIiwiaWQiLCJjb25zb2xlIiwibG9nIiwiZGl2Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./app/userprofile/page.tsx\n"));

/***/ })

});
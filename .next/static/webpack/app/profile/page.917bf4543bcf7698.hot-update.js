"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/profile/page",{

/***/ "(app-client)/./app/profile/page.tsx":
/*!******************************!*\
  !*** ./app/profile/page.tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../pages/api/authApi */ \"(app-client)/./pages/api/authApi.ts\");\n/* harmony import */ var _store_hooks__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/hooks */ \"(app-client)/./store/hooks.ts\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/navigation */ \"(app-client)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/react */ \"(app-client)/./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _pages_state_userSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../pages/state/userSlice */ \"(app-client)/./pages/state/userSlice.ts\");\n\nvar _s = $RefreshSig$();\n\n// import { useGetAllUserQuery } from \"../pages/user/userSlice\";\n\n\n\n\n\n// import  { getToken }  from \"./LocalStorage\";\n// import { setUserInfo, unsetUserInfo } from '../pages/user/setUserInfoSlice';\n// import { useNavigate } from 'react-router';\n// import { useSession } from 'next-auth/react';\n\n\nfunction Profile(param) {\n    let { children  } = param;\n    _s();\n    const dispatch = (0,_store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch)();\n    // const [cart,setCart] = useState()\n    const { data: session  } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession)();\n    console.log({\n        data: session\n    });\n    const token = session === null || session === void 0 ? void 0 : session.user.token;\n    // console.log(token);\n    const router = (0,next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter)();\n    // console.log(token);\n    const { data , isSuccess  } = (0,_pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__.useProfileQuery)(token);\n    // const [userData, setUserData] = useState({\n    //   email: \"\",\n    //   name: \"\"\n    // })\n    const [userData, setUserData] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        email: \"\",\n        name: \"\"\n    });\n    console.log(\"profile data\", data);\n    // Store User Data in Local State\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && isSuccess) {\n            setUserData({\n                email: data.email,\n                name: data.name\n            });\n        }\n    }, [\n        data,\n        isSuccess\n    ]);\n    // Store User Data in Redux Store\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (data && isSuccess) {\n            dispatch((0,_pages_state_userSlice__WEBPACK_IMPORTED_MODULE_6__.setUserInfo)({\n                email: data.email,\n                name: data.name\n            }));\n        }\n    }, [\n        data,\n        isSuccess,\n        dispatch\n    ]);\n    // const  {name,token,Dfirst,Cfirst}  = useAppSelector((state) => state.auth);\n    // const token = localStorage.getItem(\"token\");\n    // console.log(name,Dfirst,Cfirst);\n    //  const {data:data} = useGetAllUserQuery();\n    //  const names = localStorage.getItem(\"name\");\n    // if (isSuccess) {\n    //   dispatch(setUser({ token: data.token, name: data.name  }));\n    //   localStorage.setItem(\"token\", data.token);\n    //   console.log(data.token);\n    // }\n    // const  access_token = getToken()\n    // const {data, isSuccess} = useProfileQuery(access_token);\n    // console.log(data.name);\n    // if (isSuccess) {\n    //     dispatch(setUser({ token: data.token, name: data.name }));\n    // navigate(\"/\");\n    // const token =    localStorage.setItem(\"token\", data.token);\n    // console.log(data.token);\n    // const token = localStorage.getItem(\"token\");\n    // if(!token){\n    //     return{\n    //     redirect:{\n    //         destination: '/login' \n    //     }\n    // }\n    // }\n    //   }\n    // console.log(name);\n    // console.log(data);\n    // console.log(data.name);\n    // Perform localStorage action\n    // Store User Data in Local State\n    //  useEffect(() => {\n    //   if (!localStorage.getItem('token')) {\n    //     router.push(\"/Login\")\n    // }\n    //   if (localStorage.getItem(\"name\")) {\n    //      setCart(JSON.parse(localStorage.getItem(\"name\") || \" \") )\n    //     // const pl = (localStorage.getItem(\"name\"));\n    //   }\n    //   if (localStorage.getItem(\"date_of_birth\")) {\n    //     setdate_of_birth(JSON.parse(localStorage.getItem(\"date_of_birth\") || \" \") )\n    //    // const pl = (localStorage.getItem(\"name\"));\n    //  }\n    //   }, []) \n    // Store User Data in Redux Store\n    // useEffect(() => {\n    //   if (data && isSuccess) {\n    //     dispatch(setUserInfo({\n    //       email: data.email,\n    //       name: data.name\n    //     }))\n    //   }\n    // }, [data, isSuccess, dispatch])\n    // useEffect(() => {\n    //   if (data && isSuccess) {\n    //     setUserData({\n    //       email: data.email,\n    //       name: data.name,\n    //     })\n    //   }\n    // }, [data, isSuccess])\n    // // Store User Data in Redux Store\n    // useEffect(() => {\n    //   if (data && isSuccess) {\n    //     dispatch(setUserInfo({\n    //       email: data.email,\n    //       name: data.name\n    //     }))\n    //   }\n    // }, [data, isSuccess, dispatch])\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {}, void 0, false, {\n                fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 225,\n                columnNumber: 1\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h5\", {\n                className: \"text-lg\",\n                children: \"Friends\"\n            }, void 0, false, {\n                fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 235,\n                columnNumber: 12\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: [\n                    \" \",\n                    userData.email\n                ]\n            }, void 0, true, {\n                fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\profile\\\\page.tsx\",\n                lineNumber: 236,\n                columnNumber: 12\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"F:\\\\SIDEPROJECT\\\\ASHBERRI\\\\ashberri_frontend\\\\app\\\\profile\\\\page.tsx\",\n        lineNumber: 194,\n        columnNumber: 5\n    }, this);\n}\n_s(Profile, \"nislIQdo99xZrd4olp+kqJZTbFc=\", false, function() {\n    return [\n        _store_hooks__WEBPACK_IMPORTED_MODULE_3__.useAppDispatch,\n        next_auth_react__WEBPACK_IMPORTED_MODULE_5__.useSession,\n        next_navigation__WEBPACK_IMPORTED_MODULE_4__.useRouter,\n        _pages_api_authApi__WEBPACK_IMPORTED_MODULE_2__.useProfileQuery\n    ];\n});\n_c = Profile;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Profile);\nvar _c;\n$RefreshReg$(_c, \"Profile\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0lBRXhCLG9DQUFvQztJQUNwQyxvQkFBb0I7SUFDcEIsNkJBQTZCO0lBQzdCLDZCQUE2QjtJQUM3QiwyQkFBMkI7SUFDM0Isd0JBQXdCO0lBQ3hCLFVBQVU7SUFDVixNQUFNO0lBQ04sa0NBQWtDO0lBQ2xDLHFCQUVFLDhEQUFDYTs7MEJBK0JMLDhEQUFDQzs7Ozs7MEJBVVUsOERBQUNDO2dCQUFHQyxXQUFVOzBCQUFVOzs7Ozs7MEJBQ3hCLDhEQUFDRjs7b0JBQUc7b0JBQUVMLFNBQVNFLEtBQUs7Ozs7Ozs7Ozs7Ozs7QUFXL0I7R0F0TlNiOztRQUNVTix3REFBY0E7UUFHUkksdURBQVVBO1FBSWxCSCxzREFBU0E7UUFLS0YsK0RBQWVBOzs7S0FickNPO0FBd05ULCtEQUFlQSxPQUFPQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wcm9maWxlL3BhZ2UudHN4PzFmODIiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcclxuXHJcblxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbi8vIGltcG9ydCB7IHVzZUdldEFsbFVzZXJRdWVyeSB9IGZyb20gXCIuLi9wYWdlcy91c2VyL3VzZXJTbGljZVwiO1xyXG5pbXBvcnQgeyB1c2VQcm9maWxlUXVlcnkgfSBmcm9tIFwiLi4vLi4vcGFnZXMvYXBpL2F1dGhBcGlcIjtcclxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IgfSBmcm9tIFwiLi4vLi4vc3RvcmUvaG9va3NcIjtcclxuaW1wb3J0IHsgc2V0VXNlciB9IGZyb20gXCIuLi8uLi9wYWdlcy9zdGF0ZS9hdXRoU2xpY2VcIjtcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tIFwiLi4vLi4vc3RvcmUvaG9va3NcIlxyXG5pbXBvcnQgeyByZWRpcmVjdCB9IGZyb20gJ25leHQvZGlzdC9zZXJ2ZXIvYXBpLXV0aWxzJztcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgZGEgZnJvbSAnZGF0ZS1mbnMvZXNtL2xvY2FsZS9kYS9pbmRleC5qcyc7XHJcblxyXG4vLyBpbXBvcnQgIHsgZ2V0VG9rZW4gfSAgZnJvbSBcIi4vTG9jYWxTdG9yYWdlXCI7XHJcbi8vIGltcG9ydCB7IHNldFVzZXJJbmZvLCB1bnNldFVzZXJJbmZvIH0gZnJvbSAnLi4vcGFnZXMvdXNlci9zZXRVc2VySW5mb1NsaWNlJztcclxuLy8gaW1wb3J0IHsgdXNlTmF2aWdhdGUgfSBmcm9tICdyZWFjdC1yb3V0ZXInO1xyXG4vLyBpbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0JztcclxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xyXG4vLyBpbXBvcnQgUHJvdmlkZXIgZnJvbSAnLi4vUHJvdmlkZXInO1xyXG5pbXBvcnQgeyBSZWFjdE5vZGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IHNldFVzZXJJbmZvLCB1bnNldFVzZXJJbmZvIH0gZnJvbSAnLi4vLi4vcGFnZXMvc3RhdGUvdXNlclNsaWNlJztcclxuXHJcblxyXG5pbnRlcmZhY2UgSVByb3BzIHtcclxuICBjaGlsZHJlbiA6IFJlYWN0Tm9kZTtcclxuICBzZXNzaW9uIDogYW55O1xyXG59XHJcblxyXG5cclxuXHJcbmZ1bmN0aW9uIFByb2ZpbGUoe2NoaWxkcmVufTpJUHJvcHMpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcbiAgXHJcbiAgLy8gY29uc3QgW2NhcnQsc2V0Q2FydF0gPSB1c2VTdGF0ZSgpXHJcbiAgY29uc3Qge2RhdGE6c2Vzc2lvbn0gPSB1c2VTZXNzaW9uKCk7XHJcbiAgY29uc29sZS5sb2coe2RhdGE6c2Vzc2lvbn0pO1xyXG4gIGNvbnN0IHRva2VuID0gc2Vzc2lvbj8udXNlci50b2tlblxyXG4gIC8vIGNvbnNvbGUubG9nKHRva2VuKTtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuIFxyXG5cclxuXHJcbiAgLy8gY29uc29sZS5sb2codG9rZW4pO1xyXG4gIGNvbnN0IHsgZGF0YSwgaXNTdWNjZXNzIH0gPSAgdXNlUHJvZmlsZVF1ZXJ5KHRva2VuKVxyXG5cclxuICAvLyBjb25zdCBbdXNlckRhdGEsIHNldFVzZXJEYXRhXSA9IHVzZVN0YXRlKHtcclxuICAvLyAgIGVtYWlsOiBcIlwiLFxyXG4gIC8vICAgbmFtZTogXCJcIlxyXG4gIC8vIH0pXHJcbiAgY29uc3QgW3VzZXJEYXRhLCBzZXRVc2VyRGF0YV0gPSB1c2VTdGF0ZSh7XHJcbiAgICBlbWFpbDogXCJcIixcclxuICAgIG5hbWU6IFwiXCJcclxuICB9KVxyXG4gIGNvbnNvbGUubG9nKFwicHJvZmlsZSBkYXRhXCIsZGF0YSk7XHJcblxyXG4gIC8vIFN0b3JlIFVzZXIgRGF0YSBpbiBMb2NhbCBTdGF0ZVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoZGF0YSAmJiBpc1N1Y2Nlc3MpIHtcclxuICAgICAgc2V0VXNlckRhdGEoe1xyXG4gICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gICAgICAgIG5hbWU6IGRhdGEubmFtZSxcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbZGF0YSwgaXNTdWNjZXNzXSlcclxuXHJcbiAgLy8gU3RvcmUgVXNlciBEYXRhIGluIFJlZHV4IFN0b3JlXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChkYXRhICYmIGlzU3VjY2Vzcykge1xyXG4gICAgICBkaXNwYXRjaChzZXRVc2VySW5mbyh7XHJcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgICAgICAgbmFtZTogZGF0YS5uYW1lXHJcbiAgICAgIH0pKVxyXG4gICAgfVxyXG4gIH0sIFtkYXRhLCBpc1N1Y2Nlc3MsIGRpc3BhdGNoXSlcclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAvLyBjb25zdCAge25hbWUsdG9rZW4sRGZpcnN0LENmaXJzdH0gID0gdXNlQXBwU2VsZWN0b3IoKHN0YXRlKSA9PiBzdGF0ZS5hdXRoKTtcclxuICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgLy8gY29uc29sZS5sb2cobmFtZSxEZmlyc3QsQ2ZpcnN0KTtcclxuICAvLyAgY29uc3Qge2RhdGE6ZGF0YX0gPSB1c2VHZXRBbGxVc2VyUXVlcnkoKTtcclxuXHJcblxyXG4vLyAgY29uc3QgbmFtZXMgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hbWVcIik7XHJcblxyXG5cclxuXHJcblxyXG4vLyBpZiAoaXNTdWNjZXNzKSB7XHJcbi8vICAgZGlzcGF0Y2goc2V0VXNlcih7IHRva2VuOiBkYXRhLnRva2VuLCBuYW1lOiBkYXRhLm5hbWUgIH0pKTtcclxuICBcclxuLy8gICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIGRhdGEudG9rZW4pO1xyXG4vLyAgIGNvbnNvbGUubG9nKGRhdGEudG9rZW4pO1xyXG4vLyB9XHJcblxyXG5cclxuXHJcblxyXG5cclxuLy8gY29uc3QgIGFjY2Vzc190b2tlbiA9IGdldFRva2VuKClcclxuXHJcbi8vIGNvbnN0IHtkYXRhLCBpc1N1Y2Nlc3N9ID0gdXNlUHJvZmlsZVF1ZXJ5KGFjY2Vzc190b2tlbik7XHJcblxyXG5cclxuICAgIC8vIGNvbnNvbGUubG9nKGRhdGEubmFtZSk7XHJcbiAgICAvLyBpZiAoaXNTdWNjZXNzKSB7XHJcbiAgICAvLyAgICAgZGlzcGF0Y2goc2V0VXNlcih7IHRva2VuOiBkYXRhLnRva2VuLCBuYW1lOiBkYXRhLm5hbWUgfSkpO1xyXG4gICAgICAgIC8vIG5hdmlnYXRlKFwiL1wiKTtcclxuICAgIC8vIGNvbnN0IHRva2VuID0gICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ0b2tlblwiLCBkYXRhLnRva2VuKTtcclxuICAgICAgICAvLyBjb25zb2xlLmxvZyhkYXRhLnRva2VuKTtcclxuICAgICAgICAvLyBjb25zdCB0b2tlbiA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gaWYoIXRva2VuKXtcclxuICAgICAgICAvLyAgICAgcmV0dXJue1xyXG4gICAgICAgIC8vICAgICByZWRpcmVjdDp7XHJcbiAgICAgICAgLy8gICAgICAgICBkZXN0aW5hdGlvbjogJy9sb2dpbicgXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcbiAgICAgICAgLy8gfVxyXG4gICAgLy8gICB9XHJcbi8vIGNvbnNvbGUubG9nKG5hbWUpO1xyXG4gICAgLy8gY29uc29sZS5sb2coZGF0YSk7XHJcbiAgICBcclxuXHJcbiAgICAgICAgXHJcbiAgICAgICAgLy8gY29uc29sZS5sb2coZGF0YS5uYW1lKTtcclxuICAgICAgICAvLyBQZXJmb3JtIGxvY2FsU3RvcmFnZSBhY3Rpb25cclxuICAgICAgXHJcbiAgICAgIFxyXG4gICAgICAvLyBTdG9yZSBVc2VyIERhdGEgaW4gTG9jYWwgU3RhdGVcclxuICAvLyAgdXNlRWZmZWN0KCgpID0+IHtcclxuXHJcbiAgLy8gICBpZiAoIWxvY2FsU3RvcmFnZS5nZXRJdGVtKCd0b2tlbicpKSB7XHJcbiAgLy8gICAgIHJvdXRlci5wdXNoKFwiL0xvZ2luXCIpXHJcbiAgLy8gfVxyXG4gIC8vICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwibmFtZVwiKSkge1xyXG4gICAgICBcclxuICAvLyAgICAgIHNldENhcnQoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hbWVcIikgfHwgXCIgXCIpIClcclxuICAvLyAgICAgLy8gY29uc3QgcGwgPSAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJuYW1lXCIpKTtcclxuICAvLyAgIH1cclxuICAvLyAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGVfb2ZfYmlydGhcIikpIHtcclxuICAgICAgXHJcbiAgLy8gICAgIHNldGRhdGVfb2ZfYmlydGgoSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImRhdGVfb2ZfYmlydGhcIikgfHwgXCIgXCIpIClcclxuICAvLyAgICAvLyBjb25zdCBwbCA9IChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcIm5hbWVcIikpO1xyXG4gIC8vICB9XHJcbiAgLy8gICB9LCBbXSkgXHJcblxyXG5cclxuXHJcblxyXG4gICAgICAgIC8vIFN0b3JlIFVzZXIgRGF0YSBpbiBSZWR1eCBTdG9yZVxyXG4gIC8vIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgLy8gICBpZiAoZGF0YSAmJiBpc1N1Y2Nlc3MpIHtcclxuICAvLyAgICAgZGlzcGF0Y2goc2V0VXNlckluZm8oe1xyXG4gIC8vICAgICAgIGVtYWlsOiBkYXRhLmVtYWlsLFxyXG4gIC8vICAgICAgIG5hbWU6IGRhdGEubmFtZVxyXG4gIC8vICAgICB9KSlcclxuICAvLyAgIH1cclxuICAvLyB9LCBbZGF0YSwgaXNTdWNjZXNzLCBkaXNwYXRjaF0pXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcbiAgLy8gdXNlRWZmZWN0KCgpID0+IHtcclxuICAvLyAgIGlmIChkYXRhICYmIGlzU3VjY2Vzcykge1xyXG4gIC8vICAgICBzZXRVc2VyRGF0YSh7XHJcbiAgLy8gICAgICAgZW1haWw6IGRhdGEuZW1haWwsXHJcbiAgLy8gICAgICAgbmFtZTogZGF0YS5uYW1lLFxyXG4gIC8vICAgICB9KVxyXG4gIC8vICAgfVxyXG4gIC8vIH0sIFtkYXRhLCBpc1N1Y2Nlc3NdKVxyXG5cclxuICAvLyAvLyBTdG9yZSBVc2VyIERhdGEgaW4gUmVkdXggU3RvcmVcclxuICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gIC8vICAgaWYgKGRhdGEgJiYgaXNTdWNjZXNzKSB7XHJcbiAgLy8gICAgIGRpc3BhdGNoKHNldFVzZXJJbmZvKHtcclxuICAvLyAgICAgICBlbWFpbDogZGF0YS5lbWFpbCxcclxuICAvLyAgICAgICBuYW1lOiBkYXRhLm5hbWVcclxuICAvLyAgICAgfSkpXHJcbiAgLy8gICB9XHJcbiAgLy8gfSwgW2RhdGEsIGlzU3VjY2VzcywgZGlzcGF0Y2hdKVxyXG4gIHJldHVybiAoXHJcbiAgXHJcbiAgICA8ZGl2PlxyXG4gICAgICBcclxuICAgICAgICB7Lyoge1xyXG4gICAgICAgICAgICByZXNwb25zZUluZm8uZGF0YS5tYXAoKHBvc3QsIGkpID0+XHJcbiAgICAgICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgICAgIDxoMj57cG9zdC5uYW1lfSB7cG9zdC5lbWFpbH08L2gyPlxyXG4gICAgICAgICAgICA8cD57cG9zdC5EZmlyc3R9PC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDwvZGl2Pil9ICovfVxyXG57LyogXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgcmVzcG9uc2VJbmZvLmRhdGE/Lm1hcCgoZGF0YSkgPT5cclxuICAgICAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICAgXHJcbiAgICAgICAgICAgIC8vIDxwPntwb3N0Lm5hbWV9PC9wPlxyXG4gICAgICAgICAgICA8aHIgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgICAgfSAqL31cclxuXHJcblxyXG5cclxuXHJcblxyXG4gXHJcbiAgICB7Lyoge2RhdGE/Lm1hcCgoZGF0YTphbnkpID0+IChcclxuICAgICAgICAgIDxoMT4ge2RhdGEubmFtZX08L2gxPlxyXG4gICAgICAgPGgxPntkYXRhLm5hbWV9LS17ZGF0YS5EZmlyc3R9LS17ZGF0YS5DZmlyc3R9PC9oMT5cclxuICAgIFxyXG5cclxuICAgICAgICAgICkpfSAqL31cclxuPGgxPlxyXG4gICAgICAgICAgey8qIFlvdXIgTmFtZToge25hbWV9IDxici8+ICovfVxyXG4gICAgICAgICAgey8qIFlvdXIgZGF0ZW9mYmlydGg6IHtkYXRlX29mX2JpcnRofSA8YnIvPiAqL31cclxuXHJcblxyXG4gICAgICAgICAgey8qIFlvdXIgRGZpcnN0OiB7RGZpcnN0fTxici8+XHJcbiAgICAgICAgICBZb3VyIENmaXJzdDogIHtDZmlyc3R9PGJyLz4gKi99XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgey8qIDxoMT4gIEVtYWlsOiB7dXNlckRhdGEuZW1haWx9PC9oMT4gICovfVxyXG4gICAgICAgICAgIDxoNSBjbGFzc05hbWU9J3RleHQtbGcnPkZyaWVuZHM8L2g1PlxyXG4gICAgICAgICAgIDxoMT4ge3VzZXJEYXRhLmVtYWlsfTwvaDE+XHJcbiAgICAgICAgICAgey8qIDxkaXYgY2xhc3NOYW1lPXtcIiAgbWluLWgtc2NyZWVuIFwifT57Y2hpbGRyZW59PC9kaXY+ICovfVxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIFxyXG4gICAgICAgICAgIHsvKiA8aDE+e2RhdGF9PC9oMT4gKi99XHJcbiAgICAgICAgICAgXHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICBcclxuICAgICAgICBcclxuXHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9maWxlXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUHJvZmlsZVF1ZXJ5IiwidXNlQXBwRGlzcGF0Y2giLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsInVzZVNlc3Npb24iLCJzZXRVc2VySW5mbyIsIlByb2ZpbGUiLCJjaGlsZHJlbiIsImRpc3BhdGNoIiwiZGF0YSIsInNlc3Npb24iLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJ1c2VyIiwicm91dGVyIiwiaXNTdWNjZXNzIiwidXNlckRhdGEiLCJzZXRVc2VyRGF0YSIsImVtYWlsIiwibmFtZSIsImRpdiIsImgxIiwiaDUiLCJjbGFzc05hbWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/profile/page.tsx\n"));

/***/ })

});
"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst authOptions = {\n    providers: [\n        // ..add more prodiver\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_0___default()({\n            // The Username to display on the sign in form (e.g. \"Sign in with...\")\n            name: \"Credentials\",\n            // `credentials` is used to generate a form on the sign in page.\n            // You can specify which fields should be submitted, by adding keys to the `credentials` object.\n            // e.g. domain, userUsername, password, 2FA token, etc.\n            // You can pass any HTML attribute to the <input> tag through the object.\n            credentials: {\n                Username: {\n                    label: \"Username\",\n                    type: \"text\",\n                    placeholder: \"jsmith\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            async authorize (credentials, req) {\n                // Add logic here to look up the user from the credentials supplied\n                //   const user = { id: \"1\", Username: \"J Smith\", email: \"jsmith@example.com\" }\n                //   if (user) {\n                //     // Any object returned will be saved in `user` property of the JWT\n                //     return user\n                //   } else {\n                //     // If you return null then an error will be displayed advising the user to check their details.\n                //     return null\n                //     // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter\n                //   }\n                const { Username , password  } = credentials;\n                const res = await fetch(\"http://127.0.0.1:8000/api/user/login\", {\n                    method: \"POST\",\n                    headers: {\n                        \"Content-Type\": \"application/json\"\n                    },\n                    body: JSON.stringify({\n                        Username,\n                        password\n                    })\n                });\n                const user = await res.json();\n                if (res.ok && user) {\n                    return user;\n                } else return null;\n            }\n        })\n    ],\n    session: {\n        strategy: \"jwt\"\n    },\n    pages: {\n        signIn: \"/Login\"\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_1___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFrRTtBQUNoQjtBQUUzQyxNQUFNRSxjQUE4QjtJQUN2Q0MsV0FBVTtRQUNOLHNCQUFzQjtRQUN0Qkgsc0VBQW1CQSxDQUFDO1lBQ2hCLHVFQUF1RTtZQUN2RUksTUFBTTtZQUNOLGdFQUFnRTtZQUNoRSxnR0FBZ0c7WUFDaEcsdURBQXVEO1lBQ3ZELHlFQUF5RTtZQUN6RUMsYUFBYTtnQkFDWEMsVUFBVTtvQkFBRUMsT0FBTztvQkFBWUMsTUFBTTtvQkFBUUMsYUFBYTtnQkFBUztnQkFDbkVDLFVBQVU7b0JBQUVILE9BQU87b0JBQVlDLE1BQU07Z0JBQVc7WUFDbEQ7WUFDQSxNQUFNRyxXQUFVTixXQUFXLEVBQUVPLEdBQUcsRUFBRTtnQkFDaEMsbUVBQW1FO2dCQUNyRSwrRUFBK0U7Z0JBRS9FLGdCQUFnQjtnQkFDaEIseUVBQXlFO2dCQUN6RSxrQkFBa0I7Z0JBQ2xCLGFBQWE7Z0JBQ2Isc0dBQXNHO2dCQUN0RyxrQkFBa0I7Z0JBRWxCLGtKQUFrSjtnQkFDbEosTUFBTTtnQkFDRCxNQUFNLEVBQUNOLFNBQVEsRUFBQ0ksU0FBUSxFQUFFLEdBQUdMO2dCQUM3QixNQUFNUSxNQUFNLE1BQU1DLE1BQU0sd0NBQXVDO29CQUM5REMsUUFBTztvQkFDUEMsU0FBUTt3QkFDTixnQkFBZTtvQkFFbkI7b0JBRUFDLE1BQUtDLEtBQUtDLFNBQVMsQ0FBQzt3QkFDbEJiO3dCQUNBSTtvQkFDRjtnQkFDSjtnQkFHQSxNQUFNVSxPQUFPLE1BQU1QLElBQUlRLElBQUk7Z0JBRTNCLElBQUlSLElBQUlTLEVBQUUsSUFBSUYsTUFBTTtvQkFDaEIsT0FBT0E7Z0JBRVgsT0FBTyxPQUFPLElBQUk7WUFHbkI7UUFDRDtLQUNEO0lBR0RHLFNBQVE7UUFDSkMsVUFBUztJQUNiO0lBQ0FDLE9BQU07UUFDRkMsUUFBTztJQUNYO0FBQ1IsRUFBQztBQUVELGlFQUFlekIsZ0RBQVFBLENBQUNDLFlBQVlBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzPzJlOGIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENyZWRlbnRpYWxzUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcclxuaW1wb3J0IE5leHRBdXRoLHtOZXh0QXV0aE9wdGlvbnN9IGZyb20gXCJuZXh0LWF1dGhcIlxyXG5cclxuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOk5leHRBdXRoT3B0aW9ucyA9IHtcclxuICAgIHByb3ZpZGVyczpbXHJcbiAgICAgICAgLy8gLi5hZGQgbW9yZSBwcm9kaXZlclxyXG4gICAgICAgIENyZWRlbnRpYWxzUHJvdmlkZXIoe1xyXG4gICAgICAgICAgICAvLyBUaGUgVXNlcm5hbWUgdG8gZGlzcGxheSBvbiB0aGUgc2lnbiBpbiBmb3JtIChlLmcuIFwiU2lnbiBpbiB3aXRoLi4uXCIpXHJcbiAgICAgICAgICAgIG5hbWU6IFwiQ3JlZGVudGlhbHNcIixcclxuICAgICAgICAgICAgLy8gYGNyZWRlbnRpYWxzYCBpcyB1c2VkIHRvIGdlbmVyYXRlIGEgZm9ybSBvbiB0aGUgc2lnbiBpbiBwYWdlLlxyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHNwZWNpZnkgd2hpY2ggZmllbGRzIHNob3VsZCBiZSBzdWJtaXR0ZWQsIGJ5IGFkZGluZyBrZXlzIHRvIHRoZSBgY3JlZGVudGlhbHNgIG9iamVjdC5cclxuICAgICAgICAgICAgLy8gZS5nLiBkb21haW4sIHVzZXJVc2VybmFtZSwgcGFzc3dvcmQsIDJGQSB0b2tlbiwgZXRjLlxyXG4gICAgICAgICAgICAvLyBZb3UgY2FuIHBhc3MgYW55IEhUTUwgYXR0cmlidXRlIHRvIHRoZSA8aW5wdXQ+IHRhZyB0aHJvdWdoIHRoZSBvYmplY3QuXHJcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XHJcbiAgICAgICAgICAgICAgVXNlcm5hbWU6IHsgbGFiZWw6IFwiVXNlcm5hbWVcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImpzbWl0aFwiIH0sXHJcbiAgICAgICAgICAgICAgcGFzc3dvcmQ6IHsgbGFiZWw6IFwiUGFzc3dvcmRcIiwgdHlwZTogXCJwYXNzd29yZFwiIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgYXN5bmMgYXV0aG9yaXplKGNyZWRlbnRpYWxzLCByZXEpIHtcclxuICAgICAgICAgICAgICAvLyBBZGQgbG9naWMgaGVyZSB0byBsb29rIHVwIHRoZSB1c2VyIGZyb20gdGhlIGNyZWRlbnRpYWxzIHN1cHBsaWVkXHJcbiAgICAgICAgICAgIC8vICAgY29uc3QgdXNlciA9IHsgaWQ6IFwiMVwiLCBVc2VybmFtZTogXCJKIFNtaXRoXCIsIGVtYWlsOiBcImpzbWl0aEBleGFtcGxlLmNvbVwiIH1cclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gICBpZiAodXNlcikge1xyXG4gICAgICAgICAgICAvLyAgICAgLy8gQW55IG9iamVjdCByZXR1cm5lZCB3aWxsIGJlIHNhdmVkIGluIGB1c2VyYCBwcm9wZXJ0eSBvZiB0aGUgSldUXHJcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gdXNlclxyXG4gICAgICAgICAgICAvLyAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIC8vICAgICAvLyBJZiB5b3UgcmV0dXJuIG51bGwgdGhlbiBhbiBlcnJvciB3aWxsIGJlIGRpc3BsYXllZCBhZHZpc2luZyB0aGUgdXNlciB0byBjaGVjayB0aGVpciBkZXRhaWxzLlxyXG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIG51bGxcclxuICAgICAgICBcclxuICAgICAgICAgICAgLy8gICAgIC8vIFlvdSBjYW4gYWxzbyBSZWplY3QgdGhpcyBjYWxsYmFjayB3aXRoIGFuIEVycm9yIHRodXMgdGhlIHVzZXIgd2lsbCBiZSBzZW50IHRvIHRoZSBlcnJvciBwYWdlIHdpdGggdGhlIGVycm9yIG1lc3NhZ2UgYXMgYSBxdWVyeSBwYXJhbWV0ZXJcclxuICAgICAgICAgICAgLy8gICB9XHJcbiAgICAgICAgICAgICAgICAgY29uc3Qge1VzZXJuYW1lLHBhc3N3b3JkIH0gPSBjcmVkZW50aWFscyBhcyBhbnk7XHJcbiAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwOi8vMTI3LjAuMC4xOjgwMDAvYXBpL3VzZXIvbG9naW5cIix7XHJcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDpcIlBPU1RcIixcclxuICAgICAgICAgICAgICAgICAgaGVhZGVyczp7XHJcbiAgICAgICAgICAgICAgICAgICAgXCJDb250ZW50LVR5cGVcIjpcImFwcGxpY2F0aW9uL2pzb25cIlxyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgYm9keTpKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICAgIFVzZXJuYW1lLFxyXG4gICAgICAgICAgICAgICAgICBwYXNzd29yZCxcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3QgdXNlciA9IGF3YWl0IHJlcy5qc29uKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzLm9rICYmIHVzZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIH0gZWxzZSByZXR1cm4gbnVsbDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIF0sXHJcblxyXG5cclxuICAgICAgICBzZXNzaW9uOntcclxuICAgICAgICAgICAgc3RyYXRlZ3k6XCJqd3RcIlxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFnZXM6e1xyXG4gICAgICAgICAgICBzaWduSW46XCIvTG9naW5cIlxyXG4gICAgICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTmV4dEF1dGgoYXV0aE9wdGlvbnMpIl0sIm5hbWVzIjpbIkNyZWRlbnRpYWxzUHJvdmlkZXIiLCJOZXh0QXV0aCIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwiVXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwicmVxIiwicmVzIiwiZmV0Y2giLCJtZXRob2QiLCJoZWFkZXJzIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ1c2VyIiwianNvbiIsIm9rIiwic2Vzc2lvbiIsInN0cmF0ZWd5IiwicGFnZXMiLCJzaWduSW4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();
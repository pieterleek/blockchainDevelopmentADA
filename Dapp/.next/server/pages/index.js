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
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _meshsdk_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @meshsdk/react */ \"@meshsdk/react\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_meshsdk_react__WEBPACK_IMPORTED_MODULE_2__]);\n_meshsdk_react__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\nconst Home = ()=>{\n    const { connected , wallet  } = (0,_meshsdk_react__WEBPACK_IMPORTED_MODULE_2__.useWallet)();\n    const [assets, setAssets] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    async function getAssets() {\n        if (wallet) {\n            setLoading(true);\n            const _assets = await wallet.getAssets();\n            setAssets(_assets);\n            setLoading(false);\n        }\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                children: \"Connect Wallet\"\n            }, void 0, false, {\n                fileName: \"/home/anonymous/school/blockchain/07-team-charles/Dapp/pages/index.tsx\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_meshsdk_react__WEBPACK_IMPORTED_MODULE_2__.CardanoWallet, {}, void 0, false, {\n                fileName: \"/home/anonymous/school/blockchain/07-team-charles/Dapp/pages/index.tsx\",\n                lineNumber: 23,\n                columnNumber: 9\n            }, undefined),\n            connected && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Get Wallet Assets\"\n                    }, void 0, false, {\n                        fileName: \"/home/anonymous/school/blockchain/07-team-charles/Dapp/pages/index.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 15\n                    }, undefined),\n                    assets ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                            className: \"language-js\",\n                            children: JSON.stringify(assets, null, 2)\n                        }, void 0, false, {\n                            fileName: \"/home/anonymous/school/blockchain/07-team-charles/Dapp/pages/index.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 15\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"/home/anonymous/school/blockchain/07-team-charles/Dapp/pages/index.tsx\",\n                        lineNumber: 28,\n                        columnNumber: 19\n                    }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"button\",\n                        onClick: ()=>getAssets(),\n                        disabled: loading,\n                        style: {\n                            margin: \"8px\",\n                            backgroundColor: loading ? \"orange\" : \"grey\"\n                        },\n                        children: \"Get Wallet Assets\"\n                    }, void 0, false, {\n                        fileName: \"/home/anonymous/school/blockchain/07-team-charles/Dapp/pages/index.tsx\",\n                        lineNumber: 34,\n                        columnNumber: 19\n                    }, undefined)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/anonymous/school/blockchain/07-team-charles/Dapp/pages/index.tsx\",\n        lineNumber: 21,\n        columnNumber: 7\n    }, undefined);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFBaUM7QUFFVTtBQUNJO0FBRS9DLE1BQU1HLE9BQWlCLElBQU07SUFDM0IsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLE9BQU0sRUFBRSxHQUFHSix5REFBU0E7SUFDdkMsTUFBTSxDQUFDSyxRQUFRQyxVQUFVLEdBQUdQLCtDQUFRQSxDQUFhLElBQUk7SUFDckQsTUFBTSxDQUFDUSxTQUFTQyxXQUFXLEdBQUdULCtDQUFRQSxDQUFVLEtBQUs7SUFFckQsZUFBZVUsWUFBWTtRQUN6QixJQUFJTCxRQUFRO1lBQ1ZJLFdBQVcsSUFBSTtZQUNmLE1BQU1FLFVBQVUsTUFBTU4sT0FBT0ssU0FBUztZQUN0Q0gsVUFBVUk7WUFDVkYsV0FBVyxLQUFLO1FBQ2xCLENBQUM7SUFDSDtJQUVBLHFCQUNJLDhEQUFDRzs7MEJBQ0MsOERBQUNDOzBCQUFHOzs7Ozs7MEJBQ0osOERBQUNYLHlEQUFhQTs7Ozs7WUFDYkUsMkJBQ0c7O2tDQUNFLDhEQUFDUztrQ0FBRzs7Ozs7O29CQUNIUCx1QkFDRyw4REFBQ1E7a0NBQ0wsNEVBQUNDOzRCQUFLQyxXQUFVO3NDQUNiQyxLQUFLQyxTQUFTLENBQUNaLFFBQVEsSUFBSSxFQUFFOzs7Ozs7Ozs7O2tEQUk1Qiw4REFBQ2E7d0JBQ0dDLE1BQUs7d0JBQ0xDLFNBQVMsSUFBTVg7d0JBQ2ZZLFVBQVVkO3dCQUNWZSxPQUFPOzRCQUNMQyxRQUFROzRCQUNSQyxpQkFBaUJqQixVQUFVLFdBQVcsTUFBTTt3QkFDOUM7a0NBQ0g7Ozs7O2lDQUdKOzs7Ozs7Ozs7QUFLZjtBQUVBLGlFQUFlTCxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcHJvamVjdDIvLi9wYWdlcy9pbmRleC50c3g/MDdmZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHR5cGUgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XG5pbXBvcnQgeyB1c2VXYWxsZXQgfSBmcm9tICdAbWVzaHNkay9yZWFjdCc7XG5pbXBvcnQgeyBDYXJkYW5vV2FsbGV0IH0gZnJvbSAnQG1lc2hzZGsvcmVhY3QnO1xuXG5jb25zdCBIb21lOiBOZXh0UGFnZSA9ICgpID0+IHtcbiAgY29uc3QgeyBjb25uZWN0ZWQsIHdhbGxldCB9ID0gdXNlV2FsbGV0KCk7XG4gIGNvbnN0IFthc3NldHMsIHNldEFzc2V0c10gPSB1c2VTdGF0ZTxudWxsIHwgYW55PihudWxsKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xuXG4gIGFzeW5jIGZ1bmN0aW9uIGdldEFzc2V0cygpIHtcbiAgICBpZiAod2FsbGV0KSB7XG4gICAgICBzZXRMb2FkaW5nKHRydWUpO1xuICAgICAgY29uc3QgX2Fzc2V0cyA9IGF3YWl0IHdhbGxldC5nZXRBc3NldHMoKTtcbiAgICAgIHNldEFzc2V0cyhfYXNzZXRzKTtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDE+Q29ubmVjdCBXYWxsZXQ8L2gxPlxuICAgICAgICA8Q2FyZGFub1dhbGxldCAvPlxuICAgICAgICB7Y29ubmVjdGVkICYmIChcbiAgICAgICAgICAgIDw+XG4gICAgICAgICAgICAgIDxoMT5HZXQgV2FsbGV0IEFzc2V0czwvaDE+XG4gICAgICAgICAgICAgIHthc3NldHMgPyAoXG4gICAgICAgICAgICAgICAgICA8cHJlPlxuICAgICAgICAgICAgICA8Y29kZSBjbGFzc05hbWU9XCJsYW5ndWFnZS1qc1wiPlxuICAgICAgICAgICAgICAgIHtKU09OLnN0cmluZ2lmeShhc3NldHMsIG51bGwsIDIpfVxuICAgICAgICAgICAgICA8L2NvZGU+XG4gICAgICAgICAgICA8L3ByZT5cbiAgICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBnZXRBc3NldHMoKX1cbiAgICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17bG9hZGluZ31cbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBsb2FkaW5nID8gXCJvcmFuZ2VcIiA6IFwiZ3JleVwiLFxuICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIEdldCBXYWxsZXQgQXNzZXRzXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvPlxuICAgICAgICApfVxuICAgICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBIb21lOyJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZVdhbGxldCIsIkNhcmRhbm9XYWxsZXQiLCJIb21lIiwiY29ubmVjdGVkIiwid2FsbGV0IiwiYXNzZXRzIiwic2V0QXNzZXRzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJnZXRBc3NldHMiLCJfYXNzZXRzIiwiZGl2IiwiaDEiLCJwcmUiLCJjb2RlIiwiY2xhc3NOYW1lIiwiSlNPTiIsInN0cmluZ2lmeSIsImJ1dHRvbiIsInR5cGUiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJzdHlsZSIsIm1hcmdpbiIsImJhY2tncm91bmRDb2xvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@meshsdk/react":
/*!*********************************!*\
  !*** external "@meshsdk/react" ***!
  \*********************************/
/***/ ((module) => {

module.exports = import("@meshsdk/react");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.tsx"));
module.exports = __webpack_exports__;

})();
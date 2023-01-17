"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./components/ThemeSwitch.js":
/*!***********************************!*\
  !*** ./components/ThemeSwitch.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _darkTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darkTheme */ \"./components/darkTheme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ThemeSwitch = ()=>{\n    _s();\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    console.log(darkMode);\n    const text = darkMode ? \"Light Mode\" : \"Dark Mode\";\n    const handleClick = ()=>{\n        localStorage.setItem(\"darkMode\", JSON.stringify(!darkMode));\n        setDarkMode(!darkMode);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                className: \"jsx-9052e6551cb7171c\",\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\vue\\\\Nextjs\\\\components\\\\ThemeSwitch.js\",\n                lineNumber: 15,\n                columnNumber: 1\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"9052e6551cb7171c\",\n                children: \"button.jsx-9052e6551cb7171c{background:none;color:inherit;border:none;cursor:pointer}\"\n            }, void 0, false, void 0, undefined),\n            darkMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_darkTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\vue\\\\Nextjs\\\\components\\\\ThemeSwitch.js\",\n                lineNumber: 27,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ThemeSwitch, \"2fJEFfy2p5VgNlPlYi0wgeDEHcw=\");\n_c = ThemeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitch);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUFvQztBQUNBO0FBRXBDLE1BQU1HLGNBQWMsSUFBTTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFTQyxZQUFZLEdBQUdKLCtDQUFRQSxDQUFDLEtBQUs7SUFDN0NLLFFBQVFDLEdBQUcsQ0FBQ0g7SUFDWixNQUFNSSxPQUFLSixXQUFVLGVBQWEsV0FBVztJQUU3QyxNQUFNSyxjQUFZLElBQUk7UUFDbEJDLGFBQWFDLE9BQU8sQ0FBQyxZQUFXQyxLQUFLQyxTQUFTLENBQUMsQ0FBQ1Q7UUFDakRDLFlBQVksQ0FBQ0Q7SUFDaEI7SUFDRixxQkFDRjs7MEJBQ0EsOERBQUNVO2dCQUFPQyxTQUFTTjs7MEJBQWtCRDs7Ozs7Ozs7OztZQVdsQ0osMEJBQ0csOERBQUNGLGtEQUFTQTs7Ozs7OztBQU1kO0dBN0JNQztLQUFBQTtBQStCTiwrREFBZUEsV0FBV0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoLmpzP2ZkOTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LHt1c2VTdGF0ZX0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBEYXJrVGhlbWUgZnJvbSAnLi9kYXJrVGhlbWUnO1xyXG5cclxuY29uc3QgVGhlbWVTd2l0Y2ggPSAoKSA9PiB7XHJcbiAgICBjb25zdCBbZGFya01vZGUsc2V0RGFya01vZGVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc29sZS5sb2coZGFya01vZGUpO1xyXG4gICAgY29uc3QgdGV4dD1kYXJrTW9kZSA/J0xpZ2h0IE1vZGUnOidEYXJrIE1vZGUnXHJcblxyXG4gICAgY29uc3QgaGFuZGxlQ2xpY2s9KCk9PntcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnZGFya01vZGUnLEpTT04uc3RyaW5naWZ5KCFkYXJrTW9kZSkpO1xyXG4gICAgICAgc2V0RGFya01vZGUoIWRhcmtNb2RlKVxyXG4gICAgfVxyXG4gIHJldHVybiAoXHJcbjw+XHJcbjxidXR0b24gb25DbGljaz17aGFuZGxlQ2xpY2sgICAgfT57dGV4dH08L2J1dHRvbj5cclxuPHN0eWxlIGpzeD5cclxuICAgIHtgXHJcbiAgICBidXR0b257XHJcbiAgICAgICAgYmFja2dyb3VuZDpub25lO1xyXG4gICAgICAgIGNvbG9yOmluaGVyaXQ7XHJcbiAgICAgICAgYm9yZGVyOm5vbmU7XHJcbiAgICAgICAgY3Vyc29yOnBvaW50ZXJcclxuICAgIH1cclxuICAgIGB9XHJcbjwvc3R5bGU+XHJcbntkYXJrTW9kZSAmJiAoXHJcbiAgICA8RGFya1RoZW1lLz5cclxuXHJcbiAgIFxyXG4pfVxyXG48Lz5cclxuKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUaGVtZVN3aXRjaCJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiRGFya1RoZW1lIiwiVGhlbWVTd2l0Y2giLCJkYXJrTW9kZSIsInNldERhcmtNb2RlIiwiY29uc29sZSIsImxvZyIsInRleHQiLCJoYW5kbGVDbGljayIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/ThemeSwitch.js\n"));

/***/ })

});
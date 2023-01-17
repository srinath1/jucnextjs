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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _darkTheme__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./darkTheme */ \"./components/darkTheme.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst loadDarkMode = ()=>{\n    const value = localStorage.getItem(\"darkMode\");\n    return value === null ? false : JSON.parse(value);\n};\nconst ThemeSwitch = ()=>{\n    _s();\n    const [darkMode, setDarkMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(loadDarkMode());\n    console.log(darkMode);\n    const text = darkMode ? \"Light Mode\" : \"Dark Mode\";\n    const handleClick = ()=>{\n        localStorage.setItem(\"darkMode\", JSON.stringify(!darkMode));\n        setDarkMode(!darkMode);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                onClick: handleClick,\n                className: \"jsx-9052e6551cb7171c\",\n                children: text\n            }, void 0, false, {\n                fileName: \"C:\\\\vue\\\\Nextjs\\\\components\\\\ThemeSwitch.js\",\n                lineNumber: 19,\n                columnNumber: 1\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"9052e6551cb7171c\",\n                children: \"button.jsx-9052e6551cb7171c{background:none;color:inherit;border:none;cursor:pointer}\"\n            }, void 0, false, void 0, undefined),\n            darkMode && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_darkTheme__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\vue\\\\Nextjs\\\\components\\\\ThemeSwitch.js\",\n                lineNumber: 31,\n                columnNumber: 5\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(ThemeSwitch, \"DgfvWiy4zPTWt9Qk4HiFucJm4wM=\");\n_c = ThemeSwitch;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ThemeSwitch);\nvar _c;\n$RefreshReg$(_c, \"ThemeSwitch\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RoZW1lU3dpdGNoLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7OztBQUFvQztBQUNBO0FBQ3BDLE1BQU1HLGVBQWEsSUFBSTtJQUNuQixNQUFNQyxRQUFNQyxhQUFhQyxPQUFPLENBQUM7SUFDakMsT0FBTyxVQUFTLElBQUksR0FBSSxLQUFLLEdBQUVDLEtBQUtDLEtBQUssQ0FBQ0osTUFBTTtBQUNwRDtBQUVBLE1BQU1LLGNBQWMsSUFBTTs7SUFDdEIsTUFBTSxDQUFDQyxVQUFTQyxZQUFZLEdBQUdWLCtDQUFRQSxDQUFDRTtJQUN4Q1MsUUFBUUMsR0FBRyxDQUFDSDtJQUNaLE1BQU1JLE9BQUtKLFdBQVUsZUFBYSxXQUFXO0lBRTdDLE1BQU1LLGNBQVksSUFBSTtRQUNsQlYsYUFBYVcsT0FBTyxDQUFDLFlBQVdULEtBQUtVLFNBQVMsQ0FBQyxDQUFDUDtRQUNqREMsWUFBWSxDQUFDRDtJQUNoQjtJQUNGLHFCQUNGOzswQkFDQSw4REFBQ1E7Z0JBQU9DLFNBQVNKOzswQkFBZUQ7Ozs7Ozs7Ozs7WUFXL0JKLDBCQUNHLDhEQUFDUixrREFBU0E7Ozs7Ozs7QUFNZDtHQTdCTU87S0FBQUE7QUErQk4sK0RBQWVBLFdBQVdBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9UaGVtZVN3aXRjaC5qcz9mZDkwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCx7dXNlU3RhdGV9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgRGFya1RoZW1lIGZyb20gJy4vZGFya1RoZW1lJztcclxuY29uc3QgbG9hZERhcmtNb2RlPSgpPT57XHJcbiAgICBjb25zdCB2YWx1ZT1sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnZGFya01vZGUnKTtcclxuICAgIHJldHVybiAodmFsdWU9PT1udWxsKSA/IGZhbHNlIDpKU09OLnBhcnNlKHZhbHVlKVxyXG59XHJcblxyXG5jb25zdCBUaGVtZVN3aXRjaCA9ICgpID0+IHtcclxuICAgIGNvbnN0IFtkYXJrTW9kZSxzZXREYXJrTW9kZV0gPSB1c2VTdGF0ZShsb2FkRGFya01vZGUoKSk7XHJcbiAgICBjb25zb2xlLmxvZyhkYXJrTW9kZSk7XHJcbiAgICBjb25zdCB0ZXh0PWRhcmtNb2RlID8nTGlnaHQgTW9kZSc6J0RhcmsgTW9kZSdcclxuXHJcbiAgICBjb25zdCBoYW5kbGVDbGljaz0oKT0+e1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdkYXJrTW9kZScsSlNPTi5zdHJpbmdpZnkoIWRhcmtNb2RlKSk7XHJcbiAgICAgICBzZXREYXJrTW9kZSghZGFya01vZGUpXHJcbiAgICB9XHJcbiAgcmV0dXJuIChcclxuPD5cclxuPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGljayB9Pnt0ZXh0fTwvYnV0dG9uPlxyXG48c3R5bGUganN4PlxyXG4gICAge2BcclxuICAgIGJ1dHRvbntcclxuICAgICAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICAgICAgY29sb3I6aW5oZXJpdDtcclxuICAgICAgICBib3JkZXI6bm9uZTtcclxuICAgICAgICBjdXJzb3I6cG9pbnRlclxyXG4gICAgfVxyXG4gICAgYH1cclxuPC9zdHlsZT5cclxue2RhcmtNb2RlICYmIChcclxuICAgIDxEYXJrVGhlbWUvPlxyXG5cclxuICAgXHJcbil9XHJcbjwvPlxyXG4pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFRoZW1lU3dpdGNoIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJEYXJrVGhlbWUiLCJsb2FkRGFya01vZGUiLCJ2YWx1ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJUaGVtZVN3aXRjaCIsImRhcmtNb2RlIiwic2V0RGFya01vZGUiLCJjb25zb2xlIiwibG9nIiwidGV4dCIsImhhbmRsZUNsaWNrIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/ThemeSwitch.js\n"));

/***/ })

});
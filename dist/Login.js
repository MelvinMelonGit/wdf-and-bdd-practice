/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./output/LoginFeature/Components/Login.js":
/*!*************************************************!*\
  !*** ./output/LoginFeature/Components/Login.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _LoginForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LoginForm.js */ \"./output/LoginFeature/Components/LoginForm.js\");\n\nfunction Login(props) {\n  return /*#__PURE__*/React.createElement(\"main\", null, /*#__PURE__*/React.createElement(\"h1\", null, \"Admin Login2\"), /*#__PURE__*/React.createElement(_LoginForm_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null));\n}\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render( /*#__PURE__*/React.createElement(Login, null));\n\n//# sourceURL=webpack:///./output/LoginFeature/Components/Login.js?");

/***/ }),

/***/ "./output/LoginFeature/Components/LoginForm.js":
/*!*****************************************************!*\
  !*** ./output/LoginFeature/Components/LoginForm.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ LoginForm)\n/* harmony export */ });\nfunction LoginForm(props) {\n  const initialValue = {\n    email: '',\n    password: ''\n  };\n  const [loginFields, setLoginFields] = React.useState(initialValue);\n  function handleChange(e) {\n    setLoginFields({\n      ...loginFields,\n      [e.target.name]: e.target.value\n    });\n  }\n  function handleSubmit(e) {\n    e.preventDefault();\n    const params = {\n      email: loginFields.email,\n      password: loginFields.password\n    };\n    const options = {\n      method: 'POST',\n      body: JSON.stringify(params),\n      headers: {\n        'Content-type': 'application/json; charset=UTF-8'\n      }\n    };\n    fetch('http://localhost:8081/user/login/', options).then(response => {\n      response.json();\n    }).then(data => {\n      console.log(data);\n      // Do something with response.\n    });\n  }\n\n  return /*#__PURE__*/React.createElement(\"form\", {\n    onSubmit: handleSubmit\n  }, /*#__PURE__*/React.createElement(\"label\", null, \"Email:\", /*#__PURE__*/React.createElement(\"input\", {\n    type: \"email\",\n    name: \"email\",\n    value: loginFields.email,\n    onChange: handleChange\n  })), /*#__PURE__*/React.createElement(\"label\", null, \"Password:\", /*#__PURE__*/React.createElement(\"input\", {\n    type: \"password\",\n    name: \"password\",\n    value: loginFields.password,\n    onChange: handleChange\n  })), /*#__PURE__*/React.createElement(\"input\", {\n    type: \"submit\"\n  }, \"Sign In\"));\n}\n\n//# sourceURL=webpack:///./output/LoginFeature/Components/LoginForm.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./output/LoginFeature/Components/Login.js");
/******/ 	
/******/ })()
;
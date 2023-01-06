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

/***/ "./output/MovieManagement/AddMovieForm.js":
/*!************************************************!*\
  !*** ./output/MovieManagement/AddMovieForm.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ AddMovieButton)\n/* harmony export */ });\nfunction AddMovieButton(props) {\n  const initialValue = {\n    id: props.movies.length + 1,\n    //to resolve duplicate id bug\n    title: '',\n    year: 0,\n    genre: '',\n    rating: 0,\n    imgUrl: ''\n  };\n  const [movie, setMovie] = React.useState(initialValue);\n  function handleTitleChange(e) {\n    setMovie({\n      ...movie,\n      title: e.target.value\n    });\n  }\n  function handleYearChange(e) {\n    setMovie({\n      ...movie,\n      year: e.target.value\n    });\n  }\n  function handleGenreChange(e) {\n    setMovie({\n      ...movie,\n      genre: e.target.value\n    });\n  }\n  function handleRatingChange(e) {\n    setMovie({\n      ...movie,\n      rating: e.target.value\n    });\n  }\n  function handleImgUrlChange(e) {\n    setMovie({\n      ...movie,\n      imgUrl: e.target.value\n    });\n  }\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"add-movie\"\n  }, /*#__PURE__*/React.createElement(\"label\", null, \"Title:\", /*#__PURE__*/React.createElement(\"input\", {\n    value: movie.title,\n    onChange: handleTitleChange\n  })), /*#__PURE__*/React.createElement(\"label\", null, \"Year:\", /*#__PURE__*/React.createElement(\"input\", {\n    type: \"number\",\n    value: movie.year,\n    onChange: handleYearChange\n  })), /*#__PURE__*/React.createElement(\"label\", null, \"Genre:\", /*#__PURE__*/React.createElement(\"input\", {\n    value: movie.genre,\n    onChange: handleGenreChange\n  })), /*#__PURE__*/React.createElement(\"label\", null, \"Rating:\", /*#__PURE__*/React.createElement(\"input\", {\n    type: \"number\",\n    value: movie.rating,\n    onChange: handleRatingChange\n  })), /*#__PURE__*/React.createElement(\"label\", null, \"ImageURL:\", /*#__PURE__*/React.createElement(\"input\", {\n    value: movie.imgUrl,\n    onChange: handleImgUrlChange\n  })), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => {\n      props.onButtonPressed(movie);\n      setMovie(initialValue);\n    }\n  }, \"Add Movie\"));\n}\n\n//# sourceURL=webpack:///./output/MovieManagement/AddMovieForm.js?");

/***/ }),

/***/ "./output/MovieManagement/Branding.js":
/*!********************************************!*\
  !*** ./output/MovieManagement/Branding.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Branding)\n/* harmony export */ });\nfunction Branding(props) {\n  return /*#__PURE__*/React.createElement(\"h1\", null, \"Movie Management App\");\n}\n\n//# sourceURL=webpack:///./output/MovieManagement/Branding.js?");

/***/ }),

/***/ "./output/MovieManagement/FilterButtons.js":
/*!*************************************************!*\
  !*** ./output/MovieManagement/FilterButtons.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ FilterButtons)\n/* harmony export */ });\nfunction FilterButtons(props) {\n  const [isHidden, setIsHidden] = React.useState(false);\n\n  // create unique array of genres to populate list of filter buttons\n  const uniqueGenres = [];\n  // if genres array doesnt have the movie genre, push it into the array\n  props.movies.map(movie => !uniqueGenres.includes(movie.genre) && uniqueGenres.push(movie.genre));\n  return /*#__PURE__*/React.createElement(\"div\", {\n    className: \"filter-movie\"\n  },\n  // toggle between show and hide in filter buttons\n  isHidden ? /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => {\n      props.onButtonPressed('Show All Movies');\n      setIsHidden(!isHidden);\n    }\n  }, \"Show All Movies\") : /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => {\n      props.onButtonPressed('Hide Past Movies');\n      setIsHidden(!isHidden);\n    }\n  }, \"Hide Past Movies\"),\n  // populate list of filter buttons with unique genres\n  uniqueGenres.map(uniqueGenre => /*#__PURE__*/React.createElement(\"button\", {\n    onClick: () => {\n      props.onButtonPressed(uniqueGenre);\n      setIsHidden(true);\n    }\n  },\n  // capitalise first letter of each word in button\n  uniqueGenre.charAt(0).toUpperCase() + uniqueGenre.slice(1))));\n}\n\n//# sourceURL=webpack:///./output/MovieManagement/FilterButtons.js?");

/***/ }),

/***/ "./output/MovieManagement/MovieApp.js":
/*!********************************************!*\
  !*** ./output/MovieManagement/MovieApp.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Branding_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Branding.js */ \"./output/MovieManagement/Branding.js\");\n/* harmony import */ var _FilterButtons_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./FilterButtons.js */ \"./output/MovieManagement/FilterButtons.js\");\n/* harmony import */ var _MovieList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MovieList.js */ \"./output/MovieManagement/MovieList.js\");\n/* harmony import */ var _AddMovieForm_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AddMovieForm.js */ \"./output/MovieManagement/AddMovieForm.js\");\n/* harmony import */ var _RemoveMovieButton_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./RemoveMovieButton.js */ \"./output/MovieManagement/RemoveMovieButton.js\");\n/* harmony import */ var _MovieData_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./MovieData.js */ \"./output/MovieManagement/MovieData.js\");\n\n\n\n\n\n\nfunction MovieApp(props) {\n  const [movieRecords, setMovieRecords] = React.useState(_MovieData_js__WEBPACK_IMPORTED_MODULE_5__.movies);\n  const [selectedMoviesId, setSelectedMoviesId] = React.useState([]);\n  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);\n\n  // selectedMoviesRef is essentially the number of selected movies which can be derived from selectedMoviesId\n  // let selectedMoviesRef = React.useRef(selectedMoviesId.length);\n\n  console.log(selectedMoviesId.length);\n  return /*#__PURE__*/React.createElement(\"main\", null, /*#__PURE__*/React.createElement(_Branding_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], null), /*#__PURE__*/React.createElement(_AddMovieForm_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    movies: movieRecords,\n    onButtonPressed: movie => {\n      //add new movie to state\n      setMovieRecords([...movieRecords, movie]);\n    }\n  }), /*#__PURE__*/React.createElement(_FilterButtons_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    movies: movieRecords,\n    onButtonPressed: value => {\n      let updatedRecords = [];\n      updatedRecords = movieRecords.map(movie => {\n        //depending on filters, set movies to hidden\n        if (value === \"Show All Movies\") {\n          return {\n            ...movie,\n            isHidden: false\n          };\n        } else if (value === \"Hide Past Movies\") {\n          return movie.year <= 2020 ? {\n            ...movie,\n            isHidden: true\n          } : {\n            ...movie,\n            isHidden: false\n          };\n        } else {\n          return movie.genre !== value ? {\n            ...movie,\n            isHidden: true\n          } : {\n            ...movie,\n            isHidden: false\n          };\n        }\n      });\n      setMovieRecords(updatedRecords);\n    }\n  }), /*#__PURE__*/React.createElement(_RemoveMovieButton_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n    isButtonDisabled: isButtonDisabled,\n    onButtonPressed: () => {\n      setMovieRecords(\n      //remove a movie from state\n      movieRecords.filter(movie => !selectedMoviesId.includes(movie.id)));\n      //clear movie selection if any filters are selected\n      setSelectedMoviesId([]);\n      //update the holding value as selectedMoviesId has not re-rendered yet\n\n      // You've already set this as 0, so the next statement will always be false which will always setIsButtonDisabled to true\n      // selectedMoviesRef.current = 0;\n      // selectedMoviesRef.current > 0 ? setIsButtonDisabled(false): setIsButtonDisabled(true);\n      setIsButtonDisabled(true);\n    }\n  }), /*#__PURE__*/React.createElement(\"section\", null, /*#__PURE__*/React.createElement(_MovieList_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n    movies: movieRecords,\n    selectedMoviesId: selectedMoviesId,\n    onSelect: id => {\n      movieRecords.map(movie => {\n        //if movie has already been selected, deselect movie\n        if (id === movie.id && selectedMoviesId.includes(id)) {\n          setSelectedMoviesId(selectedMoviesId.filter(movieID => movieID !== id));\n          // Though your original comment is true, we already have enough information to work with without needing a ref.\n          //update the holding value as selectedMoviesId has not re-rendered yet\n          // selectedMoviesRef.current -= 1;\n\n          // New logic: If original length of selectedMoviesId is 1, then after removing, it will be 0, hence disable the button\n          if (selectedMoviesId.length === 1) {\n            setIsButtonDisabled(true);\n          }\n        } else if (id === movie.id) {\n          //otherwise select the movie\n          setSelectedMoviesId([...selectedMoviesId, id]);\n          //update the holding value as selectedMoviesId has not re-rendered yet\n          // selectedMoviesRef.current += 1;\n\n          // New Logic: If original length was 0 (i.e. button was disabled), then after adding, we want to enable the button\n          if (selectedMoviesId.length === 0) {\n            setIsButtonDisabled(false);\n          }\n        }\n      });\n\n      // selectedMoviesRef.current > 0 ? setIsButtonDisabled(false): setIsButtonDisabled(true);\n    }\n  })));\n}\n\nconst root = ReactDOM.createRoot(document.getElementById('root'));\nroot.render( /*#__PURE__*/React.createElement(MovieApp, null));\n\n//# sourceURL=webpack:///./output/MovieManagement/MovieApp.js?");

/***/ }),

/***/ "./output/MovieManagement/MovieData.js":
/*!*********************************************!*\
  !*** ./output/MovieManagement/MovieData.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"movies\": () => (/* binding */ movies)\n/* harmony export */ });\nconst movies = [{\n  id: 1,\n  title: \"The Addams Family\",\n  year: 1964,\n  genre: \"horror\",\n  rating: 8.0,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BMTA5MmM4ZmYtMWE4My00OGUzLWE0ZDQtNGE5Mjc3ZWM0Y2Q1XkEyXkFqcGdeQXVyNjk1Njg5NTA@._V1_FMjpg_UX520_.jpg\"\n}, {\n  id: 2,\n  title: \"I Believe In Santa\",\n  year: 2022,\n  genre: \"comedy\",\n  rating: 4.4,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BMjIzYzBkNDMtZTliOC00YmQ4LWE5YjctMWRiZTAzYjNiOTM1XkEyXkFqcGdeQXVyNjk0MTExOQ@@._V1_FMjpg_UX1080_.jpg\"\n}, {\n  id: 3,\n  title: \"Avatar 2\",\n  year: 2022,\n  genre: \"action\",\n  rating: 8.0,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BYjhiNjBlODctY2ZiOC00YjVlLWFlNzAtNTVhNzM1YjI1NzMxXkEyXkFqcGdeQXVyMjQxNTE1MDA@._V1_FMjpg_UX900_.jpg\"\n}, {\n  id: 4,\n  title: \"The Simpsons\",\n  year: 1989,\n  genre: \"animation\",\n  rating: 8.7,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BYjFkMTlkYWUtZWFhNy00M2FmLThiOTYtYTRiYjVlZWYxNmJkXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_FMjpg_UX1000_.jpg\"\n}, {\n  id: 5,\n  title: \"The Mandalorian\",\n  year: 2019,\n  genre: \"scifi\",\n  rating: 8.7,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BYTYwYjUyZWUtNmJhYy00ZmM2LTg0MDAtY2Q4NzZmZDFlOTM2XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_FMjpg_UX1000_.jpg\"\n}, {\n  id: 6,\n  title: \"Who Killed Santa?\",\n  year: 2022,\n  genre: \"crime\",\n  rating: 6.5,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BOTFmODFhYWYtNTVlYS00ZGQwLTk1ZmMtODNhYjE5M2Q4YzI0XkEyXkFqcGdeQXVyMTMzNzIyNDc1._V1_FMjpg_UX450_.jpg\"\n}, {\n  id: 7,\n  title: \"Elf\",\n  year: 2019,\n  genre: \"adventure\",\n  rating: 7.1,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BMzUxNzkzMzQtYjIxZC00NzU0LThkYTQtZjNhNTljMTA1MDA1L2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_FMjpg_UX620_.jpg\"\n}, {\n  id: 8,\n  title: \"The Santa Clause\",\n  year: 2019,\n  genre: \"fantasy\",\n  rating: 5.7,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BNjU0Njk5MTA2Nl5BMl5BanBnXkFtZTYwODkzMzQ3._V1_FMjpg_UX400_.jpg\"\n}, {\n  id: 9,\n  title: \"Troll\",\n  year: 2022,\n  genre: \"fantasy\",\n  rating: 5.8,\n  imgUrl: \"https://m.media-amazon.com/images/M/MV5BOWQzMDc5OTMtMjFiMy00M2I3LWIyZWMtODM4NTRhMGI2ZTRkXkEyXkFqcGdeQXVyNDAxNzcyNw@@._V1_FMjpg_UY720_.jpg\"\n}];\n\n//# sourceURL=webpack:///./output/MovieManagement/MovieData.js?");

/***/ }),

/***/ "./output/MovieManagement/MovieLi.js":
/*!*******************************************!*\
  !*** ./output/MovieManagement/MovieLi.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieLi)\n/* harmony export */ });\nfunction MovieLi(props) {\n  return !props.isHidden &&\n  /*#__PURE__*/\n  //if movie id is within the selected array, give it a selected class\n  React.createElement(\"div\", {\n    className: `movie-card ${props.selectedMoviesId.includes(props.id) && 'selected'}`,\n    onClick: () => props.onSelect(props.id)\n  }, /*#__PURE__*/React.createElement(\"img\", {\n    src: props.imgUrl,\n    alt: \"#\"\n  }), /*#__PURE__*/React.createElement(\"li\", null, props.title, \" (\", props.year, \") - \", props.genre.charAt(0).toUpperCase() + props.genre.slice(1)), /*#__PURE__*/React.createElement(\"button\", {\n    onClick: e => {\n      e.stopPropagation();\n      alert(props.rating);\n    }\n  }, \"Click To See Rating\"));\n}\n\n//# sourceURL=webpack:///./output/MovieManagement/MovieLi.js?");

/***/ }),

/***/ "./output/MovieManagement/MovieList.js":
/*!*********************************************!*\
  !*** ./output/MovieManagement/MovieList.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MovieList)\n/* harmony export */ });\n/* harmony import */ var _MovieLi_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MovieLi.js */ \"./output/MovieManagement/MovieLi.js\");\nfunction _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\n\nfunction MovieList(props) {\n  return /*#__PURE__*/React.createElement(\"ul\", null, props.movies.map(movie => /*#__PURE__*/React.createElement(_MovieLi_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"], _extends({\n    key: movie.id,\n    onSelect: () => props.onSelect(movie.id)\n  }, movie, {\n    selectedMoviesId: props.selectedMoviesId\n  }))));\n}\n\n//# sourceURL=webpack:///./output/MovieManagement/MovieList.js?");

/***/ }),

/***/ "./output/MovieManagement/RemoveMovieButton.js":
/*!*****************************************************!*\
  !*** ./output/MovieManagement/RemoveMovieButton.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ RemoveMovieButton)\n/* harmony export */ });\nfunction RemoveMovieButton(props) {\n  return /*#__PURE__*/React.createElement(\"button\", {\n    className: \"remove-movie\",\n    disabled: props.isButtonDisabled,\n    onClick: () => {\n      props.onButtonPressed();\n    }\n  }, \"Click on Movie(s) first to Remove\");\n}\n\n//# sourceURL=webpack:///./output/MovieManagement/RemoveMovieButton.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./output/MovieManagement/MovieApp.js");
/******/ 	
/******/ })()
;
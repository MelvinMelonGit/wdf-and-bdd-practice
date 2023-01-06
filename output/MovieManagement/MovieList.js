function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import MovieLi from "./MovieLi.js";
export default function MovieList(props) {
  return /*#__PURE__*/React.createElement("ul", null, props.movies.map(movie => /*#__PURE__*/React.createElement(MovieLi, _extends({
    key: movie.id,
    onSelect: () => props.onSelect(movie.id)
  }, movie, {
    selectedMoviesId: props.selectedMoviesId
  }))));
}
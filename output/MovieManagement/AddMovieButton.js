export default function AddMovieButton(props) {
  const [movie, setMovie] = React.useState({
    id: props.movies.length + 1,
    title: '',
    year: 0,
    genre: '',
    imgUrl: ''
  });
  function handleTitleChange(e) {
    setMovie({
      ...movie,
      title: e.target.value
    });
  }
  function handleYearChange(e) {
    setMovie({
      ...movie,
      year: e.target.value
    });
  }
  function handleGenreChange(e) {
    setMovie({
      ...movie,
      genre: e.target.value
    });
  }
  function handleImgUrlChange(e) {
    setMovie({
      ...movie,
      imgUrl: e.target.value
    });
  }
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Title:", /*#__PURE__*/React.createElement("input", {
    value: movie.title,
    onChange: handleTitleChange
  })), /*#__PURE__*/React.createElement("label", null, "Year:", /*#__PURE__*/React.createElement("input", {
    value: movie.year,
    onChange: handleYearChange
  })), /*#__PURE__*/React.createElement("label", null, "Genre:", /*#__PURE__*/React.createElement("input", {
    value: movie.genre,
    onChange: handleGenreChange
  })), /*#__PURE__*/React.createElement("label", null, "Image:", /*#__PURE__*/React.createElement("input", {
    value: movie.imgUrl,
    onChange: handleImgUrlChange
  })), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      props.onButtonPressed(movie);
    }
  }, "Add Movie"));
}
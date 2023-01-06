export default function AddMovieButton(props) {
  const initialValue = {
    id: props.movies.length + 1,
    //to resolve duplicate id bug
    title: '',
    year: 0,
    genre: '',
    rating: 0,
    imgUrl: ''
  };
  const [movie, setMovie] = React.useState(initialValue);
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
  function handleRatingChange(e) {
    setMovie({
      ...movie,
      rating: e.target.value
    });
  }
  function handleImgUrlChange(e) {
    setMovie({
      ...movie,
      imgUrl: e.target.value
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "add-movie"
  }, /*#__PURE__*/React.createElement("label", null, "Title:", /*#__PURE__*/React.createElement("input", {
    value: movie.title,
    onChange: handleTitleChange
  })), /*#__PURE__*/React.createElement("label", null, "Year:", /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: movie.year,
    onChange: handleYearChange
  })), /*#__PURE__*/React.createElement("label", null, "Genre:", /*#__PURE__*/React.createElement("input", {
    value: movie.genre,
    onChange: handleGenreChange
  })), /*#__PURE__*/React.createElement("label", null, "Rating:", /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: movie.rating,
    onChange: handleRatingChange
  })), /*#__PURE__*/React.createElement("label", null, "ImageURL:", /*#__PURE__*/React.createElement("input", {
    value: movie.imgUrl,
    onChange: handleImgUrlChange
  })), /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      props.onButtonPressed(movie);
      setMovie(initialValue);
    }
  }, "Add Movie"));
}
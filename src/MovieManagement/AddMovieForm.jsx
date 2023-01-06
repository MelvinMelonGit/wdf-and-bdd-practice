export default function AddMovieButton(props) {
  const initialValue = {
    id: props.movies.length + 1,//to resolve duplicate id bug
    title: '',
    year: 0,
    genre: '',
    rating: 0,
    imgUrl: ''
  }
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

  return (
    <div className="add-movie">
      <label>
        Title:
        <input
          value={movie.title}
          onChange={handleTitleChange}
        />
      </label>
      <label>
        Year:
        <input
          type="number"
          value={movie.year}
          onChange={handleYearChange}
        />
      </label>
      <label>
        Genre:
        <input
          value={movie.genre}
          onChange={handleGenreChange}
        />
      </label>
      <label>
        Rating:
        <input
          type="number"
          value={movie.rating}
          onChange={handleRatingChange}
        />
      </label>
      <label>
        ImageURL:
        <input
          value={movie.imgUrl}
          onChange={handleImgUrlChange}
        />
      </label>
      <button onClick={() => {
                props.onButtonPressed(movie);
                setMovie(initialValue);
            }}>Add Movie</button>
    </div>
  );
}
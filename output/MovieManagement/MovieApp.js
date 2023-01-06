import Branding from "./Branding.js";
import FilterButtons from "./FilterButtons.js";
import MovieList from "./MovieList.js";
import AddMovieForm from "./AddMovieForm.js";
import RemoveMovieButton from "./RemoveMovieButton.js";
import { movies } from "./MovieData.js";
function MovieApp(props) {
  const [movieRecords, setMovieRecords] = React.useState(movies);
  const [selectedMoviesId, setSelectedMoviesId] = React.useState([]);
  const [isButtonDisabled, setIsButtonDisabled] = React.useState(true);

  // selectedMoviesRef is essentially the number of selected movies which can be derived from selectedMoviesId
  // let selectedMoviesRef = React.useRef(selectedMoviesId.length);

  console.log(selectedMoviesId.length);
  return /*#__PURE__*/React.createElement("main", null, /*#__PURE__*/React.createElement(Branding, null), /*#__PURE__*/React.createElement(AddMovieForm, {
    movies: movieRecords,
    onButtonPressed: movie => {
      //add new movie to state
      setMovieRecords([...movieRecords, movie]);
    }
  }), /*#__PURE__*/React.createElement(FilterButtons, {
    movies: movieRecords,
    onButtonPressed: value => {
      let updatedRecords = [];
      updatedRecords = movieRecords.map(movie => {
        //depending on filters, set movies to hidden
        if (value === "Show All Movies") {
          return {
            ...movie,
            isHidden: false
          };
        } else if (value === "Hide Past Movies") {
          return movie.year <= 2020 ? {
            ...movie,
            isHidden: true
          } : {
            ...movie,
            isHidden: false
          };
        } else {
          return movie.genre !== value ? {
            ...movie,
            isHidden: true
          } : {
            ...movie,
            isHidden: false
          };
        }
      });
      setMovieRecords(updatedRecords);
    }
  }), /*#__PURE__*/React.createElement(RemoveMovieButton, {
    isButtonDisabled: isButtonDisabled,
    onButtonPressed: () => {
      setMovieRecords(
      //remove a movie from state
      movieRecords.filter(movie => !selectedMoviesId.includes(movie.id)));
      //clear movie selection if any filters are selected
      setSelectedMoviesId([]);
      //update the holding value as selectedMoviesId has not re-rendered yet

      // You've already set this as 0, so the next statement will always be false which will always setIsButtonDisabled to true
      // selectedMoviesRef.current = 0;
      // selectedMoviesRef.current > 0 ? setIsButtonDisabled(false): setIsButtonDisabled(true);
      setIsButtonDisabled(true);
    }
  }), /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(MovieList, {
    movies: movieRecords,
    selectedMoviesId: selectedMoviesId,
    onSelect: id => {
      movieRecords.map(movie => {
        //if movie has already been selected, deselect movie
        if (id === movie.id && selectedMoviesId.includes(id)) {
          setSelectedMoviesId(selectedMoviesId.filter(movieID => movieID !== id));
          // Though your original comment is true, we already have enough information to work with without needing a ref.
          //update the holding value as selectedMoviesId has not re-rendered yet
          // selectedMoviesRef.current -= 1;

          // New logic: If original length of selectedMoviesId is 1, then after removing, it will be 0, hence disable the button
          if (selectedMoviesId.length === 1) {
            setIsButtonDisabled(true);
          }
        } else if (id === movie.id) {
          //otherwise select the movie
          setSelectedMoviesId([...selectedMoviesId, id]);
          //update the holding value as selectedMoviesId has not re-rendered yet
          // selectedMoviesRef.current += 1;

          // New Logic: If original length was 0 (i.e. button was disabled), then after adding, we want to enable the button
          if (selectedMoviesId.length === 0) {
            setIsButtonDisabled(false);
          }
        }
      });

      // selectedMoviesRef.current > 0 ? setIsButtonDisabled(false): setIsButtonDisabled(true);
    }
  })));
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(MovieApp, null));
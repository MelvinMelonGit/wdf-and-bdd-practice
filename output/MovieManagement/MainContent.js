import FilterButtons from "./FilterButtons.js";
import MovieList from "./MovieList.js";
const movies = [{
  id: 1,
  title: 'Avatar',
  year: 2020,
  genre: 'horror',
  imgUrl: 'https://picsum.photos/id/1/200/300'
}, {
  id: 2,
  title: 'Avatar2',
  year: 2022,
  genre: 'adventure',
  imgUrl: 'https://picsum.photos/id/2/200/300'
}, {
  id: 3,
  title: 'Avatar3',
  year: 2024,
  genre: 'horror',
  imgUrl: 'https://picsum.photos/id/3/200/300'
}, {
  id: 4,
  title: 'Avatar4',
  year: 2026,
  genre: 'horror',
  imgUrl: 'https://picsum.photos/id/4/200/300'
}, {
  id: 5,
  title: 'Avatar5',
  year: 2028,
  genre: 'scifi',
  imgUrl: 'https://picsum.photos/id/5/200/300'
}];
export default function MainContent(props) {
  const initialValue = movies;
  const [movieRecords, setMovieRecords] = React.useState(initialValue);
  return /*#__PURE__*/React.createElement("section", null, /*#__PURE__*/React.createElement(FilterButtons, {
    movies: initialValue,
    handleClick: value => {
      if (value === 'Show All Movies') {
        setMovieRecords(initialValue);
      } else if (value === 'Hide Past Movies') {
        setMovieRecords(initialValue.filter(movie => movie.year >= 2022));
      } else {
        setMovieRecords(initialValue.filter(movie => movie.genre === value));
      }
    }
  }), /*#__PURE__*/React.createElement(MovieList, {
    movies: movieRecords
  }));
}
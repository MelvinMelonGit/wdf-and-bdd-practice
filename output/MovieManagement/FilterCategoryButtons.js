export default function FilterButtons(props) {
  const [isHidden, setIsHidden] = React.useState(false);

  // create unique array of genres to populate list of filter buttons
  const uniqueGenres = [];
  // if genres array doesnt have the movie genre, push it into the array
  {
    props.movies.map(movie => !uniqueGenres.includes(movie.genre) && uniqueGenres.push(movie.genre));
  }
  return /*#__PURE__*/React.createElement("div", null,
  // toggle between show and hide in filter buttons
  isHidden ? /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      props.handleClick('Show All Movies');
      setIsHidden(!isHidden);
    }
  }, "Show All Movies") : /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      props.handleClick('Hide Past Movies');
      setIsHidden(!isHidden);
    }
  }, "Hide Past Movies"),
  // populate list of filter buttons with unique genres
  uniqueGenres.map(uniqueGenre => /*#__PURE__*/React.createElement("button", {
    onClick: () => {
      props.handleClick(uniqueGenre);
      setIsHidden(true);
    }
  },
  // capitalise first letter of each word in button
  uniqueGenre.charAt(0).toUpperCase() + uniqueGenre.slice(1))));
}
export default function MovieLi(props) {
  return !props.isHidden &&
  /*#__PURE__*/
  //if movie id is within the selected array, give it a selected class
  React.createElement("div", {
    className: `movie-card ${props.selectedMoviesId.includes(props.id) && 'selected'}`,
    onClick: () => props.onSelect(props.id)
  }, /*#__PURE__*/React.createElement("img", {
    src: props.imgUrl,
    alt: "#"
  }), /*#__PURE__*/React.createElement("li", null, props.title, " (", props.year, ") - ", props.genre.charAt(0).toUpperCase() + props.genre.slice(1)), /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      alert(props.rating);
    }
  }, "Click To See Rating"));
}
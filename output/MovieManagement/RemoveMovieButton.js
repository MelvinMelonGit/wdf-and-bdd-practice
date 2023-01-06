export default function RemoveMovieButton(props) {
  return /*#__PURE__*/React.createElement("button", {
    className: "remove-movie",
    disabled: props.isButtonDisabled,
    onClick: () => {
      props.onButtonPressed();
    }
  }, "Click on Movie(s) first to Remove");
}
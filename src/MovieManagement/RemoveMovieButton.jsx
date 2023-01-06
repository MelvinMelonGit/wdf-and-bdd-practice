export default function RemoveMovieButton(props) {
    return (
        <button className="remove-movie"
        disabled={props.isButtonDisabled}
        onClick={() => {
          props.onButtonPressed();
        }}
      >
        Click on Movie(s) first to Remove
      </button>
    );
}
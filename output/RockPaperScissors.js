import RPSButtons from "./Practical 7/RPSButtons.js";
import RPSRecords from "./Practical 7/RPSRecords.js";
import RPSInput from "./Practical 7/RPSInput.js";
import recordsReducer from "./Practical 8/recordsReducer.js";
import { IsEmojiContext } from "./Practical 8/IsEmojiContext.js";
import { RecordsContext } from "./Practical 8/recordsContext.js";
function RockPaperScissors(props) {
  const [records, dispatch] = React.useReducer(recordsReducer, []);
  const [isEmoji, setIsEmoji] = React.useState(false);
  return /*#__PURE__*/React.createElement(RecordsContext.Provider, {
    value: records
  }, /*#__PURE__*/React.createElement(IsEmojiContext.Provider, {
    value: isEmoji
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Rock Paper Scissors"), /*#__PURE__*/React.createElement(RPSButtons, {
    onButtonPressed: function (move) {
      dispatch({
        name: "add",
        move: move
      });
    }
  }), /*#__PURE__*/React.createElement(RPSInput, {
    onAdd: function (move, result) {
      dispatch({
        name: "force add",
        move: move,
        result: result
      });
    }
  }), /*#__PURE__*/React.createElement("button", {
    onClick: function () {
      setIsEmoji(!isEmoji);
    }
  }, "Toggle Emoji"), /*#__PURE__*/React.createElement(RPSRecords, {
    onClickRecord: function (index) {
      dispatch({
        name: "remove",
        index: index
      });
    }
  }))));
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render( /*#__PURE__*/React.createElement(RockPaperScissors, null));
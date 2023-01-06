import { RecordsContext } from "../Practical 8/recordsContext.js";
import RPSButton from "./RPSButton.js";
const moves = ['Rock', 'Paper', 'Scissors'];
export default function RPSButtons(props) {
  const records = React.useContext(RecordsContext);
  return /*#__PURE__*/React.createElement("div", null, moves.map(function (move) {
    return /*#__PURE__*/React.createElement(RPSButton, {
      records: records.filter(function (record) {
        return !record.deleted && record.move === move;
      }),
      move: move,
      onButtonPressed: props.onButtonPressed
    });
  }));
}
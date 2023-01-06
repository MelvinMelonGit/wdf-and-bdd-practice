import { emoji, IsEmojiContext } from "../Practical 8/IsEmojiContext.js";
import { RecordsContext } from "../Practical 8/recordsContext.js";
export default function RPSRecords(props) {
  const isEmoji = React.useContext(IsEmojiContext);
  const records = React.useContext(RecordsContext);
  const numberOfRecords = records.filter(function (record) {
    return !record.deleted;
  }).length;
  const numberOfWin = records.filter(function (record) {
    return !record.deleted && record.result === 'Win';
  }).length;
  const winPercentage = numberOfWin / numberOfRecords * 100;
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Records (Win %: ", isNaN(winPercentage) ? 0 : winPercentage, "%): "), /*#__PURE__*/React.createElement("ol", null, records.map(function (record, index) {
    return !record.deleted && /*#__PURE__*/React.createElement("li", {
      onClick: function () {
        props.onClickRecord(index);
      }
    }, record.result, " (", isEmoji ? emoji[record.move] : record.move, ")");
  })));
}
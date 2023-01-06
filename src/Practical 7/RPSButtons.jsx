import { RecordsContext } from '../Practical 8/recordsContext';
import RPSButton from './RPSButton';

const moves = ['Rock', 'Paper', 'Scissors'];

export default function RPSButtons(props) {
    const records = React.useContext(RecordsContext);
    return (
        <div>
            {moves.map(function (move) {
                return (
                    <RPSButton
                        records={records.filter(function (record) {
                            return !record.deleted && record.move === move;
                        })}
                        move={move}
                        onButtonPressed={props.onButtonPressed}
                    />
                );
            })}
        </div>
    );
}
import Square from "./Square";
import "./Board.css";

function Board(props) {
    return (
        <div className="board">
            <div className="board-row">
                <Square id={0} value={props.boardValues[0]} />
                <Square id={1} value={props.boardValues[1]} />
                <Square id={2} value={props.boardValues[2]} />
            </div>
            <div className="board-row">
                <Square id={3} value={props.boardValues[3]} />
                <Square id={4} value={props.boardValues[4]} />
                <Square id={5} value={props.boardValues[5]} />
            </div>
            <div className="board-row">
                <Square id={6} value={props.boardValues[6]} />
                <Square id={7} value={props.boardValues[7]} />
                <Square id={8} value={props.boardValues[8]} />
            </div>
        </div>
    );
}

export default Board;
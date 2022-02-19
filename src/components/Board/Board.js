import Square from "./Square";
import "./Board.css";

function Board(props) {    
    return (
        <div className="board">
            <div className="board-row">
                <Square id={0} value={props.boardValues[0]} changeGameState={props.changeGameState}/>
                <Square id={1} value={props.boardValues[1]} changeGameState={props.changeGameState}/>
                <Square id={2} value={props.boardValues[2]} changeGameState={props.changeGameState}/>
            </div>
            <div className="board-row">
                <Square id={3} value={props.boardValues[3]} changeGameState={props.changeGameState}/>
                <Square id={4} value={props.boardValues[4]} changeGameState={props.changeGameState}/>
                <Square id={5} value={props.boardValues[5]} changeGameState={props.changeGameState}/>
            </div>
            <div className="board-row">
                <Square id={6} value={props.boardValues[6]} changeGameState={props.changeGameState}/>
                <Square id={7} value={props.boardValues[7]} changeGameState={props.changeGameState}/>
                <Square id={8} value={props.boardValues[8]} changeGameState={props.changeGameState}/>
            </div>
        </div>
    );
}

export default Board;
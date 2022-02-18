import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import "./GameStatus.css";

function GameStatus(props){
    return (
        <div className="status">
          <p>Next Turn : <span class={props.nextTurn ? "red":"blue"}>Player {props.nextTurn ? "X" : "O"}</span></p>
          <button><FontAwesomeIcon icon={faArrowRotateRight} /> Reset</button>
        </div>
    );
}

export default GameStatus;
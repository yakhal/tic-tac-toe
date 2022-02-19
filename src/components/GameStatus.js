import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import "./GameStatus.css";

function GameStatus(props) {
  // If Game is not over
  let element = null;
  if (!props.isGameOver)
    element = (
      <p>
        Next Turn : <span className={props.nextTurn ? "red" : "blue"}>
          Player {props.nextTurn ? "X" : "O"}
        </span>
      </p>);
  // If Game is over
  else {
    // If no winner (null) --> Draw, else --> Declare winner
    element =
      (<p>
        {props.winner === null ?
          "Draw!" :
          <span className={props.winner ? "red" : "blue"}>
            Player {props.winner ? "X" : "O"} won!
          </span>}
      </p>);
  }
  return (
    <div className="status">
      {element}
      <button onClick={props.resetGame}><FontAwesomeIcon icon={faArrowRotateRight} /> Reset</button>
    </div>
  );
}

export default GameStatus;
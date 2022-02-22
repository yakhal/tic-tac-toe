import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import GameResult from './GameResult'
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
    element =
      (
        <GameResult winner={props.winner} resetGame={props.resetGame}></GameResult>
      );
  }

  // Reset Button will be displayed based on whether the Game is over or not
  return (
    <div className="status">
      {element}
      {
        !props.isGameOver
        &&
        <button onClick={props.resetGame}><FontAwesomeIcon icon={faArrowRotateRight} /> Reset</button>
      }
    </div>
  );
}

export default GameStatus;
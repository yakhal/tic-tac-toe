import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRotateRight } from '@fortawesome/free-solid-svg-icons';
import Circle from "./Board/circle";
import Cross from "./Board/cross";
import "./GameResult.css";

function GameResult(props) {
    // Decide Image for Draw State OR icon for winning player
    const image =
        props.winner === null ?
            <div><Cross /><Circle /></div> :
            props.winner ?
                <Cross /> :
                <Circle />;

    const message =
        props.winner === null ?
            "Hmm, tough game!" :
            "Hehe... I Won";

    return (
        <div className="overlay">
            <div className="game-result">
                <div>
                    {image}
                </div>
                <p className='game-result-message'>{message}</p>
                <button onClick={props.resetGame}><FontAwesomeIcon icon={faArrowRotateRight} /> Play Again</button>
            </div>
        </div>
    );
}

export default GameResult;
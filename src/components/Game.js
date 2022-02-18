import React from 'react';
import GameHeader from './GameHeader';
import Board from './Board/Board';
import GameStatus from './GameStatus';
import "./Game.css";

class Game extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            board: new Array(9).fill(null),
            isGameOver: false,
            nextTurn: 1
        }
    }

    render() {
        return (
            <div className="game">
                <GameHeader/>
                <Board boardValues={this.state.board}></Board>
                <GameStatus nextTurn={this.state.nextTurn}/>
            </div>
        );
    }
}

export default Game;    
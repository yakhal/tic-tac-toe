import React from 'react';
import GameHeader from './GameHeader';
import Board from './Board/Board';
import GameStatus from './GameStatus';
import "./Game.css";

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: new Array(9).fill(null),
            isGameOver: false,
            nextTurn: 1,
            winner: null
        }
        this.changeGameState = this.changeGameState.bind(this);
        this.resetGame = this.resetGame.bind(this);
    }

    changeGameState(index) {
        // Copy the current state and make changes in the copied state
        const newState = {
            ...this.state
        }
        if (!newState.isGameOver) {
            // Make changes only when cell value is null
            if (newState.board[index] === null) {
                newState.board[index] = newState.nextTurn;
                // Get Winner 
                newState.winner = this.checkWinner(newState.board);
                newState.nextTurn = newState.nextTurn ? 0 : 1;
                // Game is over - When board is full or winner exists
                if (
                    newState.winner !== null ||
                    newState.board.every((item) => (item !== null))
                )
                    newState.isGameOver = true;
            }
        }
        // Update state at once
        this.setState(newState)
    }

    checkWinner(board) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (board[a] !== null && board[a] === board[b] && board[a] === board[c]) {
                return board[a];
            }
        }
        return null;
    }

    resetGame() {
        this.setState({
            board: new Array(9).fill(null),
            isGameOver: false,
            nextTurn: 1,
            winner: null
        })
    }

    render() {
        return (
            <div className="game">
                <GameHeader />
                <Board
                    changeGameState={this.changeGameState}
                    boardValues={this.state.board}
                />
                <GameStatus
                    winner={this.state.winner}
                    isGameOver={this.state.isGameOver}
                    nextTurn={this.state.nextTurn}
                    resetGame={this.resetGame}
                />
            </div>
        );
    }
}

export default Game;    
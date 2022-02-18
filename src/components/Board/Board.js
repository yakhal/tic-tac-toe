import React from "react";
import Square from "./Square";
import "./Board.css";

class Board extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="board">
                <div className="board-row">
                    <Square id={0} value={this.props.boardValues[0]}/>
                    <Square id={1} value={this.props.boardValues[1]}/>
                    <Square id={2} value={this.props.boardValues[2]}/>
                </div>
                <div className="board-row">
                    <Square id={3} value={this.props.boardValues[3]}/>
                    <Square id={4} value={this.props.boardValues[4]}/>
                    <Square id={5} value={this.props.boardValues[5]}/>
                </div>
                <div className="board-row">
                    <Square id={6} value={this.props.boardValues[6]}/>
                    <Square id={7} value={this.props.boardValues[7]}/>
                    <Square id={8} value={this.props.boardValues[8]}/>
                </div>
            </div>
        )
    }
}

export default Board;
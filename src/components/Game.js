import React from "react";
import Board from "./Board";
import './style.css'

class Game extends React.Component {
    render() {
        return (
            <div>
                <div className='game-board'>
                <Board/>
                </div>
            </div>
        )
    }
}

export default Game;
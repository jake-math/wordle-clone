import React, {useContext} from 'react';
import {AppContext} from "../App";

function GameOver() {
    const {correctWord, currAttempt, gameOver} = useContext(AppContext);
    return (
        <div className="gameOver">
            <h3>{gameOver.won ? "Congrats! You correctly guessed the word!" : "Sorry! Better luck next time!"}</h3>
            <h1>Correct: {correctWord.toUpperCase()}</h1>
            {gameOver.won && <h3>You guessed in {currAttempt.attempt} attempts.</h3>}
        </div>
    );
}

export default GameOver;
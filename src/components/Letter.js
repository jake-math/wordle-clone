import React, {useContext, useEffect} from 'react';
import { AppContext } from '../App';  // Correctly import AppContext

function Letter({ letterPos, attemptVal }) {
    const { board, correctWord, currAttempt, setDisabledLetters } = useContext(AppContext);  // Ensure you're using AppContext here
    const letter = board[attemptVal][letterPos];

    const correct = correctWord.toUpperCase()[letterPos] === letter;
    const almost = !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

    const letterState = currAttempt.attempt > attemptVal && (correct ? "correct" : almost ? "almost" : "error");

    useEffect(() => {
        if (letter !== "" && !correct && !almost) {
            console.log(letter);
            setDisabledLetters((prev) => [...prev, letter]);
        }
    }, [currAttempt.attempt]);
    
    return (
        <div className="letter" id={letterState}> {letter} </div>
    );
}

export default Letter;

import { useState } from "react";
const useWordle = () =>{
    const [turns, setTurns] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [history, setHistory] = useState([]);
    const [guesses, setGuesses] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
     const formatGuess = (guess) => {}
     const addNewGuess = (guess) => {}
     const handleKeyup = (guess) => {}

}
export default useWordle;
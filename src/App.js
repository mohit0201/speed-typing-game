import React from 'react';
import './App.css';
import useWordGameElements from "./hooks/useWordGameElements"

function App() {

  const {
        textBoxRef,
        handleChange,
        textInput,
        isTimeRunning,
        timeRemaining,
        startGame,
        wordCount
    } = useWordGameElements(20)

    return (
    <div className="App">
        <h1>How fast do you type?</h1>
        <h4>Time remaining: {timeRemaining}</h4>
        <textarea
            ref={textBoxRef}
            onChange={handleChange}
            value={textInput}
            disabled={!isTimeRunning}
        />
        <button
            onClick={startGame}
            disabled={isTimeRunning}
        >
          Start
        </button>
        <h1>Word count: {wordCount}</h1>
    </div>
  );
}

export default App;

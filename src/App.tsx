import React from 'react';
import useQuizLogic from './hooks/useQuizLogic';

function App() {
  const { startTrivia } = useQuizLogic();

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
    </div>
  );
}

export default App;

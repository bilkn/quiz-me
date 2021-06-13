import React from 'react';
import useQuizLogic from './hooks/useQuizLogic';
import { QuestionCard } from './components';

function App() {
  const { startTrivia, nextQuestion } = useQuizLogic();

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
      <QuestionCard />
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;

import React from 'react';
import useQuizLogic from './hooks/useQuizLogic';
import { QuestionCard } from './components';

function App() {
  const {
    startTrivia,
    nextQuestion,
    checkAnswer,
    number,
    userAnswers,
    questions,
    gameOver,
    loading,
    TOTAL_QUESTIONS,
  } = useQuizLogic();

  return (
    <div>
      <h1>REACT QUIZ</h1>
      <button className="start" onClick={startTrivia}>
        Start
      </button>
      <p className="score">Score:</p>
      <p>Loading Questions ...</p>
    {/*   <QuestionCard
        questionNumber={number + 1}
        totalQuestions={TOTAL_QUESTIONS}
        question={questions[number].question}
        answers={questions[number].answers}
        userAnswer={userAnswers ? userAnswers[number] : undefined}
        callback={checkAnswer}
      /> */}
      <button className="next" onClick={nextQuestion}>
        Next Question
      </button>
    </div>
  );
}

export default App;

import React from "react";
import useQuizLogic from "./hooks/useQuizLogic";
import { QuestionCardContainer } from "./containers";
import  "styled-components/macro";
import Flex from "./components/flex";

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
    score,
    TOTAL_QUESTIONS,
  } = useQuizLogic();

  return (
    <Flex direction="column" justify="center">
      <h1>REACT QUIZ</h1>
      {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
        <button className="start" onClick={startTrivia}>
          Start
        </button>
      ) : null}
      {!gameOver ? <p className="score">Score: {score}</p> : null}
      {loading && <p>Loading Questions ...</p>}

      {!loading && !gameOver && (
        <QuestionCardContainer
          questionNumber={number + 1}
          totalQuestions={TOTAL_QUESTIONS}
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswers ? userAnswers[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!gameOver &&
      !loading &&
      userAnswers.length === number + 1 &&
      number !== TOTAL_QUESTIONS - 1 ? (
        <button className="next" onClick={nextQuestion}>
          Next Question
        </button>
      ) : null}
    </Flex>
  );
}

export default App;

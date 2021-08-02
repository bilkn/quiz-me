import React from "react";
import useQuizLogic from "./hooks/useQuizLogic";
import { QuestionCardContainer } from "./containers";
import "styled-components/macro";
import Flex from "./components/flex";
import { QuestionCard } from "./components";
import { devices } from "./styles/devices";

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
    <Flex direction="column" css="min-height:100vh;">
      <QuestionCard.Title>QUIZ ME!</QuestionCard.Title>
      <Flex
        direction="column"
        css={`
          margin: auto;
          max-width: 290px;
          width: auto;
          @media ${devices.tablet} {
            max-width: 600px;
          }
        `}
      >
        {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <QuestionCard.Button
            variant="secondary"
            className="start"
            onClick={startTrivia}
            css="width:150px; margin:auto;"
          >
            Start
          </QuestionCard.Button>
        ) : null}
        {!gameOver && !loading ? (
          <Flex css="margin-top:1em;">
            <QuestionCard.Display>
              Question: {number + 1} / {TOTAL_QUESTIONS}
            </QuestionCard.Display>
            <QuestionCard.Display className="score" css="margin-left:auto;">
              Score: {score}
            </QuestionCard.Display>
          </Flex>
        ) : null}
        {loading && <QuestionCard.Text>Loading Questions...</QuestionCard.Text>}

        {!loading && !gameOver && (
          <QuestionCardContainer
            question={questions[number].question}
            nextQuestion={nextQuestion}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
        )}
        {!gameOver &&
        !loading &&
        userAnswers.length === number + 1 &&
        number !== TOTAL_QUESTIONS - 1 ? (
          <QuestionCard.Button className="next" onClick={nextQuestion} css="margin-top:1em;">
            Next Question
          </QuestionCard.Button>
        ) : null}
      </Flex>
    </Flex>
  );
}

export default App;

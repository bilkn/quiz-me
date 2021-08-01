import { CancelTokenSource } from "axios";
import React, { useState } from "react";
import { fetchQuizQuestions, Difficulty, QuestionState } from "../API";

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const TOTAL_QUESTIONS = 10;

function useQuizLogic() {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);
  
  const startTrivia = async () => {
    setLoading(true);
    setGameOver(false);
    let cancelTokenObj: null | CancelTokenSource;
    try {
      const { data, cancelToken } = await fetchQuizQuestions(
        TOTAL_QUESTIONS,
        Difficulty.MEDIUM
      );
      setQuestions(data);
      cancelTokenObj = cancelToken;
      setQuestions(data);
      reset();
    } catch (err) {
      console.log(err);
    }
  };

  const reset = () => {
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore((prevScore) => prevScore + 1);
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL_QUESTIONS) {
      return setGameOver(true);
    }
    setNumber(nextQuestion);
  };
  return {
    startTrivia,
    checkAnswer,
    nextQuestion,
    gameOver,
    score,
    number,
    userAnswers,
    loading,
    questions,
    TOTAL_QUESTIONS,
  };
}

export default useQuizLogic;

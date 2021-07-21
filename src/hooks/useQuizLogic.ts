import { CancelTokenSource } from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from '../API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};
const TOTAL_QUESTIONS = 10;

function useQuizLogic() {
  console.log();
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
      console.log(data);
      cancelTokenObj = cancelToken;
      setQuestions(data);
      setScore(0)
      setUserAnswers([])
      setNumber(0);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
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
    TOTAL_QUESTIONS
  };
}

export default useQuizLogic;

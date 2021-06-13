import { CancelTokenSource } from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchQuizQuestions, Difficulty, QuestionState } from '../API';

type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

function useQuizLogic() {
  console.log();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    let cancelTokenObj: null | CancelTokenSource;
    const fetchData = async () => {
      const { data, cancelToken } = await fetchQuizQuestions(
        10,
        Difficulty.MEDIUM
      );
      console.log(data);
      cancelTokenObj = cancelToken;
      setQuestions(data);
    };
    try {
      fetchData();
    } catch (err) {
      console.log(err);
    }
    return () => {
      cancelTokenObj?.cancel();
    };
  }, []);

  const startTrivia = async () => {};

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {};

  const nextQuestion = () => {};
  return {
    startTrivia,
    checkAnswer,
    nextQuestion,
    number,
    userAnswers,
    questions,
  };
}

export default useQuizLogic;

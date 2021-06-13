import { CancelTokenSource } from 'axios';
import React, { useEffect, useState } from 'react';
import { fetchQuizQuestions, Difficulty } from '../API';

function useQuizLogic() {
  console.log();
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  useEffect(() => {
    let cancelTokenObj: null | CancelTokenSource;
    const fetchData = async () => {
      const { data, cancelToken } = await fetchQuizQuestions(
        10,
        Difficulty.MEDIUM
      );
      console.log(data)
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

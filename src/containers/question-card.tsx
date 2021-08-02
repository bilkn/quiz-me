import React, { useCallback, useEffect, useState } from "react";
import "styled-components/macro";
import { QuestionCard } from "../components";
import { AnswerObject } from "../hooks/useQuizLogic";

const defaultTime = "00:45";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
};

const QuestionCardContainer: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
}) => {
  const [timer, setTimer] = useState(defaultTime);

  const decreaseTime = () => {
    setTimer((oldTime) => `00:${+oldTime.split(":")[1] - 1 + ""}`);
  };

  const startTimer = useCallback(() => {
    return setInterval(decreaseTime, 1000);
  }, []);

  useEffect(() => {
    const interval = startTimer();
    return () => clearInterval(interval);
  }, [startTimer]);

  useEffect(() => {
    setTimer("00:45");
  }, [question]);

  return (
    <QuestionCard>
      <QuestionCard.TimerContainer>
        <QuestionCard.Timer>{timer}</QuestionCard.Timer>
      </QuestionCard.TimerContainer>
      <QuestionCard.Text dangerouslySetInnerHTML={{ __html: question }} />
      <QuestionCard.Box>
        {answers.map((answer, i) => (
          <QuestionCard.Button
            key={answer}
            disabled={!!userAnswer}
            value={answer}
            onClick={callback}
            css={`
              ${userAnswer && answer === userAnswer.answer
                ? userAnswer.correct
                  ? "border: 2px solid green;"
                  : "border: 2px solid red;"
                : ""}
            `}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </QuestionCard.Button>
        ))}
      </QuestionCard.Box>
    </QuestionCard>
  );
};

export default QuestionCardContainer;

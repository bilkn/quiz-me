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
  nextQuestion: Function;
  end: boolean;
};

const QuestionCardContainer: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  nextQuestion,
  end,
}) => {
  const [timer, setTimer] = useState(defaultTime);

  const decreaseTime = useCallback(() => {
    if (timer === "00:00") nextQuestion();
    setTimer((oldTime) => {
      const oldTimeInseconds = +oldTime.split(":")[1];
      const newTimeInSeconds = +timer.split(":")[1];
      return `00:${
        (newTimeInSeconds <= 10 ? "0" : "") + (oldTimeInseconds - 1 + "")
      }`;
    });
  }, [nextQuestion, timer]);

  const startTimer = useCallback(() => {
    return setInterval(decreaseTime, 1000);
  }, [decreaseTime]);

  useEffect(() => {
    let interval: any = null;
    if (!end) {
      interval = startTimer();
    }
    else setTimer("(0_0)")
    return () => clearInterval(interval);
  }, [startTimer,end]);

  useEffect(() => {
    setTimer(defaultTime);
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

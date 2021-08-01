import React from "react";
import "styled-components/macro";
import { QuestionCard } from "../components";
import { AnswerObject } from "../hooks/useQuizLogic";

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
}) => (
  <QuestionCard>
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

export default QuestionCardContainer;

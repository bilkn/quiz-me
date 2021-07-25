import React from "react";
import { QuestionCard } from "../components";
import { AnswerObject } from "../hooks/useQuizLogic";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNumber: number;
  totalQuestions: number;
};

const QuestionCardContainer: React.FC<Props> = ({
  question,
  answers,
  callback,
  userAnswer,
  questionNumber,
  totalQuestions,
}) => (
  <QuestionCard>
    <QuestionCard.Display>
      Question: {questionNumber} / {totalQuestions}
    </QuestionCard.Display>
    <QuestionCard.Text dangerouslySetInnerHTML={{ __html: question }} />
    <QuestionCard.Box>
      {answers.map((answer) => (
        <div key={answer}>
          <QuestionCard.Button
            disabled={!!userAnswer}
            value={answer}
            onClick={callback}
          >
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </QuestionCard.Button>
        </div>
      ))}
    </QuestionCard.Box>
  </QuestionCard>
);

export default QuestionCardContainer;

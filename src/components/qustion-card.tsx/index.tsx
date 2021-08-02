import {
  Container,
  Wrapper,
  Title,
  Text,
  Display,
  TimerContainer,
  Timer,
  Box,
  Button,
} from "./styles/question-card";

import { iProps } from "../../interfaces";

function QuestionCard({ children, ...rest }: iProps) {
  return <Container {...rest}>{children}</Container>;
}

QuestionCard.Wrapper = function QuestionCardWrapper({
  children,
  ...rest
}: iProps) {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

QuestionCard.Title = function QuestionCardTitle({ children, ...rest }: iProps) {
  return <Title {...rest}>{children}</Title>;
};

QuestionCard.Text = function QuestionCardText({ children, ...rest }: iProps) {
  return <Text {...rest}>{children}</Text>;
};

QuestionCard.TimerContainer = function QuestionCardTimerContainer({
  children,
  ...rest
}: iProps) {
  return <TimerContainer {...rest}>{children}</TimerContainer>;
};

QuestionCard.Timer = function QuestionCardTimer({ children, ...rest }: iProps) {
  return <Timer {...rest}>{children}</Timer>;
};

QuestionCard.Display = function QuestionCardDisplay({
  children,
  ...rest
}: iProps) {
  return <Display {...rest}>{children}</Display>;
};

QuestionCard.Button = function QuestionCardButton({
  children,
  ...rest
}: iProps) {
  return <Button {...rest}>{children}</Button>;
};

QuestionCard.Box = function QuestionCardBox({ children, ...rest }: iProps) {
  return <Box {...rest}>{children}</Box>;
};

export default QuestionCard;

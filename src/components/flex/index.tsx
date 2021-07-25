import React from "react";
import { Container } from "./styles/flex";
import { iProps } from "../../interfaces";

function Flex({ children, ...rest }: iProps) {
  return <Container {...rest}>{children}</Container>;
}

export default Flex;

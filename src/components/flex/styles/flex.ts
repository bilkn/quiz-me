import styled from "styled-components/macro";

interface Props {
  align?: "string";
  flexBasis?: "string";
  direction?: "string";
  justify?: "string";
  width?: "string";
}

export const Container = styled.div<Props>`
  ${({ flexBasis }) => flexBasis && `flex-basis: ${flexBasis};`}
  align-items: ${({ align }) => align || "center"};
  display: flex;
  flex-direction: ${({ direction }) => direction || "initial"};
  justify-content: ${({ justify }) => justify};
  width: ${({ width }) => width || "100%"};
`;

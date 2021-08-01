import styled from "styled-components/macro";
import { devices } from "../../../styles/devices";
import { colors, fonts, shadows } from "../../../styles/variables";

interface BTN_PROPS {
  variant?: "secondary";
}

export const Container = styled.div`
  align-items: center;
  background-color: ${colors.secondary};
  border-radius: 7px;
  box-shadow: ${shadows.common};
  display: flex;
  flex-direction: column;
  margin-top: 1em;
  max-width: 290px;
  padding: 2em;

  @media ${devices.tablet} {
    max-width: 550px;
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  color: white;
  font-family: ${fonts.handlee};
  margin-top: 1em;
`;

export const Text = styled.p`
  font-size: 1.3rem;
  text-align: center;

  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
`;

export const Display = styled.p`
  color: white;
`;

export const Box = styled.div`
  display: grid;
  margin-top: 2em;
  gap: 1em;
  grid-template-columns: repeat(1, 200px);
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 200px);
  }
`;

export const Button = styled.button`
  background-color: ${({ variant }:BTN_PROPS) =>
    variant === "secondary" ? colors.secondary : colors.extra3};
  border-radius: 5px;
  box-shadow: ${shadows.common};
  font-size: 1.3rem;
  padding: 0.6em 1.5em;
  text-align: center;
  width: 100%;

  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
`;

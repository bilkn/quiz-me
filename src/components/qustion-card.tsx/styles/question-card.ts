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
  margin-top: 2em;
  padding: 2em;
  position: relative;

  @media ${devices.tablet} {
    margin-top: 1em;
  }
`;

export const Wrapper = styled.div``;

export const Title = styled.h1`
  color: white;
  font-family: ${fonts.handlee};
  font-size: 3.5rem;
  margin-top: 1em;

  @media ${devices.tablet} {
    font-size: 5.5rem;
  }
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
  font-size: 1.4rem;
`;

export const TimerContainer = styled.div`
  background-color: white;
  border-radius: 7px;
  bottom: calc(100% - 20px);
  box-shadow: ${shadows.common};
  left: 50%;
  padding: 0.5em;
  position: absolute;
  text-align: center;
  transform: translateX(-50%);
  width: 90px;
`;

export const Timer = styled.p`
  font-size: 1.4rem;
  letter-spacing: 1px;
`;

export const Box = styled.div`
  display: grid;
  margin-top: 2em;
  gap: 1em;
  grid-template-columns: repeat(1, 200px);
  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 250px);
  }
`;

export const Button = styled.button`
  background-color: ${({ variant }: BTN_PROPS) =>
    variant === "secondary" ? colors.secondary : colors.extra3};
  border-radius: 5px;
  box-shadow: ${shadows.common};
  font-size: 1.3rem;
  padding: 0.6em 1.5em;
  text-align: center;
  transition: background-color 150ms;
  width: 100%;

  &:hover,
  &:focus {
    background-color: ${({ variant }: BTN_PROPS) =>
      variant === "secondary" ? colors.secondaryLight : colors.extra3Light};
  }
  @media ${devices.tablet} {
    font-size: 1.5rem;
  }
`;

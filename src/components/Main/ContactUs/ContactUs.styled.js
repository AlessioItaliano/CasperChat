import 'animate.css';
import styled from 'styled-components';

import { vars } from 'utils/variables';

import contactUsMen from 'images/contactUsMen.jpeg';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 48px;
  height: 518px;

  border-radius: 12px;
  background: linear-gradient(
      84deg,
      #2a63ed 34.79%,
      rgba(42, 99, 237, 0) 60.85%
    ),
    url(${contactUsMen}) -26px -87.951px / 104.069% 140.028%;

  background-color: ${vars.background.bgMain};
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 25% 25%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 10px;

  width: 340px;
  height: auto;

  opacity: 1;
  animation: zoomInRight 2s forwards;

  @keyframes zoomInRight {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  color: ${vars.colors.white};

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 3.12em;
  text-transform: uppercase;
`;

export const TitleDescription = styled.p`
  color: ${vars.colors.white};

  font-size: 40px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25em;
`;

export const LinkContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Link = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 158px;
  height: 57px;

  cursor: pointer;

  color: ${vars.colors.secondaryText};
  border-radius: 50px;
  background-color: ${vars.colors.white};

  font-family: inherit;

  &:hover,
  &:focus {
    color: ${vars.colors.accent};
    background-color: ${vars.colors.lightBlue};
  }
`;

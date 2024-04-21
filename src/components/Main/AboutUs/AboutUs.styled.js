import 'animate.css';
import styled from 'styled-components';

import { vars } from 'utils/variables';

import team from 'images/team.png';

export const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 48px;
  height: 518px;

  border-radius: 12px;
  background: linear-gradient(
    0deg,
    #f5f9ff 0%,
    rgba(217, 217, 217, 0) 100%,
    #fff 100%
  );

  background-color: ${vars.background.bgMain};
  background-image: url(${team});
  background-repeat: no-repeat;
  background-position: right;
  transform: scaleX(-1);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 340px;
  height: auto;

  opacity: 1;
  animation: zoomInLeft 2s forwards;

  @keyframes zoomInLeft {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Title = styled.h2`
  color: ${vars.colors.black};

  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: 3.12em;
  text-transform: uppercase;
  transform: scaleX(-1);
`;

export const TitleDescription = styled.p`
  color: ${vars.colors.secondaryText};

  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.62em;
  transform: scaleX(-1);
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
  background: ${vars.colors.white};

  font-family: inherit;
`;

import 'animate.css';
import styled from 'styled-components';

import { vars } from 'utils/variables';

import mapPlanet from 'icons/planet.svg';

export const Section = styled.section`
  padding: 30px 0;
`;

export const Background = styled.div`
  display: flex;
  align-items: center;

  flex-direction: column;
  justify-content: space-between;
  border-radius: 12px;
  margin-left: auto;
  margin-right: auto;
  position: relative;

  background-color: ${vars.background.bgSecondary};

  padding: 80px;
`;

export const Container = styled.div`
  display: flex;
  height: inherit;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  gap: 24px;

  width: 500px;
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 500;
  line-height: 1.16em;

  color: ${vars.colors.secondaryText};

  opacity: 1;
  animation: backInLeft 1s forwards;

  @keyframes backInLeft {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const Description = styled.p`
  line-height: 1.62em;

  color: ${vars.colors.mainText};
`;

export const ImageContainer = styled.div`
  position: relative;

  display: flex;
  justify-content: center;
  width: 726px;
  height: auto;

  background-image: url(${mapPlanet});
  background-repeat: no-repeat;
  background-size: 726px;
  background-position: center;
`;

export const Image = styled.img`
  position: absolute;
  z-index: 2;
  bottom: -80px;

  width: 518px;
  height: 617px;
  flex-shrink: 0;
`;

export const MessagePosition = styled.div`
  position: absolute;
  z-index: 3;
  top: ${props => props.$positionVertical};
  right: ${props => props.$positionHorizontal};

  opacity: 1;
  animation: zoomInUp 3s forwards;

  @keyframes zoomInUp {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

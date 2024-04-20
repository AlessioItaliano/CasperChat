import styled from 'styled-components';

import { vars } from 'utils/variables';

import backgroundSVG from 'icons/background.svg';

export const Port = styled.main`
  min-height: 100vh;
  height: 100%;

  background-color: ${vars.background.bgMain};

  background-image: url(${backgroundSVG});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

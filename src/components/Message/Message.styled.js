import styled from 'styled-components';

import { vars } from 'utils/variables';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 75px;
  width: 100%;
  max-width: 767px;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    min-width: 768px;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    max-width: 1440px;
  }
`;

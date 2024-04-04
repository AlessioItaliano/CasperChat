import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Section = styled.section`
  padding: 60px 0;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding: 80px 0;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 90px 0;
  }
`;

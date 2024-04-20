import styled from 'styled-components';

import { vars } from 'utils/variables';

export const Section = styled.section`
  padding: 30px 0;

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding: 30px 0;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 30px 0;
  }
`;

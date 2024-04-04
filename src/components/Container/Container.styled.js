import styled from 'styled-components';

import { vars } from 'stylesheet/variables';

export const Container = styled.div`
  padding: 0 72px;
  margin: 0 auto;
  min-width: ${vars.breakpoints.mobileMin};
  max-width: ${vars.breakpoints.mobileMax};

  @media screen and (min-width: ${vars.breakpoints.tablet}) {
    padding: 0 88px;
    min-width: 768px;
  }
  @media screen and (min-width: ${vars.breakpoints.desktop}) {
    padding: 0 124px;
    max-width: 1280px;
  }
`;

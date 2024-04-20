import styled from 'styled-components';
import { vars } from 'utils/variables';

export const LoaderStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;

  position: fixed;
  top: 0;
  left: 0;

  background-color: ${vars.colors.backdrop};
`;

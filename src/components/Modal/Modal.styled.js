import styled from 'styled-components';

import { vars } from '../../stylesheet/variables';

export const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;

  background-color: grey;
`;

export const ModalField = styled.div`
  position: relative;

  width: calc(100% - 30px);
  // max-width: 541px;
  height: auto;
  // max-height: calc(100vh - 30px);

  padding: 40px 20px 20px 20px;
  overflow-y: auto;

  border-radius: 24px;

  background-color: ${vars.background.bgSecondary};
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  cursor: pointer;
  border: none;

  background-color: transparent;
`;

// export const IconBtn = styled(CloseIconBtn)`
//   width: 100%;
//   height: 100%;

//   color: ${variables.colors.black};
// `;

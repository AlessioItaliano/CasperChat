import styled, { css } from 'styled-components';
import { vars } from 'utils/variables';

// export const Wrapper = styled.div`
//   // width: 500px;
//   // height: 60vh;
//   background-color: lightgrey;
//   border: 1px solid black;
//   overflow-y: auto;
//   padding: 10px;
//   width: 100%;
//   max-width: calc(100% / 1.5);

//   border: none;
//   border-radius: 12px;

//   background-color: ${vars.background.bgSecondary};
// `;

export const Wrapper = styled.div`
  display: flex;
  // flex-direction: column;
  // gap: 10px;
  // max-width: calc(100% / 1.5);
  // width: fit-content;

  justify-content: ${({ $ownMessage }) =>
    $ownMessage ? 'flex-end' : 'flex-start'};
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  // max-width: calc(100% / 2);
  gap: 10px;
  background-color: ${vars.colors.primaryMsm};
  padding: 10px;
  border-radius: 8px;
  margin: 5px;
  max-width: calc(100% / 1.5);
  width: fit-content;

  ${({ $ownMessage }) =>
    $ownMessage &&
    css`
      background-color: ${vars.colors.secondaryMsm};
    `}
`;

export const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
`;

export const UserName = styled.h2`
  font-size: 16px;
  font-weight: 600;
`;

export const Description = styled.p`
  font-size: 18px;
`;

export const DownloadFile = styled.img`
width:100%
  // width: 250px;
  height: auto;
`;

export const TimeContainer = styled.div`
  display: flex;
  justify-content: right;
`;

export const Time = styled.p`
  font-size: 14px;
`;

import styled, { css } from 'styled-components';
import { vars } from 'utils/variables';

export const Wrapper = styled.div`
  width: 500px;
  height: 60vh;
  background-color: lightgrey;
  border: 1px solid black;
  overflow-y: auto;
  padding: 10px;

  border: none;
  border-radius: 12px;

  background-color: ${vars.background.bgSecondary};
`;

export const Message = styled.div`
  display: flex;
  justify-content: ${({ $ownMessage }) =>
    $ownMessage ? 'flex-end' : 'flex-start'};
`;

export const UserMessage = styled.div`
  background-color: ${vars.colors.primaryMsm};
  padding: 10px;
  border-radius: 8px;
  margin: 5px;

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
  font-size: 14px;
`;

export const DownloadFile = styled.img`
  width: 250px;
  height: auto;
`;

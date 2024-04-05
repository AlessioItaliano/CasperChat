import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 10px;

  // padding: 15px 0;
  width: 100%;
`;

export const Chat = styled.div`
  width: 500px;
  height: 60vh;
  background-color: lightgrey;
  border: 1px solid black;
  overflow-y: auto;
`;

export const Form = styled.form`
  display: flex;
  gap: 5px;
  align-items: center;
  width: 500px;
`;

export const Input = styled.input`
  width: 100%;
  height: auto;
  padding: 10px;
`;

export const ChatMessage = styled.div`
  display: flex;
  justify-content: ${({ $ownMessage }) =>
    $ownMessage ? 'flex-end' : 'flex-start'};
`;

export const Message = styled.div`
  background-color: #f0f0f0;
  padding: 10px;
  border-radius: 8px;
  margin: 5px;

  ${({ $ownMessage }) =>
    $ownMessage &&
    css`
      background-color: #dcf8c6;
    `}
`;

export const Box = styled.div`
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

import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  padding: 15px 0;
  width: 100%;
`;

export const Chat = styled.div`
  width: 500px;
  height: 60vh;
  background-color: lightgrey;
  border: 1px solid black;
  overflow-y: auto;
`;

export const Form = styled.form``;

export const Input = styled.input``;

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

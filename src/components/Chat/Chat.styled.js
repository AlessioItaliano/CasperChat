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

export const IconWrapper = styled.input`
  background: inherit;
  border: none;
  cursor: pointer;
  width: 30px;
  height: auto;
`;

export const AddIconLabel = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;
export const AddIconInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const ChoiceContainer = styled.div`
  display: flex;
  align-item: center;
  justify-item: center;
  flex-direction: column;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-item: center;
  justify-item: center;
  gap: 10px;
`;

export const PreDownload = styled.div`
  width: 250px;
  height: 250px;

  position: relative;
`;

export const DownloadFile = styled.img`
  width: 250px;
  height: auto;
`;

export const DeleteIcon = styled.button`
  // width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 5px;
  right: 5px;

  border-radius: 50%;
  border: none;
  background-color: red;

  cursor: pointer;

  &:focus,
  &:hover {
    color: white;
    border: 0.5px solid white;
  }
`;

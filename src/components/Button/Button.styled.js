import styled from 'styled-components';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 11px 21px;

  cursor: pointer;

  border-radius: 5px;
  border: none;
  background: lightgrey;

  color: black;

  font-size: 16px;
  font-weight: 500;

  &:focus,
  &:hover,
  &:active {
    color: red;
  }
`;

import styled from 'styled-components';
import { vars } from 'utils/variables';

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 12px 45px;

  cursor: pointer;

  border: none;

  border-radius: 5px;
  background-color: ${vars.colors.darkBlue};

  color: ${vars.colors.white};

  font-family: inherit;
  font-size: 14px;
  font-weight: 900;
  line-height: 1.85em;

  &:focus,
  &:hover,
  &:active {
    background-color: ${vars.colors.accent};
  }

  &:disabled {
    cursor: not-allowed;
    background-color: ${vars.colors.lightBlue};
  }
`;

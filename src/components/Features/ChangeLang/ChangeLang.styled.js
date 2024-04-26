import styled from 'styled-components';
import { vars } from 'utils/variables';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;

  height: 40px;
  width: 160px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  cursor: pointer;
  padding: 1px;
  width: 30px;
  height: 30px;

  border: none;
  border-radius: 50px;
  background-color: inherit;

  &:focus,
  &:hover {
    box-shadow: 0px 0px 3px 3px ${vars.colors.white};
  }

  ${({ $selected }) =>
    $selected &&
    `
  box-shadow: 0px 0px 3px 3px ${vars.colors.white};
  `}
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

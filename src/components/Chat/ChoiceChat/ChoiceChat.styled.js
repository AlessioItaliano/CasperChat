import styled from 'styled-components';

import { vars } from 'utils/variables';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  gap: 30px;

  // padding: 48px;
  height: 80vh;
  // background-color: ${vars.background.bgTertiary};
  background-color: inherit;
  border-radius: 12px;
`;

export const Title = styled.p`
  color: ${vars.colors.secondaryText};

  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.62em;
  text-transform: uppercase;
`;

export const Form = styled.form`
  display: flex;
  gap: 5px;
  align-items: center;
`;

export const Input = styled.input`
  height: auto;
  padding: 15px;
  border-radius: 12px;
  border: none;
  width: 223px;
`;

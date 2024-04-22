import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: ${props => props.$formSize};
`;

export const Input = styled.input`
  height: auto;
  padding: 15px;
  border-radius: 12px;
  border: none;
  width: 100%;
`;

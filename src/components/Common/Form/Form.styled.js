import styled from 'styled-components';

export const Form = styled.form`
  position: relative;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  width: ${props => props.$formSize};
`;

export const Input = styled.input`
  height: auto;
  padding: ${props =>
    props.$paddingLeft ? `15px 15px 15px ${props.$paddingLeft}` : '15px'};
  border-radius: 12px;
  border: none;
  width: 100%;
`;

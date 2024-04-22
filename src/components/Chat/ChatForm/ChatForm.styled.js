import styled from 'styled-components';
// import { vars } from 'utils/variables';

export const Wrapper = styled.div`
  position: relative;
`;

export const AddIcon = styled.div`
  position: absolute;
  top: 17px;
  right: 150px;
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: 500;
  color: black;
  text-decoration: underline;
  cursor: pointer;
`;
export const Input = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

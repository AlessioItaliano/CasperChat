import styled from 'styled-components';

import { vars } from 'utils/variables';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 17px;
  gap: 10px;

  background-color: ${vars.colors.white};
  border-radius: 7px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.1);
`;

export const Ellipse = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: none;
  background-color: ${vars.colors.lightBlue};
`;

export const Message = styled.div`
  display: flex;
  align-items: left;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;

export const Name = styled.p`
  font-size: 14px;
  font-style: normal;
  font-weight: 700;

  color: ${vars.colors.accent};
`;

export const Description = styled.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 500;

  color: ${vars.colors.secondaryText};
`;

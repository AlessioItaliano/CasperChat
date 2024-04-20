import styled from 'styled-components';
import { vars } from 'stylesheet/variables';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;

  height: 120px;
  width: 1280px;

  margin: auto;
  padding: 20px;
  background-color: transparent;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 10px;
  padding-right: 10px;
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const UserName = styled.p`
  font-size: 16px;
  font-weight: 700;
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
  background-color: ${vars.colors.accent};

  font-size: 14px;
  font-weight: 600;
  color: ${vars.colors.white};
`;

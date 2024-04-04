import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;

  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  z-index: 100;

  height: auto;
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

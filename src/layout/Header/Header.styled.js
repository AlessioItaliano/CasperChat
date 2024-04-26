import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 90px;
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
  font-weight: 700;
`;

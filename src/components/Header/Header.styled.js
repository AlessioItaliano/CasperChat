import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;

  border-radius: 0 0 10px 10px;

  background-color: skyblue;
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding-left: 10px;
  padding-right: 10px;
`;

export const Link = styled(NavLink)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;

  padding: 11px 21px;

  cursor: pointer;

  border-radius: 5px;
  border: none;

  font-weight: 500;
  font-size: 16px;
  color: black;

  &:focus,
  &:hover,
  &:active {
    color: red;
  }
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

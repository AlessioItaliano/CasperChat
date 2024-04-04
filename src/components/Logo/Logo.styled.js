import styled from 'styled-components';

import { NavLink } from 'react-router-dom';

export const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  color: black;

  &:hover,
  &:focus {
    color: red;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 5px;
`;

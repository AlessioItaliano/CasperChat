import styled from 'styled-components';

import { NavLink } from 'react-router-dom';
import { vars } from 'utils/variables';

export const Link = styled(NavLink)`
  font-size: 24px;
  font-weight: 600;
  color: ${props =>
    props.theme === 'light' ? vars.colors.white : vars.colors.black};

  &:hover,
  &:focus {
    color: ${props =>
      props.theme === 'light' ? vars.colors.red : vars.colors.accent};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-decoration: none;
  gap: 5px;
`;

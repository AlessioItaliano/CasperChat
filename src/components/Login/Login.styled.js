import styled from "styled-components";

import { NavLink } from "react-router-dom";

import { variables } from "stylesheet/variables";

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0 4px 4px ${variables.colors.boxShadow};
  border-radius: 0 0 10px 10px;

  background-color: ${variables.colors.bgHeader};
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 15px 75px;
  width: 100%;
  max-width: 767px;

  @media screen and (min-width: ${variables.breakpoints.tablet}) {
    min-width: 768px;
  }
  @media screen and (min-width: ${variables.breakpoints.desktop}) {
    max-width: 1440px;
  }
`;

export const Logo = styled(NavLink)`
  display: flex;
  width: 70px;
  height: auto;
  gap: 5px;

  cursor: pointer;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
`;

export const Nav = styled.nav``;

export const Link = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  font-size: 16px;
  color: ${variables.colors.primary};

  &.active,
  &:hover {
    color: ${variables.colors.tertiary};
    text-decoration: underline;
  }
`;

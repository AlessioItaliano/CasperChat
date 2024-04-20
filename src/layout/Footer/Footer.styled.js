import styled from 'styled-components';
import { vars } from 'utils/variables';

export const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 10px 20px;

  margin-right: auto;
  margin-left: auto;

  background: ${vars.colors.accent};
`;

export const CopyRight = styled.p`
  color: ${vars.colors.white};
  font-size: 16px;
  line-height: 1.71;
`;

export const Link = styled.a`
  text-decoration: underline;
  color: ${vars.colors.lightBlue};
`;

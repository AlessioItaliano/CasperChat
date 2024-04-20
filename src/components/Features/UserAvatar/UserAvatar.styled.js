import styled from 'styled-components';

import { vars } from 'utils/variables';

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

export const Avatar = styled.img`
  display: block;
  object-fit: cover;
  height: 100%;
  object-position: 50% 50%;
`;

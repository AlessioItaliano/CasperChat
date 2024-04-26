import { IoLogoSnapchat } from 'react-icons/io';

import * as s from './Logo.styled';

const Logo = ({ theme }) => {
  return (
    <s.Link to="/" aria-label="Company logo" theme={theme}>
      <s.Container>
        <IoLogoSnapchat />
        CasperCHAT
      </s.Container>
    </s.Link>
  );
};

export default Logo;

import { IoLogoSnapchat } from 'react-icons/io';

import * as s from './Logo.styled';

const Logo = () => {
  return (
    <s.Link to="/" aria-label="Company logo">
      <s.Container>
        <IoLogoSnapchat />
        CasperCHAT
      </s.Container>
    </s.Link>
  );
};

export default Logo;

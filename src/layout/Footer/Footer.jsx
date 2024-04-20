import * as s from './Footer.styled';

const Footer = () => {
  return (
    <s.Footer>
      <s.CopyRight>
        This website is created for informational and educational purposes.{' '}
      </s.CopyRight>
      <s.CopyRight>
        Copyright © 2024 CasperCHAT. Created by{' '}
        <s.Link href="https://www.linkedin.com/in/vasyl-lepish/">
          Vasyl Lepish
        </s.Link>
      </s.CopyRight>
    </s.Footer>
  );
};

export default Footer;

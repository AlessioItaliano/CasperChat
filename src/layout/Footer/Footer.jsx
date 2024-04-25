import { useTranslation } from 'react-i18next';

import * as s from './Footer.styled';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <s.Footer>
      <s.CopyRight>{t('footer')}</s.CopyRight>
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

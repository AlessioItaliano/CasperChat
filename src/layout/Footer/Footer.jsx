import { useTranslation } from 'react-i18next';

import Logo from 'components/Features/Logo';
import ChangeLang from 'components/Features/ChangeLang';

import * as s from './Footer.styled';

const Footer = () => {
  const { t } = useTranslation();
  return (
    <s.Footer>
      <s.Container>
        <Logo theme="light" />
        <ChangeLang />
      </s.Container>

      <s.CopyRightContainer>
        <s.CopyRight>{t('footer')}</s.CopyRight>
        <s.CopyRight>
          Copyright © 2024 CasperCHAT. Created by{' '}
          <s.Link href="https://www.linkedin.com/in/vasyl-lepish/">
            Vasyl Lepish
          </s.Link>
        </s.CopyRight>
      </s.CopyRightContainer>
    </s.Footer>
  );
};

export default Footer;

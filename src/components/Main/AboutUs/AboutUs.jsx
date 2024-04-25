import { useTranslation } from 'react-i18next';

import Section from 'components/Base/Section';
import Container from 'components/Base/Container';

import * as s from './AboutUs.styled';

const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <s.Container>
          <s.Description>
            <s.Title>{t('aboutUs')}</s.Title>
            <s.TitleDescription>{t('aboutUsDescription')}</s.TitleDescription>
          </s.Description>
        </s.Container>
      </Container>
    </Section>
  );
};

export default AboutUs;

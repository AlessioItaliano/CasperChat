import { useTranslation } from 'react-i18next';

import Section from 'components/Base/Section';
import Container from 'components/Base/Container';

import * as s from './ContactUs.styled';

const ContactUs = () => {
  const { t } = useTranslation();
  return (
    <Section>
      <Container>
        <s.Container>
          <s.Description>
            <s.Title>{t('contactUs')}</s.Title>
            <s.TitleDescription>{t('contactUsDescription')}</s.TitleDescription>
            <s.LinkContainer>
              <s.Link
                href="mailto:info@casperchat.help.com"
                aria-label="Write email info@casperchat.help.com"
              >
                {t('button.sentEmail')}
              </s.Link>
              <s.Link href="tel:+380730000000" aria-label="Call +380730000000">
                {t('button.callUs')}
              </s.Link>
            </s.LinkContainer>
          </s.Description>
        </s.Container>
        ;
      </Container>
    </Section>
  );
};

export default ContactUs;

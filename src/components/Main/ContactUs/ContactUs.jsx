import * as s from './ContactUs.styled';
import Section from 'components/Base/Section';
import Container from 'components/Base/Container';
import { contactUs } from 'data/mainText';

const ContactUs = () => {
  return (
    <Section>
      <Container>
        <s.Container>
          <s.Description>
            <s.Title>Contact us</s.Title>
            <s.TitleDescription>{contactUs.description}</s.TitleDescription>
            <s.LinkContainer>
              <s.Link
                href="mailto:info@casperchat.help.com"
                aria-label="Write email info@casperchat.help.com"
              >
                Send email
              </s.Link>
              <s.Link href="tel:+380730000000" aria-label="Call +380730000000">
                Call us
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

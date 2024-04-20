import * as s from './AboutUs.styled';
import Section from 'components/Base/Section';
import Container from 'components/Base/Container';
import { aboutUs } from 'data/mainText';

const AboutUs = () => {
  return (
    <Section>
      <Container>
        <s.Container>
          <s.Description>
            <s.Title>About us</s.Title>
            <s.TitleDescription>{aboutUs.description}</s.TitleDescription>
          </s.Description>
        </s.Container>
      </Container>
    </Section>
  );
};

export default AboutUs;

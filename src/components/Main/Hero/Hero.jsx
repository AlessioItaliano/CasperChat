import { TypeAnimation } from 'react-type-animation';

import { NavLink } from 'react-router-dom';
import Button from 'components/Common/Button';
import * as s from './Hero.styled';
import { heroDescription, heroMessages } from 'data/mainText';
import heroMen from 'images/heroMen.png';
import { vars } from 'utils/variables';
import HeroMessage from '../HeroMessage';

const Hero = () => {
  return (
    <s.Section>
      <s.Background>
        <s.Container>
          <s.TitleContainer>
            <s.Title>{heroDescription.title}</s.Title>
            <TypeAnimation
              style={{
                whiteSpace: 'pre-line',
                height: '100px',
                display: 'block',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '1.62em',
                color: `${vars.colors.mainText}`,
              }}
              sequence={[`${heroDescription.description}`, 2000]}
              repeat={0}
            />
            <NavLink to="/login">
              <Button name="Let's start" />
            </NavLink>
          </s.TitleContainer>

          <s.ImageContainer>
            {/* <ImageItem item={}} /> */}
            <s.Image src={heroMen} alt="happy_writing_message_men" />
            {heroMessages.map(msm => (
              <s.MessagePosition
                key={msm.name}
                $positionVertical={msm.positionVertical}
                $positionHorizontal={msm.positionHorizontal}
              >
                <HeroMessage name={msm.name} msm={msm.description} />
              </s.MessagePosition>
            ))}
          </s.ImageContainer>
        </s.Container>
      </s.Background>
    </s.Section>
  );
};

export default Hero;

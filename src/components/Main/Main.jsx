import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';

// import Section from 'components/Section';
// import Container from 'components/Container';
import Button from 'components/Button';
import * as s from './Main.styled';

const Main = () => {
  return (
    <s.Container>
      <TypeAnimation
        style={{ whiteSpace: 'pre-line', height: '57px', display: 'block' }}
        sequence={[
          `Greetings from the friendly Casper Chat!\nHere, everyone finds their place and trustworthy friends.\nJoin us and feel the warmth of our hearts!`,
          1000,
        ]}
        repeat={0}
      />
      <div>
        <p>Get started:</p>
        <NavLink to="/login">
          <Button name="Log in" />
        </NavLink>
      </div>
    </s.Container>
  );
};

export default Main;

// import { useContext } from 'react';
// import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { Context } from 'index';
import { TypeAnimation } from 'react-type-animation';
import { NavLink } from 'react-router-dom';

import Button from 'components/Button';
import * as s from './Main.styled';
// import Button from 'components/Button';

const Main = () => {
  return (
    <s.Container>
      <TypeAnimation
        style={{ whiteSpace: 'pre-line', height: '57px', display: 'block' }}
        sequence={[
          `Greetings from the friendly Casper Chat!\nHere, everyone finds their place and trustworthy friends.\nJoin us and feel the warmth of our hearts!`,
        ]}
        speed={10}
        repeat={Infinity}
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

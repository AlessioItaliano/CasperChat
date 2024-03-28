import Button from 'components/Button';
import { NavLink } from 'react-router-dom';
import * as s from './Header.styled';
import { useContext } from 'react';
import { Context } from 'index';
import { useAuthState } from 'react-firebase-hooks/auth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const Header = () => {
  const { auth } = useContext(Context);
  const [user] = useAuthState(auth);

  const logIn = async () => {
    const user = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log(user);
  };

  const signOut = () => {
    auth.signOut();
  };

  return (
    <s.Header>
      <s.Container>
        {user ? (
          <>
            <p>Ciao, {user.displayName}</p>
            <Button name="Exit" func={signOut} />
          </>
        ) : (
          <NavLink to="/">
            <Button func={logIn} name="Log in" />
          </NavLink>
        )}
      </s.Container>
    </s.Header>
  );
};

export default Header;

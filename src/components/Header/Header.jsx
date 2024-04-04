import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../FirebaseConfig';

import Logo from 'components/Logo';
import Button from 'components/Button';

import * as s from './Header.styled';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  const signOut = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <s.Header>
      <Logo />

      <s.Container>
        {user !== null ? (
          <s.UserContainer>
            <s.UserName>Welcome, {user.displayName}</s.UserName>
            <Button func={signOut} name={'Logout'} type={'button'} />
          </s.UserContainer>
        ) : null}
      </s.Container>
    </s.Header>
  );
};

export default Header;

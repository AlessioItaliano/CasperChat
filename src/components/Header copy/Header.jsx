import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from '../../FirebaseConfig';

import Logo from 'components/Logo';
import Button from 'components/Button';

import * as s from './Header.styled';

const Header = () => {
  const [user, setUser] = useState(null);
  const [bigLetter, setBigLetter] = useState('');
  const navigate = useNavigate();
  // const firstLetter = user.displayName.slice(0, 1);
  // const bigFirstLetter = firstLetter.toUpperCase();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        const firstLetter = user.displayName.slice(0, 1);
        const bigFirstLetter = firstLetter.toUpperCase();
        setBigLetter(bigFirstLetter);
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
            <Ellipse>{bigLetter}</Ellipse>
            <s.UserName>Welcome, {user.displayName}</s.UserName>
            <Button func={signOut} name={'Logout'} type="button" />
          </s.UserContainer>
        ) : null}
      </s.Container>
    </s.Header>
  );
};

export default Header;

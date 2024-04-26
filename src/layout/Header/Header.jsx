import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { onAuthStateChanged } from 'firebase/auth';

import { auth } from 'FirebaseConfig';

import Logo from 'components/Features/Logo';
import Button from 'components/Common/Button';
import UserAvatar from 'components/Features/UserAvatar';

import * as s from './Header.styled';

const Header = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

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
      <Logo theme="dark" />
      <s.Container>
        {user !== null ? (
          <s.UserContainer>
            <UserAvatar user={user} />
            <s.UserName>
              {t('welcome')}, {user.displayName}
            </s.UserName>
            <Button func={signOut} name={t('button.logOut')} type="button" />
          </s.UserContainer>
        ) : null}
      </s.Container>
    </s.Header>
  );
};

export default Header;

import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
// import Select from 'react-select';

// import { orderBy, query, onSnapshot, collection } from 'firebase/firestore';
import { auth } from 'FirebaseConfig';

import Logo from 'components/Features/Logo';
import Button from 'components/Common/Button';
import UserAvatar from 'components/Features/UserAvatar';
import ChangeLang from 'components/Features/ChangeLang';

import * as s from './Header.styled';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const [user, setUser] = useState(null);
  // const [userRooms, setUserRooms] = useState('');
  // const [selectedRoom, setSelectedRoom] = useState('');
  const navigate = useNavigate();

  const { t } = useTranslation();

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        console.log(user);
        // const storedRoom = localStorage.getItem('room');
        // setSelectedRoom(storedRoom);
      } else {
        setUser(null);
        // localStorage.removeItem('room');
        // setRoom('');
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
      <ChangeLang />
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

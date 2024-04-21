import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
// import Select from 'react-select';

// import { orderBy, query, onSnapshot, collection } from 'firebase/firestore';
import { auth } from '../../FirebaseConfig';

import Logo from 'components/Features/Logo';
import Button from 'components/Common/Button';
import UserAvatar from 'components/Features/UserAvatar';

import * as s from './Header.styled';

const Header = () => {
  const [user, setUser] = useState(null);
  // const [userRooms, setUserRooms] = useState('');
  // const [selectedRoom, setSelectedRoom] = useState('');
  const navigate = useNavigate();

  // console.log(selectedRoom);

  // const handleCreateRoom = () => {
  //   const newRoom = nanoid();

  // const handleSelectRoom = selectedRoom => {
  //   setSelectedRoom(selectedRoom);
  //   localStorage.setItem('room', selectedRoom.value); // Зберігаємо значення кімнати у локальному сховищі за ключем 'room'
  // };

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        // const storedRoom = localStorage.getItem('room');
        // setSelectedRoom(storedRoom);
      } else {
        setUser(null);
        // localStorage.removeItem('room');
        // setRoom('');
      }
    });
  }, []);

  // useEffect(() => {
  //   const q = query(collection(db, 'messages'), orderBy('timestamp'));

  //   const unsubscribe = onSnapshot(q, snapshot => {
  //     setUserRooms(
  //       snapshot.docs
  //         .filter(doc => doc.data().uid === user.uid)
  //         .map((doc, index) => ({
  //           value: doc.data().room,
  //           label: `Room ${index + 1}`,
  //         }))
  //     );
  //   });

  //   return unsubscribe;
  // }, [user]);

  const signOut = () => {
    auth.signOut();
    navigate('/');
  };

  return (
    <s.Header>
      <Logo />

      {/* <Select
        options={userRooms}
        value={selectedRoom}
        onChange={handleSelectRoom}
      /> */}
      <s.Container>
        {user !== null ? (
          <s.UserContainer>
            <UserAvatar user={user} />
            <s.UserName>Welcome, {user.displayName}</s.UserName>
            <Button func={signOut} name={'Logout'} type="button" />
          </s.UserContainer>
        ) : null}
      </s.Container>
    </s.Header>
  );
};

export default Header;

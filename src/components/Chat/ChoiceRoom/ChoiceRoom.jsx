import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {
  orderBy,
  query,
  onSnapshot,
  collection,
  where,
  getDocs,
} from 'firebase/firestore';

import { db } from 'FirebaseConfig';

import Button from 'components/Common/Button';
import ChoiceRoomSelect from '../ChoiceRoomSelect';

import * as s from './ChoiceRoom.styled';
import Form from 'components/Common/Form';

const ChoiceRoom = ({ setRoom, user }) => {
  const [roomNumber, setRoomNumber] = useState('');
  const [userRooms, setUserRooms] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));

    const unsubscribe = onSnapshot(q, snapshot => {
      setUserRooms(
        snapshot.docs
          .filter(doc => doc.data().uid === user.uid)
          .map((doc, index) => ({
            value: doc.data().room,
            label: `Room ${index + 1}`,
          }))
      );
    });

    return unsubscribe;
  }, [user]);

  const handleCreateRoom = () => {
    const newRoom = nanoid();
    setRoom(newRoom);
    localStorage.setItem('room', newRoom);

    Notify.success('Room has been created!');
  };

  const handleSelectRoom = selectedRoom => {
    setSelectedRoom(selectedRoom.value);
    localStorage.setItem('room', selectedRoom.value);
    setRoom(selectedRoom.value);

    Notify.success('Welcome back!');
  };

  const handleAcceptInvitationToRoom = async e => {
    e.preventDefault();

    const roomExists = await checkRoomExists(roomNumber);

    if (roomExists) {
      localStorage.setItem('room', roomNumber);
      setRoom(roomNumber);
      Notify.success('Welcome aboard!');
    } else {
      Notify.failure('Room does not exist. Please enter a valid room number.');
    }
  };

  const checkRoomExists = async roomNumber => {
    try {
      const q = query(
        collection(db, 'messages'),
        where('room', '==', roomNumber)
      );
      const roomSnapshot = await getDocs(q);
      return !roomSnapshot.empty;
    } catch (error) {
      console.error('Error checking room existence:', error);
      return false;
    }
  };

  return (
    <s.Container>
      <s.Title>Do you want create new room ?</s.Title>
      <Button
        func={handleCreateRoom}
        name="Create room"
        type="button"
        size={'291px'}
      />

      <s.Title>---------- or ---------</s.Title>
      <s.Title>You already have privet rooms?</s.Title>
      <ChoiceRoomSelect
        options={userRooms}
        selectedRoom={selectedRoom}
        onSelectRoom={handleSelectRoom}
      />

      <s.Title>---------- or ---------</s.Title>
      <s.Title>You already have invitation?</s.Title>
      <Form
        onSubmit={handleAcceptInvitationToRoom}
        inputValue={roomNumber}
        onFormChange={e => setRoomNumber(e.target.value)}
        formPlaceholder={'Insert your invitation here...'}
        btnName={'Join'}
        formSize={'291px'}
      />
    </s.Container>
  );
};

export default ChoiceRoom;

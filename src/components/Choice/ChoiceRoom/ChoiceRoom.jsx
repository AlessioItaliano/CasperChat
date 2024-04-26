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

import Form from 'components/Common/Form';
import Button from 'components/Common/Button';
import ChoiceRoomSelect from 'components/Choice/ChoiceRoomSelect';
import { useTranslation } from 'react-i18next';

import * as s from './ChoiceRoom.styled';

const ChoiceRoom = ({ setRoom, user }) => {
  const [roomNumber, setRoomNumber] = useState('');
  const [userRooms, setUserRooms] = useState('');
  const [selectedRoom, setSelectedRoom] = useState('');
  const { t } = useTranslation();

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));

    const unsubscribe = onSnapshot(q, snapshot => {
      const userRoomDocs = snapshot.docs.filter(
        doc => doc.data().uid === user.uid
      );
      const existingRooms = {};
      const userRoomsData = userRoomDocs.reduce((acc, doc) => {
        const roomValue = doc.data().room;

        if (!existingRooms[roomValue]) {
          existingRooms[roomValue] = true;

          acc.push({
            value: roomValue,
            label: `Room ${acc.length + 1}`,
          });
        }
        return acc;
      }, []);

      setUserRooms(userRoomsData);
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
      <s.Title>{t('createRoomTitle')}</s.Title>
      <Button
        func={handleCreateRoom}
        name={t('button.createRoom')}
        type="button"
        size={'291px'}
      />

      <s.Title>---------- {t('or')} ---------</s.Title>
      <s.Title>{t('selectRoomTitle')}</s.Title>
      <ChoiceRoomSelect
        options={userRooms}
        selectedRoom={selectedRoom}
        onSelectRoom={handleSelectRoom}
        selectPlaceholder={t('selectFormPlaceholder')}
      />

      <s.Title>---------- {t('or')} ---------</s.Title>
      <s.Title>{t('joinRoomTitle')}</s.Title>
      <Form
        onSubmit={handleAcceptInvitationToRoom}
        inputValue={roomNumber}
        onFormChange={e => setRoomNumber(e.target.value)}
        formPlaceholder={t('joinFormPlaceholder')}
        btnName={t('button.join')}
        formSize={'291px'}
      />
    </s.Container>
  );
};

export default ChoiceRoom;

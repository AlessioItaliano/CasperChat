import { useState, useEffect } from 'react';

import { nanoid } from 'nanoid';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import { orderBy, query, onSnapshot, collection } from 'firebase/firestore';

import { db } from 'FirebaseConfig';

import Button from 'components/Common/Button';

import * as s from './ChoiceChat.styled';
import ChoiceChatSelect from '../ChoiceChatSelect';

const ChoiceChat = ({ setRoom, user }) => {
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
    localStorage.setItem('room', selectedRoom);
    setRoom(selectedRoom);

    Notify.success('Welcome back!');
  };

  const handleAcceptInvitationToRoom = e => {
    e.preventDefault();
    localStorage.setItem('room', roomNumber);
    setRoom(roomNumber);

    Notify.success('Welcome aboard!');
  };

  return (
    <s.Container>
      <s.Title>Do you want create new room ?</s.Title>
      <Button
        func={handleCreateRoom}
        name="Create room"
        type="button"
        size={'340px'}
      />

      <s.Title>---------- or ---------</s.Title>
      <s.Title>You already have privet rooms?</s.Title>
      <ChoiceChatSelect
        options={userRooms}
        selectedRoom={selectedRoom}
        onSelectRoom={handleSelectRoom}
      />
      <s.Title>---------- or ---------</s.Title>
      <s.Title>You already have invitation?</s.Title>
      <s.Form onClick={handleAcceptInvitationToRoom}>
        <s.Input
          type="text"
          value={roomNumber}
          onChange={e => setRoomNumber(e.target.value)}
          placeholder="Insert your invitation here..."
        />
        <Button name="Join" type="submit" />
      </s.Form>
    </s.Container>
  );
};

export default ChoiceChat;

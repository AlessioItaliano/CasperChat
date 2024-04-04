import { useEffect, useState } from 'react';
import {
  // doc,
  // setDoc,
  addDoc,
  // getDoc,
  orderBy,
  query,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  collection,
} from 'firebase/firestore';
import { app, auth } from '../../FirebaseConfig';

import * as s from './Chat.styled';
import Button from 'components/Button';
import Section from 'components/Section';
import Container from 'components/Container';

const db = getFirestore(app);

const Chat = () => {
  const user = auth.currentUser;
  console.log(user);

  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
    });

    setNewMessage('');
  };

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
    return unsubscribe;
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage();
  };

  return (
    <Section>
      <Container>
        <s.Container>
          <s.Chat>
            <div>
              {messages.map(msg => (
                <s.ChatMessage
                  key={msg.id}
                  $ownMessage={msg.data.uid === user.uid}
                >
                  <s.Message $ownMessage={msg.data.uid === user.uid}>
                    <img src={msg.data.photoURL} alt="avatar_of_user" />
                    <p>{msg.data.displayName}</p>
                    {msg.data.text}
                  </s.Message>
                </s.ChatMessage>
              ))}
            </div>
          </s.Chat>
          <s.Form onSubmit={handleSubmit}>
            <s.Input
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
            />
            <Button name="submit" />
          </s.Form>
        </s.Container>
      </Container>
    </Section>
  );
};

export default Chat;

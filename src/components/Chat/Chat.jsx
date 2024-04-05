import { useEffect, useState, useRef } from 'react';
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
  const messagesEndRef = useRef(null);
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
    if (!user) return; // Перевірка, чи користувача вже аутентифіковано
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      scrollToBottom();
    });
    return unsubscribe;
  }, [user]);

  useEffect(() => {
    const q = query(collection(db, 'messages'), orderBy('timestamp'));
    const unsubscribe = onSnapshot(q, snapshot => {
      setMessages(
        snapshot.docs.map(doc => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
      scrollToBottom();
    });
    return unsubscribe;
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    sendMessage();
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Section>
      <Container>
        <s.Container>
          <s.Chat>
            <div>
              {messages.map(message => (
                <s.ChatMessage
                  key={message.id}
                  $ownMessage={message.data.uid === user.uid}
                >
                  <s.Message
                    $ownMessage={message.data.uid === user.uid}
                    ref={messagesEndRef}
                  >
                    <s.Box>
                      <s.Image
                        src={message.data.photoURL}
                        alt="avatar_of_user"
                      />
                      <s.UserName>{message.data.displayName}</s.UserName>
                    </s.Box>
                    <s.Description>{message.data.text}</s.Description>
                  </s.Message>
                </s.ChatMessage>
              ))}
            </div>
          </s.Chat>
          <s.Form onSubmit={handleSubmit}>
            <s.Input
              value={newMessage}
              onChange={e => setNewMessage(e.target.value)}
              placeholder="Insert your message here..."
            />
            <Button name="SENT" />
          </s.Form>
        </s.Container>
      </Container>
    </Section>
  );
};

export default Chat;

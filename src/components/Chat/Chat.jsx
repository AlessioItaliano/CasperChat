import { useEffect, useState, useRef } from 'react';
import {
  addDoc,
  orderBy,
  query,
  onSnapshot,
  serverTimestamp,
  collection,
  where,
} from 'firebase/firestore';
import {
  ref,
  uploadBytes,
  getDownloadURL,
  deleteObject,
} from 'firebase/storage';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db, storage } from '../../FirebaseConfig';
import { nanoid } from 'nanoid';

import Section from 'components/Base/Section';
import Container from 'components/Base/Container';
import ImageModal from 'components/ImageModal';
import ChoiceRoom from 'components/Chat/ChoiceRoom';
import ChatField from 'components/Chat/ChatField';
import ChatForm from 'components/Chat/ChatForm';
import ChatPreLoadModal from 'components/Chat/ChatPreLoadModal';
import ChatNavigation from 'components/Chat/ChatNavigation';

import * as s from './Chat.styled';

const Chat = () => {
  const [user, setUser] = useState(null);
  const messagesEndRef = useRef(null);
  const [room, setRoom] = useState('');
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');
  const [uploadDoc, setUploadDoc] = useState(null);
  const [imageList, setImageList] = useState('');
  const [sendToChat, setSendToChat] = useState(false);
  const [loadingImage, setLoadingImage] = useState(false);
  const [preUploadFile, setPreUploadFile] = useState('');
  const [shownModal, setShowModal] = useState(false);
  const [modalPicture, setModalPicture] = useState('');

  useEffect(() => {
    onAuthStateChanged(auth, user => {
      if (user) {
        setUser(user);
        const storedRoom = localStorage.getItem('room');
        setRoom(storedRoom);
      } else {
        setUser(null);
        localStorage.removeItem('room');
        setRoom('');
      }
    });
  }, []);

  const sendMessage = async () => {
    await addDoc(collection(db, 'messages'), {
      uid: user.uid,
      photoURL: user.photoURL,
      displayName: user.displayName,
      text: newMessage,
      timestamp: serverTimestamp(),
      room,
      file: imageList,
    });

    setNewMessage('');
  };

  useEffect(() => {
    const q = query(
      collection(db, 'messages'),
      where('room', '==', room),
      orderBy('timestamp')
    );
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
  }, [room]);

  const handleSubmit = async e => {
    e.preventDefault();

    if (newMessage.trim() === '' && imageList === '') {
      return;
    }

    await uploadFile();
    sendMessage();
    setSendToChat(false);
    setNewMessage('');

    setUploadDoc(null);
    setImageList('');
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const handleUpload = () => {
      if (uploadDoc) {
        uploadFile();
      }
    };

    handleUpload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadDoc]);

  const uploadFile = async () => {
    if (uploadDoc == null) return;
    setSendToChat(true);
    setLoadingImage(true);

    const imageName = uploadDoc.name + nanoid();
    setPreUploadFile(imageName);

    const imageRef = ref(storage, `images/room/${room}/${imageName}`);

    await uploadBytes(imageRef, uploadDoc)
      .then(snapshot => {
        getDownloadURL(snapshot.ref).then(url => {
          setImageList(url);
          setLoadingImage(false);
        });
      })
      .catch(error => {
        console.error('Error uploading file:', error);
        setLoadingImage(false);
      });

    setUploadDoc(null);
  };

  const deletePreLoad = () => {
    setSendToChat(false);

    setUploadDoc(null);
    setImageList('');
    deleteObject(ref(storage, `images/room/${room}/${preUploadFile}`));
  };

  const onModal = imageUrl => {
    setModalPicture(imageUrl);
    setShowModal(prevShownModal => !prevShownModal);
  };

  const handleSetRoom = selectedRoom => {
    setRoom(selectedRoom);
  };

  return (
    <Section>
      <Container>
        {!room ? (
          <ChoiceRoom setRoom={handleSetRoom} user={user} />
        ) : (
          <>
            <s.Container>
              <ChatNavigation room={room} setRoom={setRoom} />

              <ChatField
                messages={messages}
                user={user}
                messagesEndRef={messagesEndRef}
                onModal={onModal}
              />
              <ChatForm
                onSubmit={handleSubmit}
                inputValue={newMessage}
                onFormChange={e => setNewMessage(e.target.value)}
                formPlaceholder={'Insert your message here...'}
                btnName={'SENT'}
                btnDisabled={uploadDoc !== null}
                formSize={'500px'}
                onAddIcon={e => setUploadDoc(e.target.files[0])}
              />
              {sendToChat ? (
                loadingImage ? (
                  <p>Loading...</p>
                ) : (
                  <ChatPreLoadModal
                    onClose={deletePreLoad}
                    picture={imageList}
                    btnRemoveName={'DELETE FILE'}
                    btnSentName={'SENT'}
                    onSubmit={handleSubmit}
                  />
                )
              ) : null}
            </s.Container>
          </>
        )}
      </Container>
      {shownModal && <ImageModal onClose={onModal} picture={modalPicture} />}
    </Section>
  );
};

export default Chat;

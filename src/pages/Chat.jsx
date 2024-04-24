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
import { auth, db, storage } from 'FirebaseConfig';
import { nanoid } from 'nanoid';

import Section from 'components/Base/Section';
import Container from 'components/Base/Container';
import ChoiceRoom from 'components/Choice/ChoiceRoom';
import ChatRoom from 'components/Chat/ChatRoom';
import ChatImageModal from 'components/Chat/ChatImageModal';
import ChatPreLoadModal from 'components/Chat/ChatPreLoadModal';
import Loader from 'components/Common/Loader';

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
    });
    scrollToBottom();
    return unsubscribe;
  }, [room]);

  useEffect(() => {
    const handleUpload = () => {
      if (uploadDoc) {
        uploadFile();
      }
    };

    handleUpload();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [uploadDoc]);

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

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      block: 'end',
      inline: 'end',
      // behavior: 'smooth',
    });
  };

  const onModal = imageUrl => {
    setModalPicture(imageUrl);
    setShowModal(prevShownModal => !prevShownModal);
  };

  const handleSetRoom = selectedRoom => {
    setRoom(selectedRoom);
  };

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

  return (
    <Section>
      <Container>
        {!room ? (
          <ChoiceRoom setRoom={handleSetRoom} user={user} />
        ) : (
          <ChatRoom
            room={room}
            setRoom={setRoom}
            messages={messages}
            user={user}
            messagesEndRef={messagesEndRef}
            onModal={onModal}
            onSubmit={handleSubmit}
            formValue={newMessage}
            onFormChange={e => setNewMessage(e.target.value)}
            formPlaceholder={'Insert your message here...'}
            btnName={'SENT'}
            btnDisabled={uploadDoc !== null}
            formSize={'500px'}
            onAddIcon={e => setUploadDoc(e.target.files[0])}
          />
        )}
      </Container>
      {sendToChat ? (
        loadingImage ? (
          <Loader />
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
      {shownModal && (
        <ChatImageModal onClose={onModal} picture={modalPicture} />
      )}
    </Section>
  );
};

export default Chat;

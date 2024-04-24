import ChatField from 'components/Chat/ChatField';
import ChatForm from 'components/Chat/ChatForm';
import ChatNavigation from 'components/Chat/ChatNavigation';

import * as s from './ChatRoom.styled';

const ChatRoom = ({
  room,
  setRoom,
  messages,
  user,
  messagesEndRef,
  onModal,
  onSubmit,
  formValue,
  onFormChange,
  formPlaceholder,
  btnName,
  btnDisabled,
  formSize,
  onAddIcon,
}) => {
  return (
    <s.Container>
      <ChatNavigation room={room} setRoom={setRoom} />
      <ChatField
        messages={messages}
        user={user}
        messagesEndRef={messagesEndRef}
        onModal={onModal}
      />
      <ChatForm
        onSubmit={onSubmit}
        formValue={formValue}
        onFormChange={onFormChange}
        formPlaceholder={formPlaceholder}
        btnName={btnName}
        btnDisabled={btnDisabled}
        formSize={formSize}
        onAddIcon={onAddIcon}
      />
    </s.Container>
  );
};

export default ChatRoom;

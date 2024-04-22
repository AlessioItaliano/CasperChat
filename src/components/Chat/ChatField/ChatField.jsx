import ChatMessage from '../ChatMessage';

import * as s from './ChatField.styled';

const ChatField = ({ messages, user, messagesEndRef, onModal }) => {
  return (
    <s.Wrapper>
      {messages.map(message => (
        <ChatMessage
          key={message.id}
          message={message}
          user={user}
          messagesEndRef={messagesEndRef}
          onModal={onModal}
        />
      ))}
    </s.Wrapper>
  );
};

export default ChatField;

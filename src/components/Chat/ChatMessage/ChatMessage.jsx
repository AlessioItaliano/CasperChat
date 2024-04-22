import { useRef } from 'react';

import UserAvatar from 'components/Features/UserAvatar';

import * as s from './ChatMessage.styled';

const ChatMessage = ({ message, user, onModal }) => {
  const messagesEndRef = useRef(null);

  return (
    <s.Message $ownMessage={message.data.uid === user.uid} ref={messagesEndRef}>
      <s.UserMessage
        $ownMessage={message.data.uid === user.uid}
        ref={messagesEndRef}
      >
        <s.UserInfo>
          <UserAvatar user={message.data} />
          <s.UserName>{message.data.displayName}</s.UserName>
        </s.UserInfo>
        <s.Description>{message.data.text}</s.Description>

        {s.DownloadFile && message.data.file && (
          <s.DownloadFile
            src={message.data.file}
            alt="document_img"
            onClick={() => onModal(message.data.file)}
          />
        )}
      </s.UserMessage>
    </s.Message>
  );
};

export default ChatMessage;

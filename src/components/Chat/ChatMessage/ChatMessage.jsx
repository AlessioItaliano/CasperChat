import UserAvatar from 'components/Features/UserAvatar';
import { formattedTimestamp } from 'helpers/formattedTimestamp';

import * as s from './ChatMessage.styled';

const ChatMessage = ({ message, user, onModal, messagesEndRef }) => {
  return (
    <s.Wrapper $ownMessage={message.data.uid === user.uid}>
      <s.Message
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
        <s.TimeContainer>
          <s.Time>{formattedTimestamp(message.data.timestamp)}</s.Time>
        </s.TimeContainer>
      </s.Message>
    </s.Wrapper>
  );
};

export default ChatMessage;

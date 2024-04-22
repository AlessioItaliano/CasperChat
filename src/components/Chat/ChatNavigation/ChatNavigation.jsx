import { useState } from 'react';

import * as s from './ChatNavigation.styled';
import Button from 'components/Common/Button';

const ChatNavigation = ({ room, setRoom }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyRoomInvitation = async () => {
    await navigator.clipboard.writeText(room);
    setCopied(true);
  };

  const handleGoBack = () => {
    localStorage.removeItem('room');
    setRoom('');
  };

  return (
    <s.Container>
      <Button
        name={copied ? 'Copied!' : 'Click here to copy invitation'}
        type="button"
        func={handleCopyRoomInvitation}
      />
      <Button func={handleGoBack} name="Return" type="button" />
    </s.Container>
  );
};

export default ChatNavigation;

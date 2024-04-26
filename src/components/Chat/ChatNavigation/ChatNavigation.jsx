import { useState } from 'react';

import * as s from './ChatNavigation.styled';
import Button from 'components/Common/Button';
import { useTranslation } from 'react-i18next';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const ChatNavigation = ({ room, setRoom }) => {
  const [copied, setCopied] = useState(false);
  const { t } = useTranslation();

  const handleCopyRoomInvitation = async () => {
    await navigator.clipboard.writeText(room);
    Notify.success('Invitation is copied!');
    setCopied(true);
  };

  const handleGoBack = () => {
    localStorage.removeItem('room');
    setRoom('');
  };

  return (
    <s.Container>
      <Button
        name={copied ? t('chatCopied') : t('chatCopiedClicked')}
        type="button"
        func={handleCopyRoomInvitation}
      />
      <Button func={handleGoBack} name={t('button.return')} type="button" />
    </s.Container>
  );
};

export default ChatNavigation;

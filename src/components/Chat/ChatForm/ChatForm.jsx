// import { useState, useRef } from 'react';

import * as s from './ChatForm.styled';
import { FaPaperclip } from 'react-icons/fa6';
// import UserAvatar from 'components/Features/UserAvatar';
import Form from 'components/Common/Form';

const ChatForm = ({
  onSubmit,
  inputValue,
  onFormChange,
  formPlaceholder,
  btnName,
  btnDisabled,
  formSize,
  onAddIcon,
}) => {
  return (
    <s.Wrapper>
      <Form
        onSubmit={onSubmit}
        inputValue={inputValue}
        onFormChange={onFormChange}
        formPlaceholder={formPlaceholder}
        btnName={btnName}
        btnDisabled={btnDisabled}
        formSize={formSize}
      />
      <s.AddIcon>
        <s.Input
          type="file"
          accept="image/*"
          id="paperclip"
          onChange={onAddIcon}
        />
        <s.Label htmlFor="paperclip">
          <FaPaperclip />
        </s.Label>
      </s.AddIcon>
    </s.Wrapper>
  );
};

export default ChatForm;

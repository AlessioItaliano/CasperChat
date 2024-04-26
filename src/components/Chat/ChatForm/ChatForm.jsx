// import { useState, useRef } from 'react';

import * as s from './ChatForm.styled';
import { FaPaperclip } from 'react-icons/fa6';
// import UserAvatar from 'components/Features/UserAvatar';
import Form from 'components/Common/Form';

const ChatForm = ({
  onSubmit,
  formValue,
  onFormChange,
  formPlaceholder,
  btnName,
  btnDisabled,
  formSize,
  onAddIcon,
  paddingLeft,
}) => {
  return (
    <Form
      onSubmit={onSubmit}
      formValue={formValue}
      onFormChange={onFormChange}
      formPlaceholder={formPlaceholder}
      btnName={btnName}
      btnDisabled={btnDisabled}
      formSize={formSize}
      paddingLeft={paddingLeft}
    >
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
    </Form>
  );
};

export default ChatForm;

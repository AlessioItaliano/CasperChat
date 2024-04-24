import Modal from 'components/Common/Modal';

import * as s from './ChatImageModal.styled';

const ChatImageModal = ({ onClose, picture }) => {
  return (
    <Modal onClose={onClose}>
      <s.Image src={picture} alt="preLoad_img" />
    </Modal>
  );
};

export default ChatImageModal;

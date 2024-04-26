import Modal from 'components/Common/Modal';
import Button from 'components/Common/Button';

import * as s from './ChatPreLoadModal.styled';

const ChatPreLoadModal = ({
  onClose,
  picture,
  btnRemoveName,
  btnSentName,
  onSubmit,
}) => {
  return (
    <Modal onClose={onClose}>
      <s.Container>
        <s.Image src={picture} alt="preLoad_img" />
        <s.ButtonsContainer>
          <Button
            type={'button'}
            name={btnRemoveName}
            func={onClose}
            btnType={'remove'}
          />
          <Button type={'button'} name={btnSentName} func={onSubmit} />
        </s.ButtonsContainer>
      </s.Container>
    </Modal>
  );
};

export default ChatPreLoadModal;

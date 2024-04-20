import Modal from 'components/Common/Modal';
import * as s from './ImageModal.styled';

const ImageModal = ({ onClose, picture }) => {
  return (
    <Modal onClose={onClose}>
      <s.Image src={picture} alt="large_img" />
    </Modal>
  );
};

export default ImageModal;

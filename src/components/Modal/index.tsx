import React, { FC } from 'react';

import { ModalContent, CloseIcon, Overlay } from './styles';

type TModalProps = {
  handleClose?: () => void;
  open: boolean;
};

const Modal: FC<TModalProps> = ({ open, handleClose, children }) => {
  return (
    <Overlay open={open} onClick={handleClose}>
      <ModalContent>
        <CloseIcon onClick={handleClose} />
        {children}
      </ModalContent>
    </Overlay>
  );
};

export default Modal;

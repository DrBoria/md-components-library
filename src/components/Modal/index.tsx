import React, { FC } from 'react';
import { Modal as DefaultModal } from '@material-ui/core';

import { ModalContent, Button, CloseIcon, Backdrop } from './styles';
import { Props } from './types';

const Modal: FC<Props> = ({ open, handleClose, children, ...props }) => {
  return (
    <DefaultModal
      aria-labelledby="spring-modal-title"
      aria-describedby="spring-modal-description"
      open={open}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      {...props}
    >
      <ModalContent className="modal-ui">
        <Button type="button" onClick={handleClose}>
          <CloseIcon />
        </Button>
        {children}
      </ModalContent>
    </DefaultModal>
  );
};

export default Modal;

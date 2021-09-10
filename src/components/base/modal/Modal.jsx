import React from "react";
import { Modal as ModalWindow } from "react-bootstrap";

const Modal = ({ show, setOpenModal, children }) => {
  return (
    <ModalWindow show={show} onHide={setOpenModal}>
      {children}
    </ModalWindow>
  );
};

export default Modal;

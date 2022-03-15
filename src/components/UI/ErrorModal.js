import React from "react";
import modalStyle from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";

const ErrorModal = ({ title, message, onClose }) => {
  return (
    <div className={modalStyle.backdrop} onClick={onClose}>
      <Card modalStyle={modalStyle.modal}>
        <header className={modalStyle.header}>
          <h2>{title}</h2>
        </header>
        <div className={modalStyle.content}>
          <p>{message}</p>
        </div>
        <footer className={modalStyle.actions}>
          <Button>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;

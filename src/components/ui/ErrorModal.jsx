import React from "react";
import styles from "./ErrorModal.module.css";
import Card from "./Card";
import Button from "./Button";
const ErrorModal = (error) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={error.onConfirm} />
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{error.title}</h2>
        </header>
        <div className={styles.content}>
          <p>{error.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={error.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};
export default ErrorModal;

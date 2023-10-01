import React from "react";
import styles from "../styles/Messages.module.css";

const Messages = ({ messages, name }) => {
  const handleEdit = (messageId, newMessage) => {
    // Update the message with the new content
    // You can use the messageId to identify the message in the userMessages state
    // and update the message content with the newMessage
  };

  const handleDelete = (messageId) => {
    // Remove the message from the userMessages state
    // You can use the messageId to identify the message and filter it out
  };

  return (
    <div className={styles.messages}>
      {messages.map(({ user, message, id }, i) => {
        const itsMe =
          user.name.trim().toLowerCase() === name.trim().toLowerCase();
        const className = itsMe ? styles.me : styles.user;

        return (
          <div key={id} className={`${styles.message} ${className}`}>
            <span className={styles.user}>{user.name}</span>

            <div className={styles.text}>{message}</div>

            {itsMe && (
              <div className={styles.actions}>
                <button
                  className={styles.editButton}
                  onClick={() => handleEdit(id, message)}
                >
                  Edit
                </button>
                <button
                  className={styles.deleteButton}
                  onClick={() => handleDelete(id)}
                >
                  Delete
                </button>
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Messages;


import React from "react";
import notification from "./Notification";
import Button from "../Button/Button";

type NotificationWrapperExampleProps = {
  children?: React.ReactNode;
  label?: string;
};

export const NotificationWrapperExample = ({ children, label }: NotificationWrapperExampleProps) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="font-bold text-lg">{label}</div>
      <div>{children}</div>
    </div>
  );
};

export const NotificationCloseButton = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button color="primary" onClick={() => notification.close(key)}>
      Confirm
    </Button>
  );
  return (
    <Button
      color="primary"
      onClick={() =>
        notification.open({
          message: "Notification Title",
          description: 'A function will be be called after the notification is closed (automatically after the "duration" time of manually).',
          btn,
          key,
          onClose: close,
        })
      }
    >
      Open the notification box
    </Button>
  );
};
export const NotificationUpdateMessageContent = () => {
  const key = "updatable";
  const openNotification = () => {
    notification.open({
      key,
      message: "Notification Title",
      description: "description.",
    });
    setTimeout(() => {
      notification.open({
        key,
        message: "New Title",
        description: "New description.",
      });
    }, 1000);
  };
  return (
    <Button color="primary" onClick={openNotification}>
      Open the notification box
    </Button>
  );
};

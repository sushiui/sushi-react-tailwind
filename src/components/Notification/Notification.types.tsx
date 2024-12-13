import { NotificationInstance as RCNotificationInstance } from "rc-notification/es/Notification";

export type IconType = "success" | "info" | "error" | "warning";

export interface NotificationProps {
  message: React.ReactNode;
  description?: React.ReactNode;
  className?: string;

  key?: string;
  duration?: number;
  placement?: NotificationPlacement;
  top?: number;
  bottom?: number;
  right?: number;
  getContainer?: () => HTMLElement;
  onClick?: () => void;
  onClose?: () => void;
  closeIcon?: React.ReactNode;
  prefixCls?: string;
  icon?: React.ReactNode;
  btn?: React.ReactNode;
  readonly type?: IconType;

  containerClassName?: string;
  contentClassName?: string;
}

export type NotificationPlacement = "top" | "topLeft" | "topRight" | "bottom" | "bottomLeft" | "bottomRight";

export type NotificationCallback = {
  prefixCls: string;
  instance: RCNotificationInstance;
};

export interface NotificationInstance {
  success(params: NotificationProps): void;
  error(params: NotificationProps): void;
  info(params: NotificationProps): void;
  warning(params: NotificationProps): void;
  open(params: NotificationProps): void;
}

export interface Notification extends NotificationInstance {
  close(key: string): void;
}

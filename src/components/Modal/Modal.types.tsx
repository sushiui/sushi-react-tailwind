import React from "react";
export interface ModalProps extends FooterProps {
  visible?: boolean;
  title?: React.ReactNode;
  closable?: boolean;
  afterClose?: () => void;
  children?: React.ReactNode;
  className?: string;
  width?: number | string;
}
export interface FooterProps {
  onOk?: (e: React.MouseEvent<HTMLElement>) => void;
  onCancel?: (e: React.MouseEvent<HTMLElement>) => void;
  disableOk?: boolean;
  hideFooter?: boolean;
  confirmLoading?: boolean;
  cancelText?: string;
  footer?: React.ReactNode;
  okText?: string;
  ["data-testid"]?: string;
}

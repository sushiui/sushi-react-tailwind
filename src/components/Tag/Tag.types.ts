import { ReactNode } from "react";

export interface TagProps {
  children?: ReactNode;
  color?: string;
  closable?: boolean;
  closeIcon?: React.ReactNode;
  visible?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  style?: React.CSSProperties;
  icon?: React.ReactNode;
  ["data-testid"]?: string;
}

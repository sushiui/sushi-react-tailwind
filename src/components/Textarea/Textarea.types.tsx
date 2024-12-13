import { ReactNode } from "react";

export type SizeType = "small" | "middle" | "large" | undefined;
export declare type HTMLTextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;
export interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}
export interface RcTextAreaProps extends HTMLTextareaProps {
  status?: "error";
  message?: string;
  className?: string;
  style?: React.CSSProperties;
  autoSize?: boolean | AutoSizeType;
  onPressEnter?: React.KeyboardEventHandler<HTMLTextAreaElement>;
  onResize?: (size: { width: number; height: number }) => void;
}

export interface TextAreaProps extends RcTextAreaProps {
  bordered?: boolean;
  showCount?: boolean;
  maxLength?: number;
  allowClear?: boolean | { clearIcon: ReactNode };
  size?: SizeType;
}

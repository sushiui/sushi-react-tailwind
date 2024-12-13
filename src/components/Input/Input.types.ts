import React, { ReactNode, InputHTMLAttributes, ChangeEventHandler } from "react";

export type InputSize = "large" | "middle" | "small";
export type InputStatus = "error" | "warning" | "success";
export type InputTextAlign = "left" | "right";
export interface InputProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "size" | "prefix"> {
  allowClear?: boolean | { clearIcon: ReactNode };
  bordered?: boolean;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  message?: string;
  status?: InputStatus;
  size?: InputSize;
  suffix?: ReactNode;
  value?: string;
  viewOnly?: boolean;
  readOnlyValue?: boolean;
  textAlign?: InputTextAlign;
}

export interface AllowClearIcon {
  clearIcon: ReactNode;
}

export interface AllowClearProps {
  id?: string;
  allowClear?: AllowClearIcon | boolean;
  className?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  inputRef?: React.RefObject<HTMLInputElement>;
}

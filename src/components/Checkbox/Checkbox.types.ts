import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export type CheckboxType = "checkbox";
export type CheckboxStatus = "error";
export interface CheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  value?: any;
  message?: string;
  name?: string;
  children?: ReactNode;
  id?: string;
  status?: CheckboxStatus;
  type?: CheckboxType;
  position?: "center" | "start" | "end";
}

import { ChangeEventHandler, MouseEventHandler, ReactNode } from "react";

export type RadioType = "radio";
export interface RadioProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "ref"> {
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onClick?: MouseEventHandler<HTMLElement>;
  onMouseEnter?: MouseEventHandler<HTMLElement>;
  onMouseLeave?: MouseEventHandler<HTMLElement>;
  value?: any;
  name?: string;
  children?: ReactNode;
  id?: string;
  type?: RadioType;
  inputRef?: React.LegacyRef<HTMLInputElement>;
}

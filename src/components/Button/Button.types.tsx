import { MouseEventHandler } from "react";

export type ButtonColorProps = "primary" | "secondary" | "gray" | "green";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  color?: ButtonColorProps;
  disabled?: boolean;
  children?: React.ReactNode;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  "data-testid"?: string;
  className?: string;
  style?: React.CSSProperties;
}

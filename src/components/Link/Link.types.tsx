import { MouseEventHandler } from "react";

export interface LinkProps {
  children?: React.ReactNode;
  disabled?: boolean;
  to: string;
}

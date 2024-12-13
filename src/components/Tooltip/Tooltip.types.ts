import { ReactNode } from "react";

export type TooltipPlacement = "top" | "topLeft" | "bottom" | "bottomLeft";
export interface TooltipProps {
  title?: string;
  children?: ReactNode;
  color?: string;
  placement?: string;
  width?: number;
}

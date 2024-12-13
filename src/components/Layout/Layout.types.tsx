import React from "react";

export interface LayoutProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  ["data-testid"]?: string;
}

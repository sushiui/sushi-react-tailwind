import React from "react";

export interface CardProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  title?: React.ReactNode;
  children?: React.ReactNode;
  bordered?: boolean;
  padding?: string;
  loading?: boolean;
  rounded?: string;
  className?: string;
  "data-testid"?: string;
}

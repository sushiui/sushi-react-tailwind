import { MouseEventHandler } from "react";

export interface BreadcrumbProps {
  className?: string;
  separator?: string;
  routes?: BreadcrumbRouteProps[];
  children?: React.ReactNode[] | React.ReactNode;
  onClick?: (route: BreadcrumbRouteProps) => void;
}

export interface BreadcrumbRouteProps {
  label: string;
  href?: string;
}

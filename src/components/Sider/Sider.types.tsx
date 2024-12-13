export type SiderCollapseType = "responsive" | "clickTrigger";

export interface SiderProps extends React.HTMLAttributes<HTMLElement> {
  children?: React.ReactNode;
  collapsed?: boolean;
  defaultCollapsed?: boolean;
  collapsible?: boolean;
  collapsedWidth?: string;
  width?: string;
  trigger?: React.ReactNode;
  breakpoint?: "sm" | "md" | "lg" | "xl";
  onCollapse?: (collapsed: boolean, type: SiderCollapseType) => void;
  onBreakpoint?: (broken: boolean) => void;
  triggerClassName?: string;
}

export interface SiderTriggerProps {
  collapsed?: boolean;
  width?: string;
  collapsedWidth?: string;
  trigger?: React.ReactNode;
  className?: string;
  onToggle?: () => void;
}

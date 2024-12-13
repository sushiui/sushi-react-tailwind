export interface TimelineItemProps {
  prefixCls?: string;
  className?: string;
  color?: "blue" | "red" | "green" | "gray";
  dot?: React.ReactNode;
  pending?: boolean;
  position?: string;
  style?: React.CSSProperties;
  // label?: React.ReactNode;
}

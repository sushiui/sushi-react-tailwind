export interface SpinProps {
  fillColor?: string;
  color?: string | "transparent";
  spinning?: boolean;
  children?: React.ReactNode;
  size?: "small" | "default" | "large";
  duration?: string;
  className?: string;
  "data-testid"?: string;
}

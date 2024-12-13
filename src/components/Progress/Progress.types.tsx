export interface ProgressProps {
  className?: string;
  type?: "donut" | "bar";
  percent?: number;
  strokeWidth?: number;
  strokeColor?: string;
  trailColor?: string;
  gradientColor?: string;
  width?: number;
  round?: boolean;
}

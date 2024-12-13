export interface BackTopProps {
  visibilityHeight?: number;
  onClick?: React.MouseEventHandler<HTMLElement>;
  children?: React.ReactNode;
  className?: string;
  visible?: boolean; // Only for test. Don't use it.!
}

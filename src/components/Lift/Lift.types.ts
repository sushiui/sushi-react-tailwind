export interface LiftLabel {
  title: string;
  href: string;
}

export interface LiftProps {
  backgroundColor?: string;
  top?: number;
  labels?: LiftLabel[];
  className?: string;
  defaultValue?: string;
  screenRatio?: number;
}

export type StatusIconType =
  | "disable"
  | "wait-for-action"
  | "work-in-progress"
  | "remind"
  | "complete"
  | "cancel"
  | "pending"
  | "urgent"
  | "wait-for-uncontrol"
  | "need-urgent-action"
  | "end";
export type StatusIconSizeType = "xs" | "sm" | "base" | "lg" | "xl";
export type StatusIconProps = {
  children?: React.ReactNode;
  type?: StatusIconType;
  size?: StatusIconSizeType;
  className?: string;
  ["data-testid"]?: string;
};

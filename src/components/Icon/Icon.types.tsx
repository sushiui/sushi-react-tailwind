export type IconType = "outlined" | "filled" | "round" | "sharp" | "two-tone";

export interface IconProps extends React.HTMLAttributes<HTMLElement> {
  name: string;
  color?: string;
  type?: IconType;
  size?: string;
}

export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
  children?: React.ReactNode;
  position?: "static" | "fixed" | "absolute" | "relative" | "sticky";
  zIndex?: string;
  ["data-testid"]?: string;
}

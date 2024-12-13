import React from "react";
import { LinkProps } from "./Link.types";

const Button = React.forwardRef<HTMLButtonElement, LinkProps>(({ children, disabled, to }, ref) => {
  const classNames = ["cursor-pointer"];
  if (disabled) {
    classNames.push("color-dark-35 opacity-35");
    classNames.push("cursor-not-allowed");
  } else {
    classNames.push("text-[#00A7CC]");
  }
  const className = classNames.join(" ");
  const navigate = () => {
    if (!disabled) window.open(to);
  };
  return (
    <span ref={ref} onClick={navigate} className={className}>
      {children}
    </span>
  );
});
Button.displayName = "Button";
export default Button;

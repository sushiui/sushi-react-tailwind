import classNames from "classnames";
import React from "react";
import detectClassNames from "../../utils/detectClassNames";
import { HeaderProps } from "./Header.types";

const Header = React.forwardRef<HTMLElement, HeaderProps>(({ zIndex, position, children, className, ...props }, forwardRef): React.ReactElement => {
  const classString = classNames(
    ["flex", "w-full", "border-b-4", "border-primary-900", "h-12", "bg-white", "py-0 px-4", "items-center"],
    position,
    zIndex
  );
  return (
    <header
      ref={forwardRef}
      className={detectClassNames(classString, className)}
      {...props}
      data-testid={props["data-testid"] || "sushi-layout-header"}
    >
      {children}
    </header>
  );
});

Header.displayName = "Header";
export default Header;

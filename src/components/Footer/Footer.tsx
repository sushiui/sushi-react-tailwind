import classNames from "classnames";
import React from "react";
import { FooterProps } from "./Footer.types";

const Footer = React.forwardRef<HTMLElement, FooterProps>(({ children, className, ...props }, forwardRef) => {
  const classString = classNames([], className);
  return (
    <footer ref={forwardRef} className={classString} {...props} data-testid={props["data-testid"] || "sushi-layout-footer"}>
      {children}
    </footer>
  );
});

Footer.displayName = "footer";
export default Footer;

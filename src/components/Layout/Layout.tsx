import classNames from "classnames";
import React from "react";
import { LayoutProps } from "./Layout.types";

const Layout = React.forwardRef<HTMLElement, LayoutProps>(({ children, className, ...props }, forwardRef) => {
  var classObj: Record<string, boolean> = { "flex-col": true };

  if (Array.isArray(children)) {
    children.forEach((child) => {
      const displayName = child.type.displayName;
      switch (displayName) {
        case "Sider": {
          classObj = { ...classObj, ["flex-col"]: false, ["flex-row"]: true };
        }
      }
    });
  }
  const defaultClasses = ["flex", "flex-auto", "w-full", "p-0", "sushi-layout-has-sider"];
  const classString = classNames(defaultClasses, classObj, className);
  return (
    <section ref={forwardRef} className={classString} {...props} data-testid={props["data-testid"] || "sushi-layout"}>
      {children}
    </section>
  );
});

export default Layout;

import classNames from "classnames";
import React from "react";
import { ContentProps } from "./Content.types";

const Content = React.forwardRef<HTMLElement, ContentProps>(({ children, className, ...props }, forwardRef) => {
  const classString = classNames(["flex", "flex-auto"], className);
  return (
    <main ref={forwardRef} className={classString} {...props} data-testid={props["data-testid"] || "sushi-layout-content"}>
      {children}
    </main>
  );
});

export default Content;

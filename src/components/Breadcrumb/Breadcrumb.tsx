import React from "react";
import { BreadcrumbProps, BreadcrumbRouteProps } from "./Breadcrumb.types";
import classNames from "classnames";

const Breadcrumb = React.forwardRef<HTMLDivElement, BreadcrumbProps>(({ separator, routes, children, className, onClick }, ref) => {
  var items: React.ReactNode | React.ReactNode[];

  const onClickElement = (route: BreadcrumbRouteProps) => () => {
    onClick && onClick(route);
  };

  if (children) {
    items = children;
  } else if (Array.isArray(routes)) {
    items = [] as React.ReactNode[];
    var key = 0;
    (routes || []).forEach((route, i) => {
      const { href, label } = route;
      if (href) {
        (items as React.ReactNode[]).push(
          <div className={"text-link-900 hover:cursor-pointer font-sarabun"} key={`breadcrumb-${key++}`} onClick={onClickElement(route)}>
            {label}
          </div>
        );
      } else {
        (items as React.ReactNode[]).push(
          <div className={"font-sarabun"} key={`breadcrumb-${key++}`}>
            {label}
          </div>
        );
      }
      //
      if (i < routes.length - 1) {
        if (typeof separator === "object") {
          (items as React.ReactNode[]).push(separator);
        } else {
          (items as React.ReactNode[]).push(
            <div className={"font-sarabun"} key={`breadcrumb-${key++}`}>
              {separator}
            </div>
          );
        }
      }
    });
  }

  const classString = classNames(["flex flex-row gap-1"], className);
  return (
    <div ref={ref} className={classString}>
      {items}
    </div>
  );
});

Breadcrumb.defaultProps = {
  separator: "/",
};

export default Breadcrumb;

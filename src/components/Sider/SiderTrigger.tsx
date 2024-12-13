import Icon from "../Icon/Icon";
import React from "react";
import { SiderTriggerProps } from "./Sider.types";
import classNames from "classnames";

const SiderTrigger = ({ collapsed, onToggle, width, trigger, collapsedWidth, className }: SiderTriggerProps) => {
  // const widthStyle: React.CSSProperties = { width, flex: `0 0 ${width}`, maxWidth: width, minWidth: width };
  if (trigger === null) {
    return null;
  }
  const widthClassNames = {
    "min-w-sider": !collapsed,
    "min-w-sider-collapsed": collapsed,
    "w-sider": !collapsed,
    "w-sider-collapsed": collapsed,
    "max-w-sider": !collapsed,
    "max-w-sider-collapsed": collapsed,
    "flex-sider": !collapsed,
    "flex-sider-collapsed": collapsed,
  };
  if (parseFloat(String(collapsedWidth || 0)) === 0) {
    return (
      <span
        data-testid={"sushi-layout-sider-trigger"}
        className={classNames(
          "sushi-layout-sider-trigger cursor-pointer absolute top-10 z-10 -right-20px rounded-sm flex flex-col items-center justify-center bg-white shadow-sm",
          className
        )}
        style={{ width: "40px", height: "40px", right: "-40px" }}
        onClick={onToggle}
      >
        {trigger || <Icon name={collapsed ? "clear" : "menu"} />}
      </span>
    );
  }
  return (
    <div
      data-testid={"sushi-layout-sider-trigger"}
      className={classNames(
        "sushi-layout-sider-trigger cursor-pointer fixed bottom-0 z-1px bg-red-100 py-3 flex flex-col items-center justify-center duration-200 ease-in",
        widthClassNames,
        className
      )}
      onClick={onToggle}
      // style={{ ...widthStyle }}
    >
      <Icon name={collapsed ? "chevron_right" : "chevron_left"} size="text-xl" className="transition-all" />
    </div>
  );
};

export default SiderTrigger;

import React from "react";
import { SpinProps } from "./Spin.types";
import DefaultSpin from "./DefaultSpin";
import classNames from "classnames";

const Spin = ({ fillColor, children, size, color, spinning, duration, className, ...props }: SpinProps): React.ReactElement => {
  const classArr: string[] = ["mr-2", "text-gray-200", "dark:text-gray-600"];

  if (size === "small") {
    classArr.push("w-3 h-3");
  } else if (size == "large") {
    classArr.push("w-7 h-7");
  } else {
    classArr.push("w-5 h-5");
  }

  if (spinning === true) {
    classArr.push("animate-spin");
  }

  const classString = classNames(classArr, className);
  return (
    <div className={classString} style={{ animationDuration: duration }} data-testid={props["data-testid"] || "sushi-spin"}>
      {children ? children : <DefaultSpin fillColor={fillColor} color={color} />}
    </div>
  );
};

Spin.defaultProps = {
  size: "default",
  spinning: true,
};

export default Spin;

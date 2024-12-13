import classNames from "classnames";
import React from "react";
import { IconProps } from "./Icon.types";

const Icon = ({ name, type, color, size, className, ...props }: IconProps) => {
  const classArr = [];
  if (type && type != "filled") {
    classArr.push(`material-icons-${type}`);
  } else {
    classArr.push("material-icons");
  }
  if (color) {
    classArr.push(color);
  }
  if (size) {
    classArr.push(size);
  }

  const classString = classNames(classArr, className);
  return (
    <i className={classString} {...props}>
      {name}
    </i>
  );
};

Icon.defaultProps = {
  type: "outlined",
};

export default Icon;

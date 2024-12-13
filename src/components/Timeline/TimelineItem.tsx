import React, { useEffect, useState } from "react";
import { TimelineItemProps } from "./TimelineItem.types";

const TimelineItem: React.FC<TimelineItemProps> = ({
  className,
  color = "gray",
  dot,
  pending = false,
  position /** Dead, but do not pass in <li {...omit()} */,
  children,
  ...restProps
}) => {
  const itemClassName = className ? `flex ${className}` : "flex";
  const isNotLastItem = !itemClassName.includes("timeline-item-last");

  const getColor = () => {
    switch (color) {
      case "red":
        return "#E55F14";
      case "green":
        return "#006600";
      case "blue":
        return "#0064C5";
      default:
        return "#9DA6AD";
    }
  };
  const borderStyle = { borderColor: getColor(), color: getColor() };
  const dotStyle = dot ? borderStyle : {};

  return (
    <div {...restProps} className={itemClassName}>
      <div className="flex flex-col items-center mr-4">
        <div style={dotStyle}>
          {dot ? dot : <div className="flex items-center justify-center rounded-full w-4 h-4 border-2" style={borderStyle}></div>}
        </div>
        {isNotLastItem && <div className="w-2px h-full bg-gray-300"></div>}
      </div>
      <div className={isNotLastItem ? `flex pb-8` : `flex`}>
        <div className="relative -top-1">{children}</div>
      </div>
    </div>
  );
};

export default TimelineItem;

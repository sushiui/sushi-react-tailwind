import Icon from "../Icon/Icon";
import React, { useState } from "react";
import { TagProps } from "./Tag.types";
import classnames from "classnames";

const Tag = React.forwardRef<HTMLSpanElement, TagProps>(({ color, closable, closeIcon, onClose, style, icon, children, ...props }, ref) => {
  const [showTag, setShowTag] = useState(true);
  const tagClassNames = classnames(
    [
      "inline-flex",
      "items-center",
      "text-center",
      "rounded-xl",
      "text-[#231f20]",
      "px-2",
      "text-sm",
      "whitespace-nowrap",
      "border",
      "border-[#d9d9d9]",
      "h-full",
    ],
    {
      hidden: !showTag || props.visible === false,
    }
  );

  const handleCloseClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();
    onClose?.(e);

    if (e.defaultPrevented) {
      return;
    }
    setShowTag(false);
  };

  const Close = () => {
    if (closable) {
      return (
        <span
          className="text-center cursor-pointer pl-1 leading-[0]"
          data-testid={props["data-testid"] || "sushi-tag-closable"}
          onClick={handleCloseClick}
        >
          {closeIcon ? <>{closeIcon}</> : <Icon name="close" type="outlined" size="text-xs" />}
        </span>
      );
    }
    return null;
  };

  const renderChildren = icon ? (
    <>
      {icon}
      <span>{children}</span>
    </>
  ) : (
    children
  );

  return (
    <span
      data-testid={props["data-testid"] || "sushi-tag"}
      ref={ref}
      className={tagClassNames}
      style={{ backgroundColor: color, lineHeight: "24px", ...style }}
    >
      {renderChildren}
      <Close />
    </span>
  );
});

Tag.defaultProps = {
  visible: true,
  color: "#d1d1d1",
};

export default Tag;

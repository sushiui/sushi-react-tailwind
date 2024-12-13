import React, { useState } from "react";
import { PopoverPlacementType, PopoverProps } from "./Popover.types";
import Tooltip from "rc-tooltip";
import Card from "../../components/Card/Card";
import classNames from "classnames";

type PopoverContentProps = Pick<PopoverProps, "content" | "title" | "style">;

function PopoverContent({ content, title, style }: PopoverContentProps) {
  return (
    <Card title={title} style={style}>
      {content}
    </Card>
  );
}

function getOffset(placement: PopoverPlacementType, offset?: number[]): number[] {
  if (Array.isArray(offset) && offset.length >= 2) {
    return offset;
  }
  let defaultOffset = [0, -12];
  if (placement?.startsWith("left")) {
    defaultOffset = [-12, 0];
  } else if (placement.startsWith("right")) {
    defaultOffset = [12, 0];
  } else if (placement.startsWith("bottom")) {
    defaultOffset = [0, 12];
  }
  return defaultOffset;
}

function Popover({ children, placement, content, trigger, title, offset, onOpenChange, style, ...props }: PopoverProps) {
  const [state] = useState({
    offset: getOffset(placement ?? "top", offset),
    showArrow: props.showArrow ?? false,
  });

  return (
    <Tooltip
      {...props}
      visible={props.open}
      onVisibleChange={onOpenChange}
      placement={placement}
      trigger={trigger}
      overlay={<PopoverContent title={title} content={content} style={style} />}
      align={{ offset: [state.offset[0], state.offset[1]] }}
      arrowContent={<div className="rc-tooltip-arrow-inner"></div>}
      overlayClassName={classNames("sushi-popover", props.overlayClassName)}
      showArrow={state.showArrow}
    >
      <span>{children}</span>
    </Tooltip>
  );
}

Popover.defaultProps = {
  placement: "top",
  trigger: "hover",
  destroyTooltipOnHide: true,
  mouseEnterDelay: 0,
  mouseLeaveDelay: 0.1,
  showArrow: true,
};

export default Popover;

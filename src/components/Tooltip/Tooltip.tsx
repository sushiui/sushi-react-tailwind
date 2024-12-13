import { TooltipProps } from "./Tooltip.types";
import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";
import classNames from "classnames";

const Tooltip = React.forwardRef<HTMLDivElement, TooltipProps>(({ title, placement, ...props }, ref) => {
  const textRef: any = React.createRef();
  const [marginLeft, setMarginLeft] = useState(0);
  const tooltipTextClassNames = classNames(
    [
      "font-normal invisible opacity-0 text-white text-left shadow rounded-6px p-6px absolute left-50%",
      "after:absolute after:-ml-5px after:border-5px",
      "z-9999 [transition:opacity_0.4s]",
      "group-hover:visible group-hover:opacity-100",
    ],
    {
      "min-w-max": !props.width,
      "bottom-150% after:top-100% after:left-50%": placement === "top",
      "top-150% after:-top-10px after:left-50%": placement === "bottom",
      "top-150% after:-top-10px after:left-10%": placement === "bottomLeft",
      "bottom-150% after:top-100% after:left-10%": placement === "topLeft",
    }
  );

  useEffect(() => {
    setMarginLeft(textRef.current.clientWidth / 2);
  }, []);

  return (
    <div ref={ref}>
      <div className="group relative inline-block z-">
        {props.children}
        <TooltipText {...props} marginLeft={marginLeft} placement={placement} className={tooltipTextClassNames} ref={textRef}>
          {title}
        </TooltipText>
      </div>
    </div>
  );
});

const TooltipText = styled.div(({ placement, ...props }: any) => {
  const color = `${props.color || "#5f6062"}`;
  const bottomArrow = `transparent transparent ${color} transparent`;
  const topArrow = ` ${color} transparent transparent transparent`;
  const borderColor = placement === "bottom" || placement === "bottomLeft" ? bottomArrow : topArrow;
  const marginLeft = placement === "topLeft" || placement === "bottomLeft" ? `-${props.marginLeft / 5}px` : `-${props.marginLeft}px`;
  return {
    width: `${props.width}px`,
    background: `${color}`,
    marginLeft: marginLeft,
    "&:after": { borderColor: borderColor },
  };
});

Tooltip.defaultProps = {
  placement: "top",
};

export default Tooltip;

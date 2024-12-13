import { TooltipProps } from "rc-tooltip/lib/Tooltip";

type PopoverType = React.ReactNode | (() => React.ReactNode);
export type PopoverPlacementType =
  | "topLeft"
  | "top"
  | "topRight"
  | "leftTop"
  | "left"
  | "leftBottom"
  | "right"
  | "rightTop"
  | "rightBottom"
  | "bottom"
  | "bottomLeft"
  | "bottomRight";
type PopoverActionType = "hover" | "focus" | "click";

type PickType = Pick<TooltipProps, "destroyTooltipOnHide" | "mouseEnterDelay" | "mouseLeaveDelay" | "showArrow" | "overlayClassName" | "prefixCls"> &
  Omit<React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>, "title" | "ref">;

export interface PopoverProps extends PickType {
  children?: PopoverType;
  content?: PopoverType;
  title?: React.ReactNode;
  placement?: PopoverPlacementType;
  trigger?: PopoverActionType | PopoverActionType[];
  offset?: number[] | undefined;
  open?: TooltipProps["visible"];
  onOpenChange?: TooltipProps["onVisibleChange"];
  style?: React.CSSProperties;
  className?: string;
}

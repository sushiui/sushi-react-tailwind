import React from "react";
import { NotificationPlacement, NotificationProps } from "./Notification.types";
import { NoticeContent } from "rc-notification/es/Notification";
import detectClassNames from "../../utils/detectClassNames";
import Icon from "../Icon/Icon";
import classnames from "classnames";

let defaultTop = 24;
let defaultBottom = 24;
let defaultRight = 0;
let defaultDuration = 4.5;
let defaultCloseIcon: React.ReactNode;

const typeToIconName = {
  success: "check_circle",
  info: "info",
  error: "cancel",
  warning: "error_outline",
};

const typeToColor = {
  success: "text-notification-icon-success",
  info: "text-notification-icon-info",
  error: "text-notification-icon-error",
  warning: "text-notification-icon-warning",
};

export function getPlacementStyle(
  placement: NotificationPlacement,
  top: number = defaultTop,
  bottom: number = defaultBottom,
  right: number = defaultRight
) {
  let style;
  switch (placement) {
    case "top":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top,
        bottom: "auto",
      };
      break;
    case "topLeft":
      style = {
        left: 0,
        top,
        bottom: "auto",
      };
      break;
    case "topRight":
      style = {
        right: right,
        top,
        bottom: "auto",
      };
      break;
    case "bottom":
      style = {
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom,
      };
      break;
    case "bottomLeft":
      style = {
        left: 0,
        top: "auto",
        bottom,
      };
      break;
    default:
      style = {
        right: right,
        top: "auto",
        bottom,
      };
      break;
  }
  return style;
}

export function getRCNoticeParams(params: NotificationProps, prefixCls: string): NoticeContent {
  const {
    message,
    duration: d,
    description,
    contentClassName,
    containerClassName,
    onClick,
    closeIcon = defaultCloseIcon,
    onClose,
    icon,
    btn,
    key,
    type,
    className,
  } = params;
  const duration = d === undefined ? defaultDuration : d;
  let iconNode: React.ReactNode = null;
  if (icon) {
    iconNode = <span className={`${prefixCls}-icon`}>{params.icon}</span>;
  } else if (type) {
    const id = `${prefixCls}-icon ${prefixCls}-icon-${type}`;
    iconNode = <Icon name={typeToIconName[type]} className={classnames(id, typeToColor[type], "text-xl")} data-testid={id} />;
  }
  const closeIconToRender = (
    <span className={`${prefixCls}-close-x`} data-testid={`${prefixCls}-close-x`}>
      {closeIcon || <Icon name="close" className={`${prefixCls}-close-icon`} data-testid={`${prefixCls}-close-icon`} />}
    </span>
  );

  return {
    content: (
      <div className={classnames(detectClassNames("flex flex-row gap-2 w-80", className), iconNode ? `${prefixCls}-with-icon` : "")}>
        {iconNode}
        <div className={contentClassName}>
          <div data-testid={`${prefixCls}-message`} className={`${prefixCls}-message text-base`}>
            {message}
          </div>
          <div data-testid={`${prefixCls}-description`} className={`${prefixCls}-description text-sm`}>
            {description}
          </div>
          {btn ? (
            <span data-testid={`${prefixCls}-btn`} className={`${prefixCls}-btn`}>
              {btn}
            </span>
          ) : null}
        </div>
      </div>
    ),
    duration,
    closable: true,
    closeIcon: closeIconToRender,
    onClose,
    onClick,
    key,
    className: containerClassName,
  };
}

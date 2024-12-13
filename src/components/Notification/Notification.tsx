import React from "react";
import { NotificationCallback, NotificationPlacement, NotificationProps, Notification, IconType } from "./Notification.types";
import RCNotification from "rc-notification";
import { getPlacementStyle, getRCNoticeParams } from "./NotificationUtil";
import { NotificationInstance as RCNotificationInstance } from "rc-notification/lib/Notification";
import classnames from "classnames";

let defaultPlacement: NotificationPlacement = "topRight";
let defaultGetContainer: () => HTMLElement;
const notificationInstance: {
  [key: string]: Promise<RCNotificationInstance>;
} = {};

const getNotificationInstance = (params: NotificationProps, callback: (info: NotificationCallback) => void) => {
  const { placement = defaultPlacement, top, bottom, getContainer = defaultGetContainer, prefixCls: customPrefixCls, right } = params;
  const prefixCls = customPrefixCls || "sushi";

  const cacheKey = `${prefixCls}-${placement}`;

  const cacheInstance = notificationInstance[cacheKey];
  if (cacheInstance) {
    Promise.resolve(cacheInstance).then((instance) => {
      callback({ prefixCls: `${prefixCls}-notice`, instance });
    });

    return;
  }

  notificationInstance[cacheKey] = new Promise((resolve) => {
    RCNotification.newInstance(
      {
        style: getPlacementStyle(placement, top, bottom, right),
        getContainer,
      },
      (notification) => {
        resolve(notification);
        callback({
          instance: notification,
          prefixCls: `${prefixCls}-notification`,
        });
      }
    );
  });
};

function notice(params: NotificationProps) {
  // getNotificationInstance(args, ({ prefixCls, iconPrefixCls, instance }) => {
  //   instance.notice(getRCNoticeProps(args, prefixCls, iconPrefixCls));
  // });
  getNotificationInstance(params, ({ instance, prefixCls }) => {
    instance.notice(getRCNoticeParams(params, prefixCls));
  });
}

const notification = {
  open: notice,
  close(key: string) {
    Object.keys(notificationInstance).forEach((cacheKey) =>
      Promise.resolve(notificationInstance[cacheKey]).then((instance) => {
        instance.removeNotice(key);
      })
    );
  },
} as Notification;

(["success", "info", "warning", "error"] as IconType[]).forEach((type: IconType) => {
  notification[type] = (params: NotificationProps) =>
    notification.open({
      ...params,
      type,
    });
});

export default notification as Notification;

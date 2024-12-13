import React from "react";
import { getPlacementStyle, getRCNoticeParams } from "./NotificationUtil";

const defaultBottom = 24;
const defaultTop = 24;
const defaultDuration = 4.5;
describe("NotificationUtil", () => {
  describe("getPlacementStyle", () => {
    it("should return default style of bottomRight when placement is bottomRight", () => {
      const placement = "bottomRight";
      const style = getPlacementStyle(placement);
      expect(style).toEqual({
        right: 0,
        top: "auto",
        bottom: defaultBottom,
      });
    });

    it("should return default style of top when placement is top", () => {
      const placement = "top";
      const style = getPlacementStyle(placement);
      expect(style).toEqual({
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: defaultTop,
        bottom: "auto",
      });
    });

    it("should return default style of bottom when placement is bottom", () => {
      const placement = "bottom";
      const style = getPlacementStyle(placement);
      expect(style).toEqual({
        left: "50%",
        transform: "translateX(-50%)",
        right: "auto",
        top: "auto",
        bottom: defaultBottom,
      });
    });

    it("should return default style of bottom when placement is topRight", () => {
      const placement = "topRight";
      const style = getPlacementStyle(placement);
      expect(style).toEqual({
        right: 0,
        top: defaultTop,
        bottom: "auto",
      });
    });

    it("should return default style of bottom when placement is topLeft", () => {
      const placement = "topLeft";
      const style = getPlacementStyle(placement);
      expect(style).toEqual({
        left: 0,
        top: defaultTop,
        bottom: "auto",
      });
    });

    it("should return default style of bottom when placement is topLeft", () => {
      const placement = "bottomLeft";
      const style = getPlacementStyle(placement);
      expect(style).toEqual({
        left: 0,
        top: "auto",
        bottom: defaultBottom,
      });
    });

    it("should return default style when placement is unknown", () => {
      const placement = "abc";
      const style = getPlacementStyle(placement as any);
      expect(style).toEqual({
        right: 0,
        top: "auto",
        bottom: defaultBottom,
      });
    });
  });

  describe("getRCNoticeParams", () => {
    it("should return default component when use default params", () => {
      const params = {
        message: "test",
      };
      const prefixCls = "sushi-notification";
      const comp = getRCNoticeParams(params, prefixCls);
      expect(comp.duration).toEqual(defaultDuration);
      expect(comp.closable).toBeTruthy();
      const closeIcon = comp.closeIcon as JSX.Element;
      expect(closeIcon).not.toBeUndefined();
      expect(closeIcon.props.className).toEqual("sushi-notification-close-x");
      expect(comp.key).toBeUndefined();
    });

    it("should return duration = 2 when params.duration = 2", () => {
      const params = {
        message: "test",
        duration: 2,
      };
      const prefixCls = "sushi-notification";
      const comp = getRCNoticeParams(params, prefixCls);
      expect(comp.duration).toEqual(2);
      expect(comp.closable).toBeTruthy();
      const closeIcon = comp.closeIcon as JSX.Element;
      expect(closeIcon).not.toBeUndefined();
      expect(closeIcon.props.className).toEqual("sushi-notification-close-x");
      expect(comp.key).toBeUndefined();
    });
  });

  it("should return className 'bg-primary-900' after setting through containerClassMame", () => {
    const params = {
      message: "test",
      containerClassName: "bg-primary-900",
    };
    const prefixCls = "sushi-notification";
    const comp = getRCNoticeParams(params, prefixCls);
    expect(comp.className).toEqual("bg-primary-900");
  });
});

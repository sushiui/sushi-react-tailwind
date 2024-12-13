import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Tooltip from "./Tooltip";

const props = { "data-testid": "tooltip", title: "tooltip" };

describe("Tooltip", () => {
  describe("title", () => {
    test("should support title", () => {
      render(<Tooltip {...props}>text</Tooltip>);
      expect(screen.getByTestId("tooltip")).toHaveTextContent("tooltip");
    });
  });

  describe("children", () => {
    test("should support children", () => {
      render(<Tooltip {...props}>text</Tooltip>);
      expect(screen.getByTestId("tooltip").parentElement).toHaveTextContent("text");
    });
  });

  describe("color", () => {
    test("should support color when color is undefined", () => {
      render(<Tooltip {...props}>text</Tooltip>);
      const styles = getComputedStyle(screen.getByTestId("tooltip"));
      expect(styles.backgroundColor).toEqual("rgb(95, 96, 98)");
    });

    test("should support color when color is not undefined", () => {
      const p = { ...props, color: "rgb(252, 176, 52)" };
      render(<Tooltip {...p}>text</Tooltip>);
      const styles = getComputedStyle(screen.getByTestId("tooltip"));
      expect(styles.backgroundColor).toEqual("rgb(252, 176, 52)");
    });
  });

  describe("placement", () => {
    test("should support placement when placement is undefined", () => {
      render(<Tooltip {...props}>text</Tooltip>);
      const tooltip = screen.getByTestId("tooltip");
      expect(tooltip.classList.contains("bottom-150%")).toBeTruthy();
      expect(tooltip.classList.contains("after:top-100%")).toBeTruthy();
      expect(tooltip.classList.contains("after:left-50%")).toBeTruthy();
    });

    test("should support placement when placement is top", () => {
      const p = { ...props, placement: "top" };
      render(<Tooltip {...p}>text</Tooltip>);
      const tooltip = screen.getByTestId("tooltip");
      expect(tooltip.classList.contains("bottom-150%")).toBeTruthy();
      expect(tooltip.classList.contains("after:top-100%")).toBeTruthy();
      expect(tooltip.classList.contains("after:left-50%")).toBeTruthy();
    });

    test("should support placement when placement is topLeft", () => {
      const p = { ...props, placement: "topLeft" };
      render(<Tooltip {...p}>text</Tooltip>);
      const tooltip = screen.getByTestId("tooltip");
      expect(tooltip.classList.contains("bottom-150%")).toBeTruthy();
      expect(tooltip.classList.contains("after:top-100%")).toBeTruthy();
      expect(tooltip.classList.contains("after:left-10%")).toBeTruthy();
    });

    test("should support placement when placement is bottom", () => {
      const p = { ...props, placement: "bottom" };
      render(<Tooltip {...p}>text</Tooltip>);
      const tooltip = screen.getByTestId("tooltip");
      expect(tooltip.classList.contains("top-150%")).toBeTruthy();
      expect(tooltip.classList.contains("after:-top-10px")).toBeTruthy();
      expect(tooltip.classList.contains("after:left-50%")).toBeTruthy();
    });

    test("should support placement when placement is bottomLeft", () => {
      const p = { ...props, placement: "bottomLeft" };
      render(<Tooltip {...p}>text</Tooltip>);
      const tooltip = screen.getByTestId("tooltip");
      expect(tooltip.classList.contains("top-150%")).toBeTruthy();
      expect(tooltip.classList.contains("after:-top-10px")).toBeTruthy();
      expect(tooltip.classList.contains("after:left-10%")).toBeTruthy();
    });
  });

  describe("width", () => {
    test("should support width when width is undefined", () => {
      const p = { ...props, color: "rgb(252, 176, 52)" };
      render(<Tooltip {...p}>text</Tooltip>);
      const tooltip = screen.getByTestId("tooltip");
      const styles = getComputedStyle(tooltip);
      expect(tooltip.classList.contains("min-w-max")).toBeTruthy();
      expect(styles.backgroundColor).toEqual("rgb(252, 176, 52)");
    });

    test("should support width when width is not undefined", () => {
      const p = { ...props, width: 300 };
      render(<Tooltip {...p}>text</Tooltip>);
      const tooltip = screen.getByTestId("tooltip");
      const styles = getComputedStyle(tooltip);
      expect(tooltip.classList.contains("min-w-max")).toBeFalsy();
      expect(styles.width).toEqual("300px");
    });
  });
});

import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Progress from "./Progress";
import ProgressBar from "progressbar.js";

jest.mock("progressbar.js");

describe("Donut", () => {
  const mockCircle = {
    animate: jest.fn(),
    text: {
      style: {} as React.CSSProperties,
    },
    path: {
      style: {} as React.CSSProperties,
    },
    trail: {
      style: {} as React.CSSProperties,
      setAttribute: jest.fn(),
    },
    destroy: jest.fn(),
  };

  beforeEach(() => {
    (ProgressBar.Circle as unknown as jest.Mock).mockImplementation(() => {
      return mockCircle;
    });
  });

  afterEach(() => {
    mockCircle.animate.mockClear();
  });

  describe("attribute", () => {
    test("should support color", () => {
      render(
        <>
          <div>
            <Progress type="donut" percent={18} strokeColor="red" gradientColor="" />
          </div>
        </>
      );
      const gradient = screen.getByTestId("cl1");
      expect(gradient).toBeInTheDocument();
      expect(screen.getByTestId("cl1-stroke-color")).toHaveAttribute("stop-color", "red");
      expect(screen.queryByTestId("cl1-gradient-color")).toBeNull();
    });
    test("should support width", () => {
      render(
        <>
          <div>
            <Progress type="donut" percent={18} width={300} />
          </div>
        </>
      );
      const donut = screen.getByTestId("donut-chart-progress");
      expect(donut).toHaveAttribute("style", "width: 300px;");
      expect(mockCircle.text.style.fontSize).toEqual("50px");
    });
    test("should support percent", () => {
      render(
        <>
          <div>
            <Progress type="donut" percent={88} />
          </div>
        </>
      );
      expect(mockCircle.animate).toHaveBeenCalledWith(0.88);
    });
    test("should support strokeWidth", () => {
      render(
        <>
          <div>
            <Progress type="donut" strokeWidth={8} width={200} />
          </div>
        </>
      );
      expect(ProgressBar.Circle).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          strokeWidth: 8,
          trailWidth: 8,
        })
      );
    });
  });
});

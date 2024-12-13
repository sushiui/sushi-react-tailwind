import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Progress from "./Progress";
import ProgressBar from "progressbar.js";

const mockLine = {
  animate: jest.fn(),
  text: {
    style: {} as React.CSSProperties,
  },
  path: {
    style: {} as React.CSSProperties,
    parentNode: {
      style: {} as React.CSSProperties,
    },
  },
  trail: {
    style: {} as React.CSSProperties,
  },
};

jest.mock("progressbar.js");

describe("Bar", () => {
  (ProgressBar.Line as unknown as jest.Mock).mockImplementation(() => {
    return mockLine;
  });

  afterEach(() => {
    mockLine.animate.mockClear();
    ProgressBar.Line.mockClear();
  });

  describe("attribute", () => {
    test("should support color", () => {
      render(
        <>
          <div>
            <Progress type="bar" percent={99} strokeColor="red" gradientColor="blue" />
          </div>
        </>
      );
      const gradient = screen.getByTestId("cl2");
      expect(gradient).toBeInTheDocument();
      expect(screen.getByTestId("cl2-stroke-color")).toHaveAttribute("stop-color", "red");
      expect(screen.getByTestId("cl2-gradient-color")).toHaveAttribute("stop-color", "blue");
    });
    test("should support width", () => {
      render(
        <>
          <div>
            <Progress percent={18} width={300} />
          </div>
        </>
      );
      expect(ProgressBar.Line).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          svgStyle: { borderRadius: "23px", height: "100%", marginRight: "8px", strokeLinecap: "round", width: 300 },
        })
      );
    });
    test("should support percent", () => {
      render(
        <>
          <div>
            <Progress percent={88} />
          </div>
        </>
      );
      expect(mockLine.animate).toHaveBeenCalledWith(0.88);
    });
    test("should support strokeWidth", () => {
      render(
        <>
          <div>
            <Progress strokeWidth={8} />
          </div>
        </>
      );
      expect(ProgressBar.Line).toHaveBeenCalledWith(
        expect.anything(),
        expect.objectContaining({
          strokeWidth: 8,
          trailWidth: 8,
        })
      );
    });
  });
});

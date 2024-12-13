import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Spin from "./Spin";

jest.mock("./DefaultSpin", () => ({
  __esModule: true,
  default: () => <div data-testid={"sushi-default-spin"}></div>,
}));

describe("Spin", () => {
  test("it should success", () => {
    render(<Spin />);
    const node = screen.getByTestId("sushi-spin");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("w-5")).toBeTruthy();
    expect(node.classList.contains("h-5")).toBeTruthy();
    expect(node.classList.contains("animate-spin")).toBeTruthy();
  });

  test("should not add class animate-spin when spinning = false", () => {
    render(<Spin spinning={false} />);
    const node = screen.getByTestId("sushi-spin");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("w-5")).toBeTruthy();
    expect(node.classList.contains("h-5")).toBeTruthy();
    expect(node.classList.contains("animate-spin")).toBeFalsy();
  });

  test("should show custom spin", () => {
    render(
      <Spin>
        <span>Spin Custom</span>
      </Spin>
    );
    expect(screen.getByTestId("sushi-spin")).toBeInTheDocument();
    expect(screen.getByText("Spin Custom")).toBeInTheDocument();
  });

  test("it should set class when size small", () => {
    render(<Spin size="small" />);
    const node = screen.getByTestId("sushi-spin");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("w-5")).toBeFalsy();
    expect(node.classList.contains("h-5")).toBeFalsy();
    expect(node.classList.contains("w-3")).toBeTruthy();
    expect(node.classList.contains("h-3")).toBeTruthy();
  });

  test("it should set class when size large", () => {
    render(<Spin size="large" />);
    const node = screen.getByTestId("sushi-spin");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("w-5")).toBeFalsy();
    expect(node.classList.contains("h-5")).toBeFalsy();
    expect(node.classList.contains("w-7")).toBeTruthy();
    expect(node.classList.contains("h-7")).toBeTruthy();
  });
});

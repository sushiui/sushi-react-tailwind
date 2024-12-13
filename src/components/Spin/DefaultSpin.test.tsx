import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DefaultSpin from "./DefaultSpin";

describe("DefaultSpin", () => {
  test("it should success", () => {
    render(<DefaultSpin />);
    const node = screen.getByTestId("sushi-default-spin");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("fill-primary-900")).toBeTruthy();
    expect(node.classList.contains("text-transparent")).toBeTruthy();
  });

  test("it should add fillColor", () => {
    render(<DefaultSpin fillColor="fill-danger-900" />);
    const node = screen.getByTestId("sushi-default-spin");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("fill-primary-900")).toBeFalsy();
    expect(node.classList.contains("fill-danger-900")).toBeTruthy();
    expect(node.classList.contains("text-transparent")).toBeTruthy();
  });

  test("it should add color", () => {
    render(<DefaultSpin color={"text-red-500"} />);
    const node = screen.getByTestId("sushi-default-spin");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("fill-primary-900")).toBeTruthy();
    expect(node.classList.contains("text-red-500")).toBeTruthy();
  });
});

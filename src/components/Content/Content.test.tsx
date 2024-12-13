import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Content from "./Content";

describe("Content", () => {
  test("it should success", () => {
    render(<Content />);
    expect(screen.getByTestId("sushi-layout-content")).toBeInTheDocument();
  });
});

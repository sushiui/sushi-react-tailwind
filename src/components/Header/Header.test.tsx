import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Header from "./Header";

describe("Header", () => {
  test("it should success", () => {
    render(<Header />);
    expect(screen.getByTestId("sushi-layout-header")).toBeInTheDocument();
  });
});

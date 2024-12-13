import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Footer from "./Footer";

describe("Footer", () => {
  test("it should success", () => {
    render(<Footer />);
    expect(screen.getByTestId("sushi-layout-footer")).toBeInTheDocument();
  });
});

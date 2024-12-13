import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  describe("attribute", () => {
    test("should support color", () => {
      render(<Button data-testid="sushi-button" color="secondary" />);
      const button = screen.getByTestId("sushi-button");
      expect(button.classList.contains("to-secondary-800")).toBeTruthy();
    });
    test("should support styles", () => {
      render(<Button data-testid="sushi-button" style={{ border: "1px solid red" }} />);
      const button = screen.getByTestId("sushi-button");
      expect(button.style.cssText).toEqual("line-height: normal; min-height: 32px; border: 1px solid red;");
    });
  });

  describe("disabled", () => {
    test("should support disabled when disabled is undefined", () => {
      render(<Button data-testid="sushi-button" />);
      const button = screen.getByTestId("sushi-button");
      expect(button).toBeEnabled();
    });

    test("should support disabled when disabled is false", () => {
      render(<Button data-testid="sushi-button" disabled={false} />);
      const button = screen.getByTestId("sushi-button");
      expect(button).toBeEnabled();
    });

    test("should support disabled when disabled is true", () => {
      render(<Button data-testid="sushi-button" disabled />);
      const button = screen.getByTestId("sushi-button");
      expect(button).toBeDisabled();
    });
  });
});

describe("onClick", () => {
  test("should props event when the button has change", () => {
    const mockOnClick = jest.fn();
    render(<Button data-testid="sushi-button" onClick={mockOnClick}></Button>);
    fireEvent(screen.getByTestId("sushi-button"), new MouseEvent("click", { bubbles: true, cancelable: true }));
    expect(mockOnClick).toHaveBeenCalled();
  });
});

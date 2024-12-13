import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Checkbox from "./Checkbox";

describe("Checkbox", () => {
  describe("attribute", () => {
    test("should support id, name, value", () => {
      render(<Checkbox data-testid="checkbox" id="idCheckbox" name="nameCheckbox" value="valueCheckbox" />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox).toHaveAttribute("id", "idCheckbox");
      expect(checkbox).toHaveAttribute("name", "nameCheckbox");
      expect(checkbox).toHaveAttribute("value", "valueCheckbox");
    });

    test("should support checked", () => {
      render(<Checkbox data-testid="checkbox" checked onChange={() => {}} />);
      const checkbox = screen.getByTestId("checkbox");
      const icon = document.getElementsByClassName("material-icons-outlined")[0];
      expect(checkbox.parentElement?.classList.contains("border-primary-900")).toBeTruthy();
      expect(checkbox.parentElement?.classList.contains("bg-primary-900")).toBeTruthy();
      expect(icon).toHaveStyle("color: white;");
    });

    test("should support position", () => {
      render(<Checkbox data-testid="checkbox" position="start" onChange={() => {}} />);
      const checkbox = screen.getByTestId("checkbox");
      expect(checkbox.parentElement?.parentElement?.classList.contains("items-start")).toBeTruthy();
    });
  });

  describe("disabled", () => {
    test("should support disabled when disabled is undefined", () => {
      render(<Checkbox data-testid="checkbox" />);
      const checkbox = screen.getByTestId("checkbox");
      const icon = document.querySelector(".material-icons-outlined");
      expect(checkbox.parentElement?.classList.contains("border-primary-900")).toBeTruthy();
      expect(checkbox.parentElement?.classList.contains("bg-primary-900")).toBeFalsy();
      expect(icon).not.toBeInTheDocument();
    });

    test("should support disabled when disabled is false", () => {
      render(<Checkbox data-testid="checkbox" disabled={false} />);
      const checkbox = screen.getByTestId("checkbox");
      const icon = document.querySelector(".material-icons-outlined");
      expect(checkbox.parentElement?.classList.contains("border-primary-900")).toBeTruthy();
      expect(checkbox.parentElement?.classList.contains("bg-primary-900")).toBeFalsy();
      expect(icon).not.toBeInTheDocument();
    });

    test("should support disabled when disabled is true", () => {
      render(<Checkbox data-testid="checkbox" disabled />);
      const checkbox = screen.getByTestId("checkbox");
      const icon = document.querySelector(".material-icons-outlined");
      expect(checkbox.parentElement?.classList.contains("border-dark-10")).toBeTruthy();
      expect(checkbox.parentElement?.classList.contains("bg-dark-10")).toBeTruthy();
      expect(icon).not.toBeInTheDocument();
    });
  });

  describe("disabled and checked", () => {
    test("should support disabled and checked when disabled is true and checked is true", () => {
      render(<Checkbox data-testid="checkbox" disabled checked />);
      const checkbox = screen.getByTestId("checkbox");
      const icon = document.getElementsByClassName("material-icons-outlined")[0];
      expect(checkbox.parentElement?.classList.contains("border-dark-10")).toBeTruthy();
      expect(checkbox.parentElement?.classList.contains("bg-dark-10")).toBeTruthy();
      expect(icon).toHaveStyle("color: rgba(0, 0, 0, 0.35);");
    });
  });

  describe("children", () => {
    test("should support children when children is undefined", () => {
      render(<Checkbox data-testid="checkbox"></Checkbox>);
      const label = screen.getByTestId("checkbox").parentElement?.parentElement?.childNodes[1];
      expect(label).toHaveTextContent("");
    });

    test("should support children when children is react node", () => {
      render(<Checkbox data-testid="checkbox">Checkbox</Checkbox>);
      const label = screen.getByTestId("checkbox").parentElement?.parentElement?.childNodes[1];
      expect(label).toHaveTextContent("Checkbox");
    });
  });

  describe("onChange", () => {
    test("should props event when the checkbox has change", () => {
      let checked = false;
      render(<Checkbox data-testid="checkbox" checked={checked} onChange={(e) => (checked = e.target.checked)}></Checkbox>);
      fireEvent(screen.getByTestId("checkbox"), new MouseEvent("click", { bubbles: true, cancelable: true }));
      expect(checked).toBeTruthy();
    });
  });

  describe("status and message", () => {
    test("should support status and message when status is undefined", () => {
      render(<Checkbox data-testid="checkbox" />);
      const label = document.getElementsByTagName("label")[0];
      expect(label.parentElement?.childElementCount).toEqual(1);
    });

    test("should support status and message when status is error and message is undefined", () => {
      render(<Checkbox data-testid="checkbox" status="error" />);
      const label = document.getElementsByTagName("label")[0];
      expect(screen.getByTestId("checkbox").parentElement?.classList.contains("border-danger-900")).toBeTruthy();
      expect(label.parentElement?.childElementCount).toEqual(2);
      expect(label.parentElement?.childNodes[1]).toHaveClass("text-xs text-danger-900");
      expect(label.parentElement?.childNodes[1]).toHaveTextContent("");
    });

    test('should support status and message when status is error and message is "error message"', () => {
      render(<Checkbox data-testid="checkbox" status="error" message="error message" />);
      const label = document.getElementsByTagName("label")[0];
      expect(screen.getByTestId("checkbox").parentElement?.classList.contains("border-danger-900")).toBeTruthy();
      expect(label.parentElement?.childElementCount).toEqual(2);
      expect(label.parentElement?.childNodes[1]).toHaveClass("text-xs text-danger-900");
      expect(label.parentElement?.childNodes[1]).toHaveTextContent("error message");
    });
  });
});

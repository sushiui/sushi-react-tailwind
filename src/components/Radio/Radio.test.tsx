import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Radio from "./Radio";

describe("Radio", () => {
  describe("attribute", () => {
    test("should support id, name, value", () => {
      render(<Radio data-testid="radio" id="idRadio" name="nameRadio" value="valueRadio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toHaveAttribute("id", "idRadio");
      expect(radio).toHaveAttribute("name", "nameRadio");
      expect(radio).toHaveAttribute("value", "valueRadio");
    });

    test("should support defaultChecked", () => {
      render(<Radio data-testid="radio" defaultChecked />);
      expect(screen.getByTestId("radio")).toBeChecked();
    });

    test("should support checked", () => {
      render(<Radio data-testid="radio" checked onChange={() => {}} />);
      expect(screen.getByTestId("radio")).toBeChecked();
    });
  });

  describe("disabled", () => {
    test("should support disabled when disabled is undefined", () => {
      render(<Radio data-testid="radio" />);
      const radio = screen.getByTestId("radio");
      expect(radio).toBeEnabled();
      expect(radio.classList.contains("after:block")).toBeFalsy();
      expect(radio.classList.contains("shadow-none")).toBeTruthy();
      expect(radio.classList.contains("border-primary-900")).toBeTruthy();
    });

    test("should support disabled when disabled is false", () => {
      render(<Radio data-testid="radio" disabled={false} />);
      const radio = screen.getByTestId("radio");
      expect(radio).toBeEnabled();
      expect(radio.classList.contains("after:block")).toBeFalsy();
      expect(radio.classList.contains("shadow-none")).toBeTruthy();
      expect(radio.classList.contains("border-primary-900")).toBeTruthy();
    });

    test("should support disabled when disabled is true", () => {
      render(<Radio data-testid="radio" disabled />);
      const radio = screen.getByTestId("radio");
      expect(radio).toBeDisabled();
      expect(radio.classList.contains("after:block")).toBeFalsy();
      expect(radio.classList.contains("bg-dark-10")).toBeTruthy();
      expect(radio.classList.contains("shadow-none")).toBeTruthy();
      expect(radio.classList.contains("border-dark-10")).toBeTruthy();
    });
  });

  describe("disabled and checked", () => {
    test("should support disabled and checked when disabled is true and checked is true", () => {
      render(<Radio data-testid="radio" disabled checked />);
      const radio = screen.getByTestId("radio");
      expect(radio).toBeDisabled();
      expect(radio).toBeChecked();
      expect(radio.classList.contains("after:block")).toBeTruthy();
      expect(radio.classList.contains("bg-dark-10")).toBeTruthy();
      expect(radio.classList.contains("checked:!bg-dark-10")).toBeTruthy();
      expect(radio.classList.contains("shadow-none")).toBeTruthy();
      expect(radio.classList.contains("border-dark-10")).toBeTruthy();
    });
  });

  describe("disabled and defaultChecked", () => {
    test("should support disabled and defaultChecked when disabled is true and defaultChecked is true", () => {
      render(<Radio data-testid="radio" disabled defaultChecked />);
      const radio = screen.getByTestId("radio");
      expect(radio).toBeDisabled();
      expect(radio).toBeChecked();
      expect(radio.classList.contains("after:block")).toBeTruthy();
      expect(radio.classList.contains("bg-dark-10")).toBeTruthy();
      expect(radio.classList.contains("shadow-none")).toBeTruthy();
      expect(radio.classList.contains("border-dark-10")).toBeTruthy();
    });
  });

  describe("children", () => {
    test("should support children when children is undefined", () => {
      render(<Radio data-testid="radio" />);
      expect(screen.getByTestId("radio").parentElement.childNodes[1]).toHaveTextContent("");
    });

    test("should support children when children is react node", () => {
      render(<Radio data-testid="radio">Radio</Radio>);
      const radio = screen.getByTestId("radio");
      expect(radio.parentElement.childNodes[1]).toHaveTextContent("Radio");
    });
  });

  describe("overide className", () => {
    test("should render radio as red when adding a new className", () => {
      render(<Radio data-testid="radio" className="border-red-900" />);
      const radio = screen.getByTestId("radio");
      expect(radio.classList.contains("border-red-900")).toBeTruthy();
    });
  });
});

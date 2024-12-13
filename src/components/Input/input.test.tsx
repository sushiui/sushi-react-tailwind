import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Input from "./Input";

describe("Input", () => {
  describe("attribute", () => {
    test("should support id, maxLength", () => {
      render(<Input data-testid="input" id="name" maxLength={15} />);
      const input = screen.getByTestId("input");
      expect(input).toHaveAttribute("id", "name");
      expect(input).toHaveAttribute("maxLength", "15");
    });

    test("should support defaultValue", () => {
      render(<Input data-testid="input" defaultValue="default value" />);
      expect(screen.getByTestId("input")).toHaveAttribute("value", "default value");
    });

    test("should support value", () => {
      render(<Input data-testid="input" value="value" onChange={() => {}} />);
      expect(screen.getByTestId("input")).toHaveAttribute("value", "value");
    });
  });

  describe("bordered", () => {
    test("should support bordered when bordered is undefined", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input").parentElement.classList.contains("shadow-[0_0_0_1px_rgba(0,0,0,0.10)]")).toBeTruthy();
    });

    test("should support bordered when bordered is false", () => {
      render(<Input data-testid="input" bordered={false} />);
      expect(screen.getByTestId("input").parentElement.classList.contains("shadow-none")).toBeTruthy();
    });

    test("should support bordered when bordered is true", () => {
      render(<Input data-testid="input" bordered />);
      expect(screen.getByTestId("input").parentElement.classList.contains("shadow-[0_0_0_1px_rgba(0,0,0,0.10)]")).toBeTruthy();
    });
  });

  describe("disabled", () => {
    test("should support disabled when disabled is undefined", () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toBeEnabled();
      expect(input.parentElement.classList.contains("bg-dark-10")).toBeFalsy();
      expect(input.parentElement.classList.contains("text-dark-35")).toBeFalsy();
    });

    test("should support disabled when disabled is false", () => {
      render(<Input data-testid="input" disabled={false} />);
      const input = screen.getByTestId("input");
      expect(input).toBeEnabled();
      expect(input.parentElement.classList.contains("bg-dark-10")).toBeFalsy();
      expect(input.parentElement.classList.contains("text-dark-35")).toBeFalsy();
    });

    test("should support disabled when disabled is true", () => {
      render(<Input data-testid="input" disabled />);
      const input = screen.getByTestId("input");
      expect(input).toBeDisabled();
      expect(input.parentElement.classList.contains("bg-dark-10")).toBeTruthy();
      expect(input.parentElement.classList.contains("text-dark-35")).toBeTruthy();
    });
  });

  describe("disabled and viewOnly", () => {
    test("should support disabled and viewOnly when disabled is true and viewOnly is true", () => {
      render(<Input data-testid="input" disabled viewOnly />);
      const input = screen.getByTestId("input");
      expect(input).toBeDisabled();
      expect(input.parentElement.classList.contains("bg-dark-10")).toBeTruthy();
      expect(input.parentElement.classList.contains("text-dark-35")).toBeTruthy();
    });
  });

  describe("size", () => {
    test("should support size when size is undefined", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input").parentElement.classList.contains("h-8")).toBeTruthy();
    });

    test("should support size when size is small", () => {
      render(<Input data-testid="input" size="small" />);
      expect(screen.getByTestId("input").parentElement.classList.contains("h-6")).toBeTruthy();
    });

    test("should support size when size is middle", () => {
      render(<Input data-testid="input" size="middle" />);
      expect(screen.getByTestId("input").parentElement.classList.contains("h-8")).toBeTruthy();
    });

    test("should support size when size is large", () => {
      render(<Input data-testid="input" size="large" />);
      expect(screen.getByTestId("input").parentElement.classList.contains("h-11")).toBeTruthy();
    });
  });

  describe("status and message", () => {
    test("should support status and message when status is undefined", () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input.parentElement.parentElement.childElementCount).toEqual(1);
    });

    test("should support status and message when status is error and message is undefined", () => {
      render(<Input data-testid="input" status="error" />);
      const input = screen.getByTestId("input");
      expect(input.parentElement.parentElement.childElementCount).toEqual(2);
      expect(input.classList.contains("text-danger-900")).toBeTruthy();
      expect(input.parentElement.classList.contains("border-b-danger-900")).toBeTruthy();
      expect(input.parentElement.classList.contains("pb-2px")).toBeTruthy();
      expect(input.parentElement.parentElement.childNodes[1]).toHaveClass("text-xs text-danger-900");
      expect(input.parentElement.parentElement.childNodes[1]).toHaveTextContent("");
    });

    test('should support status and message when status is error and message is "error message"', () => {
      render(<Input data-testid="input" status="error" message="error message" />);
      const input = screen.getByTestId("input");
      expect(input.parentElement.parentElement.childElementCount).toEqual(2);
      expect(input.classList.contains("text-danger-900")).toBeTruthy();
      expect(input.parentElement.classList.contains("border-b-danger-900")).toBeTruthy();
      expect(input.parentElement.classList.contains("pb-2px")).toBeTruthy();
      expect(input.parentElement.parentElement.childNodes[1]).toHaveClass("text-xs text-danger-900");
      expect(input.parentElement.parentElement.childNodes[1]).toHaveTextContent("error message");
    });

    test("should support status and message when status is warning and message is undefined", () => {
      render(<Input data-testid="input" status="warning" />);
      const input = screen.getByTestId("input");
      expect(input.parentElement.parentElement.childElementCount).toEqual(2);
      expect(input.classList.contains("bg-warning-30")).toBeTruthy();
      expect(input.parentElement.classList.contains("bg-warning-30")).toBeTruthy();
      expect(input.parentElement.parentElement.childNodes[1]).toHaveClass("text-xs");
      expect(input.parentElement.parentElement.childNodes[1]).toHaveTextContent("");
    });

    test('should support status and message when status is warning and message is "warning message"', () => {
      render(<Input data-testid="input" status="warning" message="warning message" />);
      const input = screen.getByTestId("input");
      expect(input.parentElement.parentElement.childElementCount).toEqual(2);
      expect(input.classList.contains("bg-warning-30")).toBeTruthy();
      expect(input.parentElement.classList.contains("bg-warning-30")).toBeTruthy();
      expect(input.parentElement.classList.contains("pb-4px")).toBeTruthy();
      expect(input.parentElement.parentElement.childNodes[1]).toHaveClass("text-xs");
      expect(input.parentElement.parentElement.childNodes[1]).toHaveTextContent("warning message");
    });

    test("should support status and message when status is success and message is undefined", () => {
      render(<Input data-testid="input" status="success" />);
      const input = screen.getByTestId("input");
      expect(input.parentElement.parentElement.childElementCount).toEqual(2);
      expect(input.parentElement.classList.contains("border-b-green-800")).toBeTruthy();
      expect(input.parentElement.classList.contains("pb-2px")).toBeTruthy();
      expect(input.parentElement.parentElement.childNodes[1]).toHaveClass("text-xs");
      expect(input.parentElement.parentElement.childNodes[1]).toHaveTextContent("");
    });

    test('should support status and message when status is success and message is "success message"', () => {
      render(<Input data-testid="input" status="success" message="success message" />);
      const input = screen.getByTestId("input");
      expect(input.parentElement.parentElement.childElementCount).toEqual(2);
      expect(input.parentElement.classList.contains("border-b-green-800")).toBeTruthy();
      expect(input.parentElement.classList.contains("pb-2px")).toBeTruthy();
      expect(input.parentElement.parentElement.childNodes[1]).toHaveClass("text-xs");
      expect(input.parentElement.parentElement.childNodes[1]).toHaveTextContent("success message");
    });
  });

  describe("suffix", () => {
    test("should support suffix when suffix is undefined", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input").parentElement.childElementCount).toEqual(1);
    });

    test("should support suffix when suffix is react node", () => {
      render(<Input data-testid="input" suffix={<span className="material-icons-outlined">search</span>} />);
      const input = screen.getByTestId("input");
      const suffixWrapper = screen.getByTestId("input").parentElement.childNodes[1];
      expect(input.parentElement.childElementCount).toEqual(2);
      expect(suffixWrapper.childNodes[0]).toHaveClass("material-icons-outlined");
      expect(suffixWrapper.childNodes[0]).toHaveTextContent("search");
    });
  });

  describe("allowClear", () => {
    test("should support allowClear when allowClear is undefined", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input").parentElement.childElementCount).toEqual(1);
    });

    test("should support allowClear when allowClear is false", () => {
      render(<Input data-testid="input" allowClear={false} />);
      expect(screen.getByTestId("input").parentElement.childElementCount).toEqual(1);
    });

    test("should support allowClear when allowClear is true", () => {
      render(<Input data-testid="input" allowClear />);
      const input = screen.getByTestId("input");
      const allowClearWrapper = screen.getByTestId("input").parentElement.childNodes[1];
      const allowClear = allowClearWrapper.childNodes[0];
      expect(input.parentElement.childElementCount).toEqual(2);
      expect(allowClear).toHaveClass("material-icons-outlined");
      expect(allowClear).toHaveTextContent("close");
    });

    test("should support allowClear when allowClear is react node", () => {
      render(<Input data-testid="input" allowClear={{ clearIcon: <span className="material-icons-outlined">info</span> }} />);
      const input = screen.getByTestId("input");
      const allowClearWrapper = screen.getByTestId("input").parentElement.childNodes[1];
      const allowClear = allowClearWrapper.childNodes[0];
      expect(input.parentElement.childElementCount).toEqual(2);
      expect(allowClear).toHaveClass("material-icons-outlined");
      expect(allowClear).toHaveTextContent("info");
    });

    test("should support allowClear when value is undefined", () => {
      render(<Input data-testid="input" allowClear />);
      expect(screen.getByTestId("input").parentElement.childNodes[1]).toHaveClass("opacity-0 pointer-events-none");
    });

    test("should support allowClear when value is empty string", () => {
      render(<Input data-testid="input" allowClear value="" onChange={() => {}} />);
      expect(screen.getByTestId("input").parentElement.childNodes[1]).toHaveClass("opacity-0 pointer-events-none");
    });

    test("should support allowClear when value is not undefined or empty string", () => {
      render(<Input data-testid="input" allowClear value="value" onChange={() => {}} />);
      fireEvent.mouseEnter(screen.getByTestId("input"));
      expect(screen.getByTestId("input").parentElement.childNodes[1]).toHaveClass("opacity-100 pointer-events-auto");
    });

    test("should clear value", () => {
      render(<Input data-testid="input" allowClear value="value" onChange={() => {}} />);
      fireEvent.mouseEnter(screen.getByTestId("allowClear"));
      expect(screen.getByTestId("input")).toHaveTextContent("");
    });
  });

  describe("suffix and allowClear", () => {
    test("should support suffix and allowClear when suffix is react node and allowClear is true", () => {
      render(<Input data-testid="input" allowClear suffix={<span className="material-icons-outlined">search</span>} />);
      const input = screen.getByTestId("input");
      const allowClear = input.parentElement.childNodes[1].childNodes[0];
      const suffix = input.parentElement.childNodes[2].childNodes[0];
      expect(input.parentElement.childElementCount).toEqual(3);
      expect(allowClear).toHaveClass("material-icons-outlined");
      expect(allowClear).toHaveTextContent("close");
      expect(suffix).toHaveClass("material-icons-outlined");
      expect(suffix).toHaveTextContent("search");
    });
  });

  describe("view only", () => {
    test("should support viewOnly when viewOnly is undefined", () => {
      render(<Input data-testid="input" />);
      const input = screen.getByTestId("input");
      expect(input).toBeEnabled();
      expect(input.parentElement.classList.contains("shadow-[0_0_0_1px_rgba(0,0,0,0.10)]")).toBeTruthy();
      expect(input.parentElement.classList.contains("rounded")).toBeTruthy();
    });

    test("should support viewOnly when viewOnly is false", () => {
      render(<Input data-testid="input" viewOnly={false} />);
      const input = screen.getByTestId("input");
      expect(input).toBeEnabled();
      expect(input.parentElement.classList.contains("shadow-[0_0_0_1px_rgba(0,0,0,0.10)]")).toBeTruthy();
      expect(input.parentElement.classList.contains("rounded")).toBeTruthy();
    });

    test("should support viewOnly when viewOnly is true", () => {
      render(<Input data-testid="input" viewOnly />);
      const input = screen.getByTestId("input");
      expect(input).toBeDisabled();
      expect(input.classList.contains("disabled:bg-white")).toBeTruthy();
      expect(input.parentElement.classList.contains("border-b-black-10")).toBeTruthy();
      expect(input.parentElement.classList.contains("rounded-none")).toBeTruthy();
      expect(input.parentElement.classList.contains("shadow-none")).toBeTruthy();
    });
  });

  describe("text align", () => {
    test("should support textAlign when textAlign is undefined", () => {
      render(<Input data-testid="input" />);
      expect(screen.getByTestId("input").classList.contains("text-right")).toBeFalsy();
    });

    test("should support textAlign when textAlign is left", () => {
      render(<Input data-testid="input" textAlign="left" />);
      expect(screen.getByTestId("input").classList.contains("text-right")).toBeFalsy();
    });

    test("should support textAlign when textAlign is right", () => {
      render(<Input data-testid="input" textAlign="right" />);
      expect(screen.getByTestId("input").classList.contains("text-right")).toBeTruthy();
    });
  });
});

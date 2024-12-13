import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Dropdown from "./Dropdown";

const options = [{ value: "1", label: "option1" }];

describe("Dropdown", () => {
  describe("attribute", () => {
    test("should support id, name", () => {
      render(<Dropdown data-testid="dropdown" id="idDropdown" name="nameDropdown" />);
      const dropdown = screen.getByTestId("dropdown");
      const inputSearch = dropdown.getElementsByClassName("ss-select-selection-search-input")[0];
      expect(dropdown).toBeInTheDocument();
      expect(dropdown).toHaveAttribute("name", "nameDropdown");
      expect(inputSearch).toHaveAttribute("id", "idDropdown");
    });

    test("should support defaultValue", () => {
      render(<Dropdown data-testid="dropdown" options={options} defaultValue="1" />);
      expect(document.querySelector(".ss-select-selection-item")).toHaveTextContent("option1");
    });

    test("should support value", () => {
      render(<Dropdown data-testid="dropdown" options={options} value="1" />);
      expect(document.querySelector(".ss-select-selection-item")).toHaveTextContent("option1");
    });
  });

  describe("bordered", () => {
    test("should support bordered when bordered is undefined", () => {
      render(<Dropdown data-testid="dropdown" />);
      expect(screen.getByTestId("dropdown").parentElement).not.toHaveClass("ss-dropdown-no-border");
    });

    test("should support bordered when bordered is false", () => {
      render(<Dropdown data-testid="dropdown" bordered={false} />);
      expect(screen.getByTestId("dropdown").parentElement).toHaveClass("ss-dropdown-no-border");
    });

    test("should support bordered when bordered is true", () => {
      render(<Dropdown data-testid="dropdown" bordered />);
      expect(screen.getByTestId("dropdown").parentElement).not.toHaveClass("ss-dropdown-no-border");
    });
  });

  describe("disabled", () => {
    test("should support disabled when disabled is undefined", () => {
      render(<Dropdown data-testid="dropdown" />);
      expect(screen.getByTestId("dropdown")).not.toHaveClass("ss-select-disabled");
      expect(document.querySelector(".ss-select-selection-search-input")).toBeEnabled();
    });

    test("should support disabled when disabled is false", () => {
      render(<Dropdown data-testid="dropdown" disabled={false} />);
      expect(screen.getByTestId("dropdown")).not.toHaveClass("ss-select-disabled");
      expect(document.querySelector(".ss-select-selection-search-input")).toBeEnabled();
    });

    test("should support disabled when disabled is true", () => {
      render(<Dropdown data-testid="dropdown" disabled />);
      expect(screen.getByTestId("dropdown")).toHaveClass("ss-select-disabled");
      expect(document.querySelector(".ss-select-selection-search-input")).toBeDisabled();
    });
  });

  describe("size", () => {
    test("should support size when size is undefined", () => {
      render(<Dropdown data-testid="dropdown" />);
      expect(screen.getByTestId("dropdown").parentElement.classList.contains("h-8")).toBeTruthy();
    });

    test("should support size when size is small", () => {
      render(<Dropdown data-testid="dropdown" size="small" />);
      expect(screen.getByTestId("dropdown").parentElement).toHaveClass("h-6");
    });

    test("should support size when size is middle", () => {
      render(<Dropdown data-testid="dropdown" size="middle" />);
      expect(screen.getByTestId("dropdown").parentElement).toHaveClass("h-8");
    });

    test("should support size when size is large", () => {
      render(<Dropdown data-testid="dropdown" size="large" />);
      expect(screen.getByTestId("dropdown").parentElement).toHaveClass("h-11");
    });
  });

  describe("arrow", () => {
    test("should support arrow when isOpen is false", () => {
      render(<Dropdown data-testid="dropdown" options={options} />);
      expect(document.querySelector(".ss-select-arrow")).toHaveTextContent("expand_more");
    });

    test("should support arrow when isOpen is true", async () => {
      render(<Dropdown data-testid="dropdown" options={options} />);
      fireEvent.click(screen.getByTestId("dropdown"));
      await waitFor(() => {
        expect(document.querySelector(".ss-select-arrow")).toHaveTextContent("expand_less");
      });
    });
  });

  describe("textAlign", () => {
    test("should support textAlign when textAlign is undefined", () => {
      render(<Dropdown data-testid="dropdown" />);
      expect(screen.getByTestId("dropdown").parentElement).not.toHaveClass("text-right");
    });

    test("should support textAlign when textAlign is left", () => {
      render(<Dropdown data-testid="dropdown" textAlign="left" />);
      expect(screen.getByTestId("dropdown").parentElement).not.toHaveClass("text-right");
    });

    test("should support textAlign when textAlign is right", () => {
      render(<Dropdown data-testid="dropdown" textAlign="right" />);
      expect(screen.getByTestId("dropdown").parentElement).toHaveClass("text-right");
    });
  });

  describe("status and message", () => {
    test("should support status when status is undefined", () => {
      render(<Dropdown data-testid="dropdown" />);
      const wrapper = document.querySelector(".ss-dropdown");
      expect(wrapper.nextSibling).not.toBeInTheDocument();
    });

    test('should support status and message when status is error and message is "error message"', () => {
      render(<Dropdown data-testid="dropdown" status="error" message="error message" />);
      const wrapper = document.querySelector(".ss-dropdown");
      expect(wrapper).toHaveClass("ss-dropdown-error");
      expect(wrapper.nextSibling).toHaveClass("text-danger-900");
      expect(wrapper.nextSibling).toHaveTextContent("error message");
    });

    test('should support status and message when status is warning and message is "warning message"', () => {
      render(<Dropdown data-testid="dropdown" status="warning" message="warning message" />);
      const wrapper = document.querySelector(".ss-dropdown");
      expect(wrapper).toHaveClass("ss-dropdown-warning");
      expect(wrapper.nextSibling).not.toHaveClass("text-danger-900");
      expect(wrapper.nextSibling).toHaveTextContent("warning message");
    });
  });

  describe("ellipsis", () => {
    test("should support ellipsis when ellipsis is undefined", () => {
      render(<Dropdown data-testid="dropdown" />);
      expect(screen.getByTestId("dropdown").parentElement).not.toHaveClass("ss-dropdown-no-ellipsis");
    });

    test("should support ellipsis when ellipsis is true", () => {
      render(<Dropdown data-testid="dropdown" ellipsis={true} />);
      expect(screen.getByTestId("dropdown").parentElement).not.toHaveClass("ss-dropdown-no-ellipsis");
    });

    test("should support ellipsis when ellipsis is false", () => {
      render(<Dropdown data-testid="dropdown" ellipsis={false} />);
      expect(screen.getByTestId("dropdown").parentElement).toHaveClass("ss-dropdown-no-ellipsis");
    });
  });

  describe("showSearch", () => {
    test("should support showSearch when showSearch is undefined", () => {
      render(<Dropdown data-testid="dropdown" />);
      const wrapper = document.querySelector(".ss-dropdown");
      expect(wrapper).not.toHaveClass("ss-dropdown-show-search");
    });

    test("should support showSearch when showSearch is false", () => {
      render(<Dropdown data-testid="dropdown" showSearch={false} />);
      const wrapper = document.querySelector(".ss-dropdown");
      expect(wrapper).not.toHaveClass("ss-dropdown-show-search");
    });

    test("should support showSearch when showSearch is true", () => {
      render(<Dropdown data-testid="dropdown" showSearch={true} />);
      const wrapper = document.querySelector(".ss-dropdown");
      expect(wrapper).toHaveClass("ss-dropdown-show-search");
    });
  });

  describe("dropdownRender", () => {
    test("should render custom dropdown correctly", async () => {
      render(<Dropdown data-testid="dropdown" open dropdownRender={() => <div className="rc-custom-dropdown-render">Custom render</div>} />);

      fireEvent.click(screen.getByTestId("dropdown"));

      await waitFor(() => {
        const dropdownRender = document.querySelector(".rc-custom-dropdown-render");
        expect(dropdownRender).toHaveTextContent("Custom render");
      });
    });
  });
});

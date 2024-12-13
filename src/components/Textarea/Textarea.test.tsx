import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Textarea from "./Textarea";

describe("Textarea", () => {
  describe("Normal", () => {
    test("should show normal element", () => {
      render(<Textarea data-testid="t1" defaultValue="date test"></Textarea>);
      const textarea = screen.getByTestId("t1");

      expect(textarea.innerHTML).toEqual("date test");
      expect(textarea.classList.contains("outline-0")).toBeTruthy();
      expect(textarea.classList.contains("rounded")).toBeTruthy();
      expect(textarea.classList.contains("py-4px")).toBeTruthy();
      expect(textarea.classList.contains("px-11px")).toBeTruthy();
      expect(textarea.classList.contains("leading-1.5715")).toBeTruthy();
    });

    test("should show effect on normal element when receiving fous", () => {
      render(<Textarea data-testid="t1"></Textarea>);
      const textarea = screen.getByTestId("t1");

      textarea.focus();

      expect(textarea.classList.contains("shadow-10")).toBeTruthy();
      expect(textarea.classList.contains("focus:border-b-2")).toBeTruthy();
      expect(textarea.classList.contains("focus:border-b-primary-900")).toBeTruthy();
    });

    test("should show element on small size when size is small", () => {
      render(<Textarea data-testid="t1" size="small"></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("py-0")).toBeTruthy();
      expect(textarea.classList.contains("px-7px")).toBeTruthy();
    });

    test("should show element on large size when size is large", () => {
      render(<Textarea data-testid="t1" size="large"></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("py-6.5px")).toBeTruthy();
      expect(textarea.classList.contains("px-11px")).toBeTruthy();
      expect(textarea.classList.contains("text-16px")).toBeTruthy();
    });

    test("should show elemen on middle size when size is middle", () => {
      render(<Textarea data-testid="t1" size="middle"></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("outline-0")).toBeTruthy();
      expect(textarea.classList.contains("rounded")).toBeTruthy();
      expect(textarea.classList.contains("py-4px")).toBeTruthy();
      expect(textarea.classList.contains("px-11px")).toBeTruthy();
      expect(textarea.classList.contains("leading-1.5715")).toBeTruthy();
    });

    test("should call onChange when typing data on textarea", () => {
      const onChange = jest.fn();
      render(<Textarea data-testid="t1" onChange={onChange}></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.change(textarea, { target: { value: "1234" } });

      expect(onChange).toHaveBeenCalled();
    });

    test("should show value on value properties when there are both defaultValue and value properties", () => {
      render(<Textarea data-testid="t1" defaultValue="default" value="data"></Textarea>);
      const textarea = screen.getByTestId("t1");

      expect(textarea).toHaveValue("data");
    });
  });

  describe("disabled", () => {
    test("should set disabled attribute on element", () => {
      render(<Textarea data-testid="t1" disabled></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea).toBeDisabled();
      expect(textarea.classList.contains("disabled:text-dark-35")).toBeTruthy();
      expect(textarea.classList.contains("disabled:bg-dark-10")).toBeTruthy();
    });

    test("should remove disabled attribute on element", () => {
      render(<Textarea data-testid="t1" disabled={false}></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea).toBeEnabled();
      expect(textarea.classList.contains("disabled:")).toBeFalsy();
    });
  });

  describe("readOnly", () => {
    test("should set readOnly attribute on element", () => {
      render(<Textarea data-testid="t1" readOnly={true}></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("rounded-none")).toBeTruthy();
      expect(textarea.classList.contains("border-b")).toBeTruthy();
      expect(textarea.classList.contains("border-b-dark-10")).toBeTruthy();
    });

    test("should remove readOnly attribute on element", () => {
      render(<Textarea data-testid="t1" readOnly={false}></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("rounded-none")).toBeFalsy();
      expect(textarea.classList.contains("border-b")).toBeFalsy();
      expect(textarea.classList.contains("border-b-dark-10")).toBeFalsy();
    });
  });

  describe("disabled and readOnly", () => {
    test("should effect only disabled when set both readOnly and disabled attribute on element", () => {
      render(<Textarea data-testid="t1" readOnly disabled></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea).toBeDisabled();
      expect(textarea.classList.contains("disabled:text-dark-35")).toBeTruthy();
      expect(textarea.classList.contains("disabled:bg-dark-10")).toBeTruthy();
    });
  });

  describe("Error", () => {
    test("should show nothing when both status is undefined", () => {
      render(<Textarea data-testid="t1"></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.parentElement.classList.contains("mb-5")).toBeFalsy();
    });

    test("should effect on error element when status is error", () => {
      render(<Textarea data-testid="t1" status="error"></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("shadow-10")).toBeTruthy();
      expect(textarea.classList.contains("border-b-2")).toBeTruthy();
      expect(textarea.classList.contains("border-b-danger-900")).toBeTruthy();
      expect(textarea.classList.contains("text-danger-900")).toBeTruthy();
      expect(textarea.classList.contains("pb-0.5")).toBeTruthy();
      expect(textarea.parentElement.classList.contains("mb-0")).toBeTruthy();
    });
  });

  describe("No border", () => {
    test("should show border when bordered is set", () => {
      render(<Textarea data-testid="t1" bordered={true}></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("outline-0")).toBeTruthy();
      expect(textarea.classList.contains("rounded")).toBeTruthy();
      expect(textarea.classList.contains("align-bottom")).toBeTruthy();
    });

    test("should hide border when bordered is unset", () => {
      render(<Textarea data-testid="t1" bordered={false}></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("outline-0")).toBeTruthy();
      expect(textarea.classList.contains("rounded-none")).toBeTruthy();
      expect(textarea.classList.contains("border-none")).toBeTruthy();
      expect(textarea.classList.contains("shodow-none")).toBeTruthy();
    });
  });

  describe("Allow Clear", () => {
    test("should show icon close when there is data", () => {
      render(<Textarea data-testid="t1" allowClear={true} value="data test"></Textarea>);
      const textarea = screen.getByTestId("t1");

      const allowClearElement = textarea.nextElementSibling;

      expect(allowClearElement).not.toBeNull();
      expect(allowClearElement.classList.contains("material-icons-outlined")).toBeTruthy();
      expect(allowClearElement.classList.contains("absolute")).toBeTruthy();
      expect(allowClearElement.classList.contains("top-22px")).toBeTruthy();
      expect(allowClearElement.classList.contains("right-22px")).toBeTruthy();
      expect(allowClearElement.classList.contains("opacity-50")).toBeTruthy();
      expect(allowClearElement.classList.contains("hover:opacity-100")).toBeTruthy();
      expect(allowClearElement.classList.contains("hover:cursor-pointer")).toBeTruthy();
    });

    test("should hide icon when there is no data", () => {
      render(<Textarea data-testid="t1" allowClear={true} value="data test"></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.change(textarea, { target: { value: "" } });

      const allowClearElement = textarea.nextElementSibling;
      expect(allowClearElement).toBeNull();
    });

    test("should hide icon when allowClear is false", () => {
      render(<Textarea data-testid="t1" allowClear={false} value="data test"></Textarea>);
      const textarea = screen.getByTestId("t1");

      const allowClearElement = textarea.nextElementSibling;
      expect(allowClearElement).toBeNull();
    });

    test("should clear value when click on allowClear's icon", () => {
      render(<Textarea data-testid="t1" allowClear={true} defaultValue="data test"></Textarea>);
      const textarea = screen.getByTestId("t1");

      expect(textarea).toHaveValue("data test");

      const allowClearElement = textarea.nextElementSibling;

      fireEvent.click(allowClearElement);

      expect(textarea).toHaveValue("");
    });

    test("should show clear_all icon when clearIcon is set", () => {
      render(
        <Textarea
          data-testid="t1"
          allowClear={{
            clearIcon: <span className="text-16px material-icons-outlined">clear_all</span>,
          }}
          defaultValue="data test"
        ></Textarea>
      );
      const textarea = screen.getByTestId("t1");

      const allowClearElement = textarea.nextElementSibling.children[0];
      const allowClearIcon = textarea.nextElementSibling.children[0].innerHTML;

      expect(allowClearElement.classList.contains("text-16px")).toBeTruthy();
      expect(allowClearElement.classList.contains("material-icons-outlined")).toBeTruthy();
      expect(allowClearIcon).toEqual("clear_all");
    });
  });

  describe("onPressEnter", () => {
    test("should call onPressEnter when press on only Enter key", () => {
      const onPressEnter = jest.fn();
      render(<Textarea data-testid="t1" value="data test" onPressEnter={onPressEnter}></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.keyDown(textarea, { key: "Enter" });

      expect(onPressEnter).toHaveBeenCalled();
    });

    test("should not call onPressEnter when press on any key", () => {
      const onPressEnter = jest.fn();
      render(<Textarea data-testid="t1" value="data test" onPressEnter={onPressEnter}></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.keyDown(textarea, { key: "Delete" });

      expect(onPressEnter).not.toHaveBeenCalled();
    });
  });

  describe("onShowCount", () => {
    test("show length of data when showCount is set", () => {
      render(<Textarea data-testid="t1" showCount={true}></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.change(textarea, { target: { value: "123" } });

      const dataCount = textarea.parentElement.getAttribute("data-count");

      expect(dataCount).toEqual("3");
    });

    test("should show length of data / maxLength when showCount and maxLength is set", () => {
      render(<Textarea data-testid="t1" showCount={true} maxLength={10}></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.change(textarea, { target: { value: "123" } });

      const dataCount = textarea.parentElement.getAttribute("data-count");

      expect(dataCount).toEqual("3 / 10");
    });

    test("should show length of data / maxLength when showCount and maxLength is set", () => {
      render(<Textarea data-testid="t1" showCount={true} maxLength={10}></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.change(textarea, { target: { value: "" } });

      const dataCount = textarea.parentElement.getAttribute("data-count");

      expect(dataCount).toEqual("0 / 10");
    });

    test("show hide show count format when showCount is unset", () => {
      render(<Textarea data-testid="t1" showCount={false} maxLength={10}></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.change(textarea, { target: { value: "123" } });

      const dataCount = textarea.parentElement.getAttribute("data-count");

      expect(dataCount).toBeNull();
    });
  });

  describe("autoSize", () => {
    test("should disbled resizing when autoSize is set", () => {
      render(<Textarea data-testid="t1" autoSize={true}></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("resize-none")).toBeTruthy();
      expect(textarea.classList.contains("box-border")).toBeTruthy();
      expect(textarea.classList.contains("h-34px")).toBeTruthy();
      expect(textarea.classList.contains("max-h-9.0072e15px")).toBeTruthy();
    });

    test("should enable resizing when autoSize is unset", () => {
      render(<Textarea data-testid="t1" autoSize={false}></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("resize-none")).toBeFalsy();
      expect(textarea.classList.contains("box-border")).toBeFalsy();
      expect(textarea.classList.contains("h-34px")).toBeFalsy();
      expect(textarea.classList.contains("max-h-9.0072e15px")).toBeFalsy();
    });

    test("should enable resizing when autoSize are minsRows and maxRows", () => {
      render(<Textarea data-testid="t1" autoSize={{ minRows: 3, maxRows: 5 }}></Textarea>);
      const textarea = screen.getByTestId("t1");
      expect(textarea.classList.contains("resize-none")).toBeTruthy();
      expect(textarea.classList.contains("box-border")).toBeTruthy();
      expect(textarea.classList.contains("h-34px")).toBeFalsy();
      expect(textarea.classList.contains("max-h-9.0072e15px")).toBeFalsy();
    });

    test("should call onResize when mouse down on", () => {
      const onResize = jest.fn();
      render(<Textarea data-testid="t1" value="data test" onResize={onResize}></Textarea>);
      const textarea = screen.getByTestId("t1");

      fireEvent.mouseDown(textarea);

      expect(onResize).toHaveBeenCalled();
      expect(onResize).toHaveBeenCalledWith({ width: 0, height: 0, offsetHeight: 0, offsetWidth: 0 });
    });
  });
});

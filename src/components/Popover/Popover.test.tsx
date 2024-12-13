import "@testing-library/jest-dom";
import { act, fireEvent, render } from "@testing-library/react";
import Popover from "./Popover";
import React from "react";

describe("Popover", () => {
  test("should create", () => {
    const { getByTestId } = render(
      <Popover content={<div data-testid="content-popover">abc</div>} trigger="click">
        <div data-testid="click-button">Click</div>
      </Popover>
    );

    act(() => {
      fireEvent.click(getByTestId("click-button"));
    });

    expect(getByTestId("click-button")).toBeInTheDocument();
    expect(getByTestId("content-popover")).toBeInTheDocument();
  });

  test("show show popover when mouseover", () => {
    const { getByTestId } = render(
      <Popover content={<div data-testid="content-popover">abc</div>}>
        <div data-testid="click-button">Click</div>
      </Popover>
    );

    act(() => {
      fireEvent.mouseOver(getByTestId("click-button"));
    });

    expect(getByTestId("click-button")).toBeInTheDocument();
    expect(getByTestId("content-popover")).toBeInTheDocument();
  });
});

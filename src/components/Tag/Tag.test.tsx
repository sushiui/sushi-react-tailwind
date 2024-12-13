import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import Tag from "./Tag";
import "@testing-library/jest-dom";

describe("Test link", () => {
  it("should render", () => {
    const { getByTestId } = render(<Tag>Test render</Tag>);
    expect(getByTestId("sushi-tag")).toBeInTheDocument;
  });

  it("should support color", () => {
    const { getByTestId } = render(<Tag color="#fff">Test render</Tag>);
    expect(getByTestId("sushi-tag").style.backgroundColor).toEqual("rgb(255, 255, 255)");
  });

  it("should support visible", () => {
    const { getByTestId } = render(<Tag visible={false}>Test render</Tag>);
    expect(getByTestId("sushi-tag").classList.contains("hidden")).toBeTruthy();
  });

  it("should support closable", () => {
    render(<Tag closable>Test render</Tag>);
    expect(screen.getByTestId("sushi-tag-closable")).toBeInTheDocument();
  });

  it("should support closeIcon", () => {
    render(
      <Tag closable closeIcon={<div data-testid="custom-close-icon">CLOSE</div>}>
        Test render
      </Tag>
    );
    expect(screen.getByTestId("custom-close-icon")).toBeInTheDocument();
  });

  it("should support onClose", () => {
    const mockFn = jest.fn();
    render(
      <Tag onClose={mockFn} closable>
        Test render
      </Tag>
    );
    fireEvent.click(screen.getByTestId("sushi-tag-closable"));
    expect(screen.getByTestId("sushi-tag-closable")).toBeInTheDocument();
    expect(mockFn).toHaveBeenCalled();
  });
});

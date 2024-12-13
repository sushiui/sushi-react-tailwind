import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BackTop from "./BackTop";

describe("BackTop", () => {
  window.scrollTo = jest.fn();

  test("is should success", () => {
    render(
      <div style={{ height: "300vh" }}>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <BackTop visible />
      </div>
    );

    expect(screen.getByTestId("back-top")).toBeInTheDocument();
    expect(screen.getByTestId("back-top-default-element")).toBeInTheDocument();
  });

  test("is should display children element", () => {
    render(
      <div style={{ height: "300vh" }}>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <BackTop visible>
          <div date-testid="back-top-children">UP</div>
        </BackTop>
      </div>
    );
    expect(screen.getByTestId("back-top")).toBeInTheDocument();
    expect(screen.getByTestId("back-top-children")).toBeInTheDocument();
  });

  test("is should send onClick when click BackTop", () => {
    let hasClick = false;
    render(
      <div data-testid="container" style={{ height: "1000vh" }}>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <BackTop visible onClick={() => (hasClick = true)} />
      </div>
    );
    fireEvent(screen.getByTestId("back-top-btn"), new MouseEvent("click", { bubbles: true, cancelable: true }));

    expect(hasClick).toBeTruthy();
  });

  test("should support className", () => {
    render(
      <div style={{ height: "300vh" }}>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <div>Scroll to bottom</div>
        <BackTop visible className="top-10" />
      </div>
    );

    expect(screen.getByTestId("back-top")).toBeInTheDocument();
    expect(screen.getByTestId("back-top")).toHaveAttribute("class", "top-10");
  });
});

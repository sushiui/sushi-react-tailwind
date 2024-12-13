import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Lift from "./Lift";
import Card from "../Card/Card";

const labels = [
  { title: "First", href: "first-card" },
  { title: "Second", href: "second-card" },
];

describe("Lift", () => {
  describe("labels", () => {
    test("should set first active label color", () => {
      render(
        <>
          <Lift data-testid="lift" labels={labels} />
          <Card title="First Card" id="first-card">
            <div className="h-10">Card content</div>
          </Card>
          <Card title="Second Card" id="second-card">
            <div className="h-20">Card content</div>
          </Card>
        </>
      );
      const lift = screen.getByTestId("lift");
      expect(screen.queryByText("First")).toHaveClass("bg-primary-900");
      expect(screen.queryByText("First")).toHaveClass("font-bold");
      expect(screen.queryByText("Second")).toHaveClass("bg-dark-10");
    });
  });

  describe("backgroundColor", () => {
    test("should support backgroundColor when backgroundColor is undefined", () => {
      render(<Lift data-testid="lift" labels={labels} />);
      const styles = getComputedStyle(screen.getByTestId("lift"));
      expect(styles.backgroundColor).toEqual("");
    });

    test("should support backgroundColor", () => {
      render(<Lift data-testid="lift" labels={labels} backgroundColor="red" />);
      const styles = getComputedStyle(screen.getByTestId("lift"));
      expect(styles.backgroundColor).toEqual("red");
    });
  });

  describe("top", () => {
    test("should support top when top is undefined", () => {
      render(<Lift data-testid="lift" labels={labels} />);
      const styles = getComputedStyle(screen.getByTestId("lift"));
      expect(styles.top).toEqual("0px");
    });

    test("should support top", () => {
      render(<Lift data-testid="lift" labels={labels} top={48} />);
      const styles = getComputedStyle(screen.getByTestId("lift"));
      expect(styles.top).toEqual("48px");
    });
  });

  describe("className", () => {
    test("should support className when className is undefined", () => {
      render(<Lift data-testid="lift" labels={labels} />);
      expect(screen.getByTestId("lift").classList.contains("flex")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("flex-wrap")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("gap-2")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("h-fit")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("py-2")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("sticky")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("bg-light-95")).toBeTruthy();
    });

    test("should support className", () => {
      render(<Lift data-testid="lift" labels={labels} className="z-10" />);
      expect(screen.getByTestId("lift").classList.contains("flex")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("flex-wrap")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("gap-2")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("h-fit")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("py-2")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("sticky")).toBeTruthy();
      expect(screen.getByTestId("lift").classList.contains("bg-light-95")).toBeTruthy();

      expect(screen.getByTestId("lift").classList.contains("z-10")).toBeTruthy();
    });
  });
});

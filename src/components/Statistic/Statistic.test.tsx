import "@testing-library/jest-dom";
import React from "react";
import { render, screen } from "@testing-library/react";
import Statistic from "./Statistic";

describe("Statistic", () => {
  describe("title", () => {
    test("should support title when title is undefined", () => {
      render(<Statistic data-testid="statistic" />);
      expect(screen.getByTestId("statistic").classList.contains("w-fit")).toBeFalsy();
    });

    test("should support title when title is not undefined", () => {
      render(<Statistic data-testid="statistic" title="title" />);
      expect(screen.getByTestId("statistic").classList.contains("w-fit")).toBeTruthy();
      expect(screen.getByText("title")).toBeInTheDocument();
    });
  });

  describe("value", () => {
    test("should support value when value is string", () => {
      render(<Statistic data-testid="statistic" value="value" />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("value");
    });

    test("should support value when value is number", () => {
      render(<Statistic data-testid="statistic" value={112893} />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("112,893");
    });

    test("should support value when value is null", () => {
      render(<Statistic data-testid="statistic" value={null} />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("");
    });

    test("should support value when value is undefined", () => {
      render(<Statistic data-testid="statistic" value={undefined} />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("");
    });
  });

  describe("precision and decimalSeparator", () => {
    test("should support precision when precision is undefined", () => {
      render(<Statistic data-testid="statistic" value={112893.0} />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("112,893");
    });

    test("should support precision and decimalSeparator", () => {
      render(<Statistic data-testid="statistic" value={112893.0} precision={2} decimalSeparator=". " />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("112,893. 00");
    });
  });

  describe("groupSeparator", () => {
    test("should support groupSeparator", () => {
      render(<Statistic data-testid="statistic" value={112893} groupSeparator=", " />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("112, 893");
    });
  });

  describe("loading", () => {
    test("should support loading when loading is undefined", () => {
      render(<Statistic data-testid="statistic" />);
      expect(screen.queryByTestId("sushi-spin")).not.toBeInTheDocument();
    });

    test("should support loading when loading is not undefined", () => {
      render(<Statistic data-testid="statistic" loading />);
      expect(screen.getByTestId("sushi-spin")).toBeInTheDocument();
    });
  });

  describe("prefix", () => {
    test("should support prefix", () => {
      render(<Statistic data-testid="statistic" value={112893} prefix="$" />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("$112,893");
    });
  });

  describe("prefix", () => {
    test("should support suffix", () => {
      render(<Statistic data-testid="statistic" value={98} suffix="%" />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("98%");
    });
  });

  describe("valueRender", () => {
    test("should support valueRender", () => {
      render(<Statistic data-testid="statistic" value={112893} valueRender={(value) => <>{value}</>} />);
      expect(screen.getByTestId("statistic")).toHaveTextContent("112,893");
    });
  });

  describe("valueStyle", () => {
    test("should support valueStyle", () => {
      render(<Statistic data-testid="statistic" value={112893} valueStyle={{ color: "red" }} />);
      const styles = getComputedStyle(screen.getByText("112,893").parentElement);
      expect(styles.color).toBe("red");
    });
  });
});

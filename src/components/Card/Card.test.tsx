import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import React from "react";
import Card from "./Card";

jest.mock("../Spin/Spin", () => ({
  __esModule: true,
  default: () => <div data-testid={"sushi-spin"}></div>,
}));

describe("Card", () => {
  test("it should success", () => {
    render(<Card />);
    expect(screen.getByTestId("sushi-card")).toBeInTheDocument();
    expect(screen.queryByTestId("sushi-card-children")).toBeNull();
  });

  test("it should success when custom data-testid", () => {
    render(<Card data-testid="custom-data-testid" />);
    expect(screen.getByTestId("custom-data-testid")).toBeInTheDocument();
  });

  test("it should add boarder", () => {
    render(<Card bordered />);
    const node = screen.getByTestId("sushi-card");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("border")).toBeTruthy();
    expect(node.classList.contains("border-dark-0.06")).toBeTruthy();
  });

  test("it should loading", () => {
    render(<Card loading />);
    expect(screen.getByTestId("sushi-card")).toBeInTheDocument();
    expect(screen.getByTestId("sushi-spin")).toBeInTheDocument();
  });

  test("it should add padding", () => {
    render(<Card padding="p-2" />);
    const node = screen.getByTestId("sushi-card");
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("p-2")).toBeTruthy();
  });

  test("it should show title", () => {
    render(<Card title={"test title"} />);
    const node = screen.getByTestId("sushi-card");
    expect(node).toBeInTheDocument();
    expect(screen.getByText("test title")).toBeInTheDocument();
  });

  test("it should render children", () => {
    render(
      <Card title={"test title"}>
        <div>abc</div>
      </Card>
    );
    expect(screen.getByTestId("sushi-card")).toBeInTheDocument();
    expect(screen.getByTestId("sushi-card-header")).toBeInTheDocument();
    expect(screen.getByTestId("sushi-card-title")).toBeInTheDocument();
    expect(screen.getByTestId("sushi-card-children")).toBeInTheDocument();
    expect(screen.getByTestId("sushi-card-children").classList.contains("p-4")).toBeTruthy();
    expect(screen.getByText("abc")).toBeInTheDocument();
    expect(screen.getByText("test title")).toBeInTheDocument();
  });

  test("it should add custom rounded", () => {
    render(
      <Card title={"test title"} rounded="p-20">
        <div>abc</div>
      </Card>
    );
    expect(screen.getByTestId("sushi-card-children")).toBeInTheDocument();
    expect(screen.getByTestId("sushi-card-children").classList.contains("p-20")).toBeTruthy();
  });
});

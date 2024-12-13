import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Sider from "./Sider";

describe("Sider", () => {
  test("it should success", () => {
    render(<Sider />);
    const node = screen.getByTestId("sider");
    expect(node).toBeInTheDocument();
    expect(node.style.width).toEqual("200px");
  });

  test("it should collapsed when collapsed = true", () => {
    render(<Sider collapsed={true} />);
    const node = screen.getByTestId("sider");
    expect(node).toBeInTheDocument();
    expect(node.style.width).toEqual("80px");
  });

  test("it should show sider trigger when collapsible = true", () => {
    const onCollapse = jest.fn();
    render(<Sider collapsed={true} collapsible onCollapse={onCollapse} />);
    const node = screen.getByTestId("sider");
    expect(node).toBeInTheDocument();
    expect(screen.getByTestId("sushi-layout-sider-trigger")).toBeInTheDocument();

    fireEvent(
      screen.getByTestId("sushi-layout-sider-trigger"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(onCollapse).toBeCalled();
    expect(onCollapse).toBeCalledWith(false, "clickTrigger");
  });

  test("it should show collapsed", () => {
    render(<Sider collapsible />);
    const node = screen.getByTestId("sider");
    expect(node).toBeInTheDocument();
    expect(screen.getByTestId("sushi-layout-sider-trigger")).toBeInTheDocument();
    expect(node.style.width).toEqual("200px");

    fireEvent(
      screen.getByTestId("sushi-layout-sider-trigger"),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(node.style.width).toEqual("80px");
  });
});

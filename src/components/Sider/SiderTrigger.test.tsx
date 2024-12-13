import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import SiderTrigger from "./SiderTrigger";

describe("SiderTrigger", () => {
  test("it should success", () => {
    render(<SiderTrigger width="200px" />);
    const node = screen.getByTestId("sushi-layout-sider-trigger");
    expect(node).toBeInTheDocument();
    expect(screen.getByText("menu")).toBeInTheDocument();
  });

  test("it should show chevron right when collapsed = true", () => {
    render(<SiderTrigger collapsed={true} width="200px" />);
    const node = screen.getByTestId("sushi-layout-sider-trigger");
    expect(node).toBeInTheDocument();
    expect(screen.getByText("clear")).toBeInTheDocument();
  });

  test("should not render when trigger is null", () => {
    render(<SiderTrigger trigger={null} />);
    expect(screen.queryByTestId("sushi-layout-sider-trigger")).toBeNull();
  });

  test("it should show chevron_left when collapsedWith more than 0", () => {
    render(<SiderTrigger width="200px" collapsedWidth="20px" />);
    const node = screen.getByTestId("sushi-layout-sider-trigger");
    expect(node).toBeInTheDocument();
    expect(screen.getByText("chevron_left")).toBeInTheDocument();
  });

  test("it should show chevron_right when collapsedWith more than 0 and collapsed = true", () => {
    render(<SiderTrigger collapsed={true} width="200px" collapsedWidth="20px" />);
    const node = screen.getByTestId("sushi-layout-sider-trigger");
    expect(node).toBeInTheDocument();
    expect(screen.getByText("chevron_right")).toBeInTheDocument();
  });
});

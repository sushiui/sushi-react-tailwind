import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Menu from "./Menu";

describe("Menu", () => {
  test("is should success", async () => {
    const items = [{ key: "key_test", label: "title test" }];
    const { getByTestId } = render(<Menu items={items} />);
    const node = await waitFor(() => getByTestId("sushi-menu"));
    expect(node).toBeInTheDocument();
    expect(getByTestId("sushi-menu-item-key_test")).toBeInTheDocument();
  });

  test("is should add class", async () => {
    const items = [{ key: "key_test", title: "title test" }];
    const { getByTestId } = render(<Menu items={items} className="custom-class" />);
    const node = await waitFor(() => getByTestId("sushi-menu"));
    expect(node).toBeInTheDocument();
    expect(screen.getByTestId("sushi-menu-item-key_test")).toBeInTheDocument();
    expect(screen.getByTestId("sushi-menu").classList.contains("custom-class")).toBeTruthy();
  });

  test("is should set default selected", async () => {
    const items = [{ key: "key_test", title: "title test" }];
    const { getByTestId } = render(<Menu items={items} defaultSelectedKeys={["key_test"]} />);
    const node = await waitFor(() => getByTestId("sushi-menu-item-key_test"));
    expect(node).toBeInTheDocument();
    expect(node.classList.contains("ss-selected")).toBeTruthy();
    expect(node.classList.contains("after:ss-selected-after")).toBeTruthy();
  });

  test("is should add class rc-menu-item-disabled", async () => {
    const items = [{ key: "key_test", title: "title test", disabled: true }];
    const { getByTestId } = render(<Menu items={items} />);
    const node = await waitFor(() => getByTestId("sushi-menu"));
    expect(node).toBeInTheDocument();
    expect(screen.getByTestId("sushi-menu-item-key_test")).toBeInTheDocument();
    expect(screen.getByTestId("sushi-menu-item-key_test").classList.contains("rc-menu-item-disabled")).toBeTruthy();
  });
});

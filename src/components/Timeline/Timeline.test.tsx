import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Timeline from "./Timeline";

describe("Timeline", () => {
  test("is should success", () => {
    render(<Timeline />);
  });

  test("is should display pending item", () => {
    render(<Timeline pending />);

    expect(screen.getByTestId("timeline-item-pending")).toBeInTheDocument();
  });

  test("is should add className timeline-item-last into last timeline item", () => {
    render(
      <Timeline>
        <Timeline.Item>1</Timeline.Item>
        <Timeline.Item>2</Timeline.Item>
        <Timeline.Item data-testid="item-last">3</Timeline.Item>
      </Timeline>
    );

    expect(screen.getByTestId("item-last").className).toContain("timeline-item-last");
  });
});

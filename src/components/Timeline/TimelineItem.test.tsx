import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TimelineItem from "./TimelineItem";
import Timeline from "./Timeline";

describe("TimelineItem", () => {
  test("is can add children element into TimelineItem", () => {
    render(
      <Timeline>
        <Timeline.Item>
          <p data-testid="children-item-1">Solve initial network problems 1</p>
          <p>Solve initial network problems 2</p>
          <p>Solve initial network problems 3 2015-09-01</p>
        </Timeline.Item>
        <Timeline.Item>2</Timeline.Item>
        <Timeline.Item data-testid="item-last">3</Timeline.Item>
      </Timeline>
    );

    expect(screen.getByTestId("children-item-1")).toBeInTheDocument();
  });

  test("is can custom dot in TimelineItem", () => {
    render(
      <Timeline>
        <Timeline.Item data-testid="children-item-1" dot={<div data-testid="custom-dot">B</div>}>
          2
        </Timeline.Item>
      </Timeline>
    );

    expect(screen.getByTestId("custom-dot")).toBeInTheDocument();
  });

  describe("color", () => {
    test("is can use color red in TimelineItem", () => {
      render(
        <Timeline>
          <Timeline.Item data-testid="children-item-1" color="red">
            2
          </Timeline.Item>
        </Timeline>
      );

      expect(
        window.getComputedStyle(
          screen.getByTestId("children-item-1").getElementsByClassName("flex items-center justify-center rounded-full w-4 h-4 border-2")[0]
        ).color
      ).toEqual("rgb(229, 95, 20)");
    });
    test("is can use color green in TimelineItem", () => {
      render(
        <Timeline>
          <Timeline.Item data-testid="children-item-1" color="green">
            2
          </Timeline.Item>
        </Timeline>
      );

      expect(
        window.getComputedStyle(
          screen.getByTestId("children-item-1").getElementsByClassName("flex items-center justify-center rounded-full w-4 h-4 border-2")[0]
        ).color
      ).toEqual("rgb(0, 102, 0)");
    });
    test("is can use color blue in TimelineItem", () => {
      render(
        <Timeline>
          <Timeline.Item data-testid="children-item-1" color="blue">
            2
          </Timeline.Item>
        </Timeline>
      );

      expect(
        window.getComputedStyle(
          screen.getByTestId("children-item-1").getElementsByClassName("flex items-center justify-center rounded-full w-4 h-4 border-2")[0]
        ).color
      ).toEqual("rgb(0, 100, 197)");
    });
  });
});

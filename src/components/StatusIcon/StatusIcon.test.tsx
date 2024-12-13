import StatusIcon from "./StatusIcon";
import React from "react";
import "@testing-library/jest-dom";
import { render } from "@testing-library/react";

describe("StatusIcon", () => {
  it("should create", () => {
    const { getByTestId } = render(<StatusIcon />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeTruthy();
  });

  it("should add class width and height size xs", () => {
    const { getByTestId } = render(<StatusIcon size="xs" />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeFalsy();
    expect(classList.contains("h-status-icon-base")).toBeFalsy();
    expect(classList.contains("w-status-icon-xs")).toBeTruthy();
    expect(classList.contains("h-status-icon-xs")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeTruthy();
  });

  it("should add class width and height size sm", () => {
    const { getByTestId } = render(<StatusIcon size="sm" />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeFalsy();
    expect(classList.contains("h-status-icon-base")).toBeFalsy();
    expect(classList.contains("w-status-icon-sm")).toBeTruthy();
    expect(classList.contains("h-status-icon-sm")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeTruthy();
  });

  it("should add class width and height size lg", () => {
    const { getByTestId } = render(<StatusIcon size="lg" />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeFalsy();
    expect(classList.contains("h-status-icon-base")).toBeFalsy();
    expect(classList.contains("w-status-icon-lg")).toBeTruthy();
    expect(classList.contains("h-status-icon-lg")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeTruthy();
  });

  it("should add class width and height size xl", () => {
    const { getByTestId } = render(<StatusIcon size="xl" />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeFalsy();
    expect(classList.contains("h-status-icon-base")).toBeFalsy();
    expect(classList.contains("w-status-icon-xl")).toBeTruthy();
    expect(classList.contains("h-status-icon-xl")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeTruthy();
  });

  it("should add bg class when type is wait-for-action", () => {
    const { getByTestId } = render(<StatusIcon type={"wait-for-action"} />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeFalsy();
    expect(classList.contains("bg-status-wait-for-action")).toBeTruthy();
  });

  it("should add bg class when type is work-in-progress", () => {
    const { getByTestId } = render(<StatusIcon type={"work-in-progress"} />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeFalsy();
    expect(classList.contains("bg-status-work-in-progress")).toBeTruthy();
  });

  it("should add bg class when type is remind", () => {
    const { getByTestId } = render(<StatusIcon type={"remind"} />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeFalsy();
    expect(classList.contains("bg-status-remind")).toBeTruthy();
  });

  it("should add bg class when type is complete", () => {
    const { getByTestId } = render(<StatusIcon type={"complete"} />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeFalsy();
    expect(classList.contains("bg-status-complete")).toBeTruthy();
  });

  it("should add bg class when type is urgent", () => {
    const { getByTestId } = render(<StatusIcon type={"urgent"} />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeFalsy();
    expect(classList.contains("bg-status-urgent")).toBeTruthy();
  });

  it("should add bg class when type is wait-for-uncontrol", () => {
    const { getByTestId } = render(<StatusIcon type={"wait-for-uncontrol"} />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeFalsy();
    expect(classList.contains("bg-status-wait-for-uncontrol")).toBeTruthy();
  });

  it("should add bg class when type is end", () => {
    const { getByTestId } = render(<StatusIcon type={"end"} />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeFalsy();
    expect(classList.contains("bg-status-end")).toBeTruthy();
  });

  it("should add bg class when type is need-urgent-action", () => {
    const { getByTestId } = render(<StatusIcon type={"need-urgent-action"} />);
    const node = getByTestId("sushi-status-icon");
    expect(node).toBeInTheDocument();
    const classList = node.classList;
    expect(classList.contains("w-status-icon-base")).toBeTruthy();
    expect(classList.contains("h-status-icon-base")).toBeTruthy();
    expect(classList.contains("bg-status-disable")).toBeFalsy();
    expect(classList.contains("bg-status-need-urgent-action")).toBeTruthy();
  });
});

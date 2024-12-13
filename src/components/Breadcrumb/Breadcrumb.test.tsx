import "@testing-library/jest-dom";

import React from "react";
import { render, screen } from "@testing-library/react";
import Breadcrumb from "./Breadcrumb";

describe("Breadcrumb", () => {
  test("should success", () => {
    const routes = [{ label: "Home", href: "/" }, { label: "Component", href: "/" }, { label: "Breadcrumb" }];
    render(<Breadcrumb routes={routes} />);
    expect(screen).toBeTruthy();
  });

  test("should render item with children", () => {
    render(
      <Breadcrumb>
        <div data-testid={"breadcrumb-items"}></div>
      </Breadcrumb>
    );
    expect(screen).toBeTruthy();
    expect(screen.getByTestId("breadcrumb-items")).toBeInTheDocument();
  });
});

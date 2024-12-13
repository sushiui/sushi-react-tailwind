import { render } from "@testing-library/react";
import React from "react";
import Link from "./Link";

describe("Test link", () => {
  it("should render", () => {
    const { container } = render(
      <Link to={"https://google.com"} disabled={false}>
        Test render
      </Link>
    );
    expect(container).toBeInTheDocument;
    expect(container.getElementsByClassName("text-[#00A7CC]").length).toBe(1);
    expect(container.getElementsByClassName("cursor-pointer").length).toBe(1);
  });

  it("should have disable class", () => {
    const { container } = render(
      <Link to={"https://google.com"} disabled={true}>
        Test Disabled
      </Link>
    );
    expect(container).toBeInTheDocument;
    expect(container.getElementsByClassName("color-dark-35 opacity-35").length).toBe(1);
    expect(container.getElementsByClassName("cursor-not-allowed").length).toBe(1);
  });
});

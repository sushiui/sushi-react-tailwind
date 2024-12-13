import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  test("should render", () => {
    render(<Modal visible={true}></Modal>);
    const modal = screen.getByTestId("sushi-modal");
    expect(modal).toBeInTheDocument();
  });

  test("should display correctly", () => {
    const { getByTestId } = render(
      <Modal title={"Test title"} visible={true}>
        Modal Content
      </Modal>
    );
    // header
    // // title
    const title = getByTestId("sushi-modal-title");
    expect(title.innerHTML).toEqual("Test title");
    expect(title.className).toContain("font-bold");
    // // // close
    const close = getByTestId("sushi-modal-close-button");
    expect(close).toBeInTheDocument();

    // // body
    const body = getByTestId("sushi-modal-children");
    expect(body.innerHTML).toEqual("Modal Content");
    // // Footer
    // // // button
    const cacelButton = getByTestId("sushi-modal-cancel");
    const okButton = getByTestId("sushi-modal-ok");
    expect(cacelButton.innerHTML).toEqual("Decline");
    expect(okButton.innerHTML).toEqual("Accept");
    expect(cacelButton.className).toContain("secondary");
    expect(okButton.className).toContain("primary");
  });

  test("should not display", () => {
    render(
      <Modal title={"Test title"} visible={false}>
        Modal Content
      </Modal>
    );
    const modal = screen.getByTestId("sushi-modal");
    expect(modal.className).toContain("hidden");
  });

  describe("footer", () => {
    test("should support footer when footer is react node", () => {
      const { getByTestId } = render(
        <Modal title={"Test title"} visible={true} footer={<button data-testid="button"></button>}>
          Modal Content
        </Modal>
      );

      expect(getByTestId("button")).toBeInTheDocument();
    });

    test("should support footer when footer is array", () => {
      const { getByTestId } = render(
        <Modal title={"Test title"} visible={true} footer={[<button data-testid="button-1"></button>, <button data-testid="button-2"></button>]}>
          Modal Content
        </Modal>
      );

      expect(getByTestId("button-1")).toBeInTheDocument();
      expect(getByTestId("button-2")).toBeInTheDocument();
    });

    test("should support footer when footer is FooterComp", () => {
      const { getByTestId } = render(
        <Modal
          title={"Test title"}
          visible={true}
          footer={
            <Modal.Footer>
              <div data-testid={"custom-footer-comp"}></div>
            </Modal.Footer>
          }
        >
          Modal Content
        </Modal>
      );
      expect(getByTestId("custom-footer-comp")).toBeInTheDocument();
    });
  });
});

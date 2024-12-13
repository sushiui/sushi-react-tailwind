import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import InputUpload from "./InputUpload";
import React from "react";

describe("InputUpload", () => {
  test("should create", () => {
    render(<InputUpload placeholder="select file" data-testid="company-policy" maxSizeMessage="ไม่เกิน 1 MB นะ" />);
    const inputUpload = screen.getByTestId("company-policy-input-upload");
    expect(screen.getByText("select file")).toBeInTheDocument();
    expect(inputUpload.getElementsByClassName("disabled")[0]).toBeUndefined();
    expect(inputUpload.getElementsByClassName("error")[0]).toBeUndefined();
  });

  test("should show accept label", () => {
    const accept = "a,b";
    render(<InputUpload maxSizeMessage="ไม่เกิน 1 MB นะ" acceptType={accept} />);
    expect(screen.queryByText("(ไม่เกิน 1 MB นะ / a / b)")).toBeInTheDocument();
  });

  test('should show placeholder when filename = "test-filename"', () => {
    const filename = "test-filename";
    render(<InputUpload maxSizeMessage="ไม่เกิน 1 MB นะ" fileName={filename} />);
    expect(screen.getByText(filename)).toBeInTheDocument();
  });

  test('should show placeholder when placeholder = "test-placeholder"', () => {
    const placeholder = "test-placeholder";
    render(<InputUpload maxSizeMessage="ไม่เกิน 1 MB นะ" placeholder={placeholder} />);
    expect(screen.getByText(placeholder)).toBeInTheDocument();
  });

  test("should add disabled when disabled = true", () => {
    const { container } = render(<InputUpload maxSizeMessage="ไม่เกิน 1 MB นะ" disabled={true} />);
    expect(container.getElementsByClassName("bg-dark-10 text-dark-35")[0]).toBeInTheDocument();
    const input = container.querySelector("input[type=file]") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.className).toEqual("hidden");
  });

  test("should add disabled when isUploading = true", () => {
    const { container } = render(<InputUpload maxSizeMessage="ไม่เกิน 1 MB นะ" isUploading={true} />);
    expect(container.getElementsByClassName("bg-dark-10 text-dark-35")[0]).toBeInTheDocument();
    const input = container.querySelector("input[type=file]") as HTMLInputElement;
    expect(input).toBeInTheDocument();
    expect(input.className).toEqual("hidden");
    expect(screen.queryByText("Browse")).toBeNull();
  });

  test("should add disabled when error", () => {
    const { container } = render(<InputUpload maxSizeMessage="ไม่เกิน 1 MB นะ" error={<div></div>} />);
    expect(container.getElementsByClassName("border-b-danger-900")[0]).toBeInTheDocument();
  });

  test("should show max file size number", () => {
    render(<InputUpload maxSizeMessage="ไม่เกิน 2 MB นะ" maxFileSizeNumber={20000000} acceptType={"a,b"} />);
    expect(screen.getByTestId("undefined-AcceptSize")).toHaveTextContent("ไม่เกิน 2 MB นะ");
  });

  test("should show custom accept", () => {
    render(
      <InputUpload
        maxSizeMessage="ไม่เกิน 2 MB นะ"
        maxFileSizeNumber={20000000}
        acceptType={"a,b"}
        acceptLabel={<div data-testid="custom-accept">กรุณาอัพโหลดไฟล์</div>}
      />
    );
    expect(screen.getByTestId("custom-accept")).toHaveTextContent("กรุณาอัพโหลดไฟล์");
  });

  test("should be displayed in the color of the placeholder's classname.", () => {
    render(<InputUpload placeholder="customPlaceholder" placeholderClassName="text-red-900" maxSizeMessage="ไม่เกิน 1 MB นะ" />);
    const placeholder = screen.getByText("customPlaceholder");
    expect(placeholder.getAttribute("class")).toContain("text-red-900");
  });
});

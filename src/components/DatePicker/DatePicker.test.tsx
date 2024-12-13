import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import DatePicker from "./DatePicker";

const setDate = () => {};

describe("DatePicker", () => {
  describe("attribute", () => {
    test("should support id, name, value", () => {
      render(<DatePicker data-testid="datePicker" id="idDatePicker" onChange={setDate} />);
      const datePicker = screen.getByTestId("datePicker");
      expect(datePicker).toHaveAttribute("id", "idDatePicker");
    });

    test("should support value", () => {
      render(<DatePicker data-testid="datePicker" value="05/25/2020" onChange={setDate} />);
      expect(screen.getByTestId("datePicker")).toHaveAttribute("value", "05/25/2020");
    });

    test("should enable clickEvent when viewOnly is false", () => {
      render(<DatePicker data-testid="datePicker" viewOnly={false} onChange={setDate} />);
      fireEvent.click(screen.getByTestId("calendar-icon"));
      expect(document.getElementsByClassName("react-datepicker__tab-loop")[0]).not.toBeUndefined();
    });

    test("should disable clickEvent when viewOnly is true", () => {
      render(<DatePicker data-testid="datePicker" viewOnly={true} onChange={setDate} />);
      fireEvent.click(screen.getByTestId("calendar-icon"));
      expect(document.getElementsByClassName("react-datepicker__tab-loop")[0]).toBeUndefined();
    });
  });

  describe("pickerType", () => {
    test("should support pickerType when pickerType is undefined", () => {
      const { getByTestId } = render(<DatePicker data-testid="datePicker" onChange={setDate} />);
      fireEvent.click(getByTestId("datePicker"));
      expect(document.querySelector(".react-datepicker__day")).toBeInTheDocument();
    });

    test("should support pickerType when pickerType is date", () => {
      render(<DatePicker data-testid="datePicker" pickerType="date" onChange={setDate} />);
      fireEvent.click(screen.getByTestId("datePicker"));
      expect(document.querySelector(".react-datepicker__day")).toBeInTheDocument();
    });

    test("should support pickerType when pickerType is month", () => {
      render(<DatePicker data-testid="datePicker" pickerType="month" onChange={setDate} />);
      fireEvent.click(screen.getByTestId("datePicker"));
      expect(document.querySelector(".react-datepicker__month-text")).toBeInTheDocument();
    });

    test("should support pickerType when pickerType is year", () => {
      render(<DatePicker data-testid="datePicker" pickerType="year" onChange={setDate} />);
      fireEvent.click(screen.getByTestId("datePicker"));
      expect(document.querySelector(".react-datepicker__year-text")).toBeInTheDocument();
    });

    test("should support pickerType when pickerType is year", () => {
      render(<DatePicker data-testid="datePicker" pickerType="year" onChange={setDate} />);
      fireEvent.click(screen.getByTestId("datePicker"));
      expect(document.querySelector("react-datepicker__tab-loop")).toBeNull();
    });
  });

  // describe("suffix", () => {
  //   test("should support suffix when suffix is undefined", () => {
  //     render(<DatePicker data-testid="datePicker" />);
  //     expect(document.querySelector(".material-icons-outlined")).toHaveTextContent("calendar_today");
  //   });

  //   test("should support suffix when suffix is react node", () => {
  //     render(<DatePicker data-testid="datePicker" suffix={<Icon name="edit_calendar" />} />);
  //     expect(document.querySelector(".material-icons-outlined")).toHaveTextContent("edit_calendar");
  //   });
  // });
});

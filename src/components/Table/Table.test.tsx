import "@testing-library/jest-dom";
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Table from "./Table";

const dataSource = [
  { key: "1", name: "Mike", age: 32 },
  { key: "2", name: "John", age: 42 },
];

const mockColumns = [
  { title: "Name", dataIndex: "name" },
  { title: "Age", dataIndex: "age" },
];

describe("Table", () => {
  describe("attribute", () => {
    test("should support id", () => {
      render(<Table data-testid="table" id="idTable" />);
      expect(screen.getByTestId("table")).toHaveAttribute("id", "idTable");
    });
  });

  describe("rowKey", () => {
    test("should support rowKey when rowKey is undefined", () => {
      render(<Table data-testid="table" columns={mockColumns} dataSource={dataSource} />);
      const tbody = screen.getByTestId("table").querySelector(".rc-table-tbody");
      const rows = tbody.querySelectorAll(".rc-table-row");
      expect(rows[0]).toHaveAttribute("data-row-key", "1");
      expect(rows[1]).toHaveAttribute("data-row-key", "2");
    });

    test("should support rowKey when rowKey is not undefined", () => {
      render(<Table data-testid="table" columns={mockColumns} dataSource={dataSource} rowKey="name" />);
      const tbody = screen.getByTestId("table").querySelector(".rc-table-tbody");
      const rows = tbody.querySelectorAll(".rc-table-row");
      expect(rows[0]).toHaveAttribute("data-row-key", "Mike");
      expect(rows[1]).toHaveAttribute("data-row-key", "John");
    });
  });

  describe("showHeader", () => {
    test("should support showHeader when showHeader is undefined", () => {
      render(<Table data-testid="table" />);
      expect(screen.getByTestId("table").querySelector(".rc-table-thead")).toBeInTheDocument();
    });

    test("should support showHeader when showHeader is false", () => {
      render(<Table data-testid="table" showHeader={false} />);
      expect(screen.getByTestId("table").querySelector(".rc-table-thead")).not.toBeInTheDocument();
    });

    test("should support showHeader when showHeader is true", () => {
      render(<Table data-testid="table" showHeader={true} />);
      expect(screen.getByTestId("table").querySelector(".rc-table-thead")).toBeInTheDocument();
    });
  });

  describe("loading", () => {
    test("should support loading when loading is undefined", () => {
      render(<Table data-testid="table" />);
      expect(document.querySelector(".pointer-events-none")).not.toBeInTheDocument();
      expect(screen.queryByTestId("sushi-spin")).not.toBeInTheDocument();
      expect(screen.getByTestId("table")).toHaveClass("ss-table");
      expect(screen.queryByText("No Data")).toBeInTheDocument();
    });

    test("should support loading when loading is false", () => {
      render(<Table data-testid="table" />);
      expect(document.querySelector(".pointer-events-none")).not.toBeInTheDocument();
      expect(screen.queryByTestId("sushi-spin")).not.toBeInTheDocument();
      expect(screen.getByTestId("table")).toHaveClass("ss-table");
      expect(screen.queryByText("No Data")).toBeInTheDocument();
    });

    test("should support loading when loading is true", () => {
      render(<Table data-testid="table" loading />);
      expect(document.querySelector(".pointer-events-none")).toBeInTheDocument();
      expect(screen.getByTestId("sushi-spin")).toBeInTheDocument();
      expect(screen.getByTestId("table")).toHaveClass("ss-table opacity-40");
      expect(screen.queryByText("No Data")).not.toBeInTheDocument();
    });
  });

  describe("column", () => {
    test("should support column", () => {
      render(<Table data-testid="table" columns={mockColumns} />);
      const columns = document.querySelectorAll(".rc-table-cell");
      expect(columns[0]).toHaveTextContent("Name");
      expect(columns[1]).toHaveTextContent("Age");
      expect(columns[1].classList.contains("last-th")).toBeTruthy();
    });
  });

  describe("dataSource", () => {
    test("should support dataSource", () => {
      render(<Table data-testid="table" columns={mockColumns} dataSource={dataSource} />);
      const rows = document.querySelectorAll(".rc-table-row");
      expect(rows[0].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("Mike");
      expect(rows[0].querySelectorAll(".rc-table-cell")[1]).toHaveTextContent("32");
      expect(rows[1].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("John");
      expect(rows[1].querySelectorAll(".rc-table-cell")[1]).toHaveTextContent("42");
    });
  });

  describe("sorter", () => {
    test("should support sorter when sorter is undefined", () => {
      render(<Table data-testid="table" columns={mockColumns} dataSource={dataSource} />);
      expect(document.querySelector(".cursor-pointer")).not.toBeInTheDocument();
    });

    test("should support sorter when sorter is false", () => {
      const columns = [{ ...mockColumns[0], sorter: false }];
      render(<Table data-testid="table" columns={columns} dataSource={dataSource} />);
      expect(document.querySelector(".cursor-pointer")).not.toBeInTheDocument();
    });

    test("should support sorter when sorter is true", () => {
      const columns = [{ ...mockColumns[0], sorter: true }];
      render(<Table data-testid="table" columns={columns} dataSource={dataSource} />);
      expect(document.querySelector(".cursor-pointer")).toBeInTheDocument();

      let rows = document.querySelectorAll(".rc-table-row");
      expect(rows[0].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("Mike");
      expect(rows[1].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("John");

      fireEvent.click(document.querySelector(".cursor-pointer"));

      rows = document.querySelectorAll(".rc-table-row");
      expect(rows[0].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("Mike");
      expect(rows[1].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("John");
    });

    test("should support sorter when sorter is compare function", () => {
      const columns = [{ ...mockColumns[0], sorter: { compare: (a, b) => a.name.localeCompare(b.name) } }];
      render(<Table data-testid="table" columns={columns} dataSource={dataSource} />);
      expect(document.querySelector(".cursor-pointer")).toBeInTheDocument();

      fireEvent.click(document.querySelector(".cursor-pointer"));
      let rows = document.querySelectorAll(".rc-table-row");
      expect(rows[0].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("John");
      expect(rows[1].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("Mike");

      fireEvent.click(document.querySelector(".cursor-pointer"));
      rows = document.querySelectorAll(".rc-table-row");
      expect(rows[0].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("Mike");
      expect(rows[1].querySelectorAll(".rc-table-cell")[0]).toHaveTextContent("John");
    });
  });

  describe("sorter arrow", () => {
    test("should support sorter arrow color", () => {
      const columns = [{ ...mockColumns[0], sorter: true }];
      render(<Table data-testid="table" columns={columns} dataSource={dataSource} />);
      let ascendArrow = document.getElementsByClassName("material-icons-outlined")[0];
      let descendArrow = document.getElementsByClassName("material-icons-outlined")[1];

      expect(ascendArrow.classList.contains("text-dark-35")).toBeTruthy();
      expect(descendArrow.classList.contains("text-dark-35")).toBeTruthy();

      fireEvent.click(document.querySelector(".cursor-pointer"));
      ascendArrow = document.getElementsByClassName("material-icons-outlined")[0];
      descendArrow = document.getElementsByClassName("material-icons-outlined")[1];
      expect(ascendArrow.classList.contains("text-dark-35")).toBeFalsy();
      expect(descendArrow.classList.contains("text-dark-35")).toBeTruthy();

      fireEvent.click(document.querySelector(".cursor-pointer"));
      ascendArrow = document.getElementsByClassName("material-icons-outlined")[0];
      descendArrow = document.getElementsByClassName("material-icons-outlined")[1];
      expect(ascendArrow.classList.contains("text-dark-35")).toBeTruthy();
      expect(descendArrow.classList.contains("text-dark-35")).toBeFalsy();

      fireEvent.click(document.querySelector(".cursor-pointer"));
      ascendArrow = document.getElementsByClassName("material-icons-outlined")[0];
      descendArrow = document.getElementsByClassName("material-icons-outlined")[1];
      expect(ascendArrow.classList.contains("text-dark-35")).toBeTruthy();
      expect(descendArrow.classList.contains("text-dark-35")).toBeTruthy();
    });
  });

  describe("emptyText", () => {
    test("should support emptyText", () => {
      render(<Table data-testid="table" emptyText={"No users"} />);
      expect(screen.queryByText("No users")).toBeInTheDocument();
    });
  });
});

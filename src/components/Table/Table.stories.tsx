import React from "react";
import { Story, Meta } from "@storybook/react";
import Table from "./Table";
import { Column, TableProps } from "./Table.types";

const dataSource = [
  {
    key: "1",
    name: "Mike",
    age: 32,
    address: "10 Downing Street",
  },
  {
    key: "2",
    name: "John",
    age: 42,
    address: "New York No. 1 Lake Park",
  },
  {
    key: "3",
    name: "Max",
    age: 17,
    address: "London No. 1 Lake Park",
  },
];

const columns: Column[] = [
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Age",
    dataIndex: "age",
    key: "age",
  },
  {
    title: "Address",
    dataIndex: "address",
    key: "address",
  },
];

export default {
  title: "DataDisplay/Table",
  component: Table,
  argTypes: {},
} as Meta<TableProps>;

const Template: Story<TableProps> = (args) => <Table {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  columns: columns,
  dataSource: dataSource,
};

export const NoData = Template.bind({});
NoData.args = {
  columns: columns,
};

export const CustomNoDataText = Template.bind({});
CustomNoDataText.args = {
  columns: columns,
  emptyText: "ไม่มีข้อมูล",
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
  columns: columns,
};

export const NoHeader = Template.bind({});
NoHeader.args = {
  showHeader: false,
  columns: columns,
  dataSource: dataSource,
};

export const Status = Template.bind({});
Status.args = {
  status: "error",
  columns: columns,
};

export const CustomAlignText = () => (
  <Table
    columns={[
      { ...columns[0], align: "left" },
      { ...columns[1], align: "right" },
      { ...columns[2], align: "center" },
    ]}
    dataSource={dataSource}
  />
);

export const OnlySorterArrow = Template.bind({});
OnlySorterArrow.args = {
  columns: [
    { ...columns[0], sorter: true },
    { ...columns[1], sorter: true },
    { ...columns[2], sorter: true },
  ],
  dataSource: dataSource,
};

export const Sorter = Template.bind({});
Sorter.args = {
  columns: [
    { ...columns[0], sorter: { compare: (a, b) => a.name.localeCompare(b.name) } },
    { ...columns[1], sorter: { compare: (a, b) => a.age - b.age } },
    { ...columns[2], sorter: { compare: (a, b) => a.address.localeCompare(b.address) } },
  ],
  dataSource: dataSource,
};

export const SorterWithRowSpan = Template.bind({});
SorterWithRowSpan.args = {
  columns: [
    {
      ...columns[1],
      sorter: { compare: (a, b) => a.age - b.age },
      onCell: (value) => ({ rowSpan: value.rowSpan }),
    },
    { ...columns[0] },
    { ...columns[2] },
  ],
  dataSource: [
    ...dataSource,
    {
      key: "4",
      name: "Harry",
      age: 20,
      address: "California No. 5 Mountain Park",
      rowSpan: 2,
    },
    {
      key: "5",
      name: "Jimmy",
      age: 20,
      address: "California No. 3 Mountain Park",
      rowSpan: 0,
    },
  ],
};

export const CustomColumn = Template.bind({});
CustomColumn.args = {
  columns: [
    { title: "No.", render: (text, record, index) => <>{`${index + 1}.`} </> },
    { ...columns[0], render: (text, record, index) => <span className="font-bold underline">{text}</span> },
    { ...columns[1], render: (text, record, index) => <>{`(${record.age})`} </> },
  ],
  dataSource: dataSource,
};

export const CustomColumnWidth = Template.bind({});
CustomColumnWidth.args = {
  columns: [
    { ...columns[0], width: "30%" },
    { ...columns[1], width: "10%" },
    { ...columns[2], width: "60%" },
  ],
  dataSource: dataSource,
};

export const Ellipsis = Template.bind({});
Ellipsis.args = {
  columns: [
    { ...columns[0], width: "30%" },
    { ...columns[1], width: "10%", ellipsis: false },
    { ...columns[2], width: "60%", ellipsis: true },
  ],
  dataSource: [{ ...dataSource[0] }, { ...dataSource[1] }, { ...dataSource[2], address: "London No. 1 Lake Park ".repeat(20) }],
};

export const OnRow = Template.bind({});
OnRow.args = {
  columns: columns,
  dataSource: dataSource,
  onRow: (record, rowIndex) => {
    return {
      onClick: (event) => {
        console.log("onClick", rowIndex, record);
      }, // click row
      onDoubleClick: (event) => {
        console.log("onDoubleClick", rowIndex, record);
      }, // double click row
      onContextMenu: (event) => {
        console.log("onContextMenu", rowIndex, record);
      }, // right button click row
      onMouseEnter: (event) => {
        console.log("onMouseEnter", rowIndex, record);
      }, // mouse enter row
      onMouseLeave: (event) => {
        console.log("onMouseLeave", rowIndex, record);
      }, // mouse leave row
    };
  },
};

export const SecondTableColumns = Template.bind({});
SecondTableColumns.args = {
  columns: [
    { ...columns[0], width: "30%" },
    {
      title: "Pfile",
      align: "center",
      dataIndex: "pfile",
      width: "70%",
      className: "x",
      children: [
        { ...columns[1], width: "20%" },
        { ...columns[2], width: "80%" },
      ],
    },
  ],
  dataSource: dataSource,
};

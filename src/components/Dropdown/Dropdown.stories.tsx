import React from "react";
import { Story, Meta } from "@storybook/react";
import Dropdown from "./Dropdown";
import { DropdownProps } from "./Dropdown.types";
import Icon from "../Icon/Icon";
import { Option } from "rc-select";

export default {
  title: "Data Entry/Dropdown",
  component: Dropdown,
  argTypes: {},
} as Meta<DropdownProps>;

const options = [
  { value: "1", label: "option1" },
  { value: "2", label: "option2" },
  { value: "3", label: "option3" },
  { value: "4", label: "option4" },
  { value: "5", label: "option5" },
  { value: "6", label: "option6" },
  { value: "7", label: "option7" },
  { value: "8", label: "this is the long option8" },
];

const Template: Story<DropdownProps> = (args) => (
  <div style={{ width: "160px" }}>
    <Dropdown {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  options: options,
};

export const AllowClear = Template.bind({});
AllowClear.args = {
  options: options,
  defaultValue: "1",
  allowClear: true,
};

export const CustomAllowClear = Template.bind({});
CustomAllowClear.args = {
  options: options,
  defaultValue: "1",
  allowClear: {
    clearIcon: <Icon name="remove_circle" size="text-16px" />,
  },
};

export const Error = Template.bind({});
Error.args = {
  options: options,
  status: "error",
  defaultValue: "1",
  message: "Long error message",
};

export const Warning = Template.bind({});
Warning.args = {
  options: options,
  status: "warning",
  defaultValue: "1",
  message: "Long error message",
};

export const DefaultValue = Template.bind({});
DefaultValue.args = {
  defaultValue: "1",
  options: options,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  defaultValue: "1",
  options: options,
};

export const CustomSize = () => (
  <div className="grid grid-cols-3">
    <div style={{ width: "160px" }}>
      <Dropdown size="small" options={options} />
    </div>
    <div style={{ width: "160px" }}>
      <Dropdown size="middle" options={options} />
    </div>
    <div style={{ width: "160px" }}>
      <Dropdown size="large" options={options} />
    </div>
  </div>
);

export const NoArrow = Template.bind({});
NoArrow.args = {
  showArrow: false,
  options: options,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  bordered: false,
  options: options,
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  placeholder: "Please Select...",
  options: options,
};

export const CustomListHeight = Template.bind({});
CustomListHeight.args = {
  listHeight: 90,
  options: options,
};

export const CustomTextAlign = Template.bind({});
CustomTextAlign.args = {
  textAlign: "right",
  options: options,
};

export const NoEllipsis = Template.bind({});
NoEllipsis.args = {
  ellipsis: false,
  options: options,
};

export const ShowSearch = Template.bind({});
ShowSearch.args = {
  showSearch: true,
  options: options,
};

export const DropdownRender = Template.bind({});
DropdownRender.args = {
  options: options,
  dropdownRender: (menu) => (
    <>
      <div data-testid="rc-custom-dropdown-render" className="rc-custom-dropdown-render">
        Custom render
      </div>
      {menu}
    </>
  ),
};

export const DropdownStyle = Template.bind({});
DropdownStyle.args = {
  dropdownStyle: { zIndex: 10000 },
};

export const CustomDropdownRender = Template.bind({});
CustomDropdownRender.args = {
  optionFilterProp: "children",
  optionLabelProp: "children",
  children: options.map((option) => (
    <Option value={option.value} data-testid={option.value}>
      {option.label}
    </Option>
  )),
};

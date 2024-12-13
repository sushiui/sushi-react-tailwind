import React from "react";
import { Story, Meta } from "@storybook/react";
import Input from "./Input";
import { InputProps } from "./Input.types";
import Icon from "../Icon/Icon";

const style = { width: "160px" };

export default {
  title: "Data Entry/Input",
  component: Input,
  argTypes: {},
} as Meta<typeof Input>;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  placeholder: "Please Enter",
  style: style,
};

export const Error = Template.bind({});
Error.args = {
  status: "error",
  defaultValue: "default value",
  message: "Long error message",
  style: style,
};

export const Warning = Template.bind({});
Warning.args = {
  status: "warning",
  defaultValue: "default value",
  message: "Long error message",
  style: style,
};

export const Success = Template.bind({});
Success.args = {
  status: "success",
  defaultValue: "default value",
  message: "Message success",
  style: style,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  defaultValue: "default value",
  style: style,
};

export const ViewOnly = Template.bind({});
ViewOnly.args = {
  viewOnly: true,
  defaultValue: "default value",
  style: style,
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  bordered: false,
  placeholder: "Please Enter",
  style: style,
};

export const CustomSize = () => (
  <div className="grid grid-cols-3">
    <Input placeholder="Please Enter" size="small" style={style} />
    <Input placeholder="Please Enter" size="middle" style={style} />
    <Input placeholder="Please Enter" size="large" style={style} />
  </div>
);

export const Suffix = Template.bind({});
Suffix.args = {
  placeholder: "Please Enter",
  suffix: <Icon name="search" type="outlined" size="text-16px" />,
  style: style,
};

export const AllowClear = Template.bind({});
AllowClear.args = {
  value: "value",
  allowClear: true,
  style: style,
};

export const CustomAllowClear = Template.bind({});
CustomAllowClear.args = {
  value: "value",
  allowClear: {
    clearIcon: <Icon name="remove_circle" size="text-16px" />,
  },
  style: style,
};

export const CustomTextAlign = Template.bind({});
CustomTextAlign.args = {
  placeholder: "Please Enter",
  textAlign: "right",
  style: style,
};

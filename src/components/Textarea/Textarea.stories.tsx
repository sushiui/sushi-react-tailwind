import { Meta, Story } from "@storybook/react";
import React from "react";
import Textarea from "./Textarea";
import { TextAreaProps } from "./Textarea.types";
import { action } from "@storybook/addon-actions";

export default {
  title: "Data Entry/Textarea",
  component: Textarea,
  argTypes: {},
} as Meta<TextAreaProps>;

const Template: Story<TextAreaProps> = (args) => <Textarea {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  rows: 4,
  cols: 50,
  allowClear: false,
  onChange: action("onChange"),
  onResize: action("onResize"),
};

export const Error = Template.bind({});
Error.args = {
  ...Normal.args,
  status: "error",
  message: "Long error message",
  defaultValue: "Error textarea",
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Normal.args,
  disabled: true,
  value: "Disabled textarea",
};

export const ViewOnly = Template.bind({});
ViewOnly.args = {
  ...Normal.args,
  readOnly: true,
  value: "View only textarea",
};

export const NoBorder = Template.bind({});
NoBorder.args = {
  ...Normal.args,
  bordered: false,
  value: "No border",
};

export const ShowCharacterCounting = Template.bind({});
ShowCharacterCounting.args = {
  ...Normal.args,
  showCount: true,
  maxLength: 10,
  defaultValue: "counting",
  allowClear: {
    clearIcon: <span className="text-16px material-icons-outlined">clear_all</span>,
  },
};

export const AutoHightSize = Template.bind({});
AutoHightSize.args = {
  ...Normal.args,
  autoSize: true,
  placeholder: "Autosize height based on content lines",
};

export const Small = Template.bind({});
Small.args = {
  ...Normal.args,
  size: "small",
  placeholder: "small",
};

export const Middle = Template.bind({});
Middle.args = {
  ...Normal.args,
  size: "middle",
  placeholder: "Middle",
};

export const Large = Template.bind({});
Large.args = {
  ...Normal.args,
  size: "large",
  placeholder: "Large",
};

export const SetHightSize = Template.bind({});
SetHightSize.args = {
  ...Normal.args,
  autoSize: { minRows: 3, maxRows: 5 },
  placeholder: "Autosize height based on content lines",
};

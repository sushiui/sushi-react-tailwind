import React from "react";
import { Story, Meta } from "@storybook/react";
import Radio from "./Radio";
import { RadioProps } from "./Radio.types";

export default {
  title: "Data Entry/Radio",
  component: Radio,
  argTypes: {},
} as Meta<RadioProps>;

const Template: Story<RadioProps> = (args) => <Radio {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  children: "Radio",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Radio",
  disabled: true,
};

export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  children: "Radio",
  disabled: true,
  defaultChecked: true,
};

export const CustomClassName = Template.bind({});
CustomClassName.args = {
  children: "Radio",
  className: "border-red-900",
};

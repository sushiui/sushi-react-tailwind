import React from "react";
import { Story, Meta } from "@storybook/react";
import Button from "./Button";
import { ButtonProps } from "./Button.types";
import Icon from "../Icon/Icon";

export default {
  title: "General/Button",
  component: Button,
  argTypes: {},
} as Meta<ButtonProps>;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: "Primary",
  color: "primary",
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  children: "Secondary",
  color: "secondary",
};

export const Gray = Template.bind({});
Gray.args = {
  children: "Gray",
  color: "gray",
};

export const Green = Template.bind({});
Green.args = {
  children: "Green",
  color: "green",
};

export const Disabled = Template.bind({});
Disabled.args = {
  children: "Disabled",
  disabled: true,
};

export const Loading = Template.bind({});
Loading.args = {
  children: "Loading",
  color: "primary",
  loading: true,
};

export const ShowIcon = Template.bind({});
ShowIcon.args = {
  children: "Submit",
  color: "primary",
  icon: <Icon name="done" type="outlined" />,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  children: "Submit",
  className: "bg-red-900 text-white",
  icon: <Icon name="done" type="outlined" />,
};

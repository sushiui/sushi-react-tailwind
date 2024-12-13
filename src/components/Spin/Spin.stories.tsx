import React from "react";
import { Story, Meta } from "@storybook/react";
import Spin from "./Spin";
import { SpinProps } from "./Spin.types";

export default {
  title: "FeedBack/Spin",
  component: Spin,
  argTypes: {},
} as Meta<SpinProps>;

const Template: Story<SpinProps> = (args) => <Spin {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  size: "default",
};

export const Small = Template.bind({});
Small.args = {
  size: "small",
  color: "gray",
  fillColor: "fill-blue-500",
  duration: "2s",
};

export const Large = Template.bind({});
Large.args = {
  size: "large",
  color: "transparent",
  fillColor: "fill-blue-500",
  duration: "5s",
};

export const Custom = Template.bind({});
Custom.args = {
  children: <div className="text-blue-500">|</div>,
  duration: "2s",
};

import React from "react";
import { Story, Meta } from "@storybook/react";
import { ProgressProps } from "./Progress.types";
import Progress from "./Progress";
export default {
  title: "Feedback/Progress",
  component: Progress,
  argTypes: {},
} as Meta<ProgressProps>;

const Template: Story<ProgressProps> = (args) => <Progress {...args} />;

export const Donut = Template.bind({});
Donut.args = {
  type: "donut",
  strokeWidth: 10,
  strokeColor: "#FFCF36",
  trailColor: "#eee",
  gradientColor: "",
  width: 240,
  percent: 77,
  round: true,
};

export const Bar = Template.bind({});
Bar.args = {
  type: "bar",
  strokeWidth: 5,
  strokeColor: "#FFCF36",
  trailColor: "#eee",
  gradientColor: "",
  width: 240,
  percent: 77,
  round: true,
};

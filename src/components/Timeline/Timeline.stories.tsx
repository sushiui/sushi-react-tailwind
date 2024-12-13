import React from "react";
import { Story, Meta } from "@storybook/react";
import Timeline from "./Timeline";
import Icon from "../Icon/Icon";
import { TimelineProps } from "./Timeline.types";

export default {
  title: "Navigation/Timeline",
  component: Timeline,
  argTypes: {},
} as Meta<TimelineProps>;

const BasicTemplate: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item>Technical testing 2015-09-01</Timeline.Item>
    <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
  </Timeline>
);

export const Basic = BasicTemplate.bind({});
Basic.args = {
  pending: false,
};

const ColorTemplate: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <Timeline.Item>gray</Timeline.Item>
    <Timeline.Item color="blue">blue</Timeline.Item>
    <Timeline.Item color="red">red</Timeline.Item>
    <Timeline.Item color="green">green</Timeline.Item>
  </Timeline>
);

export const Color = ColorTemplate.bind({});
Color.args = {
  pending: false,
};

const CustomTemplate: Story<TimelineProps> = (args) => (
  <Timeline {...args}>
    <Timeline.Item>Create a services site 2015-09-01</Timeline.Item>
    <Timeline.Item color="blue">Solve initial network problems 2015-09-01</Timeline.Item>
    <Timeline.Item dot={<Icon name="lock_clock" />} color="red">
      <p>Technical testing 1</p>
      <p className="text-xs text-slate-500">Technical testing 2</p>
      <p className="text-xs">Technical testing 3 2015-09-01</p>
    </Timeline.Item>
    <Timeline.Item>
      Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo
      inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
    </Timeline.Item>
  </Timeline>
);

export const Custom = CustomTemplate.bind({});
Custom.args = {
  pending: false,
};

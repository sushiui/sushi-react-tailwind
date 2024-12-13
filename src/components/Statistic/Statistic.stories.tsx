import React from "react";
import { Story, Meta } from "@storybook/react";
import Statistic from "./Statistic";
import { FormatConfig, StatisticProps } from "./Statistic.types";
import Icon from "../Icon/Icon";

export default {
  title: "DataDisplay/Statistic",
  component: Statistic,
  argTypes: {},
} as Meta<StatisticProps>;

const Template: Story<StatisticProps> = (args) => <Statistic {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  title: "Active Users",
  value: 112893,
};

export const NoTitle = Template.bind({});
NoTitle.args = {
  value: 112893,
};

export const CustomGroupSeparator = Template.bind({});
CustomGroupSeparator.args = {
  title: "Active Users",
  value: 112893,
  groupSeparator: ", ",
};

export const precision = Template.bind({});
precision.args = {
  title: "Active Users",
  value: 112893,
  precision: 2,
};

export const CustomDecimalSeparator = Template.bind({});
CustomDecimalSeparator.args = {
  title: "Active Users",
  value: 112893.5,
  precision: 2,
  decimalSeparator: ". ",
};

export const CustomValueStyle = Template.bind({});
CustomValueStyle.args = {
  title: "Active Users",
  value: 112893,
  valueStyle: { color: "red" },
};

export const Prefix = Template.bind({});
Prefix.args = {
  title: "Active Users",
  value: 112893,
  prefix: (
    <div className="mt-2px mr-2px">
      <Icon name="info" type="outlined" size="text-16px" />
    </div>
  ),
};

export const Suffix = Template.bind({});
Suffix.args = {
  title: "Active Users",
  value: 98,
  suffix: "%",
};

export const Loading = Template.bind({});
Loading.args = {
  title: "Active Users",
  value: 112893,
  loading: true,
};

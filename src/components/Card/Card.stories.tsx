import React from "react";
import { Story, Meta } from "@storybook/react";
import Card from "./Card";
import { CardProps } from "./Card.types";

export default {
  title: "DataDisplay/Card",
  component: Card,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
} as Meta<CardProps>;

const Template: Story<CardProps> = (args) => <Card {...args} />;

export const Example = Template.bind({});
Example.args = {
  title: "The standard Lorem Ipsum passage, used since the 1500s",
  children: (
    <div>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </div>
  ),
};

export const WithoutTitle = Template.bind({});
WithoutTitle.args = {
  children: (
    <div>
      <div>Card content</div>
      <div>Card content</div>
      <div>Card content</div>
    </div>
  ),
};

export const Loading = Template.bind({});
Loading.args = {
  loading: true,
};

export const LoadingWithHeader = Template.bind({});
LoadingWithHeader.args = {
  title: "The standard Lorem Ipsum passage, used since the 1500s",
  loading: true,
};

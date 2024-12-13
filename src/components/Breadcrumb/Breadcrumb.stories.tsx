import React from "react";
import { Story, Meta } from "@storybook/react";
import Breadcrumb from "./Breadcrumb";
import { BreadcrumbProps } from "./Breadcrumb.types";

export default {
  title: "Navigation/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
} as Meta<BreadcrumbProps>;

const Template: Story<BreadcrumbProps> = (args) => <Breadcrumb {...args} />;

export const Example = Template.bind({});
Example.args = {
  separator: "/",
  routes: [{ label: "Home", href: "/" }, { label: "Component", href: "/" }, { label: "Breadcrumb" }],
};

export const CustomSeparator = Template.bind({});
CustomSeparator.args = {
  separator: ">",
  routes: [{ label: "Home", href: "/" }, { label: "Component", href: "/" }, { label: "Breadcrumb" }],
};

export const CustomSeparatorWithReactNode = Template.bind({});
CustomSeparatorWithReactNode.args = {
  separator: <div className="text-primary-100">Separator</div>,
  routes: [{ label: "Home", href: "/" }, { label: "Component", href: "/" }, { label: "Breadcrumb" }],
};

export const CustomChildren = Template.bind({});
CustomChildren.args = {
  children: (
    <>
      <div>Home</div>
      <div>:</div>
      <div className="text-blue-600">This is my Home</div>
      <div className="text-red-600">{">>>"}</div>
      <div className="text-orange-500">Component</div>
      <div className="text-green-700">{"|"}</div>
      <div className="text-yellow-400">abcdef</div>
    </>
  ),
};

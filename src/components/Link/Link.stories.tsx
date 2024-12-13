import React from "react";
import { Story, Meta } from "@storybook/react";
import Link from "./Link";
import { LinkProps } from "./Link.types";

export default {
  title: "General/Link",
  component: Link,
  argTypes: {},
} as Meta<LinkProps>;

const Template: Story<LinkProps> = (args) => (
  <Link {...args} disabled={args.disabled}>
    {args.children}{" "}
  </Link>
);

export const Enable = Template.bind({});
Enable.args = {
  children: "General Link Normal Style",
  disabled: false,
  to: "https://google.com",
};

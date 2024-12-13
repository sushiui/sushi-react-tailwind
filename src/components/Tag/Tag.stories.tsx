import React from "react";
import { Story, Meta } from "@storybook/react";
import Tag from "./Tag";
import { TagProps } from "./Tag.types";
import Icon from "../Icon/Icon";

export default {
  title: "DataDisplay/Tag",
  component: Tag,
  argTypes: {},
} as Meta<TagProps>;

const Template: Story<TagProps> = (args) => <Tag {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  children: <>ปีข้อมูล</>,
};

export const Link = Template.bind({});
Link.args = {
  children: <a href="https://test.setlink.set.or.th/main">Link</a>,
};

export const Closeable = Template.bind({});
Closeable.args = {
  children: <>closeable</>,
  closable: true,
};

export const CustomCloseIcon = Template.bind({});
CustomCloseIcon.args = {
  children: <>CustomCloseIcon</>,
  closable: true,
  closeIcon: <Icon name="done" type="outlined" size="text-xs" />,
};
export const Color = Template.bind({});
Color.args = {
  children: <>อันนี้สี #fbb035 นะ</>,
  closable: true,
  color: "#fbb035",
};

import { Meta, Story } from "@storybook/react";
import BackTop from "./BackTop";
import { BackTopProps } from "./BackTop.types";

export default {
  title: "Other/BackTop",
  component: BackTop,
  argTypes: {},
} as Meta<BackTopProps>;

const Template: Story<BackTopProps> = (args) => (
  <div id="A" style={{ height: "600vh", padding: 8 }}>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <BackTop {...args}></BackTop>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children: null,
};

const ChildrenTemplate: Story<BackTopProps> = (args) => (
  <div id="A" style={{ height: "600vh", padding: 8 }}>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <div>Scroll to bottom</div>
    <BackTop {...args} />
  </div>
);

export const Custom = ChildrenTemplate.bind({});
Custom.args = {
  children: <div className="cursor-pointer">UP</div>,
};

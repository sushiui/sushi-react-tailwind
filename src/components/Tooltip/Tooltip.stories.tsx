import React from "react";
import Tooltip from "./Tooltip";
import { Story, Meta } from "@storybook/react";
import { TooltipProps } from "./Tooltip.types";

export default {
  title: "DataDisplay/Tooltip",
  component: Tooltip,
  argTypes: {},
} as Meta<typeof Tooltip>;

const Template: Story<TooltipProps> = (args) => (
  <div style={{ marginTop: 50 }}>
    <Tooltip {...args} />
  </div>
);

export const Basic = Template.bind({});
Basic.args = {
  title: "prompt text",
  children: <span>tooltip will show on mouse enter.</span>,
};

export const CustomColor = Template.bind({});
CustomColor.args = {
  title: "prompt text",
  children: <span>tooltip will show on mouse enter.</span>,
  color: "#fcb034",
};

export const CustomPlacement = () => (
  <div style={{ marginTop: 50 }} className="grid grid-cols-4">
    <Tooltip title="prompt text" placement="top">
      <span>top tooltip will show on mouse enter.</span>
    </Tooltip>
    <Tooltip title="prompt text" placement="bottom">
      <span>bottom tooltip will show on mouse enter.</span>
    </Tooltip>
    <Tooltip title="prompt text" placement="topLeft">
      <span>top left tooltip will show on mouse enter.</span>
    </Tooltip>
    <Tooltip title="prompt text" placement="bottomLeft">
      <span>bottom left tooltip will show on mouse enter.</span>
    </Tooltip>
  </div>
);

export const CustomWidth = () => (
  <div style={{ marginTop: 80 }}>
    <Tooltip width={240} title="prompt text prompt text prompt text prompt text prompt text prompt text prompt text">
      <span>custom width tooltip will show on mouse enter.</span>
    </Tooltip>
  </div>
);

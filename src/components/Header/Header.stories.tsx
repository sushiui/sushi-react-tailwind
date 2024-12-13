import React from "react";
import { Story, Meta } from "@storybook/react";
import { HeaderProps } from "./Header.types";
import Header from "./Header";

export default {
  title: "Layout/Header",
  component: Header,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
} as Meta<HeaderProps>;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Basic = Template.bind({});
Basic.args = {
  className: "py-0 px-4",
  children: (
    <div className="flex flex-row justify-between w-full gap-2">
      <div className="w-full flex flex-col items-start justify-center">Right</div>
      <div className="w-full flex flex-col items-center justify-center">Center</div>
      <div className="w-full flex flex-col items-end justify-center">Left</div>
    </div>
  ),
};

export const Logo = Template.bind({});
Logo.args = {
  className: "py-0 px-4",
  children: (
    <div className="flex flex-row gap-2">
      <div className="flex items-center">Logo</div>
      <div className="font-extrabold font-sarabun text-2xl flex items-center">Sushi Design System</div>
    </div>
  ),
};

export const Sticky = (args) => {
  const S = Template.bind({});
  return (
    <div className="overflow-auto bg-gray-200 max-h-[300px]">
      <div className="h-[1000px] relative">
        <S {...args} className="top-0">
          <div className="flex flex-row justify-between w-full gap-2">
            <div className="w-full flex flex-col items-start justify-center">Right</div>
            <div className="w-full flex flex-col items-center justify-center">Center</div>
            <div className="w-full flex flex-col items-end justify-center">Left</div>
          </div>
        </S>
      </div>
    </div>
  );
};

Sticky.args = { position: "sticky" };

export const SetHeight = Template.bind({});
SetHeight.args = {
  className: "h-fit",
  children: (
    <div className="flex flex-row justify-between w-full gap-2 h-[150px]">
      <div className="w-full flex flex-col items-start justify-center">Right</div>
      <div className="w-full flex flex-col items-center justify-center">Center</div>
      <div className="w-full flex flex-col items-end justify-center">Left</div>
    </div>
  ),
};

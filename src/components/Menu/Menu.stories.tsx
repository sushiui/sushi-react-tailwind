import React from "react";
import { Story, Meta } from "@storybook/react";
import Menu from "./Menu";
import { MenuProps } from "./Menu.types";
import Icon from "../Icon/Icon";
import StatusIcon from "../StatusIcon/StatusIcon";

export default {
  title: "Navigation/Menu",
  component: Menu,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
} as Meta<MenuProps>;

const Template: Story<MenuProps> = (args) => <Menu {...args} />;

export const Generic = (args) => {
  const Component = Template.bind({});
  return (
    <div className="w-[240px]">
      <Component {...args} />
    </div>
  );
};
Generic.args = {
  className: "bg-white p-2",
  defaultOpenKeys: ["icon"],
  items: [
    { label: "Home", itemIcon: <Icon name="home" />, key: "home" },
    { label: "Font", itemIcon: <Icon name="euro" />, key: "font", disabled: true },
    {
      label: "Icon",
      key: "icon",
      itemIcon: <Icon name="landscape" type="filled" />,
      children: [
        { label: "Button", key: "button", itemIcon: <div>1</div>, className: "p-0" },
        { label: "Menu", key: "menu", itemIcon: <div>2</div> },
        { label: "Long menu label to test two line menu", key: "long", itemIcon: <div>3</div> },
      ],
    },
    {
      label: "submenu",
      key: "submenu",
      children: [
        { label: "Submenu1", key: "submenu-1" },
        {
          label: "Submenu2",
          key: "submenu-2",
          children: [
            { label: "Submenu2-1", key: "submenu-2-1", disabled: true },
            { label: "Submenu2-2", key: "submenu-2-2" },
          ],
        },
      ],
    },
  ],
};

export const Woven = (args) => {
  const Component = Template.bind({});
  return (
    <div className="w-[240px]">
      <Component {...args} />
    </div>
  );
};

Woven.args = {
  className: "bg-white w-[500px] p-4",
  defaultOpenKeys: ["gov"],
  parentItemBold: true,
  items: [
    {
      label: "สิ่งแวดล้อม",
      key: "environmental",
      itemIcon: <StatusIcon type="work-in-progress">1</StatusIcon>,
      children: [
        {
          label: "การจัดการด้านสิ่งแวดล้อม",
          key: "environmental_1",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "การจัดการพลังงาน",
          key: "environmental_2",

          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          key: "environmental_3",
          label: "การจัดการน้ำ",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          key: "environmental_4",
          label: "การจัดการขยะและของเสีย",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "การจัดการก๊าซเรือนกระจก",
          key: "environmental_5",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
      ],
    },
    {
      label: "สังคม",
      key: "social",
      itemIcon: (
        <div className="w-22px h-22px flex flex-col items-center justify-center">
          <StatusIcon type="work-in-progress">2</StatusIcon>
        </div>
      ),
      children: [
        {
          label: "สิทธิมนุษยชน",
          key: "social_1",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "การปฏิบัติต่อแรงงานอย่างเป็นธรรม",
          key: "social_2",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "ความรับผิดชอบต่อลูกค้า/ผู้บริโภค",
          key: "social_3",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "ความรับผิดชอบต่อชุมชน/สังคม",
          key: "social_4",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
      ],
    },
    {
      label: "บรรษัทภิบาล",
      key: "gov",
      itemIcon: <StatusIcon type="work-in-progress">3</StatusIcon>,
      children: [
        {
          label: "นโยบายโครงสร้างและระบบกำกับดูแลกิจการ",
          key: "gov_1",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "นโยบายและกลยุทธ์ความยั่งยืน",
          key: "gov_2",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "การบริหารความเสี่ยงด้านความยั่งยืน",
          key: "gov_3",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "การจัดการห่วงโซ่อุปทานอย่างยั่งยืน",
          key: "gov_4",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
        {
          label: "การพัฒนานวัตกรรม",
          key: "gov_5",
          itemIcon: (
            <div className="w-22px h-22px flex flex-col items-center justify-center">
              <StatusIcon type="work-in-progress" size="sm" />
            </div>
          ),
        },
      ],
    },
  ],
};

export const MultipleSelected = (args) => {
  const Component = Template.bind({});
  return (
    <div className="w-[240px]">
      <Component {...args} />
    </div>
  );
};
MultipleSelected.args = {
  className: "bg-white",
  defaultOpenKeys: ["icon"],
  defaultSelectedKeys: ["home", "menu", "button"],
  multiple: true,
  items: [
    { label: "Home", itemIcon: <Icon name="home" />, key: "home" },
    { label: "Font", itemIcon: <Icon name="euro" />, key: "font" },
    {
      label: "Icon",
      key: "icon",
      itemIcon: <Icon name="landscape" type="filled" />,
      children: [
        { label: "Button", key: "button" },
        { label: "Menu", key: "menu" },
        { label: "Long menu label to test two line menu", key: "long" },
      ],
    },
  ],
};

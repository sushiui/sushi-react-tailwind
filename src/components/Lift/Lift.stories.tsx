import React from "react";
import { Story, Meta } from "@storybook/react";
import Lift from "./Lift";
import { LiftProps } from "./Lift.types";
import Card from "../Card/Card";
import Header from "../Header/Header";

export default {
  title: "Other/Lift",
  component: Lift,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: "gray",
    },
  },
} as Meta<LiftProps>;

const labels = [
  { title: "First Card", href: "first-card" },
  { title: "Second Card", href: "second-card" },
  { title: "Third Card", href: "third-card" },
  { title: "Fourth Card", href: "fourth-card" },
];

const Contents = () => (
  <>
    <br />
    <Card title="First Card" id="first-card">
      <div className="h-20">Card content</div>
    </Card>
    <br />
    <Card title="Second Card" id="second-card">
      <div className="h-20">Card content</div>
    </Card>
    <br />
    <Card title="Third Card" id="third-card">
      <div className="h-40">Card content</div>
    </Card>
    <br />
    <Card title="Fourth Card" id="fourth-card">
      <div className="h-96">Card content</div>
    </Card>
  </>
);

const Template: Story<LiftProps> = (args) => (
  <>
    <Lift {...args} />
    <Contents />
  </>
);

export const Basic = Template.bind({});
Basic.args = {
  labels: labels,
};

export const CustomBackgroundColor = Template.bind({});
CustomBackgroundColor.args = {
  backgroundColor: "white",
  labels: labels,
};

export const CustomTop = () => (
  <>
    <div className="h-[1000px] relative">
      <Header position="sticky" className="top-0">
        <div className="flex flex-row justify-between w-full gap-2">
          <div className="w-full flex flex-col items-start justify-center">Left</div>
          <div className="w-full flex flex-col items-center justify-center">Center</div>
          <div className="w-full flex flex-col items-end justify-center">Right</div>
        </div>
      </Header>
      <Lift labels={labels} top={48} />
      <Contents />
    </div>
  </>
);

export const CustomScreenRatio = () => {
  const labels = [
    { title: "First Card", href: "custom-screen-first-card" },
    { title: "Second Card", href: "custom-screen-second-card" },
    { title: "Third Card", href: "custom-screen-third-card" },
    { title: "Fourth Card", href: "custom-screen-fourth-card" },
  ];
  return (
    <>
      <Lift labels={labels} screenRatio={0.75} />
      <>
        <br />
        <Card title="First Card" id="custom-screen-first-card">
          <div className="h-20">Card content</div>
        </Card>
        <br />
        <Card title="Second Card" id="custom-screen-second-card">
          <div className="h-20">Card content</div>
        </Card>
        <br />
        <Card title="Third Card" id="custom-screen-third-card">
          <div className="h-40">Card content</div>
        </Card>
        <br />
        <Card title="Fourth Card" id="custom-screen-fourth-card">
          <div className="h-96">Card content</div>
        </Card>
      </>
    </>
  );
};

export const DefultKeyValue = () => {
  const labels = [
    { title: "First Card", href: "default-value-first-card" },
    { title: "Second Card", href: "default-value-second-card" },
    { title: "Third Card", href: "default-value-third-card" },
    { title: "Fourth Card", href: "default-value-fourth-card" },
  ];
  return (
    <>
      <Lift labels={labels} defaultValue="default-value-third-card" />
      <>
        <br />
        <Card title="First Card" id="default-value-first-card">
          <div className="h-20">Card content</div>
        </Card>
        <br />
        <Card title="Second Card" id="default-value-second-card">
          <div className="h-20">Card content</div>
        </Card>
        <br />
        <Card title="Third Card" id="default-value-third-card">
          <div className="h-40">Card content</div>
        </Card>
        <br />
        <Card title="Fourth Card" id="default-value-fourth-card">
          <div className="h-96">Card content</div>
        </Card>
      </>
    </>
  );
};

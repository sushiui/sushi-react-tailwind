import { storiesOf } from "@storybook/react";
import Popover from "./Popover";
import React, { useState } from "react";
import Button from "../Button/Button";
const buttonWidth = 70;
storiesOf("DATADISPLAY/Popover", module)
  .add("Basic", () => {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <div style={{ margin: 20 }}>
        <Popover content={content} title="Title">
          <Button color="primary">Hover me</Button>
        </Popover>
      </div>
    );
  })
  .add("Three ways to trigger", () => {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <div style={{ margin: 20 }}>
        <div className="flex flex-row gap-4">
          <Popover content={content} title="Title" trigger={"hover"}>
            <Button color="secondary">Hover me</Button>
          </Popover>
          <Popover content={content} title="Title" trigger={"focus"}>
            <Button color="secondary">Focus me</Button>
          </Popover>
          <Popover content={content} title="Title" trigger={"click"}>
            <Button color="secondary">Click me</Button>
          </Popover>
        </div>
      </div>
    );
  })
  .add("Placement", () => {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <div style={{ margin: 20, marginLeft: 100 }}>
        <div className="flex flex-col gap-2 items-center" style={{ width: "400px" }}>
          <div className="flex flex-row gap-3">
            <Popover placement="topLeft" content={content} title="Title" trigger={"click"}>
              <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                TL
              </Button>
            </Popover>
            <Popover placement="top" content={content} title="Title" trigger={"click"}>
              <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                Top
              </Button>
            </Popover>
            <Popover placement="topRight" content={content} title="Title" trigger={"click"}>
              <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                TR
              </Button>
            </Popover>
          </div>
          <div className="flex flex-row gap-5 w-full justify-between">
            <div className="flex flex-col gap-3">
              <Popover placement="leftTop" content={content} title="Title" trigger={"click"}>
                <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                  LT
                </Button>
              </Popover>
              <Popover placement="left" content={content} title="Title" trigger={"click"}>
                <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                  Left
                </Button>
              </Popover>
              <Popover placement="leftBottom" content={content} title="Title" trigger={"click"}>
                <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                  LB
                </Button>
              </Popover>
            </div>
            <div className="flex flex-col gap-3">
              <Popover placement="rightTop" content={content} title="Title" trigger={"click"}>
                <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                  RT
                </Button>
              </Popover>
              <Popover placement="right" content={content} title="Title" trigger={"click"}>
                <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                  Right
                </Button>
              </Popover>
              <Popover placement="rightBottom" content={content} title="Title" trigger={"click"}>
                <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                  RB
                </Button>
              </Popover>
            </div>
          </div>
          <div className="flex flex-row gap-3">
            <Popover placement="bottomLeft" content={content} title="Title" trigger={"click"}>
              <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                TL
              </Button>
            </Popover>
            <Popover placement="bottom" content={content} title="Title" trigger={"click"}>
              <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                Top
              </Button>
            </Popover>
            <Popover placement="bottomRight" content={content} title="Title" trigger={"click"}>
              <Button color="secondary" style={{ width: "70px", justifyContent: "center" }}>
                TR
              </Button>
            </Popover>
          </div>
        </div>
      </div>
    );
  })
  .add("Controlling the close of the dialog", () => {
    const [open, setOpen] = useState(false);

    const hide = () => {
      setOpen(false);
    };

    const handleOpenChange = (newOpen: boolean) => {
      setOpen(newOpen);
    };
    return (
      <div style={{ margin: 20 }}>
        <Popover content={<a onClick={hide}>Close</a>} title="Title" open={open} onOpenChange={handleOpenChange}>
          <Button color="primary">Hover me</Button>
        </Popover>
      </div>
    );
  })
  .add("Hide  Arrow", () => {
    const content = (
      <div>
        <p>Content</p>
        <p>Content</p>
      </div>
    );
    return (
      <div style={{ margin: 20 }}>
        <Popover content={content} title="Title" showArrow={false} trigger={"click"}>
          <Button color="primary">Hover me</Button>
        </Popover>
      </div>
    );
  })
  .add("Hover with click popover", () => {
    const [clicked, setClicked] = useState(false);
    const [hovered, setHovered] = useState(false);

    const hide = () => {
      setClicked(false);
      setHovered(false);
    };

    const handleHoverChange = (open: boolean) => {
      setHovered(open);
      setClicked(false);
    };

    const handleClickChange = (open: boolean) => {
      setHovered(false);
      setClicked(open);
    };

    const hoverContent = <div>This is hover content.</div>;
    const clickContent = <div>This is click content.</div>;
    return (
      <Popover style={{ width: 500 }} content={hoverContent} title="Hover title" trigger="hover" open={hovered} onOpenChange={handleHoverChange}>
        <Popover
          content={
            <div>
              {clickContent}
              <a onClick={hide}>Close</a>
            </div>
          }
          title="Click title"
          trigger="click"
          open={clicked}
          onOpenChange={handleClickChange}
        >
          <Button color="primary">Hover and click / 悬停并单击</Button>
        </Popover>
      </Popover>
    );
  });

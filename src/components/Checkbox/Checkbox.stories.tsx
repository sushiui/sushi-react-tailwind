import React, { useState } from "react";
import { Story, Meta, storiesOf } from "@storybook/react";
import Checkbox from "./Checkbox";
import { CheckboxProps } from "./Checkbox.types";
import Button from "../Button/Button";

storiesOf("Data Entry/Checkbox", module)
  .add("Normal", () => {
    return <Checkbox>Checkbox</Checkbox>;
  })
  .add("Disabled", () => {
    return <Checkbox disabled={true}>Checkbox</Checkbox>;
  })
  .add("DisabledChecked", () => {
    return (
      <Checkbox disabled={true} checked={true}>
        Checkbox
      </Checkbox>
    );
  })
  .add("Error", () => {
    return (
      <Checkbox status="error" message="Long error message">
        Checkbox
      </Checkbox>
    );
  })
  .add("Manual reset", () => {
    const [checked, setChecked] = useState(true);
    return (
      <div className="flex flex-col gap-5 w-[200px]">
        <div>
          <Button onClick={() => setChecked((a) => !a)} color="primary">
            Reset
          </Button>
        </div>
        <Checkbox checked={checked}>Checkbox</Checkbox>
      </div>
    );
  })
  .add("Position start", () => {
    return (
      <div className="w-[200px]">
        <Checkbox position="start">การจัดการก๊าซเรือนกระจกและการเปลี่ยนแปลงสภาพภูมิอากาศ</Checkbox>
      </div>
    );
  })
  .add("Position end", () => {
    return (
      <div className="w-[200px]">
        <Checkbox position="end">Checkbox long message กรรมการที่ลาออก/พ้นตําแหน่งรู้ฤาปี (ถ้ามี)</Checkbox>
      </div>
    );
  })
  .add("Position center", () => {
    return (
      <div className="w-[200px]">
        <Checkbox position="center">Checkbox long message กรรมการที่ลาออก/พ้นตําแหน่งรู้ฤา (ถ้ามี)</Checkbox>
      </div>
    );
  });

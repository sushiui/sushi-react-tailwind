import Button from "../Button/Button";
import React, { useState } from "react";
import Icon from "./Icon";
import iconName from "./_icon.json";
import { IconType } from "./Icon.types";

export const AllIcon = () => {
  const types: { label: string; key: IconType }[] = [
    { label: "Outlined", key: "outlined" },
    { label: "Filled", key: "filled" },
    { label: "Rounded", key: "round" },
    { label: "Sharp", key: "sharp" },
    { label: "Two tone", key: "two-tone" },
  ];
  const colors = [
    { label: "text-primary-900", key: "primary-900", bg: "bg-primary-900" },
    { label: "text-secondary-800", key: "secondary-800", bg: "bg-secondary-800" },
    { label: "text-green-800", key: "green-800", bg: "bg-green-800" },
  ];
  const sizes = ["text-xs", "text-sm", "text-base", "text-lg", "text-3xl", "text-9xl"];
  const [color, setColor] = useState<string | undefined>();
  const [type, setType] = useState<IconType>("outlined");
  const [size, setSize] = useState<string | undefined>();
  const keys = Object.keys(iconName);
  return (
    <div>
      <div>
        {types.map(({ label, key }) => {
          const color = key == type ? "primary" : "secondary";
          return (
            <Button color={color} onClick={() => setType(key)}>
              {label}
            </Button>
          );
        })}
      </div>
      <div className="my-3"></div>
      <div className="flex flex-row gap-4">
        {colors.map(({ label, key, bg }) => {
          const classNames = ["p-2 border rounded-md cursor-pointer", bg];
          const className = classNames.join(" ");
          return (
            <div className={className} onClick={() => setColor(`${key}`)}>
              {label}
            </div>
          );
        })}
      </div>
      <div className="my-3"></div>
      <div className="flex flex-row gap-4">
        {sizes.map((s) => {
          const classNames = ["p-2 border rounded-md cursor-pointer"];
          if (s == size) {
            classNames.push("bg-primary-900");
          }
          const className = classNames.join(" ");
          return (
            <div className={className} onClick={() => setSize(s)}>
              {s}
            </div>
          );
        })}
      </div>
      <div className="flex flex-col gap-5">
        {keys.map((key) => {
          const icons = (iconName as Record<string, string[]>)[key] as string[];
          return (
            <div className="flex flex-col gap-5">
              <div className="text-2xl capitalize font-bold">{key}</div>
              <div className="grid grid-cols-4 gap-4">
                {icons.map((icon) => (
                  <div className="flex flex-col items-center">
                    <Icon name={icon} type={type} color={color} size={size} />
                    <div>{icon}</div>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

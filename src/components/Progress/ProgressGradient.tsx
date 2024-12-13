import React from "react";

interface ProgressGradientProps {
  id: string;
  strokeColor: string;
  gradientColor?: string;
  gradientUnits: string;
}

const ProgressGradient = ({ id, strokeColor, gradientColor, gradientUnits }: ProgressGradientProps): React.ReactElement => {
  const axis = gradientUnits === "userSpaceOnUse" ? { x1: "2", y1: "3", x2: "15", y2: "1" } : { x1: "0", y1: "0", x2: "1", y2: "1" };
  return (
    <>
      <svg width="0" height="0">
        <defs>
          <linearGradient data-testid={id} id={id} {...axis} gradientUnits={gradientUnits} gradientTransform="rotate(90)">
            <stop data-testid={`${id}-stroke-color`} offset="0%" stopColor={strokeColor ?? "#FFCF36"} />
            {gradientColor && <stop data-testid={`${id}-gradient-color`} offset="100%" stopColor={gradientColor} />}
          </linearGradient>
        </defs>
      </svg>
    </>
  );
};

export default ProgressGradient;

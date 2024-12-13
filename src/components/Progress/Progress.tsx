import React from "react";
import Bar from "./Bar";
import Donut from "./Donut";
import { ProgressProps } from "./Progress.types";

const Progress = (props: ProgressProps): React.ReactElement => {
  return props.type === "bar" ? <Bar {...props} /> : <Donut {...props} />;
};

Progress.defaultProps = {
  strokeWidth: 10,
  strokeColor: "#FFCF36",
  trailColor: "#EEEEEE",
  gradientColor: "#FCB034",
  width: 240,
  type: "bar",
  percent: 0,
  round: true,
};
export default Progress;

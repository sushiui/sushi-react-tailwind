import React, { useEffect, useRef } from "react";
import ProgressBar from "progressbar.js";
import { ProgressProps } from "./Progress.types";
import ProgressGradient from "./ProgressGradient";

const Donut = ({ percent, strokeWidth, strokeColor, gradientColor, trailColor, width, className, round }: ProgressProps): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const donutRef = useRef<ProgressBar.Circle | null>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }
    if (donutRef.current) {
      donutRef.current.destroy();
    }
    const donut = new ProgressBar.Circle(ref.current, {
      strokeWidth: strokeWidth,
      easing: "easeInOut",
      duration: 1400,
      color: strokeColor,
      trailColor: trailColor,
      trailWidth: strokeWidth,
      svgStyle: null,
      step: (_, circle) => {
        circle.path.setAttribute("stroke", "url(#cl1)");
        if (round) {
          circle.path.setAttribute("stroke-linecap", "round");
          circle.trail.setAttribute("stroke-linecap", "round");
        }
        const value = Math.round(circle.value() * 100);
        if (value < 0) {
          circle.setText("0%");
        } else {
          circle.setText(`${value}%`);
        }
      },
    });
    donut.text.style.color = "#000";
    donut.text.style.fontSize = width ? `${width * 0.15 + 5}px` : "2rem";
    donut.text.style.fontWeight = "bold";
    donut.text.style.width = "100%";
    donut.text.style.textAlign = "center";
    if (percent) {
      donut.animate(percent / 100);
    }

    donutRef.current = donut;
  }, [ref, percent, width, strokeWidth, trailColor, round]);

  const classNames: string[] = ["justify-center", "flex"];

  return (
    <div className={`${classNames.join(" ")} ${className ?? ""}`}>
      <ProgressGradient id="cl1" strokeColor={strokeColor!} gradientColor={gradientColor!} gradientUnits="objectBoundingBox" />
      <div data-testid="donut-chart-progress" id="donut-chart-progress" ref={ref} style={{ width: `${width}px` }}></div>
    </div>
  );
};

export default Donut;

import React, { useEffect, useRef } from "react";
import ProgressBar from "progressbar.js";
import { ProgressProps } from "./Progress.types";
import ProgressGradient from "./ProgressGradient";

const Bar = ({ percent, strokeWidth, strokeColor, width, gradientColor, trailColor, className, round }: ProgressProps): React.ReactElement => {
  const ref = useRef<HTMLDivElement>(null);
  const barRef = useRef<ProgressBar.Line | null>(null);

  useEffect(() => {
    if (ref.current) {
      if (barRef.current) {
        barRef.current.destroy();
      }
      const bar = new ProgressBar.Line(ref.current, {
        strokeWidth: strokeWidth,
        easing: "easeInOut",
        duration: 1400,
        color: "#FFEA82",
        trailColor: trailColor,
        trailWidth: strokeWidth,
        svgStyle: {
          width: width ?? "100%",
          height: "100%",
          marginRight: "8px",
          strokeLinecap: round ? "round" : "butt",
          borderRadius: round ? "23px" : "0px",
        },
        step: (_, bar) => {
          bar.path.setAttribute("stroke", `url(#cl2)`);
          bar.setText(Math.round(bar.value() * 100) + " %");
          const value = Math.round(bar.value() * 100);
          if (value < 0) {
            bar.setText("0%");
          } else {
            bar.setText(`${value}%`);
          }
        },
      });
      bar.text.style.color = "#000";
      bar.text.style.left = "0";
      bar.text.style.display = "contents";
      bar.text.style.color = "#000";
      bar.text.style.fontSize = width ? `${width * 0.15 + 5}px` : "2rem";
      bar.text.style.fontWeight = "bold";
      bar.text.style.width = "100%";
      bar.text.style.textAlign = "center";
      if (percent) {
        bar.animate(percent / 100);
      }
      barRef.current = bar;
    }
  }, [ref, percent, width, strokeWidth, trailColor, round]);

  const classNames: string[] = ["items-center", "flex"];

  return (
    <div>
      <ProgressGradient id="cl2" strokeColor={strokeColor!} gradientColor={gradientColor!} gradientUnits="userSpaceOnUse" />
      <div data-testid="bar-chart-progress" id="bar-chart-progress" className={`${classNames.join(" ")} ${className ?? ""}`} ref={ref}></div>
    </div>
  );
};

export default Bar;
